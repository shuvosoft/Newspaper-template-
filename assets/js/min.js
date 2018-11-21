$(document).ready(function(){
	  $('.owl-carousel').owlCarousel({
	    margin:15,
		loop:true,
		navText:['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
		
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}
	})
	
	
	var headerFixed = function() {        

     
            var hd_height = $('#main-menu').height();           
            $(window).on('load scroll', function(){                
                if ( $(window).scrollTop() > hd_height + 30 ) {
                    $('#main-menu').addClass('downscrolled');                      
                } else {                    
                    $('#main-menu').removeClass('downscrolled');                   
                }
                if( $(window).scrollTop() > 300 ) {
                    $('#main-menu').addClass('upscrolled');                    
                } else {
                    $('#main-menu').removeClass('upscrolled');                    
                }
            })            
           
    }
	
});


