const header = () => {

  $('.header__link.parent').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    var $this = $(this),
        item = $this.closest('.header__item'),
        list = $this.closest('.header__menu'),
        links = list.find('.header__link.parent'),
        items = list.find('.header__item');
    $('.search-form').removeClass('active');
    if (!item.hasClass('active')) {
      $('.header__menu').find('.header__item').removeClass('active');
      items.removeClass('active');
      item.addClass('active');
    } else {
      item.removeClass('active');
    }

  });

  $('.header__item.search').on('click', function (e) {
    e.stopPropagation();
    $('.search-form').addClass('active');
    setTimeout("$('.search-form').find('input').eq(0).focus();", 100);
    $('.header__item').removeClass('active');
  });
  $('body').on('click', function () {
    $('.search-form').removeClass('active');
    $('.header__item').removeClass('active');
  })
  $('.dropdown').on('click', function (e) {
    e.stopPropagation();
  })

  $('.hamburger').on('click', function () {
    $('.popup.mobile').toggleClass('active');
  })

  $(window).on('load resize', function () {
    if ($(window).width() <= 750) {
      $('.nav').appendTo('.header__bottom.mobile');
      $('.header__menu.nav-menu').appendTo('.box-mobile');
    } else if ($(window).width() > 750) {
      $('.header__top .header__holder').prepend($('.header__menu.nav-menu'));
      $('.header__bottom .header__holder').append($('.nav'));
      $('.popup.mobile').removeClass('active');
    }
  });
  $(window).on('load resize', function () {
    if ($(window).width() <= 509) {
      $('.header__logo').prependTo('.header__top .header__holder');
    } else if ($(window).width() > 509) {
      $('.header__logo').prependTo('.header__middle .header__holder');
    }
  });
}
export default header;
