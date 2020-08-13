(function($) {
	'use strict';
	jQuery(document).on('ready', function(){

        // START MENU JS
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 500) {
                $('.navbar-light').addClass('menu-shrink');
            } else {
                $('.navbar-light').removeClass('menu-shrink');
            }
        });			
     
        $('.navbar-nav .nav-item .nav-link').on('click', function(e){
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 500
            }, 1600);
            e.preventDefault();
        });
       
        $(document).on('click','.navbar-collapse.show',function(e) {
            if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
                $(this).collapse('hide');
            }
        });	
	

        
        //Home-Slider
            $('.home-slider').owlCarousel({
            items:1,
            loop:true,
            margin:5,
            nav:false ,
            autoplay: true,
            autoplayhover:true,
            dots:true,
            autoplayTimeout:4000,
            animateOut: 'slideOutUp',
            animateOut: 'slideOutDown',
           
        });



        //  Testimonials-slider 
          $('.Testimonials-slider').owlCarousel({
            items:1,
            loop:true,
            margin:1,
            nav:false,
            dots: true,
            autoplay: true,
            autoplayTimeout:4000,
            autoplayHoverPause:true,
        })


      


        /* Demo purposes only */
        $(".hover").mouseleave(
            function () {
            $(this).removeClass("hover");
            }
        );
 

        // PRELOADER
        jQuery(window).on('load',function(){
            jQuery(".spinner").fadeOut(500);
        });
        

        // WOW JS
        new WOW().init();
       



    }); 	
})(jQuery);