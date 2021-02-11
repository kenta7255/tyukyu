var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  loop: true,
  slidesPerView: 2,
  breakpoints: {
    // 768px以上の場合
    768: {
      slidesPerView: 3,
    }
  },
  autoplay: {
    delay: 5000,
  },
}
);