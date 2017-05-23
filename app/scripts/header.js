const header = () => {

  $('.header__link.parent').on('click', function (e) {
    e.preventDefault();

    var $this = $(this);
    var item = $this.closest('.header__item');
    var list = $this.closest('.header__menu');
    var links = list.find('.header__link.parent');
    var items = list.find('.header__item');
    var content = item.find('.dropdown');
    var otherContent = list.find('.dropdown');

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
