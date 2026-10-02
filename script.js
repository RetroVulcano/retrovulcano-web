const menuButton = document.querySelector('.hamb');
const menu = document.querySelector('.links');

if (menuButton && menu) {
  const setMenu = (open) => {
    menu.classList.toggle('open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  };

  menuButton.addEventListener('click', () => {
    setMenu(!menu.classList.contains('open'));
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('header')) setMenu(false);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 850) setMenu(false);
  });
}

/* Dragón pixel art (24x16 + 16 columnas de fuego = 40x16): cuerpo, dos posiciones de ala y aliento de fuego */
(function(){
const dc=document.getElementById('dragon');
if(!dc)return;
/* Respeta "reducir movimiento" del sistema (en móviles suele activarlo el ahorro de batería).
   Para probar la animación igualmente: añade ?anim=1 a la URL. */
const force=/[?&]anim=1/.test(location.search);
const rm=!force&&matchMedia('(prefers-reduced-motion:reduce)').matches;
const PAL={o:'#0b1018',g:'#2f6b3a',l:'#5fae4f',y:'#e8a93a',e:'#ffe08a',r:'#a8322a',m:'#78282a'};
const BODY=["........................","........................","........................","....................y...","...................oyo..","..................ogggo.","..................ogggeo","................oggggggo","...............ogggggoo.","............ooggggo.....","...........oggggggo.....","..........ogllllllgo....","....ooo..ogyyyyyyyygo...","...ogggooggyyyyyyyygo...","..oggggggggggggggggo....",".ogg..ooooooooooooo....."];
const WING=[
["........................","........................","...........o............","..........oro...........","..........orro..........",".........orrmro.........",".........ormmro.........","........ormmmro.........","........ormmmro.........",".........orrmo..........","..........ooo...........","........................","........................","........................","........................","........................"],
["........................","........................","........................","........................","........................","........................","........................","..........oo............",".........orro...........","........ormmro..........",".......ormmmro..........","......ormmmmro..........",".....ormmmmro...........",".....ormmmro............","......ooorro............","..........oo............"]];
const FIRE={e:'#ffe08a',a:'#ff8a1f',r:'#f01c24'};
const dx=dc.getContext('2d'),box=dc.parentElement;
/* Fuego: sale del hocico (x=24,y=6) y se ensancha; "tick" hace que parpadee */
function fuego(ctx,len,tick){
  for(let i=0;i<len;i++){
    const h=Math.min(3,1+Math.floor(i*.3));
    for(let d=-h;d<=h;d++){
      const x=24+i,y=6+d;if(y<0||y>15||x>39)continue;
      const dist=Math.abs(d)/h,fin=i/len;
      if(i>2&&((x*7+y*13+tick*31)%5===0)&&(dist>.4||fin>.6))continue;
      ctx.fillStyle=(dist<.35&&fin<.55)?FIRE.e:(dist<.75&&fin<.85)?FIRE.a:FIRE.r;
      ctx.fillRect(x,y,1,1);
    }
  }
}
function dibuja(ctx,n,len,tick){
  ctx.clearRect(0,0,40,16);
  [WING[n],BODY].forEach(g=>g.forEach((row,y)=>[...row].forEach((c,x)=>{if(PAL[c]){ctx.fillStyle=PAL[c];ctx.fillRect(x,y,1,1)}})));
  if(len>0)fuego(ctx,len,tick);
}
dibuja(dx,0,rm?9:0,0);
if(rm){dc.style.transform='translate(60%,40px)'}
else{
  /* En móvil: máx. ~30 fps. En todos: el bucle se detiene cuando la cabecera no se ve */
  const minDt=matchMedia('(max-width:850px)').matches?30:0;
  let s=0,last=0,key='',raf=0;
  const fly=(t)=>{
    raf=requestAnimationFrame(fly);
    if(!last){last=t;return}
    const dt=t-last;
    if(dt<minDt)return;
    last=t;s+=Math.min(dt,100)/1000;
    const w=box.clientWidth,dw=dc.offsetWidth;
    const x=((s*70)%(w+dw*2))-dw,y=box.clientHeight*.07+Math.sin(s*1.6)*16;
    dc.style.transform='translate3d('+x.toFixed(1)+'px,'+y.toFixed(1)+'px,0)';
    /* ciclo de 5 s: vuela 2,2 s y escupe fuego durante 1,8 s */
    const p=(s%5-2.2)/1.8,len=p>0&&p<1?Math.max(2,Math.round(15*Math.sin(p*Math.PI))):0;
    const n=Math.floor(s*5)%2,tick=Math.floor(s*12),k=n+'|'+len+'|'+(len?tick:0);
    if(k!==key){key=k;dibuja(dx,n,len,tick)}
  };
  const start=()=>{if(!raf){last=0;raf=requestAnimationFrame(fly)}};
  const stop=()=>{cancelAnimationFrame(raf);raf=0};
  if('IntersectionObserver' in window){
    new IntersectionObserver(([e])=>e.isIntersecting?start():stop()).observe(box);
  }else start();
}
})();
