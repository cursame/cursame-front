'use strict';

define( function () {
    return function ( $scope, $stateParams, events, Publications ) {
        $scope.publications = Publications.query({
            user    : $stateParams.profile
        });

        $scope.publish      = function () {
            Publications.create({
                access  : 'public',
                content : $scope.comment,
                date    : new Date(),
                type    : 'comment',
                user    : $scope.me
            });
        };
        $scope.$on( Publications.getEvent( 'CREATE' ), function ( $e, publication ) {
            $scope.$emit( events.SYSTEM_MESSAGE, {
                msg     : 'alerts.success.publication_created',
                type    : 'success'
            });
            $scope.comment  = '';

            $scope.publications.unshift( publication );
        });
    };
});