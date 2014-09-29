var app = angular.module('jasonshark', [
	'ui.router',
	'ui.bootstrap'
]);

app.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'views/home.html'
		})
		.state('resume', {
			url: '/resume',
			templateUrl: 'views/resume.html'
		});

	$urlRouterProvider.otherwise('/')
});

app.run(function($rootScope){
	// could be in a NavCtrl
	$rootScope.hidden = false;
	$rootScope.hideMenu = function(){
		$rootScope.hidden = !$rootScope.hidden;
	};
	
	//blogitem hover
	$(document).on("mouseenter", '.blogitem, .portfolioitem', function(){
		$('.blogitem-hoverinfo, .portfolioitem-hoverinfo', this).stop(true, true).fadeIn('200', 'easeInOutCubic');
	});

	$(document).on("mouseleave", '.blogitem, .portfolioitem', function(){
		$('.blogitem-hoverinfo, .portfolioitem-hoverinfo', this).stop(true, true).fadeOut('200', 'easeInOutCubic');
	});
});
