const express = require('express');
const app = express();
const fetch = require('node-fetch');

const headers = {
  "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
  "x-rapidapi-key": "15460140camsh5de5b15419595a8p12026fjsnf68a8b346633"
}

app.get('/news', (req, res) => {
  fetch(url, { method: 'GET', headers: headers})
  .then((res) => {
    return res.json()
  })
  .then((json) => {
    console.log(json);
  })
});
