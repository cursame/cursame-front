'use strict';

define( function ( require ) {
    var CriteriaDirective           = require( 'publications/CriteriaDirective' );
    var PublicationsCtrl            = require( 'publications/PublicationsCtrl' );
    var PublicationDirective        = require( 'publications/PublicationDirective' );
    var PublicationsRelativeDate    = require( 'publications/PublicationsRelativeDate' );
    var PublicationsRouter          = require( 'publications/PublicationsRouter' );
    var PublicationsService         = require( 'publications/PublicationsService' );
    var QuestionsDirective          = require( 'publications/QuestionsDirective' );

    var PublicationsModule          = angular.module( 'PublicationsModule', []);

    PublicationsModule.config([ '$stateProvider', PublicationsRouter ]);

    PublicationsModule.controller( 'PublicationsCtrl', [ '$scope', 'events', 'LocaleService', 'PublicationsService', PublicationsCtrl ] );

    PublicationsModule.directive( 'cursameCriterion', [ CriteriaDirective ] );

    PublicationsModule.directive( 'cursamePublication', [ 'CommentsService', PublicationDirective ] );

    PublicationsModule.directive( 'cursameQuestions', [ 'events', QuestionsDirective ] );

    PublicationsModule.factory( 'PublicationsService', [ 'BaseService', PublicationsService ] );

    PublicationsModule.filter( 'relativeDate', [ '$translate', PublicationsRelativeDate ] );
});