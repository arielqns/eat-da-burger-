var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = requite('express-handlebars');

var app = express();

// Serve static content for the app from the 'public' directory
app.use(express.static(_dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


var port = 3000;
app.listen(port);