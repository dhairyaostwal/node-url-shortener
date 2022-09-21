const express = require('express');
const {
  getAllLinks,
  createNewLink,
  getALink,
  editALink,
  deleteALink,
  getALinkUsingCustomEndpoint
} = require('../controllers/links.controller');
const router = express.Router();

router.route('/').get(getAllLinks).post(createNewLink);
router.route('/:id').get(getALink).patch(editALink).delete(deleteALink);
router.route('/custom/:custom_endpoint').get(getALinkUsingCustomEndpoint);

module.exports = router;
