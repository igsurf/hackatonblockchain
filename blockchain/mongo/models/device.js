'use strict';

var mongoose = require('mongoose'), Schema = mongoose.Schema;

  var DeviceSchema = new Schema({

  created: {
    type: Date,
    default: Date.now
  },

  country: {
    type: String,
    default: '',
  },

  city: {
    type: String,
    default: '',
  },

  state: {
    type: String,
    default: '',
  },

  hash: {
    type: String,
    default: '',
  },

  macAddress: {
    type: String,
    default: '',
  },

  content: {
    type: String,
    default: '',
  },

});

mongoose.model('DeviceSchema', DeviceSchema);