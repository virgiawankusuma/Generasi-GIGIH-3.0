/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';

export default function getAllVideo() {
  const videos = [
    {
      _id: "uniqueId1",
      VideoID: "abc123",
      Title: "Video 1",
      Url: "https://picsum.photos/200/300?random=1",
      Store: "Store 1",
      Category: "populer",
      Views: Math.floor(Math.random() * 1000),
      Likes: Math.floor(Math.random() * 100)
    },
    {
      _id: "uniqueId2",
      VideoID: "def456",
      Title: "Video 2",
      Url: "https://picsum.photos/200/300?random=2",
      Store: "Store 2",
      Category: "terbaru",
      Views: Math.floor(Math.random() * 500),
      Likes: Math.floor(Math.random() * 100)
    },
    {
      _id: "uniqueId3",
      VideoID: "ghi789",
      Title: "Video 3",
      Url: "https://picsum.photos/200/300?random=3",
      Store: "Store 3",
      Category: "upcoming",
      Views: Math.floor(Math.random() * 100),
      Likes: Math.floor(Math.random() * 100)
    },
    {
      _id: "uniqueId4",
      VideoID: "jkl012",
      Title: "Video 4",
      Url: "https://picsum.photos/200/300?random=4",
      Store: "Store 4",
      Category: "populer",
      Views: Math.floor(Math.random() * 1000),
      Likes: Math.floor(Math.random() * 100)
    },
    {
      _id: "uniqueId5",
      VideoID: "mno345",
      Title: "Video 5",
      Url: "https://picsum.photos/200/300?random=5",
      Store: "Store 5",
      Category: "terbaru",
      Views: Math.floor(Math.random() * 500),
      Likes: Math.floor(Math.random() * 100)
    },
    {
      _id: "uniqueId6",
      VideoID: "pqr678",
      Title: "Video 6",
      Url: "https://picsum.photos/200/300?random=6",
      Store: "Store 6",
      Category: "upcoming",
      Views: Math.floor(Math.random() * 100),
      Likes: Math.floor(Math.random() * 100)
    },
    {
      _id: "uniqueId7",
      VideoID: "stu901",
      Title: "Video 7",
      Url: "https://picsum.photos/200/300?random=7",
      Store: "Store 7",
      Category: "populer",
      Views: Math.floor(Math.random() * 1000),
      Likes: Math.floor(Math.random() * 100)
    },
    {
      _id: "uniqueId8",
      VideoID: "vwx234",
      Title: "Video 8",
      Url: "https://picsum.photos/200/300?random=8",
      Store: "Store 8",
      Category: "terbaru",
      Views: Math.floor(Math.random() * 500),
      Likes: Math.floor(Math.random() * 100)
    },
    {
      _id: "uniqueId9",
      VideoID: "yza567",
      Title: "Video 9",
      Url: "https://picsum.photos/200/300?random=9",
      Store: "Store 9",
      Category: "upcoming",
      Views: Math.floor(Math.random() * 100),
      Likes: Math.floor(Math.random() * 100)
    },
    {
      _id: "uniqueId10",
      VideoID: "bcd890",
      Title: "Video 10",
      Url: "https://picsum.photos/200/300?random=10",
      Store: "Store 10",
      Category: "populer",
      Views: Math.floor(Math.random() * 1000),
      Likes: Math.floor(Math.random() * 100)
    },
  ];

  const [data,] = useState(videos);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }
  , []);

  return { data, loading };
}