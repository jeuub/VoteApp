const mongoose = require('mongoose');

const versionSchema = new mongoose.Schema({
  version: {
    type: 'string',
    required: true
  },
  text: {
    type: 'string',
    required: true,
  },
  created:{
    type: Date,
    default: Date.now,  
  },
});

module.exports = mongoose.model('Versions', versionSchema);