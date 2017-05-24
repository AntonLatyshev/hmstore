const tabs = () => {

  $('.tabs-controls__link').on('click',function (e) {
    e.preventDefault();

    var $this = $(this),
        item = $this.closest('.tabs-controls__item'),
        contentItem = $('.tabs-list__item'),
        itemPosition = item.data('class');

    contentItem.filter('.tabs-list__item_' + itemPosition)
      .add(item)
      .addClass('active')
      .siblings()
      .removeClass('active');

  })

}
export default tabs;
