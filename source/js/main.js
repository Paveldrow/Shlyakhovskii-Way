import {noJs, menuControl} from './openMenu.js';
import {buyTour, sendForm} from './buyTour.js';

noJs();
menuControl();
buyTour();
sendForm();







// const hiddenTour = () => {
//   const errorElements = document.querySelectorAll('.country-info__item');

//     errorElements.forEach(error => {
//       error.classList.add('country-info__item--hidden');
//     });
//   };


//   hiddenTour();


// (function () {
//   var countryAboutButton = document.querySelectorAll('.country-info__county-link');
//   var countryInfoBlock = document.querySelectorAll('.country-info__item');
//   var visitPlacesButton = document.querySelectorAll('.places__link');

//   function addClassHidden () {
//     Object.keys(countryInfoBlock).forEach(function(el) {
//       countryInfoBlock[el].classList.add('country-info__item--hidden');
//     });
//   }

//   function tabsChange(arr, method) {
//     Object.keys(arr).forEach(function(el) {
//       arr[el].addEventListener(method, function () {
//         addClassHidden ();
//         countryInfoBlock[el].classList.remove('country-info__item--hidden');
//       })
//     })
//   }

//   tabsChange(countryAboutButton, 'change');
//   tabsChange(visitPlacesButton, 'click');
// })();
