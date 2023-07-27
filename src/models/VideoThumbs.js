const mongoose = require('mongoose');

const videoThumbsSchema = new mongoose.Schema({
  VideoID: { 
    type: String, 
    required: [true, 'Video ID is required'],
  },
  Url: { 
    type: String, 
    required: [true , 'Url is required'],
  },
});

const VideoThumbnail = mongoose.model('video_thumbs', videoThumbsSchema);

module.exports = VideoThumbnail;
