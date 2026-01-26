import { r as reactExports, j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { L as Link } from "../_chunks/_libs/@tanstack/react-router.mjs";
import { H as IconNumber64Small, J as IconPhoto, u as IconBolt, C as IconCrop, q as IconFileTypePdf, l as IconBraces, E as IconFileSpreadsheet, h as IconTypography } from "../_chunks/_libs/@tabler/icons-react.mjs";
function GlowCard({ to, children, className = "", icon: Icon }) {
  const cardRef = reactExports.useRef(null);
  const [mousePosition, setMousePosition] = reactExports.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = reactExports.useState(false);
  const handleMouseMove = reactExports.useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  }, []);
  const handleMouseEnter = reactExports.useCallback(() => {
    setIsHovered(true);
  }, []);
  const handleMouseLeave = reactExports.useCallback(() => {
    setIsHovered(false);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      ref: cardRef,
      to,
      className: `group relative bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 overflow-hidden ${className}`,
      onMouseMove: handleMouseMove,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      style: {
        background: isHovered ? `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(37, 99, 235, 0.06), transparent 40%), rgb(31 41 55)` : void 0
      },
      children: [
        Icon && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-4 -bottom-4 text-white/[0.03] transition-colors duration-300 group-hover:text-white/[0.04]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Icon,
          {
            size: 160,
            stroke: 1.5
          }
        ) }),
        Icon && isHovered && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute -right-4 -bottom-4 text-blue-500/15 pointer-events-none transition-opacity duration-300",
            style: {
              maskImage: `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
              WebkitMaskImage: `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Icon,
              {
                size: 160,
                stroke: 1.5
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-300",
            style: {
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(37, 99, 235, 0.15), transparent 40%)`
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-300",
            style: {
              opacity: isHovered ? 1 : 0,
              padding: "1px",
              background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(37, 99, 235, 0.4), transparent 40%)`,
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "xor",
              WebkitMaskComposite: "xor"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10", children })
      ]
    }
  );
}
const tools = [
  {
    slug: "image-to-base64",
    name: "Image to Base64",
    href: "/image-to-base64",
    description: "Convert images to Base64 instantly with full client-side privacy.",
    icon: IconNumber64Small,
    category: "Images",
    keywords: ["base64", "encode", "image converter", "privacy"]
  },
  {
    slug: "image-format-converter",
    name: "Format Converter",
    href: "/image-format-converter",
    description: "Convert PNG, JPEG, WebP, and AVIF in seconds. No uploads needed.",
    icon: IconPhoto,
    category: "Images",
    keywords: ["png", "jpeg", "webp", "avif", "convert"]
  },
  {
    slug: "image-compressor",
    name: "Image Compressor",
    href: "/image-compressor",
    description: "Shrink file size without losing quality. Fast, offline-friendly.",
    icon: IconBolt,
    category: "Images",
    keywords: ["compress", "optimize", "reduce size", "image"]
  },
  {
    slug: "image-cropper",
    name: "Image Cropper",
    href: "/image-cropper",
    description: "Crop, rotate, and resize images with pixel-perfect previews.",
    icon: IconCrop,
    category: "Images",
    keywords: ["crop", "resize", "rotate", "edit"]
  },
  {
    slug: "image-to-pdf",
    name: "Image to PDF",
    href: "/image-to-pdf",
    description: "Combine multiple images into a single PDF instantly, all offline.",
    icon: IconFileTypePdf,
    category: "Images",
    keywords: ["pdf", "merge", "images to pdf", "offline"]
  },
  {
    slug: "json-formatter",
    name: "JSON Formatter",
    href: "/json-formatter",
    description: "Format, validate, and minify JSON securely in your browser.",
    icon: IconBraces,
    category: "Data",
    keywords: ["json", "format", "minify", "validate"]
  },
  {
    slug: "csv-xlsx-converter",
    name: "CSV ↔ XLSX",
    href: "/csv-xlsx-converter",
    description: "Convert CSV to Excel and back with batch support and zero uploads.",
    icon: IconFileSpreadsheet,
    category: "Data",
    keywords: ["csv", "xlsx", "excel", "convert"]
  },
  {
    slug: "word-counter",
    name: "Word Counter",
    href: "/word-counter",
    description: "Count words, characters, and sentences in real-time with reading time estimation.",
    icon: IconTypography,
    category: "Data",
    keywords: ["word count", "character count", "letters", "reading time"]
  }
];
export {
  GlowCard as G,
  tools as t
};
