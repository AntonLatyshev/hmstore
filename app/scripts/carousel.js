const carousel = () => {

  $('.slider').slick({
    slidesToShow: 4
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
    focusOnSelect: true
  });

}
export default carousel;
