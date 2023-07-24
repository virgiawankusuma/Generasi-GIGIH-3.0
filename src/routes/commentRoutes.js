const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.get('/', commentController.getComments);
router.post('/submit-comment', commentController.submitComment);

module.exports = router;