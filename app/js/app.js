'use strict';

define( function ( require ) {

    require( 'sessions/SessionsModule' );
    require( 'users/UsersModule' );

    var app     = angular.module( 'cursame-front', [
            'ui.router',
            'SessionsModule',
            'UsersModule'
        ]);

    app.run([ '$rootScope', '$state', function ( $rootScope, $state ) {
        $state.go( 'login' );
    }]);

    return app;
});