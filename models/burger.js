var orm = require('../config/orm.js');

// Create the burger object
var burger = {
  // Select all burger table entries
  all: function(cb) {
    orm.all('burgers', function(res) {
      cb(res);
    })
  },
  update: function(id,cb){
      orm.update('burgers',id,cb);
  }
}
module.exports = burger; 