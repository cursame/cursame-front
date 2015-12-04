'use strict';

define( function ( require ) {
    var CommentDirective        = require( 'comments/CommentDirective' );
    var CommentsService         = require( 'comments/CommentsService' );

    var CommentsModule          = angular.module( 'CommentsModule', []);

    CommentsModule.directive( 'cursameComment', [ CommentDirective ] );

    CommentsModule.factory( 'CommentsService', [ 'BaseService', CommentsService ] );
});