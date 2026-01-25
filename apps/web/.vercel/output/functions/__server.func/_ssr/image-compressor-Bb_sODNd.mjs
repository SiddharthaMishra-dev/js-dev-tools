import { r as reactExports, j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { T as ToolInfo } from "./ToolInfo-wEwXLLd0.mjs";
import { J as JSZip } from "../_libs/jszip.mjs";
import { o as IconCloudUpload, q as IconLock, l as IconDownload, s as IconCircleX, e as IconBolt, i as IconArrowsMinimize } from "../_chunks/_libs/@tabler/icons-react.mjs";
import "../_chunks/_libs/readable-stream.mjs";
import "stream";
import "../_libs/process-nextick-args.mjs";
import "../_libs/isarray.mjs";
import "events";
import "../_chunks/_libs/safe-buffer.mjs";
import "buffer";
import "../_libs/core-util-is.mjs";
import "../_libs/inherits.mjs";
import "util";
import "../_libs/util-deprecate.mjs";
import "node:string_decoder";
import "../_libs/lie.mjs";
import "../_libs/immediate.mjs";
import "../_libs/pako.mjs";
function RouteComponent() {
  const [files, setFiles] = reactExports.useState([]);
  const [quality, setQuality] = reactExports.useState(0.3);
  const [maxWidth, setMaxWidth] = reactExports.useState(1920);
  const [maxHeight, setMaxHeight] = reactExports.useState(1080);
  const [isDragging, setIsDragging] = reactExports.useState(false);
  const [isCompressing, setIsCompressing] = reactExports.useState(false);
  const [preserveFormat, setPreserveFormat] = reactExports.useState(true);
  const fileInputRef = reactExports.useRef(null);
  const [isDownloadingZip, setIsDownloadingZip] = reactExports.useState(false);
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files || []);
    processFiles(selectedFiles);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    processFiles(droppedFiles);
  };
  const processFiles = (selectedFiles) => {
    const imageFiles = selectedFiles.filter((file) => file.type.startsWith("image/"));
    if (imageFiles.length === 0) {
      alert("Please select valid image files");
      return;
    }
    const filesObj = imageFiles.map((file) => ({
      id: `${Date.now()}-${Math.random()}`,
      name: file.name,
      originalSize: file.size,
      originalFile: file,
      status: "ready",
      ext: file.name.split(".").pop()?.toLowerCase() || "jpg",
      mimeType: file.type,
      preview: URL.createObjectURL(file)
    }));
    setFiles(filesObj);
  };
  const compressImage = async (fileObj) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        try {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          if (!ctx) {
            reject(new Error("Failed to get canvas context"));
            return;
          }
          let {
            width,
            height
          } = img;
          if (width > maxWidth || height > maxHeight) {
            const ratio = Math.min(maxWidth / width, maxHeight / height);
            width = Math.round(width * ratio);
            height = Math.round(height * ratio);
          }
          canvas.width = width;
          canvas.height = height;
          if (fileObj.mimeType === "image/png" && preserveFormat) {
            ctx.clearRect(0, 0, width, height);
          } else {
            ctx.fillStyle = "#FFFFFF";
            ctx.fillRect(0, 0, width, height);
          }
          ctx.drawImage(img, 0, 0, width, height);
          const outputMimeType = preserveFormat ? fileObj.mimeType : "image/jpeg";
          const outputQuality = outputMimeType === "image/jpeg" ? quality : void 0;
          canvas.toBlob((blob) => {
            if (blob) {
              const useCompressed = blob.size < fileObj.originalSize;
              const finalBlob = useCompressed ? blob : fileObj.originalFile;
              const compressionRatio = (fileObj.originalSize - finalBlob.size) / fileObj.originalSize * 100;
              setFiles((prev) => prev.map((f) => f.id === fileObj.id ? {
                ...f,
                status: "completed",
                compressedSize: finalBlob.size,
                compressedBlob: finalBlob,
                downloadUrl: URL.createObjectURL(finalBlob),
                compressionRatio: Math.max(0, compressionRatio)
              } : f));
              resolve();
            } else {
              reject(new Error("Compression failed"));
            }
          }, outputMimeType, outputQuality);
        } catch (error) {
          reject(error);
        } finally {
          URL.revokeObjectURL(img.src);
        }
      };
      img.onerror = () => {
        reject(new Error("Failed to load image"));
        URL.revokeObjectURL(img.src);
      };
      img.src = URL.createObjectURL(fileObj.originalFile);
    });
  };
  const compressAll = async (filesToCompress) => {
    if (filesToCompress.length === 0) return;
    setIsCompressing(true);
    for (const fileObj of filesToCompress) {
      try {
        setFiles((prev) => prev.map((f) => f.id === fileObj.id ? {
          ...f,
          status: "compressing"
        } : f));
        await compressImage(fileObj);
      } catch (error) {
        setFiles((prev) => prev.map((f) => f.id === fileObj.id ? {
          ...f,
          status: "error",
          error: error.message
        } : f));
      }
    }
    setIsCompressing(false);
  };
  const downloadFile = (fileObj) => {
    if (!fileObj.downloadUrl) return;
    const link = document.createElement("a");
    link.href = fileObj.downloadUrl;
    const originalName = fileObj.name.replace(/\.[^/.]+$/, "");
    const extension = preserveFormat ? fileObj.ext : "jpg";
    link.download = `compressed_${originalName}.${extension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const downloadAllAsZip = async () => {
    const completedFiles = files.filter((f) => f.status === "completed" && f.compressedBlob);
    if (completedFiles.length === 0) {
      alert("No compressed files available for download.");
      return;
    }
    try {
      const zip = new JSZip();
      for (const item of completedFiles) {
        if (item.compressedBlob) {
          const filName = `${item.name.split(".")[0]}.${preserveFormat ? item.ext : "jpg"}`;
          zip.file(filName, item.compressedBlob);
        }
      }
      const zipBlob = await zip.generateAsync({
        type: "blob"
      });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(zipBlob);
      link.download = `compressed_images_${Date.now()}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error("Error creating ZIP file:", error);
      alert("Failed to create ZIP file");
    } finally {
      setIsDownloadingZip(false);
    }
  };
  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };
  const clearAll = () => {
    files.forEach((file) => {
      if (file.downloadUrl) {
        URL.revokeObjectURL(file.downloadUrl);
      }
    });
    setFiles([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  reactExports.useEffect(() => {
    const readyFiles = files.filter((f) => f.status === "ready");
    if (readyFiles.length > 0 && !isCompressing) {
      compressAll(readyFiles);
    }
  }, [files, isCompressing]);
  reactExports.useEffect(() => {
    if (files.length > 0) {
      setFiles((prev) => prev.map((f) => ({
        ...f,
        status: "ready"
      })));
    }
  }, [quality, maxWidth, maxHeight, preserveFormat]);
  const completedCount = files.filter((f) => f.status === "completed").length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-gray-800 to-slate-900 pt-24 pb-8 px-4 flex flex-col items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-6xl flex-1 flex flex-col items-center justify-center mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-bold text-gray-100 mb-2", children: [
          "Image ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-200", children: "Compressor" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-md text-gray-200", children: "Reduce file size up to 80% while preserving quality. 100% client-side—your files never leave." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-800 rounded-xl shadow-lg p-4 sm:p-8 mb-6 w-full max-w-5xl", children: files.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onDragOver: handleDragOver, onDragLeave: handleDragLeave, onDrop: handleDrop, className: `border-3 border-dashed rounded-lg p-12 text-center transition-all duration-300 ${isDragging ? "border-amber-500 bg-amber-900/20" : "border-gray-600 hover:border-amber-400 hover:bg-gray-700"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconCloudUpload, { className: `w-16 h-16 ${isDragging ? "text-amber-500" : "text-gray-400"} transition-colors` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-medium text-gray-100 mb-2", children: isDragging ? "Drop your images here" : "Drag & drop your images here" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 mb-4", children: "or" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => fileInputRef.current?.click(), className: "text-sm px-3 py-2 bg-amber-700 text-amber-100 rounded-lg hover:bg-amber-600 transition-colors duration-200 font-medium shadow-md hover:shadow-lg", children: "Choose Files" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-gray-400 text-xs mt-3 flex items-center justify-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconLock, { className: "w-4 h-4" }),
          " Your files stay on your device. Nothing is uploaded to any server."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: "image/*", multiple: true, ref: fileInputRef, className: "hidden", onChange: handleFileChange })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-100 mb-4", children: "Compression Settings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center space-x-3 cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: preserveFormat, onChange: (e) => setPreserveFormat(e.target.checked), className: "w-4 h-4 text-amber-600 bg-gray-700 border-gray-600 rounded focus:ring-amber-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-gray-200", children: "Preserve original format" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 mt-1", children: preserveFormat ? "Keep original file formats (PNG, JPEG, etc.)" : "Convert all images to JPEG for better compression" })
          ] }),
          (!preserveFormat || files.some((f) => f.mimeType === "image/jpeg")) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-sm font-medium text-gray-200", children: [
                "Quality ",
                !preserveFormat ? "" : "(JPEG only)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-amber-200 font-medium", children: [
                Math.round(quality * 100),
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: "0.1", max: "1", step: "0.05", value: quality, onChange: (e) => setQuality(parseFloat(e.target.value)), className: "w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-gray-400 mt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Lower quality" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Higher quality" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-200 mb-1", children: "Max Width (px)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: maxWidth, onChange: (e) => setMaxWidth(parseInt(e.target.value) || 1920), min: "100", max: "4000", className: "w-full px-3 py-2 border border-gray-600 rounded bg-gray-700 text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-200 mb-1", children: "Max Height (px)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: maxHeight, onChange: (e) => setMaxHeight(parseInt(e.target.value) || 1080), min: "100", max: "4000", className: "w-full px-3 py-2 border border-gray-600 rounded bg-gray-700 text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex justify-between items-center mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-semibold text-gray-100 mb-4", children: [
            "Files (",
            files.length,
            ")"
          ] }),
          files.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: clearAll, className: "px-4 py-2 text-red-400 hover:bg-red-900/20 rounded-lg transition-colors duration-200", children: "Clear All" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: files.map((file) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border border-gray-600 rounded-lg bg-gray-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mr-4 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: file.preview, alt: file.name, className: "w-16 h-16 object-contain rounded-md" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center space-x-2 mb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-gray-100 truncate", children: file.name }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-4 mt-1 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-gray-400", children: [
                formatFileSize(file.originalSize),
                " →",
                file.compressedSize && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs bg-green-900 text-green-300", children: formatFileSize(file.compressedSize) }) })
              ] }),
              file.error && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-red-400", children: file.error })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-3 ml-4", children: [
            file.status === "ready" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400 text-sm", children: "Ready" }),
            file.status === "compressing" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4 h-4 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-200 text-sm", children: "Compressing..." })
            ] }),
            file.status === "completed" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => downloadFile(file), className: "px-3 py-1 bg-green-700 text-green-100 text-sm rounded hover:bg-green-600 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconDownload, { className: "w-4 h-4" }) }) }),
            file.status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(IconCircleX, { className: "w-4 h-4 text-red-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-400 text-sm", children: "Failed" })
            ] })
          ] })
        ] }, file.id)) }),
        completedCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 w-full flex justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: downloadAllAsZip, disabled: isDownloadingZip, className: "px-4 py-2 bg-green-700 text-green-100 rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 font-medium shadow-md hover:shadow-lg flex items-center space-x-2", children: isDownloadingZip ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4 h-4 border-2 border-green-300 border-t-transparent rounded-full animate-spin" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Creating ZIP..." })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconDownload, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Download ZIP (",
            completedCount,
            ")"
          ] })
        ] }) }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ToolInfo, { title: "Image Compressor", description: "Our Image Compressor helps you significantly reduce the file size of your images without sacrificing visible quality. By utilizing advanced browser-based compression algorithms, you can optimize your PNG, JPEG, and WebP files for faster web loading and reduced storage usage.", features: [{
        title: "Quality Control",
        description: "Fine-tune the compression level to find the perfect balance between file size and image clarity.",
        icon: IconBolt
      }, {
        title: "Privacy Guaranteed",
        description: "Processing happens entirely in your browser. No images are ever uploaded to a server.",
        icon: IconLock
      }, {
        title: "Bulk Compression",
        description: "Compress dozens of images simultaneously and download them all at once in a ZIP file.",
        icon: IconArrowsMinimize
      }], steps: [{
        title: "Add Images",
        description: "Drop your images into the compression zone or use the file picker to select them."
      }, {
        title: "Adjust Settings",
        description: "Set your desired quality and maximum dimensions to optimize your images further."
      }, {
        title: "Review Savings",
        description: "Instantly see how much space you have saved for each image after compression."
      }, {
        title: "Download All",
        description: "Download individual optimized images or grab the entire batch as a ZIP archive."
      }] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-400 text-xs text-center", children: [
      "Crafted with care by",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://sidme.vercel.app/", target: "_blank", rel: "noopener noreferrer", className: "text-amber-200 hover:text-amber-300 transition-colors", children: "sidme" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
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
      ` })
  ] });
}
export {
  RouteComponent as component
};
