'use strict';

define( function () {
    return function ( $rootScope, $resource, config, events ) {
        function BaseService( model ) {
            this._model     = '';
            this._total     = 0;
            this._resource  = null;

            return this._init( model );
        }

        BaseService.prototype   = {
            _init       : function ( model ) {
                var that        = this;
                this._model     = model;
                this._resource  = $resource( config.api_url + model + '/:id', null, {
                    query   : {
                        method              : 'GET',
                        isArray             : true,
                        transformResponse   : function ( data ) {
                            var response    = angular.fromJson( data );

                            that._total     = response.pagination.total;
                            that._page      = response.pagination.page;
                            that._per_page  = response.pagination.per_page;

                            return response.results;
                        }
                    },
                    update  : {
                        method              : 'PUT'
                    }
                });
            },

            create      : function ( object ) {
                var that    = this;
                return this._resource.save( object,
                    function ( data ) {
                        while ( !data.$resolved ) {
                            // Resolving
                        }

                        $rootScope.$broadcast( events[ that._model.toUpperCase() + '_CREATE' ], data );
                    },
                    /* istanbul ignore next */
                    function ( err ) {
                        $rootScope.$broadcast( events[ that._model.toUpperCase() + '_ERROR' ], err );
                    });
            },

            get         : function ( id, expand ) {
                var that    = this;

                return this._resource.get({
                    id          : id,
                    expanded    : expand
                },
                    function ( data ) {
                        while ( !data.$resolved ) {
                            // Resolving
                        }

                        $rootScope.$broadcast( events[ that._model.toUpperCase() + '_RETRIEVED' ], data );
                    },
                    /* istanbul ignore next */
                    function ( err ) {
                        $rootScope.$broadcast( events[ that._model.toUpperCase() + '_ERROR' ], err );
                    }
                );
            },

            getEvent    : function ( type ) {
                switch ( type ) {
                    case 'CREATE' :
                        return events[ this._model.toUpperCase() + '_CREATE' ];
                    case 'DELETE' :
                        return events[ this._model.toUpperCase() + '_DELETE' ];
                    case 'ERROR' :
                        return events[ this._model.toUpperCase() + '_ERROR' ];
                    case 'QUERY' :
                        return events[ this._model.toUpperCase() + '_QUERY' ];
                    case 'RETRIEVED' :
                        return events[ this._model.toUpperCase() + '_RETRIEVED' ];
                    case 'UPDATED' :
                        return events[ this._model.toUpperCase() + '_UPDATED' ];
                    default :
                        return '';
                }
            },

            getTotal    : function () {
                return this._total;
            },

            query       : function ( q ) {
                var that    = this;

                return this._resource.query( q,
                    function ( data ) {
                        while ( !data.$resolved ) {
                            // Resolving
                        }

                        $rootScope.$broadcast( events[ that._model.toUpperCase() + '_QUERY' ], data );
                    },
                    /* istanbul ignore next */
                    function ( err ) {
                        $rootScope.$broadcast( events[ that._model.toUpperCase() + '_ERROR' ], err );
                    }
                );
            },

            remove      : function ( id ) {
                var that    = this;

                return this._resource.delete({
                    id  : id
                },
                    function ( data ) {
                        while ( !data.$resolved ) {
                            // Resolving
                        }

                        $rootScope.$broadcast( events[ that._model.toUpperCase() + '_DELETE' ], data );
                    },
                    /* istanbul ignore next */
                    function ( err ) {
                        $rootScope.$broadcast( events[ that._model.toUpperCase() + '_ERROR' ], err );
                    }
                );
            },

            update      : function ( id, obj ) {
                var that    = this;

                return this._resource.update({
                    id          : id
                }, obj,
                    function ( data ) {
                        while ( !data.$resolved ) {
                            // Resolving
                        }

                        $rootScope.$broadcast( events[ that._model.toUpperCase() + '_UPDATED' ], data );
                    },
                    /* istanbul ignore next */
                    function ( err ) {
                        $rootScope.$broadcast( events[ that._model.toUpperCase() + '_ERROR' ], err );
                    }
                );
            }
        };

        return BaseService;
    };
});