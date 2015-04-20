var express = require('express'),
	bodyParser = require('body-parser'),
	request = require('request'),
	port = process.env.PORT || 3000;
	app = express();

// EXPRESS CONFIG
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES
var router = express.Router();
app.get('/nytimes/mostviewed', function(req, res, next){
	var NY_TIMES_KEY = "6fae8b8e6d9091b4fd04c1b0e0fb8976:15:53101372",
		NY_TIMES_BASE = "http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/1.json",
		requestURL = NY_TIMES_BASE + '?&api-key=' + NY_TIMES_KEY;

	request(requestURL, function(err, response, body){
		if (!err && response.statusCode == 200) {
			console.log(typeof(body));
			res.json(JSON.parse(body));
		}
	});

});

app.use('/', router);
app.use(express.static('public'));


// Start server
app.listen(port, function(){
  console.log('Server listening on port ' + port)
});