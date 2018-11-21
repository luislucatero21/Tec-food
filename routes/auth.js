//ROUTES

var express = require('express');
var router = express.Router();
let controller = require('../controllers/auth');

router.post('/login', async function (req, res) {
    try {
        token = await controller.login();

        var response = {
            status: 'OK',
            data: {
                token: token
            }
        }
        res.status(200);
        res.send(response);
    }
    catch (error) {
        var response = {
            status: 'ERROR',
            error: error
        }
        res.status(401);
        res.send(response);
    }
});

module.exports = router;