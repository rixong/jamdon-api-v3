const mongoose = require('mongoose');
const validator = require('validator');

const jamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  ensemble: {
    type: String,
    required: true
  },
  date: {
    type: Date
  },
  location: {
    type: String
  },
  instruments: {
    type: Array
  },
  musicians: {
    type: Array
  }
});

const Jams = mongoose.model('Jams', jamSchema)