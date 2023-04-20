document.addEventListener('DOMContentLoaded', function(){

const nav=document.querySelector('.navbar')
const navitem=document.querySelectorAll('.nav-link')
const navlist=document.querySelector('.navbar-collapse')

function addsh(){

    if (window.scrollY>=100){
        nav.classList.add('sh-bg')
    }else{
        nav.classList.remove('sh-bg')
    }
}

navitem.forEach(item => item.addEventListener('click', ()=> navlist.classList.remove('show')))


window.addEventListener('scroll', addsh)
})