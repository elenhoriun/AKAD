//=require jquery.min.js

// to inlude plugins add "=" sign below
// require bootstrap.min.js
//=require slick.min.js 

// require popper.min.js

// require lightbox.min.js
//=require util.js
// require tab.js 
// require isotope.pkgd.min.js

;(function($){

	$(document).ready(function(){
		


// Slider
		$('.ba-works__slider').slick({
		      dots: true,
		      arrows: false,
		      autoplay: true,
		      autoplaySpeed: 4000
		    });

		$('.ba-team__slider').slick({
		      
		      dots: false,
		      arrows: false,
		      autoplay: true,
		      autoplaySpeed: 4000,
		      slidesToShow: 3,
		     slidesToScroll: 3,
		     responsive: [
    
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
		});

			
	});


// Map
	$(window).on('load', function(){
		var map;

		map = new google.maps.Map(
	    	document.getElementById('ba_map'), {
          		center: {lat: 49.5685276, lng: 34.58543170000007},
          		zoom: 17,
          		disableDefaultUI: true
        });

        var markerPoltava = new google.maps.Marker({
          position: {lat: 49.5685276, lng: 34.58543170000007},
          map: map,
          icon: 'img/marker-icon.png'
        });

		var styles = [
    {
        "featureType": "administrative.country",
        "elementType": "labels.icon",
        "stylers": [
            {
                "saturation": "23"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ebf0ec"
            }
        ]
    }
]
		map.setOptions({styles: styles});
	});


	 $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top -100
    }, 750);
	});


})(jQuery);