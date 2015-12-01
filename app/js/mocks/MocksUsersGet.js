'use strict';

define( function () {
    return function ( method, url, params ) {
        var paths   = url.split( '/' ),
            param   = paths[2],
            user    = {},
            users   = [{
                avatar     : 'https://s3.amazonaws.com/uifaces/faces/twitter/BillSKenney/48.jpg',
                biography  : '',
                cover      : 'https://cursame.s3.amazonaws.com/uploads/user/coverphoto/56170.png/234985.jpg',
                email      : 'admin@cursa.me',
                id         : 1,
                last_name  : 'Doe',
                name       : 'John',
                twitter    : '',
                url        : 'jdoe'
            }],
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