import { useState, useRef } from 'react';

interface CompressedFile {
 id: string;
 name: string;
 originalSize: number;
 compressedSize?: number;
 originalFile: File;
 compressedBlob?: Blob;
 status: 'ready' | 'compressing' | 'completed' | 'error';
 downloadUrl?: string;
 compressionRatio?: number;
 error?: string;
 ext: string;
}

export default function ImageCompressor() {
 const [files, setFiles] = useState<CompressedFile[]>([]);
 const [quality, setQuality] = useState(0.7);
 const [maxWidth, setMaxWidth] = useState(1920);
 const [maxHeight, setMaxHeight] = useState(1080);
 const [isDragging, setIsDragging] = useState(false);
 const [isCompressing, setIsCompressing] = useState(false);
 const fileInputRef = useRef<HTMLInputElement>(null);

 const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const selectedFiles = Array.from(e.target.files || []);
  processFiles(selectedFiles);
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
  const droppedFiles = Array.from(e.dataTransfer.files);
  processFiles(droppedFiles);
 };

 const processFiles = (selectedFiles: File[]) => {
  const imageFiles = selectedFiles.filter((file) => file.type.startsWith('image/'));

  if (imageFiles.length === 0) {
   alert('Please select valid image files');
   return;
  }

  const filesObj: CompressedFile[] = imageFiles.map((file) => ({
   id: `${Date.now()}-${Math.random()}`,
   name: file.name,
   originalSize: file.size,
   originalFile: file,
   status: 'ready',
   ext: file.type.split('/')[1],
  }));

  setFiles(filesObj);
 };

 const compressImage = async (fileObj: CompressedFile): Promise<void> => {
  return new Promise((resolve, reject) => {
   const img = new Image();
   img.onload = () => {
    try {
     const canvas = document.createElement('canvas');
     const ctx = canvas.getContext('2d');

     if (!ctx) {
      reject(new Error('Failed to get canvas context'));
      return;
     }

     let { width, height } = img;

     if (width > maxWidth || height > maxHeight) {
      const ratio = Math.min(maxWidth / width, maxHeight / height);
      width = Math.round(width * ratio);
      height = Math.round(height * ratio);
     }

     canvas.width = width;
     canvas.height = height;

     ctx.drawImage(img, 0, 0, width, height);

     canvas.toBlob(
      (blob) => {
       if (blob) {
        const useCompressed = blob.size < fileObj.originalSize;
        const finalBlob = useCompressed ? blob : fileObj.originalFile;
        const compressionRatio = ((fileObj.originalSize - finalBlob.size) / fileObj.originalSize) * 100;

        setFiles((prev) =>
         prev.map((f) =>
          f.id === fileObj.id
           ? {
              ...f,
              status: 'completed',
              compressedSize: finalBlob.size,
              compressedBlob: finalBlob,
              downloadUrl: URL.createObjectURL(finalBlob),
              compressionRatio: Math.max(0, compressionRatio),
             }
           : f,
         ),
        );
        resolve();
       } else {
        reject(new Error('Compression failed'));
       }
      },
      `image/jpeg`,
      quality,
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

   img.src = URL.createObjectURL(fileObj.originalFile);
  });
 };

 const compressAll = async () => {
  if (files.length === 0) return;

  setIsCompressing(true);
  setFiles((prev) => prev.map((f) => ({ ...f, status: 'compressing' })));
  for (const fileObj of files) {
   try {
    await compressImage(fileObj);
   } catch (error) {
    setFiles((prev) => prev.map((f) => (f.id === fileObj.id ? { ...f, status: 'error', error: (error as Error).message } : f)));
   }
  }

  setIsCompressing(false);
 };

 const downloadFile = (fileObj: CompressedFile) => {
  if (!fileObj.downloadUrl) return;

  const link = document.createElement('a');
  link.href = fileObj.downloadUrl;
  link.download = `compressed_${fileObj.name.replace(/\.[^/.]+$/, '')}.jpg`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
 };

 const formatFileSize = (bytes: number) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
 };

 const clearAll = () => {
  files.forEach((file) => {
   if (file.downloadUrl) {
    URL.revokeObjectURL(file.downloadUrl);
   }
  });
  setFiles([]);
  if (fileInputRef.current) {
   fileInputRef.current.value = '';
  }
 };

 const downloadAll = () => {
  files
   .filter((f) => f.status === 'completed')
   .forEach((file) => {
    downloadFile(file);
   });
 };

 return (
  <div className="min-h-screen bg-gradient-to-br from-gray-800 to-slate-900 py-8 px-4 flex flex-col items-center justify-between">
   <div className="w-full max-w-6xl flex-1 flex flex-col items-center justify-center mx-auto">
    <div className="text-center mb-8">
     <h1 className="text-2xl font-bold text-gray-100 mb-2">
      Image <span className="text-amber-200">Compressor</span>
     </h1>
     <p className="text-md text-gray-200">Compress your images to reduce file size while maintaining quality</p>
    </div>

    {/* Upload Area */}
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
       <svg
        className={`w-16 h-16 ${isDragging ? 'text-amber-500' : 'text-gray-400'} transition-colors`}
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
        <p className="text-xl font-medium text-gray-100 mb-2">{isDragging ? 'Drop your images here' : 'Drag & drop your images here'}</p>
        <p className="text-gray-400 mb-4">or</p>
        <button
         onClick={() => fileInputRef.current?.click()}
         className="text-sm px-3 py-2 bg-amber-700 text-amber-100 rounded-lg hover:bg-amber-600 transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
        >
         Choose Files
        </button>
       </div>
      </div>
     </div>

     <input type="file" accept="image/*" multiple ref={fileInputRef} className="hidden" onChange={handleFileChange} />
     {files.length > 0 && (
      <div className="mt-6 pt-6 border-t border-gray-600">
       <h3 className="text-lg font-semibold text-gray-100 mb-4">Compression Settings</h3>
       <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
         <label className="text-sm font-medium text-gray-200">Quality</label>
         <span className="text-sm text-amber-200 font-medium">{Math.round(quality * 100)}%</span>
        </div>
        <input
         type="range"
         min="0.1"
         max="1"
         step="0.05"
         value={quality}
         onChange={(e) => setQuality(parseFloat(e.target.value))}
         className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
         <span>Lower quality</span>
         <span>Higher quality</span>
        </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
         <label className="block text-sm font-medium text-gray-200 mb-1">Max Width (px)</label>
         <input
          type="number"
          value={maxWidth}
          onChange={(e) => setMaxWidth(parseInt(e.target.value) || 1920)}
          min="100"
          max="4000"
          className="w-full px-3 py-2 border border-gray-600 rounded bg-gray-700 text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
         />
        </div>
        <div>
         <label className="block text-sm font-medium text-gray-200 mb-1">Max Height (px)</label>
         <input
          type="number"
          value={maxHeight}
          onChange={(e) => setMaxHeight(parseInt(e.target.value) || 1080)}
          min="100"
          max="4000"
          className="w-full px-3 py-2 border border-gray-600 rounded bg-gray-700 text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
         />
        </div>
       </div>

       <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
        <div className="flex space-x-2">
         <button onClick={clearAll} className="px-4 py-2 text-red-400 hover:bg-red-900/20 rounded-lg transition-colors duration-200">
          Clear All
         </button>
         {files.some((f) => f.status === 'completed') && (
          <button
           onClick={downloadAll}
           className="px-4 py-2 text-green-400 hover:bg-green-900/20 rounded-lg transition-colors duration-200"
          >
           Download All
          </button>
         )}
        </div>
        <button
         onClick={compressAll}
         disabled={isCompressing}
         className="px-6 py-2 bg-amber-700 text-amber-100 rounded-lg hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
        >
         {isCompressing ? 'Compressing...' : 'Compress All'}
        </button>
       </div>
      </div>
     )}
    </div>

    {files.length > 0 && (
     <div className="bg-gray-800 rounded-xl shadow-lg p-6 w-full max-w-5xl">
      <h3 className="text-xl font-semibold text-gray-100 mb-4">Files ({files.length})</h3>

      <div className="space-y-3">
       {files.map((file) => (
        <div key={file.id} className="flex items-center justify-between p-4 border border-gray-600 rounded-lg bg-gray-700">
         <div className="flex-1 min-w-0">
          <p className="font-medium text-gray-100 truncate">{file.name}</p>
          <div className="flex items-center space-x-4 mt-1 flex-wrap">
           <span className="text-xs text-gray-400">Original: {formatFileSize(file.originalSize)}</span>
           {file.compressedSize && (
            <>
             <span className="text-xs text-gray-400">Compressed: {formatFileSize(file.compressedSize)}</span>
             <span
              className={`text-xs px-2 py-1 rounded ${
               file.compressionRatio && file.compressionRatio > 0 ? 'bg-green-900 text-green-300' : 'bg-yellow-900 text-yellow-300'
              }`}
             >
              {file.compressionRatio && file.compressionRatio > 0 ? `${file.compressionRatio.toFixed(1)}% smaller` : 'No reduction'}
             </span>
            </>
           )}
           {file.error && <span className="text-xs text-red-400">{file.error}</span>}
          </div>
         </div>

         <div className="flex items-center space-x-3 ml-4">
          {file.status === 'ready' && <span className="text-gray-400 text-sm">Ready</span>}
          {file.status === 'compressing' && (
           <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-amber-200 text-sm">Compressing...</span>
           </div>
          )}
          {file.status === 'completed' && (
           <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
             <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
             />
            </svg>
            <button
             onClick={() => downloadFile(file)}
             className="px-3 py-1 bg-green-700 text-green-100 text-sm rounded hover:bg-green-600 transition-colors"
            >
             Download
            </button>
           </div>
          )}
          {file.status === 'error' && (
           <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
             <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
             />
            </svg>
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
      <sup>*</sup>Images are resized and compressed to JPEG format for optimal file size reduction
     </p>
    </div>
   </div>

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

   <style>{`
    .slider::-webkit-slider-thumb {
     appearance: none;
     height: 20px;
     width: 20px;
     border-radius: 50%;
     background: #f59e0b;
     cursor: pointer;
    }
    .slider::-moz-range-thumb {
     height: 20px;
     width: 20px;
     border-radius: 50%;
     background: #f59e0b;
     cursor: pointer;
     border: none;
    }
   `}</style>
  </div>
 );
}
