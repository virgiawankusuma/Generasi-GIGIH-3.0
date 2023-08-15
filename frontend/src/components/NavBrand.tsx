import { FaAngleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function NavBrand({ searchParams }: { searchParams: URLSearchParams }) {
  return(
    <div className="flex justify-between items-center gap-x-2">
      <Link
        to="/"
        className="bg-white/10 text-2xl text-white flex items-center justify-center w-10 h-10 rounded-full shadow-lg hover:bg-white/40 transition duration-300 ease-in-out"
        title="Back to home"
      >
        <FaAngleLeft />
      </Link>
      <h1 
        className="text-lg sm:text-xl md:text-2xl text-white font-bold capitalize max-w-[120px] sm:max-w-[200px] md:max-w-full truncate"
      >
        {
          searchParams.get('category') 
          ? searchParams.get('category') 
          : "Play (Clone)"
        }
      </h1>
    </div>
  )
}