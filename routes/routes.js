const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('<h1>Hello world!</h1>');
});
routes.post('/', express.json(), (req, res) => {
  res.send(req.body);
});
