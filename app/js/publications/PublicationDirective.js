'use strict';

define( function () {
    return function ( Comments ) {
        return {
            restrict    : 'E',
            scope       : {
                publication     : '=publication',
                user            : '=user'
            },
            templateUrl : 'partials/publications/publication.html',
            controller  : [ '$rootScope', '$scope', function ( $rootScope, $scope ) {
                $scope.me   = $rootScope.me;
            }],
            link        : function ( scope ) {
                scope.comments  = Comments.query({
                    publication     : scope.publication.id
                });
            }
        };
    };
});