var connection = require ('./connection.js');

var orm = {
	// Function that returns all table entries
	all: function(tableInput, cb) {
		// Construct the query string that returns all rows from the target table
		connection.query('SELECT * FROM ' + tableInput + ";", function(err,result){
			if (err) throw err;
			cb(result)
		})
    }
}

module.exports = orm;