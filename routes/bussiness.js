//ROUTES

const express = require('express');
var router = express.Router();

var controller = require('../controllers/bussiness');

router.route('/')
    .get(async (req, res)=> {
    	try {
    		response = await controller.getBussiness();
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
    
    .post(async (req,res)=> {
		try {
			response = await controller.addBussiness(req.body.bussiness);
			console.log("SUCEESS");
			res.status(200);
			res.send(response);
		}
        catch(error){
			console.log("ERROR: " + error);
			res.status(501);
			res.send(error);
		}
        
    });

router.get('/:bussiness_id/products', (req,res) => res.send(
    controller.getBussinessProducts(req.params.bussiness_id)
));

router.post('/:bussiness_id', (req, res)=> {
	controller.updateBussiness(req.body.bussiness, req.params.bussiness_id);
	res.send("SUCCESS");
});

module.exports = router;