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
          slidesPerView: 1,
          breakpoints: {
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1025: {
              slidesPerView: 3,
            },
          },
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

    function payment_swiper_slide() {
      let swiper_payment = $('.wd-payment-wrap'); 
      let swiper_payment_data = {
          spaceBetween: 30,
          slidesPerView: 1,
          breakpoints: {
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1025: {
              slidesPerView: 3,
            },
          },
          pagination: {
            el: ".swiper-pagination--payment",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next-payment",
            prevEl: ".swiper-button-prev-payment",
          },
      };

      let swiperPayment = new Swiper(swiper_payment, swiper_payment_data);
    }

    function teams_swiper_slide() {
      let swiper_teams = $('.wd-teams-wrap'); 
      let swiper_teams_data = {
          spaceBetween: 30,
          slidesPerView: 1,
          loop: true,
          breakpoints: {
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1025: {
              slidesPerView: 3,
            },
          },
          pagination: {
            el: ".swiper-pagination--teams",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next-teams",
            prevEl: ".swiper-button-prev-teams",
          },
      };

      let swiperTeams = new Swiper(swiper_teams, swiper_teams_data);
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

    function smooth_scroll(menu) {

      let heightHeader = $('.wd-header-section').outerHeight();

      $(window).scroll(function(){
            
        let scrollTop = $(document).scrollTop();
        if (scrollTop === 0)
        {
            $('a[href^="#wd-hero-section"]').addClass('active');
            return;
        }
        menu.each(function (index) {
          let currLink = $(this.hash);
          let refElement = currLink.position().top;
          let linkHeight = currLink.outerHeight();
  
          if (refElement - heightHeader <= scrollTop && refElement + linkHeight - heightHeader > scrollTop) {
            menu.removeClass("active");
            $(this).addClass("active");
          }
          else{
            $(this).removeClass("active");
          }
        });

      });

      menu.on('click', function (event) {
        event.preventDefault();
        let id_link =  $(this).attr('href');  
        $('html, body').animate({
          scrollTop: (parseInt($(id_link).offset().top)) - heightHeader
        }, 1000);
        $.magnificPopup.close();
      });

    }

    $(document).ready(function () {

      var menuMain = $('.menu-main .menu-item a');
      var menuMainMobile = $('.menu-main-mobile .menu-item a');
      smooth_scroll(menuMain);
      smooth_scroll(menuMainMobile);


      hero_swiper_slide();

      services_image_gallery();

      services_video_swiper_slide();

      payment_swiper_slide();

      teams_swiper_slide();

      $('.wd-swiper-video .popup-video').magnificPopup({
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
        
          },
        },
        fixedContentPos: false,
      });

      $('.wd-menu-icon .btn-menu-icon').magnificPopup({
        items: {
          src: '#wd-menu-mobile',
          type: 'inline'
        },
        removalDelay: 300,
        mainClass: 'mfp-fade wd-popup-menu-mobile',

      });

    });

} )( jQuery );
