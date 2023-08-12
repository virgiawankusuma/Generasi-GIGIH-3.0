import { useSearchParams } from 'react-router-dom';

export default function Home() {
  const [searchParams] = useSearchParams('category');

  return (
    <main className="container">
      <p>Category: {searchParams.get('category')}</p>
    </main>
  )
}