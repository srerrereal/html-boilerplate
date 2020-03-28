
$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:false,
		scrollHorizontally: true,
		css3: true,
		verticalCentered:true,

	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);


	/*$('.owl-carousel').owlCarousel({
		loop:false,
		margin:30,
		nav:true,
		navText:[
			'<i class="fas fa-arrow-circle-right"></i>', '<i class="fas fa-arrow-circle-left"></i>'
		],
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
		},
		center: true,
		dotClass: 'owl-dots',
		autoHeightClass: 'owl-height',
		dragClass: 'owl-drag',
	})
*/
	$('.carousel').carousel(
		{

		
		
		});
	$('#my-carousel').carousel(

	)


});

