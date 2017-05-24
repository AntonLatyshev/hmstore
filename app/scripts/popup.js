const popup = () => {

  $('.feedback__btn').on('click', function () {
    $('.popup.feedback').addClass('active');
    setTimeout("$('.popup__holder').find('input').eq(0).focus();", 100);
  });

  $('.popup, .popup__close').on('click', function () {
    $('.popup').removeClass('active');
  });

  $('.popup__holder').on('click', function (e) {
    e.stopPropagation();
  });

  $('input[type="tel"]').mask('+38 (099) 999-99-99');
}
export default popup;
