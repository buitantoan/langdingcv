( function( $ ) {

    function hero_swiper_slide() {
      let swiper_hero = $('.wd-swiper-hero'); 
      let swiper_herro_data = {
          spaceBetween: 30,
          slidesPerView: 1,
          centeredSlides: true,
          loop: true,
          autoplay: {
              delay: 3000,
              disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination--hero",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next-hero",
            prevEl: ".swiper-button-prev-hero",
          },
      };

      let swiperHandle = new Swiper(swiper_hero, swiper_herro_data);
    }

    function services_video_swiper_slide() {
      let swiper_video = $('.wd-swiper-video'); 
      let swiper_video_data = {
          spaceBetween: 30,
          slidesPerView: 3,
          pagination: {
            el: ".swiper-pagination--video",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next-video",
            prevEl: ".swiper-button-prev-video",
          },
      };

      let swiperVideo = new Swiper(swiper_video, swiper_video_data);
    }



    function services_image_gallery() {
      $('.wd-services-image .wd-image-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0,2], 
        },
        image: {
          tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
          titleSrc: function(item) {
            return item.el.attr('title') + '<small>by JWedding</small>';
          }
        }
      });
    }

    $(document).ready(function () {

        var navMenu = $('.wd-menu');
        navMenu.on('click', '.menu-item a', function (e) {
          console.log($(this)); 
        });

        hero_swiper_slide();

        services_image_gallery();

        services_video_swiper_slide();

        $('.wd-swiper-video .popup-video').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          iframe:{
            patterns: {
              youtube: {
                index: 'youtube.com/',
                id: 'v=', 
                src: '//www.youtube.com/embed/%id%?autoplay=1'
              },
              vimeo: {
                index: 'vimeo.com/',
                id: '/',
                src: '//player.vimeo.com/video/%id%?autoplay=1'
              },
              gmaps: {
                index: '//maps.google.',
                src: '%id%&output=embed'
              }
          
            },
          },
          fixedContentPos: false,
        });

    });

} )( jQuery );
