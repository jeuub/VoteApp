const router = require('express').Router();
const handle = require('../handlers');
const auth = require('../middlewares/auth');

router.route('/').get(handle.showReview).post(auth, handle.createReview);

module.exports = router;