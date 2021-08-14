const cancelBtn = document.querySelector('#cancel-btn')
const menuBtn = document.querySelector('#menu-btn')
const navbar = document.querySelector('.navbar')
const body = document.querySelector('body');
const banner = document.querySelector('.banner');
// console.log(list)
// for (let i = 0; i < list.length; i++) {  
//     list[i].addEventListener('click',()=>{
        

//     })
// };
cancelBtn.addEventListener('click',()=>{
    navbar.classList.remove('show');
    menuBtn.classList.remove('hide')
    body.classList.remove('disabled')
})
menuBtn.addEventListener('click',()=>{
    navbar.classList.add('show');
    menuBtn.classList.add('hide')
    body.classList.add('disabled')
})
window.onscroll=()=>{
    console.log(scrollY)
    if(this.scrollY > 20){
        navbar.classList.add('sticky');
        banner.classList.add('fadein-3');
        // banner.classList.add('bgcolor')
    }else{
        navbar.classList.remove('sticky');
        banner.classList.remove('fadein-3');
        // banner.classList.remove('bgcolor')
    }
}
