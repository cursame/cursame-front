'use strict';

define( function () {
    var config  = angular.module( 'config', []);
    config.constant( 'config', {
        api_url     : 'REST_API_URL'
    });
});