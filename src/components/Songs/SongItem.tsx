import Image from 'next/image';

interface SongItemProps {
  song: {
    title: string;
    artists: string[];
    album: string;
  }
}

export default function SongItem({ song }: SongItemProps) {
  return(
    <div 
      className="w-full sm:w-[calc(100%/2-10px)] lg:w-[calc(100%/3-14px)] 2xl:w-[calc(100%/4-14px)] 3xl:w-[calc(100%/5-14px)] flex items-center gap-x-2 hover:bg-light/10 transition duration-300 ease-in-out rounded cursor-pointer" 
      key={song.title} 
      tabIndex={0} 
      role="button" 
      aria-label={`Song: ${song.title}`} 
      title={`Song: ${song.title}`}
    >
      <Image
        src={`https://picsum.photos/200?random=${Math.floor(Math.random() * 1084)}`}
        alt={song.title}
        width={100}
        height={100}
        className="aspect-square object-cover"
      />
      <div className="flex flex-col gap-y-1">
        <h2 className="text-xl font-bold">{song.title}</h2>
        <p className="text-lg">{song.artists.join(', ')}</p>
        <p className="text-base text-light/70">{song.album}</p>
      </div>
    </div>
  );
}