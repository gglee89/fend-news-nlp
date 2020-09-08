/**
 * APP FILE
 */
const express = require('express');
const app = express();
const mockData = require('./mockData');

app.get('/', (req, res) => {
  res.status(200).sendFile('dist/index.html');
});

app.get('/test', (req, res) => {
  res.status(200).json(mockData);
});

module.exports = app;
