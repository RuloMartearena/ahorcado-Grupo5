import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reglas from './components/Reglas';
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/Reglas" element={<Reglas />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}