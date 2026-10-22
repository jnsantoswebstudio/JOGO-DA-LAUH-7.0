(function(){
 'use strict';const cfg=window.LA_CLOUD_CONFIG||{};let session=null,debounce=0;
 const configured=Boolean(/^https:\/\//.test(cfg.url)&&cfg.anonKey);
 async function req(path,options={},authorized=false){if(!configured)throw Error('Servidor de contas não configurado');const headers={'apikey':cfg.anonKey,'Content-Type':'application/json',...options.headers};if(authorized){if(!session?.access_token)throw Error('Faça login primeiro');headers.Authorization='Bearer '+session.access_token}
 const response=await fetch(cfg.url.replace(/\/$/,'')+path,{...options,headers});if(!response.ok){let data={};try{data=await response.json()}catch{}throw Error(data.msg||data.message||data.error_description||'Erro '+response.status)}if(response.status===204)return null;return response.json()}
 async function signIn(email,password){let s=await req('/auth/v1/token?grant_type=password',{method:'POST',body:JSON.stringify({email,password})});session=s;return s.user}
 async function signUp(email,password){return req('/auth/v1/signup',{method:'POST',body:JSON.stringify({email,password})})}
 async function reset(email){return req('/auth/v1/recover',{method:'POST',body:JSON.stringify({email})})}
 async function load(){if(!session)return null;let rows=await req('/rest/v1/lauana_saves?select=data,updated_at&limit=1',{headers:{Accept:'application/json'}},true);return rows[0]||null}
 async function save(data){if(!session)return;let user=session.user;await req('/rest/v1/lauana_saves?on_conflict=user_id',{method:'POST',headers:{Prefer:'resolution=merge-duplicates,return=minimal'},body:JSON.stringify({user_id:user.id,data})},true)}
 function queueSave(data){if(!session)return;clearTimeout(debounce);debounce=setTimeout(()=>save(data).catch(()=>{}),2200)}
 function logout(){session=null;clearTimeout(debounce)}
 window.LauanaCloud={configured,get active(){return Boolean(session)},signIn,signUp,reset,load,save,queueSave,logout};
})();