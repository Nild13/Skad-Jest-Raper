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

myRaper.controller('raperController', ['$scope','$http', function($scope, $http){
$scope.dupa = 'test';
$http.get('api/data.json').then(function(response){
    $scope.dane = response;
    $scope.dane2 = response.data[1].name
})
}])