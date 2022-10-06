const getUsers = (req, res) => {
  res.send("<h1>Hello world!</h1>");
};

const getUser = (req, res) => {
  res.send(`userParamsId:  ${req.params.id}`);
};

const createUser = (req, res) => {
  res.send(req.body);
};
module.exports = { getUsers, createUser, getUser };
