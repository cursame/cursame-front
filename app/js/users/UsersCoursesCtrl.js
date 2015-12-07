'use strict';

define( function () {
    return function ( $scope, $stateParams, Courses ) {
        $scope.courses  = Courses.query({
            user    : $stateParams.profile
        });
    };
});