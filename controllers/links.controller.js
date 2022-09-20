const ShortURL = require('../models/ShortURLSchema');

const getAllLinks = async (req, res) => {
  try {
    const shorturls = await ShortURL.find({});
    res.status(200).json({ shorturls });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getALink = async (req, res) => {
  try {
    const { id: linkId } = req.params;
    const shorturl = await ShortURL.findOne({ _id: linkId });
    if (!shorturl) {
      return res.status(404).json({ msg: `No link with id: ${linkId}` });
    }

    res.status(200).json(shorturl);
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

const editALink = async (req, res) => {
  try {
    const { id: linkId } = req.params;
    const shorturl = await ShortURL.findOneAndUpdate(
      { _id: linkId },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!shorturl) {
      return res.status(404).json({ msg: `No task with id: ${linkId}` });
    }

    res.status(200).json({ shorturl });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteALink = async (req, res) => {
  try {
    const { id: linkId } = req.params;
    const shorturl = await ShortURL.findOneAndDelete({ _id: linkId });
    if (!shorturl) {
      return res.status(404).json({ msg: `No task with id: ${linkId}` });
    }

    res.status(200).json({ msg: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllLinks,
  createNewLink,
  getALink,
  editALink,
  deleteALink,
};
