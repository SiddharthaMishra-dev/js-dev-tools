import './App.css';
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import ImageToBase64 from './routes/ImageToBase64';
import ImageConverter from './routes/ImageConverter';
import ImageCompressor from './routes/ImageCompressor';
import ImageCropper from './routes/ImageCropper';
import JsonFormatter from './routes/JsonFormatter';
import Image2Pdf from './routes/Image2Pdf';
import Header from './components/Header';
export default function App() {
 return (
  <BrowserRouter>
   <Header />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/image-to-base64" element={<ImageToBase64 />} />
    <Route path="/image-format-converter" element={<ImageConverter />} />
    <Route path="/image-compressor" element={<ImageCompressor />} />
    <Route path="/image-cropper" element={<ImageCropper />} />
    <Route path="/json-formatter" element={<JsonFormatter />} />
    <Route path="/image-to-pdf" element={<Image2Pdf />} />
   </Routes>
   <Analytics />
  </BrowserRouter>
 );
}
