'use strict';

define( function ( require ) {
    var MocksCommentsQuery      = require( 'mocks/MocksCommentsQuery' );
    var MocksCoursesQuery       = require( 'mocks/MocksCoursesQuery' );
    var MocksPublicationsQuery  = require( 'mocks/MocksPublicationsQuery' );
    var MocksSessionEnd         = require( 'mocks/MocksSessionEnd' );
    var MocksSessionStart       = require( 'mocks/MocksSessionStart' );
    var MocksUsersGet           = require( 'mocks/MocksUsersGet' );

    return function ( $httpBackend ) {
        $httpBackend.whenGET( /partials/ ).passThrough();
        $httpBackend.whenGET( /resources/ ).passThrough();

        $httpBackend.whenGET( /\/comments/ ).respond( MocksCommentsQuery );

        $httpBackend.whenGET( /\/courses/ ).respond( MocksCoursesQuery );

        $httpBackend.whenGET( /\/publications/ ).respond( MocksPublicationsQuery );

        $httpBackend.whenPOST( '/sessions' ).respond( MocksSessionStart );
        $httpBackend.whenDELETE( new RegExp( '\\/sessions\\/[0-9]+' ) ).respond( MocksSessionEnd );

        $httpBackend.whenGET( new RegExp( '\\/users\\/[0-9]+' ) ).respond( MocksUsersGet );
        $httpBackend.whenGET( new RegExp( '\\/users\\/[a-z]+' ) ).respond( MocksUsersGet );
    };
});