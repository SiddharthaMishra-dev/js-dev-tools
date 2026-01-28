import { j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { L as Link } from "../_chunks/_libs/@tanstack/react-router.mjs";
import { t as tools } from "./tools-Bi7NLZcF.mjs";
import { t as IconLock, k as IconChevronRight } from "../_chunks/_libs/@tabler/icons-react.mjs";
function ToolInfo({
  title,
  description,
  features,
  steps,
  privacyInfo
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-5xl mx-auto mt-20 space-y-16 pb-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-bold text-gray-100", children: [
        "What is ",
        title,
        "?"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed", children: description })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: features.map((feature, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-brand-primary/50 transition-colors group",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 bg-brand-dark/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-dark/30 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(feature.icon, { className: "text-brand-primary w-6 h-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-100 mb-2", children: feature.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm leading-relaxed", children: feature.description })
        ]
      },
      index
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8 md:p-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-3 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold", children: "?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl font-bold text-gray-100", children: [
          "How to use ",
          title
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: steps.map((step, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "relative",
          children: [
            index < steps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block absolute top-5 left-1/2 w-full h-[2px] bg-gray-700 -z-10" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 font-bold border-2 border-gray-600", children: index + 1 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-lg font-semibold text-gray-100", children: step.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm", children: step.description })
            ] })
          ]
        },
        index
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-8 p-8 bg-brand-dark/10 border border-brand-dark/20 rounded-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start space-x-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IconLock, { className: "text-brand-primary w-8 h-8" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-100 mb-2", children: "100% Client-Side & Private" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-sm max-w-xl", children: privacyInfo || "Your data never leaves your browser. All processing is done locally on your machine, ensuring maximum security and speed. No server calls, no tracking, no risk." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 py-3 bg-brand-dark/20 text-brand-primary rounded-full text-sm font-semibold border border-brand-dark/30", children: "Privacy Guaranteed" }) })
    ] })
  ] });
}
function RelatedTools({
  currentToolSlug,
  category = "all",
  maxTools = 4
}) {
  let relatedTools = tools.filter((tool) => tool.slug !== currentToolSlug);
  if (category !== "all") {
    const sameCategory = relatedTools.filter((tool) => tool.category === category);
    const otherCategory = relatedTools.filter((tool) => tool.category !== category);
    relatedTools = [...sameCategory, ...otherCategory];
  }
  relatedTools = relatedTools.slice(0, maxTools);
  if (relatedTools.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mt-12 mx-auto w-full max-w-5xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white/5 border border-white/10 rounded-xl p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-gray-100", children: category !== "all" ? `Other ${category} Tools` : "More Tools You Might Need" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-300 mt-1", children: "Explore our complete suite of free online tools" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/tools",
          className: "hidden sm:inline-flex items-center gap-2 text-sm text-brand-primary font-semibold hover:text-brand-hover transition-colors",
          children: [
            "View all tools",
            /* @__PURE__ */ jsxRuntimeExports.jsx(IconChevronRight, { className: "h-4 w-4" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: relatedTools.map((tool) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      RelatedToolCard,
      {
        tool
      },
      tool.slug
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/tools",
        className: "sm:hidden mt-4 inline-flex items-center gap-2 text-sm text-brand-primary font-semibold hover:text-brand-hover transition-colors",
        children: [
          "View all tools",
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconChevronRight, { className: "h-4 w-4" })
        ]
      }
    )
  ] }) });
}
function RelatedToolCard({ tool }) {
  const Icon = tool.icon;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: tool.href,
      className: "group flex items-start gap-3 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-brand-primary/50 transition-all duration-200",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 w-10 h-10 bg-brand-dark rounded-lg flex items-center justify-center group-hover:bg-brand-primary transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-brand-light" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold text-gray-100 group-hover:text-brand-primary transition-colors", children: tool.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-300 mt-1 line-clamp-2", children: tool.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(IconChevronRight, { className: "w-5 h-5 text-gray-400 group-hover:text-brand-primary group-hover:translate-x-1 transition-all shrink-0 mt-1" })
      ]
    }
  );
}
export {
  RelatedTools as R,
  ToolInfo as T
};
