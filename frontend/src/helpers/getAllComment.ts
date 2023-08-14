/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';

export default function getAllComment() {
  
  const comments = [
    {
      _id: "commentId1",
      Username: "user123",
      Comment: "This is a great video! Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      Timestamp: "2021-01-01T00:00:00.000Z",
      VideoID: "abc123"
    },
    {
      _id: "commentId2",
      Username: "jane_doe",
      Comment: "Awesome content! Keep it up.",
      Timestamp: "2021-02-15T09:30:00.000Z",
      VideoID: "abc123"
    },
    {
      _id: "commentId3",
      Username: "video_fanatic",
      Comment: "I learned a lot from this video.",
      Timestamp: "2021-03-20T14:15:00.000Z",
      VideoID: "def456"
    },
    {
      _id: "commentId4",
      Username: "commentator",
      Comment: "Nice job! Looking forward to more videos.",
      Timestamp: "2021-04-05T21:10:00.000Z",
      VideoID: "def456"
    },
    {
      _id: "commentId5",
      Username: "viewer123",
      Comment: "Thanks for sharing this knowledge.",
      Timestamp: "2021-05-12T12:45:00.000Z",
      VideoID: "ghi789"
    },
    {
      _id: "commentId6",
      Username: "video_reviewer",
      Comment: "I found this video quite insightful.",
      Timestamp: "2021-06-30T16:20:00.000Z",
      VideoID: "jkl012"
    },
    {
      _id: "commentId7",
      Username: "curious_mind",
      Comment: "Can you explain more about the last section?",
      Timestamp: "2021-07-18T08:00:00.000Z",
      VideoID: "mno345"
    },
    {
      _id: "commentId8",
      Username: "learner101",
      Comment: "I'm new to this topic and found your video very helpful.",
      Timestamp: "2021-08-05T14:30:00.000Z",
      VideoID: "mnop345"
    },
    {
      _id: "commentId9",
      Username: "knowledge_seeker",
      Comment: "The way you explained the concepts is commendable.",
      Timestamp: "2021-09-22T10:15:00.000Z",
      VideoID: "ghi789"
    },
    {
      _id: "commentId10",
      Username: "inquisitive_user",
      Comment: "I have a question about the third point. Can you elaborate?",
      Timestamp: "2021-10-10T17:45:00.000Z",
      VideoID: "ghi789"
    },
    {
      _id: "commentId11",
      Username: "curious_mind",
      Comment: "I'm curious about the application of these concepts in real life.",
      Timestamp: "2021-11-05T09:00:00.000Z",
      VideoID: "jkl012"
    },
    {
      _id: "commentId12",
      Username: "learner101",
      Comment: "Is there a recommended prerequisite for watching this video?",
      Timestamp: "2021-12-20T14:00:00.000Z",
      VideoID: "mno345"
    },
    {
      _id: "commentId13",
      Username: "explorer",
      Comment: "I love how you simplified complex ideas.",
      Timestamp: "2022-01-10T11:30:00.000Z",
      VideoID: "mno345"
    },
    {
      _id: "commentId14",
      Username: "avid_watcher",
      Comment: "Your videos have greatly improved my understanding.",
      Timestamp: "2022-02-18T15:20:00.000Z",
      VideoID: "def456"
    },
    {
      _id: "commentId15",
      Username: "questioner",
      Comment: "I have a question about the first topic you covered.",
      Timestamp: "2022-03-05T18:10:00.000Z",
      VideoID: "pqr678"
    },
    {
      _id: "commentId16",
      Username: "interested_viewer",
      Comment: "I'm always looking forward to your new videos.",
      Timestamp: "2022-04-22T09:45:00.000Z",
      VideoID: "pqr678"
    },
    {
      _id: "commentId17",
      Username: "learner102",
      Comment: "Your explanations are clear and concise.",
      Timestamp: "2022-05-15T14:30:00.000Z",
      VideoID: "pqr678"
    },
    {
      _id: "commentId18",
      Username: "enthusiast",
      Comment: "I appreciate your dedication to quality content.",
      Timestamp: "2022-06-08T12:15:00.000Z",
      VideoID: "stu901"
    },
    {
      _id: "commentId19",
      Username: "video_learner",
      Comment: "This video complements what I've learned elsewhere.",
      Timestamp: "2022-07-25T16:00:00.000Z",
      VideoID: "stu901"
    },
    {
      _id: "commentId20",
      Username: "curious_soul",
      Comment: "Could you recommend any related resources?",
      Timestamp: "2022-08-18T20:45:00.000Z",
      VideoID: "stu901"
    },
    {
      _id: "commentId21",
      Username: "questioning_mind",
      Comment: "I have a question about the advanced section.",
      Timestamp: "2022-09-10T08:30:00.000Z",
      VideoID: "stu901"
    },
    {
      _id: "commentId22",
      Username: "inquisitive_viewer",
      Comment: "Your videos are a valuable learning tool.",
      Timestamp: "2022-10-05T11:15:00.000Z",
      VideoID: "vwx234"
    },
    {
      _id: "commentId23",
      Username: "learner103",
      Comment: "I've recommended your channel to my peers.",
      Timestamp: "2022-11-15T13:00:00.000Z",
      VideoID: "vwx234"
    },
    {
      _id: "commentId24",
      Username: "feedback_giver",
      Comment: "Your videos are well-structured and engaging.",
      Timestamp: "2022-12-10T17:30:00.000Z",
      VideoID: "yza567"
    },
    {
      _id: "commentId25",
      Username: "explorer2",
      Comment: "I'm excited to explore this topic further.",
      Timestamp: "2023-01-20T09:45:00.000Z",
      VideoID: "yza567"
    },
    {
      _id: "commentId26",
      Username: "knowledge_enthusiast",
      Comment: "Your videos have broadened my horizons.",
      Timestamp: "2023-02-15T14:00:00.000Z",
      VideoID: "yzb567"
    },
    {
      _id: "commentId27",
      Username: "viewer124",
      Comment: "I appreciate the time you put into explaining complex concepts.",
      Timestamp: "2023-03-10T10:15:00.000Z",
      VideoID: "bcd890"
    },
    {
      _id: "commentId28",
      Username: "question_asker",
      Comment: "I have a question regarding the second topic.",
      Timestamp: "2023-04-22T12:30:00.000Z",
      VideoID: "bcd890"
    },
    {
      _id: "commentId29",
      Username: "video_addict",
      Comment: "I binge-watched all your videos over the weekend!",
      Timestamp: "2023-05-18T16:45:00.000Z",
      VideoID: "bcd890"
    },
    {
      _id: "commentId30",
      Username: "learner104",
      Comment: "Your videos have ignited my passion for learning.",
      Timestamp: "2023-06-05T18:00:00.000Z",
      VideoID: "bcd890"
    },
  ];

  const [data, ] = useState(comments);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }
  , []);

  return { data, loading };
}