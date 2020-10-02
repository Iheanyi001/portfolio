
function myFunction(x) {
 var isActive = x.classList.toggle('change');
  if(isActive == true){
  	$('#nav-medium-content').animate({height: 'show'}, 'slow');
  	$('.nav-link').css({'color':'#0078ff'});
    $('#nag').addClass('nav-reduce');
	$('#nag').removeClass('nav-increase');
	$('.web-name a').css({'color':'#0078ff'});
	$('.bar1,.bar2,.bar3').css({'background-color': '#000000'});
  }
  if(isActive == false){
  	$('#nav-medium-content').hide();
	$('.nav-link').css({'color':'#ffffff'});

  } 
}
$(document).ready(function(){





$(window).scroll(function(){
	var height = 40; 
	var top = 1200;
	if($(window).scrollTop() > height){
	$('#nag').addClass('nav-reduce');
	$('#nag').addClass('nav-shadow');
	$('#nag').removeClass('nav-increase');
	$('.web-name a').css({'color':'#0078ff'});
	$('.nav-link').css({'color':'#0078ff'});
	$('.bar1,.bar2,.bar3').css({'background-color': '#000000'});
	$('.current::after').css({'background-color': '#0078ff'});
	//console.log($('.current::after'));
	}
	else{
	//document.getElementById('nav-medium-content').style.display = "none";
	$('#nag').addClass('nav-increase');
	$('#nag').removeClass('nav-shadow');
	$('#nag').removeClass('nav-reduce');
	$('.web-name a').css({'color':'#ffffff'});
	$('.nav-link').css({'color':'#ffffff'});
	$('.bar1,.bar2,.bar3').css({'background-color': '#ffffff'});
	}
});

/*******initialize wow*******/
new WOW().init();

$('.sub-services-num').counterUp({
		delay: 15,
		time: 2000
	});
	/*--/ Testimonials owl /--*/
$('#testimonials-owl').owlCarousel({
		margin: 20,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
});

if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}
});


