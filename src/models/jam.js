const mongoose = require('mongoose');
const validator = require('validator');

const jamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  groupType: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
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

const Jam = mongoose.model('Jams', jamSchema)

module.exports = Jam