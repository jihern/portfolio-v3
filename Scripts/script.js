$(document).ready( function() {
	// $("#loader").fadeOut("slow");
	$("#pivot").mouseenter(function(){
		$('#pivot img').attr('src', 'Images/pivot-hover.jpg');
	}).mouseleave(function(){
		$('#pivot img').attr('src', 'Images/pivot.png');
	});		

	$("#hundred").mouseenter(function(){
		$('#hundred img').attr('src', 'Images/100hover.jpg').delay(1000);
	}).mouseleave(function(){
		$('#hundred img').attr('src', 'Images/100days.jpg').delay(1000);
	});		

	$("#weather").mouseenter(function(){
		$('#weather img').attr('src', 'Images/weather-hover.jpg');
	}).mouseleave(function(){
		$('#weather img').attr('src', 'Images/weather.jpg');
	});		

	$("#sierra").mouseenter(function(){
		$('#sierra img').attr('src', 'Images/sierra-hover.jpg');
	}).mouseleave(function(){
		$('#sierra img').attr('src', 'Images/sierra.png');
	});		

	$("#portfolio").mouseenter(function(){
		$('#portfolio img').attr('src', 'Images/portfolio-hover.jpg');
	}).mouseleave(function(){
		$('#portfolio img').attr('src', 'Images/portfolio.jpg');
	});			

	$("#pinterview").mouseenter(function(){
		$('#pinterview img').attr('src', 'Images/pinterview-hover.jpg');
	}).mouseleave(function(){
		$('#pinterview img').attr('src', 'Images/pinterview.jpg');
	});			

	$("#cafehop").mouseenter(function(){
		$('#cafehop img').attr('src', 'Images/cafehop-hover.jpg');
	}).mouseleave(function(){
		$('#cafehop img').attr('src', 'Images/cafehop.jpg');
	});			

	$("#smartshelf").mouseenter(function(){
		$('#smartshelf img').attr('src', 'Images/smartshelf-hover.jpg');
	}).mouseleave(function(){
		$('#smartshelf img').attr('src', 'Images/smartshelf.jpg');
	});			

});

