const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const adminSchema = new mongoose.Schema({
  username:{
    type: 'string',
    required: true,
    unique: true
  },
  password: {
    type: 'string',
    required: true,
  },
  created:{
    type: Date,
    default: Date.now,
  }
});

adminSchema.pre('save', async function (next) {
  try {
    if(!this.isModified('password')){
      return next();
    }
    const hashed = await bcrypt.hash(this.password, 10);
    this.password = hashed;
    return next();
  } catch (err) {
    return next(err);
  }
});

adminSchema.methods.comparePassword = async function(attempt, next){
  try{
    return await bcrypt.compare(attempt, this.password);
  }catch (err) {
    next(err);
  }
};

module.exports = mongoose.model('Admin', adminSchema);