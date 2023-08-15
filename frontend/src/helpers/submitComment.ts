async function submitComment(username: string, comment: string, videoId: string): Promise<Comment> {
  const url = 'https://generasi-gigih-3-api.up.railway.app/comments';
  const data = {
    Username: username,
    Comment: comment,
    VideoID: videoId,
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to submit comment');
  }

  return response.json();
}

export default submitComment;
