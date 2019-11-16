const express = require('express');
const app = express();

const path = require('path');
const port = process.env.PORT || 3100;

app.use(express.static(__dirname + '/'));                 // set the static files location /public/img will be /img for users

app.get('/', (req, res) => {
  res.sendfile(__dirname + '/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

app.listen(port, () => console.log(`Listening on port ${port}`));
