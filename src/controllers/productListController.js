const productList = require('../models/Products');
const videoThumbnailList = require('../models/VideoThumbnail');

const getProducts = async (req, res) => {
  try {
    const products = await productList.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving products', error });
  }
}

const getProductByVideoID = async (req, res) => {
  try {
    const { VideoID } = req.params;
    
    const videoThumbnail = await videoThumbnailList.findOne({ VideoID });
    const products = await productList.find({ ProductID: videoThumbnail.VideoID });

    res.json(products);

  } catch (error) {
    res.status(500).json({ message: 'Error retrieving product', error });
  }
}

module.exports = { getProducts, getProductByVideoID };