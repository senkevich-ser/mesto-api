const express = require("express");
const { createCard, getCards, deleteCard, likeCard, dislikeCard} = require("../controllers/cards");

const routes = express.Router();

routes.get("/cards", getCards);//получение карточек
routes.delete("/cards/:cardId", deleteCard);//удаление карточек
routes.post("/cards", express.json(), createCard);//создание карточки
routes.put("/cards/:cardId/likes", likeCard);//поставить лайк карточке
routes.delete("/cards/:cardId/likes", dislikeCard);//удалить лайк с карточки

module.exports = routes;
