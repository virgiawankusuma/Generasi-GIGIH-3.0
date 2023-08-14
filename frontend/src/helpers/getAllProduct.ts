/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';

export default function getAllProduct() {

  const products = [
    {
      "_id": "uniqueId1",
      "ProductID": "p1",
      "Link": "/product/1",
      "Title": "Elegant Desk Chair",
      "Img": "https://picsum.photos/100/100?random=1",
      "Store": "Furniture Haven",
      "Price": 149.99,
      "VideoID": "abc123"
    },
    {
      "_id": "uniqueId2",
      "ProductID": "p2",
      "Link": "/product/2",
      "Title": "Stainless Steel Toaster",
      "Img": "https://picsum.photos/100/100?random=2",
      "Store": "Kitchen Essentials",
      "Price": 49.99,
      "VideoID": "abc123"
    },
    {
      "_id": "uniqueId3",
      "ProductID": "p3",
      "Link": "/product/3",
      "Title": "Cozy Throw Blanket",
      "Img": "https://picsum.photos/100/100?random=3",
      "Store": "Warm & Comfy",
      "Price": 29.99,
      "VideoID": "def456"
    },
    {
      "_id": "uniqueId4",
      "ProductID": "p4",
      "Link": "/product/4",
      "Title": "Wireless Earbuds",
      "Img": "https://picsum.photos/100/100?random=4",
      "Store": "Audio Fusion",
      "Price": 79.99,
      "VideoID": "ghi789"
    },
    {
      "_id": "uniqueId5",
      "ProductID": "p5",
      "Link": "/product/5",
      "Title": "Classic Leather Wallet",
      "Img": "https://picsum.photos/100/100?random=5",
      "Store": "Leathercraft Co.",
      "Price": 39.99,
      "VideoID": "ghi789"
    },
    {
      "_id": "uniqueId6",
      "ProductID": "p6",
      "Link": "/product/6",
      "Title": "Sculptural Vase",
      "Img": "https://picsum.photos/100/100?random=6",
      "Store": "Artistic Home",
      "Price": 24.99,
      "VideoID": "jkl012"
    },
    {
      "_id": "uniqueId7",
      "ProductID": "p7",
      "Link": "/product/7",
      "Title": "Modern Wall Clock",
      "Img": "https://picsum.photos/100/100?random=7",
      "Store": "Timeless Designs",
      "Price": 59.99,
      "VideoID": "jkl012"
    },
    {
      "_id": "uniqueId8",
      "ProductID": "p8",
      "Link": "/product/8",
      "Title": "Organic Tea Sampler",
      "Img": "https://picsum.photos/100/100?random=8",
      "Store": "Tea Delights",
      "Price": 19.99,
      "VideoID": "mno345"
    },
    {
      "_id": "uniqueId9",
      "ProductID": "p9",
      "Link": "/product/9",
      "Title": "Fitness Resistance Bands",
      "Img": "https://picsum.photos/100/100?random=9",
      "Store": "Active Gear",
      "Price": 34.99,
      "VideoID": "mno345"
    },
    {
      "_id": "uniqueId10",
      "ProductID": "p10",
      "Link": "/product/10",
      "Title": "Reusable Water Bottle",
      "Img": "https://picsum.photos/100/100?random=10",
      "Store": "EcoLuxe",
      "Price": 24.99,
      "VideoID": "pqr678"
    },
    {
      "_id": "uniqueId11",
      "ProductID": "p11",
      "Link": "/product/11",
      "Title": "Vintage Leather Journal",
      "Img": "https://picsum.photos/100/100?random=11",
      "Store": "Parchment Treasures",
      "Price": 39.99,
      "VideoID": "pqr678"
    },
    {
      "_id": "uniqueId12",
      "ProductID": "p12",
      "Link": "/product/12",
      "Title": "Aromatherapy Essential Oils Set",
      "Img": "https://picsum.photos/100/100?random=12",
      "Store": "Naturals Aroma",
      "Price": 29.99,
      "VideoID": "stu901"
    },
    {
      "_id": "uniqueId13",
      "ProductID": "p13",
      "Link": "/product/13",
      "Title": "Decorative Throw Pillow",
      "Img": "https://picsum.photos/100/100?random=13",
      "Store": "Home Accents",
      "Price": 19.99,
      "VideoID": "stu901"
    },
    {
      "_id": "uniqueId14",
      "ProductID": "p14",
      "Link": "/product/14",
      "Title": "Professional Makeup Brush Set",
      "Img": "https://picsum.photos/100/100?random=14",
      "Store": "Glamour Essentials",
      "Price": 49.99,
      "VideoID": "vwx234"
    },
    {
      "_id": "uniqueId15",
      "ProductID": "p15",
      "Link": "/product/15",
      "Title": "Gourmet Coffee Sampler",
      "Img": "https://picsum.photos/100/100?random=15",
      "Store": "Bean Bliss",
      "Price": 29.99,
      "VideoID": "yza567"
    },
    {
      "_id": "uniqueId16",
      "ProductID": "p16",
      "Link": "/product/16",
      "Title": "Yoga Mat",
      "Img": "https://picsum.photos/100/100?random=16",
      "Store": "Mindful Movement",
      "Price": 39.99,
      "VideoID": "yza567"
    },
    {
      "_id": "uniqueId17",
      "ProductID": "p17",
      "Link": "/product/17",
      "Title": "Wireless Phone Charger",
      "Img": "https://picsum.photos/100/100?random=17",
      "Store": "Tech Innovations",
      "Price": 24.99,
      "VideoID": "bcd890"
    }
  ];  

  const [data,] = useState(products);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return { data, loading };
}