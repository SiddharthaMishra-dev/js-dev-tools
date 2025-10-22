import { IconCheck, IconCloudUpload, IconCopy } from '@tabler/icons-react';
import { useRef, useState, useCallback } from 'react';

const ImageToBase64 = () => {
 const imageRef = useRef<HTMLInputElement>(null);
 const [isDragging, setIsDragging] = useState(false);
 const [base64Result, setBase64Result] = useState<string>('');
 const [copySuccess, setCopySuccess] = useState(false);

 const processFile = useCallback((file: File) => {
  if (!file.type.startsWith('image/')) {
   alert('Please select a valid image file');
   return;
  }

  const reader = new FileReader();
  reader.onloadend = () => {
   const result = reader.result as string;
   setBase64Result(result);
   setCopySuccess(false);
  };
  reader.readAsDataURL(file);
 }, []);

 const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
   processFile(file);
  }
 };

 const handleDragOver = (e: React.DragEvent) => {
  e.preventDefault();
  setIsDragging(true);
 };

 const handleDragLeave = (e: React.DragEvent) => {
  e.preventDefault();
  setIsDragging(false);
 };

 const handleDrop = (e: React.DragEvent) => {
  e.preventDefault();
  setIsDragging(false);

  const files = e.dataTransfer.files;
  if (files[0]) {
   processFile(files[0]);
  }
 };

 const copyToClipboard = async () => {
  try {
   await navigator.clipboard.writeText(base64Result);
   setCopySuccess(true);
   setTimeout(() => setCopySuccess(false), 2000);
  } catch (err) {
   console.error('Failed to copy text: ', err);
  }
 };

 return (
  <div className="min-h-screen bg-gradient-to-br from-gray-800 to-slate-900 py-8 px-4 flex flex-col items-center justify-between">
   <div className="w-full max-w-5xl flex-1 flex flex-col items-center justify-center mx-auto">
    <div className="text-center mb-8">
     <h1 className="text-2xl font-bold text-gray-100 mb-2">
      Image to <span className="text-amber-200">Base64</span> Converter
     </h1>
     <p className="text-md text-gray-200">Convert your images to Base64 format effortlessly with drag & drop</p>
    </div>

    <div className="bg-gray-800 rounded-xl shadow-lg p-8 mb-6">
     <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`border-3 border-dashed rounded-lg p-12 text-center transition-all duration-300 ${
       isDragging ? 'border-amber-500 bg-amber-900/20' : 'border-gray-600 hover:border-amber-400 hover:bg-gray-700'
      }`}
     >
      <div className="flex flex-col items-center space-y-4">
       <IconCloudUpload className={`w-16 h-16 ${isDragging ? 'text-amber-500' : 'text-gray-400'} transition-colors`} />
       <div>
        <p className="text-xl font-medium text-gray-100 mb-2">{isDragging ? 'Drop your image here' : 'Drag & drop your image here'}</p>
        <p className="text-gray-400 mb-4">or</p>
        <button
         onClick={() => imageRef.current?.click()}
         className="text-sm px-3 py-2 bg-amber-700 text-amber-100 rounded-lg hover:bg-amber-600 transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
        >
         Choose File
        </button>
       </div>
      </div>
     </div>

     <input type="file" accept="image/*" ref={imageRef} className="hidden" onChange={handleFileChange} />
    </div>

    {base64Result && (
     <div className="bg-gray-800 w-full max-w-4xl rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
       <h3 className="text-xl font-semibold text-gray-100">Base64 Data URI</h3>
       <button
        onClick={copyToClipboard}
        className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
         copySuccess ? 'bg-green-800 text-green-200' : 'bg-amber-700 text-amber-100 hover:bg-amber-600 shadow-md hover:shadow-lg'
        }`}
       >
        {copySuccess ? (
         <span className="flex items-center space-x-2">
          <IconCheck className="h-4 w-4" />
          <span>Copied!</span>
         </span>
        ) : (
         <span className="flex items-center space-x-2">
          <IconCopy className="h-4 w-4" />
          <span>Copy</span>
         </span>
        )}
       </button>
      </div>
      <textarea
       value={base64Result}
       readOnly
       rows={8}
       className="w-full p-4 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-amber-500"
       placeholder="Base64 data will appear here..."
      />
      <p className="text-sm text-gray-400 mt-2">Data size: {new Blob([base64Result]).size.toLocaleString()} bytes</p>
     </div>
    )}

    <div className="text-center mt-2">
     <p className="text-gray-400 text-xs">
      <sup>*</sup>Supports JPG, PNG, GIF, SVG and other image formats
     </p>
    </div>
   </div>

   <div>
    <p className="text-gray-400 text-xs text-center">
     Built for fun by{' '}
     <a
      href="https://sidme.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-amber-200 hover:text-amber-300 transition-colors"
     >
      <i>sidme</i>
     </a>
    </p>
   </div>
  </div>
 );
};

export default ImageToBase64;
