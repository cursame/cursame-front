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
            link        : function ( scope ) {
                scope.comments  = Comments.query({
                    publication     : scope.publication.id
                });
            }
        };
    };
});