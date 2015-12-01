'use strict';

define( function () {
    return function ( $scope, $stateParams, events, Users ) {
        $scope.user     = Users.get( $stateParams.profile );

        $scope.$on( events.USERS_RETRIEVED, function () {
            $( '#user-banner' ).css({
                'background-image'  : 'url(' + $scope.user.cover + ')'
            });
        });
    };
});