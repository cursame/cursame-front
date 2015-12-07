'use strict';

define( function () {
    return function ( $stateProvider ) {
        $stateProvider
            .state( 'courses', {
                parent  : 'dashboard',
                url     : '/courses',
                views   : {
                    'main-container'    : {
                        templateUrl     : 'partials/courses/courses.html',
                        controller      : 'CoursesList'
                    }
                }
            })
            .state( 'courses.add', {
                parent  : 'dashboard',
                url     : '/courses/add',
                views   : {
                    'main-container'    : {
                        templateUrl     : 'partials/courses/add.html'
                    }
                }
            });
    };
});