'use strict';

define( function () {
    return function ( $stateProvider ) {
        $stateProvider
            .state( 'register', {
                url     : 'register',
                views   : {
                    'main-view' : {
                        templateUrl : 'partials/users/register.html'
                    }
                }
            });
    };
});