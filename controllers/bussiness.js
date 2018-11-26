//CONTROLLERS

var AJV = require('ajv');
/*var schema = require('../schemas/users');*/

var db = require('../db');

var ajv = new AJV({});

controller = {};

controller.getBussiness = function(){
    var promise = new Promise(
        function (resolve, reject){
            db.getConnection().query("select * from Bussiness;", 
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

controller.getBussinessProducts = function(id){
    var promise = new Promise(
        function (resolve, reject){
            db.getConnection().query("select id,  product_name, bussiness_id, description, price from products where bussiness_id = "+id+";", 
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

controller.addBussiness = function(element){
    var promise = new Promise(
        function (resolve, reject){
            db.getConnection().query("insert into bussiness(bussiness_name, email, phone, adress, owner_name, password) values ('" + element.bussiness_name + "', '"+ element.email +"', '"+ element.phone +"', '"+ element.adress +"', '"+ element.owner_name +"', '"+ element.password +"');",
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

controller.updateBussiness = function(element, id){
    var promise = new Promise(
        function (resolve, reject){
            db.getConnection().query("update bussiness set bussiness_name = '" + element.bussiness_name + "', email = '" + element.email + "', phone = '" + element.phone + "', adress = '" + element.adress + "', owner_name = '" + element.owner_name + "', password = '" + element.password + "' where id = " + id +"; ",
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