import Image from 'next/image';
import Link from 'next/link';
import { FaAngleLeft, FaSearch } from 'react-icons/fa';

export default function TopBar() {
  return (
    <div
      className="absolute flex gap-x-2 justify-between items-center container px-4 py-2 top-0 right-0 z-50"
    >
      <div className="flex justify-between items-center gap-x-2">
        <Link
          href="/"
          className="bg-light/10 text-2xl text-light flex items-center justify-center w-10 h-10 rounded-full shadow-lg hover:bg-light/40 transition duration-300 ease-in-out"
        >
          <FaAngleLeft />
        </Link>
        <form className="relative">
          <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
            <FaSearch />
          </div>
          <input
            type="text"
            placeholder="What do you want to listen to?"
            className="bg-light/10 text-light rounded-full pl-9 pr-4 py-2 w-56 shadow-lg focus:outline-none focus:ring-2 focus:ring-light/40 transition duration-300 ease-in-out sm:w-64 md:w-72 truncate"
            title="What do you want to listen to?"
          />
        </form>
      </div>

      <button
        className="bg-light/10 flex items-center shadow-lg rounded-full w-10 h-10 overflow-hidden hover:shadow-xl hover:w-auto hover:h-auto group transition duration-300 ease-in-out"
        title="Virgiawan Kusuma"
      >
        <Image
          src="/images/virgiawankusuma.png"
          alt="virgiawan"
          width={40}
          height={40}
          className="aspect-square object-cover rounded-full transition duration-300 ease-in-out"
        />
        {/* limit caracter with elipsis */}
        <span className="pl-1 pr-2 opacity-0 translate-x-[10px] group-hover:opacity-100 group-hover:translate-x-0 transition duration-300 ease-in-out max-w-[120px] overflow-hidden truncate">
          Virgiawan Kusuma
        </span>
      </button>
    </div>
  );
}