const User = require('../models/users');

const getUsers = (req, res) => {
  res.send("<h1>Hello world!</h1>");
};

const getUser = (req, res) => {
  res.send(`userParamsId:  ${req.params.id}`);
};

const createUser = (req, res) => {

    const { name, gender } = req.body; // получим из объекта запроса имя и описание пользователя

    User.create({ name, gender })
    // вернём записанные в базу данные
    .then(user => res.send({ data: user }))
    // данные не записались, вернём ошибку
    .catch(err => res.status(500).send({ message: 'Произошла ошибка' }));
};
module.exports = { getUsers, createUser, getUser };
