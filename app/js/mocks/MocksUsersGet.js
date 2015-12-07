'use strict';

define( function ( require ) {
    return function ( method, url, params ) {
        var users   = require( 'mocks/data/users' ),
            paths   = url.split( '/' ),
            param   = paths[2],
            user    = {},
            error   = false,
            id      = parseInt( param );

        if ( !isNaN( id ) ) {
            switch ( id ) {
                case 1 :
                    user        = users[0];
                    break;
                default :
                    error       = true;
            }
        } else {
            switch ( param ) {
                case 'jdoe' :
                    user        = users[0];
                    break;
                default :
                    error       = true;
            }
        }

        return ( error ) ? [ 403 ] : [ 200, user ];
    };
});