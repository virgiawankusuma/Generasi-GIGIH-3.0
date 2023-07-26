import Link from 'next/link';
import { FaHome, FaStar, FaSearch } from 'react-icons/fa';

export default function SideBar() {
  return (
    <div className="fixed w-1/5 text-2xl rounded-xl m-2 bg-light/5 p-3 min-h-screen">
      <Link 
        href={'/'}
        className="flex items-center gap-x-2 px-3 py-2 mb-3 rounded-xl hover:bg-light/10 transition duration-300 ease-in-out"
      >
        <FaHome />
        <span className="text-base">Home</span>
      </Link>
      <Link 
        href={'/'}
        className="flex items-center gap-x-2 px-3 py-2 mb-3 rounded-xl hover:bg-light/10 transition duration-300 ease-in-out"
      >
        <FaSearch />
        <span className="text-base">Search</span>
      </Link>
      <Link 
        href={'/'}
        className="flex items-center gap-x-2 px-3 py-2 mb-3 rounded-xl hover:bg-light/10 transition duration-300 ease-in-out"
      >
        <FaStar />
        <span className="text-base">Most Played Songs</span>
      </Link>
    </div>
  );
}