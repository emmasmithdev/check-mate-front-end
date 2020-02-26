const express = require('express');
const app = express();
const fetch = require('node-fetch');
const parser = require('body-parser');
const cors = require('cors');

app.use(parser.json());
app.use(cors());

const headers = {
  "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
  "x-rapidapi-key": "15460140camsh5de5b15419595a8p12026fjsnf68a8b346633"
}

app.get('/news', (req, res) => {
  fetch("https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI?autoCorrect=false&pageNumber=1&pageSize=10&q=inspiring&safeSearch=true", { method: 'GET', headers: headers})
  .then((jsonData) => {
    return jsonData.json()
  })
  .then(data => {
    return res.json(data)
  })
  .catch(err => console.log(err))
});

app.listen(4040, function() {
  console.log(`Listening on ${this.address().port}`);
})
