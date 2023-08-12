import { useSearchParams } from 'react-router-dom';

export default function Home() {
  const [searchParams] = useSearchParams('category');

  return (
    <div className="page">
      <h1>Home</h1>
      <p>Home page</p>
      <p>Category: {searchParams.get('category')}</p>
    </div>
  )
}