const db = require('../models');

exports.showVersion = async (req, res, next) => {
  try {
    const versions = await db.Version.find();

    res.status(200).json(versions);
  } catch (err) {
    err.status = 400;
    next(err);
  }
};

exports.createVersion = async (req, res, next) => {
  try {
    const { version, text } = req.body;
    const versionData = await db.Version.create({ version, text });
    res.status(201).json({ versionData });
  } catch (err) {
    err.status = 400;
    next(err);
  }
};
