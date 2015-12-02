'use strict';

define( function () {
    return function ( $scope, $stateParams, events, Publications ) {
        $scope.publications     = Publications.query({
            user    : $stateParams.profile
        });
    };
});