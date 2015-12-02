'use strict';

define( function ( require ) {
    var MocksPublicationsQuery  = require( 'mocks/MocksPublicationsQuery' );
    var MocksSessionEnd         = require( 'mocks/MocksSessionEnd' );
    var MocksSessionStart       = require( 'mocks/MocksSessionStart' );
    var MocksUsersGet           = require( 'mocks/MocksUsersGet' );

    return function ( $httpBackend ) {
        $httpBackend.whenGET( /partials/ ).passThrough();
        $httpBackend.whenGET( /resources/ ).passThrough();

        $httpBackend.whenPOST( '/sessions' ).respond( MocksSessionStart );
        $httpBackend.whenDELETE( new RegExp( '\\/sessions\\/[0-9]+' ) ).respond( MocksSessionEnd );

        $httpBackend.whenGET( new RegExp( '\\/users\\/[0-9]+' ) ).respond( MocksUsersGet );
        $httpBackend.whenGET( new RegExp( '\\/users\\/[a-z]+' ) ).respond( MocksUsersGet );

        $httpBackend.whenGET( /\/publications/ ).respond( MocksPublicationsQuery );
    };
});