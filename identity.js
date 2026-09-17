document.addEventListener('DOMContentLoaded',()=>{
  const brand=document.querySelector('.brand');
  const logo=document.querySelector('.logo-wrap');
  const footer=document.querySelector('.closing strong');
  if(brand) brand.textContent='studio / 01';
  if(logo){logo.replaceChildren();logo.setAttribute('aria-hidden','true')}
  if(footer) footer.textContent='ASSESSORIA DE COMUNICAÇÃO ESTRATÉGICA';
  const proposal=document.querySelector('a[href*="social-media-proposal-demo"]');
  if(proposal) proposal.href='https://www.propostamagnetica.com/';

  const servicesLink=document.querySelector('a[href="#servicos"]');
  if(servicesLink){
    const accordion=document.createElement('div');
    accordion.className='services-accordion';
    accordion.innerHTML=`
      <button class="portal services-trigger" type="button" aria-expanded="false" aria-controls="services-list">
        <span class="icon">02</span>
        <span class="copy"><b>NOSSOS SERVIÇOS</b><small>Toque para conhecer todas as soluções</small></span>
        <span class="arrow" aria-hidden="true">↗</span>
      </button>
      <div class="services-panel" id="services-list" aria-hidden="true">
        <ol>
          <li><span>01</span><b>Posicionamento</b></li>
          <li><span>02</span><b>Análise assertiva</b><small>Análise estratégica de marca</small></li>
          <li><span>03</span><b>Tráfego Pago</b></li>
          <li><span>04</span><b>Captação Audiovisual</b></li>
          <li><span>05</span><b>Materiais Criativos</b></li>
          <li><span>06</span><b>Consultoria</b></li>
          <li><span>07</span><b>Soluções com IA</b></li>
          <li><span>08</span><b>Identidade Visual</b></li>
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
