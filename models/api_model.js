var connection = require('../db/db.js');

var API = function (data) {
this.data = data;
}

API.prototype.data = {}

//Get country list from Table
API.listcountry = function (callback) {
	connection.query("SELECT fips_code,country_name from countryinfo WHERE fips_code IN ('MY','SN','HK','VN') ", function(err, data) {
        console.log(data);
		if (err) return callback(err);
		callback(null, new API(data));		
    });
}
//Insert record into Table
API.insert_product = function (data, callback) {	
	connection.query('INSERT INTO product SET ?', data, function(err, results) {
	  if (err) return callback(err);
	  callback(null, new API(results.insertId));
	});
}

module.exports = API;