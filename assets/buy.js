/* NEXGADRIX: Kauf-Hilfen (Code kopieren, mobile Kaufleiste) */
(function(){
  function copy(t,btn){
    var done=function(){var o=btn.textContent;btn.textContent='✓ Kopiert';btn.classList.add('ok');setTimeout(function(){btn.textContent=o;btn.classList.remove('ok')},1800)};
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(done,function(){fallback()})}else{fallback()}
    function fallback(){var a=document.createElement('textarea');a.value=t;document.body.appendChild(a);a.select();try{document.execCommand('copy')}catch(e){}a.remove();done()}
  }
  document.querySelectorAll('code').forEach(function(c){
    var t=(c.textContent||'').trim();
    if(!/^(?=.*[0-9])[A-Za-z0-9]{5,14}$/.test(t)||c.dataset.nxCopy)return;
    c.dataset.nxCopy='1';
    var b=document.createElement('button');b.type='button';b.className='nx-copy';b.textContent='Code kopieren';
    b.setAttribute('aria-label','Rabattcode '+t+' kopieren');
    b.addEventListener('click',function(){copy(t,b)});
    c.insertAdjacentElement('afterend',b);
  });
  var buy=document.querySelector('a.affiliate');
  var h1=document.querySelector('h1');
  if(buy&&h1&&!document.querySelector('.nx-sticky')){
    var price=document.querySelector('.p-hero .price strong');
    var bar=document.createElement('div');bar.className='nx-sticky';
    bar.innerHTML='<div class="nx-sticky-t"><b></b><span></span></div>';
    bar.querySelector('b').textContent=h1.textContent;
    bar.querySelector('span').textContent=price?price.textContent:'';
    var a=buy.cloneNode(true);a.className='nx-sticky-btn';a.textContent='Zum Angebot ↗';
    bar.appendChild(a);
    var ad=document.createElement('small');ad.textContent='Anzeige';bar.appendChild(ad);
    document.body.appendChild(bar);document.body.classList.add('has-nx-sticky');
    if('IntersectionObserver' in window){new IntersectionObserver(function(e){bar.classList.toggle('show',!e[0].isIntersecting)}).observe(buy)}else{bar.classList.add('show')}
  }
})();
