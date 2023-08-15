const commentSchema = require('../models/Comments');
const videosSchema = require('../models/Videos');

const getComments = async (req, res) => {
  try {
    const comments = await commentSchema.find({});
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ 
      message: 'Error retrieving comments', 
      error 
    });
  }
}

const getCommentByVideoID = async (req, res) => {
  try {
    const { VideoID } = req.params;

    const video = await videosSchema.findOne({ VideoID });
    const comments = await commentSchema.find({ VideoID: video.VideoID });

    res.status(200).json(comments);
    
  } catch (error) {
    res.status(500).json({ 
      message: 'Error retrieving comment', 
      error 
    });
  }
}

const submitComment = async (req, res) => {
  try {
    const { Username, Comment, VideoID } = req.body;
    
    if (!Username || !Comment || !VideoID) {
      return res.status(400).json({
        message: 'Username, Comment, and VideoID are required fields.' 
      });
    }

    const newComment = new comment({
      Username,
      Comment,
      VideoID,
    });

    await newComment.save();

    res.status(201).json({
      success: true, 
      message: 'Comment submitted successfully.' 
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to submit comment', error
    });
  }
};

module.exports = { 
  getComments, 
  getCommentByVideoID,
  submitComment 
};