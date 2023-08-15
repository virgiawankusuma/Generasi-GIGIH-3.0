export default async function getVideos() {
  try {
    const data = await fetch('https://generasi-gigih-3-api.up.railway.app/videos');
    const response = await data.json();
    return response;
  } catch (error) {
    throw new Error("Error fetching data");
  }
}
