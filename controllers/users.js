const User = require("../models/user");

const getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch((err) => res.status(500).send({ message: "Произошла ошибка", error: `${err}` }));
};

const getUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (user) {
        res.send({ data: user });
      } else {
        res.status(404).send({ message: "Пользователь по указанному _id не найден" });
      }
    })
    .catch((err) => res.status(500).send({ message: "Произошла ошибка", error: `${err}` }));
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    // вернём записанные в базу данныеclear
    .then((user) => {
      if (user) {
        res.send({ data: user });
      } else {
        res.status(400).send({ message: "Переданы не корректные данные при создании пользователя" });
      }
    })
    // данные не записались, вернём ошибку
    .catch((err) => res.status(500).send({ message: "Произошла ошибка", error: `${err}` }));
};

const updateProfile = (req, res) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(req.user._id, { name, about }, { new: true })
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: "Произошла ошибка", error: `${err}` }));
};

const updateAvatar = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id, { avatar }, { new: true })
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: "Произошла ошибка", error: `${err}` }));
};

module.exports = {
  getUsers, createUser, getUser, updateAvatar, updateProfile,
};
