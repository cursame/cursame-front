'use strict';

define( function () {
    var events      = angular.module( 'events', []);

    events.constant( 'events', {
            'LOGIN_SUCCESS'     : 'login.success',
            'LOGIN_ERROR'       : 'login.error',
            'LOGOUT_SUCCESS'    : 'logout.success',
            'LOGOUT_ERROR'      : 'logout.error',
            'SYSTEM_MESSAGE'    : 'system_message'
        });
});