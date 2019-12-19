const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Author.find()
            .then((author) => res.send(author))
            .catch(next);
    },

    post: (req, res, next) => {
        const { nickname, name, born, books, image } = req.body;

        // models.Author.create({ nickname, name, born, books, image })
        // .catch(next);

        models.Author.findOne({ name })
            .then((res) => {
                if (res) {
                    res.status('403').send("Author already exist.");
                } else {
                    models.Author.create({ nickname, name, born, books, image });
                }
            })
            .catch(next);
    }
};