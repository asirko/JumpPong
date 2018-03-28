const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const auth = require('./auth.middleware');

app.use(bodyParser.json());
app.use(auth.middleware);
require('./route')(app);

app.listen(3000, function () {
  console.log('Mock app listening on port 3000!');
});
