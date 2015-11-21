'use strict';

define( function ( require ) {

    require( 'sessions/SessionsModule' );
    require( 'users/UsersModule' );

    var app     = angular.module( 'cursame-front', [
            'ngCookies',
            'pascalprecht.translate',
            'tmh.dynamicLocale',
            'ui.router',
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

    app.constant( 'LOCALE', {
        'preferredLocale'   : 'en_us'
    });

    app.run([ '$rootScope', '$state', function ( $rootScope, $state ) {
        $state.go( 'login' );

        $rootScope.$state   = $state;
    }]);

    return app;
});