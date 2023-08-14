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
  Img: {
    type: String,
    required: [true, 'Image is required'],
  },
  Store: {
    type: String,
    required: [true, 'Store is required'],
  },
  Price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  VideoID: { 
    type: String, 
    ref: 'video_s',
    required: [true, 'Video ID is required'],
  },
});

const Product = mongoose.model('products', productSchema);

module.exports = Product;