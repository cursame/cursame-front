'use strict';

define( function ( require ) {
    var MocksConfig     = require( 'mocks/MocksConfig' );

    var MocksModule     = angular.module( 'MocksModule', [
            'ngMockE2E'
        ]);

    MocksModule.run( [ '$httpBackend', MocksConfig ] );
});