'use strict';

define( function () {
    return function () {
        return {
            restrict    : 'E',
            templateUrl : 'partials/publications/criteria.html',
            scope       : {
                'criterion' : '=criterion'
            },
            controller  : [ '$scope', function ( $scope ) {
                if ( $scope.criterion == undefined ) {
                    $scope.criterion    = [];
                }
            }],
            link        : function ( scope ) {
                scope.add       = function () {
                    scope.criterion.push({
                        description     : ''
                    });
                };
                scope.remove    = function ( i ) {
                    scope.criterion.splice( i, 1 );
                };
            }
        };
    };
});