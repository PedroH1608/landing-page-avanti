$('.slider').slick({
  dots: true,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  prevArrow: '<button type="button" class="slick-prev"><img src="./src/images/arrow.svg" alt="Left Arrow"></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="./src/images/arrow.svg" alt="Right Arrow"></button>',
  responsive: [
    // {
    //   // breakpoint: 1024,
    //   // settings: {
    //   //   slidesToShow: 3,
    //   //   slidesToScroll: 3,
    //   //   infinite: true,
    //   //   dots: true
    //   // }
    // },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000
      }
    },
    // {
    //   // breakpoint: 480,
    //   // settings: {
    //   //   slidesToShow: 1,
    //   //   slidesToScroll: 1
    //   // }
    // }
  ]
});