(function(){
  try{
    var host=location.hostname, orig="https://nexgadrix.win";
    var translated=/\.translate\.goog$/.test(host);
    var path=location.pathname||"/";
    var a=document.createElement("a");
    a.id="langbtn"; a.className="langbtn notranslate"; a.setAttribute("translate","no"); a.rel="noopener";
    if(translated){
      a.href=orig+path+(location.hash||"");
      a.textContent="🇩🇪 Deutsch";
      a.title="Zurück zur deutschen Originalseite";
      a.setAttribute("hreflang","de");
    }else{
      a.href="https://nexgadrix-win.translate.goog"+path+"?_x_tr_sl=de&_x_tr_tl=el&_x_tr_hl=el&_x_tr_pto=wapp"+(location.hash||"");
      a.textContent="🇬🇷 Ελληνικά";
      a.title="Seite auf Griechisch anzeigen (maschinelle Übersetzung durch Google Übersetzer)";
      a.setAttribute("hreflang","el");
    }
    var st=document.createElement("style");
    st.textContent=".langbtn{display:inline-flex;margin-left:6px;line-height:1.2;align-items:center;gap:6px;padding:8px 14px;border-radius:999px;border:1px solid #62defa;color:#62defa;font-weight:700;font-size:14px;text-decoration:none;white-space:nowrap;background:rgba(98,222,250,.08)}.langbtn:hover{background:#62defa;color:#081326}nav .langbtn,nav a.langbtn{color:#62defa;border:1px solid #62defa;padding:7px 13px}nav a.langbtn:hover{color:#081326;background:#62defa}.header nav a.langbtn{color:#0e7490;border-color:#0e7490;background:#ecfeff}.header nav a.langbtn:hover{color:#fff;background:#0e7490}";
    document.head.appendChild(st);
    var nav=document.querySelector('nav[aria-label="Hauptnavigation"]')||document.querySelector("header");
    if(nav){nav.appendChild(a);}else{a.style.cssText="position:fixed;top:12px;right:12px;z-index:50";document.body.appendChild(a);}
  }catch(e){}
})();
