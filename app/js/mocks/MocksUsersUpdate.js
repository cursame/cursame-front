'use strict';

define( function () {
    return function ( method, url, params ) {
        var data    = angular.fromJson( params ),
            users   = require( 'mocks/data/users' ),
            paths   = url.split( '/' ),
            param   = paths[2],
            id      = parseInt( param );

        for ( var i = 0; i < users.length; i++ ) {
            if ( users[i].id == id ) {
                if ( users[i].password == data.password ) {
                    return [ 200, data ];
                } else {
                    return [ 403 ];
                }
            }
        }

        return [ 404, {} ];
    };
});