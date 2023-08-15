export interface IVideoProps {
  _id: string;
  VideoID: string;
  Title: string;
  Url: string;
  Store: string;
  Category: string;
  Views: number;
  Likes: number;
  Img: string;
}

export interface IVideoCardProps {
  videoID: string;
  title: string;
  store: string;
  category: string;
  views: number;
  img: string;
}

export interface IVideoDetailProps {
  videoID: string;
  title: string;
  url: string;
  store: string;
  category: string;
  views: number;
  likes: number;
  img: string;
}