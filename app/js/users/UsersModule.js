'use strict';

define( function ( require ) {
    var UsersFormCtrl       = require( 'users/UsersFormCtrl' );
    var UsersProfileCtrl    = require( 'users/UsersProfileCtrl' );
    var UsersRouter         = require( 'users/UsersRouter' );
    var UsersService        = require( 'users/UsersService' );

    var UsersModule         = angular.module( 'UsersModule', [] );

    UsersModule.config([ '$stateProvider', UsersRouter ]);

    UsersModule.controller( 'UsersFormCtrl', [ UsersFormCtrl ] );

    UsersModule.controller( 'UsersProfileCtrl', [ '$scope', '$state', 'events', 'UsersService', UsersProfileCtrl ] );

    UsersModule.factory( 'UsersService', [ 'BaseService', UsersService ] );
});