import { r as reactExports, j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { T as ToolInfo } from "./ToolInfo-B0rIjAJQ.mjs";
import { a as IconLetterCaseUpper, b as IconLetterCaseLower, c as IconLetterCase, d as IconCheck, e as IconCopy, f as IconTrash, g as IconHash, h as IconTypography, i as IconFileText, j as IconClock } from "../_chunks/_libs/@tabler/icons-react.mjs";
function WordCounterComponent() {
  const [text, setText] = reactExports.useState("");
  const [copySuccess, setCopySuccess] = reactExports.useState(false);
  const stats = reactExports.useMemo(() => {
    const trimmedText = text.trim();
    const words = trimmedText ? trimmedText.split(/\s+/).length : 0;
    const charactersTotal = text.length;
    const charactersNoSpaces = text.replace(/\s/g, "").length;
    const sentences = trimmedText ? (text.match(/[.!?]+($|\s)/g) || []).length : 0;
    const paragraphs = trimmedText ? text.split(/\n\s*\n/).filter((p) => p.trim().length > 0).length : 0;
    const readingTime = Math.ceil(words / 200);
    return {
      words,
      charactersTotal,
      charactersNoSpaces,
      sentences,
      paragraphs,
      readingTime
    };
  }, [text]);
  const copyToClipboard = reactExports.useCallback(async () => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2e3);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  }, [text]);
  const clearText = () => setText("");
  const transformText = (type) => {
    switch (type) {
      case "upper":
        setText(text.toUpperCase());
        break;
      case "lower":
        setText(text.toLowerCase());
        break;
      case "title":
        setText(text.toLowerCase().split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" "));
        break;
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-gray-800 to-slate-900 pt-24 pb-8 px-4 flex flex-col font-sans", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-bold text-gray-100 mb-2", children: [
        "Word ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand-primary", children: "Counter" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-md text-gray-200", children: "Analyze your text instantly. Count words, characters, sentences and more." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 max-w-6xl w-full mx-auto space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-800 rounded-xl shadow-lg p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => transformText("upper"), disabled: !text, className: "inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-gray-100 rounded-lg hover:bg-gray-600 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed", title: "UPPERCASE", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconLetterCaseUpper, { className: "w-5 h-5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "UPPERCASE" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => transformText("lower"), disabled: !text, className: "inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-gray-100 rounded-lg hover:bg-gray-600 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed", title: "lowercase", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconLetterCaseLower, { className: "w-5 h-5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "lowercase" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => transformText("title"), disabled: !text, className: "inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-gray-100 rounded-lg hover:bg-gray-600 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed", title: "Title Case", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconLetterCase, { className: "w-5 h-5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Title Case" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-grow md:flex-grow-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: copyToClipboard, disabled: !text, className: `inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${copySuccess ? "bg-green-800 text-green-200" : "bg-brand-primary text-white hover:bg-brand-hover"}`, children: copySuccess ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconCheck, { className: "w-5 h-5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Copied!" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconCopy, { className: "w-5 h-5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Copy Text" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: clearText, disabled: !text, className: "inline-flex items-center gap-2 px-4 py-2 bg-red-900 text-red-200 rounded-lg hover:bg-red-800 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconTrash, { className: "w-5 h-5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Clear" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-800 rounded-xl shadow-lg p-6 h-full flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: text, onChange: (e) => setText(e.target.value), placeholder: "Start typing or paste your content here...", className: "w-full flex-grow min-h-[400px] p-4 bg-gray-900 text-gray-100 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-primary resize-none font-sans text-lg leading-relaxed", spellCheck: true }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-1 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-semibold text-gray-100 mb-6 flex items-center gap-2 border-b border-gray-700 pb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(IconHash, { className: "w-5 h-5 text-brand-primary" }),
              "Live Statistics"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(StatItem, { label: "Words", value: stats.words, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IconTypography, { className: "w-4 h-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(StatItem, { label: "Characters", value: stats.charactersTotal, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IconLetterCase, { className: "w-4 h-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(StatItem, { label: "Excl. Spaces", value: stats.charactersNoSpaces, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IconLetterCase, { className: "w-4 h-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(StatItem, { label: "Sentences", value: stats.sentences, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IconFileText, { className: "w-4 h-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(StatItem, { label: "Paragraphs", value: stats.paragraphs, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IconFileText, { className: "w-4 h-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-4 border-t border-gray-700 mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatItem, { label: "Reading Time", value: `${stats.readingTime} min`, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IconClock, { className: "w-4 h-4" }) }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-brand-primary/10 rounded-xl p-6 border border-brand-primary/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-brand-light font-medium italic", children: '"Words are, in my not-so-humble opinion, our most inexhaustible source of magic."' }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-gray-400 mt-2 text-right", children: "— Albus Dumbledore" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ToolInfo, { title: "Word & Character Counter", description: "A powerful, privacy-first tool designed for writers, editors, and students. Get detailed insights into your writing including word counts, character limits, sentence complexity, and estimated reading time—all processed locally in your browser.", features: [{
        title: "Real-time Metrics",
        description: "Counts update instantly as you type, providing immediate feedback on word and character counts.",
        icon: IconHash
      }, {
        title: "Text Transformations",
        description: "Quickly convert your entire text to UPPERCASE, lowercase, or Title Case with a single click.",
        icon: IconLetterCase
      }, {
        title: "Reading Time Estimate",
        description: "Plan your content length based on average reading speeds to better engage your audience.",
        icon: IconClock
      }], steps: [{
        title: "Enter Your Text",
        description: "Type directly into the editor or paste content from your favorite writing application."
      }, {
        title: "Monitor Stats",
        description: "Watch the sidebar for real-time updates on words, sentences, and character counts."
      }, {
        title: "Format & Edit",
        description: "Use the toolbar to transform text case or clear the editor for a fresh start."
      }, {
        title: "Copy Content",
        description: "Use the Copy button to take your analyzed or transformed text back to your project."
      }] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-400 text-xs", children: [
      "Crafted with care by",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://sidme.vercel.app/", target: "_blank", rel: "noopener noreferrer", className: "text-brand-primary hover:text-brand-hover transition-colors font-medium", children: "sidme" })
    ] }) })
  ] });
}
function StatItem({
  label,
  value,
  icon
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between group", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-gray-400 group-hover:text-gray-200 transition-colors", children: [
      icon,
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: label })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold text-gray-100", children: value })
  ] });
}
export {
  WordCounterComponent as component
};
