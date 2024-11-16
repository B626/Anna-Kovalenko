const swiper = new Swiper(".services__swiper", {
  spaceBetween: 30,
  pagination: {
    el: ".services__swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewheel: false,
  keyboard: true,
});