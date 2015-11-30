'use strict';

define( function ( require ) {
    var MocksSessionEnd     = require( 'mocks/MocksSessionEnd' );
    var MocksSessionStart   = require( 'mocks/MocksSessionStart' );

    return function ( $httpBackend ) {
        $httpBackend.whenPOST( '/sessions' ).respond( MocksSessionStart );
        $httpBackend.whenDELETE( '/sessions' ).respond( MocksSessionEnd );

        $httpBackend.whenGET( /partials/ ).passThrough();
        $httpBackend.whenGET( /resources/ ).passThrough();
    };
});