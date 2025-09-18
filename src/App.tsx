import { useRef, useState, useCallback } from 'react';
import './App.css';

const App = () => {
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
  <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4 flex flex-col items-center justify-between">
   <div className="max-w-4xl flex-1 flex flex-col items-center justify-center mx-auto">
    <div className="text-center mb-8">
     <h1 className="text-2xl font-bold text-gray-800 mb-2">
      Image to <span className="text-blue-600">Base64</span> Converter
     </h1>
     <p className="text-md text-gray-600">Convert your images to Base64 format effortlessly with drag & drop</p>
    </div>

    <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
     <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`border-3 border-dashed rounded-lg p-12 text-center transition-all duration-300 ${
       isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
      }`}
     >
      <div className="flex flex-col items-center space-y-4">
       <svg
        className={`w-16 h-16 ${isDragging ? 'text-blue-500' : 'text-gray-400'} transition-colors`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
       >
        <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth={2}
         d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
        />
       </svg>
       <div>
        <p className="text-xl font-medium text-gray-700 mb-2">{isDragging ? 'Drop your image here' : 'Drag & drop your image here'}</p>
        <p className="text-gray-500 mb-4">or</p>
        <button
         onClick={() => imageRef.current?.click()}
         className="text-sm px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
        >
         Choose File
        </button>
       </div>
      </div>
     </div>

     <input type="file" accept="image/*" ref={imageRef} className="hidden" onChange={handleFileChange} />
    </div>
    {base64Result && (
     <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
       <h3 className="text-xl font-semibold text-gray-800">Base64 Data URI</h3>
       <button
        onClick={copyToClipboard}
        className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
         copySuccess ? 'bg-green-100 text-green-700' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
        }`}
       >
        {copySuccess ? (
         <span className="flex items-center space-x-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
           <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
           />
          </svg>
          <span>Copied!</span>
         </span>
        ) : (
         <span className="flex items-center space-x-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
           />
          </svg>
          <span>Copy</span>
         </span>
        )}
       </button>
      </div>
      <textarea
       value={base64Result}
       readOnly
       rows={8}
       className="w-full p-4 border border-gray-300 rounded-lg bg-gray-50 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
       placeholder="Base64 data will appear here..."
      />
      <p className="text-sm text-gray-500 mt-2">Data size: {new Blob([base64Result]).size.toLocaleString()} bytes</p>
     </div>
    )}
    <div className="text-center mt-2">
     <p className="text-gray-500 text-xs">
      <sup>*</sup>Supports JPG, PNG, GIF, SVG and other image formats
     </p>
    </div>
   </div>
   <div>
    <p className="text-gray-400 text-xs text-center">
     Built for fun by{' '}
     <a href="https://sidme.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
      <i>sidme</i>
     </a>
    </p>
   </div>
  </div>
 );
};

export default App;
