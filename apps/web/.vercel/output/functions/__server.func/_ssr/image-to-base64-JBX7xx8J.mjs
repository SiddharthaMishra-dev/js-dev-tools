import { r as reactExports, j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { T as ToolInfo } from "./ToolInfo-B0rIjAJQ.mjs";
import { l as IconCloudUpload, g as IconCheck, h as IconCopy, o as IconLock, p as IconBolt, q as IconFileCode } from "../_chunks/_libs/@tabler/icons-react.mjs";
function RouteComponent() {
  const imageRef = reactExports.useRef(null);
  const [isDragging, setIsDragging] = reactExports.useState(false);
  const [base64Result, setBase64Result] = reactExports.useState("");
  const [copySuccess, setCopySuccess] = reactExports.useState(false);
  const processFile = reactExports.useCallback((file) => {
    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result;
      setBase64Result(result);
      setCopySuccess(false);
    };
    reader.readAsDataURL(file);
  }, []);
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
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
    if (files[0]) {
      processFile(files[0]);
    }
  };
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(base64Result);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2e3);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-gray-800 to-slate-900 pt-24 pb-8 px-4 flex flex-col items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-5xl flex-1 flex flex-col items-center justify-center mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl font-bold text-gray-100 mb-2", children: [
          "Image to ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-400", children: "Base64" }),
          " Converter"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-md text-gray-200", children: "Convert images to Base64 instantly. 100% private—no uploads, ever." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-800 rounded-xl shadow-lg p-8 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onDragOver: handleDragOver, onDragLeave: handleDragLeave, onDrop: handleDrop, className: `border-3 border-dashed rounded-lg p-12 text-center transition-all duration-300 ${isDragging ? "border-blue-500 bg-blue-900/20" : "border-gray-600 hover:border-blue-400 hover:bg-gray-700"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconCloudUpload, { className: `w-16 h-16 ${isDragging ? "text-blue-500" : "text-gray-400"} transition-colors` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-medium text-gray-100 mb-2", children: isDragging ? "Drop your image here" : "Drag & drop your image here" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 mb-4", children: "or" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => imageRef.current?.click(), className: "text-sm px-3 py-2 bg-blue-700 text-blue-100 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium shadow-md hover:shadow-lg", children: "Select Image" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-gray-400 text-xs mt-3 flex items-center justify-center gap-1", children: "🔒 Your files stay on your device. Nothing is uploaded to any server." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: "image/*", ref: imageRef, className: "hidden", onChange: handleFileChange })
      ] }),
      base64Result && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-800 w-full max-w-4xl rounded-xl shadow-lg p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-100", children: "Base64 Data URI" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: copyToClipboard, className: `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${copySuccess ? "bg-green-800 text-green-200" : "bg-blue-700 text-blue-100 hover:bg-blue-600 shadow-md hover:shadow-lg"}`, children: copySuccess ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(IconCheck, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Copied!" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(IconCopy, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Copy" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: base64Result, readOnly: true, rows: 8, className: "w-full p-4 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500", placeholder: "Base64 data will appear here..." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-400 mt-2", children: [
          "Data size: ",
          new Blob([base64Result]).size.toLocaleString(),
          " bytes"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-400 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("sup", { children: "*" }),
        "All major formats supported: JPG, PNG, GIF, SVG, WebP & more."
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ToolInfo, { title: "Image to Base64", description: "Convert any image file into a Base64 encoded string effortlessly. Base64 encoding is widely used for embedding images directly into HTML, CSS, or JSON, reducing the number of HTTP requests and improving load times for small assets.", features: [{
      title: "100% Private",
      description: "All conversions happen locally in your browser. Your images are never uploaded to any server.",
      icon: IconLock
    }, {
      title: "Instant Results",
      description: "Get your Base64 string immediately after dropping your image. No waiting for server processing.",
      icon: IconBolt
    }, {
      title: "Format Agnostic",
      description: "Supports JPG, PNG, WebP, SVG, and GIF. Generates standard Data URIs compatible with all modern browsers.",
      icon: IconFileCode
    }], steps: [{
      title: "Select Image",
      description: "Drag and drop your image or click the select button to choose a file from your device."
    }, {
      title: "Auto-Conversion",
      description: "The tool automatically processes your image and generates the Base64 Data URI."
    }, {
      title: "Copy Result",
      description: "Click the copy button to save the Base64 string to your clipboard for use in your code."
    }, {
      title: "Use in Code",
      description: "Paste the string into your HTML src, CSS url(), or JSON data as needed."
    }] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-400 text-xs text-center", children: [
      "Crafted with care by",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://sidme.vercel.app/", target: "_blank", rel: "noopener noreferrer", className: "text-brand-primary hover:text-brand-hover transition-colors", children: "sidme" })
    ] }) })
  ] });
}
export {
  RouteComponent as component
};
