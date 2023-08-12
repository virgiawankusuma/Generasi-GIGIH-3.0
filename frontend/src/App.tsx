import { Routes, Route} from 'react-router-dom';

import Navigation from './common/Navigation';
import Home from './pages/Home/page';
import Videos from './pages/Videos/page';

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="videos">
          <Route path=":VideoId" element={<Videos />} />
        </Route>
      </Routes>
    </>
  )
}