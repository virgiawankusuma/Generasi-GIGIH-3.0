"use client";

import { ISongProps } from '@/types/songProps';
import Image from 'next/image';

interface SongItemProps {
  song: ISongProps;
  playlist: ISongProps[];
  setPlaylist: any;
}

export default function SongItem({ song, playlist, setPlaylist }: SongItemProps) {
  function handleAddPlaylist(song: ISongProps, playlist: ISongProps[], setPlaylist: any) {
    const songExists = playlist.some((item) => item.id === song.id);

    if(!songExists) {
      setPlaylist([...playlist, song]);
    } else {
      const newPlaylist = playlist.filter((item) => item.id !== song.id);
      setPlaylist(newPlaylist);
    }
  }

  return(
    <label
      htmlFor={`song-${song.id}`}
      className="relative w-full sm:w-[calc(100%/2-10px)] md:w-[calc(100%/3-14px)] xl:w-[calc(100%/4-14px)] 3xl:w-[calc(100%/5-14px)] flex items-center gap-x-2 hover:bg-light/10 transition duration-300 ease-in-out rounded cursor-pointer" 
      key={song.title} 
      tabIndex={0} 
      role="button" 
      aria-label={`Song: ${song.title}`} 
      title={`Song: ${song.title}`}
    >
      <Image
        src={`https://picsum.photos/200?random=${song.id}`}
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
      <input 
        type="checkbox"
        className="absolute top-5 right-5"
        id={`song-${song.id}`}
        onChange={() => handleAddPlaylist(song, playlist, setPlaylist)}
      />

    </label>
  );
}