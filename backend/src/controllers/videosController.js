const Videos = require('../models/Videos');

const getVideos = async (req, res) => {
  try {
    const videos = await Videos.find();
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving Videos', 
      error 
    });
  }
};

const getVideoById = async (req, res) => {
  try {
    const { VideoID } = req.params;

    const video = await Videos.findOne({ VideoID });
    res.status(200).json(video);
    
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving Video',
      error
    });
  }
};

module.exports = { getVideos, getVideoById };
