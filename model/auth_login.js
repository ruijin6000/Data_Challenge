const mysql = require('mysql2');
const key = require('../config/Password')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'temp',
    password: key,
});

module.exports = pool.promise();