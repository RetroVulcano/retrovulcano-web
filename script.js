const b=document.querySelector('.hamb');
const l=document.querySelector('.links');

if (b && l) {
  b.addEventListener('click',()=>{
    const open=l.classList.toggle('open');
    b.setAttribute('aria-expanded',open?'true':'false');
  });
  l.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    l.classList.remove('open');
    b.setAttribute('aria-expanded','false');
  }));
}
