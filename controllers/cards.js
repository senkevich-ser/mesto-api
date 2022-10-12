const Card = require("../models/user");

const createCard = (req, res) => {
  const { name, link } = req.body;

  Card.create({ name, link })
    // вернём записанные в базу данные
    .then((card) => res.send({ data: card }))
    // данные не записались, вернём ошибку
    .catch((err) => res.status(500).send({ message: "Произошла ошибка", error: `${err}` }));
};
module.exports = { createCard };
