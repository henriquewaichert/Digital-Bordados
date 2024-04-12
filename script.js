let trilho = document.getElementById('trilho')
let body = document.querySelector('body')
let nav = document.querySelector('nav')


trilho.addEventListener('click', ()=>{
  trilho.classList.toggle('dark')
  body.classList.toggle('dark')
  nav.classList.toggle('dark')
})