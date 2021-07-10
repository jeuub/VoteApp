const mongoose = require('mongoose');

const techSchema = new mongoose.Schema({
  title: {
    type: 'string',
    required: true
  },
  text: {
    type: 'string',
    required: true,
  },
  photo: {
    type: 'string',
    required: true,
  },
  created:{
    type: Date,
    default: Date.now,  
  },
});

module.exports = mongoose.model('Techs', techSchema);