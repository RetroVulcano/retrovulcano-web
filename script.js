const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
const b=document.querySelector('.hamb'),l=document.querySelector('.links');
b.addEventListener('click',()=>{const open=l.classList.toggle('open');l.style.display=open?'flex':'';if(open){Object.assign(l.style,{position:'absolute',top:'74px',left:'0',right:'0',padding:'20px 24px',background:'#070809',flexDirection:'column',borderBottom:'1px solid #292d30'})}});
