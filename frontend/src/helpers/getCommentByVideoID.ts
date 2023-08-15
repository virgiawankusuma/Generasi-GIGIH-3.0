export default async function getCommentByVideoID(videoID: string | undefined) {
  try {
    const response = await fetch(`https://generasi-gigih-3-api.up.railway.app/comments/${videoID}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching comments");
  }
}