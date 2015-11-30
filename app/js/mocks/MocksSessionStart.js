'use strict';

define( function () {
    return function ( method, url, params ) {
        var data    = angular.fromJson( params );
        if ( data.email == 'admin@cursa.me' && data.pass == 'admin' ) {
            return [ 200, {
                access_level    : 1,
                session         : '3141801414',
                user_id         : '1'
            }];
        } else {
            return [ 403 ];
        }
    };
});