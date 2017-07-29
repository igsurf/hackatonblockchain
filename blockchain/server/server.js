// Get the packages we need
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
let mongoose = require('mongoose');

// Create our Express application
const app = express();
const port = 3000;

let uri = '//blockchain:V2bbWKNcS9iRcvNNiyN9Kvx39r49vlNV9Omk51RrBCdxKSuoYxGAgUvm7rEAV2Qq2UCSNxVnuUt8GaRAXEMXWA==@blockchain.documents.azure.com:10255/?ssl=true&sslverifycertificate=false';
mongoose.connect(uri);

app.post("/device", function (request, response) {
  var mac = request.body.mac;

  usuarioDAO.inserirMac(mac).then(function (data) {
    if (JSON.stringify(data).length > 2) {

      response.render("Inseriu");
    } else {
      response.send("Inseriu com erro");
    }
  });
});


app.listen(port, () => {
  console.log('We are live on ' + port);
});

