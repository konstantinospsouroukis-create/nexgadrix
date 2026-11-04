(function(){
  var M=[
    {c:'nx-s1',t:'Ratgeber',open:1,l:[
      ['Alle Ratgeber','/ratgeber/'],
      ['Smart Home für Einsteiger','/ratgeber/smart-home-einstieg'],
      ['Matter, Thread und Zigbee','/ratgeber/matter-thread-zigbee'],
      ['Smarte Steckdosen','/ratgeber/smarte-steckdosen'],
      ['Smarte Heizkörperthermostate','/ratgeber/heizkoerperthermostate-smart'],
      ['Außenkamera kaufen','/ratgeber/ueberwachungskamera-aussen'],
      ['Stromkosten berechnen','/ratgeber/stromkosten-berechnen'],
      ['Powerstation kaufen','/ratgeber/powerstation-kaufen'],
      ['Powerbank kaufen','/ratgeber/powerbank-kaufen'],
      ['Powerbank im Flugzeug','/ratgeber/powerbank-im-flugzeug'],
      ['USB-C-Ladegeräte','/ratgeber/usb-c-ladegeraete'],
      ['USB-C-Kabel erklärt','/ratgeber/usb-c-kabel-erklaert'],
      ['Innenkamera kaufen','/ratgeber/innenkamera-kaufen'],
      ['Alexa-Lautsprecher kaufen','/ratgeber/alexa-lautsprecher-kaufen'],
      ['Smarte IR-Fernbedienung','/ratgeber/ir-fernbedienung-smart-home'],
      ['KI-Gadgets im Alltag','/ratgeber/ki-gadgets']]},
    {c:'nx-s2',t:'Kategorien',l:[
      ['Smart Home','/kategorien/smart-home'],
      ['Laden & Energie','/kategorien/laden-energie'],
      ['KI-Gadgets','/kategorien/ki-gadgets'],
      ['Mobile Technik','/kategorien/mobile-technik']]},
    {c:'nx-s3',t:'Produkte',l:[['Produktfinder (9 Produkte)','/produkte/']]}
  ];
  var S=[['📰','RSS-Feed','/feed.xml'],['✉️','Newsletter','/newsletter'],['❓','Häufige Fragen','/faq'],['💬','Kontakt','/kontakt'],['🔎','Transparenz','/redaktion'],['ℹ️','Über uns','/ueber-uns']];
  function el(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e}
  function build(){
    var ov=el('div','nx-ov');ov.setAttribute('role','dialog');ov.setAttribute('aria-modal','true');ov.setAttribute('aria-label','Menü');
    var p=el('div','nx-panel');
    var head=el('div','nx-head','<b>NEXGADRIX</b>');
    var x=el('button','nx-close','×');x.type='button';x.setAttribute('aria-label','Menü schließen');head.appendChild(x);p.appendChild(head);
    M.forEach(function(s){
      var d=el('details',s.c);if(s.open)d.open=true;
      d.appendChild(el('summary',null,s.t));
      var u=el('ul');s.l.forEach(function(i){u.appendChild(el('li',null,'<a href="'+i[1]+'">'+i[0].replace(/&/g,'&amp;')+'</a>'))});
      d.appendChild(u);p.appendChild(d);
    });
    var d=el('details','nx-s4');d.open=true;d.appendChild(el('summary',null,'Service'));
    var g=el('div','nx-service');S.forEach(function(i){g.appendChild(el('a',null,'<span aria-hidden="true">'+i[0]+'</span>'+i[1])).setAttribute('href',i[2])});
    d.appendChild(g);p.appendChild(d);
    var f=el('div','nx-font','<button type="button" aria-label="Schrift kleiner" data-d="-1">−</button><span>Schriftgröße</span><button type="button" aria-label="Schrift größer" data-d="1">+</button>');
    p.appendChild(f);ov.appendChild(p);document.body.appendChild(ov);
    function close(){ov.classList.remove('open');btn.focus()}
    x.onclick=close;ov.addEventListener('click',function(e){if(e.target===ov)close()});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&ov.classList.contains('open'))close()});
    f.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;setZ(Math.max(.85,Math.min(1.4,getZ()+(+b.dataset.d)*.1)))});
    return ov;
  }
  function getZ(){try{return parseFloat(localStorage.getItem('nx-zoom'))||1}catch(e){return 1}}
  function setZ(z){z=Math.round(z*100)/100;try{localStorage.setItem('nx-zoom',z)}catch(e){}apply(z)}
  function apply(z){var m=document.querySelector('main');if(m)m.style.zoom=z===1?'':z}
  var btn,ov;
  function init(){
    apply(getZ());
    btn=el('button','nx-menubtn','☰ Menü');btn.type='button';btn.setAttribute('aria-haspopup','dialog');
    var h=document.querySelector('header nav')||document.querySelector('header');
    (h&&h.parentNode?h.parentNode:document.body).appendChild(btn);
    btn.onclick=function(){if(!ov)ov=build();ov.classList.add('open');ov.querySelector('.nx-close').focus()};
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
/* Microsoft Clarity – wird erst nach Einwilligung geladen */
(function(){
  var ID='z8ayjdw5p6',K='nx-consent-clarity';
  var el=(document.documentElement.lang||'').indexOf('el')===0;
  var T=el?{t:'Χρησιμοποιούμε το Microsoft Clarity (cookies) για να καταλάβουμε πώς χρησιμοποιείται η σελίδα και να τη βελτιώσουμε. Συμφωνείς;',a:'Αποδοχή',n:'Απόρριψη',l:'Απόρρητο'}
           :{t:'Wir möchten Microsoft Clarity (Cookies) nutzen, um zu verstehen, wie unsere Seite verwendet wird, und sie zu verbessern. Einverstanden?',a:'Akzeptieren',n:'Ablehnen',l:'Datenschutz'};
  function get(){try{return localStorage.getItem(K)}catch(e){return null}}
  function set(v){try{localStorage.setItem(K,v)}catch(e){}}
  function load(){
    if(window.clarity)return;
    (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script",ID);
    window.clarity('consentv2',{ad_Storage:'denied',analytics_Storage:'granted'});
  }
  function banner(){
    if(document.getElementById('nx-cb'))return;
    var b=document.createElement('div');b.id='nx-cb';b.setAttribute('role','dialog');b.setAttribute('aria-label',T.l);
    b.style.cssText='position:fixed;left:12px;right:12px;bottom:12px;z-index:9999;max-width:640px;margin:0 auto;background:#111827;color:#fff;border-radius:12px;padding:14px 16px;box-shadow:0 6px 24px rgba(0,0,0,.3);font:14px/1.45 system-ui,-apple-system,sans-serif';
    b.innerHTML='<p style="margin:0 0 10px">'+T.t+' <a href="/datenschutz#clarity" style="color:#93c5fd">'+T.l+'</a></p><div style="display:flex;gap:8px;flex-wrap:wrap"><button type="button" data-v="no" style="flex:1;min-width:120px;padding:9px;border-radius:8px;border:1px solid #fff;background:transparent;color:#fff;font:inherit;cursor:pointer">'+T.n+'</button><button type="button" data-v="yes" style="flex:1;min-width:120px;padding:9px;border-radius:8px;border:1px solid #fff;background:#fff;color:#111827;font:inherit;cursor:pointer">'+T.a+'</button></div>';
    b.addEventListener('click',function(e){var x=e.target.closest('button');if(!x)return;set(x.dataset.v);b.remove();if(x.dataset.v==='yes')load();else if(window.clarity)window.clarity('consentv2',{ad_Storage:'denied',analytics_Storage:'denied'})});
    document.body.appendChild(b);
  }
  window.nxCookieSettings=function(){try{localStorage.removeItem(K)}catch(e){}banner()};
  function init(){var v=get();if(v==='yes')load();else if(v!=='no')banner()}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
