import { FaPlayCircle, FaStoreAlt } from 'react-icons/fa';
import { IProductProps } from '../types/productProps';
import { Link } from 'react-router-dom';

export default function ProductView({ product }: { product: IProductProps | undefined }) {
  return(
    <section className="container xl:px-4 flex justify-center">
      <div 
        className="relative bg-white rounded-lg overflow-hidden whitespace-nowrap transition-all ease-in-out duration-200 text-base sm:text-lg lg:text-xl xl:text-xl flex w-full md:w-3/4 lg:w-1/2"
      >
        <span 
          className="absolute flex gap-x-1 items-center top-2 right-2 bg-accent/20 rounded-sm px-2 py-1 font-medium text-primary text-xs md:text-sm"
        > 
          <FaStoreAlt/>  
          {product?.Store}
        </span>
        <img 
          src={product?.Img}
          alt={product?.Title}
          className="w-full object-cover object-center rounded-tl-lg rounded-tr-lg aspect-square "
        />
        <div className="flex flex-col justify-center p-4 mt-4">
          <h2 className="text-gray-900 font-medium sm:mb-2">{product?.Title}</h2>
          <h3 className="text-gray-900 text-2xl font-bold mb-2 sm:mb-4">${product?.Price}</h3>

          <Link
            to={`/video/${product?.VideoID}`}
            className="bg-accent flex gap-x-1 items-center justify-center text-white rounded-sm px-4 py-2 font-medium text-sm transition-all ease-in-out duration-200 hover:bg-accent/80 text-center"
          >
            <FaPlayCircle />
            Watch Video
          </Link>
        </div>
      </div>
    </section>
  );
}