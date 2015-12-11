'use strict';

define( function () {
    return function ( $scope, events, Users, Session ) {
        $scope.me.password  = '';
        $scope.update       = function () {
            Users.update( Session.getUserId(), $scope.me );
        };

        $scope.$on( Users.getEvent( 'ERROR' ), function () {
            $scope.$emit( events.SYSTEM_MESSAGE, {
                msg     : 'alerts.error.user_update',
                type    : 'error'
            });
        });
        $scope.$on( Users.getEvent( 'UPDATED' ), function () {
            $scope.$emit( events.SYSTEM_MESSAGE, {
                msg     : 'alerts.success.user_update',
                type    : 'success'
            });
            $scope.$state.go( 'user_profile', {
                profile : $scope.me.url
            });
        });
    };
});