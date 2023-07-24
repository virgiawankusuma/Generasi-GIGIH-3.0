const mongoose = require('mongoose');

const videoThumbnailSchema = new mongoose.Schema({
  VideoID: { 
    type: String, 
    required: [true, 'Video ID is required'],
  },
  Url: { 
    type: String, 
    required: [true , 'Url is required'],
  },
});

const VideoThumbnail = mongoose.model('videoThumbnail', videoThumbnailSchema);

module.exports = VideoThumbnail;
