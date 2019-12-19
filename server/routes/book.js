const controllers = require('../controllers');
const router = require('express').Router();

router.get('/', controllers.book.get);

router.post('/create', controllers.book.post);

module.exports = router;