//=require jquery.min.js

// to inlude plugins add "=" sign below
// require bootstrap.min.js
//=require slick.min.js 

// require popper.min.js

//=require lightbox.min.js
//=require util.js
//=require tab.js 
//=require isotope.pkgd.min.js

;(function($){

	$(document).ready(function(){
		$('.ak-slider').slick({
		      
		      dots: true,
		      arrows: false,
		      autoplay: true,
		      autoplaySpeed: 4000
		    });

		console.log('test');

		var $grid; 

		$grid = $('.ak-portfolio__items').isotope({
			itemSelector: '.ak-portfolio__item',
			percentPosition: true,
			masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: '.ak-portfolio__sizer'
  			}
		});

		$('.ak-portfolio__filter').on('click', 'a', function(evt){
			evt.preventDefault();
			
			var filterValue = $(this).attr('data-filter');
  			$grid.isotope({ filter: filterValue });

  			$('.ak-portfolio__filter a').removeClass('active');
  			$(this).addClass('active');

  			// Toggle lightbox filter

  			// $('ak-portfolio__item a').each(function(){
  			// 	// console.log($(this).data('filter'));
  			// 	if (filterValue == "*") {
  			// 		$(this).data('lightbox', 'portfolio')
  			// 	} else {
  			// 		$(this).data('lightbox', $(this).data('filter'));
  			// 	}
  			// });
		});

		$('#mobile-menu-link').on('click', function(evt){
			evt.preventDefault();
			$(this).toggleClass('open');
			$('#mobile-menu').toggleClass('ak-menu--open');
		});

		
				
	});

	$(window).on('load', function(){
		var map;

		map = new google.maps.Map(
	    	document.getElementById('ak_map'), {
          		center: {lat: 49.5685276, lng: 34.58543170000007},
          		zoom: 17,
          		disableDefaultUI: true
        });

        var markerPoltava = new google.maps.Marker({
          position: {lat: 49.5685276, lng: 34.58543170000007},
          map: map
        });

		var styles = [
			  {
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#f5f5f5"
			      }
			    ]
			  },
			  {
			    "elementType": "labels.icon",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#616161"
			      }
			    ]
			  },
			  {
			    "elementType": "labels.text.stroke",
			    "stylers": [
			      {
			        "color": "#f5f5f5"
			      }
			    ]
			  },
			  {
			    "featureType": "administrative.land_parcel",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#bdbdbd"
			      }
			    ]
			  },
			  {
			    "featureType": "poi",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#eeeeee"
			      }
			    ]
			  },
			  {
			    "featureType": "poi",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#757575"
			      }
			    ]
			  },
			  {
			    "featureType": "poi.park",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#e5e5e5"
			      }
			    ]
			  },
			  {
			    "featureType": "poi.park",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#9e9e9e"
			      }
			    ]
			  },
			  {
			    "featureType": "road",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#ffffff"
			      }
			    ]
			  },
			  {
			    "featureType": "road.arterial",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#757575"
			      }
			    ]
			  },
			  {
			    "featureType": "road.highway",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#dadada"
			      }
			    ]
			  },
			  {
			    "featureType": "road.highway",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#616161"
			      }
			    ]
			  },
			  {
			    "featureType": "road.local",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#9e9e9e"
			      }
			    ]
			  },
			  {
			    "featureType": "transit.line",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#e5e5e5"
			      }
			    ]
			  },
			  {
			    "featureType": "transit.station",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#eeeeee"
			      }
			    ]
			  },
			  {
			    "featureType": "water",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#c9c9c9"
			      }
			    ]
			  },
			  {
			    "featureType": "water",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#9e9e9e"
			      }
			    ]
			  }
			]
		map.setOptions({styles: styles});
	});


})(jQuery);