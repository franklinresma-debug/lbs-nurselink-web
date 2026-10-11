import defaultConfig from './nurselink-design-config.json'
import {
  applyAuthHeroSlideCssVariables,
  applyHeroSlideCssVariables,
  authHeroImage,
} from './nurselink-hero-slides.js'

const LOCAL_KEY = 'nurselink-admin-appearance-draft-v1'
const API_ROOT = (import.meta.env.VITE_API_URL || 'https://lbs.amsertech.com/backend').replace(/\/$/, '')
let observer = null
let installed = false
let lastConfig = null

const clone = value => JSON.parse(JSON.stringify(value))

function readConfig(explicit) {
  if (explicit) return explicit
  try {
    const raw = window.localStorage.getItem(LOCAL_KEY)
    if (raw) return JSON.parse(raw)
  } catch {
    // Storage may be unavailable in privacy-restricted browser contexts.
  }
  return clone(defaultConfig)
}

function hasLocalConfig() {
  try { return !!window.localStorage.getItem(LOCAL_KEY) } catch { return false }
}

function resolveBrandAsset(source) {
  const value = String(source || '').trim()
  if (!value) return ''
  if (/^(?:data:|blob:|https?:)/i.test(value)) return value
  if (value.startsWith('/api/')) return `${API_ROOT}${value}`
  return value
}

function resolveLogoSource(placement, source) {
  const resolved = resolveBrandAsset(source)
  if (
    placement === 'sidebar' &&
    /sidebar-a0b815a2-5936-4745-a66d-b0eb4e1d9c8d\.png/i.test(resolved)
  ) {
    return '/lbs-sidebar-logo-cropped-clean.png'
  }
  return resolved
}

function setVar(name, value) {
  if (value === undefined || value === null || value === '') return
  document.documentElement.style.setProperty(name, String(value))
}

function applyGlobal(config) {
  const g = config?.globalDesign || {}
  setVar('--nl-global-font-family', g.fontFamily)
  setVar('--nl-global-h1-size', g.h1Size)
  setVar('--nl-global-h2-size', g.h2Size)
  setVar('--nl-global-button-radius', g.buttonRadius)
}

function applyHeroVars(config) {
  const slider = config?.heroSliders?.registration || config?.heroSliders?.login || {}
  const first = slider.slides?.find?.(s => s.enabled !== false) || slider.slides?.[0]
  const r = first?.responsive || slider.responsive || {}
  setVar('--nl-hero-transition', `${Number(slider.transitionMs ?? 800)}ms`)
  for (const bp of ['desktop', 'tablet', 'mobile']) {
    const v = r[bp] || {}
    setVar(`--nl-hero-fit-${bp}`, v.fit || 'cover')
    setVar(`--nl-hero-x-${bp}`, `${v.x ?? 50}%`)
    setVar(`--nl-hero-y-${bp}`, `${v.y ?? 50}%`)
  }
}

function enabledSlides(scope) {
  const slider = lastConfig?.heroSliders?.[scope]
  const list = Array.isArray(slider?.slides) ? slider.slides : []
  return list.filter(s => s && s.enabled !== false)
}

function syncBrandLogos() {
  document.querySelectorAll('[data-nurselink-logo-placement]').forEach(node => {
    const placement = node.dataset.nurselinkLogoPlacement
    const logo = lastConfig?.branding?.logos?.[placement] || {}
    const source = resolveLogoSource(placement, logo.source)
    const visible = logo.enabled !== false && !!source

    if (node.hidden !== !visible) node.hidden = !visible
    node.classList.toggle('has-nurselink-logo', visible)
    if (!visible) {
      if (node.childNodes.length) node.replaceChildren()
      return
    }

    let image = node.querySelector('img')
    if (!image) {
      image = document.createElement('img')
      image.decoding = 'async'
      node.replaceChildren(image)
    }
    if (image.getAttribute('src') !== source) image.src = source
    image.alt = logo.alt || 'NurseLink organization logo'
    const sizePercentRaw = Number(logo.sizePercent ?? (placement === 'sidebar' ? 220 : 100))
    const sizePercent = Number.isFinite(sizePercentRaw)
      ? Math.max(placement === 'sidebar' ? 220 : 50, Math.min(220, Math.round(sizePercentRaw)))
      : placement === 'sidebar' ? 220 : 100
    if (placement === 'sidebar') {
      const baseWidth = 103
      const baseHeight = 38
      const width = Math.round(baseWidth * sizePercent / 100)
      const height = Math.round(baseHeight * sizePercent / 100)
      const paddingValue = Number(logo.sidePadding ?? 16)
      const sidePadding = Number.isFinite(paddingValue)
        ? Math.max(0, Math.min(40, Math.round(paddingValue)))
        : 0
      const nodeStyles = {
        width: `${width}px`,
        minWidth: `${width}px`,
        maxWidth: `${width}px`,
        flex: '0 0 auto',
        height: `${height}px`,
        minHeight: `${height}px`,
        maxHeight: `${height}px`,
        boxSizing: 'border-box',
        padding: `0 ${sidePadding}px`,
        overflow: 'hidden',
      }
      for (const [name, value] of Object.entries(nodeStyles)) {
        if (node.style.getPropertyValue(name) !== value) {
          node.style.setProperty(name, value, 'important')
        }
      }
      const imageStyles = {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        transform: 'none',
      }
      for (const [name, value] of Object.entries(imageStyles)) {
        if (image.style.getPropertyValue(name) !== value) {
          image.style.setProperty(name, value, 'important')
        }
      }
    }
    // LBS_LOGO_BOX_SETTINGS_V2
    if (placement === 'login') {
      const fit = logo.fitBox !== false;
      const value = Number(logo.sidePadding ?? 5);
      const padding = Number.isFinite(value)
        ? Math.max(0, Math.min(40, Math.round(value))) : 5;
      const properties = {
        '--lbs-logo-width': fit ? 'auto' : 'min(220px, 45%)',
        '--lbs-logo-width-mobile': fit ? 'auto' : 'min(180px, 45%)',
        '--lbs-logo-width-tablet': fit ? 'auto' : 'min(140px, 35%)',
        '--lbs-logo-padding': `${padding}px`,
      };
      for (const [name, value] of Object.entries(properties)) {
        if (image.style.getPropertyValue(name) !== value)
          image.style.setProperty(name, value);
      }
    }

  })
}

function syncLogin() {
  const slider = lastConfig?.heroSliders?.login
  if (!slider?.enabled) return
  const slide = enabledSlides('login')[0]
  if (!slide) return

  const media = document.querySelector('.nl713-login-hero-media')
  if (!media) return
  if (media.dataset.nurselinkReactSlider === '1') return
  const picture = media.querySelector('picture')
  const source = picture?.querySelector('source')
  const img = picture?.querySelector('img')
  if (source && slide.mobileImage) source.srcset = slide.mobileImage
  if (img) img.src = authHeroImage(slide)
  if (img) {
    img.alt = slide.alt || ''
    applyAuthHeroSlideCssVariables(img, slide)
  }
}

function buildPicture(slide) {
  const picture = document.createElement('picture')
  if (slide.mobileImage) {
    const source = document.createElement('source')
    source.media = '(max-width: 680px)'
    source.srcset = slide.mobileImage
    picture.appendChild(source)
  }
  if (slide.tabletImage) {
    const source = document.createElement('source')
    source.media = '(max-width: 1024px)'
    source.srcset = slide.tabletImage
    picture.appendChild(source)
  }
  const img = document.createElement('img')
  img.src = slide.desktopImage || slide.tabletImage || slide.mobileImage || ''
  img.alt = slide.alt || ''
  applyHeroSlideCssVariables(img, slide)
  picture.appendChild(img)
  return picture
}

function syncRegistration() {
  const sliderCfg = lastConfig?.heroSliders?.registration
  if (!sliderCfg?.enabled) return
  const slides = enabledSlides('registration')
  if (!slides.length) return

  const slider = document.querySelector('.nurselink-registration-hero-slider')
  if (!slider) return

  const existing = [...slider.querySelectorAll('.nurselink-registration-hero-slide')]
  const sameCount = existing.length === slides.length
  const sameSources = sameCount && existing.every((el, i) =>
    (el.querySelector('img')?.getAttribute('src') || '') ===
    (slides[i].desktopImage || slides[i].tabletImage || slides[i].mobileImage || '')
  )

  if (!sameSources) {
    slider.innerHTML = ''
    slides.forEach((slide, index) => {
      const node = document.createElement('div')
      node.className = `nurselink-registration-hero-slide${index === 0 ? ' is-active' : ''}`
      node.dataset.nlDesignSlideId = slide.id || String(index)
      node.appendChild(buildPicture(slide))
      slider.appendChild(node)
    })

    const dots = document.querySelector('.nurselink-registration-hero-dots')
    if (dots) {
      dots.innerHTML = ''
      slides.forEach((slide, index) => {
        const dot = document.createElement('button')
        dot.type = 'button'
        dot.className = `nurselink-registration-hero-dot${index === 0 ? ' is-active' : ''}`
        dot.dataset.slide = String(index)
        dot.setAttribute('aria-label', `Show hero image ${index + 1}`)
        dots.appendChild(dot)
      })
    }
  }

  document.documentElement.dataset.nlHeroAutoplay = sliderCfg.autoplay ? '1' : '0'
  document.documentElement.dataset.nlHeroDuration = String(sliderCfg.durationMs || 6000)
  document.documentElement.dataset.nlHeroTransition = sliderCfg.transition || 'fade'
  document.documentElement.dataset.nlHeroDots = sliderCfg.showDots ? '1' : '0'
  document.documentElement.dataset.nlHeroArrows = sliderCfg.showArrows ? '1' : '0'
  document.documentElement.dataset.nlHeroLoop = sliderCfg.loop ? '1' : '0'

  const dots = document.querySelector('.nurselink-registration-hero-dots')
  if (dots) dots.hidden = sliderCfg.showDots === false

  const nodes = [...slider.querySelectorAll('.nurselink-registration-hero-slide')]
  nodes.forEach((node, index) => {
    const slide = slides[index]
    const img = node.querySelector('img')
    if (!slide || !img) return
    applyHeroSlideCssVariables(img, slide)
    img.alt = slide.alt || ''
  })
}

function syncDom() {
  syncBrandLogos()
  syncLogin()
  syncRegistration()
}

async function refreshPublishedConfig() {
  if (hasLocalConfig()) return
  try {
    const response = await fetch(`${API_ROOT}/api/nurselink/appearance-settings`, {
      credentials: 'include',
      headers: { Accept: 'application/json' },
    })
    if (!response.ok) return
    const body = await response.json()
    const branding = body?.data?.branding
    if (!branding) return
    const next = clone(defaultConfig)
    next.branding = branding
    applyNurseLinkDesignConfig(next)
  } catch {
    // Keep the built-in branding when the public appearance endpoint is unavailable.
  }
}

export function applyNurseLinkDesignConfig(config) {
  lastConfig = readConfig(config)
  applyGlobal(lastConfig)
  applyHeroVars(lastConfig)
  document.documentElement.dataset.nurselinkDesignRuntime = 'v6352'
  syncDom()
  return lastConfig
}

export function installNurseLinkDesignRuntime() {
  if (installed) return applyNurseLinkDesignConfig()
  installed = true
  applyNurseLinkDesignConfig()
  refreshPublishedConfig()

  window.addEventListener('nurselink:design-config-changed', event => {
    applyNurseLinkDesignConfig(event.detail || readConfig())
  })
  window.addEventListener('resize', () => syncDom(), { passive: true })

  if (observer) observer.disconnect()
  observer = new MutationObserver(() => {
    window.clearTimeout(observer._nlTimer)
    observer._nlTimer = window.setTimeout(syncDom, 60)
  })
  observer.observe(document.documentElement, { childList: true, subtree: true })
  return lastConfig
}
