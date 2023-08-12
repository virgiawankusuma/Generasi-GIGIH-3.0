const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/', productsController.getProducts);
router.get('/:VideoID', productsController.getProductByVideoID);

module.exports = router;