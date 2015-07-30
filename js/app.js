var app = angular.module('polApp', ['ngRoute']);

app.config(['$routeProvider', function(router) {
	router
		.when('/zipSearch', {
			templateUrl: './routes/zipRoute.html',
			controller: 'zipController'
		})
		.when('/nameSearch', {
			templateUrl: './routes/nameRoute.html',
			controller: 'nameController'
		})
		.otherwise({
			redirectTo: '/zipSearch'
		})
}])