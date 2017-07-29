var express = require('express');
var deviceContract = require('./contracts-js/device-chain');

var app = express();

app.get('/device', (req, res) => {
  let result = deviceContract.registerNewDevice.call('Teste', 'Sao Paulo', 'SP', 'Beazil', {from: web3.eth.accounts[0]});
  console.log(result)
  res.end();
});

app.get('/get-device', (req, res) => {
  const list = deviceContract.getDevices.call({from: web3.eth.accounts[0]})
  const atm = deviceContract.get.call(deviceContract.address, {from: web3.eth.accounts[0]})

  res.json(list);
  return res.end();
});

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("App listening at http://%s:%s", host, port)
})