'use strict';

define( function ( require ) {
    return function ( method, url, params ) {
        var users   = require( 'mocks/data/users' ),
            paths   = url.split( '/' ),
            param   = paths[2],
            user    = {},
            id      = parseInt( param );

        if ( !isNaN( id ) ) {
            for ( var i = 0; i < users.length; i++ ) {
                if ( users[i].id == id ) {
                    user    = users[i];
                }
            }
        } else {
            for ( var i = 0; i < users.length; i++ ) {
                if ( users[i].url == param ) {
                    user    = users[i];
                }
            }
        }

        return [ 200, user ];
    };
});