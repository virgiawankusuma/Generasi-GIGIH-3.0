import { ISongProps } from '@/types/songProps';
import SongItem from './SongItem';

export default function SongList({ playlist, setPlaylist }: { playlist: ISongProps[], setPlaylist: any }) {
  const songs = [
    {
      id: 0,
      title: "Under Preasure",
      artists: ["Queen", "David Bowie"],
      album: "Hot Space",
    },
    {
      id: 1,
      title: "Hotel California",
      artists: ["Eagles"],
      album: "Hotel California",
    },
    {
      id: 2,
      title: "Imagine",
      artists: ["John Lennon"],
      album: "Imagine",
    },
    {
      id: 3,
      title: "Thriller",
      artists: ["Michael Jackson"],
      album: "Thriller",
    },
    {
      id: 4,
      title: "Hey Jude",
      artists: ["The Beatles"],
      album: "The Beatles (The White Album)",
    },
    {
      id: 5,
      title: "Stairway to Heaven",
      artists: ["Led Zeppelin"],
      album: "Led Zeppelin IV",
    },
    {
      id: 6,
      title: "Bohemian Like You",
      artists: ["The Dandy Warhols"],
      album: "Thirteen Tales from Urban Bohemia",
    },
    {
      id: 7,
      title: "Imagine Dragons",
      artists: ["Radioactive"],
      album: "Night Visions",
    },
    {
      id: 8,
      title: "Smells Like Teen Spirit",
      artists: ["Nirvana"],
      album: "Nevermind",
    },
    {
      id: 9,
      title: "Sweet Child O' Mine",
      artists: ["Guns N' Roses"],
      album: "Appetite for Destruction",
    }
  ];

  return(
    <section className="flex flex-wrap justify-start gap-y-6 gap-x-3 md:gap-6 xl:gap-5">
      {
        songs.map((song, index) => (
          <SongItem 
            key={index} 
            song={song}
            playlist={playlist}
            setPlaylist={setPlaylist}
          />
        ))
      }
    </section>
  );
}