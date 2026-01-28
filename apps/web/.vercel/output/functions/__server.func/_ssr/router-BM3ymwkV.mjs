import { c as createRouter, a as createRootRoute, b as createFileRoute, l as lazyRouteComponent, H as HeadContent, S as Scripts, L as Link } from "../_chunks/_libs/@tanstack/react-router.mjs";
import { j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { I as IconApps } from "../_chunks/_libs/@tabler/icons-react.mjs";
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
const navItems = [{ path: "/tools", label: "Tools", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IconApps, { size: 18 }) }];
const Header = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "fixed top-0 left-0 right-0 z-50 bg-slate-900/70 backdrop-blur-xl border-b border-white/5 shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between h-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/",
        className: "flex items-center no-underline text-xl font-bold text-gray-100",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/logo192.png",
              alt: "Logo",
              className: "inline-block mr-2 w-8 h-8"
            }
          ),
          "JS",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-400", children: "DevTools" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 lg:gap-2", children: navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: item.path,
        className: "text-gray-300 hover:text-blue-400 hover:bg-white/5 flex items-center gap-2 px-3 py-2 no-underline text-sm font-medium rounded-lg transition-all duration-200 ease-in-out",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.label })
        ]
      },
      item.path
    )) })
  ] }) }) });
};
const appCss = "/assets/styles-CXFo7xuO.css";
const Route$a = createRootRoute({
  head: () => ({
    meta: [
      {
        title: "JS DevTools | Privacy First | 100% Client-Side Utilities"
      },
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        name: "description",
        content: "Free, private, and fast everyday tools. Convert images to Base64, compress, crop, and convert formats, format JSON and convert image to pdf instantly. 100% client-side—your data never leaves your browser."
      },
      {
        name: "keywords",
        content: "image to base64, image converter, json formatter, image compressor, csv to xlsx, online tools, offline tools, privacy first"
      },
      {
        name: "robots",
        content: "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
      },
      {
        property: "og:type",
        content: "website"
      },
      {
        property: "og:url",
        content: "https://js-devtools.sidme.dev/"
      },
      {
        property: "og:title",
        content: "JS DevTools | Privacy First | 100% Client-Side Utilities"
      },
      {
        property: "og:description",
        content: "Free, private, and fast tools. 100% client-side—your data never leaves your browser."
      },
      {
        property: "og:image",
        content: "https://js-devtools.sidme.dev/og.png"
      },
      {
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        name: "twitter:title",
        content: "JS DevTools | Privacy First | 100% Client-Side Utilities"
      },
      {
        name: "twitter:description",
        content: "Free, private, and fast tools. 100% client-side—your data never leaves your browser."
      },
      {
        name: "twitter:image",
        content: "https://js-devtools.sidme.dev/og.png"
      },
      {
        name: "theme-color",
        content: "#0f172a"
      }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      },
      {
        rel: "canonical",
        href: "https://js-devtools.sidme.dev/"
      }
    ]
  }),
  shellComponent: RootDocument
});
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function getSeoMetadata(config) {
  const {
    title,
    description,
    keywords,
    url,
    image = "https://js-devtools.sidme.dev/screenshot.png",
    type = "website"
  } = config;
  const baseUrl = "https://js-devtools.sidme.dev";
  const fullUrl = url.startsWith("http") ? url : `${baseUrl}${url}`;
  const meta = [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: keywords.join(", ") },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: fullUrl },
    { property: "og:image", content: image },
    { property: "og:type", content: type === "software" ? "website" : type },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
    { name: "robots", content: "index,follow" }
  ];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": type === "software" ? "SoftwareApplication" : "WebSite",
    name: title,
    description,
    url: fullUrl,
    applicationCategory: type === "software" ? "DeveloperApplication, MultimediaApplication" : void 0,
    operatingSystem: type === "software" ? "Any" : void 0,
    offers: type === "software" ? {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    } : void 0,
    author: {
      "@type": "Person",
      name: "Siddhartha Mishra",
      url: "https://sidme.vercel.app/"
    }
  };
  return {
    meta,
    links: [{ rel: "canonical", href: fullUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd)
      }
    ]
  };
}
const $$splitComponentImporter$9 = () => import("./word-counter-BA-zfqjN.mjs");
const Route$9 = createFileRoute("/word-counter")({
  head: () => getSeoMetadata({
    title: "Word Counter | Count Words, Characters & Sentences | JS DevTools",
    description: "Analyze your text instantly with our privacy-first Word Counter. Get word, character, and sentence counts plus reading time estimation. 100% client-side.",
    keywords: ["word counter", "character counter", "sentence counter", "reading time estimator", "online text analyzer"],
    url: "/word-counter",
    type: "software"
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./tools-DH7WqDH2.mjs");
const Route$8 = createFileRoute("/tools")({
  head: () => getSeoMetadata({
    title: "All Tools | JS DevTools",
    description: "Browse every JS DevTools utility in one place. Image converters, compressors, croppers, JSON formatter, CSV to XLSX, and more—private and client-side.",
    keywords: ["online tools", "image tools", "json formatter", "csv to xlsx", "image compressor", "image converter", "privacy-first tools", "offline tools"],
    url: "/tools"
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./json-formatter-yuNGn0po.mjs");
const Route$7 = createFileRoute("/json-formatter")({
  head: () => getSeoMetadata({
    title: "JSON Formatter & Validator Online | JS DevTools",
    description: "Format, minify, and validate JSON data instantly. Support for single quotes and CSV export. 100% private, client-side, and secure.",
    keywords: ["json formatter", "json validator", "minify json", "json to csv", "beautify json"],
    url: "/json-formatter",
    type: "software"
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./image-to-pdf-CTAeWk2y.mjs");
const Route$6 = createFileRoute("/image-to-pdf")({
  head: () => getSeoMetadata({
    title: "Image to PDF Converter | Combine Images to PDF | JS DevTools",
    description: "Merge multiple images into a single PDF document perfectly. Drag and drop to reorder pages. 100% private and client-side PDF generation.",
    keywords: ["image to pdf", "combine images to pdf", "png to pdf", "jpg to pdf", "offline pdf converter"],
    url: "/image-to-pdf",
    type: "software"
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./image-to-base64-B_a8GKdJ.mjs");
const Route$5 = createFileRoute("/image-to-base64")({
  head: () => getSeoMetadata({
    title: "Image to Base64 Converter | JS DevTools",
    description: "Convert any image file to a Base64 encoded string instantly and securely in your browser. No uploads, 100% private.",
    keywords: ["image to base64", "base64 encoder", "data uri converter", "privacy-first tools"],
    url: "/image-to-base64",
    type: "software"
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./image-format-converter-CzwCqhqz.mjs");
const Route$4 = createFileRoute("/image-format-converter")({
  head: () => getSeoMetadata({
    title: "Image Format Converter | PNG, JPG, WebP, AVIF | JS DevTools",
    description: "Convert images between PNG, JPEG, WebP, and AVIF formats instantly. Supports batch processing and ZIP downloads. 100% private and client-side.",
    keywords: ["image converter", "png to webp", "jpg to png", "avif converter", "batch image conversion"],
    url: "/image-format-converter",
    type: "software"
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./image-cropper-BhrtkpcV.mjs");
const Route$3 = createFileRoute("/image-cropper")({
  head: () => getSeoMetadata({
    title: "Image Cropper | Crop, Rotate & Resize Images Online | JS DevTools",
    description: "Edit your images with precision. Crop, rotate, and flip images instantly in your browser. No uploads, total privacy, and pixel-perfect previews.",
    keywords: ["image cropper", "crop photos online", "rotate image", "flip image", "image editor"],
    url: "/image-cropper",
    type: "software"
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./image-compressor-B0mQjPf1.mjs");
const Route$2 = createFileRoute("/image-compressor")({
  head: () => getSeoMetadata({
    title: "Image Compressor | Reduce Image Size Online | JS DevTools",
    description: "Shrink image file sizes by up to 80% without losing quality. Support for PNG, JPEG, and WebP. 100% private, client-side, and free.",
    keywords: ["image compressor", "reduce image size", "compress png", "compress jpeg", "online image optimizer"],
    url: "/image-compressor",
    type: "software"
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./csv-xlsx-converter-CJRZ5Web.mjs");
const Route$1 = createFileRoute("/csv-xlsx-converter")({
  head: () => getSeoMetadata({
    title: "CSV to Excel (XLSX) Converter Online | JS DevTools",
    description: "Convert CSV to Excel and XLSX to CSV instantly in your browser. Batch support and 100% private. No data uploads, secure and fast.",
    keywords: ["csv to xlsx", "excel to csv", "csv to excel", "convert xlsx to csv", "online spreadsheed converter"],
    url: "/csv-xlsx-converter",
    type: "software"
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-D8vRVRG2.mjs");
const Route = createFileRoute("/")({
  head: () => getSeoMetadata({
    title: "Free Online Image & Data Tools | 100% Private, Client-Side Processing | JS DevTools",
    description: "Free online tools for developers and creators: Convert images to Base64, compress images, format JSON, convert CSV to Excel, and more. All processing happens in your browser—no uploads, no tracking, complete privacy. Fast, secure, and open-source.",
    keywords: ["free online tools", "image to base64 converter", "image compressor online", "image format converter", "json formatter validator", "csv to xlsx converter", "image to pdf converter", "privacy-first tools", "client-side processing", "offline image tools", "free developer tools", "browser-based utilities", "no upload file converter", "secure online tools"],
    url: "/"
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const WordCounterRoute = Route$9.update({
  id: "/word-counter",
  path: "/word-counter",
  getParentRoute: () => Route$a
});
const ToolsRoute = Route$8.update({
  id: "/tools",
  path: "/tools",
  getParentRoute: () => Route$a
});
const JsonFormatterRoute = Route$7.update({
  id: "/json-formatter",
  path: "/json-formatter",
  getParentRoute: () => Route$a
});
const ImageToPdfRoute = Route$6.update({
  id: "/image-to-pdf",
  path: "/image-to-pdf",
  getParentRoute: () => Route$a
});
const ImageToBase64Route = Route$5.update({
  id: "/image-to-base64",
  path: "/image-to-base64",
  getParentRoute: () => Route$a
});
const ImageFormatConverterRoute = Route$4.update({
  id: "/image-format-converter",
  path: "/image-format-converter",
  getParentRoute: () => Route$a
});
const ImageCropperRoute = Route$3.update({
  id: "/image-cropper",
  path: "/image-cropper",
  getParentRoute: () => Route$a
});
const ImageCompressorRoute = Route$2.update({
  id: "/image-compressor",
  path: "/image-compressor",
  getParentRoute: () => Route$a
});
const CsvXlsxConverterRoute = Route$1.update({
  id: "/csv-xlsx-converter",
  path: "/csv-xlsx-converter",
  getParentRoute: () => Route$a
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$a
});
const rootRouteChildren = {
  IndexRoute,
  CsvXlsxConverterRoute,
  ImageCompressorRoute,
  ImageCropperRoute,
  ImageFormatConverterRoute,
  ImageToBase64Route,
  ImageToPdfRoute,
  JsonFormatterRoute,
  ToolsRoute,
  WordCounterRoute
};
const routeTree = Route$a._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const router = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
