'use strict';

define( function () {
    return function ( $scope, $stateParams, events, Users ) {
        $scope.user     = Users.get( $stateParams.profile );
    };
});