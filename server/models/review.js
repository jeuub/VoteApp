const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  created:{
    type: Date,
    default: Date.now,  
  },
  textReview: {
    type: 'string',
    required: true,
  },
});

module.exports = mongoose.model('Review', reviewSchema);