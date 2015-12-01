'use strict';

define( function ( require ) {
    var UsersFormCtrl   = require( 'users/UsersFormCtrl' );
    var UsersRouter     = require( 'users/UsersRouter' );
    var UsersService    = require( 'users/UsersService' );

    var UsersModule     = angular.module( 'UsersModule', [] );

    UsersModule.config([ '$stateProvider', UsersRouter ]);

    UsersModule.controller( 'UsersFormCtrl', [ UsersFormCtrl ] );

    UsersModule.factory( 'UsersService', [ 'BaseService', UsersService ] );
});