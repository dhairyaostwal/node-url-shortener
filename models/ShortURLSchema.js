const mongoose = require('mongoose');
const shortid = require('shortid');

const ShortURLSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: shortid.generate(),
  },
  original_link: {
    type: String,
    required: [true, 'Must provide the link'],
  },
  custom_end_param: {
    type: String,
    default: '',
  },
  created_at: {
    type: String,
    default: Date.now(),
  },
});

module.exports = mongoose.model('ShortURL', ShortURLSchema);
