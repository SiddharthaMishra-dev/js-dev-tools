import { r as reactExports, j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { J as JSZip } from "../_libs/jszip.mjs";
import { T as ToolInfo, R as RelatedTools } from "./RelatedTools-DTNS2BMY.mjs";
import { p as IconCloudUpload, n as IconDownload, w as IconCircleX, x as IconBox, t as IconLock, y as IconArrowsExchange } from "../_chunks/_libs/@tabler/icons-react.mjs";
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
import "../_chunks/_libs/@tanstack/react-router.mjs";
import "../_libs/tiny-warning.mjs";
import "../_chunks/_libs/@tanstack/router-core.mjs";
import "../_chunks/_libs/@tanstack/history.mjs";
import "../_libs/tiny-invariant.mjs";
import "node:stream/web";
import "node:stream";
import "../_chunks/_libs/react-dom.mjs";
import "crypto";
import "async_hooks";
import "../_libs/isbot.mjs";
import "./tools-Bi7NLZcF.mjs";
function RouteComponent() {
  const uploadRef = reactExports.useRef(null);
  const [selectedFormat, setSelectedFormat] = reactExports.useState("png");
  const [conversions, setConversions] = reactExports.useState([]);
  const [isDragging, setIsDragging] = reactExports.useState(false);
  const [isConverting, setIsConverting] = reactExports.useState(false);
  const [isDownloadingZip, setIsDownloadingZip] = reactExports.useState(false);
  const supportedFormats = [{
    value: "png",
    label: "PNG",
    mime: "image/png"
  }, {
    value: "jpeg",
    label: "JPEG",
    mime: "image/jpeg"
  }, {
    value: "webp",
    label: "WebP",
    mime: "image/webp"
  }, {
    value: "avif",
    label: "AVIF",
    mime: "image/avif"
  }];
  const processFiles = reactExports.useCallback((files) => {
    const fileArray = Array.from(files);
    const validFiles = fileArray.filter((file) => file.type.startsWith("image/"));
    if (validFiles.length === 0) {
      alert("Please select valid image files");
      return;
    }
    const newConversions = validFiles.map((file, index) => ({
      id: `${Date.now()}-${index}`,
      file,
      name: file.name,
      originalFormat: file.type.split("/")[1]?.toUpperCase() || "Unknown",
      status: "pending",
      preview: URL.createObjectURL(file),
      ext: file.name.split(".").pop()?.toLowerCase() || "jpg"
    }));
    setConversions(newConversions);
  }, []);
  const handleFileUpload = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      processFiles(files);
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
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      processFiles(files);
    }
  };
  const convertImage = async (item) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        try {
          const canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext("2d");
          if (!ctx) {
            reject(new Error("Failed to get canvas context"));
            return;
          }
          ctx.drawImage(img, 0, 0);
          const targetFormat = supportedFormats.find((f) => f.value === selectedFormat);
          if (!targetFormat) {
            reject(new Error("Unsupported format"));
            return;
          }
          canvas.toBlob((blob) => {
            if (blob) {
              const downloadUrl = URL.createObjectURL(blob);
              setConversions((prev) => prev.map((conv) => conv.id === item.id ? {
                ...conv,
                status: "completed",
                downloadUrl,
                blob
              } : conv));
              resolve();
            } else {
              reject(new Error("Failed to convert image"));
            }
          }, targetFormat.mime, 0.9);
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
      img.src = URL.createObjectURL(item.file);
    });
  };
  const handleConvertAll = async (itemsToConvert) => {
    if (itemsToConvert.length === 0) return;
    setIsConverting(true);
    for (const item of itemsToConvert) {
      try {
        setConversions((prev) => prev.map((conv) => conv.id === item.id ? {
          ...conv,
          status: "converting"
        } : conv));
        await convertImage(item);
      } catch (error) {
        setConversions((prev) => prev.map((conv) => conv.id === item.id ? {
          ...conv,
          status: "error",
          error: error.message
        } : conv));
      }
    }
    setIsConverting(false);
  };
  const downloadFile = (item) => {
    if (!item.downloadUrl) return;
    const link = document.createElement("a");
    link.href = item.downloadUrl;
    link.download = `${item.name.split(".")[0]}.${selectedFormat}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const downloadAllAsZip = async () => {
    const completedFiles = conversions.filter((item) => item.status === "completed" && item.blob);
    if (completedFiles.length === 0) {
      alert("No converted files available for download");
      return;
    }
    setIsDownloadingZip(true);
    try {
      const zip = new JSZip();
      for (const item of completedFiles) {
        if (item.blob) {
          const fileName = `${item.name.split(".")[0]}.${selectedFormat}`;
          zip.file(fileName, item.blob);
        }
      }
      const zipBlob = await zip.generateAsync({
        type: "blob"
      });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(zipBlob);
      link.download = `converted_images_${selectedFormat.toUpperCase()}_${Date.now()}.zip`;
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
  const clearAll = () => {
    conversions.forEach((item) => {
      if (item.downloadUrl) {
        URL.revokeObjectURL(item.downloadUrl);
      }
      if (item.preview) {
        URL.revokeObjectURL(item.preview);
      }
    });
    setConversions([]);
    if (uploadRef.current) {
      uploadRef.current.value = "";
    }
  };
  reactExports.useEffect(() => {
    const pendingItems = conversions.filter((item) => item.status === "pending");
    if (pendingItems.length > 0 && !isConverting) {
      handleConvertAll(pendingItems);
    }
  }, [conversions, isConverting]);
  reactExports.useEffect(() => {
    if (conversions.length > 0) {
      setConversions((prev) => prev.map((item) => {
        if (item.downloadUrl) URL.revokeObjectURL(item.downloadUrl);
        return {
          ...item,
          status: "pending",
          downloadUrl: void 0,
          blob: void 0
        };
      }));
    }
  }, [selectedFormat]);
  const completedCount = conversions.filter((item) => item.status === "completed").length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-gray-800 to-slate-900 pt-24 pb-8 px-4 flex flex-col items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-6xl flex-1 flex flex-col items-center justify-center mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-bold text-gray-100 mb-2", children: [
          "Image ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-primary", children: "Format" }),
          " Converter"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-md text-gray-200", children: "Convert images between formats instantly. Batch support. No uploads—100% private." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-800 rounded-xl shadow-lg p-4 sm:p-8 mb-6 w-full max-w-5xl", children: conversions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onDragOver: handleDragOver, onDragLeave: handleDragLeave, onDrop: handleDrop, className: `border-3 border-dashed rounded-lg p-12 text-center transition-all duration-300 ${isDragging ? "border-brand-primary bg-brand-primary/20" : "border-gray-600 hover:border-brand-primary/40 hover:bg-gray-700"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconCloudUpload, { className: `w-16 h-16 ${isDragging ? "text-brand-primary" : "text-gray-400"} transition-colors` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-medium text-gray-100 mb-2", children: isDragging ? "Drop your images here" : "Drag & drop your images here" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 mb-4", children: "or" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => uploadRef.current?.click(), className: "text-sm px-3 py-2 bg-brand-primary text-white rounded-lg hover:bg-brand-hover transition-colors duration-200 font-medium shadow-md hover:shadow-lg", children: "Choose Files" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-gray-400 text-xs mt-3 flex items-center justify-center gap-1", children: "🔒 Your files stay on your device. Nothing is uploaded to any server." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: "image/*", ref: uploadRef, className: "hidden", multiple: true, onChange: handleFileUpload })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-100 mb-4", children: "Conversion Settings" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-200 mb-2", children: "Convert to:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: selectedFormat, onChange: (e) => setSelectedFormat(e.target.value), className: "px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-primary", children: supportedFormats.map((format) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: format.value, className: "bg-gray-700", children: format.label }, format.value)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex justify-between items-center mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-semibold text-gray-100 mb-4", children: [
            "Files (",
            conversions.length,
            ")"
          ] }),
          conversions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex space-x-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: clearAll, className: "px-4 py-2 text-red-400 hover:bg-red-900/20 rounded-lg transition-colors duration-200", children: "Clear All" }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: conversions.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border border-gray-600 rounded-lg bg-gray-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mr-4 flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.preview, alt: item.name, className: "w-16 h-16 object-contain rounded-md" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-gray-100 truncate", children: item.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs px-2 py-1 bg-gray-600 text-gray-300 rounded", children: [
                item.originalFormat,
                " → ",
                selectedFormat.toUpperCase()
              ] })
            ] }),
            item.error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-red-400 mt-1", children: item.error })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-3 ml-4", children: [
            item.status === "pending" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400 text-sm", children: "Pending" }),
            item.status === "converting" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4 h-4 border-2 border-brand-primary border-t-transparent rounded-full animate-spin" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-primary text-sm", children: "Converting..." })
            ] }),
            item.status === "completed" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center space-x-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => downloadFile(item), className: "px-3 py-1 bg-green-700 text-green-100 text-sm rounded hover:bg-green-600 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconDownload, { className: "w-4 h-4" }) }) }),
            item.status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(IconCircleX, { className: "w-4 h-4 text-red-400" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-400 text-sm", children: "Failed" })
            ] })
          ] })
        ] }, item.id)) }),
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-400 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("sup", { children: "*" }),
        "All major formats supported: JPG, PNG, GIF, SVG, WebP & AVIF."
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ToolInfo, { title: "Image Format Converter", description: "Our Image Format Converter allows you to seamlessly switch between popular image formats like JPEG, PNG, WebP, and AVIF. Whether you need to optimize for web performance with WebP/AVIF or maintain maximum compatibility with JPEG, this tool provides a fast and private solution directly in your browser.", features: [{
      title: "Batch Processing",
      description: "Convert multiple images at once and download them all as a single ZIP file, saving you valuable time.",
      icon: IconBox
    }, {
      title: "Client-Side Only",
      description: "Conversions are performed entirely on your machine. Your private images never touch our servers.",
      icon: IconLock
    }, {
      title: "High Compatibility",
      description: "Convert between all modern web formats including PNG, JPG, WebP, and the next-gen AVIF format.",
      icon: IconArrowsExchange
    }], steps: [{
      title: "Upload Images",
      description: "Drag and drop one or more images into the upload area or click select."
    }, {
      title: "Select Target Format",
      description: "Choose your desired output format (PNG, JPEG, WebP, or AVIF) from the dropdown."
    }, {
      title: "Automatic Conversion",
      description: "The tool will instantly begin converting each image to your chosen format."
    }, {
      title: "Download Results",
      description: "Download individual converted images or grab everything at once as a ZIP archive."
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RelatedTools, { currentToolSlug: "image-format-converter", category: "Images" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-400 text-xs text-center", children: [
      "Crafted with care by",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://sidme.vercel.app/", target: "_blank", rel: "noopener noreferrer", className: "text-brand-primary hover:text-brand-hover transition-colors", children: "sidme" })
    ] }) })
  ] });
}
export {
  RouteComponent as component
};
