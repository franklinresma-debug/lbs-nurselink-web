(() => {
  'use strict';
  const endpoint='/backend/api/nurselink/admin/operations-center/settings/email-setup';
  const form=document.getElementById('emailSetupForm'),notice=document.getElementById('setupNotice');
  const field=name=>form.elements.namedItem(name);
  let dirty=false;
  const show=(message,type='')=>{notice.textContent=message;notice.className=type;};
  async function request(path='',options={}) {
    const cookie=document.cookie.split('; ').find(row=>row.startsWith('XSRF-TOKEN='));
    const headers={Accept:'application/json','Content-Type':'application/json'};
    if(cookie) headers['X-XSRF-TOKEN']=decodeURIComponent(cookie.slice('XSRF-TOKEN='.length));
    const response=await fetch(endpoint+path,{credentials:'include',...options,headers});
    const data=await response.json();
    if(!response.ok) {
      if(response.status===401) throw new Error('Sign in at Administrator sign-in, then return to Email Setup.');
      throw new Error(data.message || 'Unable to complete this request.');
    }
    return data;
  }
  function populate(data) {
    field('mailbox').value=data.mailbox || '';
    field('allowed_admins').value=(data.allowed_admins || []).join('\n');
    for(const kind of ['imap','smtp']) {
      for(const key of ['host','port','encryption','username']) field(`${kind}.${key}`).value=data[kind]?.[key] ?? '';
      field(`${kind}.password`).value='';
      document.getElementById(`${kind}PasswordStatus`).textContent=data[kind]?.password_configured?'Password saved. Leave blank to keep it.':'No password saved.';
    }
    field('sync_enabled').checked=!!data.sync_enabled;
    field('smtp_enabled').checked=!!data.smtp_enabled;
    dirty=false; form.hidden=false;
  }
  function busy(value){form.querySelectorAll('button').forEach(button=>button.disabled=value);}
  form.addEventListener('input',()=>dirty=true);
  form.addEventListener('change',()=>dirty=true);
  form.addEventListener('submit',async event=>{
    event.preventDefault();busy(true);show('Saving settings…');
    const data={mailbox:field('mailbox').value.trim(),allowed_admins:field('allowed_admins').value.split(/[\n,;]+/).map(value=>value.trim()).filter(Boolean),sync_enabled:field('sync_enabled').checked,smtp_enabled:field('smtp_enabled').checked};
    for(const kind of ['imap','smtp']) {data[kind]={};for(const key of ['host','port','encryption','username','password']) data[kind][key]=field(`${kind}.${key}`).value;data[kind].port=Number(data[kind].port);}
    try { const saved=await request('',{method:'PUT',body:JSON.stringify(data)});populate(saved.data);show(saved.message,'success'); }
    catch(error){show(error.message,'error');}finally{busy(false);}
  });
  form.querySelectorAll('[data-test]').forEach(button=>button.addEventListener('click',async()=>{
    if(dirty){show('Save your changes before checking the connection.','error');return;}
    busy(true);show('Checking secure connection. No email will be sent…');
    try {const result=await request('/test',{method:'POST',body:JSON.stringify({connection:button.dataset.test})});show(result.message,'success');}
    catch(error){show(error.message,'error');}finally{busy(false);}
  }));
  request().then(result=>{populate(result.data);show('Settings loaded. Save changes before checking a connection.');}).catch(error=>show(error.message,'error'));
})();
