import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Desarrolladores from './components/Desarrolladores';
import Home from './components/Home.js';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Desarrolladores" element={<Desarrolladores />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}