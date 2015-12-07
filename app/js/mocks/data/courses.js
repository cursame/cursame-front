'use strict';

define( function () {
    return [
        {
            id          : 1,
            admin       : {
                avatar     : 'https://s3.amazonaws.com/uifaces/faces/twitter/BillSKenney/128.jpg',
                email      : 'admin@cursa.me',
                id         : 1,
                last_name  : 'Doe',
                name       : 'John',
                url        : 'jdoe'
            },
            description : 'Advanced algebra',
            name        : 'Math',
            members     : [
                'jdoe',
                'jane.doe'
            ],
            start_date  : new Date( 2015, 8, 6 ).toISOString()
        },
        {
            id          : 2,
            admin       : {
                avatar     : 'https://s3.amazonaws.com/uifaces/faces/twitter/BillSKenney/128.jpg',
                email      : 'admin@cursa.me',
                id         : 1,
                last_name  : 'Doe',
                name       : 'John',
                url        : 'jdoe'
            },
            description : 'Basic history',
            name        : 'History',
            members     : [
                'jdoe'
            ],
            start_date  : new Date( 2015, 8, 6 ).toISOString()
        },
        {
            id          : 3,
            admin       : {
                avatar     : 'https://s3.amazonaws.com/uifaces/faces/twitter/BillSKenney/128.jpg',
                email      : 'admin@cursa.me',
                id         : 1,
                last_name  : 'Doe',
                name       : 'John',
                url        : 'jdoe'
            },
            description : 'General earth geography',
            name        : 'Geography',
            members     : [
                'jane.doe'
            ],
            start_date  : new Date( 2015, 8, 6 ).toISOString()
        }
    ];
});