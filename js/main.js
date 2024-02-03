// Header searcher

const searchField = document.querySelector('.header__search-field');

window.addEventListener('click', function(event) {
   if(event.target.closest('.header__search')) {
      searchField.classList.toggle('active');
      searchField.value = '';
   } else if (!event.target.closest('.header__menu')) {
      searchField.classList.remove('active');
      searchField.value = '';
   }
})

//-------------------------------------------------------------------//

// Topics main switcher

const buttons = document.querySelectorAll('.pick-your-trip__button');
const trips = document.querySelectorAll('.trip');

buttons.forEach(function(item) {

   item.addEventListener('click', function() {

      trips.forEach(function(item) {
         item.classList.add('hidden');
      })
      buttons.forEach(function(item) {
         item.classList.remove('active');
      })
      const chosenProject = document.querySelector('#' + this.dataset.trip);
      chosenProject.classList.remove('hidden');
      this.classList.add('active');

   })
})


