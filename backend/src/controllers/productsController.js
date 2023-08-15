const productsSchema = require('../models/Products');
const videosSchema = require('../models/Videos');

const getProducts = async (req, res) => {
  try {
    const products = await productsSchema.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ 
      message: 'Error retrieving products', 
      error 
    });
  }
}

const getProductByID = async (req, res) => {
  try {
    const { ProductID } = req.params;

    const product = await productsSchema.findOne({ ProductID });
    res.status(200).json(product);

  } catch (error) {
    res.status(500).json({ 
      message: 'Error retrieving product', 
      error 
    });
  }
}

const getProductByVideoID = async (req, res) => {
  try {
    const { VideoID } = req.params;

    const video = await videosSchema.findOne({ VideoID });
    const products = await productsSchema.find({ VideoID: video.VideoID });

    res.status(200).json(products);

  } catch (error) {
    res.status(500).json({ 
      message: 'Error retrieving product', 
      error 
    });
  }
}

module.exports = { 
  getProducts, 
  getProductByID,
  getProductByVideoID
};