const express = require('express');
const router = express.Router();
const videoThumbsController = require('../controllers/videoThumbsController');

router.get('/', videoThumbsController.getVideoThumbs);

module.exports = router;
