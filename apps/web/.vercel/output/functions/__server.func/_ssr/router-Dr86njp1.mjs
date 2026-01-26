import { c as createRouter, a as createRootRoute, b as createFileRoute, l as lazyRouteComponent, H as HeadContent, S as Scripts, L as Link } from "../_chunks/_libs/@tanstack/react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_chunks/_libs/react.mjs";
import { I as IconX, a as IconMenu2, b as IconHome, c as IconApps } from "../_chunks/_libs/@tabler/icons-react.mjs";
import "../_libs/tiny-warning.mjs";
import "../_chunks/_libs/@tanstack/router-core.mjs";
import "../_chunks/_libs/@tanstack/history.mjs";
import "../_libs/tiny-invariant.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
const navItems = [
  { path: "/", label: "Home", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IconHome, { size: 18 }) },
  { path: "/tools", label: "Tools", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IconApps, { size: 18 }) }
];
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "fixed top-0 left-0 right-0 z-50 bg-slate-900/70 backdrop-blur-xl border-b border-white/5 shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 md:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between h-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/",
          className: "no-underline text-xl font-bold text-gray-100",
          children: [
            "JS",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-400", children: "DevTools" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex gap-1 lg:gap-2", children: navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "block md:hidden bg-transparent border-none text-gray-100 cursor-pointer p-2 transition-colors hover:text-blue-400",
          onClick: () => setIsMenuOpen(!isMenuOpen),
          "aria-label": "Toggle menu",
          children: isMenuOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(IconX, { size: 24 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(IconMenu2, { size: 24 })
        }
      )
    ] }),
    isMenuOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden flex flex-col gap-1 py-4 border-t border-white/5", children: navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: item.path,
        onClick: () => setIsMenuOpen(false),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.label })
        ]
      },
      item.path
    )) })
  ] }) });
};
const appCss = "/assets/styles-CK8B2TOB.css";
const Route$9 = createRootRoute({
  head: () => ({
    title: "JS DevTools | Privacy First | 100% Client-Side Utilities",
    meta: [
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
        content: "https://js-devtools.sidme.dev/screenshot.png"
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
        content: "https://js-devtools.sidme.dev/screenshot.png"
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
const $$splitComponentImporter$8 = () => import("./tools-RNi93O0n.mjs");
const Route$8 = createFileRoute("/tools")({
  head: () => ({
    title: "All Tools | JS DevTools",
    meta: [{
      name: "description",
      content: "Browse every JS DevTools utility in one place. Image converters, compressors, croppers, JSON formatter, CSV to XLSX, and more—private and client-side."
    }, {
      name: "keywords",
      content: "online tools,image tools,json formatter,csv to xlsx,image compressor,image converter,privacy-first tools,offline tools"
    }, {
      property: "og:title",
      content: "All Tools | JS DevTools"
    }, {
      property: "og:description",
      content: "Explore every privacy-first tool from JS DevTools. No uploads, no accounts, fully open source."
    }, {
      property: "og:url",
      content: "https://js-devtools.sidme.dev/tools"
    }, {
      property: "og:image",
      content: "https://js-devtools.sidme.dev/screenshot.png"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "All Tools | JS DevTools"
    }, {
      name: "twitter:description",
      content: "Discover the full catalog of privacy-first image and data utilities by JS DevTools."
    }],
    links: [{
      rel: "canonical",
      href: "https://js-devtools.sidme.dev/tools"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./json-formatter-BJoOjhuX.mjs");
const Route$7 = createFileRoute("/json-formatter")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./image-to-pdf-Do_xdXuS.mjs");
const Route$6 = createFileRoute("/image-to-pdf")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./image-to-base64-JBX7xx8J.mjs");
const Route$5 = createFileRoute("/image-to-base64")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./image-format-converter-BEbENAK4.mjs");
const Route$4 = createFileRoute("/image-format-converter")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./image-cropper-CtDM4qGd.mjs");
const Route$3 = createFileRoute("/image-cropper")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./image-compressor-DVQrI46Y.mjs");
const Route$2 = createFileRoute("/image-compressor")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./csv-xlsx-converter-DUC3lzxM.mjs");
const Route$1 = createFileRoute("/csv-xlsx-converter")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-DOAlJcJ0.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    title: "JS DevTools | Privacy-first online tools for everyone",
    meta: [{
      name: "description",
      content: "All-in-one, privacy-first tools for images and data. Convert, compress, crop, format JSON, and more—100% client-side with zero uploads."
    }, {
      name: "keywords",
      content: "online tools,image to base64,image compressor,image converter,json formatter,csv to xlsx,privacy-first tools,client-side utilities"
    }, {
      property: "og:title",
      content: "JS DevTools | Privacy-first online tools for everyone"
    }, {
      property: "og:description",
      content: "Do more with secure, offline-friendly image and data tools. Everything runs in your browser."
    }, {
      property: "og:url",
      content: "https://js-devtools.sidme.dev/"
    }, {
      property: "og:image",
      content: "https://js-devtools.sidme.dev/screenshot.png"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:title",
      content: "JS DevTools | Privacy-first online tools for everyone"
    }, {
      name: "twitter:description",
      content: "All your essential image and data tools in one place. Private by design, open source by default."
    }, {
      name: "twitter:image",
      content: "https://js-devtools.sidme.dev/screenshot.png"
    }, {
      name: "robots",
      content: "index,follow"
    }],
    links: [{
      rel: "canonical",
      href: "https://js-devtools.sidme.dev/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ToolsRoute = Route$8.update({
  id: "/tools",
  path: "/tools",
  getParentRoute: () => Route$9
});
const JsonFormatterRoute = Route$7.update({
  id: "/json-formatter",
  path: "/json-formatter",
  getParentRoute: () => Route$9
});
const ImageToPdfRoute = Route$6.update({
  id: "/image-to-pdf",
  path: "/image-to-pdf",
  getParentRoute: () => Route$9
});
const ImageToBase64Route = Route$5.update({
  id: "/image-to-base64",
  path: "/image-to-base64",
  getParentRoute: () => Route$9
});
const ImageFormatConverterRoute = Route$4.update({
  id: "/image-format-converter",
  path: "/image-format-converter",
  getParentRoute: () => Route$9
});
const ImageCropperRoute = Route$3.update({
  id: "/image-cropper",
  path: "/image-cropper",
  getParentRoute: () => Route$9
});
const ImageCompressorRoute = Route$2.update({
  id: "/image-compressor",
  path: "/image-compressor",
  getParentRoute: () => Route$9
});
const CsvXlsxConverterRoute = Route$1.update({
  id: "/csv-xlsx-converter",
  path: "/csv-xlsx-converter",
  getParentRoute: () => Route$9
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$9
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
  ToolsRoute
};
const routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
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
