const express = require('express');
const {
  getAllLinks,
  createNewLink,
  getALink,
  editALink,
  deleteALink,
} = require('../controllers/links.controller');
const router = express.Router();

router.route('/').get(getAllLinks).post(createNewLink);
router.route('/:id').get(getALink).patch(editALink).delete(deleteALink);

module.exports = router;
