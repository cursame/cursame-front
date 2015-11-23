'use strict';

define( function ( require ) {
    var MocksSessionStart   = require( 'mocks/MocksSessionStart' );

    return function ( $httpBackend ) {
        $httpBackend.whenPOST( '/sessions' ).respond( MocksSessionStart );

        $httpBackend.whenGET( /partials/ ).passThrough();
        $httpBackend.whenGET( /resources/ ).passThrough();
    };
});