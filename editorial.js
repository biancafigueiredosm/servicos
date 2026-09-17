document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.reveal').forEach((el,index)=>setTimeout(()=>el.classList.add('in'),80+index*65));
  const section=document.querySelector('.all-services');
  const trigger=document.querySelector('.services-trigger');
  const panel=document.querySelector('.services-panel');
  trigger.addEventListener('click',()=>{
    const open=section.classList.toggle('open');
    trigger.setAttribute('aria-expanded',String(open));
    panel.setAttribute('aria-hidden',String(!open));
  });
  document.querySelectorAll('[data-service]').forEach(link=>{
    const message=`Olá! Preciso de ${link.dataset.service} e quero saber mais informações.`;
    link.href=`https://wa.me/5521968103478?text=${encodeURIComponent(message)}`;
    link.target='_blank';link.rel='noopener';
  });
});
