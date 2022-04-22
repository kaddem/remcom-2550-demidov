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

    $('.j-works-link').removeClass('active');
    $(this).addClass('active');

    let filterData = $(this).data('filter');

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


  // Аккордеон
  let prevFaqBtn;

  $('.j-faq-btn').on('click', function(){

    if ( prevFaqBtn === this) {
      $(this).next().slideToggle();

      return;
    }

    $('.j-faq-btn').next().slideUp();
    $(this).next().slideDown();

    prevFaqBtn = this;

  });

  // каруселька

  $('.j-carousel').slick({
    dots: true
  });


  // Отзывы
  $('.j-btn-review').on('click', function() {

    $.ajax({
      type: 'POST',
      url: 'jsons/reviews.json',
      data: 'count=2',
      success: function(response) {
        console.log(response);
      },
      error: function() {

      }
    });



  });



});


