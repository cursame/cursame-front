'use strict';

define( function ( require ) {
    var CoursesList         = require( 'courses/CoursesList' );
    var CoursesRouter       = require( 'courses/CoursesRouter' );
    var CoursesService      = require( 'courses/CoursesService' );

    var CoursesModule       = angular.module( 'CoursesModule', []);

    CoursesModule.config([ '$stateProvider', CoursesRouter ]);

    CoursesModule.controller( 'CoursesList', [ '$scope', 'CoursesService', CoursesList ] );

    CoursesModule.factory( 'CoursesService', [ 'BaseService', CoursesService ] );
});