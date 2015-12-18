'use strict';

define( function ( require ) {

    require( 'config' );
    require( 'events' );
    require( 'comments/CommentsModule' );
    require( 'common/CommonModule' );
    require( 'courses/CoursesModule' );
    require( 'dashboard/DashboardModule' );
    require( 'mocks/MocksModule' );
    require( 'publications/PublicationsModule' );
    require( 'sessions/SessionsModule' );
    require( 'users/UsersModule' );

    var app     = angular.module( 'cursame-front', [
            'ngCookies',
            'ngResource',
            'pascalprecht.translate',
            'tmh.dynamicLocale',
            'ui.router',
            'config',
            'events',
            'CommentsModule',
            'CommonModule',
            'CoursesModule',
            'DashboardModule',
            'MocksModule',
            'PublicationsModule',
            'SessionsModule',
            'UsersModule'
        ]);

    app.config([ '$translateProvider', 'tmhDynamicLocaleProvider', function ( $translateProvider, tmhDynamicLocaleProvider ) {
        $translateProvider.useMissingTranslationHandlerLog();
        $translateProvider.useStaticFilesLoader({
            prefix  : 'resources/locale-',
            suffix  : '.json'
        });
        $translateProvider.preferredLanguage( 'en_us' );
        $translateProvider.useLocalStorage();

        tmhDynamicLocaleProvider.localeLocationPattern( 'bower_components/angular-i18n/angular-locale_{{locale}}.js' );
    }]);

    app.constant( 'LOCALES', {
        'locales'           : {
            'en_us' : 'en',
            'es_mx' : 'es'
        },
        'preferredLocale'   : 'en_us'
    });

    app.run([ '$rootScope', '$state', '$location', 'LocaleService', function ( $rootScope, $state, $location, LocaleService ) {
        $rootScope.$state       = $state;
        $rootScope.$translation = LocaleService;

        if ( $location.url() == '' ) {
            $state.go( 'home' );
        }

        $rootScope.$on( '$locationChangeStart', function () {
            var search  = $location.search();

            if ( search.lang && ( search.lang == 'es' || search.lang == 'en' ) ) {
                LocaleService.set( search.lang );
            }
        });

        $.queryParam    = function ( url, param ) {
            param       = param.replace( /[\[]/, '\\[' ).replace( /[\]]/, '\\]' );
            var regex   = new RegExp( '[\\?&]' + param + '=([^&#]*)' ),
                results = regex.exec( url );

            return results === null ? '' : decodeURIComponent( results[1].replace( /\+/g, ' ' ) );
        };
    }]);

    return app;
});