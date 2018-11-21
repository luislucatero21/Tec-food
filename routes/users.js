//ROUTES

const express = require('express');
var router = express.Router();

var controller = require('../controllers/users');
var karController = require('../controllers/kart');

router.route('/')
    .get(async (req, res)=> {
    	try {
    		response = await controller.getUsers();
    		console.log("SUCCESS");
    		res.status(200);
    		res.send(response);
    	}
    	catch(error){
    		console.log("ERROR: " + error);
    		res.status(501);
    		res.send(error);
    	}
	})
    
    .post((req,res)=> {
        controller.addUser(req.body.user); 
        res.send("SUCCESS");
    });

router.get('/:user_id', async (req, res)=> {
	try {
		response = await controller.getUser(req.params.user_id);
		console.log("SUCCESS");
		res.status(200);
		res.send(response);
	}
	catch(error){
		console.log("ERROR: " + error);
		res.status(501);
		res.send(error);
	}
});

router.post('/:user_id', (req, res)=> {
	controller.updateUser(req.body.user, req.params.user_id);
	res.send("SUCCESS");
});

router.get('/:user_id/kart', async (req, res)=> {
	try {
		partial = await karController.getActiveSale(req.params.user_id);
		response = await karController.getProductSale(partial[0]);
		console.log("SUCCESS");
		res.status(200);
		res.send(response);
	}
	catch(error){
		console.log("ERROR: " + error);
		res.status(501);
		res.send(error);
	}
});

module.exports = router;

