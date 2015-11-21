'use strict';

define( function ( require ) {
    var LocaleService       = require( 'common/LocaleService' );

    var CommonModule        = angular.module( 'CommonModule', [] );

    CommonModule.service( 'LocaleService', [ '$translate', 'LOCALES', '$rootScope', 'tmhDynamicLocale', LocaleService ] );
});