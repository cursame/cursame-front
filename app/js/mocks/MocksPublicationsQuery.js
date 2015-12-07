'use strict';

define( function ( require ) {
    return function ( method, url, data ) {
        var user            = $.queryParam( url, 'user' ),
            publications    = require( 'mocks/data/publications' ),
            response        = {
                results     : [],
                pagination  : {
                    total       : 10,
                    page        : 1,
                    per_page    : 10
                }
            };

        if ( user != undefined && user != '' ) {
            for ( var i = 0; i < publications.length; i++ ) {
                if ( publications[i].user.url == user ) {
                    response.results.push( publications[i] );
                }
            }
        } else {
            response.results        = publications;
        }

        response.pagination.total   = response.results.length;

        return [ 200, response ];
    };
});