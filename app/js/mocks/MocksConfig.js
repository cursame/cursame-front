'use strict';

define( function ( require ) {
    var MocksCommentsQuery      = require( 'mocks/MocksCommentsQuery' );
    var MocksCoursesQuery       = require( 'mocks/MocksCoursesQuery' );
    var MocksPublicationsCreate = require( 'mocks/MocksPublicationsCreate' );
    var MocksPublicationsQuery  = require( 'mocks/MocksPublicationsQuery' );
    var MocksSessionEnd         = require( 'mocks/MocksSessionEnd' );
    var MocksSessionStart       = require( 'mocks/MocksSessionStart' );
    var MocksUsersUpdate        = require( 'mocks/MocksUsersUpdate' );
    var MocksUsersGet           = require( 'mocks/MocksUsersGet' );

    return function ( $httpBackend ) {
        $httpBackend.whenGET( /partials/ ).passThrough();
        $httpBackend.whenGET( /resources/ ).passThrough();

        $httpBackend.whenGET( /\/comments/ ).respond( MocksCommentsQuery );

        $httpBackend.whenGET( /\/courses/ ).respond( MocksCoursesQuery );

        $httpBackend.whenGET( /\/publications/ ).respond( MocksPublicationsQuery );
        $httpBackend.whenPOST( /\/publications/ ).respond( MocksPublicationsCreate );

        $httpBackend.whenPOST( '/sessions' ).respond( MocksSessionStart );
        $httpBackend.whenDELETE( new RegExp( '\\/sessions\\/[0-9]+' ) ).respond( MocksSessionEnd );

        $httpBackend.whenGET( new RegExp( '\\/users\\/[0-9]+' ) ).respond( MocksUsersGet );
        $httpBackend.whenGET( new RegExp( '\\/users\\/[A-Za-z0-9_@./#&+-]+' ) ).respond( MocksUsersGet );
        $httpBackend.whenPUT( new RegExp( '\\/users\\/[0-9]+' ) ).respond( MocksUsersUpdate );
    };
});