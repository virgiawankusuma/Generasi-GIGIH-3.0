import { useEffect, useState } from 'react';

import { IProductProps } from '../types/productProps';
import { IVideoProps } from '../types/videoProps';
import { FaEye, FaThumbsUp } from 'react-icons/fa';

import { Link } from 'react-router-dom';

interface IVideoDetailPlayProps {
  video: IVideoProps | undefined;
  products: IProductProps[];
}

export default function VideoDetailPlay({ video, products }: IVideoDetailPlayProps) {
  const [videoUrl, setVideoUrl] = useState(video?.Url);
  
  useEffect(() => {
    setVideoUrl(`${video?.Url}?controls=0&autoplay=1&showinfo=0&frameborder=0`);
  }, [video?.Url]);

  useEffect(() => {
    if (video) {
      setVideoUrl(`${video.Url}?controls=0&autoplay=1&showinfo=0&frameborder=0`);
    }
  }, [video]);

  return(
    <section className="container xl:px-4">
      <div className="relative rounded-xl overflow-hidden shadow-lg mb-5 bg-black">
        <span className="absolute top-4 left-4 text-white text-md sm:text-sm font-semibold bg-dark/30 p-1 rounded flex items-center">
          <FaEye className="text-lg sm:text-base mr-1" />{video?.Views}
        </span>
        <button 
          className="absolute top-4 right-4 text-white text-base sm:text-sm font-semibold p-1 rounded flex flex-col justify-center gap-y-1 group drop-shadow"
          onClick={() => { alert("Like") }}
        >
          <FaThumbsUp 
            className="text-3xl sm:text-2xl mr-1 group-hover:text-accent transition-all duration-300 ease-in-out"
          />
          {video?.Views}
        </button>
        <iframe
          className="h-full w-full object-cover object-center m-auto min-h-screen sm:min-h-[90vh] md:min-h-[80vh]"
          src={videoUrl}
          title={video?.Title}
          allowFullScreen
        />
        <div className="absolute bottom-0 left-0 w-full h-1/4 sm:h-1/3 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300 ease-in-out flex justify-between p-2 md:p-3">
          <div className="flex justify-center  overflow-x-scroll hide-scroll-bar scroll-smooth gap-x-3 items-center">
            {
              products.map((product, index) => (
                <Link 
                  key={product._id}
                  to={product.Link}
                  className="relative bg-white rounded-lg whitespace-nowrap transition-all ease-in-out duration-200 text-base sm:text-lg lg:text-xl xl:text-xl block text-center justify-center items-center hover:scale-[99%] hover:shadow-lg w-20"
                  title={product.Title}
                >
                  <span className="absolute text-white bg-black/30 rounded text-xs sm:text-sm top-1 left-1 font-semibold py-[2px] px-[6px]">{index + 1}</span>
                  <img 
                    src={product.Img}
                    alt={product.Title}
                    className="w-full object-cover object-center rounded-tl-lg rounded-tr-lg aspect-square "
                  />
                  <div className="px-3">
                    <span className="text-black text-xs sm:text-sm font-semibold">$ {product.Price}</span>
                    <p className="text-black text-xs font-semibold mb-2 max-w-[56px] truncate">{product.Title}</p>
                  </div>
                </Link>
              ))
            }

          </div>
        </div>
      </div>
    </section>
  );
}