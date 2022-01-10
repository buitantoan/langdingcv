( function( $ ) {

    $(document).ready(function () {
        var navMenu = $('.wd-menu');
        navMenu.on('click', '.menu-item a', function (e) {
           console.log($(this)); 
        });
    });

} )( jQuery );
