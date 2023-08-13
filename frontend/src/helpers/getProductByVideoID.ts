import getAllProduct from './getAllProduct';

export default function getProductByVideoID(videoID: string | undefined) {
  const products = getAllProduct();
  const productsByVideoID = products.data.filter((product) => product.VideoID === videoID);

  return productsByVideoID;
}