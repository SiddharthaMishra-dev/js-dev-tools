import { j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { L as Link } from "../_chunks/_libs/@tanstack/react-router.mjs";
import { G as GlowCard, t as tools } from "./tools-BkYamTpO.mjs";
import { k as IconChevronRight } from "../_chunks/_libs/@tabler/icons-react.mjs";
import "../_libs/tiny-warning.mjs";
import "../_chunks/_libs/@tanstack/router-core.mjs";
import "../_chunks/_libs/@tanstack/history.mjs";
import "../_libs/tiny-invariant.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
const toolsByCategory = tools.reduce((acc, tool) => {
  if (!acc[tool.category]) acc[tool.category] = [];
  acc[tool.category].push(tool);
  return acc;
}, {});
function ToolsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-gray-800 to-slate-900 flex flex-col relative overflow-hidden", id: "top", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-24 pb-10 px-4 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto text-center space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold uppercase tracking-wide text-brand-light", children: "Tool catalog" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl font-bold text-gray-100", children: "All JS DevTools utilities in one place" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-200 max-w-3xl mx-auto", children: "A crawlable, SEO-friendly index for privacy-first tools. Use it as your launchpad or share individual tools directly." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "px-4 py-2.5 bg-white/10 text-white rounded-lg text-sm font-semibold hover:bg-white/20 transition-colors", children: "Back to home" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#images", className: "px-4 py-2.5 bg-brand-primary text-white rounded-lg text-sm font-semibold hover:bg-brand-hover transition-colors", children: "Jump to tools" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 px-4 pb-16 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto space-y-12", children: Object.entries(toolsByCategory).map(([category, categoryTools]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: category.toLowerCase(), className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wide text-brand-light", children: category }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-bold text-gray-100", children: [
            category,
            " tools"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-300", children: "Optimized copy and internal links help each tool page index cleanly." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "text-sm text-brand-primary font-semibold hover:text-brand-hover flex items-center gap-1", children: [
          "Back to top",
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconChevronRight, { className: "h-4 w-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: categoryTools.map((tool) => {
        const Icon = tool.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(GlowCard, { to: tool.href, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start space-x-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-brand-dark rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors ease-in-out", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "text-brand-light" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-300 mb-2 group-hover:text-brand-primary transition-colors", children: tool.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-200 text-sm leading-relaxed", children: tool.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: tool.keywords.map((keyword) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-wide text-brand-light bg-white/5 border border-white/10 rounded-full px-2 py-1", children: keyword }, keyword)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center text-brand-primary text-sm font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Open tool" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(IconChevronRight, { className: "h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" })
            ] })
          ] })
        ] }) }, tool.slug);
      }) })
    ] }, category)) }) })
  ] });
}
export {
  ToolsPage as component
};
