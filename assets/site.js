(function(){
  var c=document.getElementById('art');if(!c)return;var x=c.getContext('2d');
  function draw(){
    var w=c.width=c.offsetWidth*devicePixelRatio,h=c.height=c.offsetHeight*devicePixelRatio;
    x.fillStyle='#101211';x.fillRect(0,0,w,h);
    var g=x.createRadialGradient(w*.78,h*.35,0,w*.78,h*.35,w*.55);
    g.addColorStop(0,'rgba(181,67,31,.75)');g.addColorStop(.5,'rgba(120,52,40,.35)');g.addColorStop(1,'rgba(16,18,17,0)');
    x.fillStyle=g;x.fillRect(0,0,w,h);
    var g2=x.createRadialGradient(w*.15,h*.9,0,w*.15,h*.9,w*.5);
    g2.addColorStop(0,'rgba(44,62,80,.9)');g2.addColorStop(1,'rgba(16,18,17,0)');
    x.fillStyle=g2;x.fillRect(0,0,w,h);
    x.strokeStyle='rgba(244,244,241,.08)';x.lineWidth=devicePixelRatio;
    for(var i=0;i<14;i++){x.beginPath();x.moveTo(0,h*(i/14));x.bezierCurveTo(w*.3,h*(i/14)-40*devicePixelRatio,w*.7,h*(i/14)+60*devicePixelRatio,w,h*(i/14));x.stroke();}
    x.fillStyle='rgba(233,228,218,.9)';x.beginPath();x.arc(w*.82,h*.32,Math.min(w,h)*.11,0,Math.PI*2);x.fill();
  }
  draw();window.addEventListener('resize',draw);
})();
var TPA=window.TPA||{};
// Forms hand off to Tally; field names match the Tally hidden fields so answers arrive pre-filled.
document.querySelectorAll('form[data-form]').forEach(function(f){
  f.addEventListener('submit',function(e){
    e.preventDefault();
    var ok=f.querySelector('.ok');
    var miss=[].slice.call(f.querySelectorAll('[required]')).filter(function(i){return !i.value.trim()||(i.type==='email'&&!/^\S+@\S+\.\S+$/.test(i.value));});
    if(miss.length){ok.style.color='var(--accent)';ok.textContent='Please add your name and a valid email.';ok.hidden=false;miss[0].focus();return;}
    var url=f.dataset.form==='prize'?TPA.prizeNoticeForm:TPA.enquiryForm;
    if(url){
      var q=[].slice.call(f.elements).filter(function(i){return i.name&&i.value.trim();}).map(function(i){return encodeURIComponent(i.name)+'='+encodeURIComponent(i.value.trim());}).join('&');
      window.open(url+(url.indexOf('?')<0?'?':'&')+q,'_blank','noopener');
      ok.style.color='';ok.textContent='Opening the form in a new tab. Your details are filled in; press Submit there to finish.';ok.hidden=false;return;
    }
    ok.style.color='';ok.textContent='Sign-up opens soon. Please check back when Round 1 is announced.';ok.hidden=false;
  });
});
// "Ask about this" preselects the package in the enquiry form.
document.querySelectorAll('[data-pack]').forEach(function(a){
  a.addEventListener('click',function(){
    var h=a.closest('.tier').querySelector('h3').textContent.replace(/\s+/g,' ').trim(),sel=document.getElementById('e-pack');
    if(sel)[].forEach.call(sel.options,function(o){if(o.text.indexOf(h)===0)sel.value=o.value||o.text;});
  });
});
document.querySelectorAll('[data-pay]').forEach(function(a){var u=TPA[a.dataset.pay];if(u){a.href=u;a.hidden=false;}});
document.querySelectorAll('[data-contact]').forEach(function(p){var m=TPA.contactEmail;if(m){var a=p.querySelector('a');a.href='mailto:'+m;a.textContent=m;p.hidden=false;}});
(function(){
  var b=TPA.business||{},el=document.querySelector('[data-legal]');if(!el||!b.name)return;
  var parts=[['상호',b.name],['대표자',b.representative],['사업자등록번호',b.regNo],['통신판매업 신고번호',b.mailOrderNo],['주소',b.address],['전화',b.phone]].filter(function(p){return p[1];});
  el.textContent=parts.map(function(p){return p[0]+' '+p[1];}).join(' · ')+' · 호스팅 GitHub Pages';
})();
