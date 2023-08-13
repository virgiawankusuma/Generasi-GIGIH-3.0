export interface IVideoProps {
  _id: string;
  VideoID: string;
  Title: string;
  Url: string;
  Store: string;
  Category: string;
  Views: number;
  Likes: number;
}

export interface IVideoCardProps {
  videoID: string;
  title: string;
  thumbnailUrl: string;
  store: string;
  category: string;
  views: number;
}

export interface IVideoDetailProps {
  videoID: string;
  title: string;
  thumbnailUrl: string;
  store: string;
  category: string;
  views: number;
  likes: number;
}