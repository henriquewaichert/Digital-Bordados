let trilho1 = document.getElementById('trilho')
let body = document.querySelector('body')
let nav = document.querySelector('nav')


trilho1.addEventListener('click', () => {
  trilho1.classList.toggle('dark')
  body.classList.toggle('dark')
  nav.classList.toggle('dark')
})

// MENU

const abaMenu = document.querySelector('.aba-menu');
const menu = document.querySelector('.header-menu');
const closemenu = document.querySelector('.close-menu');
const trilho = document.querySelector('.trilho');
const links = document.querySelectorAll('.header-menu ul li a');

abaMenu.addEventListener('click', () => {
  menu.classList.add('active');
});

closemenu.addEventListener('click', () => {
  menu.classList.remove('active');
});

// Fecha o menu ao clicar em qualquer link
links.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});


// SLIDES

var radio = document.querySelector('.manual-btn');
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
  proximaImg()
}, 4500)

function proximaImg() {
  cont++

  if (cont > 5) {
    cont = 1
  }

  document.getElementById('radio' + cont).checked = true
}