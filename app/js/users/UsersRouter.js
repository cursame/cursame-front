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
                parent      : 'forms',
                url         : '/register',
                views       : {
                    'form'          : {
                        templateUrl : 'partials/users/register.html'
                    }
                }
            })
            .state( 'retrieve_pass', {
                parent      : 'forms',
                url         : '/retrieve-pass',
                views       : {
                    'form'          : {
                        templateUrl : 'partials/users/retrieve_pass.html'
                    }
                }
            })
            .state( 'send_instructions', {
                parent      : 'forms',
                url         : '/send-instructions',
                views       : {
                    'form'          : {
                        templateUrl : 'partials/users/send_instructions.html'
                    }
                }
            })
            .state( 'unblock_instructions', {
                parent      : 'forms',
                url         : '/unblock-instructions',
                views       : {
                    'form'          : {
                        templateUrl : 'partials/users/unblock_instructions.html'
                    }
                }
            })
            .state( 'user_edit', {
                parent      : 'dashboard',
                url         : '/user/edit',
                views       : {
                    'main-container'    : {
                        templateUrl     : 'partials/users/edit.html',
                        controller      : 'UsersEditCtrl'
                    }
                }
            })
            .state( 'user_friends', {
                parent      : 'user_base',
                url         : '/:profile/friends',
                views       : {
                    'profile-content'   : {
                        templateUrl     : 'partials/users/friends.html'
                    }
                }
            })
            .state( 'user_base', {
                abstract    : true,
                parent      : 'dashboard',
                url         : '/users',
                views       : {
                    'main-container'    : {
                        templateUrl     : 'partials/users/profile_base.html',
                        controller      : 'UsersProfileCtrl'
                    }
                }
            })
            .state( 'user_courses', {
                parent      : 'user_base',
                url         : '/:profile/courses',
                views       : {
                    'profile-content'   : {
                        templateUrl     : 'partials/users/courses.html',
                        controller      : 'UsersCoursesCtrl'
                    }
                }
            })
            .state( 'user_profile', {
                parent      : 'user_base',
                url         : '/:profile',
                views       : {
                    'profile-content'   : {
                        templateUrl     : 'partials/users/publications.html',
                        controller      : 'UsersPublicationsCtrl'
                    }
                }
            })
            .state( 'user_info', {
                parent      : 'user_base',
                url         : '/:profile/info',
                views       : {
                    'profile-content'   : {
                        templateUrl     : 'partials/users/info.html'
                    }
                }
            });
    };
});