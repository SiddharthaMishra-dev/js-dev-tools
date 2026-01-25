import { r as reactExports, j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { T as ToolInfo } from "./ToolInfo-wEwXLLd0.mjs";
import { o as IconCloudUpload, v as IconRotateClockwise, w as IconFlipHorizontal, x as IconFlipVertical, f as IconCrop, l as IconDownload, y as IconArrowsMaximize, q as IconLock } from "../_chunks/_libs/@tabler/icons-react.mjs";
function RouteComponent() {
  const canvasRef = reactExports.useRef(null);
  const fileInputRef = reactExports.useRef(null);
  const [isCrop, setIsCrop] = reactExports.useState(false);
  const [image, setImage] = reactExports.useState(null);
  const [cropArea, setCropArea] = reactExports.useState({
    x: 0,
    y: 0,
    width: 200,
    height: 200
  });
  const [isDragging, setIsDragging] = reactExports.useState(false);
  const [isResizing, setIsResizing] = reactExports.useState(null);
  const [dragOffset, setDragOffset] = reactExports.useState({
    x: 0,
    y: 0
  });
  const [imageDimensions, setImageDimensions] = reactExports.useState({
    width: 0,
    height: 0
  });
  const [rotation, setRotation] = reactExports.useState(0);
  const [flipHorizontal, setFlipHorizontal] = reactExports.useState(false);
  const [flipVertical, setFlipVertical] = reactExports.useState(false);
  const [isUploading, setIsUploading] = reactExports.useState(false);
  const [scale, setScale] = reactExports.useState(1);
  const handleFileUpload = (event) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setIsUploading(true);
      const img = new Image();
      img.onload = () => {
        setImage(img);
        setImageDimensions({
          width: img.width,
          height: img.height
        });
        const initialSize = Math.min(img.width, img.height, 300);
        setCropArea({
          x: (img.width - initialSize) / 2,
          y: (img.height - initialSize) / 2,
          width: initialSize,
          height: initialSize
        });
        setIsUploading(false);
      };
      img.src = URL.createObjectURL(file);
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
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setIsUploading(true);
      const img = new Image();
      img.onload = () => {
        setImage(img);
        setImageDimensions({
          width: img.width,
          height: img.height
        });
        const initialSize = Math.min(img.width, img.height, 300);
        setCropArea({
          x: (img.width - initialSize) / 2,
          y: (img.height - initialSize) / 2,
          width: initialSize,
          height: initialSize
        });
        setIsUploading(false);
      };
      img.src = URL.createObjectURL(file);
    }
  };
  const handleCropVisible = () => {
    setIsCrop(!isCrop);
    if (!isCrop && image) {
      const initialSize = Math.min(image.width, image.height, 300);
      setCropArea({
        x: (image.width - initialSize) / 2,
        y: (image.height - initialSize) / 2,
        width: initialSize,
        height: initialSize
      });
    }
  };
  const drawCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas || !image) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const maxWidth = 720;
    const maxHeight = 480;
    const calculatedScale = Math.min(maxWidth / image.width, maxHeight / image.height, 1);
    setScale(calculatedScale);
    const displayWidth = image.width * calculatedScale;
    const displayHeight = image.height * calculatedScale;
    canvas.width = displayWidth;
    canvas.height = displayHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(rotation * Math.PI / 180);
    ctx.scale(flipHorizontal ? -1 : 1, flipVertical ? -1 : 1);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);
    ctx.drawImage(image, 0, 0, displayWidth, displayHeight);
    ctx.restore();
    if (!isCrop) return;
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const cropX = cropArea.x * calculatedScale;
    const cropY = cropArea.y * calculatedScale;
    const cropWidth = cropArea.width * calculatedScale;
    const cropHeight = cropArea.height * calculatedScale;
    ctx.clearRect(cropX, cropY, cropWidth, cropHeight);
    ctx.save();
    ctx.translate(cropX + cropWidth / 2, cropY + cropHeight / 2);
    ctx.rotate(rotation * Math.PI / 180);
    ctx.scale(flipHorizontal ? -1 : 1, flipVertical ? -1 : 1);
    ctx.translate(-(cropWidth / 2), -(cropHeight / 2));
    ctx.drawImage(image, cropArea.x, cropArea.y, cropArea.width, cropArea.height, 0, 0, cropWidth, cropHeight);
    ctx.restore();
    ctx.strokeStyle = "#f59e0b";
    ctx.lineWidth = 2;
    ctx.strokeRect(cropX, cropY, cropWidth, cropHeight);
    const handleSize = 10;
    ctx.fillStyle = "#f59e0b";
    ctx.fillRect(cropX - handleSize / 2, cropY - handleSize / 2, handleSize, handleSize);
    ctx.fillRect(cropX + cropWidth - handleSize / 2, cropY - handleSize / 2, handleSize, handleSize);
    ctx.fillRect(cropX - handleSize / 2, cropY + cropHeight - handleSize / 2, handleSize, handleSize);
    ctx.fillRect(cropX + cropWidth - handleSize / 2, cropY + cropHeight - handleSize / 2, handleSize, handleSize);
    ctx.fillRect(cropX + cropWidth / 2 - handleSize / 2, cropY - handleSize / 2, handleSize, handleSize);
    ctx.fillRect(cropX + cropWidth / 2 - handleSize / 2, cropY + cropHeight - handleSize / 2, handleSize, handleSize);
    ctx.fillRect(cropX - handleSize / 2, cropY + cropHeight / 2 - handleSize / 2, handleSize, handleSize);
    ctx.fillRect(cropX + cropWidth - handleSize / 2, cropY + cropHeight / 2 - handleSize / 2, handleSize, handleSize);
  };
  reactExports.useEffect(() => {
    if (image) {
      drawCanvas();
    }
  }, [image, cropArea, rotation, flipHorizontal, flipVertical, isCrop]);
  const getMousePos = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return {
      x: 0,
      y: 0
    };
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };
  const getResizeHandle = (mousePos) => {
    if (!image || !isCrop) return null;
    const cropX = cropArea.x * scale;
    const cropY = cropArea.y * scale;
    const cropWidth = cropArea.width * scale;
    const cropHeight = cropArea.height * scale;
    const handleSize = 10;
    const tolerance = handleSize / 2;
    const handles = {
      "top-left": {
        x: cropX,
        y: cropY
      },
      "top-right": {
        x: cropX + cropWidth,
        y: cropY
      },
      "bottom-left": {
        x: cropX,
        y: cropY + cropHeight
      },
      "bottom-right": {
        x: cropX + cropWidth,
        y: cropY + cropHeight
      },
      top: {
        x: cropX + cropWidth / 2,
        y: cropY
      },
      bottom: {
        x: cropX + cropWidth / 2,
        y: cropY + cropHeight
      },
      left: {
        x: cropX,
        y: cropY + cropHeight / 2
      },
      right: {
        x: cropX + cropWidth,
        y: cropY + cropHeight / 2
      }
    };
    for (const [handle, pos] of Object.entries(handles)) {
      if (mousePos.x >= pos.x - tolerance && mousePos.x <= pos.x + tolerance && mousePos.y >= pos.y - tolerance && mousePos.y <= pos.y + tolerance) {
        return handle;
      }
    }
    return null;
  };
  const handleMouseDown = (e) => {
    if (!isCrop) return;
    const mousePos = getMousePos(e);
    const handle = getResizeHandle(mousePos);
    if (handle) {
      setIsResizing(handle);
      e.preventDefault();
    } else {
      if (!image) return;
      const cropX = cropArea.x * scale;
      const cropY = cropArea.y * scale;
      const cropWidth = cropArea.width * scale;
      const cropHeight = cropArea.height * scale;
      if (mousePos.x >= cropX && mousePos.x <= cropX + cropWidth && mousePos.y >= cropY && mousePos.y <= cropY + cropHeight) {
        setIsDragging(true);
        setDragOffset({
          x: mousePos.x - cropX,
          y: mousePos.y - cropY
        });
        e.preventDefault();
      }
    }
  };
  const handleMouseMove = (e) => {
    if (!image || !isCrop) return;
    const mousePos = getMousePos(e);
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (isResizing) {
      const newCropArea = {
        ...cropArea
      };
      const mouseX = mousePos.x / scale;
      const mouseY = mousePos.y / scale;
      switch (isResizing) {
        case "top-left":
          newCropArea.width += newCropArea.x - mouseX;
          newCropArea.height += newCropArea.y - mouseY;
          newCropArea.x = mouseX;
          newCropArea.y = mouseY;
          break;
        case "top-right":
          newCropArea.width = mouseX - newCropArea.x;
          newCropArea.height += newCropArea.y - mouseY;
          newCropArea.y = mouseY;
          break;
        case "bottom-left":
          newCropArea.width += newCropArea.x - mouseX;
          newCropArea.height = mouseY - newCropArea.y;
          newCropArea.x = mouseX;
          break;
        case "bottom-right":
          newCropArea.width = mouseX - newCropArea.x;
          newCropArea.height = mouseY - newCropArea.y;
          break;
        case "top":
          newCropArea.height += newCropArea.y - mouseY;
          newCropArea.y = mouseY;
          break;
        case "bottom":
          newCropArea.height = mouseY - newCropArea.y;
          break;
        case "left":
          newCropArea.width += newCropArea.x - mouseX;
          newCropArea.x = mouseX;
          break;
        case "right":
          newCropArea.width = mouseX - newCropArea.x;
          break;
      }
      newCropArea.x = Math.max(0, Math.min(newCropArea.x, image.width - 20));
      newCropArea.y = Math.max(0, Math.min(newCropArea.y, image.height - 20));
      newCropArea.width = Math.max(20, Math.min(newCropArea.width, image.width - newCropArea.x));
      newCropArea.height = Math.max(20, Math.min(newCropArea.height, image.height - newCropArea.y));
      setCropArea(newCropArea);
    } else if (isDragging) {
      const newX = (mousePos.x - dragOffset.x) / scale;
      const newY = (mousePos.y - dragOffset.y) / scale;
      setCropArea({
        ...cropArea,
        x: Math.max(0, Math.min(newX, image.width - cropArea.width)),
        y: Math.max(0, Math.min(newY, image.height - cropArea.height))
      });
    } else {
      const handle = getResizeHandle(mousePos);
      if (handle) {
        const cursors = {
          "top-left": "nw-resize",
          "top-right": "ne-resize",
          "bottom-left": "sw-resize",
          "bottom-right": "se-resize",
          top: "n-resize",
          bottom: "s-resize",
          left: "w-resize",
          right: "e-resize"
        };
        canvas.style.cursor = cursors[handle];
      } else {
        const cropX = cropArea.x * scale;
        const cropY = cropArea.y * scale;
        const cropWidth = cropArea.width * scale;
        const cropHeight = cropArea.height * scale;
        if (mousePos.x >= cropX && mousePos.x <= cropX + cropWidth && mousePos.y >= cropY && mousePos.y <= cropY + cropHeight) {
          canvas.style.cursor = "move";
        } else {
          canvas.style.cursor = "default";
        }
      }
    }
  };
  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(null);
  };
  const downloadCroppedImage = () => {
    if (!image || !isCrop) return;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = cropArea.width;
    canvas.height = cropArea.height;
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(rotation * Math.PI / 180);
    ctx.scale(flipHorizontal ? -1 : 1, flipVertical ? -1 : 1);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);
    ctx.drawImage(image, cropArea.x, cropArea.y, cropArea.width, cropArea.height, 0, 0, cropArea.width, cropArea.height);
    ctx.restore();
    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `cropped_image_${Date.now()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }
    });
  };
  const resetImage = () => {
    setImage(null);
    setCropArea({
      x: 0,
      y: 0,
      width: 200,
      height: 200
    });
    setRotation(0);
    setFlipHorizontal(false);
    setFlipVertical(false);
    setIsCrop(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-gray-800 to-slate-900 pt-24 pb-8 px-4 flex flex-col items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-6xl flex-1 flex flex-col items-center justify-center mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-bold text-gray-100 mb-2", children: [
          "Image ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-200", children: "Cropper" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-md text-gray-200", children: "Crop, resize, rotate & flip with precision. 100% private—nothing leaves your browser." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-800 rounded-xl shadow-lg p-8 mb-6 w-full max-w-5xl", children: !image ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { onDragOver: handleDragOver, onDragLeave: handleDragLeave, onDrop: handleDrop, className: `border-3 border-dashed rounded-lg p-12 text-center transition-all duration-300 ${isDragging ? "border-amber-500 bg-amber-900/20" : "border-gray-600 hover:border-amber-400 hover:bg-gray-700"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconCloudUpload, { className: `w-16 h-16 ${isDragging ? "text-amber-500" : "text-gray-400"} transition-colors` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-medium text-gray-100 mb-2", children: isDragging ? "Drop your image here" : "Drag & drop your image here" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 mb-4", children: "or" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => fileInputRef.current?.click(), disabled: isUploading, className: "text-sm px-3 py-2 bg-amber-700 text-amber-100 rounded-lg hover:bg-amber-600 disabled:opacity-50 transition-colors duration-200 font-medium shadow-md hover:shadow-lg", children: isUploading ? "Loading..." : "Choose Image" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-gray-400 text-xs mt-3 flex items-center justify-center gap-1", children: "🔒 Your files stay on your device. Nothing is uploaded to any server." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", accept: "image/*", ref: fileInputRef, className: "hidden", onChange: handleFileUpload })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-gray-100 mb-4", children: "Crop Controls" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-4 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setRotation((prev) => (prev + 90) % 360), className: "flex items-center space-x-2 px-3 py-2 bg-gray-700 text-gray-100 rounded-lg hover:bg-gray-600 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(IconRotateClockwise, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Rotate" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setFlipHorizontal(!flipHorizontal), className: `flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${flipHorizontal ? "bg-amber-700 text-amber-100" : "bg-gray-700 text-gray-100 hover:bg-gray-600"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(IconFlipHorizontal, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Flip H" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setFlipVertical(!flipVertical), className: `flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${flipVertical ? "bg-amber-700 text-amber-100" : "bg-gray-700 text-gray-100 hover:bg-gray-600"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(IconFlipVertical, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Flip V" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleCropVisible, className: `flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${isCrop ? "bg-amber-700 text-amber-100" : "bg-gray-700 text-gray-100 hover:bg-gray-600"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(IconCrop, { className: "w-4 h-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isCrop ? "Hide Crop" : "Show Crop" })
            ] })
          ] }),
          isCrop && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-gray-300 mb-1", children: "X Position" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: Math.round(cropArea.x), onChange: (e) => setCropArea({
                ...cropArea,
                x: Math.max(0, parseInt(e.target.value) || 0)
              }), className: "w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded text-gray-100 text-sm" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-gray-300 mb-1", children: "Y Position" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: Math.round(cropArea.y), onChange: (e) => setCropArea({
                ...cropArea,
                y: Math.max(0, parseInt(e.target.value) || 0)
              }), className: "w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded text-gray-100 text-sm" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-gray-300 mb-1", children: "Width" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: Math.round(cropArea.width), onChange: (e) => setCropArea({
                ...cropArea,
                width: Math.max(20, parseInt(e.target.value) || 20)
              }), className: "w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded text-gray-100 text-sm" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-gray-300 mb-1", children: "Height" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: Math.round(cropArea.height), onChange: (e) => setCropArea({
                ...cropArea,
                height: Math.max(20, parseInt(e.target.value) || 20)
              }), className: "w-full px-2 py-1 bg-gray-700 border border-gray-600 rounded text-gray-100 text-sm" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: canvasRef, onMouseDown: handleMouseDown, onMouseMove: handleMouseMove, onMouseUp: handleMouseUp, onMouseLeave: handleMouseUp, className: "border-2 border-gray-600 rounded-lg cursor-default" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: resetImage, className: "px-4 py-2 text-red-400 hover:bg-red-900/20 rounded-lg transition-colors duration-200", children: "Clear Image" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: downloadCroppedImage, disabled: !isCrop, className: "px-6 py-2 bg-green-700 text-green-100 rounded-lg hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 font-medium shadow-md hover:shadow-lg flex items-center space-x-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(IconDownload, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Download Cropped Image" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ToolInfo, { title: "Image Cropper", description: "Our Image Cropper provides professional-grade image editing capabilities directly in your browser. Easily crop to specific aspect ratios, rotate images for better alignment, or flip them horizontally and vertically to get the perfect composition.", features: [{
        title: "Precision Editing",
        description: "Manually adjust crop coordinates and dimensions or use the intuitive on-canvas handles for visual editing.",
        icon: IconCrop
      }, {
        title: "Transformation Tools",
        description: "Rotate images in 90-degree increments and flip them along both axes with a single click.",
        icon: IconArrowsMaximize
      }, {
        title: "Zero Uploads",
        description: "Edit your photos with full confidence in your privacy. No data ever leaves your device.",
        icon: IconLock
      }], steps: [{
        title: "Upload Image",
        description: "Select an image from your device or use drag and drop to start editing."
      }, {
        title: "Toggle Crop",
        description: 'Click "Show Crop" to activate the cropping boundary on your image.'
      }, {
        title: "Adjust Boundary",
        description: "Drag the crop box or use the corner handles to select the area you want to keep."
      }, {
        title: "Save & Download",
        description: "Once satisfied, click the download button to save your perfectly cropped image."
      }] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-400 text-xs text-center", children: [
      "Crafted with care by",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://sidme.vercel.app/", target: "_blank", rel: "noopener noreferrer", className: "text-amber-200 hover:text-amber-300 transition-colors", children: "sidme" })
    ] }) })
  ] });
}
export {
  RouteComponent as component
};
