import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/page';
import Videos from './pages/Videos/page';

export default function App() {
  return (
    <>
      <nav>
        <Link to="/" className="nav-item">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="videos">
          <Route path=":VideoId" element={<Videos />} />
        </Route>
      </Routes>
    </>
  )
}