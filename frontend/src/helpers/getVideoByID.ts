export default async function getVideoByID(videoID: string | undefined) {
  try {
    const data = await fetch(`https://generasi-gigih-3-api.up.railway.app/videos/${videoID}`);
    const response = await data.json();
    return response;
  } catch (error) {
    throw new Error("Error while fetching data");
  }
}

