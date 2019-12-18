const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.News.find()
            .then((news) => res.send(news))
            .catch(next);
    }
};