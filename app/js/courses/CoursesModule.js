'use strict';

define( function ( require ) {
    var CoursesRouter       = require( 'courses/CoursesRouter' );
    var CoursesService      = require( 'courses/CoursesService' );

    var CoursesModule       = angular.module( 'CoursesModule', []);

    CoursesModule.config([ '$stateProvider', CoursesRouter ]);

    CoursesModule.factory( 'CoursesService', [ 'BaseService', CoursesService ] );
});