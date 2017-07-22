var express=require('express');
var crypto=require('crypto');

var app=express();

app.route('/atm/mac-address').get(function(req, res) {
	res.send('macaddress');
});

app.route('/atm/hash').get(function(req, res) {
	var id = crypto.randomBytes(20).toString('hex');
	res.send(id);
});

app.route('/atm/hash').post(function(req, res) {
	var id = crypto.randomBytes(20).toString('hex');
	res.send(id);
});

app.get('/', function (req,res) {
	res.send('Hello World');
});

var server = app.listen(3000, function() {

});