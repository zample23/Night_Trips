import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'

var swiper1 = new Swiper(".headerSwiper", {
   loop: true,
   autoplay: {
      delay: 2000,
   }
});

var swiper2 = new Swiper(".tripSwiper", {
   navigation: {                       //navigation(arrows)
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   }

});
