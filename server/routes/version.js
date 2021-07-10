const router = require('express').Router();
const handle = require('../handlers');

router.route('/').get(handle.showVersion).post(handle.createVersion);

module.exports = router;