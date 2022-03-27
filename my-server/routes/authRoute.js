var express = require('express');
var routes = express.Router();
var AuthController = require('../controllers/AuthController');


routes.post('/login',AuthController.login);

module.exports = routes;