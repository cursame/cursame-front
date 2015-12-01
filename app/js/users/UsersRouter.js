'use strict';

define( function () {
    return function ( $stateProvider ) {
        $stateProvider
            .state( 'forms', {
                abstract    : true,
                views       : {
                    'main-view'     : {
                        templateUrl : 'partials/users/form.html',
                        controller  : 'UsersFormCtrl'
                    }
                }
            })
            .state( 'register', {
                parent  : 'forms',
                url     : '/register',
                views   : {
                    'form'          : {
                        templateUrl : 'partials/users/register.html'
                    }
                }
            })
            .state( 'retrieve_pass', {
                parent  : 'forms',
                url     : '/retrieve-pass',
                views   : {
                    'form'          : {
                        templateUrl : 'partials/users/retrieve_pass.html'
                    }
                }
            })
            .state( 'send_instructions', {
                parent  : 'forms',
                url     : '/send-instructions',
                views   : {
                    'form'          : {
                        templateUrl : 'partials/users/send_instructions.html'
                    }
                }
            })
            .state( 'unblock_instructions', {
                parent  : 'forms',
                url     : '/unblock-instructions',
                views   : {
                    'form'          : {
                        templateUrl : 'partials/users/unblock_instructions.html'
                    }
                }
            })
            .state( 'user_edit', {
                parent  : 'dashboard',
                url     : '/user/edit',
                views   : {
                    'main-container'    : {
                        templateUrl     : 'partials/users/edit.html'
                    }
                }
            })
            .state( 'user_profile', {
                parent  : 'dashboard',
                url     : '/user/:profile',
                views   : {
                    'main-container'    : {
                        templateUrl     : 'partials/users/profile.html',
                        controller      : 'UsersProfileCtrl'
                    }
                }
            });
    };
});