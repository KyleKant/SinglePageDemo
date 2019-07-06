var app = angular.module('myApp', ['ngMaterial', 'ngRoute']);
app.controller('MyController', function ($scope, $mdToast) {
	
})

app.config(function ($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'Primary.html',
		controller: 'myControllerPrimary'
	})
	.when('/Social', {
		templateUrl: 'Social.html'
	})
	.when('/Promotion', {
		templateUrl: 'Promotion.html'
	})
	.otherwise({ redirectTo: '/' });
	$locationProvider.html5Mode(false);
})

app.controller('myControllerPrimary', function ($scope, $http) {
	$http.get('http://localhost/angular_php/index.php/welcome/getdata')
	.then(function(response){
		console.log(response.data);
	}, function(response){

	})
})
