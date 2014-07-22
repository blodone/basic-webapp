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

})(window, window.angular);