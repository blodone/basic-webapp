(function(window, angular, undefined){ 'use strict';
    var master = angular.module('APPNAME.master', []);
    master.controller('MasterController', ['$scope',  function($scope){

        $scope.hello = "Hello World!";

    }]);
    
})(window, window.angular);