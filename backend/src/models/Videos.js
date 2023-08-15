const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  VideoID: { 
    type: String, 
    required: [true, 'Video ID is required'],
  },
  Title: {
    type: String,
    required: [true, 'Title is required'],
  },
  Url: { 
    type: String, 
    required: [true , 'Url is required'],
  },
  Store: {
    type: String,
    required: [true, 'Store is required'],
  },
  Category: {
    type: String,
    required: [true, 'Category is required'],
  },
  Views: {
    type: Number,
    required: [true, 'Views is required'],
  },
  Likes: {
    type: Number,
    required: [true, 'Likes is required'],
  },
  Img: {
    type: String,
    required: [true, 'Img is required'],
  },
});

const Video = mongoose.model('videos', videoSchema);

module.exports = Video;
