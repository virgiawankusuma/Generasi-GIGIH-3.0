const VideoThumbs = require('../models/VideoThumbs');

const getVideoThumbs = async (req, res) => {
  try {
    const videoThumbs = await VideoThumbs.find();
    res.json(videoThumbs);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving video thumbnails', error });
  }
};

module.exports = { getVideoThumbs };
