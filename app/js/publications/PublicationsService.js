'use strict';

define( function () {
    return function ( BaseService ) {
        var PublicationsService     = new BaseService( 'publications' );

        return PublicationsService;
    };
});