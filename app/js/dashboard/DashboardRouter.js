'use strict';

define( function () {
    return function ( $stateProvider ) {
        $stateProvider
            .state( 'dashboard', {
                abstract    : true,
                resolve     : {
                    loginRequired   : [ '$q', '$state', '$timeout', 'SessionsService', function ( $q, $state, $timeout, Sessions ) {
                        if ( !Sessions.isLoggedIn() ) {
                            $timeout( function () {
                                $state.go( 'login' );
                            });
                            return $q.reject( 'User not logged in!' );
                        }
                    }]
                },
                views       : {
                    'main-view'     : {
                        templateUrl : 'partials/base.html',
                        controller  : 'DashboardBaseCtrl'
                    }
                }
            });
    };
});