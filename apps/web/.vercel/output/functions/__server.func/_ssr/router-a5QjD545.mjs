import { c as createRouter, a as createRootRoute, b as createFileRoute, l as lazyRouteComponent, H as HeadContent, S as Scripts, L as Link } from "../_chunks/_libs/@tanstack/react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_chunks/_libs/react.mjs";
import { I as IconX, a as IconMenu2, b as IconHome, c as IconNumber64Small, d as IconPhoto, e as IconBolt, f as IconCrop, g as IconBraces, h as IconFileTypePdf } from "../_chunks/_libs/@tabler/icons-react.mjs";
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
  { path: "/image-to-base64", label: "Base64", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IconNumber64Small, { size: 18 }) },
  { path: "/image-format-converter", label: "Convert", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IconPhoto, { size: 18 }) },
  { path: "/image-compressor", label: "Compress", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IconBolt, { size: 18 }) },
  { path: "/image-cropper", label: "Crop", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IconCrop, { size: 18 }) },
  { path: "/json-formatter", label: "JSON", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IconBraces, { size: 18 }) },
  { path: "/image-to-pdf", label: "PDF", icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IconFileTypePdf, { size: 18 }) }
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-amber-200", children: "DevTools" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex gap-1 lg:gap-2", children: navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: item.path,
          className: "text-gray-300 hover:text-amber-200 hover:bg-white/5 flex items-center gap-2 px-3 py-2 no-underline text-sm font-medium rounded-lg transition-all duration-200 ease-in-out",
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
          className: "block md:hidden bg-transparent border-none text-gray-100 cursor-pointer p-2 transition-colors hover:text-amber-200",
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
const appCss = "/assets/styles-Cs9hEs0T.css";
const Route$7 = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        title: "JS DevTools | Privacy First | 100% Client-Side Web Utilities"
      },
      {
        name: "description",
        content: "Free, private, and fast developer tools. Convert images to Base64, compress, crop, and convert formats, format JSON and convert image to pdf instantly. 100% client-side—your data never leaves your browser."
      },
      {
        meta: "og:type",
        content: "website"
      },
      {
        meth: "og:url",
        content: "https://js-devtools.sidme.dev/"
      },
      {
        property: "og:title",
        content: "JS DevTools | Privacy First | 100% Client-Side Web Utilities"
      },
      {
        property: "og:description",
        content: "Free, private, and fast developer tools. 100% client-side—your data never leaves your browser."
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
        content: "JS DevTools | Privacy First | 100% Client-Side Web Utilities"
      },
      {
        name: "twitter:description",
        content: "Free, private, and fast developer tools. 100% client-side—your data never leaves your browser."
      },
      {
        name: "twitter:image",
        content: "https://js-devtools.sidme.dev/screenshot.png"
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
const $$splitComponentImporter$6 = () => import("./json-formatter-HyWlcMZh.mjs");
const Route$6 = createFileRoute("/json-formatter")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./image-to-pdf-CoZkKlm1.mjs");
const Route$5 = createFileRoute("/image-to-pdf")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./image-to-base64-Cl0Jzv1R.mjs");
const Route$4 = createFileRoute("/image-to-base64")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./image-format-converter-D4gtdOEG.mjs");
const Route$3 = createFileRoute("/image-format-converter")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./image-cropper-D3xXNo6J.mjs");
const Route$2 = createFileRoute("/image-cropper")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./image-compressor-Bb_sODNd.mjs");
const Route$1 = createFileRoute("/image-compressor")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-CuxRPkXI.mjs");
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const JsonFormatterRoute = Route$6.update({
  id: "/json-formatter",
  path: "/json-formatter",
  getParentRoute: () => Route$7
});
const ImageToPdfRoute = Route$5.update({
  id: "/image-to-pdf",
  path: "/image-to-pdf",
  getParentRoute: () => Route$7
});
const ImageToBase64Route = Route$4.update({
  id: "/image-to-base64",
  path: "/image-to-base64",
  getParentRoute: () => Route$7
});
const ImageFormatConverterRoute = Route$3.update({
  id: "/image-format-converter",
  path: "/image-format-converter",
  getParentRoute: () => Route$7
});
const ImageCropperRoute = Route$2.update({
  id: "/image-cropper",
  path: "/image-cropper",
  getParentRoute: () => Route$7
});
const ImageCompressorRoute = Route$1.update({
  id: "/image-compressor",
  path: "/image-compressor",
  getParentRoute: () => Route$7
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  ImageCompressorRoute,
  ImageCropperRoute,
  ImageFormatConverterRoute,
  ImageToBase64Route,
  ImageToPdfRoute,
  JsonFormatterRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
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
