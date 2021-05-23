const jwt = require('jsonwebtoken');

module.exports = (req, res, next) =>{
  if(req.headers.autorization) {
    const token = req.headers.autorization.split(' ')[1];
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if(err){
        next(Error('Faild to authenticate token'));
      } else {
        req.decoded = decoded;
        next();
      }
    });
  }else {
    next(Error('No token provided'));
  }
}