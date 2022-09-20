const express = require('express');
const {
  getAllLinks,
  createNewLink,
} = require('../controllers/links.controller');
const router = express.Router();

router.route('/').get(getAllLinks).post(createNewLink);
// router.route('/:id').get().patch().delete();

module.exports = router;
