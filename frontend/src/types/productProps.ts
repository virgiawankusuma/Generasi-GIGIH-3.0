export interface IProductProps {
  _id: string;
  ProductID: string;
  Link: string;
  Title: string;
  Img: string;
  Store: string;
  Price: Float32Array;
  VideoID: string;
}

export interface IProductCardProps {
  _id: string;
  productID: string;
  link: string;
  title: string;
  img: string;
  store: string;
  price: Float32Array
  videoID: string;
}