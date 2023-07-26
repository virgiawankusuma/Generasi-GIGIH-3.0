import { ISongProps } from '@/types/songProps';
import SongItem from './SongItem';

export default function SongMostPlayed({playlist, setPlaylist}: {playlist: ISongProps[], setPlaylist: any}) {

  const mostPlayedSongs = [
    {
      id: 10,
      title: "Awan",
      artists: ["Pure Saturday", "Rub of Rub"],
      album: "Our Sincere Desire"
    },
    {
      id: 11,
      title: "Rimpang",
      artists: ["Efek Rumah Kaca"],
      album: "Rimpang"
    },
    {
      id: 12,
      title: "Fun Kaya Fun",
      artists: ["Efek Rumah Kaca", "Suraa"],
      album: "Rimpang"
    },
    {
      id: 13,
      title: "Pathetic Waltz",
      artists: ["Pure Saturday", "Lamebrain"],
      album: "Our Sincere Desire"
    },
    {
      id: 14,
      title: "Brown Study",
      artists: ["Littlefingers", "Shoemaker"],
      album: "Brown Study"
    },
    {
      id: 15,
      title: "Lepas",
      artists: ["Rub of Rub"],
      album: "Ruang Waktu"
    },
    {
      id: 16,
      title: "Kamar Gelap",
      artists: ["Efek Rumah Kaca"],
      album: "Kamar Gelap"
    },
    {
      id: 17,
      title: "Sebelah Mata",
      artists: ["Efek Rumah Kaca"],
      album: "Kamar Gelap"
    },
    {
      id: 18,
      title: "Kau dan Aku Menuju Ruang Hampa",
      artists: ["Efek Rumah Kaca"],
      album: "Kamar Gelap"
    }
  ];
      
  return(
    <section className="flex flex-wrap justify-start gap-y-6 gap-x-3 md:gap-6 xl:gap-5">
      {
        mostPlayedSongs.map((song, index) => (
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