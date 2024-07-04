let burger = document.querySelector('.burger__btn')
let burgerLine = document.querySelector('.burger__line')
let nav = document.querySelector('.nav')
let body = document.querySelector('body')

burger.addEventListener('click',function(){
    burgerLine.classList.toggle('burger__close')
    nav.classList.toggle('active__nav')
    body.classList.toggle('stop__scroll')
})
