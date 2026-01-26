import { r as reactExports, j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { j as jspdf_node_minExports } from "../_chunks/_libs/jspdf.mjs";
import { T as ToolInfo } from "./ToolInfo-B0rIjAJQ.mjs";
import { p as IconCloudUpload, f as IconTrash, q as IconFileTypePdf, r as IconX, s as IconArrowsSort, t as IconLock } from "../_chunks/_libs/@tabler/icons-react.mjs";
import { R as ReorderGroup, a as ReorderItem } from "../_libs/framer-motion.mjs";
import "../_libs/fflate.mjs";
import "module";
import "../_libs/fast-png.mjs";
import "../_libs/iobuffer.mjs";
import "../_libs/pako.mjs";
import "fs";
import "path";
import "../_libs/html2canvas.mjs";
import "../_libs/dompurify.mjs";
import "../_libs/canvg.mjs";
import "../_libs/core-js.mjs";
import "../_chunks/_libs/@babel/runtime.mjs";
import "../_libs/raf.mjs";
import "../_libs/performance-now.mjs";
import "../_libs/rgbcolor.mjs";
import "../_libs/svg-pathdata.mjs";
import "../_libs/stackblur-canvas.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const processImageForPdf = async (file) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      let width = img.width;
      let height = img.height;
      const maxDim = 2e3;
      if (width > maxDim || height > maxDim) {
        const aspect = width / height;
        if (width > height) {
          width = maxDim;
          height = width / aspect;
        } else {
          height = maxDim;
          width = height * aspect;
        }
      }
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("Failed to get canvas context"));
        return;
      }
      ctx.drawImage(img, 0, 0, width, height);
      let format = "JPEG";
      let mimeType = "image/jpeg";
      if (file.file.type === "image/png" || file.file.type === "image/webp") {
        format = "PNG";
        mimeType = "image/png";
      }
      const dataUrl = canvas.toDataURL(mimeType, format === "JPEG" ? 0.8 : void 0);
      resolve({
        dataUrl,
        width,
        height,
        format
      });
    };
    img.onerror = reject;
    img.src = file.preview;
  });
};
function RouteComponent() {
  const [files, setFiles] = reactExports.useState([]);
  const [isDragging, setIsDragging] = reactExports.useState(false);
  const [isGenerating, setIsGenerating] = reactExports.useState(false);
  const uploadRef = reactExports.useRef(null);
  const processFiles = reactExports.useCallback((fileList) => {
    const newFiles = Array.from(fileList).filter((file) => file.type.startsWith("image/")).map((file) => ({
      id: `${Date.now()}-${Math.random()}`,
      file,
      preview: URL.createObjectURL(file),
      name: file.name
    }));
    setFiles((prev) => [...prev, ...newFiles]);
  }, []);
  reactExports.useEffect(() => {
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [files]);
  const handleFileChange = (event) => {
    if (event.target.files) {
      processFiles(event.target.files);
    }
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
    if (e.dataTransfer.files) {
      processFiles(e.dataTransfer.files);
    }
  };
  const handleRemoveFile = (id) => {
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
      uploadRef.current.value = "";
    }
  };
  const handleConvertToPdf = async () => {
    if (files.length === 0) return;
    setIsGenerating(true);
    try {
      const doc = new jspdf_node_minExports.jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (i > 0) {
          doc.addPage();
        }
        const {
          dataUrl,
          width,
          height,
          format
        } = await processImageForPdf(file);
        const ratio = Math.min(pageWidth / width, pageHeight / height);
        const finalWidth = width * ratio;
        const finalHeight = height * ratio;
        const x = (pageWidth - finalWidth) / 2;
        const y = (pageHeight - finalHeight) / 2;
        doc.addImage(dataUrl, format, x, y, finalWidth, finalHeight);
      }
      doc.save("converted-images.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-gray-800 to-slate-900 pt-24 pb-8 px-4 flex flex-col items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-4xl flex-1 flex flex-col items-center justify-center mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-bold text-gray-100 mb-2", children: [
          "Image to ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-400", children: "PDF" }),
          " Converter"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-md text-gray-200", children: "Convert multiple images into a single PDF. Drag and drop to reorder pages. 100% private." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 w-full p-6 shadow-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { onDragOver: handleDragOver, onDragLeave: handleDragLeave, onDrop: handleDrop, className: `border-3 border-dashed rounded-xl p-8 text-center transition-all duration-300 mb-6 ${isDragging ? "border-blue-500 bg-blue-900/20" : "border-gray-600 hover:border-blue-400 hover:bg-gray-700/50"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(IconCloudUpload, { className: `w-16 h-16 ${isDragging ? "text-blue-500" : "text-gray-400"} transition-colors` }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-medium text-gray-100 mb-2", children: isDragging ? "Drop images here" : "Drag & drop images here" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 mb-4 text-sm", children: "Supports JPG, PNG, WebP, etc." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => uploadRef.current?.click(), className: "px-6 py-2.5 bg-blue-700 text-blue-100 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5", children: "Select Images" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", multiple: true, accept: "image/*", ref: uploadRef, className: "hidden", onChange: handleFileChange })
        ] }),
        files.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center bg-gray-900/50 p-4 rounded-lg border border-gray-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gray-300 font-medium", children: [
              files.length,
              " pages ready"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleClearAll, className: "px-4 py-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors text-sm font-medium flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(IconTrash, { className: "w-4 h-4" }),
                "Clear All"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleConvertToPdf, disabled: isGenerating, className: "px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors font-medium shadow-md flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed", children: isGenerating ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" }),
                "Generating..."
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(IconFileTypePdf, { className: "w-5 h-5" }),
                "Convert to PDF"
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-900/30 rounded-xl p-4 border border-gray-700/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-xs mb-3 text-center uppercase tracking-wider font-semibold", children: "Drag to Reorder Pages" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ReorderGroup, { axis: "y", values: files, onReorder: setFiles, className: "space-y-2", children: files.map((file) => /* @__PURE__ */ jsxRuntimeExports.jsxs(ReorderItem, { value: file, className: "bg-gray-800 rounded-lg border border-gray-700 p-3 flex items-center gap-4 cursor-grab active:cursor-grabbing shadow-sm hover:shadow-md transition-shadow", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-6 flex flex-col items-center justify-center gap-1 text-gray-500", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-1 rounded-full bg-current" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-1 rounded-full bg-current" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-1 rounded-full bg-current" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-gray-900 rounded overflow-hidden flex-shrink-0 border border-gray-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: file.preview, alt: "", className: "w-full h-full object-cover" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-200 text-sm font-medium truncate", children: file.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-500 text-xs text-nowrap mt-0.5", children: [
                  (file.file.size / 1024).toFixed(1),
                  " KB"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleRemoveFile(file.id), className: "p-2 text-gray-500 hover:text-red-400 hover:bg-red-500/10 rounded-full transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconX, { className: "w-5 h-5" }) })
            ] }, file.id)) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ToolInfo, { title: "Image to PDF Converter", description: "Our Image to PDF Converter allows you to merge multiple images into a professional PDF document. Perfect for creating portfolios, combining receipts, or preparing documents for upload, all while maintaining complete privacy for your sensitive files.", features: [{
      title: "Custom Page Order",
      description: "Intuitive drag-and-drop interface lets you rearrange pages to your exact specifications.",
      icon: IconArrowsSort
    }, {
      title: "Universal Format",
      description: "Generates standard PDF files compatible with all devices and operating systems.",
      icon: IconFileTypePdf
    }, {
      title: "Secure & Private",
      description: "The entire PDF generation process happens in your browser. No files are uploaded to any server.",
      icon: IconLock
    }], steps: [{
      title: "Add Images",
      description: "Upload all the images you want to include in your PDF document."
    }, {
      title: "Arrange Order",
      description: "Drag the thumbnails to change the order in which they appear in the final PDF."
    }, {
      title: "Convert Process",
      description: 'Click "Convert to PDF" to start the local generation process. It takes only seconds.'
    }, {
      title: "Save PDF",
      description: "Your browser will automatically prompt you to save the newly created PDF document."
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-400 text-xs", children: [
      "Crafted with care by",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://sidme.vercel.app/", target: "_blank", rel: "noopener noreferrer", className: "text-blue-400 hover:text-blue-300 transition-colors", children: "sidme" })
    ] }) })
  ] });
}
export {
  RouteComponent as component
};
