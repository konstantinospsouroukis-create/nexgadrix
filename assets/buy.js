/* NEXGADRIX: Kauf-Hilfen (Code kopieren, mobile Kaufleiste) */
(function(){
  var EL=(document.documentElement.lang||'').indexOf('el')===0;
  var T=EL?{copy:'\u0391\u03bd\u03c4\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae \u03ba\u03c9\u03b4\u03b9\u03ba\u03bf\u03cd',ok:'\u2713 \u0391\u03bd\u03c4\u03b9\u03b3\u03c1\u03ac\u03c6\u03b7\u03ba\u03b5',go:'\u03a3\u03c4\u03b7\u03bd \u03c0\u03c1\u03bf\u03c3\u03c6\u03bf\u03c1\u03ac \u2197',ad:'\u0394\u03b9\u03b1\u03c6\u03ae\u03bc\u03b9\u03c3\u03b7'}:{copy:'Code kopieren',ok:'\u2713 Kopiert',go:'Zum Angebot \u2197',ad:'Anzeige'};
  function copy(t,btn){
    var done=function(){var o=btn.textContent;btn.textContent=T.ok;btn.classList.add('ok');setTimeout(function(){btn.textContent=o;btn.classList.remove('ok')},1800)};
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(done,function(){fallback()})}else{fallback()}
    function fallback(){var a=document.createElement('textarea');a.value=t;document.body.appendChild(a);a.select();try{document.execCommand('copy')}catch(e){}a.remove();done()}
  }
  document.querySelectorAll('code').forEach(function(c){
    var t=(c.textContent||'').trim();
    if(!/^(?=.*[0-9])[A-Za-z0-9]{5,14}$/.test(t)||c.dataset.nxCopy)return;
    c.dataset.nxCopy='1';
    var b=document.createElement('button');b.type='button';b.className='nx-copy';b.textContent=T.copy;
    b.setAttribute('aria-label',(EL?'\u0391\u03bd\u03c4\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae \u03ba\u03c9\u03b4\u03b9\u03ba\u03bf\u03cd ':'Rabattcode kopieren: ')+t);
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
    var a=buy.cloneNode(true);a.className='nx-sticky-btn';a.textContent=T.go;
    bar.appendChild(a);
    var ad=document.createElement('small');ad.textContent=T.ad;bar.appendChild(ad);
    document.body.appendChild(bar);document.body.classList.add('has-nx-sticky');
    if('IntersectionObserver' in window){new IntersectionObserver(function(e){bar.classList.toggle('show',!e[0].isIntersecting)}).observe(buy)}else{bar.classList.add('show')}
  }
})();
