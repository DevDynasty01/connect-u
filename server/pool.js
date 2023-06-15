const sql = require('mysql2');

exports.pool = sql.createPool(
    {
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        password:'Ositodepeluche1224!',
        database: 'employees',
    }).promise()