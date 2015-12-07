'use strict';

define( function () {
    return function ( $scope, Users, Session ) {
        $scope.user     = Users.get( Session.getUserId() );
    };
});