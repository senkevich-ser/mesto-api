const express = require('express');

const app = express();
const { PORT = 3000 } = process.env;
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Server listen PORT ${PORT}`);
});
