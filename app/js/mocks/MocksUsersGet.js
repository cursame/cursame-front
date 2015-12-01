'use strict';

define( function () {
    return function ( method, url, params ) {
        var paths   = url.split( '/' ),
            id      = paths[2],
            user    = {},
            error   = false;

        switch ( id ) {
            case '1' :
                user.avatar     = 'https://s3.amazonaws.com/uifaces/faces/twitter/BillSKenney/48.jpg',
                user.biography  = '';
                user.email      = 'admin@cursa.me',
                user.id         = 1;
                user.last_name  = 'Doe';
                user.name       = 'John';
                user.twitter    = '';
                user.url        = 'jdoe';
                break;
            default :
                error       = true;
        }

        return ( error ) ? [ 403 ] : [ 200, user ];
    };
});