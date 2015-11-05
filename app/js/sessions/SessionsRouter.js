'use strict';

define( function () {
    return function ( $stateProvider ) {
        $stateProvider
            .state( 'login', {
                url     : 'login',
                views   : {
                    'main-view'     : {
                        templateUrl : 'partials/sessions/start.html',
                        controller  : 'SessionsStartCtrl'
                    }
                }
            });
    };
});