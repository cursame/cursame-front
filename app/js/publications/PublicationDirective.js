'use strict';

define( function () {
    return function () {
        return {
            restrict    : 'E',
            scope       : {
                publication     : '=publication',
                user            : '=user'
            },
            templateUrl : 'partials/publications/publication.html',
            link        : function ( scope ) {
                
            }
        };
    };
});