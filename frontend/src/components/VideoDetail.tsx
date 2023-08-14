import getProductByVideoID from '../helpers/getProductByVideoID';
import getVideo from '../helpers/getVideo';

import VideoDetailNav from './VideoDetailNav';
import VideoDetailPlay from './VideoDetailPlay';
import VideoDetailComments from './VideoDetailComments';
import getCommentByVideoID from '../helpers/getCommentByVideoID';

export default function VideoDetail({ videoId }: { videoId: string | undefined }) {
  const video = getVideo(videoId);
  const products = getProductByVideoID(videoId);
  const comments = getCommentByVideoID(videoId);

  return (
    <>
      <VideoDetailNav 
        title={video?.Title}
        store={video?.Store}
      />

      <VideoDetailPlay
        video={video}
        products={products}
      />
      <VideoDetailComments
        comments={comments}
      />
    </>
  );
}