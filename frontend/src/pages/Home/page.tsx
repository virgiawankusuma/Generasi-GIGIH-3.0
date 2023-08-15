/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { IVideoProps } from '../../types/videoProps';

import getVideos from '../../helpers/getVideos';

import Card from '../../components/Card';

export default function Home() {
  const [searchParams] = useSearchParams('category');
  const [videos, setVideos] = useState<IVideoProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getVideos();
      setVideos(response);
    }
    
    fetchData();
  }, []);

  return (
    <main className="container min-h-[80vh]">
      <section className="mt-4 mb-8 flex flex-wrap gap-4 lg:gap-3 xl:gap-4">
        {
          !searchParams.get("category") &&
          videos.map(video => (
            <Card
              key={video._id}
              videoID={video.VideoID}
              title={video.Title}
              img={video.Img}
              store={video.Store}
              category={video.Category}
              views={video.Views}
            />
          ))
        }
        {
          searchParams.get("category") &&
          videos.filter(video => video.Category === searchParams.get("category")).map(video => (
            <Card
              key={video._id}
              videoID={video.VideoID}
              title={video.Title}
              img={video.Img}
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