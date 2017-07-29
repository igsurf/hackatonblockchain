var express = require('express');
// const deviceContract = require('./contracts-js/device-chain');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const DeviceSchema = require('./mongo/models/device');
const config = require('./mongo/env/development');
var app = express();

var conect = mongoose.connect(config.db.uri);
var device = mongoose.model('Device', DeviceSchema);
app.use(bodyParser());

app.post('/device', (req, res) => {

  device.create((req.body), function(err, doc){
    console.log(`${err} --- ${doc}` );
       
        if(!err){
            console.log('CADASTRAR');
        } else {
            throw err;
        }
  });


//   //let result = deviceContract.registerNewDevice.call('Teste', 'Sao Paulo', 'SP', 'Beazil', {from: web3.eth.accounts[0]});
//   //console.log(result)
//   res.end();
});

// app.get('/get-device', (req, res) => {
//   const list = deviceContract.getDevices.call({from: web3.eth.accounts[0]})

//   res.json(list);
//   return res.end();
// });

var apps = app.listen(3200, function () {
  // var host = server.address().address
  // var port = server.address().port
  console.log("App listening at ")
})