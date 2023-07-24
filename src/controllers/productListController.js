const productList = require('../models/Products');

const getProducts = async (req, res) => {
  try {
    const products = await productList.getProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving products', error });
  }
}

module.exports = { getProducts };