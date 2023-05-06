$(document).ready(function(){
	$('.slider').slick({

		slidesToShow:2,
		autoplay: true,
		
		responsive: [
			{ 
				
				breakpoint: 1240,
				settings: {
					slidesToShow:2

				}
				},{
				
				
				breakpoint: 992,
				settings: {
					slidesToShow:2


				}
				},{


				breakpoint: 768,
				settings: {
					slidesToShow:1


				}
			
			}





		]

	});


});





$(document).ready(function(){
	$('.slider1').slick({
		dots:true,
		slidesToShow:1,
		autoplay: true,
		autoplaySpeed:3000,
	
		
		responsive: [
			{ 
				
				breakpoint: 1240,
				settings: {
					slidesToShow:1

				}
				},{
				
				
				breakpoint: 992,
				settings: {
					slidesToShow:1


				}
				},{


				breakpoint: 768,
				settings: {
					slidesToShow:1


				}
			
			}





		]

	});


});



