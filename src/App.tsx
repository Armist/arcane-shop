import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Brands } from './pages/Brands';
import { Catalog } from './pages/Catalog';
import { Home } from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />}>
            <Route path=":category" element={<Catalog />} />
          </Route>
          <Route path="/brands" element={<Brands />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
