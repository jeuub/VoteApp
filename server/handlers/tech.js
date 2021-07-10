const db = require('../models');

exports.showTechs = async (req, res, next) => {
  try{
    const review = await db.Techs.find();

    res.status(200).json(review);
  }catch(err) {
    err.status = 400;
    next(err);
  }
};

exports.createTechs = async (req, res, next) => {
  try{
    const {title,text,photo} = req.body; 
    const tech = await db.Techs.create({title,text,photo});
    res.status(201).json({tech});
  }catch(err){
    err.status = 400;
    next(err);
  }
};
