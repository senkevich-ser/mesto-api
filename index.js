const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/users');


const app = express();

const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true
});

app.use('/', users);
/* const path = require('path'); */

/* app.use(express.static(path.join(__dirname, 'public'))); */

app.listen(PORT, () => {
  console.log(`Server listen PORT ${PORT}`);
});
