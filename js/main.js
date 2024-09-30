const openBtn = document.querySelector('.burger-menu__btn-open');
const closeBtn = document.querySelector('.burger-menu__btn-close');
const burgerMenu = document.querySelector('.burger-menu');

openBtn.addEventListener('click', () => {
  burgerMenu.classList.add('burger-menu__open');
});
closeBtn.addEventListener('click', () => {
  burgerMenu.classList.remove('burger-menu__open');
})
