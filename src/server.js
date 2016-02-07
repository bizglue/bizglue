var express = require("express");

var port = process.env.PORT || 1337;
var app = express();

app.get('/', function(req, res){
	res.write('bizglue/bizglue');
	res.end();
});

app.listen(port, function(){
	console.log('Example app listening on port' + port);
});
