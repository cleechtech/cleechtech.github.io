
$(document).ready(function() {
	
	$.get('/nytimes/mostviewed', function(data){
		console.log(data.results);
	});

	//========
	// EVENTS
	//========
	// navigation button
	$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
});