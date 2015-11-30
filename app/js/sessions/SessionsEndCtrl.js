'use strict';

define( function () {
    return function ( $scope, events, Sessions ) {
        Sessions.terminate( Sessions.getToken() );

        $scope.$on( events.LOGOUT_SUCCESS, function () {
            $scope.$emit( events.SYSTEM_MESSAGE, {
                msg     : 'alerts.logout.success',
                type    : 'success'
            });
            $scope.$state.go( 'login' );
        });
    };
});