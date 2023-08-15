export default async function getProductByVideoByID(videoID: string | undefined) {
  try {
    const data = await fetch(`https://generasi-gigih-3-api.up.railway.app/products/${videoID}`);
    const products = await data.json();
    return products;
  } catch (error) {
    throw new Error("Error while fetching products");
  }
}