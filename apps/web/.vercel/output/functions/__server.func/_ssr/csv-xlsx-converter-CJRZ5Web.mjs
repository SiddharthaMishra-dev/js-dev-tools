import { r as reactExports, j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { r as readSync, w as writeSync, u as utils } from "../_libs/xlsx.mjs";
import { T as ToolInfo, R as RelatedTools } from "./RelatedTools-DTNS2BMY.mjs";
import { p as IconCloudUpload, i as IconFileText, E as IconFileSpreadsheet, n as IconDownload, w as IconCircleX, y as IconArrowsExchange, t as IconLock } from "../_chunks/_libs/@tabler/icons-react.mjs";
import "../_chunks/_libs/@tanstack/react-router.mjs";
import "../_libs/tiny-warning.mjs";
import "../_chunks/_libs/@tanstack/router-core.mjs";
import "../_chunks/_libs/@tanstack/history.mjs";
import "../_libs/tiny-invariant.mjs";
import "node:stream/web";
import "node:stream";
import "../_chunks/_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./tools-Bi7NLZcF.mjs";
function RouteComponent() {
  const uploadRef = reactExports.useRef(null);
  const [conversions, setConversions] = reactExports.useState([]);
  const [isDragging, setIsDragging] = reactExports.useState(false);
  const [isConverting, setIsConverting] = reactExports.useState(false);
  const processFiles = reactExports.useCallback((files) => {
    const fileArray = Array.from(files);
    const validFiles = fileArray.filter((file) => {
      const ext = file.name.split(".").pop()?.toLowerCase();
      return ext === "csv" || ext === "xlsx";
    });
    if (validFiles.length === 0) {
      alert("Please select valid CSV or XLSX files");
      return;
    }
    const newConversions = validFiles.map((file, index) => {
      const ext = file.name.split(".").pop()?.toLowerCase();
      const originalFormat = ext?.toUpperCase() || "Unknown";
      const targetFormat = ext === "csv" ? "xlsx" : "csv";
      return {
        id: `${Date.now()}-${index}`,
        file,
        name: file.name,
        originalFormat,
        targetFormat,
        status: "pending"
      };
    });
    setConversions((prev) => [...prev, ...newConversions]);
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
  const convertFile = async (item) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const data = e.target?.result;
          if (!data) {
            reject(new Error("Failed to read file"));
            return;
          }
          let outputBlob;
          let outputFileName;
          if (item.targetFormat === "xlsx") {
            const workbook = readSync(data, {
              type: "binary"
            });
            const excelBuffer = writeSync(workbook, {
              bookType: "xlsx",
              type: "array"
            });
            outputBlob = new Blob([excelBuffer], {
              type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            });
            outputFileName = item.name.replace(/\.csv$/i, ".xlsx");
          } else {
            const workbook = readSync(data, {
              type: "array"
            });
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            const csvData = utils.sheet_to_csv(worksheet);
            outputBlob = new Blob([csvData], {
              type: "text/csv"
            });
            outputFileName = item.name.replace(/\.xlsx$/i, ".csv");
          }
          const downloadUrl = URL.createObjectURL(outputBlob);
          setConversions((prev) => prev.map((conv) => conv.id === item.id ? {
            ...conv,
            status: "completed",
            downloadUrl,
            blob: outputBlob,
            name: outputFileName
          } : conv));
          resolve();
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = () => {
        reject(new Error("File reader error"));
      };
      if (item.originalFormat === "CSV") {
        reader.readAsBinaryString(item.file);
      } else {
        reader.readAsArrayBuffer(item.file);
      }
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
        await convertFile(item);
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
    link.download = item.name;
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
      uploadRef.current.value = "";
    }
  };
  reactExports.useEffect(() => {
    const pendingItems = conversions.filter((item) => item.status === "pending");
    if (pendingItems.length > 0 && !isConverting) {
      handleConvertAll(pendingItems);
    }
  }, [conversions, isConverting]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-gray-800 to-slate-900 pt-24 pb-8 px-4 flex flex-col items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-6xl flex-1 flex flex-col items-center justify-center mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-bold text-gray-100 mb-2", children: [
          "CSV ↔ XLSX ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-primary", children: "Converter" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-md text-gray-200", children: "Convert between CSV and Excel instantly. No uploads—100% private." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-800 rounded-xl shadow-lg p-4 sm:p-8 mb-6 w-full max-w-5xl", children: conversions.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onDragOver: handleDragOver, onDragLeave: handleDragLeave, onDrop: handleDrop, className: `border-3 border-dashed rounded-lg p-12 text-center transition-all duration-300 ${isDragging ? "border-brand-primary bg-brand-primary/20" : "border-gray-600 hover:border-brand-primary/40 hover:bg-gray-700"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconCloudUpload, { className: `w-16 h-16 ${isDragging ? "text-brand-primary" : "text-gray-400"} transition-colors` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-medium text-gray-100 mb-2", children: isDragging ? "Drop your files here" : "Drag & drop CSV or XLSX files here" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 mb-4", children: "or" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => uploadRef.current?.click(), className: "text-sm px-3 py-2 bg-brand-primary text-white rounded-lg hover:bg-brand-hover transition-colors duration-200 font-medium shadow-md hover:shadow-lg", children: "Choose Files" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-gray-400 text-xs mt-3 flex items-center justify-center gap-1", children: "🔒 Your files stay on your device. Nothing is uploaded to any server." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: ".csv, .xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", ref: uploadRef, className: "hidden", multiple: true, onChange: handleFileUpload })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex justify-between items-center mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-xl font-semibold text-gray-100 mb-4", children: [
            "Files (",
            conversions.length,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: clearAll, className: "px-4 py-2 text-red-400 hover:bg-red-900/20 rounded-lg transition-colors duration-200", children: "Clear All" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: conversions.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between p-4 border border-gray-600 rounded-lg bg-gray-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mr-4 flex-shrink-0", children: item.originalFormat === "CSV" ? /* @__PURE__ */ jsxRuntimeExports.jsx(IconFileText, { className: "w-10 h-10 text-brand-primary" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(IconFileSpreadsheet, { className: "w-10 h-10 text-brand-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-gray-100 truncate", children: item.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs px-2 py-1 bg-gray-600 text-gray-300 rounded", children: [
                item.originalFormat,
                " → ",
                item.targetFormat.toUpperCase()
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
            item.status === "completed" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => downloadFile(item), className: "px-3 py-1 bg-green-700 text-green-100 text-sm rounded hover:bg-green-600 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconDownload, { className: "w-4 h-4" }) }),
            item.status === "error" && /* @__PURE__ */ jsxRuntimeExports.jsx(IconCircleX, { className: "w-4 h-4 text-red-400" })
          ] })
        ] }, item.id)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ToolInfo, { title: "CSV to XLSX Converter", description: "Our CSV to XLSX Converter allows you to effortlessly switch between CSV and Excel formats. Whether you're dealing with raw data exports or structured spreadsheets, this tool provides a fast, reliable, and completely private solution.", features: [{
      title: "Two-Way Conversion",
      description: "Convert CSV to Excel (XLSX) or Excel to CSV with equal ease and accuracy.",
      icon: IconArrowsExchange
    }, {
      title: "Client-Side Only",
      description: "All processing happens in your browser. Your sensitive data never touches any server.",
      icon: IconLock
    }, {
      title: "Batch Processing",
      description: "Upload multiple files at once and convert them all simultaneously for maximum efficiency.",
      icon: IconFileSpreadsheet
    }], steps: [{
      title: "Upload Files",
      description: "Drag and drop your CSV or XLSX files into the secure drop zone."
    }, {
      title: "Automatic Detection",
      description: "The tool automatically detects the file type and prepares the conversion."
    }, {
      title: "Instant Processing",
      description: "Conversion starts immediately. No waiting for server response."
    }, {
      title: "Download Results",
      description: "Download your converted files individually with a single click."
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RelatedTools, { currentToolSlug: "csv-xlsx-converter", category: "Data" }),
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
