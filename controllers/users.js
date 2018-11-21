//CONTROLLERS

var AJV = require('ajv');
var schema = require('../schemas/users');

var db = require('../db');

var ajv = new AJV({});

controller = {};

controller.getUsers = function(){
    var promise = new Promise(
        function (resolve, reject){
            db.getConnection().query("select * from Users;", 
                function (err, rows){
                    if (err){
                        reject(err);
                    }
                    resolve(rows);
                }
            );
        }
    );
    return promise;
}

controller.getUser = function(id){
    var promise = new Promise(
        function (resolve, reject){
            db.getConnection().query("select id,  user_name, email, password from users where id = "+id+";", 
                function (err, rows){
                    if (err){
                        reject(err);
                    }
                    resolve(rows);
                }
            );
        }
    );
    return promise;
}

controller.addUser = function(element){
    var promise = new Promise(
        function (resolve, reject){
            db.getConnection().query("insert into users(user_name, email, password) values ('"+ element.user_name + "', '"+ element.email +"', '"+ element.password +"');",
                function (err, rows){
                    if (err){
                        reject(err);
                    }
                    resolve(rows);
                }
            );
        }
    );
    return promise;
}

controller.updateUser = function(element, id){
    var promise = new Promise(
        function (resolve, reject){
            db.getConnection().query("update users set user_name = '" + element.user_name + "', email = '" + element.email + "', password = '" + element.password + "' where id = " + id +"; ",
                function (err, rows){
                    if (err){
                        reject(err);
                    }
                    resolve(rows);
                }
            );
        }
    );
    return promise;
}

module.exports = controller;