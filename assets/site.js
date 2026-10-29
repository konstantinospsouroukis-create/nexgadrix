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
