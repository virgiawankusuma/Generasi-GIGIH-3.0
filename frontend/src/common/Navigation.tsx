import { FaAngleLeft, FaSearch } from 'react-icons/fa';

import { Link, useSearchParams } from 'react-router-dom';

export default function Navigation() {
  const [searchParams] = useSearchParams('category');
  const isActive = (category: string) => {
    if (searchParams.get('category') === category) {
      return 'bg-white/10 text-lg px-4 py-1 flex items-center justify-center rounded-full shadow-lg border bg-accent/10 border-accent text-accent brightness-125 transition duration-300 ease-in-out';
    } else {
      return 'bg-white/10 text-lg px-4 py-1 text-white flex items-center justify-center rounded-full shadow-lg border border-white/50 hover:bg-accent/10 hover:border-accent hover:text-accent hover:brightness-125 transition duration-300 ease-in-out';
    }
  }
  
  return (
    <header className="container xl:px-4">
      <div
        className="flex w-full gap-x-2 justify-between items-center py-3 top-0 right-0 z-50"
      >
        <div className="flex justify-between items-center gap-x-2">
          <Link
            to="/"
            className="bg-white/10 text-2xl text-white flex items-center justify-center w-10 h-10 rounded-full shadow-lg hover:bg-white/40 transition duration-300 ease-in-out"
            title="Back to home"
          >
            <FaAngleLeft />
          </Link>
          <h1 className="text-2xl text-white font-bold capitalize">{searchParams.get('category') ? searchParams.get('category') : "Play (Clone)"}</h1>
        </div>
        <form className="relative">
          <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
            <FaSearch />
          </div>
          <input
            type="text"
            placeholder="Search videos..."
            className="bg-white/10 text-white rounded-full pl-9 pr-4 py-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-white/40 transition duration-300 ease-in-out truncate"
            title="Search videos..."
          />
        </form>
      </div>
      <div className="flex w-full overflow-x-scroll hide-scroll-bar scroll-smooth gap-x-2 items-center">
        <Link
          to="/"
          className={isActive('')}
          title="Semua"
        >
          Semua
        </Link>
        <Link
          to="/?category=populer"
          className={isActive('populer')}
          title="Terbaru"
        >
          Populer
        </Link>
        <Link
          to="/?category=terbaru"
          className={isActive('terbaru')}
          title="Terbaru"
        >
          Terbaru
        </Link>
        <Link
          to="/?category=upcoming"
          className={isActive('upcoming')}
          title="Upcoming"
        >
          Upcoming
        </Link>
      </div>
    </header>
  )
}