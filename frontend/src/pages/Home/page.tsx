/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSearchParams } from 'react-router-dom';

import Card from '../../components/Card';

export default function Home() {
  const [searchParams] = useSearchParams('category');

  const products = [
    {
      _id: "uniqueId1",
      ProductID: "p1",
      Link: "product/1",
      Title: "Product 1",
      Store: "Store 1",
      Price: 19.99,
      VideoID: "abc123"
    },
    {
      _id: "uniqueId2",
      ProductID: "p2",
      Link: "product/2",
      Title: "Product 2",
      Store: "Store 2",
      Price: 29.99,
      VideoID: "def456"
    },
    {
      _id: "uniqueId3",
      ProductID: "p3",
      Link: "product/3",
      Title: "Product 3",
      Store: "Store 3",
      Price: 14.99,
      VideoID: "ghi789"
    },
    {
      _id: "uniqueId4",
      ProductID: "p4",
      Link: "product/4",
      Title: "Product 4",
      Store: "Store 4",
      Price: 24.99,
      VideoID: "jkl012"
    },
    {
      _id: "uniqueId5",
      ProductID: "p5",
      Link: "product/5",
      Title: "Product 5",
      Store: "Store 5",
      Price: 9.99,
      VideoID: "mno345"
    },
    {
      _id: "uniqueId6",
      ProductID: "p6",
      Link: "product/6",
      Title: "Product 6",
      Store: "Store 6",
      Price: 19.99,
      VideoID: "pqr678"
    },
    {
      _id: "uniqueId7",
      ProductID: "p7",
      Link: "product/7",
      Title: "Product 7",
      Store: "Store 7",
      Price: 29.99,
      VideoID: "stu901"
    },
    {
      _id: "uniqueId8",
      ProductID: "p8",
      Link: "product/8",
      Title: "Product 8",
      Store: "Store 8",
      Price: 14.99,
      VideoID: "vwx234"
    },
    {
      _id: "uniqueId9",
      ProductID: "p9",
      Link: "product/9",
      Title: "Product 9",
      Store: "Store 9",
      Price: 24.99,
      VideoID: "yza567"
    },
    {
      _id: "uniqueId10",
      ProductID: "p10",
      Link: "product/10",
      Title: "Product 10",
      Store: "Store 10",
      Price: 39.99,
      VideoID: "bcd890"
    },
  ];

  const videos = [
    {
      _id: "uniqueId1",
      VideoID: "abc123",
      Title: "Video 1",
      Url: "https://picsum.photos/200/300?random=1",
      Store: "Store 1",
      Category: "populer",
      Viewer: Math.floor(Math.random() * 1000),
      Like: Math.floor(Math.random() * 100)
    },
    {
      _id: "uniqueId2",
      VideoID: "def456",
      Title: "Video 2",
      Url: "https://picsum.photos/200/300?random=2",
      Store: "Store 2",
      Category: "terbaru",
      Viewer: Math.floor(Math.random() * 500),
      Like: Math.floor(Math.random() * 100)
    },
    {
      _id: "uniqueId3",
      VideoID: "ghi789",
      Title: "Video 3",
      Url: "https://picsum.photos/200/300?random=3",
      Store: "Store 3",
      Category: "upcoming",
      Viewer: Math.floor(Math.random() * 100),
      Like: Math.floor(Math.random() * 100)
    },
    {
      _id: "uniqueId4",
      VideoID: "jkl012",
      Title: "Video 4",
      Url: "https://picsum.photos/200/300?random=4",
      Store: "Store 4",
      Category: "populer",
      Viewer: Math.floor(Math.random() * 1000),
      Like: Math.floor(Math.random() * 100)
    },
    {
      _id: "uniqueId5",
      VideoID: "mno345",
      Title: "Video 5",
      Url: "https://picsum.photos/200/300?random=5",
      Store: "Store 5",
      Category: "terbaru",
      Viewer: Math.floor(Math.random() * 500),
      Like: Math.floor(Math.random() * 100)
    },
    {
      _id: "uniqueId6",
      VideoID: "pqr678",
      Title: "Video 6",
      Url: "https://picsum.photos/200/300?random=6",
      Store: "Store 6",
      Category: "upcoming",
      Viewer: Math.floor(Math.random() * 100),
      Like: Math.floor(Math.random() * 100)
    },
    {
      _id: "uniqueId7",
      VideoID: "stu901",
      Title: "Video 7",
      Url: "https://picsum.photos/200/300?random=7",
      Store: "Store 7",
      Category: "populer",
      Viewer: Math.floor(Math.random() * 1000),
      Like: Math.floor(Math.random() * 100)
    },
    {
      _id: "uniqueId8",
      VideoID: "vwx234",
      Title: "Video 8",
      Url: "https://picsum.photos/200/300?random=8",
      Store: "Store 8",
      Category: "terbaru",
      Viewer: Math.floor(Math.random() * 500),
      Like: Math.floor(Math.random() * 100)
    },
    {
      _id: "uniqueId9",
      VideoID: "yza567",
      Title: "Video 9",
      Url: "https://picsum.photos/200/300?random=9",
      Store: "Store 9",
      Category: "upcoming",
      Viewer: Math.floor(Math.random() * 100),
      Like: Math.floor(Math.random() * 100)
    },
    {
      _id: "uniqueId10",
      VideoID: "bcd890",
      Title: "Video 10",
      Url: "https://picsum.photos/200/300?random=10",
      Store: "Store 10",
      Category: "populer",
      Viewer: Math.floor(Math.random() * 1000),
      Like: Math.floor(Math.random() * 100)
    },
  ];

  return (
    <main className="container">
      <section className="mt-4 mb-8 flex flex-wrap gap-4 lg:gap-3 xl:gap-4">
        {
          !searchParams.get("category") &&
          videos.map(video => (
            <Card
              key={video._id}
              videoID={video.VideoID}
              title={video.Title}
              thumbnailUrl={video.Url}
              store={video.Store}
              category={video.Category}
              viewer={video.Viewer}
            />
          ))
        }
        {
          searchParams.get("category") &&
          videos
          .filter(video => video.Category === searchParams.get("category"))
          .map(video => (
            <Card
              key={video._id}
              videoID={video.VideoID}
              title={video.Title}
              thumbnailUrl={video.Url}
              store={video.Store}
              category={video.Category}
              viewer={video.Viewer}
            />
          ))
        }
      </section>
    </main>
  )
}