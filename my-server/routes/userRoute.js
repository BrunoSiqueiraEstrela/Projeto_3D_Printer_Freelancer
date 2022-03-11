var express = require('express');
var routes = express.Router();
var UsersController = require("../controllers/UsersController");

/* ROTA BASE REST API
routes.get('/URL',UsersController.item)
*/

routes.get('/users',UsersController.index);
routes.get('/users/:id',UsersController.show);
routes.post('/users',UsersController.create);
routes.put('/users/:id',UsersController.update);
routes.delete('/users/:id',UsersController.destroy);

module.exports = routes;
