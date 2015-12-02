'use strict';

define( function () {
    var events      = angular.module( 'events', []);

    events.constant( 'events', {
            'LOGIN_SUCCESS'             : 'login.success',
            'LOGIN_ERROR'               : 'login.error',
            'LOGOUT_SUCCESS'            : 'logout.success',
            'LOGOUT_ERROR'              : 'logout.error',
            'PUBLICATIONS_CREATE'       : 'publications.create',
            'PUBLICATIONS_DELETE'       : 'publications.delete',
            'PUBLICATIONS_ERROR'        : 'publications.error',
            'PUBLICATIONS_RETRIEVED'    : 'publications.retrieved',
            'PUBLICATIONS_UPDATED'      : 'publications.updated',
            'PUBLICATIONS_QUERY'        : 'publications.query',
            'SYSTEM_MESSAGE'            : 'system_message',
            'USERS_CREATE'              : 'users.create',
            'USERS_DELETE'              : 'users.delete',
            'USERS_ERROR'               : 'users.error',
            'USERS_RETRIEVED'           : 'users.retrieved',
            'USERS_UPDATED'             : 'users.updated',
            'USERS_QUERY'               : 'users.query'
        });
});