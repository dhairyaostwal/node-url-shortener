const mongoose = require('mongoose');

const connectDB = (url) => {
  mongoose.connect(url, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
