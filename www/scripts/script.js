$(document).ready(function(){

  let isOpen = false;

  $('.j-burger').on('click', function(){

    $('.j-menu').slideToggle();

    // if (isOpen) {
    //   $('.j-menu').slideUp();
    //   isOpen = false;
    // } else {
    //   $('.j-menu').slideDown();
    //   isOpen = true;
    // }

  });


  // Табы в контактах
  $('.j-tabs-link').on('click', function(event){
    event.preventDefault();

    $('.j-tabs-link').removeClass('active');
    $(this).addClass('active');

    let index = $(this).index('.j-tabs-link');

    $('.j-contacts-item').removeClass('active');
    $('.j-contacts-item').eq(index).addClass('active');

  });


  // Фильтр в наших работах
  $('.j-works-link').on('click', function(event){
    event.preventDefault();

    let filterData = $(this).data('filter');

    console.log(filterData);

    if (filterData === 'all') {
      $('.works-item').show();
      return;
    }

    $('.works-item').each(function(){

      let typeData = $(this).data('type');

      if (filterData === typeData) {
        $(this).show();
      } else {
        $(this).hide();
      }

    });
  });


});


