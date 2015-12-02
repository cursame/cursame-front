'use strict';

define( function ( require ) {
    var UsersFormCtrl       = require( 'users/UsersFormCtrl' );
    var UsersInfoCtrl       = require( 'users/UsersInfoCtrl' );
    var UsersProfileCtrl    = require( 'users/UsersProfileCtrl' );
    var UsersRouter         = require( 'users/UsersRouter' );
    var UsersService        = require( 'users/UsersService' );

    var UsersModule         = angular.module( 'UsersModule', [] );

    UsersModule.config([ '$stateProvider', UsersRouter ]);

    UsersModule.controller( 'UsersFormCtrl', [ UsersFormCtrl ] );

    UsersModule.controller( 'UsersInfoCtrl', [ '$scope', '$stateParams', 'events', 'UsersService', UsersInfoCtrl ] );

    UsersModule.controller( 'UsersProfileCtrl', [ '$scope', '$state', 'events', 'UsersService', UsersProfileCtrl ] );

    UsersModule.factory( 'UsersService', [ 'BaseService', UsersService ] );
});