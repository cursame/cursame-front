'use strict';

define( function () {
    return function ( $scope, events, Sessions ) {
        $( 'body' ).addClass( 'login-state' );

        $scope.login    = function () {
            Sessions.start( $scope.user );
        }

        $scope.$on( events.LOGIN_SUCCESS, function ( e, data ) {
            $scope.$emit( events.SYSTEM_MESSAGE, {
                msg     : 'alerts.login.success',
                type    : 'success'
            });
            $scope.$state.go( 'home' );
        });
        $scope.$on( events.LOGIN_ERROR, function () {
            $scope.$emit( events.SYSTEM_MESSAGE, {
                msg     : 'alerts.error.login',
                type    : 'error'
            });
        });
    };
});