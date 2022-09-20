const ShortURL = require('../models/ShortURLSchema');

const getAllLinks = async (req, res) => {
  try {
    const shorturls = await ShortURL.find({});
    res.status(200).json({ shorturls });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createNewLink = async (req, res) => {
  try {
    const shorturl = await ShortURL.create(req.body);
    res.status(201).json({ shorturl });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = { getAllLinks, createNewLink };
