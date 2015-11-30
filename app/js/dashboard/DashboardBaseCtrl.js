'use strict';

define( function () {
    return function ( $scope, Sessions, Users ) {
        $( 'body' ).removeClass( 'login-state' );

        $scope.user     = Users.get( Sessions.getUserId() );
    };
});