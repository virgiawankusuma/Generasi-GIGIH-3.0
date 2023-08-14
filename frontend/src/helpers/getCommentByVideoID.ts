import getAllComment from './getAllComment';

export default function getCommentByVideoID(videoID: string | undefined) {
  const comments = getAllComment();
  const commentsByVideoID = comments.data.filter((comment) => comment.VideoID === videoID);

  return commentsByVideoID;
}