export default async function getComments() {
  try {
    const data = await fetch('https://generasi-gigih-3-api.up.railway.app/comments');
    const response = await data.json();
    return response;
  } catch (error) {
    throw new Error("Error while fetching data");
  }
}

