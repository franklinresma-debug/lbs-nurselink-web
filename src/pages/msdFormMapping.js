// Browser-only review draft. Never infer missing answers, dates or declarations.
export const sections = [
 ['Application details', ['control_number|Control number','position_applied|Position applied','desired_salary|Desired salary','referral_source|How did you know LBS?','pending_application|Pending application with another agency/company','reentry_visa|Middle East re-entry visa (Yes/No)','visa_expiry|Re-entry visa expiration date','visa_country|Re-entry visa country']],
 ['Personal Information', ['last_name|Last name','first_name|First name','middle_name|Middle name','date_applied|Date applied','religion|Religion','highest_education|Highest education','birth_date|Date of birth','birth_place|Place of birth','experience_local|Experience — local','experience_abroad|Experience — abroad','age|Age','civil_status|Civil status','children|Number of children','gender|Gender','nationality|Nationality','weight|Weight (kg)','height|Height (cm)','father_name|Name of father','father_occupation|Father occupation','father_birth_date|Father date of birth','mother_name|Name of mother','mother_occupation|Mother occupation','mother_birth_date|Mother date of birth','spouse_name|Name of spouse','spouse_occupation|Spouse occupation','spouse_birth_date|Spouse date of birth']],
 ['Contact Information', ['primary_address|Primary address','primary_postal_code|Primary postal code','home_phone|Home phone','mobile_phone|Mobile phone','provincial_address|Provincial address','provincial_postal_code|Provincial postal code','provincial_phone|Provincial phone','office_phone|Office phone','email|Email address','skype|Skype account']],
 ['Person to Contact in Case of Urgent Message', ['emergency_name|Contact name','emergency_relationship|Relationship','emergency_address|Contact address','emergency_postal_code|Contact postal code','emergency_mobile|Contact mobile phone','emergency_email_skype|Contact email / Skype','emergency_home_phone|Contact home phone']],
 ['If Currently Employed', ['current_company|Company','current_company_address|Company address','current_company_postal_code|Company postal code','current_company_mobile|Company mobile phone','current_company_email_website|Company website / email','current_company_phone|Company office phone']],
 ['PRC License', ['prc_number|PRC license number','prc_registration_date|PRC registration date','prc_expiry|PRC expiry date','prc_place|PRC place of issuance','prc_rating|PRC rating (%)']],
 ['Saudi Council Health Specialist (for ex-KSA)', ['saudi_number|Saudi Council number','saudi_category|Saudi Council category','saudi_expiry|Saudi Council expiry date']],
 ['Other Information', ['special_skills|Special skills','computer_software|Computer software you can operate','medical_equipment|Equipment / medical instruments you can operate','languages|Languages you speak','training|Trainings & seminars','bls|Basic Life Support / Basic Cardiac Life Support (Yes/No)','bls_issued|BLS date issued','bls_expiry|BLS date expired','membership|Membership / affiliation']],
 ['Documents and Identification', ['passport_number|Passport number','passport_issued|Passport date issued','passport_expiry|Passport expiry date','passport_place|Passport place of issuance','nbi_number|NBI clearance number','nbi_issued|NBI date issued','nbi_expiry|NBI expiry date','nbi_place|NBI place of issuance','gsis_sss|GSIS / SSS number','tin|TIN','philhealth|PhilHealth number']],
 ['Declaration — manual review only', ['declaration_name|Applicant name for declaration','declaration_position|Applying to work as','declaration_country|Applying to work in','declaration_date|Declaration date']],
];
export const educationColumns=['institution|Name of school','city|City / Province','postal_code|School postal code (additional OCR check)','country|School country (additional OCR check)','started_year|Year started (YYYY)','finished_year|Year finished (YYYY)','qualification|Degree / Course','graduated_date|Date graduated (additional OCR check)'];
export const workColumns=['employer|Company name','agency|Agency','address|Company address','joined|Date joined','left|Date left','beds|Number of beds','patient_ratio|Patient ratio','classification|Hospital classification','salary|Salary','position|Position & area of specialty','reason|Reason for leaving','description|Job description / duties'];
const educationLevels=['High School','College','Technical','Vocational','Post Graduate'];
export function mapMsdForm(result){
 const fields={},education=[],work=[],unplaced=[];const d=result?.debug||{},F=d.fields||{},R=d.records||{};
 const put=(key,value,source)=>{if(value!==undefined&&value!==null&&String(value).trim()!=='')fields[key]={value:String(value),origin:'ocr',confidence:source?.confidence??null,source_pages:source?.source_pages||[],evidence:source?.source_excerpt||''};};
 const aliases={last_name:'last_name',first_name:'first_name',middle_name:'middle_name',highest_nursing_education:'highest_education',birth_date:'birth_date',birth_place:'birth_place',religion:'religion',civil_status:'civil_status',gender:'gender',sex:'gender',address_line1:'primary_address',postal_code:'primary_postal_code',phone:'mobile_phone',email:'email',primary_license_number:'prc_number',passport_number:'passport_number'};
 const directKeys=new Set(sections.filter(([title])=>!title.startsWith('Declaration')).flatMap(([,cols])=>cols.map(c=>c.split('|')[0])));
 for(const [key,f] of Object.entries(F)){
  let target=aliases[key]||(directKeys.has(key)?key:null);
  if(key==='primary_license_number'&&!/(^|[^a-z])PRC(?=\s|license|registration|number)/i.test(f.source_excerpt||''))target=null;
  if(key==='phone'&&!/^(\+63|0)9/.test(String(f.value))&&!/mobile|cell/i.test(f.source_excerpt||''))target=null;
  if(target)put(target,f.value,f);else unplaced.push({key,value:f.value,confidence:f.confidence});
 }
 // Preserve explicitly labeled personal data, including invalid email text, for review.
 for(const r of R.personal_data||[]){
  const label=(r.label||'').toLowerCase().replace(/\s*\(.*\)$/,'').trim();
  const key=({'religion':'religion','civil status':'civil_status','marital status':'civil_status','email':'email','email address':'email','age':'age','passport':'passport_number','passport number':'passport_number'})[label];
  if(key&&!fields[key]){put(key,r.value,r);if(fields[key]&&/review/i.test(r.label||''))fields[key].confidence=Math.min(fields[key].confidence??.5,.5);}
 }
 const cell=(value,source)=>value===undefined||value===null||value===''?{value:'',origin:'missing'}:{value:String(value),origin:'ocr',confidence:source?.confidence??null,source_pages:source?.source_pages||[],evidence:source?.source_excerpt||''};
 const companyAddress=r=>[...new Set([r.address,r.city,r.province,r.postal_code,r.country].filter(Boolean))].join(', ');
 for(const r of R.education||[]){const q=r.qualification||'';const levelHint=r.education_level||'';const level=/Primary/i.test(levelHint)?'Primary':/High School|Secondary/i.test(levelHint)?'High School':/post.?grad|master|doctor/i.test(q)?'Post Graduate':/bachelor|associate|college|BSN/i.test(q)?'College':/high school|secondary/i.test(q)?'High School':/vocational/i.test(q)?'Vocational':/technical/i.test(q)?'Technical':'Unclassified — review';education.push({level,values:{institution:cell(r.institution,r),city:cell(r.city||r.province||r.location,r),postal_code:cell(r.postal_code,r),country:cell(r.country,r),qualification:cell(q,r),started_year:cell(/^\d{4}/.exec(r.started_on||'')?.[0],r),finished_year:cell(/^\d{4}/.exec(r.completed_on||'')?.[0],r),graduated_date:cell(r.completed_on,r)}});}
 for(const level of educationLevels)if(!education.some(r=>r.level===level))education.push({level,values:{}});
 // Only an identified PRC credential can populate PRC-specific boxes. Never combine candidates silently.
 const allPrc=(R.credentials||[]).filter(r=>!(/\b(IELTS|OET|BLS|ACLS|PALS|NCLEX|SCFHS|Saudi|passport|NBI)\b/i.test(r.title||''))&&(r.credential_kind==='prc'||/(^|[^a-z])PRC(?=\s|license|registration|number)|Professional Regulation Commission/i.test([r.title,r.issuing_authority,r.source_excerpt].filter(Boolean).join(' '))));
 const nursingPrc=allPrc.filter(r=>/registered\s+nurse|\bRN\b/i.test(r.title||''));
 const prc=nursingPrc.length===1?nursingPrc:allPrc;
 for(const r of allPrc.filter(r=>!prc.includes(r)))unplaced.push({key:'Additional PRC professional license',value:r,reason:'Separate profession; retained without combining with nursing license'});
 if(prc.length===1){const r=prc[0];for(const [key,value] of Object.entries({prc_number:r.credential_number,prc_registration_date:r.registered_on,prc_expiry:r.expires_on,prc_place:r.place_of_issuance,prc_rating:r.rating})){
  if(value!==undefined&&value!==null&&String(value).trim()!==''){const current=fields[key];if(current&&current.value!==String(value)){unplaced.push({key,value,reason:'Conflicting PRC field — review required'});continue;}put(key,value,r);}
 }}else if(prc.length>1)unplaced.push({key:'PRC candidates',value:prc,reason:'Multiple PRC credentials — choose values manually; no automatic merging'});
 const saudi=(R.credentials||[]).filter(r=>r.credential_kind==='saudi'||/Saudi Commission for Health Specialties|SCFHS/i.test([r.title,r.issuing_authority,r.source_excerpt].filter(Boolean).join(' ')));
 if(saudi.length===1){const r=saudi[0];put('saudi_number',r.credential_number,r);put('saudi_category',r.title,r);put('saudi_expiry',r.expires_on,r);}
 else if(saudi.length>1)unplaced.push({key:'Saudi credential candidates',value:saudi,reason:'Multiple Saudi credentials — review required'});
 for(const r of R.employment||[])work.push({values:{employer:cell(r.employer||r.company,r),position:cell([r.position_title||r.position,r.department].filter(Boolean).join(' — '),r),joined:cell(r.started_on||r.start_date,r),left:cell(r.is_current?'Present':r.ended_on||r.end_date,r),address:cell(companyAddress(r),r),agency:cell(r.agency,r),beds:cell(r.number_of_beds||r.bed_capacity,r),patient_ratio:cell(r.patient_ratio,r),classification:cell(r.hospital_classification,r),salary:cell(r.salary,r),reason:cell(r.reason_for_leaving,r),description:cell(r.responsibilities||r.job_description,r)}});
 while(work.length<4)work.push({values:{}});
 const joinRecords=(key,rows,render)=>{if(rows?.length)put(key,rows.map(render).filter(Boolean).join('\n'),{confidence:Math.min(...rows.map(r=>r.confidence??0)),source_pages:[...new Set(rows.flatMap(r=>r.source_pages||[]))],source_excerpt:rows.map(r=>r.source_excerpt||'').join('\n')});};
 joinRecords('languages',R.languages,r=>[r.language||r.name,r.proficiency].filter(Boolean).join(' — '));
 joinRecords('training',[...(R.training||[]),...(R.credentials||[]).filter(r=>/\b(BLS|ACLS|PALS|life support)\b/i.test(r.title||''))],r=>[r.title,r.provider||r.issuing_authority,r.completed_on].filter(Boolean).join(' — '));
 joinRecords('special_skills',R.skills,r=>r.skill||r.name||r.text);
 for(const key of ['first_name','middle_name','last_name'])if(fields[key]&&F[key]?.name_split_ambiguous)fields[key].review_note='Suggested name split only. Confirm given, middle and family names against the original document.';
 if(fields.email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.value))fields.email.review_note='Incomplete or invalid email in source text. Verify the original; no domain was added.';
 if(fields.primary_address&&F.address_line1?.review_note)fields.primary_address.review_note=F.address_line1.review_note;
 if(fields.date_applied&&F.date_applied?.review_note)fields.date_applied.review_note=F.date_applied.review_note;
 if(fields.birth_date&&F.birth_date?.review_note)fields.birth_date.review_note=F.birth_date.review_note;
 if(fields.age)fields.age.review_note='Age as stated in the document; not recalculated as current age.';
 if(fields.primary_address&&/\[verify/i.test(fields.primary_address.evidence))fields.primary_address.review_note='The source marks this address for OCR verification.';
 // A historical employer does not establish current employment; BLS training is not proof of an active BLS credential.
 return {version:'msd-review-v1',fields,education,work,unplaced,review_only:true};
}
