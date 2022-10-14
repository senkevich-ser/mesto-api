const express = require("express");
const {
  getUsers, createUser, getUser, updateAvatar, updateProfile,
} = require("../controllers/users");

const routes = express.Router();

routes.get("/users", getUsers);
routes.get("/users/:id", getUser);
routes.post("/users", express.json(), createUser);
routes.patch("/users/me", express.json(), updateProfile);
routes.patch("/users/me/avatar", express.json(), updateAvatar);

module.exports = routes;
