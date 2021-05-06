
const bodyElement = document.querySelector('.page__body');
const menuElement = document.querySelector('.main-nav');
const buttonMenuElement = document.querySelector('.button-menu');

bodyElement.classList.remove('no-js');


buttonMenuElement.addEventListener('click', () => {
  menuElement.classList.toggle('main-nav--opened');
  buttonMenuElement.classList.toggle('button-menu--close');
});
