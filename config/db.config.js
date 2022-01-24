'use strict';

const mysql = require('mysql');

const dbConnection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'database123',
    database: 'sports'
});

dbConnection.connect((err) => {
    if(err){
        console.log('Error connecting to Db ' + err);
        return;
    }
    console.log('Connection Established');
});

module.exports = dbConnection;