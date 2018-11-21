var AJV = require('ajv');
/*var schema = require('../schemas/kart');*/

var db = require('../db');

var ajv = new AJV({});

let users = [];

controller = {};

controller.getSales = function(){
    var promise = new Promise(
        function (resolve, reject){
            db.getConnection().query("select * from Sales;", 
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

controller.getActiveSale = function(userId){
    var promise = new Promise(
        function (resolve, reject){
            db.getConnection().query("SELECT id, user_id, date, paid FROM sales where user_id = "+ userId +" and paid = 0;", 
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

controller.getProductSale = function(object){
    var promise = new Promise(
        function (resolve, reject){
            db.getConnection().query("SELECT sales_id, product_id, quantity, parcial paid FROM sales_detail where sales_id = "+ object.id +";", 
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

controller.addProductToKart = function(element){
    var promise = new Promise(
        function (resolve, reject){
            db.getConnection().query("insert into sales(user_id, date, paid) values ('"+ element.user_name + "', '"+ element.email +"', '"+ element.password +"');",
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