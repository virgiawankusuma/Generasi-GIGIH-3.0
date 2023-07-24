const VideoThumbnail = require('../models/VideoThumbnail');

const getVideoThumbnails = async (req, res) => {
  try {
    const videoThumbnails = await VideoThumbnail.find();
    res.json(videoThumbnails);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving video thumbnails', error });
  }
};

module.exports = { getVideoThumbnails };
