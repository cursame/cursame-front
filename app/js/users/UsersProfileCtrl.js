'use strict';

define( function () {
    return function ( $scope, $state, events, Users ) {
        $( 'body' ).addClass( 'body-container' );
        $scope.user     = Users.get( $state.params.profile );

        $scope.$on( events.USERS_RETRIEVED, function () {
            $( '#user-banner' ).css({
                'background-image'  : 'url(' + $scope.user.cover + ')'
            });
        });
        $scope.$on( '$stateChangeStart', function ( e, toState ) {
            if ( toState.parent != 'user_base' ) {
                $( 'body' ).removeClass( 'body-container' );
            }
        });
    };
});