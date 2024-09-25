// hero-slider

const heroSlider = new Swiper('.mySwiper', {
  loop: true,
  speed: 1500,
  effect: "fade",
  pagination: {
    el: '.hero__swiper-pagination',
    dynamicBullets: true,
    clickable: true,
    type: 'progressbar',
  },
}
);
