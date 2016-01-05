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

});

