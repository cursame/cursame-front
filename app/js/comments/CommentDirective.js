'use strict';

define( function () {
    return function () {
        return {
            restrict    : 'E',
            scope       : {
                comment : '=comment'
            },
            templateUrl : 'partials/comments/comment.html',
            link        : function ( scope ) {}
        };
    };
});