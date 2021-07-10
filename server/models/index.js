const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE, { useFindAndModify: false });

module.exports.User = require('./user');
module.exports.Polls = require('./polls');
module.exports.Review = require('./review');
module.exports.Admin = require('./admin');
module.exports.Techs = require('./tech');
module.exports.Version = require('./version');