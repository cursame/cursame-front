'use strict';

define( function () {
    return function ( $compile, $timeout ) {
        return {
            restrict    : 'E',
            scope       : {
                value   : '='
            },
            templateUrl : 'partials/common/select.html',
            transclude  : true,
            link        : function ( scope, el ) {
                scope.select    = function ( $e ) {
                    var elm     = $( $e.target );
                    $( '.dropdown-menu .active' ).removeClass( 'active' );
                    elm.addClass( 'active' );
                    $( 'span.value' ).html( elm.html() );
                    scope.value     = elm.data( 'value' );
                };

                $( 'option' ).each( function () {
                    var item    = $( this ),
                        elm     = '<li data-value="' + item.attr( 'value' ) + '" ng-click="select( $event )">' + item.html() + '</li>';

                    item.replaceWith( $compile( elm )( scope ) );
                });

                $timeout( function () {
                    scope.select({
                        target  : $( '.dropdown-menu li', el ).get( 0 )
                    });
                }, 0 );
            }
        };
    };
});