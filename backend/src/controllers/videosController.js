const Videos = require('../models/Videos');

const getVideos = async (req, res) => {
  try {
    const videos = await Videos.find();
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving video thumbnails', 
      error 
    });
  }
};

module.exports = { getVideos };
