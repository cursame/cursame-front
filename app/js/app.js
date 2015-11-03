'use strict';

define( function ( require ) {

    require( 'sessions/SessionsModule' );

    var app     = angular.module( 'cursame-front', [
            'ui.router',
            'SessionsModule'
        ]);

    app.run([ '$rootScope', '$state', function ( $rootScope, $state ) {
        $state.go( 'login' );
    }]);

    return app;
});