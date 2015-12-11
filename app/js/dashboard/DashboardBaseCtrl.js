'use strict';

define( function () {
    return function ( $rootScope, Sessions, Users ) {
        $( 'body' ).removeClass( 'login-state' );

        $rootScope.me   = Users.get( Sessions.getUserId() );
    };
});