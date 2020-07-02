$(document).ready(function(){
     "use strict";

     $(window).on('load', function() {
        if($(".pre-loader").length > 0) {
            $(".pre-loader").fadeOut("slow");
        }
     })

    // Mobile menu 
    $('#mobile-menu').meanmenu({
        meanMenuContainer:".mobile-menu",
        meanScreenWidth: "767"
    });

    // Carousel 
    $(".advertiser-active").owlCarousel({
        loop: true,
        margin:0,
        nav:true,
        navText:['<i class="fa fa-chevron-left fa-2x"></i>','<i class="fa fa-chevron-right fa-2x"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    // Magnifinc Popup 
    $('.video-popup').magnificPopup({
        type:'iframe'
    })




})