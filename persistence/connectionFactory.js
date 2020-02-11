var mysql = require('mysql');


function createDBConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        port: 3304,
        database: 'payfast'
    });
}


module.exports = function () {
    return createDBConnection;
}