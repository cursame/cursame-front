'use strict';

define( function () {
    return function ( $scope, events, Sessions ) {
        $( 'body' ).addClass( 'login-state' );

        $scope.login    = function () {
            Sessions.start( $scope.user );
        }

        $scope.$on( events.LOGIN_SUCCESS, function ( e, data ) {
            console.log( 'login' );
        });
        $scope.$on( events.LOGIN_ERROR, function () {
            console.log( 'login:error' );
        });
    };
});