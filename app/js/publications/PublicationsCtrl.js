'use strict';

define( function () {
    return function ( $scope, Publications ) {
        $scope.publications     = Publications.query();

        console.log( $scope.publications );
    };
});