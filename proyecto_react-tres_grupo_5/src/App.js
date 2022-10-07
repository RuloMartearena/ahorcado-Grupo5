import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Recordatorios from './components/Recordatorio';
import Reglas from './components/Reglas';
import Desarrolladores from './components/Desarrolladores';
import Home from './components/Home.js';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="Recordatorios" element={<Recordatorios />} />
          <Route path="/Reglas" element={<Reglas />} />
          <Route path="/Desarrolladores" element={<Desarrolladores />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}