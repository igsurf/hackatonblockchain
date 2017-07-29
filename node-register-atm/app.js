var express=require('express');
var crypto=require('crypto');
var fs=require('fs');
var path=require('path');
var os=require('os');

var app=express();

//enable cors-origin
app.all('/*', (req, res, next) =>{
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

  const allowesHeaders = 'Origin, X-Requested-With, Content-Type, Accept, Cache-Control';
  res.header('Access-Control-Allow-Headers');

  next();
});

app.route('/atm/mac-address').get(function(req, res) {
	var networkInterface;
	var networkInterfaceList;
	var macAddress;

	networkInterfaceList = os.networkInterfaces();
	

	for (const key of Object.keys(networkInterfaceList)) {
		networkInterface = networkInterfaceList[key][0];
		
		if (networkInterface.mac != "00:00:00:00:00:00") {
			macAddress = networkInterface.mac;
		}
	}

	if (macAddress) {
		res.status(200).send(macAddress);
	} else {
		res.status(500).send('The MAC address for the ATM was not found.');
	}

});

app.route('/atm/hash').get(function(req, res) {
	var hashFilename;
	var hashValue;

	hashFilename = path.dirname(require.main.filename) + '/hash.txt';

	if(!fs.existsSync(hashFilename)) {
		res.status(428).send('Hash file not configured in the ATM. Use the POST method to configure the hash file in the ATM');
	} else {
		hashValue = fs.readFileSync(hashFilename);
		res.status(200).send(hashValue);
	}
});

app.route('/atm/hash').post(function(req, res) {
	var hashFilename;
	var hashValue;

	hashFilename = path.dirname(require.main.filename) + '/hash.txt';
	console.log(path.dirname(require.main.filename) + '/hash.txt');

	if(fs.existsSync(hashFilename)) {
		res.status(403).send('Hash file already configured in ATM. It is forbidden to re-create the hash file once it was created.');
	} else {
		hashValue = crypto.randomBytes(20).toString('hex');
		fs.writeFile(hashFilename, hashValue, function(err) {
			 if(err) {
			 	console.log(err);
			 	res.status(500).send('Error when creating the hash file.');
			 } else {
				 res.status(200).send(hashValue);
			 }
		});
	}

});

var server = app.listen(3000, function() {

});	

module.exports = app;