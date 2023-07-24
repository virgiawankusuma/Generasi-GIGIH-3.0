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
    type: String,
    required: [true, 'Timestamp is required'],
  },
  VideoID: {
    type: String,
    required: [true, 'Video ID is required'],
  },
});

const Comment = mongoose.model('comments', commentSchema);

module.exports = Comment;