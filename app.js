require('dotenv').config();
const express = require('express');
const connectDB = require('./db/connect');
const links = require('./routes/links');
const app = express();

app.use(express.json());

// routes
app.use('/api/v1/links', links);

const PORT = process.env.PORT;
const connectionString = process.env.MONGO_URI;

const start = async () => {
  try {
    await connectDB(connectionString);
    app.listen(PORT || 3010, () => {
      console.log(`Server running on http://localhost:${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start()
  .then(() => {
    console.log('Connected to the DB...');
  })
  .catch((err) => {
    console.log(err);
  });
