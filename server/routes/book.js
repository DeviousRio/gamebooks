const controllers = require('../controllers');
const router = require('express').Router();

router.get('/', controllers.book.get);
router.post('/', controllers.book.post);

module.exports = router;