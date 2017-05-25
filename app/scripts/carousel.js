const carousel = () => {

  $('.slider').slick({
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.big-slider').slick({
    arrows: false,
    fade: true,
    asNavFor: '.mini-slider'
  });
  $('.mini-slider').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 7,
    asNavFor: '.big-slider',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 670,
        settings: {
          vertical: false,
          verticalSwiping: false
        }
      },
      {
        breakpoint: 590,
        settings: {
          vertical: false,
          verticalSwiping: false,
          slidesToShow: 6
        }
      },
      {
        breakpoint: 430,
        settings: {
          vertical: false,
          verticalSwiping: false,
          slidesToShow: 4
        }
      }
    ]
  });

}
export default carousel;
