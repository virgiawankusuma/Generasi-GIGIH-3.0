const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  ProductID: {
    type: String,
    required: [true, 'Product ID is required'],
  },
  Link: {
    type: String,
    required: [true, 'Link is required'],
  },
  Title: {
    type: String,
    required: [true, 'Title is required'],
  },
  Price: {
    type: String,
    required: [true, 'Price is required'],
  },
});

const Product = mongoose.model('products', productSchema);

module.exports = Product;