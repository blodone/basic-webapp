(function(window, angular, undefined){ 'use strict';
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['APPNAME']);
    });

    /*
     *  Load all modules needed
     */
    var app = angular.module('APPNAME', [
        'ngRoute',
        'APPNAME.index'
    ]);

    /*
     *  Angular routing
     */
    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'views/equipment-list.html', controller: 'AnyController'});
        $routeProvider.when('/start', {templateUrl: 'views/equipment-list.html', controller: 'AnyController'});
    }]);
})(window, window.angular);