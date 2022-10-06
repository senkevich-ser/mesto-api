const express = require("express");
const { getUsers, createUser, getUser } = require("../controllers/users");

const routes = express.Router();

routes.get("/users", getUsers);
routes.get("/users/:id", getUser);
routes.post("/users", express.json(), createUser);

module.exports = routes;
