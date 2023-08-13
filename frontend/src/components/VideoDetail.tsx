import getVideo from '../helpers/getVideo';

import VideoDetailNav from './VideoDetailNav';

export default function VideoDetail({ videoId }: { videoId: string | undefined }) {
  const video = getVideo(videoId);
  return (
    <>
      <VideoDetailNav 
        title={video?.Title}
        store={video?.Store}
      />
    </>
  );
}