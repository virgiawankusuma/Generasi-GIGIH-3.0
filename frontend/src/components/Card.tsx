/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';

import type { IVideoCardProps } from '../types/videoProps';

export default function Card({ videoID, title, thumbnailUrl, store, category, views }: IVideoCardProps) {
  const defaultThumb = '/img/default.png';
  return (
    <Link 
      className="w-[calc((100%/2)-0.5rem)] bg-primary sm:w-[calc((100%/3)-0.7rem)] md:w-[calc((100%/4)-0.8rem)] lg:w-[calc((100%/5)-0.6rem)] xl:w-[calc((100%/6)-0.85rem)] relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:scale-[102%] group transition-all duration-300 ease-in-out"
      to={`/videos/${videoID}`}
    >
      <img 
        src={thumbnailUrl || defaultThumb} 
        alt={title}
        className="w-full object-cover object-center"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300 ease-in-out flex flex-col justify-between p-2 md:p-3">
        <div className="flex justify-between">
          <p className="text-white text-sm font-semibold bg-accent/50 px-2 py-1 rounded capitalize">{category}</p>
          <p className="text-white text-sm font-semibold bg-dark/30 p-1 rounded flex items-center">
            <FaEye className="text-base mr-1" />{views}
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-white text-lg font-semibold">{title}</h3>
          <p className="text-white text-sm">{store}</p>
        </div>
      </div>
    </Link>
  );
}