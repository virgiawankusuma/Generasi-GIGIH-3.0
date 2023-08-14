/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';

export default function getAllVideo() {
  const videos = [
    {
      _id: "uniqueId1",
      VideoID: "abc123",
      Title: "Elegant Desk Chair Unboxing",
      Url: "https://picsum.photos/200/300?random=1",
      Store: "Furniture Haven",
      Category: "popular",
      Views: 2500,
      Likes: 128
    },
    {
      _id: "uniqueId2",
      VideoID: "def456",
      Title: "Cooking with Stainless Steel Toaster",
      Url: "https://picsum.photos/200/300?random=2",
      Store: "Kitchen Essentials",
      Category: "latest",
      Views: 1200,
      Likes: 76
    },
    {
      _id: "uniqueId3",
      VideoID: "ghi789",
      Title: "Sneak Peek of Cozy Throw Blanket Collection",
      Url: "https://picsum.photos/200/300?random=3",
      Store: "Warm & Comfy",
      Category: "upcoming",
      Views: 350,
      Likes: 42
    },
    {
      _id: "uniqueId4",
      VideoID: "jkl012",
      Title: "Wireless Earbuds Review and Sound Test",
      Url: "https://picsum.photos/200/300?random=4",
      Store: "Audio Fusion",
      Category: "popular",
      Views: 3800,
      Likes: 215
    },
    {
      _id: "uniqueId5",
      VideoID: "mno345",
      Title: "Leather Wallet Craftsmanship and Features",
      Url: "https://picsum.photos/200/300?random=5",
      Store: "Leathercraft Co.",
      Category: "latest",
      Views: 900,
      Likes: 63
    },
    {
      _id: "uniqueId6",
      VideoID: "pqr678",
      Title: "Upcoming Yoga and Fitness Tips",
      Url: "https://picsum.photos/200/300?random=6",
      Store: "Mindful Movement",
      Category: "upcoming",
      Views: 50,
      Likes: 5
    },
    {
      _id: "uniqueId7",
      VideoID: "stu901",
      Title: "Home Decor Ideas with Sculptural Vase",
      Url: "https://picsum.photos/200/300?random=7",
      Store: "Artistic Home",
      Category: "popular",
      Views: 1800,
      Likes: 98
    },
    {
      _id: "uniqueId8",
      VideoID: "vwx234",
      Title: "Behind the Scenes of Professional Makeup Brushes",
      Url: "https://picsum.photos/200/300?random=8",
      Store: "Glamour Essentials",
      Category: "latest",
      Views: 600,
      Likes: 37
    },
    {
      _id: "uniqueId9",
      VideoID: "yza567",
      Title: "Exploring Gourmet Coffee Flavors",
      Url: "https://picsum.photos/200/300?random=9",
      Store: "Bean Bliss",
      Category: "upcoming",
      Views: 90,
      Likes: 12
    },
    {
      _id: "uniqueId10",
      VideoID: "bcd890",
      Title: "Latest Wireless Phone Charger Features",
      Url: "https://picsum.photos/200/300?random=10",
      Store: "Tech Innovations",
      Category: "popular",
      Views: 3200,
      Likes: 172
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