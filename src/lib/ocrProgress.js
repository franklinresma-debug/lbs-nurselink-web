export function ocrProgress(document = {}) {
  const details = document.extraction_details || {};
  const status = document.extraction_status;
  const active = ['queued', 'processing'].includes(status);
  const blocked = ['quarantined', 'unavailable'].includes(document.security_status) || status === 'blocked';
  const total = Number(details.total_pages);
  const processed = Number(details.processed_pages);
  const hasPages = Number.isFinite(total) && total > 0 && Number.isFinite(processed) && processed >= 0;
  const fresh = !active || (status === 'processing' && details.complete === false);
  const completedPages = hasPages ? Math.min(Math.max(0, processed), total) : 0;
  let percent = null;
  if (blocked || status === 'queued') percent = 0;
  else if (hasPages && fresh) percent = Math.min(active ? 99 : 100, Math.max(0, Math.round(completedPages / total * 100)));
  else if (['extracted', 'needs_input'].includes(status)) percent = 100;
  const qualities = fresh && !blocked
    ? (Array.isArray(details.pages) ? details.pages.map(page => page.ocr_quality) : details.ocr_quality ? [details.ocr_quality] : [])
    : [];
  const scores = qualities.filter(quality => quality && !quality.fallback && typeof quality.mean_confidence === 'number'
    && Number.isFinite(quality.mean_confidence) && quality.mean_confidence >= 0 && quality.mean_confidence <= 100)
    .map(quality => quality.mean_confidence);
  const confidence = scores.length ? Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length * 10) / 10 : null;
  const unreadable = Array.isArray(details.unreadable_pages) ? details.unreadable_pages.length : 0;
  let phase = status === 'queued' ? 'Waiting for extraction' : status === 'failed' ? 'Extraction failed — retry available'
    : blocked ? 'Extraction unavailable' : active ? 'Processing' : 'Processing complete';
  if (['pending', 'scanning'].includes(document.security_status)) phase = 'Checking document security';
  return {percent, confidence, confidencePages: scores.length,
    processedPages: hasPages && fresh ? completedPages : null,
    totalPages: hasPages && fresh ? total : null,
    pages: hasPages && fresh ? `${completedPages} / ${total} pages processed` : null,
    phase, needsReview: status === 'needs_input' || unreadable > 0, unreadable};
}

export function ocrAggregateProgress(documents = []) {
  const totals = documents.reduce((summary, document) => {
    const metric = ocrProgress(document);
    if (!Number.isFinite(metric.totalPages) || metric.totalPages <= 0) return summary;
    return {
      processed: summary.processed + Math.min(metric.processedPages || 0, metric.totalPages),
      total: summary.total + metric.totalPages,
      active: summary.active || ['queued', 'processing'].includes(document?.extraction_status)
        || ['pending', 'scanning', 'scan_failed'].includes(document?.security_status),
      failed: summary.failed || ['failed', 'blocked'].includes(document?.extraction_status)
        || ['quarantined', 'unavailable'].includes(document?.security_status)
    };
  }, {processed: 0, total: 0, active: false, failed: false});

  if (!totals.total) return null;
  const percent = Math.max(0, Math.min(totals.active ? 99 : 100, Math.round(totals.processed / totals.total * 100)));
  return {...totals, percent};
}
