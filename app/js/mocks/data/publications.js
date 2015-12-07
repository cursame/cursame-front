'use strict';

define( function () {
    return [
        {
            id      : 1,
            content : 'hello world!',
            date    : new Date().toISOString(),
            user    : {
                avatar     : 'https://s3.amazonaws.com/uifaces/faces/twitter/BillSKenney/128.jpg',
                email      : 'admin@cursa.me',
                id         : 1,
                last_name  : 'Doe',
                name       : 'John',
                url        : 'jdoe'
            }
        },
        {
            id      : 2,
            content : 'hello world!',
            date    : new Date( 2015, 3, 25 ).toISOString(),
            user    : {
                avatar     : 'https://s3.amazonaws.com/uifaces/faces/twitter/yemaija/128.jpg',
                email      : 'jane.doe@cursa.me',
                id         : 2,
                last_name  : 'Doe',
                name       : 'Jane',
                url        : 'jane.doe'
            }
        },
        {
            id      : 3,
            content : 'hello world!',
            date    : new Date( 2015, 3, 21 ).toISOString(),
            user    : {
                avatar     : 'https://s3.amazonaws.com/uifaces/faces/twitter/BillSKenney/128.jpg',
                email      : 'admin@cursa.me',
                id         : 1,
                last_name  : 'Doe',
                name       : 'John',
                url        : 'jdoe'
            }
        },
        {
            id      : 4,
            content : 'hello world!',
            date    : new Date( 2015, 1, 10 ).toISOString(),
            user    : {
                avatar     : 'https://s3.amazonaws.com/uifaces/faces/twitter/yemaija/128.jpg',
                email      : 'jane.doe@cursa.me',
                id         : 2,
                last_name  : 'Doe',
                name       : 'Jane',
                url        : 'jane.doe'
            }
        },
        {
            id      : 5,
            content : 'hello world!',
            date    : new Date( 2014, 8, 18 ).toISOString(),
            user    : {
                avatar     : 'https://s3.amazonaws.com/uifaces/faces/twitter/BillSKenney/128.jpg',
                email      : 'admin@cursa.me',
                id         : 1,
                last_name  : 'Doe',
                name       : 'John',
                url        : 'jdoe'
            }
        }
    ];
});