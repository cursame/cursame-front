'use strict';

define( function () {
    return function ( $httpBackend ) {
        $httpBackend.whenGET( /partials/ ).passThrough();
        $httpBackend.whenGET( /resources/ ).passThrough();
    };
});