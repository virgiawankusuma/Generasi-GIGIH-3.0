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
  VideoID: { 
    type: String, 
    required: [true, 'Video ID is required'],
  }, // Reference to the associated video's VideoID
});

const Product = mongoose.model('products', productSchema);

module.exports = Product;