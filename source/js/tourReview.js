




const hiddenTour = () => {
  const errorElements = document.querySelectorAll('.country-info__item');

    errorElements.forEach(error => {
      error.classList.classList.add('country-info__item--hidden');
    });
  }
