const Card = require("../models/card");

const getCards = (req, res) => {
  Card.find({})
    .then((cards) => res.send({ data: cards}))
    .catch((err) => res.status(500).send({ message: "Произошла ошибка", error: `${err}` }));
};

const deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => res.send(`Карточка ${card._id} удалена`))
    .catch((err) => res.status(500).send({ message: "Произошла ошибка", error: `${err}` }));
};


const createCard = (req, res) => {
  const { name, link } = req.body;
  Card.create({ name, link,owner: req.user._id})
    // вернём записанные в базу данные
    .then((card) => res.send({ data: card }))
    // данные не записались, вернём ошибку
    .catch((err) => res.status(500).send({ message: "Произошла ошибка", error: `${err}` }));
};

const likeCard = (req, res) => Card.findByIdAndUpdate(
  req.params.cardId,
  { $addToSet: { likes: req.user._id } }, // добавить _id в массив, если его там нет
  { new: true },
).then((card) => res.send({ data: card }))
// данные не записались, вернём ошибку
.catch((err) => res.status(500).send({ message: "Произошла ошибка", error: `${err}` }));

const dislikeCard = (req, res) => Card.findByIdAndUpdate(
  req.params.cardId,
  { $pull: { likes: req.user._id } }, // убрать _id из массива
  { new: true },
).then((card) => res.send({ data: card }))
// данные не записались, вернём ошибку
.catch((err) => res.status(500).send({ message: "Произошла ошибка", error: `${err}` }));

module.exports = { createCard, getCards, deleteCard, likeCard, dislikeCard};
