// Pull in required dependencies
var mysql = require('mysql');

var password = require('../keys');

// Create the MySQL connection object
var connection;

if (process.env.JAWSDB_URL){
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}	else {
connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: password.password.db,
		database: 'burgers_db'
	});
};
// Make the connection to MySQL
connection.connect()


// Export connection for ORM use
module.exports = connection;