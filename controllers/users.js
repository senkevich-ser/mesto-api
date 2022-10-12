const User = require("../models/user");

const getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch((err) => res.status(500).send({ message: "Произошла ошибка", error: `${err}` }));
};

const getUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: "Произошла ошибка", error: `${err}` }));
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    // вернём записанные в базу данные
    .then((user) => res.send({ data: user }))
    // данные не записались, вернём ошибку
    .catch((err) => res.status(500).send({ message: "Произошла ошибка", error: `${err}` }));
};
const updateAvatar = (req, res) => {
  console.log(req.user._id)
  const{avatar}=req.body
  User.findByIdAndUpdate(req.user._id, { avatar: avatar })
  .then(user => res.send({ data: user }))
  .catch((err) => res.status(500).send({ message: "Произошла ошибка", error: `${err}` }));
};

module.exports = { getUsers, createUser, getUser,updateAvatar };
