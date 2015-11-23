'use strict';

define( function ( require ) {
    var BaseService         = require( 'common/BaseService' );
    var LocaleService       = require( 'common/LocaleService' );

    var CommonModule        = angular.module( 'CommonModule', [] );

    CommonModule.factory( 'BaseService', [ '$rootScope', '$resource', 'config', 'events', BaseService ] );

    CommonModule.service( 'LocaleService', [ '$translate', 'LOCALES', '$rootScope', 'tmhDynamicLocale', LocaleService ] );
});