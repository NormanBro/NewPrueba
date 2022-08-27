const ActivarBarra=document.getElementById('btn-open-bar');
const CloseBarra=document.getElementById('salir');
let BAR=document.querySelector('.barra');

ActivarBarra.addEventListener('click',()=>{
    BAR.style.transform ="translateX(0%)";

});
CloseBarra.addEventListener('click',()=>{
    BAR.style.transform="translateX(-100%)";
})