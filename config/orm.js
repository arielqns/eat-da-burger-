var connection = require ('./connection.js');

var orm = {
	// Function that returns all table entries
	all: function(tableInput, cb) {
		// Construct the query string that returns all rows from the target table
		connection.query('SELECT * FROM ' + tableInput + ";", function(err,result){
			if (err) throw err;
			cb(result)
		})
    },
    update: function(tableInput, condition, cb){
        connection.query('UPDATE '+tableInput+' SET devoured=true WHERE id='+condition+';', function(err, result){
            if(err)throw err;
            cb(result);
        })
    },
    //Include create method and connection query that will insert values into table
    create: function(tableInput, val, cb){
        connection.query('INSERT INTO '+ tableInput +" (burger_name) VALUES ('"+val+"');", function(err,result){
            if(err)throw err;
            cb(result);
        })

    }
}

module.exports = orm;