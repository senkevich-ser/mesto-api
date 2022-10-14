const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/users');
const cards = require('./routes/cards');

const app = express();

const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
});

app.use((req, res, next) => {
  req.user = {
    _id: '63462f1f1088e1696de0b196', // вставьте сюда _id созданного в предыдущем пункте пользователя
  };

  next();
});

app.use('/', users);
app.use('/', cards);

/* const path = require('path'); */

/* app.use(express.static(path.join(__dirname, 'public'))); */

app.listen(PORT, () => {
  console.log(`Server listen PORT ${PORT}`);
});
