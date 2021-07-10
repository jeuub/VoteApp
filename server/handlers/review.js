const db = require('../models');

exports.showReview = async (req, res, next) => {
  try{
    const review = await db.Review.find();

    res.status(200).json(review);
  }catch(err) {
    err.status = 400;
    next(err);
  }
};

exports.createReview = async (req, res, next) => {
  try{
    const {id} = req.decoded;
    const user = await db.User.findById(id);
    const {textReview} = req.body; 
    const Review = await db.Review.create({
      textReview,
      user,
    });
    user.review.push(Review._id);
    await user.save();

    res.status(201).json({...Review._doc, user:user._id});
  }catch(err){
    err.status = 400;
    next(err);
  }
};

exports.deleteReview = async (req, res, next) => {
  try{
    const review = await db.Review.findOneAndRemove({_id:req.body.id});
    res.status(200).json('deleted');
  }catch(err) {
    err.status = 400;
    next(err);
  }
};
