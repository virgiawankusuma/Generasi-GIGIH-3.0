const express = require('express');
const router = express.Router();
const productController = require('../controllers/productListController');

router.get('/', productController.getProducts);

module.exports = router;