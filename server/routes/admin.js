const router = require('express').Router();
const handle = require('../handlers');

router.route('/register').post(handle.registerAdmin)
router.route('/login').post(handle.loginAdmin)
/* router.post('/register', handle.registerAdmin);
router.post('/login', handle.loginAdmin); */

module.exports = router;

