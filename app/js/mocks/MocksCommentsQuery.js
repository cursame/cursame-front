'use strict';

define( function ( require ) {
    return function ( method, url, data ) {
        var comments        = require( 'mocks/data/comments' ),
            publication     = $.queryParam( url, 'publication' ),
            response        = {
                results     : [],
                pagination  : {
                    total       : 10,
                    page        : 1,
                    per_page    : 10
                }
            };

        if ( publication != undefined ) {
            for ( var i = 0; i < comments.length; i++ ) {
                if ( comments[i].publication == publication ) {
                    response.results.push( comments[i] );
                }
            }

            response.pagination.total   = response.results.length;
        }

        return [ 200, response ];
    };
});