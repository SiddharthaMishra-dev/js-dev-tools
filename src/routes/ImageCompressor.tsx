import { IconCheck, IconCircleX, IconCloudUpload, IconDownload } from '@tabler/icons-react';
import { useState, useRef } from 'react';
import JSZip from 'jszip';

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
 mimeType: string;
 preview: string;
}

export default function ImageCompressor() {
 const [files, setFiles] = useState<CompressedFile[]>([]);
 const [quality, setQuality] = useState(0.3);
 const [maxWidth, setMaxWidth] = useState(1920);
 const [maxHeight, setMaxHeight] = useState(1080);
 const [isDragging, setIsDragging] = useState(false);
 const [isCompressing, setIsCompressing] = useState(false);
 const [preserveFormat, setPreserveFormat] = useState(true);
 const fileInputRef = useRef<HTMLInputElement>(null);
 const [isDownloadingZip, setIsDownloadingZip] = useState(false);

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
   ext: file.name.split('.').pop()?.toLowerCase() || 'jpg',
   mimeType: file.type,
   preview: URL.createObjectURL(file),
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

     // Calculate new dimensions if resizing is needed
     if (width > maxWidth || height > maxHeight) {
      const ratio = Math.min(maxWidth / width, maxHeight / height);
      width = Math.round(width * ratio);
      height = Math.round(height * ratio);
     }

     canvas.width = width;
     canvas.height = height;

     if (fileObj.mimeType === 'image/png' && preserveFormat) {
      // For PNG, preserve transparency
      ctx.clearRect(0, 0, width, height);
     } else {
      // For JPEG or when converting to JPEG, use white background
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, width, height);
     }

     ctx.drawImage(img, 0, 0, width, height);

     // Determine output format and quality
     const outputMimeType = preserveFormat ? fileObj.mimeType : 'image/jpeg';
     const outputQuality = outputMimeType === 'image/jpeg' ? quality : undefined;

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
      outputMimeType,
      outputQuality,
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

  // Preserve original extension or use jpg if converting
  const originalName = fileObj.name.replace(/\.[^/.]+$/, '');
  const extension = preserveFormat ? fileObj.ext : 'jpg';
  link.download = `compressed_${originalName}.${extension}`;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
 };

 const downloadAllAsZip = async () => {
  const completedFiles = files.filter((f) => f.status === 'completed' && f.compressedBlob);

  if (completedFiles.length === 0) {
   alert('No compressed files available for download.');
   return;
  }

  try {
   const zip = new JSZip();
   for (const item of completedFiles) {
    if (item.compressedBlob) {
     const filName = `${item.name.split('.')[0]}.${preserveFormat ? item.ext : 'jpg'}`;
     zip.file(filName, item.compressedBlob);
    }
   }

   const zipBlob = await zip.generateAsync({ type: 'blob' });

   const link = document.createElement('a');
   link.href = URL.createObjectURL(zipBlob);
   link.download = `compressed_images_${Date.now()}.zip`;
   document.body.appendChild(link);
   link.click();
   document.body.removeChild(link);
   URL.revokeObjectURL(link.href);
  } catch (error) {
   console.error('Error creating ZIP file:', error);
   alert('Failed to create ZIP file');
  } finally {
   setIsDownloadingZip(false);
  }
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

 const completedCount = files.filter((f) => f.status === 'completed').length;

 return (
  <div className="min-h-screen bg-gradient-to-br from-gray-800 to-slate-900 py-8 px-4 flex flex-col items-center justify-between">
   <div className="w-full max-w-6xl flex-1 flex flex-col items-center justify-center mx-auto">
    <div className="text-center mb-8">
     <h1 className="text-2xl font-bold text-gray-100 mb-2">
      Image <span className="text-amber-200">Compressor</span>
     </h1>
     <p className="text-md text-gray-200">Compress your images to reduce file size while maintaining quality</p>
    </div>

    <div className="bg-gray-800 rounded-xl shadow-lg p-8 mb-6 w-full max-w-5xl">
     {files.length === 0 ? (
      <>
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

         {/* Format Preservation Toggle */}
         <div className="mb-4">
          <label className="flex items-center space-x-3 cursor-pointer">
           <input
            type="checkbox"
            checked={preserveFormat}
            onChange={(e) => setPreserveFormat(e.target.checked)}
            className="w-4 h-4 text-amber-600 bg-gray-700 border-gray-600 rounded focus:ring-amber-500"
           />
           <span className="text-sm font-medium text-gray-200">Preserve original format</span>
          </label>
          <p className="text-xs text-gray-400 mt-1">
           {preserveFormat ? 'Keep original file formats (PNG, JPEG, etc.)' : 'Convert all images to JPEG for better compression'}
          </p>
         </div>

         {(!preserveFormat || files.some((f) => f.mimeType === 'image/jpeg')) && (
          <div className="mb-4">
           <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-medium text-gray-200">Quality {!preserveFormat ? '' : '(JPEG only)'}</label>
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
         )}

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
        </div>
       )}
      </>
     ) : (
      <>
       <div className="">
        <h3 className="text-lg font-semibold text-gray-100 mb-4">Compression Settings</h3>

        {/* Format Preservation Toggle */}
        <div className="mb-4">
         <label className="flex items-center space-x-3 cursor-pointer">
          <input
           type="checkbox"
           checked={preserveFormat}
           onChange={(e) => setPreserveFormat(e.target.checked)}
           className="w-4 h-4 text-amber-600 bg-gray-700 border-gray-600 rounded focus:ring-amber-500"
          />
          <span className="text-sm font-medium text-gray-200">Preserve original format</span>
         </label>
         <p className="text-xs text-gray-400 mt-1">
          {preserveFormat ? 'Keep original file formats (PNG, JPEG, etc.)' : 'Convert all images to JPEG for better compression'}
         </p>
        </div>

        {(!preserveFormat || files.some((f) => f.mimeType === 'image/jpeg')) && (
         <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
           <label className="text-sm font-medium text-gray-200">Quality {!preserveFormat ? '' : '(JPEG only)'}</label>
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
        )}

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
       </div>
       <div className="w-full flex justify-between items-center mb-3">
        <h3 className="text-xl font-semibold text-gray-100 mb-4">Files ({files.length})</h3>
        {files.length > 0 && (
         <div className="flex items-center gap-2">
          <div className="flex space-x-2">
           <button onClick={clearAll} className="px-4 py-2 text-red-400 hover:bg-red-900/20 rounded-lg transition-colors duration-200">
            Clear All
           </button>
           {/* {files.some((f) => f.status === 'completed') && (
            <button
             onClick={downloadAll}
             className="px-4 py-2 text-green-400 hover:bg-green-900/20 rounded-lg transition-colors duration-200"
            >
             Download All
            </button>
           )} */}
          </div>

          <button
           onClick={compressAll}
           disabled={isCompressing}
           className="px-6 py-2 bg-amber-700 text-amber-100 rounded-lg hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
          >
           {isCompressing ? 'Compressing...' : 'Compress All'}
          </button>
         </div>
        )}
       </div>

       <div className="space-y-3">
        {files.map((file) => (
         <div key={file.id} className="flex items-center justify-between p-4 border border-gray-600 rounded-lg bg-gray-700">
          <div className="mr-4 flex-shrink-0">
           <img src={file.preview} alt={file.name} className="w-16 h-16 object-contain rounded-md" />
          </div>
          <div className="flex-1 min-w-0">
           <div className="flex items-center space-x-2 mb-1">
            <p className="font-medium text-gray-100 truncate">{file.name}</p>
            <span className="text-xs px-2 py-1 bg-gray-600 text-gray-300 rounded uppercase">{file.ext}</span>
           </div>
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
             <IconCheck className="w-4 h-4 text-green-400" />
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
             <IconCircleX className="w-4 h-4 text-red-400" />
             <span className="text-red-400 text-sm">Failed</span>
            </div>
           )}
          </div>
         </div>
        ))}
       </div>
       {completedCount > 0 && (
        <div className="mt-6 w-full flex justify-end">
         <button
          onClick={downloadAllAsZip}
          disabled={isDownloadingZip}
          className="px-4 py-2 bg-green-700 text-green-100 rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 font-medium shadow-md hover:shadow-lg flex items-center space-x-2"
         >
          {isDownloadingZip ? (
           <>
            <div className="w-4 h-4 border-2 border-green-300 border-t-transparent rounded-full animate-spin"></div>
            <span>Creating ZIP...</span>
           </>
          ) : (
           <>
            <IconDownload className="w-4 h-4" />
            <span>Download ZIP ({completedCount})</span>
           </>
          )}
         </button>
        </div>
       )}
      </>
     )}
    </div>

    <div className="text-center mt-4">
     <p className="text-gray-400 text-xs">
      <sup>*</sup>PNG files are compressed by resizing only. JPEG files support quality compression.
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
