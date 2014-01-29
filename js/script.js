$(function(){
	$('#container')
		.css('height', function(){
			return window.innerHeight;
		});
	$('#stripe').css('width', function(){
		return window.innerWidth;
	}).css('padding', 0);	
});
