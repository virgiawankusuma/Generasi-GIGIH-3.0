import { useEffect, useState } from 'react';

import getVideoByID from '../helpers/getVideoByID';
import getProductByVideoID from '../helpers/getProductByVideoID';
import getCommentByVideoID from '../helpers/getCommentByVideoID';
import submitComment from '../helpers/submitComment';

import NavDetail from './NavDetail';
import VideoDetailPlay from './VideoDetailPlay';
import VideoDetailComments from './VideoDetailComments';

import { IVideoProps } from '../types/videoProps';
import { IProductProps } from '../types/productProps';
import { ICommentProps } from '../types/commentProps';

export default function VideoDetail({ videoId }: { videoId: string | undefined }) {
  const [video, setVideo] = useState<IVideoProps>();
  const [products, setProducts] = useState<IProductProps[]>([]);
  const [comments, setComments] = useState<ICommentProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    async function fetchData() {
      const response = await getVideoByID(videoId!);
      setVideo(response);
    }

    fetchData();
  }, [videoId]);

  useEffect(() => {
    async function fetchData() {
      const response = await getProductByVideoID(videoId!);
      setProducts(response);
    }

    fetchData();
  }, [videoId]);

  useEffect(() => {
    async function fetchData() {
      const response = await getCommentByVideoID(videoId!);
      setComments(response);
    }

    fetchData();
  }, [videoId]);

  async function onAddCommentEventHandler({ username, comment }: { username: string, comment: string }) {
    try {
      await submitComment(username, comment, videoId!);
      const newComment = {
        _id: Math.random().toString(),
        Username: username,
        Comment: comment,
        Timestamp: new Date().toISOString(),
        VideoID: videoId!
      };
      setComments([...comments, newComment]);
    } catch (error) {
      setError('Error submitting comment');
    }
  }

  return (
    <>
      {error && <p>{error}</p>}
      <NavDetail 
        title={video?.Title}
        store={video?.Store}
      />

      <VideoDetailPlay
        video={video}
        products={products}
      />
      <VideoDetailComments
        comments={comments}
        onAddComment={onAddCommentEventHandler}
      />
    </>
  );
}