const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: [true, 'Username is required'],
  },
  Comment: {
    type: String,
    required: [true, 'Comment is required'],
  },
  Timestamp: {
    type: Date,
    default: Date.now,
  },
  VideoID: {
    type: String,
    ref: 'video_thumbs',
    required: [true, 'Video ID is required'],
  },
});

const Comment = mongoose.model('comments', commentSchema);

module.exports = Comment;