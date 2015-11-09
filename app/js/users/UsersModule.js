'use strict';

define( function ( require ) {
    var UsersRouter     = require( 'users/UsersRouter' );

    var UsersModule     = angular.module( 'UsersModule', [] );

    UsersModule.config([ '$stateProvider', UsersRouter ]);
});