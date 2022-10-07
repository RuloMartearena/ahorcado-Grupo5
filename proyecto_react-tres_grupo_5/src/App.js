import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Recordatorios from './components/Recordatorio';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="Recordatorios" element={<Recordatorios />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}