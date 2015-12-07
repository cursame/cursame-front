'use strict';

define( function () {
    return function ( $scope, Courses ) {
        $scope.courses  = Courses.query();
    };
});