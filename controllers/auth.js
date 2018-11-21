//CONTROLLERS

var jwt = require('jsonwebtoken');

controller = {};

controller.login = function() {
    var p = new Promise (
        function (resolve, reject){
            var payload = {
                user: 'user',
                device: 'Android phone'
            }
            var token = jwt.sign(payload, 'topSecret', {expiresIn: 1440});
            resolve(token);
        }
    );
    return p;
}

controller.validate = function (token){
    var p = new Promise(
        function (resolve, reject){
            if (token){
                jwt.verify(token, 'topSecret', function (err, token){
                    if (err){
                        reject("Invalid token");
                    }
                    resolve();
                });
            }
            else
                reject("Empty token");
        }
    );
    return p;
}

module.exports = controller;