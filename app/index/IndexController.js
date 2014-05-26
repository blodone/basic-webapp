(function(window, angular, undefined){ 'use strict';
    var index = angular.module('APPNAME.index', []);
    index.controller('IndexController', ['$scope',  function($scope){

        $scope.hello = "Hello World!";

    }]);
    
})(window, window.angular);