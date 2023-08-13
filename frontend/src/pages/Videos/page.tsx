import { useParams } from 'react-router-dom';
import VideoDetail from '../../components/VideoDetail';

export default function Videos() {
  const params = useParams();
  const { VideoId } = params;

  return (
    <VideoDetail videoId={VideoId} />
  )
}