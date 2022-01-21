( function( $ ) {


    function wd_magnific_popup(element, magnific_option) {
      element.magnificPopup(magnific_option);
    }

    function wd_swiper_slider(element, swiper_option) {
      let swiper = new Swiper(element, swiper_option);
    }

    function smooth_scroll(menu) {

      let heightHeader = $('.wd-header-section').outerHeight();

      $(window).scroll(function(){
            
        let scrollTop = $(document).scrollTop() + 2;
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

      var swiper_hero = $('.wd-swiper-hero'); 
      var swiper_herro_data = {
          spaceBetween: 0,
          slidesPerView: 1,
          centeredSlides: true,
          loop: true,
          speed: 1200,
          autoplay: {
              delay: 5000,
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

      wd_swiper_slider(swiper_hero,swiper_herro_data);
      
      var swiper_video = $('.wd-swiper-video'); 
      var swiper_video_data = {
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

      wd_swiper_slider(swiper_video, swiper_video_data);

      var swiper_payment = $('.wd-payment-wrap'); 
      var swiper_payment_data = {
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

      wd_swiper_slider(swiper_payment, swiper_payment_data);

      var swiper_teams = $('.wd-teams-wrap'); 
      var swiper_teams_data = {
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

      wd_swiper_slider(swiper_teams, swiper_teams_data);

      var wd_image_gallery = $('.wd-services-image .wd-image-gallery');
      var wd_image_gallery_data = {
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
      }
      wd_magnific_popup(wd_image_gallery, wd_image_gallery_data);

      var wd_popup_video = $('.wd-swiper-video .popup-video');
      var wd_popup_video_data = {
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
      };

      wd_magnific_popup(wd_popup_video, wd_popup_video_data);

      var wd_menu_icon = $('.wd-menu-icon .btn-menu-icon');
      var wd_menu_data = {
        items: {
          src: '#wd-menu-mobile',
          type: 'inline'
        },
        removalDelay: 300,
        mainClass: 'mfp-fade wd-popup-menu-mobile',
      }
      wd_magnific_popup(wd_menu_icon, wd_menu_data);

    });

} )( jQuery );
