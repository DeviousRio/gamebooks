const bookService = {
    load: function () {
        return fetch(`http://localhost:9999/api/books`).then(res => res.json());
    }
};

export default bookService;