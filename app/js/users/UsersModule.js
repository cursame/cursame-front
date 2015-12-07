'use strict';

define( function ( require ) {
    var UsersCoursesCtrl        = require( 'users/UsersCoursesCtrl' );
    var UsersEditCtrl           = require( 'users/UsersEditCtrl' );
    var UsersFormCtrl           = require( 'users/UsersFormCtrl' );
    var UsersProfileCtrl        = require( 'users/UsersProfileCtrl' );
    var UsersPublicationsCtrl   = require( 'users/UsersPublicationsCtrl' );
    var UsersRouter             = require( 'users/UsersRouter' );
    var UsersService            = require( 'users/UsersService' );

    var UsersModule             = angular.module( 'UsersModule', [] );

    UsersModule.config([ '$stateProvider', UsersRouter ]);

    UsersModule.controller( 'UsersCoursesCtrl', [ '$scope', '$stateParams', 'CoursesService', UsersCoursesCtrl ] );

    UsersModule.controller( 'UsersEditCtrl', [ '$scope', 'UsersService', 'SessionsService', UsersEditCtrl ] );

    UsersModule.controller( 'UsersFormCtrl', [ UsersFormCtrl ] );

    UsersModule.controller( 'UsersProfileCtrl', [ '$scope', '$state', 'events', 'UsersService', UsersProfileCtrl ] );

    UsersModule.controller( 'UsersPublicationsCtrl', [ '$scope', '$stateParams', 'events', 'PublicationsService', UsersPublicationsCtrl ] );

    UsersModule.factory( 'UsersService', [ 'BaseService', UsersService ] );
});