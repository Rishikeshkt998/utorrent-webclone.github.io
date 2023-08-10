const mobile_nav=document.querySelector(".mobile-navbar-btn");
const nav_header=document.querySelector(".header");

const toggleNavbar = () => {
    nav_header.classList.toggle("active");
    
}

mobile_nav.addEventListener('click',() => toggleNavbar());


const btns=document.querySelector('#btn1');

btns.addEventListener('mouseenter',()=>{
    btns.style.backgroundColor='rgb(97, 176, 32)';
    
})
btns.addEventListener('mouseleave',()=>{
    btns.style.backgroundColor='rgb(118, 184, 63)';
    btns.style.borderColor='rgb(118, 184, 63)';
    
})
btns.addEventListener('click',()=>{
    btns.style.backgroundColor='#007bff';
    btns.style.borderColor='#fff';
    
})

const btnss=document.querySelector('#btn2');

btnss.addEventListener('mouseenter',()=>{
    btnss.style.backgroundColor='rgb(97, 176, 32)';
    
})
btnss.addEventListener('mouseleave',()=>{
    btnss.style.backgroundColor='rgb(118, 184, 63)';
    btnss.style.borderColor='rgb(118, 184, 63)';
    
})
btnss.addEventListener('click',()=>{
    btnss.style.backgroundColor='#007bff';
    btnss.style.borderColor='#000';
    
})

const btnthird=document.querySelector('#btn3');

btnthird.addEventListener('mouseenter',()=>{
    btnthird.style.color='#dc3545';
    
})
btnthird.addEventListener('mouseleave',()=>{
    btnthird.style.color='rgb(118, 184, 63)';
    
})



const btnfourth=document.querySelector('#btn4');

btnfourth.addEventListener('mouseenter',()=>{
    btnfourth.style.backgroundColor='#fff';
    btnfourth.style.color='rgb(118, 184, 63)';
    
})
btnfourth.addEventListener('mouseleave',()=>{
    btnfourth.style.backgroundColor='rgb(118, 184, 63)';
    btnfourth.style.color='#fff';
    btnfourth.style.borderColor='rgb(118, 184, 63)';
    
})
btnfourth.addEventListener('click',()=>{
    btnfourth.style.backgroundColor='#007bff';
    btnfourth.style.color='#fff';
    btnfourth.style.borderColor='#007bff';
    
})

const btnfifth=document.querySelector('#btn5');

btnfifth.addEventListener('mouseenter',()=>{
    btnfifth.style.color='#dc3545';
    
})
btnfifth.addEventListener('mouseleave',()=>{
    btnfifth.style.color='rgb(118, 184, 63)';
    
})


const btnsixth=document.querySelector('#btn6');

btnsixth.addEventListener('mouseenter',()=>{
    btnsixth.style.backgroundColor='#fff';
    btnsixth.style.color='rgb(118, 184, 63)';
    
})
btnsixth.addEventListener('mouseleave',()=>{
    btnsixth.style.backgroundColor='rgb(118, 184, 63)';
    btnsixth.style.color='#fff';
    btnsixth.style.borderColor='rgb(118, 184, 63)';
    
})
btnsixth.addEventListener('click',()=>{
    btnsixth.style.backgroundColor='#007bff';
    btnsixth.style.color='#fff';
    btnsixth.style.borderColor='#007bff';
    
})

const links=document.querySelector('#link1');

links.addEventListener('mouseenter',()=>{
    links.style.color='rgb(118, 184, 63)';
    
})
links.addEventListener('mouseleave',()=>{
    links.style.color='#000';
})

const link=document.querySelector('#link2');

link.addEventListener('mouseenter',()=>{
    link.style.color='rgb(118, 184, 63)';
    
})
link.addEventListener('mouseleave',()=>{
    link.style.color='#000';
})


