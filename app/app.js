(function(window, angular, undefined){ 'use strict';
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['APPNAME']);
    });

    /*
     *  Load all modules needed
     */
    var app = angular.module('APPNAME', [
        'ui.router',
        'APPNAME.master'
    ]);

    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('index', {
                url: "/",
                templateUrl: "views/start.html",
                controller: "IndexController"
            });
    }]);

})(window, window.angular);