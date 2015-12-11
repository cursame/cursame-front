'use strict';

define( function ( require ) {
    return function ( method, url, params ) {
        var publication     = angular.fromJson( params ),
            publications    = require( 'mocks/data/publications' );

        publication.id      = ++publications[ publications.length - 1 ].id;
        return [ 200, publication ];
    };
});