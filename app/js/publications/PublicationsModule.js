'use strict';

define( function ( require ) {
    var PublicationsService     = require( 'publications/PublicationsService' );

    var PublicationsModule      = angular.module( 'PublicationsModule', []);

    PublicationsModule.factory( 'PublicationsService', [ 'BaseService', PublicationsService ] );
});