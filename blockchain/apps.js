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

  device.create((req.body), function (err, doc) {

    if (!err) {
      console.log('CADASTRAR');
      res.status("201");
      return res.end();
    } else {
      console.log(`${err} --- ${doc}`);
      throw err;
    }
  });

  //   //console.log(result)
  //   res.end();
});


app.get('/get-device', (req, res) => {
  query = { "cidade": "" };
  device.find({query}, function (err, doc) {

    if (!err) {
      console.log('ACHOU');
     // res.json(doc);
      console.log(doc);
      res.status("201");

      return res.end();
    } else {
      console.log(`${err} --- ${doc}`);
      throw err;
    }
  });

  // res.json(list);
  return res.end();
});

var apps = app.listen(3200, function () {
  // var host = server.address().address
  // var port = server.address().port
  console.log("App listening at ")
})