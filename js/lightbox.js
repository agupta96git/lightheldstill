/* Full-screen viewer for collection pages.
   initLightbox(list, listKey): list = photos in on-page order. Any <a class="cp-fig"> opens it. */
function initLightbox(list, listKey){
  const root=document.createElement('div');
  root.className='lb'; root.setAttribute('role','dialog'); root.setAttribute('aria-modal','true'); root.setAttribute('aria-label','Photo viewer'); root.hidden=true;
  const chev=d=>`<svg viewBox="0 0 24 48" aria-hidden="true"><path d="${d}" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  root.innerHTML=`
    <button class="lb-x" aria-label="Close viewer"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg></button>
    <div class="lb-count mono"></div>
    <button class="lb-arrow lb-prev" aria-label="Previous photo">${chev('M17 8 7 24l10 16')}</button>
    <button class="lb-arrow lb-next" aria-label="Next photo">${chev('M7 8l10 16L7 40')}</button>
    <div class="lb-stage"><img class="lb-img" alt=""></div>
    <div class="lb-cap"><span class="lb-title"></span><a class="lb-buy mono" href="#">View print →</a></div>`;
  document.body.appendChild(root);
  const img=root.querySelector('.lb-img'), title=root.querySelector('.lb-title'), count=root.querySelector('.lb-count'), buy=root.querySelector('.lb-buy'), stage=root.querySelector('.lb-stage');
  let i=0, last=null, busy=false;
  const n=list.length, src=p=>`images/full/${p.id}.jpg`;
  const show=(k,instant)=>{
    i=(k+n)%n; const p=list[i];
    const swap=()=>{
      img.onload=()=>{img.style.transition='';img.style.transform='';img.classList.add('in')};
      img.src=src(p); img.alt=p.title; title.textContent=p.title;
      buy.href=`photo.html?id=${p.id}&c=${listKey}`;
      count.textContent=String(i+1).padStart(2,'0')+' / '+String(n).padStart(2,'0');
      if(img.complete&&img.naturalWidth) img.onload();
    };
    if(instant){swap()} else {img.classList.remove('in'); setTimeout(swap,160)}
    [list[(i+1)%n],list[(i-1+n)%n]].forEach(q=>{const im=new Image();im.src=src(q)});
  };
  const open=k=>{last=document.activeElement;root.hidden=false;document.documentElement.classList.add('lb-lock');
    requestAnimationFrame(()=>{root.classList.add('on');root.querySelector('.lb-x').focus({preventScroll:true})});show(k,true)};
  const close=()=>{root.classList.remove('on');document.documentElement.classList.remove('lb-lock');
    setTimeout(()=>{root.hidden=true;img.removeAttribute('src');img.classList.remove('in')},260);if(last&&last.focus)last.focus({preventScroll:true})};
  const next=()=>show(i+1), prev=()=>show(i-1);
  root.querySelector('.lb-x').onclick=close;
  root.querySelector('.lb-next').onclick=e=>{e.stopPropagation();next()};
  root.querySelector('.lb-prev').onclick=e=>{e.stopPropagation();prev()};
  root.addEventListener('click',e=>{if(moved){moved=false;return}if(e.target===root||e.target===stage)close()});
  addEventListener('keydown',e=>{if(root.hidden)return;
    if(e.key==='Escape')close(); else if(e.key==='ArrowRight')next(); else if(e.key==='ArrowLeft')prev();
    else if(e.key==='Tab'){const f=[...root.querySelectorAll('button,a')];const a=document.activeElement;
      if(e.shiftKey&&a===f[0]){e.preventDefault();f[f.length-1].focus()}else if(!e.shiftKey&&a===f[f.length-1]){e.preventDefault();f[0].focus()}}});
  // swipe / drag
  let sx=0,sy=0,dx=0,drag=false,locked=false,moved=false;
  stage.addEventListener('pointerdown',e=>{if(e.button>0)return;sx=e.clientX;sy=e.clientY;dx=0;drag=true;locked=false;moved=false;stage.setPointerCapture(e.pointerId);img.style.transition='none'});
  stage.addEventListener('pointermove',e=>{if(!drag)return;dx=e.clientX-sx;const dy=e.clientY-sy;
    if(!locked&&Math.abs(dy)>Math.abs(dx)&&Math.abs(dy)>10){drag=false;img.style.transition='';img.style.transform='';return}
    locked=true;if(Math.abs(dx)>6)moved=true;img.style.transform=`translateX(${dx}px)`;img.style.opacity=String(Math.max(.35,1-Math.abs(dx)/600))});
  const end=()=>{if(!drag)return;drag=false;img.style.transition='';img.style.opacity='';
    if(Math.abs(dx)>60){dx<0?next():prev()} else {img.style.transform=''}};
  stage.addEventListener('pointerup',end);stage.addEventListener('pointercancel',end);
  // open on tile click (keep ctrl/cmd-click and middle-click as normal links)
  document.addEventListener('click',e=>{
    const a=e.target.closest&&e.target.closest('a.cp-fig'); if(!a||e.metaKey||e.ctrlKey||e.shiftKey||e.button>0)return;
    const id=new URL(a.href,location.href).searchParams.get('id'); const k=list.findIndex(p=>p.id===id); if(k<0)return;
    e.preventDefault();open(k);
  });
}
