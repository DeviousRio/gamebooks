const newsService = {
    load: function () {
        return fetch(`http://localhost:9999/api/news`, {
            method: 'GET',
            credentials: 'include'
        })
            .then(res => res.status === 200 ? res.json() : res.text())
            .catch(err => console.error(err));
    }
}

export default newsService;