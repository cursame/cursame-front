'use strict';

define( function ( require ) {
    return function ( $rootScope, $resource, $cookies, config, events ) {
        return {
            _resource   : $resource( config.api_url + 'sessions/:id' ),

            isLoggedIn  : function () {
                return ( $cookies.getObject( 'session' ) ) ? true : false;
            },

            getToken    : function () {
                var session = $cookies.getObject( 'session' );
                return ( session ) ? session.token : null;
            },

            start       : function ( credentials ) {
                return this._resource.save( credentials,
                    function ( data ) {
                        while ( !data.$resolved );

                        $cookies.putObject( 'session', {
                            token   : data.session,
                            user_id : data.user_id,
                            level   : data.access_level
                        });

                        $rootScope.$broadcast( events.LOGIN_SUCCESS, data );
                    },
                    function ( err ) {
                        $rootScope.$broadcast( events.LOGIN_ERROR );
                    });
            },

            terminate   : function ( token ) {
                return this._resource.delete({
                        id  : token
                    },
                    function ( data ) {
                        while ( !data.$resolved );

                        $cookies.remove( 'session' );
                        $rootScope.$broadcast( events.LOGOUT_SUCCESS );
                    },
                    function ( err ) {
                        $rootScope.$broadcast( events.LOGOUT_ERROR );
                    });
            }
        };
    };
});