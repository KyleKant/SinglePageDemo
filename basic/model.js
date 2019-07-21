var app = angular.module('myApp', ['ngMaterial', 'ngRoute']);
app.controller('MyController', function ($scope, $mdToast) {
	
})

app.config(function ($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'Primary.html',
		controller: 'myControllerPrimary'
	})
	.when('/social', {
		templateUrl: 'Social.html',
		controller: 'myControllerSocial'
	})
	.when('/promotion', {
		templateUrl: 'Promotion.html',
		controller: 'myControllerPromotion'
	})
	.otherwise({ redirectTo: '/' });
	$locationProvider.html5Mode(true);
})

app.controller('myControllerPrimary', function ($scope, $http) {
	$http.get('http://localhost/angular_php/index.php/welcome/getdata')
	.then(function(response){
		console.log(response.data);
		$scope.data = response.data;
	}, function(response){
		console.log("Get data failed!");
	})
})

app.controller('myControllerSocial', function ($scope, $http) {
	$http.get('data/dataSocial.json').then(
		function(response){
		$scope.data = response.data;
	}, function(res){

	})
})

app.controller('myControllerPromotion', function ($scope, $http) {
	$http.get('data/dataPromotion.json').then(
		function(response){
			$scope.data = response.data;
		}, function(response){

		})	
})
