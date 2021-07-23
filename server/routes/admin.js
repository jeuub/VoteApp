const router = require('express').Router();
const handle = require('../handlers');

router.route('/register').post(handle.registerAdmin)
router.route('/login').post(handle.loginAdmin)

module.exports = router;

