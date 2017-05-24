const catalog = () => {

  $('.catalog__link').on('click', function (e) {
    e.preventDefault();

    var $this = $(this),
        item = $this.closest('.catalog__item'),
        list = $this.closest('.catalog__list'),
        items = list.find('.catalog__item'),
        content = item.children('.catalog__insert'),
        otherContent = list.find('catalog__insert');

        item.toggleClass('active');
        content.toggleClass('active');
  });

}
export default catalog;
