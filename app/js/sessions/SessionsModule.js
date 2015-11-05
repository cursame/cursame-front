'use strict';

define( function ( require ) {
    var SessionsRouter      = require( 'sessions/SessionsRouter' );
    var SessionsStartCtrl   = require( 'sessions/SessionsStartCtrl' );

    var SessionsModule      = angular.module( 'SessionsModule', []);

    SessionsModule.config([ '$stateProvider', SessionsRouter ]);

    SessionsModule.controller( 'SessionsStartCtrl', [ '$scope', SessionsStartCtrl ]);
});