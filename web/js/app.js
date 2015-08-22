(function () {
    var app = angular.module("app", ["ngRoute", "inicio"]);
    app.controller('appCtrl', function ($scope, $location) {
           $scope.master = 'bruno';

      
    });
    
    
    app.config(function ($routeProvider) {
        $routeProvider.when('/inicio', {
            templateUrl: 'componentes/inicio/inicio.html',
            controller: 'inicioCtrl'
        }).when('/artigo',{
            templateUrl:'componentes/artigo/artigo.html',
            controller: 'artigoCtrl'
        });
        $routeProvider.otherwise({
            redirectTo: '/inicio'
        });

    });


})();
