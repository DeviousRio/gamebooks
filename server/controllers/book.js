const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Book.find()
            .then((books) => res.send(books))
            .catch(next);
    },

    post: (req, res, next) => {
        const { title, price, author, image } = req.body;
        models.Book.findOne({ title })
            .then((book) => {
                if (book) {
                    res.status(403).send("Book already exist.")
                } else {
                    models.Book.create({ title, price, author, image })
                }
            })
            .catch(next)
    }
};