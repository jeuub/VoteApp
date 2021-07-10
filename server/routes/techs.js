const router = require('express').Router();
const handle = require('../handlers');

router.route('/').get(handle.showTechs).post(handle.createTechs);

module.exports = router;