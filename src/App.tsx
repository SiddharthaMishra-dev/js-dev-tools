import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';

import ImageToBase64 from './routes/ImageToBase64';
import Home from './routes/Home';
import ImageConverter from './routes/ImageConverter';

export default function App() {
 return (
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/image-to-base64" element={<ImageToBase64 />} />
    <Route path="/image-format-converter" element={<ImageConverter />} />
   </Routes>
  </BrowserRouter>
 );
}
