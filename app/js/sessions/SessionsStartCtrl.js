'use strict';

define( function () {
    return function ( $scope, events, Sessions ) {
        $scope.login    = function () {
            Sessions.start( $scope.user );
        };

        $scope.$on( events.LOGIN_SUCCESS, function () {
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