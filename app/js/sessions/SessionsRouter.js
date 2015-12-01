'use strict';

define( function () {
    return function ( $stateProvider ) {
        $stateProvider
            .state( 'login', {
                parent  : 'forms',
                url     : '/login',
                views   : {
                    'form'              : {
                        templateUrl     : 'partials/sessions/start.html',
                        controller      : 'SessionsStartCtrl'
                    }
                }
            })
            .state( 'logout', {
                parent  : 'dashboard',
                url     : '/logout',
                views   : {
                    'main-container'    : {
                        template        : '',
                        controller      : 'SessionsEndCtrl'
                    }
                }
            });
    };
});