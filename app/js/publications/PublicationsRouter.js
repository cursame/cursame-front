'use strict';

define( function () {
    return function ( $stateProvider ) {
        $stateProvider
            .state( 'home', {
                parent  : 'dashboard',
                url     : '/',
                views   : {
                    'main-container'    : {
                        templateUrl     : 'partials/publications/publications.html',
                        controller      : 'PublicationsCtrl'
                    }
                }
            })
    };
});