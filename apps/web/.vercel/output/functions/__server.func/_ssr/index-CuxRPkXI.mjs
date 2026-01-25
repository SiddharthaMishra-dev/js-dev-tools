import { j as jsxRuntimeExports, r as reactExports } from "../_chunks/_libs/react.mjs";
import { L as Link } from "../_chunks/_libs/@tanstack/react-router.mjs";
import { z as IconBrandGithub, c as IconNumber64Small, A as IconChevronRight, d as IconPhoto, e as IconBolt, f as IconCrop, g as IconBraces, q as IconLock } from "../_chunks/_libs/@tabler/icons-react.mjs";
import "../_libs/tiny-warning.mjs";
import "../_chunks/_libs/@tanstack/router-core.mjs";
import "../_chunks/_libs/@tanstack/history.mjs";
import "../_libs/tiny-invariant.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
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
        background: isHovered ? `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(251, 191, 36, 0.06), transparent 40%), rgb(31 41 55)` : void 0
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
            className: "absolute -right-4 -bottom-4 text-amber-500/15 pointer-events-none transition-opacity duration-300",
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
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(251, 191, 36, 0.15), transparent 40%)`
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
              background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(251, 191, 36, 0.4), transparent 40%)`,
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
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-gray-800 to-slate-900 flex flex-col font-sans relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-24 pb-8 px-4 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl md:text-5xl font-bold text-gray-100 mb-4", children: [
        "Privacy-First ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-200", children: "Dev Tools" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-200 max-w-2xl mx-auto mb-6", children: "Lightning-fast image and data tools. 100% client-side. No uploads. Your files never leave your browser." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#tools", className: "inline-flex items-center space-x-2 px-5 py-2.5 bg-amber-700 text-amber-100 rounded-lg hover:bg-amber-600 transition-colors duration-200 text-sm font-medium", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Explore Tools" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://github.com/SiddharthaMishra-dev/js-dev-tools", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center space-x-2 px-4 py-2 bg-gray-700 text-gray-100 rounded-lg hover:bg-gray-600 transition-colors duration-200 text-sm font-medium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconBrandGithub, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "View on GitHub" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 flex items-center justify-center px-4 pb-16 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl w-full", id: "tools", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(GlowCard, { to: "/image-to-base64", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start space-x-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-amber-700 rounded-lg flex items-center justify-center group-hover:bg-amber-600 transition-colors ease-in-out", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconNumber64Small, { className: "text-amber-200" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-300 mb-2 group-hover:text-amber-200 transition-colors", children: "Image to Base64" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-200 text-sm leading-relaxed", children: "Convert any image to Base64 instantly. Drag & drop. 100% private." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center text-amber-200 text-sm font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Try it now" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(IconChevronRight, { className: "h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(GlowCard, { to: "/image-format-converter", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start space-x-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-amber-700 rounded-lg flex items-center justify-center group-hover:bg-amber-600 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconPhoto, { className: "text-amber-200" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-300 mb-2 group-hover:text-amber-200 transition-colors", children: "Format Converter" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-200 text-sm leading-relaxed", children: "Convert PNG, JPEG, WebP & AVIF in seconds. Batch support. No uploads." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center text-amber-200 text-sm font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Try it now" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(IconChevronRight, { className: "h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(GlowCard, { to: "/image-compressor", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start space-x-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-amber-700 rounded-lg flex items-center justify-center group-hover:bg-amber-600 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconBolt, { className: "text-amber-200" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-300 mb-2 group-hover:text-amber-200 transition-colors", children: "Image Compressor" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-200 text-sm leading-relaxed", children: "Compress images up to 80% smaller. Preserve quality. Works offline." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center text-amber-200 text-sm font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Try it now" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(IconChevronRight, { className: "h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(GlowCard, { to: "/image-cropper", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start space-x-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-amber-700 rounded-lg flex items-center justify-center group-hover:bg-amber-600 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconCrop, { className: "text-amber-200" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-300 mb-2 group-hover:text-amber-200 transition-colors", children: "Image Cropper" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-200 text-sm leading-relaxed", children: "Crop, resize, rotate & flip with precision. Privacy guaranteed." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center text-amber-200 text-sm font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Try it now" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(IconChevronRight, { className: "h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(GlowCard, { to: "/json-formatter", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start space-x-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-amber-700 rounded-lg flex items-center justify-center group-hover:bg-amber-600 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconBraces, { className: "text-amber-200" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-300 mb-2 group-hover:text-amber-200 transition-colors", children: "JSON Formatter" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-200 text-sm leading-relaxed", children: "Format, validate & minify JSON instantly. Export to CSV. Zero network calls." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center text-amber-200 text-sm font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Try it now" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(IconChevronRight, { className: "h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(GlowCard, { to: "/image-to-pdf", icon: IconPhoto, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start space-x-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-amber-700 rounded-lg flex items-center justify-center group-hover:bg-amber-600 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconPhoto, { className: "text-amber-200" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-300 mb-2 group-hover:text-amber-200 transition-colors", children: "Image to PDF" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-200 text-sm leading-relaxed", children: "Convert multiple images to a single PDF instantly. Rearrange pages. 100% private." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center text-amber-200 text-sm font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Try it now" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(IconChevronRight, { className: "h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-100 mb-8", children: "Why Developers Trust JS DevTools" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-amber-700 rounded-lg flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconBolt, { className: "text-amber-200 w-6 h-6" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold text-gray-100", children: "Instant Processing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-300", children: "Everything runs in your browser—no waiting for uploads or downloads." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-amber-700 rounded-lg flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconLock, { className: "text-amber-200 w-6 h-6" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold text-gray-100", children: "Complete Privacy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-300", children: "Your files are never uploaded. Zero data collection. Privacy is non-negotiable." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-amber-700 rounded-lg flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconPhoto, { className: "text-amber-200 w-6 h-6" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold text-gray-100", children: "All Formats" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-300", children: "PNG, JPEG, WebP, AVIF, GIF, SVG—virtually any image format supported." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-amber-700 rounded-lg flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconBrandGithub, { className: "text-amber-200 w-6 h-6" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold text-gray-100", children: "100% Open Source" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-300", children: "Fully transparent codebase. Audit, fork, or contribute on GitHub." })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "pb-8 px-4 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-400 text-xs", children: [
      "Crafted with care by",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://sidme.vercel.app/", target: "_blank", rel: "noopener noreferrer", className: "text-amber-200 hover:text-amber-300 transition-colors", children: "sidme" }),
      " ",
      "•",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/SiddharthaMishra-dev/js-dev-tools", target: "_blank", rel: "noopener noreferrer", className: "text-amber-200 hover:text-amber-300 transition-colors", children: "Open Source on GitHub" })
    ] }) }) })
  ] });
}
export {
  App as component
};
