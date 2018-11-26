//CONTROLLERS

var AJV = require('ajv');
/*var schema = require('../schemas/users');*/

var db = require('../db');

var ajv = new AJV({});

controller = {};

controller.addProduct = function(element, id){
    var promise = new Promise(
        function (resolve, reject){
            db.getConnection().query("insert into products(product_name, bussiness_id, description, price) values ('"+ element.product_name + "', '"+ id +"', '"+ element.description +"', "+ element.price +");", 
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

controller.updateProduct = function(element, id){
    var promise = new Promise(
        function (resolve, reject){
            db.getConnection().query("update products set product_name = '"+ element.product_name + "', bussiness_id = '" + element.bussiness_id +"', description = '"+ element.description +"', price = "+ element.price +" where id = "+ id +";", 
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

controller.getProducts = function(){
    var promise = new Promise(
        function (resolve, reject){
            db.getConnection().query("select * from Products;", 
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