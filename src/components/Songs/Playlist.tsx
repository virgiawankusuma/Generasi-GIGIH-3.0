import { ISongProps } from '@/types/songProps';
import Image from 'next/image';

export default function Playlist({ playlist }: { playlist: ISongProps[] }) {
  return(
    <section className="mb-10">
      <table className="w-full lg:w-[80%]">
        <thead>
          <tr className="border-b border-light/20">
            <th className="text-left text-base sm:text-lg lg:text-xl xl:text-xl 2xl:text-2xl 3xl:text-3xl py-2">#</th>
            <th className="text-left text-base sm:text-lg lg:text-xl xl:text-xl 2xl:text-2xl 3xl:text-3xl py-2">Title</th>
            <th className="text-left text-base sm:text-lg lg:text-xl xl:text-xl 2xl:text-2xl 3xl:text-3xl py-2">Artists</th>
            <th className="text-left text-base sm:text-lg lg:text-xl xl:text-xl 2xl:text-2xl 3xl:text-3xl py-2">Album</th>
          </tr>
        </thead>
        <tbody>
          {playlist.map((song, no) => (
            <tr key={song.id} className="border-b border-light/20">
              <td className="text-base sm:text-lg lg:text-xl xl:text-xl 2xl:text-2xl 3xl:text-3xl py-2">{no+1}</td>
              <td className="flex gap-4 text-base sm:text-lg lg:text-xl xl:text-xl 2xl:text-2xl 3xl:text-3xl py-2">
                <Image
                  src={`https://picsum.photos/200?random=${song.id}`}
                  alt={song.title}
                  width={50}
                  height={50}
                  className="aspect-square object-cover"
                />
                {song.title}
              </td>
              <td className="text-base sm:text-lg lg:text-xl xl:text-xl 2xl:text-2xl 3xl:text-3xl py-2">{song.artists.join(', ')}</td>
              <td className="text-base sm:text-lg lg:text-xl xl:text-xl 2xl:text-2xl 3xl:text-3xl py-2">{song.album}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}