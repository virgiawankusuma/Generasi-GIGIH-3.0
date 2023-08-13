/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';

export default function getAllProduct() {

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
      Store: "Store 1",
      Price: 29.99,
      VideoID: "abc123"
    },
    {
      _id: "uniqueId3",
      ProductID: "p3",
      Link: "product/3",
      Title: "Product 3",
      Store: "Store 2",
      Price: 14.99,
      VideoID: "def456"
    },
    {
      _id: "uniqueId4",
      ProductID: "p4",
      Link: "product/4",
      Title: "Product 4",
      Store: "Store 3",
      Price: 24.99,
      VideoID: "ghi789"
    },
    {
      _id: "uniqueId5",
      ProductID: "p5",
      Link: "product/5",
      Title: "Product 5",
      Store: "Store 3",
      Price: 9.99,
      VideoID: "ghi789"
    },
    {
      _id: "uniqueId6",
      ProductID: "p6",
      Link: "product/6",
      Title: "Product 6",
      Store: "Store 4",
      Price: 19.99,
      VideoID: "jkl012"
    },
    {
      _id: "uniqueId7",
      ProductID: "p7",
      Link: "product/7",
      Title: "Product 7",
      Store: "Store 4",
      Price: 29.99,
      VideoID: "jkl012"
    },
    {
      _id: "uniqueId8",
      ProductID: "p8",
      Link: "product/8",
      Title: "Product 8",
      Store: "Store 5",
      Price: 14.99,
      VideoID: "mno345"
    },
    {
      _id: "uniqueId9",
      ProductID: "p9",
      Link: "product/9",
      Title: "Product 9",
      Store: "Store 5",
      Price: 24.99,
      VideoID: "mno345"
    },
    {
      _id: "uniqueId10",
      ProductID: "p10",
      Link: "product/10",
      Title: "Product 10",
      Store: "Store 6",
      Price: 39.99,
      VideoID: "pqr678"
    },
    {
      _id: "uniqueId11",
      ProductID: "p11",
      Link: "product/11",
      Title: "Product 11",
      Store: "Store 6",
      Price: 49.99,
      VideoID: "pqr678"
    },
    {
      _id: "uniqueId12",
      ProductID: "p12",
      Link: "product/12",
      Title: "Product 12",
      Store: "Store 7",
      Price: 19.99,
      VideoID: "stu901"
    },
    {
      _id: "uniqueId13",
      ProductID: "p13",
      Link: "product/13",
      Title: "Product 13",
      Store: "Store 7",
      Price: 29.99,
      VideoID: "stu901"
    },
    {
      _id: "uniqueId14",
      ProductID: "p14",
      Link: "product/14",
      Title: "Product 14",
      Store: "Store 8",
      Price: 14.99,
      VideoID: "vwx234"
    },
    {
      _id: "uniqueId15",
      ProductID: "p15",
      Link: "product/15",
      Title: "Product 15",
      Store: "Store 9",
      Price: 24.99,
      VideoID: "yza567"
    },
    {
      _id: "uniqueId16",
      ProductID: "p16",
      Link: "product/16",
      Title: "Product 16",
      Store: "Store 9",
      Price: 9.99,
      VideoID: "yza567"
    },
    {
      _id: "uniqueId17",
      ProductID: "p17",
      Link: "product/17",
      Title: "Product 17",
      Store: "Store 10",
      Price: 19.99,
      VideoID: "bcd890"
    },
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