'use strict';

define( function () {
    return function ( $scope, events, Publications ) {
        var type    = 'comment';

        $scope.panel            = function ( e, id ) {
            var item    = $( e.currentTarget );

            type        = id;
            $('[class*="header active-"]').removeClass(function( i, c ) {
                return c.match( /active-\d+/g ).join( ' ' );
            });
            $( '.header' ).addClass( 'active-' + item.index() );
            $( '.panel.active' ).removeClass( 'active' );
            $( '#panel-' + id ).addClass( 'active' );
        };
        $scope.publish          = function () {
            var publication     = {
                access  : 'public',
                date    : new Date(),
                user    : $scope.me
            };

            switch ( type ) {
                case 'comment' :
                    publication.content = $scope.comment;
                    publication.type    = type;
                    break;
            }

            Publications.create( publication );
        };

        $scope.publications     = Publications.query();

        $scope.$on( Publications.getEvent( 'CREATE' ), function ( $e, publication ) {
            $scope.$emit( events.SYSTEM_MESSAGE, {
                msg     : 'alerts.success.publication_created',
                type    : 'success'
            });
            $scope.comment  = '';

            $scope.publications.unshift( publication );
        });
    };
});