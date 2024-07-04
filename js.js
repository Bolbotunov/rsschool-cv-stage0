let burger = document.querySelector('.burger__btn')
let burgerLine = document.querySelector('.burger__line')
let nav = document.querySelector('.nav')
let body = document.querySelector('body')
let items = document.querySelectorAll('.item-link')

burger.addEventListener('click',function(){
    burgerLine.classList.toggle('burger__close')
    nav.classList.toggle('active__nav')
    body.classList.toggle('stop__scroll')
})

items.forEach((item)=>{
    item.addEventListener('click',function(){
        nav.classList.remove('active__nav')
    body.classList.remove('stop__scroll')
    burgerLine.classList.remove('burger__close')
    })
})
