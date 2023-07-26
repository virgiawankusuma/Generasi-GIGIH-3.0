const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.get('/', commentController.getComments);
router.get('/:VideoID', commentController.getCommentByVideoID);
router.post('/', commentController.submitComment);

module.exports = router;