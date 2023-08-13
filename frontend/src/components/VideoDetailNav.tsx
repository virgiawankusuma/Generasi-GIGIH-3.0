import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function VideoDetailNav({ title, store }: { title: string | undefined, store: string | undefined }) {
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
            <FaTimes />
          </Link>
          <h1 className="text-2xl text-white font-bold capitalize">{title}</h1>
        </div>
        <div className="flex gap-x-2 items-center">
          <h2 className="text-lg text-white font-bold capitalize">{store}</h2>
        </div>
      </div>
    </header>
  )
}