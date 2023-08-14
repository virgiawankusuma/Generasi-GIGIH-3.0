export interface ICommentProps {
  _id: string;
  Username: string;
  Comment: string;
  Timestamp: string | Date;
  VideoID: string;
}

export interface ICommentCardProps {
  _id: string;
  username: string;
  comment: string;
  timestamp: string | Date;
  videoID: string;
}