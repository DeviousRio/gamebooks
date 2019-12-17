const bookService = {
    load: function () {
        return fetch(`http://localhost:9999/api/book`, {
            method: 'GET',
            credentials: 'include'
        })
            .then(res => res.status === 200 ? res.json() : res.text())
            .catch(err => console.error(err));
    },

    create: function (data) {
        return fetch(`http://localhost:9999/api/book`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include'
        }).then(res => res.json());
    }
};

export default bookService;