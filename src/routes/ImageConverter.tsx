import { useRef, useState, useCallback } from 'react';
import type { ConversionItem } from '../types/ImageTypes';

export default function ImageConverter() {
 const uploadRef = useRef<HTMLInputElement>(null);
 const [selectedFormat, setSelectedFormat] = useState('png');
 const [conversions, setConversions] = useState<ConversionItem[]>([]);
 const [isDragging, setIsDragging] = useState(false);
 const [isConverting, setIsConverting] = useState(false);

 const supportedFormats = [
  { value: 'png', label: 'PNG', mime: 'image/png' },
  { value: 'jpeg', label: 'JPEG', mime: 'image/jpeg' },
  { value: 'webp', label: 'WebP', mime: 'image/webp' },
  { value: 'avif', label: 'AVIF', mime: 'image/avif' },
 ];

 const processFiles = useCallback((files: FileList | File[]) => {
  const fileArray = Array.from(files);
  const validFiles = fileArray.filter((file) => file.type.startsWith('image/'));

  if (validFiles.length === 0) {
   alert('Please select valid image files');
   return;
  }

  const newConversions: ConversionItem[] = validFiles.map((file, index) => ({
   id: `${Date.now()}-${index}`,
   file,
   name: file.name,
   originalFormat: file.type.split('/')[1]?.toUpperCase() || 'Unknown',
   status: 'pending',
  }));

  setConversions(newConversions);
 }, []);

 const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
  const files = event.target.files;
  if (files && files.length > 0) {
   processFiles(files);
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
  if (files.length > 0) {
   processFiles(files);
  }
 };

 const convertImage = async (item: ConversionItem): Promise<void> => {
  return new Promise((resolve, reject) => {
   const img = new Image();
   img.onload = () => {
    try {
     const canvas = document.createElement('canvas');
     canvas.width = img.width;
     canvas.height = img.height;
     const ctx = canvas.getContext('2d');

     if (!ctx) {
      reject(new Error('Failed to get canvas context'));
      return;
     }
     ctx.drawImage(img, 0, 0);
     const targetFormat = supportedFormats.find((f) => f.value === selectedFormat);
     if (!targetFormat) {
      reject(new Error('Unsupported format'));
      return;
     }
     canvas.toBlob(
      (blob) => {
       if (blob) {
        const downloadUrl = URL.createObjectURL(blob);
        setConversions((prev) => prev.map((conv) => (conv.id === item.id ? { ...conv, status: 'completed', downloadUrl } : conv)));
        resolve();
       } else {
        reject(new Error('Failed to convert image'));
       }
      },
      targetFormat.mime,
      0.9,
     );
    } catch (error) {
     reject(error);
    } finally {
     URL.revokeObjectURL(img.src);
    }
   };

   img.onerror = () => {
    reject(new Error('Failed to load image'));
    URL.revokeObjectURL(img.src);
   };

   img.src = URL.createObjectURL(item.file);
  });
 };

 const handleConvertAll = async () => {
  if (conversions.length === 0) return;

  setIsConverting(true);
  setConversions((prev) => prev.map((conv) => ({ ...conv, status: 'converting' as const })));
  for (const item of conversions) {
   try {
    await convertImage(item);
   } catch (error) {
    setConversions((prev) =>
     prev.map((conv) => (conv.id === item.id ? { ...conv, status: 'error', error: (error as Error).message } : conv)),
    );
   }
  }

  setIsConverting(false);
 };

 const downloadFile = (item: ConversionItem) => {
  if (!item.downloadUrl) return;

  const link = document.createElement('a');
  link.href = item.downloadUrl;
  link.download = `${item.name.split('.')[0]}.${selectedFormat}`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
 };

 const clearAll = () => {
  conversions.forEach((item) => {
   if (item.downloadUrl) {
    URL.revokeObjectURL(item.downloadUrl);
   }
  });
  setConversions([]);
  if (uploadRef.current) {
   uploadRef.current.value = '';
  }
 };

 return (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4 flex flex-col items-center justify-between">
   <div className="w-full max-w-5xl flex-1 flex flex-col items-center justify-center mx-auto">
    <div className="text-center mb-8">
     <h1 className="text-2xl font-bold text-gray-800 mb-2">
      Image <span className="text-blue-600">Format</span> Converter
     </h1>
     <p className="text-md text-gray-600">Convert your images between different formats with ease</p>
    </div>
    <div className="bg-white rounded-xl shadow-lg p-8 mb-6 w-full max-w-2xl">
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
        <p className="text-xl font-medium text-gray-700 mb-2">{isDragging ? 'Drop your images here' : 'Drag & drop your images here'}</p>
        <p className="text-gray-500 mb-4">or</p>
        <button
         onClick={() => uploadRef.current?.click()}
         className="text-sm px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
        >
         Choose Files
        </button>
       </div>
      </div>
     </div>

     <input type="file" accept="image/*" ref={uploadRef} className="hidden" multiple onChange={handleFileUpload} />
     {conversions.length > 0 && (
      <div className="mt-6 pt-6 border-t border-gray-200">
       <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
         <label className="text-sm font-medium text-gray-700">Convert to:</label>
         <select
          value={selectedFormat}
          onChange={(e) => setSelectedFormat(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
         >
          {supportedFormats.map((format) => (
           <option key={format.value} value={format.value}>
            {format.label}
           </option>
          ))}
         </select>
        </div>

        <div className="flex space-x-2">
         <button onClick={clearAll} className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200">
          Clear All
         </button>
         <button
          onClick={handleConvertAll}
          disabled={isConverting}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
         >
          {isConverting ? 'Converting...' : 'Convert All'}
         </button>
        </div>
       </div>
      </div>
     )}
    </div>
    {conversions.length > 0 && (
     <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-4xl">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Conversion Results ({conversions.length} files)</h3>

      <div className="space-y-3">
       {conversions.map((item) => (
        <div key={item.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
         <div className="flex-1">
          <div className="flex items-center space-x-3">
           <p className="font-medium text-gray-800 truncate max-w-xs">{item.name}</p>
           <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
            {item.originalFormat} → {selectedFormat.toUpperCase()}
           </span>
          </div>
          {item.error && <p className="text-xs text-red-500 mt-1">{item.error}</p>}
         </div>

         <div className="flex items-center space-x-3">
          {item.status === 'pending' && <span className="text-gray-500 text-sm">Pending</span>}
          {item.status === 'converting' && (
           <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-blue-600 text-sm">Converting...</span>
           </div>
          )}
          {item.status === 'completed' && (
           <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
             <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
             />
            </svg>
            <button
             onClick={() => downloadFile(item)}
             className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors"
            >
             Download
            </button>
           </div>
          )}
          {item.status === 'error' && (
           <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
             <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
             />
            </svg>
            <span className="text-red-500 text-sm">Failed</span>
           </div>
          )}
         </div>
        </div>
       ))}
      </div>
     </div>
    )}

    <div className="text-center mt-4">
     <p className="text-gray-500 text-xs">
      <sup>*</sup>Supports JPG, PNG, GIF, SVG, WebP, and AVIF formats
     </p>
    </div>
   </div>

   <div className="mt-8">
    <p className="text-gray-400 text-xs text-center">
     Built for fun by{' '}
     <a href="https://sidme.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
      <i>sidme</i>
     </a>
    </p>
   </div>
  </div>
 );
}
