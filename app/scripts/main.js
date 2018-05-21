$(function() {
  'use strict';

  var banners = new Swiper('.swiper-container', {
    loop: true,
    autoplay: true,
    initialSlide: $('.swiper-slide.first').index() || 0,

    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });
});
