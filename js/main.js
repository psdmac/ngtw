var ngtw = angular.module('homePageApp',['ui.router']);

ngtw.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/login");
	$stateProvider
    .state('state1', {
      url: '/state1',
      templateUrl: '../views/main.html',
      controller:'MainCtrl'
    })
    .state('home', {
        url: '/',
        templateUrl: '../views/home.html',
        controller: 'HomeCtrl'
    });
})

ngtw.controller('HomeCtrl',['$scope','Example', function HomeCtrl($scope, Example) {
	$scope.lists = Example.lists;
    $scope.tags = Example.tags;
    $scope.open = false;
}])

ngtw.controller('SidebarCtrl',['$scope', function HomeCtrl($scope) {

}])