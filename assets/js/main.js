/**
 * Created by EZAZ on 29/5/2016.
 */
(function ($) {
    "use strict";

    $(window).load(function(){
     
    });



    $(document).ready(function() {


        /* Scrolling Smoothly
         * ----------------------------------------------------------------------------------------*/
        $('a[href*=#]:not([href=#])').on('click', function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
                || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 0
                    }, 1000);
                    return false;
                }
            }
        });






         /*SIDE NAV
         * ----------------------------------------------------------------------------------------*/
        $("#nav-btn").on('click', function() {
            $("#side-nav").animate({right: 0}, 'medium');
            $("#side-nav-mask").addClass('visible');
        });
        $("#side-nav-mask").on('click', function() {
            $("#side-nav").animate({right: -250}, 'medium');
            $("#side-nav-mask").removeClass('visible');
        });





   /* NAVBAR SCROLLING
        * ----------------------------------------------------------------------------*/
        var scroll_start = 0;
        var startchange = $('.navbar-inverse');
        var offset = startchange.offset();
        $(document).scroll(function() {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $('.navbar-inverse').css('background-color', '#F3BD32');
                $('.navbar-inverse').css('height', '60');
                $('.navbar-inverse').css('font-size', '1.1em');
                $('.navbar-inverse .logo').css('width', '50');
                $('.navbar-inverse .logo').css('height', '50');
                $('.navbar-inverse .logo').css('transition', '0.5s');
                $('.navbar-inverse').css('transition', '0.5s');
            } else {
                $('.navbar-inverse').css('background-color', '#F3BD32');
                $('.navbar-inverse').css('height', '70');
                $('.navbar-inverse').css('font-size', '1em');
                $('.navbar-inverse .logo').css('width', '60');
                $('.navbar-inverse .logo').css('height', '60');
                $('.navbar-inverse').css('transition', '0.5s');
            }
        });







      










    });

})(jQuery);