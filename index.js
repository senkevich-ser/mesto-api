const express = require('express');

const users = require('./routes/users');

const app = express();
const { PORT = 3000 } = process.env;

app.use('/', users);
/* const path = require('path'); */

/* app.use(express.static(path.join(__dirname, 'public'))); */

app.listen(PORT, () => {
  console.log(`Server listen PORT ${PORT}`);
});
