'use strict';

define( function () {
    return function ( events ) {
        return {
            restrict    : 'E',
            templateUrl : 'partials/publications/questions.html',
            scope       : {
                'questions' : '=questions'
            },
            controller  : [ '$scope', function ( $scope ) {
                if ( $scope.questions == undefined ) {
                    $scope.questions    = [{
                        answers     : [{
                            content : ''
                        }],
                        content     : ''
                    }];
                }
            }],
            link        : function ( scope ) {
                scope.add           = function () {
                    scope.questions.push({
                        answers     : [{
                            content : ''
                        }],
                        content     : ''
                    });
                };
                scope.addAnswer     = function ( i ) {
                    scope.questions[i].answers.push({
                        content     : ''
                    });
                };
                scope.remove        = function ( i ) {
                    if ( scope.questions.length > 1 ) {
                        scope.questions.splice( i, 1 );
                    } else {
                        scope.$emit( events.SYSTEM_MESSAGE, {
                            msg     : 'alerts.questionary.empty',
                            type    : 'error'
                        });
                    }
                };
                scope.removeAnswer  = function ( q, i ) {
                    scope.questions[q].answers.splice( i, 1 );
                };
            }
        };
    };
});