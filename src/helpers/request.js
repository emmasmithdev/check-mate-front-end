class Request {

    get(url) {
      return fetch(url)
      .then((res) => res.json());
    }

    getFromExternal(url) {
      return fetch(url, {
      	method: "GET",
      	headers: {
      		"x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
      		"x-rapidapi-key": "15460140camsh5de5b15419595a8p12026fjsnf68a8b346633"
      	}
      })
      .then(response => {
      	console.log(response);
      })
      .catch(err => {
      	console.log(err);
      });
    }

    delete(url) {
      return fetch(url, {
        method: "DELETE",
        headers: {'Content-Type': 'application/json'}
      })
    }

    post(url, payload){
      return fetch(url, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
      })
    }

    patch(url, payload){
      return fetch(url, {
        method: "PATCH",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
      })
    }

}

export default Request;
