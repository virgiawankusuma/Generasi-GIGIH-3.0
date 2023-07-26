import SongList from '@/components/Songs/SongList';

export default function Home() {
  
  return (
   <main className="mt-8 container xl:px-4">
    <h1 className="text-3xl font-bold mb-6 md:mb-8">All Time Greatest Songs</h1>
    <SongList/>
   </main> 
  )
}
