'use strict';

define( function ( require ) {
    return function ( method, url ) {
        var courses     = require( 'mocks/data/courses' ),
            user        = $.queryParam( url, 'user' ),
            response    = {
                results     : [],
                pagination  : {
                    total       : 10,
                    page        : 1,
                    per_page    : 10
                }
            };

        if ( user != undefined && user != '' ) {
            for ( var i = 0; i < courses.length; i++ ) {
                if ( courses[i].members.indexOf( user ) != -1 ) {
                    response.results.push( courses[i] );
                }
            }
        } else {
            response.results        = courses;
        }

        response.pagination.total   = response.results.length;

        return [ 200, response ];
    };
});