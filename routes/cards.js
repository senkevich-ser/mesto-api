const express = require("express");
const { createCard, getCards, deleteCard} = require("../controllers/cards");

const routes = express.Router();

routes.get("/cards", getCards);
routes.delete("/cards/:cardId", deleteCard);
routes.post("/cards", express.json(), createCard);

module.exports = routes;
