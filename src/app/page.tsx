"use client";

import { useState } from 'react';

import SongList from '@/components/Songs/SongList';
import SongMostPlayed from '@/components/Songs/SongMostPlayed';
import Playlist from '@/components/Songs/Playlist';

export default function Home() {
  const [playlist, setPlaylist] = useState([]);
  
  return (
   <main className="mt-8 container xl:px-4">
    <h1 className="text-3xl font-bold mb-4 md:mb-6">All Time Greatest Songs</h1>
    <SongList
      playlist={playlist}
      setPlaylist={setPlaylist}
    />

    <div className="py-4 md:py-8"/>

    <h1 className="text-3xl font-bold">Most Played Songs</h1>
    <p className="mb-4 md:mb-6">Top track this month</p>
    <SongMostPlayed
      playlist={playlist}
      setPlaylist={setPlaylist}
    />

    <div className="py-4 md:py-8"/>

    {
      playlist.length > 0 && (
        <>
          <h1 className="text-3xl font-bold mb-4 md:mb-6">My Playlist</h1>
          <Playlist
            playlist={playlist}
          />
        </>
      )
    }
   </main> 
  )
}
