'use strict';

define( function ( require ) {
    var AlertDirective      = require( 'common/AlertDirective' );
    var BaseService         = require( 'common/BaseService' );
    var LocaleService       = require( 'common/LocaleService' );

    var CommonModule        = angular.module( 'CommonModule', [] );

    CommonModule.directive( 'alert', [ '$rootScope', '$timeout', 'events', AlertDirective ] );

    CommonModule.factory( 'BaseService', [ '$rootScope', '$resource', 'config', 'events', BaseService ] );

    CommonModule.service( 'LocaleService', [ '$translate', 'LOCALES', '$rootScope', 'tmhDynamicLocale', LocaleService ] );
});