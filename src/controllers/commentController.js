const comment = require('../models/Comments');

const getComments = async (req, res) => {
  try {
    const comments = await comment.getComments();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving comments', error });
  }
}

const submitComment = async (req, res) => {
  try {
    const { Username, Comment, VideoID } = req.body;
    
    if (!Username || !Comment || !VideoID) {
      return res.status(400)
                .json({
                  message: 'Username, Comment, and VideoID are required fields.' 
                });
    }

    const newComment = new Comment({
      Username,
      Comment,
      VideoID,
    });

    await newComment.save();

    res.json({ success: true, message: 'Comment submitted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting comment', error });
  }
};

module.exports = { getComments, submitComment };