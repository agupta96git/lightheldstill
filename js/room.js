/* Size-reference room: draws the print, matted and framed, at true scale (9px per inch) on a wall next to a sofa.
   renderRoom(host, label, imgSrc, aspect): label = selected size label; only sizes listed in SIZES are shown. */
const RS=9, px=n=>n*RS; let IMG='';
// print size (p), matted outer size (o), and where it hangs, all in inches, landscape orientation
const ROOM_GEOM={
  '5×7':   {p:[7,5],   o:[10,8],  slot:'table', note:'on a side table'},
  '8.5×11':{p:[11,8.5],o:[14,11], slot:'a',     note:'on the wall'},
  '11×14': {p:[14,11], o:[20,16], slot:'b',     note:'on the wall'},
  '11×17': {p:[17,11], o:[20,16], slot:'b',     note:'on the wall'},
  '13×19': {p:[19,13], o:[24,18], slot:'c',     note:'on the wall'}
};
function frame(o,p,x,bottom,cls){const fw=o[0]+1.5,fh=o[1]+1.5;
 return `<div class="fr ${cls}" style="left:${px(x)}px;bottom:${px(bottom)}px;width:${px(fw)}px;height:${px(fh)}px"><div class=mat><div class=ph style="width:${px(p[0])}px;height:${px(p[1])}px"><img src="${IMG}"></div></div><div class=dm><i></i><span>${o[0]} × ${o[1]} in</span></div></div>`}
function sofaSVG(){const W=84,H=34;
 return `<svg class=abs style="left:${px(34)}px;bottom:0" width="${px(W)}" height="${px(H)}" viewBox="0 0 ${W} ${H}">
 <defs><linearGradient id=cu x1=0 y1=0 x2=0 y2=1><stop offset=0 stop-color="#a39484"/><stop offset=1 stop-color="#8e7f70"/></linearGradient>
 <linearGradient id=se x1=0 y1=0 x2=0 y2=1><stop offset=0 stop-color="#b3a493"/><stop offset=1 stop-color="#9a8b7b"/></linearGradient>
 <linearGradient id=ar x1=0 y1=0 x2=1 y2=0><stop offset=0 stop-color="#8a7b6c"/><stop offset=.5 stop-color="#9d8e7e"/><stop offset=1 stop-color="#8a7b6c"/></linearGradient>
 <filter id=sh x="-10%" y="-10%" width="120%" height="130%"><feDropShadow dx="0" dy="1" stdDeviation="1.2" flood-opacity=".3"/></filter></defs>
 <ellipse cx=42 cy=33.6 rx=43 ry=1.1 fill="rgba(0,0,0,.28)"/>
 <rect x=4 y=31 width=3 height=3 fill="#4a3a2d"/><rect x=77 y=31 width=3 height=3 fill="#4a3a2d"/>
 <rect x=6 y=2 width=72 height=22 rx=5 fill="url(#cu)" filter="url(#sh)"/>
 <rect x=8 y=4 width=23 height=17 rx=3.5 fill="url(#cu)" stroke="rgba(0,0,0,.14)" stroke-width=".3"/>
 <rect x=30.5 y=4 width=23 height=17 rx=3.5 fill="url(#cu)" stroke="rgba(0,0,0,.14)" stroke-width=".3"/>
 <rect x=53 y=4 width=23 height=17 rx=3.5 fill="url(#cu)" stroke="rgba(0,0,0,.14)" stroke-width=".3"/>
 <rect x=4 y=22 width=76 height=9 rx=2 fill="#7f7163"/>
 <rect x=8 y=20 width=34 height=9 rx=3 fill="url(#se)" stroke="rgba(0,0,0,.16)" stroke-width=".3"/>
 <rect x=42 y=20 width=34 height=9 rx=3 fill="url(#se)" stroke="rgba(0,0,0,.16)" stroke-width=".3"/>
 <rect x=0 y=13 width=9 height=18 rx=4.2 fill="url(#ar)" filter="url(#sh)"/><rect x=75 y=13 width=9 height=18 rx=4.2 fill="url(#ar)" filter="url(#sh)"/>
 <g transform="rotate(-8 17 14)"><rect x=11.5 y=8 width=11 height=11 rx=2 fill="#b4623f"/><rect x=11.5 y=8 width=11 height=11 rx=2 fill="none" stroke="rgba(0,0,0,.18)" stroke-width=".3"/></g>
 <g transform="rotate(6 66 14)"><rect x=60.5 y=8 width=11 height=11 rx=2 fill="#efe6d4"/><rect x=60.5 y=8 width=11 height=11 rx=2 fill="none" stroke="rgba(0,0,0,.15)" stroke-width=".3"/></g>
 </svg>`}
function tableSVG(){const W=24,H=26;
 return `<svg class=abs style="left:${px(6)}px;bottom:0" width="${px(W)}" height="${px(H)}" viewBox="0 0 ${W} ${H}">
 <ellipse cx=12 cy=25.7 rx=12 ry=.7 fill="rgba(0,0,0,.25)"/>
 <rect x=0 y=0 width=24 height=1.8 rx=.6 fill="#6a5240"/><rect x=0 y=1.8 width=24 height=.5 fill="rgba(0,0,0,.2)"/>
 <path d="M3 2.3 L4.4 2.3 L5.4 26 L4.2 26 Z" fill="#4e3b2d"/><path d="M21 2.3 L19.6 2.3 L18.6 26 L19.8 26 Z" fill="#4e3b2d"/>
 <rect x=3.5 y=14 width=17 height=.9 fill="#4e3b2d"/></svg>
 <div class=abs style="left:${px(18)}px;bottom:${px(24)}px;width:${px(26)}px;height:${px(26)}px;background:radial-gradient(circle,rgba(255,226,160,.45),transparent 65%);pointer-events:none"></div>`}
function lampSVG(){return `<svg class=abs style="left:${px(21.5)}px;bottom:${px(26)}px" width="${px(7)}" height="${px(16)}" viewBox="0 0 7 16"><rect x=3.1 y=7 width=.8 height=7 fill="#3a3029"/><ellipse cx=3.5 cy=14.4 rx=2.2 ry=.7 fill="#3a3029"/><path d="M1 7.2 L1.9 1 L5.1 1 L6 7.2 Z" fill="#f1e4c4"/><path d="M1.9 1 L5.1 1" stroke="rgba(0,0,0,.15)" stroke-width=".2"/></svg>`}
function plantSVG(){return `<svg class=abs style="left:${px(120)}px;bottom:0;overflow:visible" width="${px(12)}" height="${px(44)}" viewBox="0 0 12 44">
 <ellipse cx=6 cy=43.6 rx=5.2 ry=.5 fill="rgba(0,0,0,.25)"/>
 <path d="M6 36 C6 28 5 22 7 12" stroke="#5a4a38" stroke-width="0.5" fill="none"/>
 <g fill="#4d6a4a"><ellipse cx=7 cy=10 rx=3 ry=4.6 transform="rotate(10 7 10)"/><ellipse cx=3.2 cy=17 rx=2.7 ry=4.2 transform="rotate(-35 3.2 17)"/><ellipse cx=9.4 cy=19 rx=2.7 ry=4.2 transform="rotate(35 9.4 19)"/><ellipse cx=3.6 cy=26 rx=2.5 ry=3.8 transform="rotate(-40 3.6 26)"/><ellipse cx=9 cy=28 rx=2.5 ry=3.8 transform="rotate(40 9 28)"/></g>
 <g fill="#5f7f59"><ellipse cx=7.4 cy=9 rx=1.5 ry=3.2 transform="rotate(10 7 10)"/><ellipse cx=9.4 cy=18 rx=1.3 ry=3 transform="rotate(35 9.4 19)"/></g>
 <path d="M2 36 L10 36 L9 43.5 L3 43.5 Z" fill="#c9c0b2"/><rect x=2 y=35.4 width=8 height=1.2 rx=.4 fill="#b8aea0"/></svg>`}
function renderRoom(label, imgSrc, aspect){
  IMG=imgSrc;
  const portrait=aspect&&aspect<1;
  const geom=l=>{const g=ROOM_GEOM[l]; if(!g)return null; return portrait?{...g,p:[g.p[1],g.p[0]],o:[g.o[1],g.o[0]]}:g};
  const avail=SIZES.map(s=>s.label).filter(l=>ROOM_GEOM[l]);
  const z=geom(label)||geom(avail[0]);
  const hot=t=>z.slot===t?'hot':'dimmed';
  let h=sofaSVG()+tableSVG()+lampSVG()+plantSVG();
  const tl=avail.find(l=>ROOM_GEOM[l].slot==='table');
  if(tl){const g=geom(tl); h+=frame(g.o,g.p,8.2,26.8,hot('table')+' tbl');}
  const wall=[];
  ['a','b','c'].forEach(slot=>{
    const cands=avail.filter(l=>ROOM_GEOM[l].slot===slot); if(!cands.length)return;
    const pick=(z.slot===slot&&cands.includes(label))?label:cands[0];  // shared slot: show the selected size, else the first
    wall.push([slot,geom(pick)]);
  });
  const gap=3, tot=wall.reduce((q,[,g])=>q+g.o[0]+1.5,0)+gap*(wall.length-1); let x=76-tot/2;
  const cy=portrait?50:46;
  wall.forEach(([slot,g])=>{h+=frame(g.o,g.p,x,cy-(g.o[1]+1.5)/2,hot(slot)); x+=g.o[0]+1.5+gap;});
  document.getElementById('scene').innerHTML=h;
  document.getElementById('roomcap').textContent=`${label} print · ${z.o[0]} × ${z.o[1]} in matted · ${z.note}`;
  fitRoom();
}
function fitRoom(){
  const wrap=document.getElementById('roomwrap'), room=document.getElementById('room'); if(!wrap||!room)return;
  const k=Math.min(1,wrap.clientWidth/1200); room.style.transform=`scale(${k})`; wrap.style.height=(640*k)+'px';
}
addEventListener('resize',fitRoom);
