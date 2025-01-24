let trilho = document.getElementById('trilho')
let body = document.querySelector('body')
let nav = document.querySelector('nav')


trilho.addEventListener('click', () => {
  trilho.classList.toggle('dark')
  body.classList.toggle('dark')
  nav.classList.toggle('dark')
})

// SLIDES

var radio = document.querySelector('.manual-btn');
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
  proximaImg()
}, 4500)

function proximaImg() {
  cont++

  if (cont > 4) {
    cont = 1
  }

  document.getElementById('radio' + cont).checked = true
}