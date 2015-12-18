'use strict';

define( function ( require ) {
    return function ( method, url ) {
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
            for ( var j = 0; j < users.length; j++ ) {
                if ( users[j].url == param ) {
                    user    = users[j];
                }
            }
        }

        return [ 200, user ];
    };
});