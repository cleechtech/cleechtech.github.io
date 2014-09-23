$(function(){
	// menu togglage
	 $("#menu-toggle").click(function(e) { 
	 	e.preventDefault(); 
	 	console.log('clicked')
	 	$("#wrapper").toggleClass("toggled"); 
	 });
})