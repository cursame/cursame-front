'use strict';

define( function () {
    return function ( $stateProvider ) {
        $stateProvider
            .state( 'dashboard', {
                abstract    : true,
                views       : {
                    'main-view'     : {
                        templateUrl : 'partials/base.html',
                        controller  : 'DashboardBaseCtrl'
                    }
                }
            })
            .state( 'home', {
                parent      : 'dashboard',
                url         : '/'
            });
    };
});