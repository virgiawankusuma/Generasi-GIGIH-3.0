import { Link, useSearchParams } from 'react-router-dom';

import SearchBar from './SearchBar';
import NavBrand from './NavBrand';

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
        <NavBrand 
          searchParams={searchParams}
        />
        <SearchBar />
      </div>
      <div className="flex w-full overflow-x-scroll hide-scroll-bar scroll-smooth gap-x-2 items-center">
        <Link
          to="/"
          className={isActive('')}
          title="Semua"
        >
          All
        </Link>
        <Link
          to="/?category=popular"
          className={isActive('popular')}
          title="Popular"
        >
          Popular
        </Link>
        <Link
          to="/?category=latest"
          className={isActive('latest')}
          title="Latest"
        >
          Latest
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