const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');

router.get('/', commentsController.getComments);
router.get('/:VideoID', commentsController.getCommentByVideoID);
router.post('/', commentsController.submitComment);

module.exports = router;