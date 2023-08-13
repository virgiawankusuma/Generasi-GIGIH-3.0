/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSearchParams } from 'react-router-dom';
import getAllVideo from '../../helpers/getAllVideo';

import Card from '../../components/Card';

export default function Home() {
  const [searchParams] = useSearchParams('category');
  const videos = getAllVideo();

  return (
    <main className="container">
      { videos.loading && <p>Loading...</p> }
      <section className="mt-4 mb-8 flex flex-wrap gap-4 lg:gap-3 xl:gap-4">
        {
          !searchParams.get("category") &&
          videos.data.map(video => (
            <Card
              key={video._id}
              videoID={video.VideoID}
              title={video.Title}
              thumbnailUrl={video.Url}
              store={video.Store}
              category={video.Category}
              views={video.Views}
            />
          ))
        }
        {
          searchParams.get("category") &&
          videos.data
          .filter(video => video.Category === searchParams.get("category"))
          .map(video => (
            <Card
              key={video._id}
              videoID={video.VideoID}
              title={video.Title}
              thumbnailUrl={video.Url}
              store={video.Store}
              category={video.Category}
              views={video.Views}
            />
          ))
        }
      </section>
    </main>
  )
}