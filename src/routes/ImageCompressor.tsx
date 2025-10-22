import { useState } from 'react';

export default function ImageCompressor() {
 const [image, setImage] = useState(null);
 const [ext, setExt] = useState(null);

 function handleFileChange(e) {
  const file = e.target.files[0];
  setImage(file);
  setExt(file.type);
 }

 function compressImage() {
  if (!image) return;
  const img = new Image();
  img.src = URL.createObjectURL(image);
  img.onload = () => {
   const canvas = document.createElement('canvas');
   const ctx = canvas.getContext('2d');
   canvas.width = img.width;
   canvas.height = img.height;
   ctx?.drawImage(img, 0, 0);
   canvas.toBlob(
    (blob) => {
     if (blob) {
      const compressedFile = new File([blob], image.name, { type: 'image/jpeg' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(compressedFile);
      link.download = compressedFile.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
     }
    },
    ext,
    0.3,
   );
  };
 }

 return (
  <div>
   <h1>Image Compressor</h1>
   <input type="file" accept="image/*" onChange={handleFileChange} />
   <button onClick={compressImage}>Compress and Download</button>
  </div>
 );
}
