const product = require('../models/Products');
const videoThumbs = require('../models/VideoThumbs');

const getProducts = async (req, res) => {
  try {
    const products = await product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving products', error });
  }
}

const getProductByVideoID = async (req, res) => {
  try {
    const { VideoID } = req.params;

    const videoThumbnail = await videoThumbs.findOne({ VideoID });
    const products = await product.find({ VideoID: videoThumbnail.VideoID });

    res.status(200).json(products);

  } catch (error) {
    res.status(500).json({ message: 'Error retrieving product', error });
  }
}

module.exports = { getProducts, getProductByVideoID };