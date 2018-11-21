var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '2521997Nprez.',
    database: 'test'
});

var database = {};

database.test = function(){
    this.getConnection().query('SELECT 100 + 100 as x',function(err,rows,fields){
        if (err) 
            throw err
        console.log('SUCCESS connectiong to MySQL');
    });
}


database.getConnection = function (){
    return connection;
}

module.exports = database;