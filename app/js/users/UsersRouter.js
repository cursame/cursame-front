'use strict';

define( function () {
    return function ( $stateProvider ) {
        $stateProvider
            .state( 'forms', {
                abstract    : true,
                views       : {
                    'main-view'     : {
                        templateUrl : 'partials/users/form.html'
                    }
                }
            })
            .state( 'register', {
                parent  : 'forms',
                url     : 'register',
                views   : {
                    'form'          : {
                        templateUrl : 'partials/users/register.html'
                    }
                }
            });
    };
});