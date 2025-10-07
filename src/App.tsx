import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import ImageToBase64 from './routes/ImageToBase64';
import Home from './routes/Home';

export default function App() {
 return (
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/image-to-base64" element={<ImageToBase64 />} />
   </Routes>
  </BrowserRouter>
 );
}
