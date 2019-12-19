const authorService = {
    load: function () {
        return fetch(`http://localhost:9999/api/author`, {
            method: 'GET',
            credentials: 'include'
        })
            .then(res => res.status === 200 ? res.json() : res.text())
            .catch(err => console.error(err));
    },

    create: function (data) {
        return fetch(`http://localhost:9999/api/author/add`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data),
            credentials: 'include'
        }).then(res => res.text()).then(text => console.log(text));
        // .then(res => res.json());
    }
};

export default authorService;