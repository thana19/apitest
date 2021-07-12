const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

require('./database');

app.get('/', (req, res) => {
    res.json({ message: 'Hello API Test' })
  })

  app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
  })