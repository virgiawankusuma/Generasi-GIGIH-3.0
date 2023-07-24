const express = require('express');
const router = express.Router();
const videoThumbnailController = require('../controllers/videoThumbnailController');

router.get('/', videoThumbnailController.getVideoThumbnails);

module.exports = router;
