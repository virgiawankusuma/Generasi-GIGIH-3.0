import { Routes, Route, useLocation } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './pages/Home/page';
import Videos from './pages/Videos/page';
import Product from './pages/Product/page';
import Footer from './components/Footer';

export default function App() {
  const location = useLocation();
  const VideoId = location.pathname.split("/")[2];
  
  return (
    <>
      { !VideoId && <Navigation /> }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="video">
          <Route path=":VideoId" element={<Videos />} />
        </Route>
        <Route path="product">
          <Route path=":ProductId" element={<Product />} />
        </Route>
      </Routes>
      <Footer />
    </>
  )
}