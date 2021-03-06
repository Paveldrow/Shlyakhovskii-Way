const bodyElement = document.querySelector('.page__body');
const menuElement = document.querySelector('.main-nav');
const buttonMenuElement = document.querySelector('.button-menu');

const noJs = () => {
bodyElement.classList.remove('no-js');
};

const menuControl = () => {
buttonMenuElement.addEventListener('click', () => {
  menuElement.classList.toggle('main-nav--opened');
  buttonMenuElement.classList.toggle('button-menu--close');
});
};

const ButtonBuyTour = document.querySelectorAll('.buy-tour');
const buttonModalClose = document.querySelector('.modal-close');
const modalBuy = document.querySelector('.popup-buy');

const form = document.querySelectorAll('.form');
const successMessage = document.querySelector('.success-message');
const buttonMessageClose = document.querySelector('.message-close');


const closeModal = () => {
  buttonModalClose.addEventListener('click', () => {
    modalBuy.classList.remove('modal-opened');
  });
};

const closeMessage = () => {
  buttonMessageClose.addEventListener('click', () => {
    successMessage.classList.remove('modal-opened');
    console.log('11');
  });
};

const buyTour = () => {
  for (let tour of ButtonBuyTour) {
    tour.addEventListener('click', (evt) => {
      evt.preventDefault();
      modalBuy.classList.add('modal-opened');
      closeModal();
    });
  };
};

const sendForm = () => {
  for (let formItem of form) {
    formItem.addEventListener('submit', (evt) => {
      evt.preventDefault();
      modalBuy.classList.remove('modal-opened');
      successMessage.classList.add('modal-opened');
      closeMessage();
    });
  };
};

noJs();
menuControl();
buyTour();
sendForm();
