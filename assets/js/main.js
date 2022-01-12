( function( $ ) {

    $(document).ready(function () {

        var swiper = $('.swiper');
        var swiper_data = {
            spaceBetween: 30,
            slidesPerView: 1,
            centeredSlides: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
        };

        var swiperHandle = new Swiper(swiper, swiper_data);


        var navMenu = $('.wd-menu');
        navMenu.on('click', '.menu-item a', function (e) {
           console.log($(this)); 
        });
    });

} )( jQuery );
