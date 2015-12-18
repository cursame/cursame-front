'use strict';

define( function () {
    return function ( $rootScope, $timeout, events ) {
        return {
            restrict    : 'EA',
            templateUrl : 'partials/common/alert.html',
            link        : function ( scope, elm ) {
                scope.dismiss   = function () {
                    elm.slideUp();
                    scope.msg   = '';
                };
                scope.$watch( 'msg', function ( value ) {
                    if ( value ) {
                        elm.slideDown();

                        $timeout( function () {
                            scope.dismiss();
                        }, 5000 );
                    }
                });

                $rootScope.$on( events.SYSTEM_MESSAGE, function ( e, data ) {
                    scope.msg_type = data.type;
                    scope.msg      = data.msg;
                });
            }
        };
    };
});