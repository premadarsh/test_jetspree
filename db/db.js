var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'jetspree'
});


// Connect to MySQL on start
connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
})

module.exports = connection;