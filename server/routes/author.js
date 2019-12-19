const controllers = require('../controllers');
const router = require('express').Router();

router.get('/', controllers.author.get);

router.post('/add', controllers.author.post);

module.exports = router;