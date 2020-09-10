/**
 * APP FILE
 */
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();
const mockData = require('./mockData');

// MIDDLEWARE
app.use(express.static('dist'));
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// ENDPOINTS
app.get('/', (req, res) => {
  res.status(200).sendFile('dist/index.html');
});

app.get('/test', (req, res) => {
  res.status(200).json(mockData);
});

module.exports = app;
