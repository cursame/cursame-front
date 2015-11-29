'use strict';

define( function ( require ) {

    require( 'config' );
    require( 'events' );
    require( 'common/CommonModule' );
    require( 'dashboard/DashboardModule' );
    require( 'mocks/MocksModule' );
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
            'CommonModule',
            'DashboardModule',
            'MocksModule',
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

    app.run([ '$rootScope', '$state', 'LocaleService', function ( $rootScope, $state, LocaleService ) {
        $state.go( 'login' );

        $rootScope.$state       = $state;
        $rootScope.$translation = LocaleService;
    }]);

    return app;
});