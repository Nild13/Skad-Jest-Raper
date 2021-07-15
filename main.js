let myRaper = angular.module('myRaper',['ngRoute']);

myRaper.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/mazowieckie',{
            templateUrl:'views/mazowieckie.html',
            controller:'raperController'
        })
        .when('/srem',{
            templateUrl:'cities/srem.html',
            controller:'raperController'
        })
        .otherwise({
            rediretTo:'/'
        })
}])

myRaper.controller('raperController', ['$scope', function($scope){
$scope.dupa = 'test';
}])