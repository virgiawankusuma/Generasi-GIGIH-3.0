import { useParams } from 'react-router-dom';

export default function Videos() {
  // Use the `useParams` hook to access
  // the dynamic bits of the URL.
  const params = useParams();
  const { VideoId } = params;
  return (
    <>
      <h1>Video</h1>
      <p>VideoId: {VideoId}</p>
    </>
  )
}