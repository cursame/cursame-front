'use strict';

define( function () {
    return function ( method, url, params ) {
        var data    = angular.fromJson( params );
        if ( data.email == 'admin@cursa.me' && data.pass == 'admin' ) {
            return [ 200, data ];
        } else {
            return [ 403 ];
        }
    };
});