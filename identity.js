document.addEventListener('DOMContentLoaded',()=>{
  const brand=document.querySelector('.brand');
  const logo=document.querySelector('.logo-wrap');
  const footer=document.querySelector('.closing');
  if(brand) brand.textContent='studio / 01';
  if(logo){logo.replaceChildren();logo.setAttribute('aria-hidden','true')}
  if(footer) footer.remove();
  const assessoria=document.querySelector('.nav > .portal:first-of-type');
  if(assessoria) assessoria.querySelector('.icon').textContent='✦';
  const proposta=document.querySelector('.nav > .portal:last-of-type');
  if(proposta) proposta.querySelector('.icon').textContent='◎';
  const proposal=document.querySelector('a[href*="social-media-proposal-demo"]');
  if(proposal) proposal.href='https://www.propostamagnetica.com/';

  const servicesLink=document.querySelector('a[href="#servicos"]');
  if(servicesLink){
    const accordion=document.createElement('div');
    const whatsapp=service=>`https://wa.me/5521968103478?text=${encodeURIComponent(`Olá! Preciso de ${service} e quero saber mais informações.`)}`;
    accordion.className='services-accordion';
    accordion.innerHTML=`
      <button class="portal services-trigger" type="button" aria-expanded="false" aria-controls="services-list">
        <span class="icon">◇</span>
        <span class="copy"><b>NOSSOS SERVIÇOS</b><small>Toque para conhecer todas as soluções</small></span>
        <span class="arrow" aria-hidden="true">↗</span>
      </button>
      <div class="services-panel" id="services-list" aria-hidden="true">
        <ol>
          <li><a href="${whatsapp('posicionamento de marca')}" target="_blank" rel="noopener"><span>01</span><b>Posicionamento</b></a></li>
          <li><a href="${whatsapp('uma análise assertiva da minha marca')}" target="_blank" rel="noopener"><span>02</span><b>Análise assertiva</b><small>Análise estratégica de marca</small></a></li>
          <li><a href="${whatsapp('tráfego pago')}" target="_blank" rel="noopener"><span>03</span><b>Tráfego Pago</b></a></li>
          <li><a href="${whatsapp('captação audiovisual')}" target="_blank" rel="noopener"><span>04</span><b>Captação Audiovisual</b></a></li>
          <li><a href="${whatsapp('materiais criativos')}" target="_blank" rel="noopener"><span>05</span><b>Materiais Criativos</b></a></li>
          <li><a href="${whatsapp('consultoria')}" target="_blank" rel="noopener"><span>06</span><b>Consultoria</b></a></li>
          <li><a href="${whatsapp('soluções com IA')}" target="_blank" rel="noopener"><span>07</span><b>Soluções com IA</b></a></li>
          <li><a href="${whatsapp('identidade visual')}" target="_blank" rel="noopener"><span>08</span><b>Identidade Visual</b></a></li>
        </ol>
      </div>`;
    servicesLink.replaceWith(accordion);
    const trigger=accordion.querySelector('.services-trigger');
    const panel=accordion.querySelector('.services-panel');
    trigger.addEventListener('click',()=>{
      const open=accordion.classList.toggle('open');
      trigger.setAttribute('aria-expanded',String(open));
      panel.setAttribute('aria-hidden',String(!open));
    });
  }
});
