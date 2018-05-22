$(function() {
  'use strict';

  var banner = new Swiper('.swiper-container', {
    loop: true,
    autoplay: true,
    initialSlide: $('.swiper-slide.first').index() || 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
  console.log(banner);
});
