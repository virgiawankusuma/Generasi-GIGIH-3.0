import { FaSearch } from 'react-icons/fa';

export default function SearchBar() {
  return(
    <form 
      className="relative"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="absolute top-1/2 left-3 transform -translate-y-1/2">
        <FaSearch />
      </div>
      <input
        type="text"
        placeholder="Search videos..."
        className="bg-white/10 text-white rounded-full pl-9 pr-4 py-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-white/40 transition duration-300 ease-in-out max-w-[150px] sm:max-w-[200px] md:max-w-full truncate"
        title="Search videos..."
      />
    </form>
  );
}