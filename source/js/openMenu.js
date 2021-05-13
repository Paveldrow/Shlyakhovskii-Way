const bodyElement = document.querySelector('.page__body');
const menuElement = document.querySelector('.main-nav');
const buttonMenuElement = document.querySelector('.button-menu');

const noJs = () => {
bodyElement.classList.remove('no-js');
}

const menuControl = () => {
buttonMenuElement.addEventListener('click', () => {
  menuElement.classList.toggle('main-nav--opened');
  buttonMenuElement.classList.toggle('button-menu--close');
});
}

export {noJs, menuControl};
