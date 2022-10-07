import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Desarrolladores from './components/Desarrolladores';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/Desarrolladores" element={<Desarrolladores />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}