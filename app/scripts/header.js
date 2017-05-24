const header = () => {

  $('.header__link.parent').on('click', function (e) {
    e.preventDefault();

    var $this = $(this),
        item = $this.closest('.header__item'),
        list = $this.closest('.header__menu'),
        links = list.find('.header__link.parent'),
        items = list.find('.header__item');

    if (!item.hasClass('active')) {
      $('.header__menu').find('.header__item').removeClass('active');
      items.removeClass('active');
      item.addClass('active');
    } else {
      item.removeClass('active');
    }

  });

}
export default header;
