const controllers = require('../controllers');
const router = require('express').Router();

router.get('/', controllers.news.get);

module.exports = router;