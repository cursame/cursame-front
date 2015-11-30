'use strict';

define( function () {
    return function ( method, url, params ) {
        var paths   = url.split( '/' ),
            id      = paths[2],
            user    = {},
            error   = false;

        switch ( id ) {
            case '1' :
                user.avatar = 'https://s3.amazonaws.com/uifaces/faces/twitter/BillSKenney/48.jpg',
                user.id     = 1;
                user.name   = 'John Doe';
                break;
            default :
                error       = true;
        }

        return ( error ) ? [ 403 ] : [ 200, user ];
    };
});