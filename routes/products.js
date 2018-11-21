//ROUTES

const express = require('express');
var router = express.Router();

var controller = require('../controllers/products');

router.route('/')
    .get(async (req, res)=> {
    	try {
    		response = await controller.getProducts();
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
        res.send("SUCCESS");
    });

router.post('/:bussiness_id', (req,res) => res.send(
	controller.addProduct(req.body.product, req.params.bussiness_id),
	res.send("SUCCESS")
));

router.post('/:product_id/update', (req, res) => res.send(
	controller.updateProduct(req.body.product, req.params.product_id),
	res.send("SUCCESS")
));

module.exports = router;