var APIMODEL = require('../models/api_model.js');
var fs = require('fs');


//Generate Country list
exports.list = function(req, res) {	
	APIMODEL.listcountry(function(err, result) {    
	json={"success":'false',"result":"" };
	 if (result) {			
		json['success'] = 'true';		
		json['result']  = result;			
		res.send(JSON.stringify(json, null, 3));
		console.log(json);
	}
	else res.send(JSON.stringify(json, null, 3));
  });
}

//show product form
exports.product_form = function(req, res) {		
	var fle = req.app.get('views')+'product_form.html';
	fs.readFile(fle, function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(data);
        res.end();
    });
}


//add new product
exports.add_product = function(req, res) {		
	console.log(req.body);
	post = req.body; 	
	ins_data={"product_name":post['name'],"product_price":post['price'],"product_brand":post['brand'] };
	APIMODEL.insert_product(ins_data,function(err, result) {    
	json={"success":'false',"result":"" };
	 if (result) {			
		json['success'] = 'true';		
		json['result']  = ins_data;	
		json['result']['id']  = result.data;	
		res.send(JSON.stringify(json, null, 3));
		console.log(json);
	}
	else res.send(JSON.stringify(json, null, 3));
  });
}
