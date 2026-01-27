import { j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { L as Link } from "../_chunks/_libs/@tanstack/react-router.mjs";
import { G as GlowCard, t as tools } from "./tools-BkYamTpO.mjs";
import { k as IconChevronRight, F as IconBrandGithub, u as IconBolt, t as IconLock, G as IconSearch } from "../_chunks/_libs/@tabler/icons-react.mjs";
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
const featuredTools = tools.slice(0, 6);
function App() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-gray-800 to-slate-900 flex flex-col font-sans relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-24 pb-12 px-4 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto text-center space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl md:text-5xl font-bold text-gray-100 leading-tight", children: [
        "Get things done faster with ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-primary", children: "client-side" }),
        " ",
        "tools"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-200 max-w-3xl mx-auto", children: "Lightning-fast image and data utilities for everyone. Zero uploads, zero tracking, and metadata tuned for better search visibility." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/tools", className: " inline-flex items-center space-x-2 px-5 py-2.5 bg-brand-primary shadow-[0px_0px_2px_1px_rgba(255, 255, 255,0.2)_inset] text-shadow-sm text-shadow-white/10 ring ring-white/20 text-white rounded-lg hover:bg-brand-hover transition-colors duration-200 text-sm font-medium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Browse all tools" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconChevronRight, { className: "h-4 w-4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://github.com/SiddharthaMishra-dev/js-dev-tools", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center space-x-2 px-4 py-2 shadow-[0px_0px_2px_1px_rgba(255, 255, 255,0.2)_inset] text-shadow-sm text-shadow-white/10 ring ring-white/20 bg-gray-700 text-gray-100 rounded-lg hover:bg-gray-600 transition-colors duration-200 text-sm font-medium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconBrandGithub, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Star on GitHub" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-2 text-xs text-gray-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-white/10 bg-white/5 px-3 py-1", children: "100% client-side" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-white/10 bg-white/5 px-3 py-1", children: "No account. No uploads." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-white/10 bg-white/5 px-3 py-1", children: "Open source & auditable" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 px-4 pb-16 relative z-10", id: "tools", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4 mb-6 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-brand-light font-semibold uppercase tracking-wide", children: "Featured tools" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-100", children: "Get the essentials in one place" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-300 mt-1", children: "Clear descriptions, privacy-first defaults, and instant results right in your browser." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/tools", className: "inline-flex items-center gap-2 text-sm text-brand-primary font-semibold hover:text-brand-hover", children: [
            "See catalog",
            /* @__PURE__ */ jsxRuntimeExports.jsx(IconChevronRight, { className: "h-4 w-4" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: featuredTools.map((tool) => {
          const Icon = tool.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(GlowCard, { to: tool.href, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start space-x-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-brand-dark rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors ease-in-out", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "text-brand-light" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-300 mb-2 group-hover:text-brand-primary transition-colors", children: tool.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-200 text-sm leading-relaxed", children: tool.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: tool.keywords.slice(0, 2).map((keyword) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-wide text-brand-light bg-white/5 border border-white/10 rounded-full px-2 py-1", children: keyword }, keyword)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center text-brand-primary text-sm font-medium", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Open tool" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(IconChevronRight, { className: "h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" })
              ] })
            ] })
          ] }) }, tool.slug);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-6xl mx-auto mt-16 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-100 mb-8", children: "Why people trust JS DevTools" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IconBolt, { className: "text-brand-light w-6 h-6" }), title: "Instant processing", description: "Runs entirely in your browser for near-zero latency." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IconLock, { className: "text-brand-light w-6 h-6" }), title: "Complete privacy", description: "No uploads or accounts. Your files never leave your device." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IconBrandGithub, { className: "text-brand-light w-6 h-6" }), title: "Open source", description: "Inspect, fork, and contribute. Transparency by default." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FeatureCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IconSearch, { className: "text-brand-light w-6 h-6" }), title: "SEO friendly", description: "Structured content and clear copy to help tools rank." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "max-w-5xl mx-auto mt-16 bg-white/5 border border-white/10 rounded-2xl p-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-brand-light uppercase tracking-wide", children: "Build once, reuse everywhere" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold text-gray-100 mt-2", children: "A dedicated tools page keeps everything indexable and easy to discover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-300 mt-3", children: "Every tool gets focused copy, keywords, and internal links to improve crawlability while keeping the experience fast and privacy-first." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-col sm:flex-row justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/tools", className: "px-5 py-2.5 shadow-[0px_0px_2px_1px_rgba(255, 255, 255,0.2)_inset] text-shadow-sm text-shadow-white/10 ring ring-white/20 bg-brand-primary text-white rounded-lg text-sm font-semibold hover:bg-brand-hover transition-colors", children: "Go to tools page" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#tools", className: "px-5 py-2.5 shadow-[0px_0px_2px_1px_rgba(255, 255, 255,0.2)_inset] text-shadow-sm text-shadow-white/10 ring ring-white/20 bg-white/10 text-white rounded-lg text-sm font-semibold hover:bg-white/20 transition-colors", children: "Explore featured tools" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "pb-8 px-4 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-400 text-xs", children: [
      "Crafted with care by",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://sidme.vercel.app/", target: "_blank", rel: "noopener noreferrer", className: "text-brand-primary hover:text-brand-hover transition-colors", children: "sidme" }),
      " ",
      "•",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/SiddharthaMishra-dev/js-dev-tools", target: "_blank", rel: "noopener noreferrer", className: "text-brand-primary hover:text-brand-hover transition-colors", children: "Open Source on GitHub" })
    ] }) }) })
  ] });
}
function FeatureCard({
  icon,
  title,
  description
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 bg-white/5 border border-white/10 rounded-xl p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-brand-dark rounded-lg flex items-center justify-center mx-auto", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold text-gray-100", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-300", children: description })
  ] });
}
export {
  App as component
};
