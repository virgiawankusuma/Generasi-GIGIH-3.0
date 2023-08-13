import getAllVideo from './getAllVideo';

export default function getVideo(videoID: string | undefined) {
  const videos = getAllVideo();
  const video = videos.data.find((video) => video.VideoID === videoID);
  return video;
}