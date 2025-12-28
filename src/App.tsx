import './App.css';
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter, Routes, Route } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';

import Home from './routes/Home';
import ImageToBase64 from './routes/ImageToBase64';
import ImageConverter from './routes/ImageConverter';
import ImageCompressor from './routes/ImageCompressor';
import ImageCropper from './routes/ImageCropper';
import JsonFormatter from './routes/JsonFormatter';

export default function App() {
 return (
  <HelmetProvider>
   <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/image-to-base64" element={<ImageToBase64 />} />
     <Route path="/image-format-converter" element={<ImageConverter />} />
     <Route path="/image-compressor" element={<ImageCompressor />} />
     <Route path="/image-cropper" element={<ImageCropper />} />
     <Route path="/json-formatter" element={<JsonFormatter />} />
    </Routes>
   </BrowserRouter>
   <Analytics />
  </HelmetProvider>
 );
}
