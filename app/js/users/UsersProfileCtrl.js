'use strict';

define( function () {
    return function ( $scope, $stateParams, events, Users ) {
        $( 'body' ).addClass( 'body-container' );
        $scope.user     = Users.get( $stateParams.profile );

        $scope.$on( events.USERS_RETRIEVED, function () {
            $( '#user-banner' ).css({
                'background-image'  : 'url(' + $scope.user.cover + ')'
            });
        });
    };
});