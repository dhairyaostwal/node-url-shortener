require('dotenv').config();
const express = require('express');
const shortid = require('shortid')
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to URL Shortner');
});

const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
