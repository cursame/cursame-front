'use strict';

define( function () {
    return function ( $scope, Publications ) {
        $scope.panel            = function ( e, id ) {
            var item    = $( e.currentTarget );

            $('[class*="header active-"]').removeClass(function( i, c ) {
                return c.match( /active-\d+/g ).join( " " );
            });
            $( '.header' ).addClass( 'active-' + item.index() );
            $( '.panel.active' ).removeClass( 'active' );
            $( '#panel-' + id ).addClass( 'active' );
        };
        $scope.publications     = Publications.query();
    };
});