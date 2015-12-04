'use strict';

define( function ( require ) {
    var PublicationDirective    = require( 'publications/PublicationDirective' );
    var PublicationsService     = require( 'publications/PublicationsService' );

    var PublicationsModule      = angular.module( 'PublicationsModule', []);

    PublicationsModule.directive( 'cursamePublication', [ PublicationDirective ] );

    PublicationsModule.factory( 'PublicationsService', [ 'BaseService', PublicationsService ] );
});