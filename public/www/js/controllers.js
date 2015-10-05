angular.module('starter.controllers', ['ionic'])

.controller('indexCtrl',function($scope, $timeout, $state, $location){
	$timeout(function() {
		$location.url('/register')
  	}, 3000);
})

