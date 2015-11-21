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
            })
            .state( 'retrieve_pass', {
                parent  : 'forms',
                url     : 'retrieve-pass',
                views   : {
                    'form'          : {
                        templateUrl : 'partials/users/retrieve_pass.html'
                    }
                }
            })
            .state( 'send_instructions', {
                parent  : 'forms',
                url     : 'send-instructions',
                views   : {
                    'form'          : {
                        templateUrl : 'partials/users/send_instructions.html'
                    }
                }
            });
    };
});