import { useRef, useState, useCallback } from 'react';
import type { ConversionItem } from '../types/ImageTypes';
import { IconCheck, IconCircleX, IconCloudUpload } from '@tabler/icons-react';

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
  <div className="min-h-screen bg-gradient-to-br from-gray-800 to-slate-900 py-8 px-4 flex flex-col items-center justify-between">
   <div className="w-full max-w-5xl flex-1 flex flex-col items-center justify-center mx-auto">
    {/* Header */}
    <div className="text-center mb-8">
     <h1 className="text-2xl font-bold text-gray-100 mb-2">
      Image <span className="text-amber-200">Format</span> Converter
     </h1>
     <p className="text-md text-gray-200">Convert your images between different formats with ease</p>
    </div>
    <div className="bg-gray-800 rounded-xl shadow-lg p-8 mb-6 w-full max-w-2xl">
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
        <p className="text-xl font-medium text-gray-100 mb-2">{isDragging ? 'Drop your images here' : 'Drag & drop your images here'}</p>
        <p className="text-gray-400 mb-4">or</p>
        <button
         onClick={() => uploadRef.current?.click()}
         className="text-sm px-3 py-2 bg-amber-700 text-amber-100 rounded-lg hover:bg-amber-600 transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
        >
         Choose Files
        </button>
       </div>
      </div>
     </div>

     <input type="file" accept="image/*" ref={uploadRef} className="hidden" multiple onChange={handleFileUpload} />
     {conversions.length > 0 && (
      <div className="mt-6 pt-6 border-t border-gray-600">
       <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
         <label className="text-sm font-medium text-gray-200">Convert to:</label>
         <select
          value={selectedFormat}
          onChange={(e) => setSelectedFormat(e.target.value)}
          className="px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
         >
          {supportedFormats.map((format) => (
           <option key={format.value} value={format.value} className="bg-gray-700">
            {format.label}
           </option>
          ))}
         </select>
        </div>

        <div className="flex space-x-2">
         <button onClick={clearAll} className="px-4 py-2 text-red-400 hover:bg-red-900/20 rounded-lg transition-colors duration-200">
          Clear All
         </button>
         <button
          onClick={handleConvertAll}
          disabled={isConverting}
          className="px-6 py-2 bg-amber-700 text-amber-100 rounded-lg hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
         >
          {isConverting ? 'Converting...' : 'Convert All'}
         </button>
        </div>
       </div>
      </div>
     )}
    </div>

    {conversions.length > 0 && (
     <div className="bg-gray-800 rounded-xl shadow-lg p-6 w-full max-w-4xl">
      <h3 className="text-xl font-semibold text-gray-100 mb-4">Conversion Results ({conversions.length} files)</h3>
      <div className="space-y-3">
       {conversions.map((item) => (
        <div key={item.id} className="flex items-center justify-between p-4 border border-gray-600 rounded-lg bg-gray-700">
         <div className="flex-1">
          <div className="flex items-center space-x-3">
           <p className="font-medium text-gray-100 truncate max-w-xs">{item.name}</p>
           <span className="text-xs px-2 py-1 bg-gray-600 text-gray-300 rounded">
            {item.originalFormat} → {selectedFormat.toUpperCase()}
           </span>
          </div>
          {item.error && <p className="text-xs text-red-400 mt-1">{item.error}</p>}
         </div>

         <div className="flex items-center space-x-3">
          {item.status === 'pending' && <span className="text-gray-400 text-sm">Pending</span>}
          {item.status === 'converting' && (
           <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-amber-200 text-sm">Converting...</span>
           </div>
          )}
          {item.status === 'completed' && (
           <div className="flex items-center space-x-2">
            <IconCheck className="w-4 h-4 text-green-400" />
            <button
             onClick={() => downloadFile(item)}
             className="px-3 py-1 bg-green-700 text-green-100 text-sm rounded hover:bg-green-600 transition-colors"
            >
             Download
            </button>
           </div>
          )}
          {item.status === 'error' && (
           <div className="flex items-center space-x-2">
            <IconCircleX className="w-4 h-4 text-red-400" />
            <span className="text-red-400 text-sm">Failed</span>
           </div>
          )}
         </div>
        </div>
       ))}
      </div>
     </div>
    )}

    {/* Help Text */}
    <div className="text-center mt-4">
     <p className="text-gray-400 text-xs">
      <sup>*</sup>Supports JPG, PNG, GIF, SVG, WebP, and AVIF formats
     </p>
    </div>
   </div>

   {/* Footer */}
   <div className="mt-8">
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
}
