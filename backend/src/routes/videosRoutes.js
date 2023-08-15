const express = require('express');
const router = express.Router();
const videosController = require('../controllers/videosController');

router.get('/', videosController.getVideos);
router.get('/:VideoID', videosController.getVideoById);

module.exports = router;
