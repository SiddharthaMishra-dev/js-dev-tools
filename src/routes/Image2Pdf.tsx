import React, { useState, useRef, useCallback } from 'react';
import { Reorder } from 'motion/react';
import { jsPDF } from 'jspdf';
import { IconCloudUpload, IconFileTypePdf, IconTrash, IconX } from '@tabler/icons-react';
import SEO, { seoConfig } from '../components/SEO';

interface ImageItem {
 id: string;
 file: File;
 preview: string;
 name: string;
}

export default function Image2Pdf() {
 const [files, setFiles] = useState<ImageItem[]>([]);
 const [isDragging, setIsDragging] = useState(false);
 const [isGenerating, setIsGenerating] = useState(false);
 const uploadRef = useRef<HTMLInputElement>(null);

 const processFiles = useCallback((fileList: FileList | File[]) => {
  const newFiles = Array.from(fileList)
   .filter((file) => file.type.startsWith('image/'))
   .map((file) => ({
    id: `${Date.now()}-${Math.random()}`,
    file,
    preview: URL.createObjectURL(file),
    name: file.name,
   }));

  setFiles((prev) => [...prev, ...newFiles]);
 }, []);

 const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  if (event.target.files) {
   processFiles(event.target.files);
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
  if (e.dataTransfer.files) {
   processFiles(e.dataTransfer.files);
  }
 };

 const handleRemoveFile = (id: string) => {
  setFiles((prev) => {
   const newFiles = prev.filter((file) => file.id !== id);
   const removedFile = prev.find((file) => file.id === id);
   if (removedFile) {
    URL.revokeObjectURL(removedFile.preview);
   }
   return newFiles;
  });
 };

 const handleClearAll = () => {
  files.forEach((file) => URL.revokeObjectURL(file.preview));
  setFiles([]);
  if (uploadRef.current) {
   uploadRef.current.value = '';
  }
 };

 const handleConvertToPdf = async () => {
  if (files.length === 0) return;

  setIsGenerating(true);
  try {
   const doc = new jsPDF();
   const pageWidth = doc.internal.pageSize.getWidth();
   const pageHeight = doc.internal.pageSize.getHeight();

   for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (i > 0) {
     doc.addPage();
    }

    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
     const image = new Image();
     image.onload = () => resolve(image);
     image.onerror = reject;
     image.src = file.preview;
    });

    const imgWidth = img.width;
    const imgHeight = img.height;

    // Calculate dimensions to fit the page while maintaining aspect ratio
    const ratio = Math.min(pageWidth / imgWidth, pageHeight / imgHeight);
    const finalWidth = imgWidth * ratio;
    const finalHeight = imgHeight * ratio;

    // Center the image
    const x = (pageWidth - finalWidth) / 2;
    const y = (pageHeight - finalHeight) / 2;

    doc.addImage(img, 'JPEG', x, y, finalWidth, finalHeight);
   }

   doc.save('converted-images.pdf');
  } catch (error) {
   console.error('Error generating PDF:', error);
   alert('Failed to generate PDF. Please try again.');
  } finally {
   setIsGenerating(false);
  }
 };

 return (
  <div className="min-h-screen bg-gradient-to-br from-gray-800 to-slate-900 py-8 px-4 flex flex-col items-center justify-between">
   <SEO {...seoConfig.imageToPdf} />
   <div className="w-full max-w-4xl flex-1 flex flex-col items-center justify-center mx-auto">
    <div className="text-center mb-8">
     <h1 className="text-3xl font-bold text-gray-100 mb-2">
      Image to <span className="text-amber-200">PDF</span> Converter
     </h1>
     <p className="text-md text-gray-200">Convert multiple images into a single PDF. Drag and drop to reorder pages. 100% private.</p>
    </div>

    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 w-full p-6 shadow-xl">
     {/* Upload Area */}
     <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`border-3 border-dashed rounded-xl p-8 text-center transition-all duration-300 mb-6 ${
       isDragging ? 'border-amber-500 bg-amber-900/20' : 'border-gray-600 hover:border-amber-400 hover:bg-gray-700/50'
      }`}
     >
      <div className="flex flex-col items-center space-y-4">
       <IconCloudUpload className={`w-16 h-16 ${isDragging ? 'text-amber-500' : 'text-gray-400'} transition-colors`} />
       <div>
        <p className="text-xl font-medium text-gray-100 mb-2">{isDragging ? 'Drop images here' : 'Drag & drop images here'}</p>
        <p className="text-gray-400 mb-4 text-sm">Supports JPG, PNG, WebP, etc.</p>
        <button
         onClick={() => uploadRef.current?.click()}
         className="px-6 py-2.5 bg-amber-700 text-amber-100 rounded-lg hover:bg-amber-600 transition-colors duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
         Select Images
        </button>
       </div>
      </div>
      <input type="file" multiple accept="image/*" ref={uploadRef} className="hidden" onChange={handleFileChange} />
     </div>

     {/* Controls & List */}
     {files.length > 0 && (
      <div className="space-y-6">
       <div className="flex justify-between items-center bg-gray-900/50 p-4 rounded-lg border border-gray-700">
        <span className="text-gray-300 font-medium">{files.length} pages ready</span>
        <div className="flex gap-3">
         <button
          onClick={handleClearAll}
          className="px-4 py-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors text-sm font-medium flex items-center gap-2"
         >
          <IconTrash className="w-4 h-4" />
          Clear All
         </button>
         <button
          onClick={handleConvertToPdf}
          disabled={isGenerating}
          className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-500 transition-colors font-medium shadow-md flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
         >
          {isGenerating ? (
           <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Generating...
           </>
          ) : (
           <>
            <IconFileTypePdf className="w-5 h-5" />
            Convert to PDF
           </>
          )}
         </button>
        </div>
       </div>

       <div className="bg-gray-900/30 rounded-xl p-4 border border-gray-700/50">
        <p className="text-gray-400 text-xs mb-3 text-center uppercase tracking-wider font-semibold">Drag to Reorder Pages</p>
        <Reorder.Group axis="y" values={files} onReorder={setFiles} className="space-y-2">
         {files.map((file) => (
          <Reorder.Item
           key={file.id}
           value={file}
           className="bg-gray-800 rounded-lg border border-gray-700 p-3 flex items-center gap-4 cursor-grab active:cursor-grabbing shadow-sm hover:shadow-md transition-shadow"
          >
           <div className="w-6 flex flex-col items-center justify-center gap-1 text-gray-500">
            <div className="w-1 h-1 rounded-full bg-current"></div>
            <div className="w-1 h-1 rounded-full bg-current"></div>
            <div className="w-1 h-1 rounded-full bg-current"></div>
           </div>

           <div className="w-12 h-12 bg-gray-900 rounded overflow-hidden flex-shrink-0 border border-gray-700">
            <img src={file.preview} alt="" className="w-full h-full object-cover" />
           </div>

           <div className="flex-1 min-w-0">
            <p className="text-gray-200 text-sm font-medium truncate">{file.name}</p>
            <p className="text-gray-500 text-xs text-nowrap mt-0.5">{(file.file.size / 1024).toFixed(1)} KB</p>
           </div>

           <button
            onClick={() => handleRemoveFile(file.id)}
            className="p-2 text-gray-500 hover:text-red-400 hover:bg-red-500/10 rounded-full transition-colors"
           >
            <IconX className="w-5 h-5" />
           </button>
          </Reorder.Item>
         ))}
        </Reorder.Group>
       </div>
      </div>
     )}
    </div>
   </div>

   {/* Footer */}
   <div className="mt-8 text-center">
    <p className="text-gray-400 text-xs">
     Crafted with care by{' '}
     <a
      href="https://sidme.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-amber-200 hover:text-amber-300 transition-colors"
     >
      sidme
     </a>
    </p>
   </div>
  </div>
 );
}
