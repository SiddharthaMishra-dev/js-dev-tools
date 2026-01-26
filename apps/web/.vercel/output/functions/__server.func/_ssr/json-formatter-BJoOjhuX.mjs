import { r as reactExports, j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { T as ToolInfo } from "./ToolInfo-B0rIjAJQ.mjs";
import { l as IconBraces, m as IconArrowsMinimize, d as IconCheck, e as IconCopy, n as IconDownload, f as IconTrash, o as IconAlertCircle } from "../_chunks/_libs/@tabler/icons-react.mjs";
function RouteComponent() {
  const [input, setInput] = reactExports.useState("");
  const [error, setError] = reactExports.useState(null);
  const [copySuccess, setCopySuccess] = reactExports.useState(false);
  const [activeView, setActiveView] = reactExports.useState("formatted");
  const [useSingleQuotes, setUseSingleQuotes] = reactExports.useState(false);
  const {
    formattedJson,
    minifiedJson,
    tokens,
    parsedData
  } = reactExports.useMemo(() => {
    if (!input.trim()) {
      return {
        formattedJson: "",
        minifiedJson: "",
        tokens: [],
        parsedData: null
      };
    }
    try {
      const parsed = parseJsonWithFallback(input);
      setError(null);
      const baseFormatted = JSON.stringify(parsed, null, 2);
      const baseMinified = JSON.stringify(parsed);
      const finalFormatted = useSingleQuotes ? convertToSingleQuotes(baseFormatted) : baseFormatted;
      const finalMinified = useSingleQuotes ? convertToSingleQuotes(baseMinified) : baseMinified;
      return {
        formattedJson: finalFormatted,
        minifiedJson: finalMinified,
        tokens: tokenizeJson(finalFormatted),
        parsedData: parsed
      };
    } catch (e) {
      setError(e.message);
      return {
        formattedJson: "",
        minifiedJson: "",
        tokens: [],
        parsedData: null
      };
    }
  }, [input, useSingleQuotes]);
  function convertToSingleQuotes(json) {
    return json.replace(/"([^"\\]*(?:\\.[^"\\]*)*)"/g, "'$1'");
  }
  function convertSingleQuotesToDouble(text) {
    return text.replace(/'([^'\\]*(?:\\.[^'\\]*)*)'/g, '"$1"');
  }
  function parseJsonWithFallback(text) {
    try {
      return JSON.parse(text);
    } catch (e) {
      try {
        const convertedText = convertSingleQuotesToDouble(text);
        return JSON.parse(convertedText);
      } catch (e2) {
        throw e;
      }
    }
  }
  function tokenizeJson(json) {
    const tokens2 = [];
    const quoteChar = useSingleQuotes ? "'" : '"';
    const escapedQuote = useSingleQuotes ? "\\\\.|[^'\\\\]" : '\\\\.|[^"\\\\]';
    const regex = new RegExp(`(${quoteChar}(?:${escapedQuote})*${quoteChar})\\s*:|(${quoteChar}(?:${escapedQuote})*${quoteChar})|(-?\\d+\\.?\\d*(?:[eE][+-]?\\d+)?)|(\\btrue\\b|\\bfalse\\b)|(\\bnull\\b)|([\\[\\]{}])|([,:])`, "g");
    let match;
    let lastIndex = 0;
    while ((match = regex.exec(json)) !== null) {
      if (match.index > lastIndex) {
        const whitespace = json.slice(lastIndex, match.index);
        if (whitespace) {
          tokens2.push({
            type: "punctuation",
            value: whitespace
          });
        }
      }
      if (match[1]) {
        tokens2.push({
          type: "key",
          value: match[1]
        });
      } else if (match[2]) {
        tokens2.push({
          type: "string",
          value: match[2]
        });
      } else if (match[3]) {
        tokens2.push({
          type: "number",
          value: match[3]
        });
      } else if (match[4]) {
        tokens2.push({
          type: "boolean",
          value: match[4]
        });
      } else if (match[5]) {
        tokens2.push({
          type: "null",
          value: match[5]
        });
      } else if (match[6]) {
        tokens2.push({
          type: "bracket",
          value: match[6]
        });
      } else if (match[7]) {
        tokens2.push({
          type: "punctuation",
          value: match[7]
        });
      }
      lastIndex = regex.lastIndex;
    }
    if (lastIndex < json.length) {
      tokens2.push({
        type: "punctuation",
        value: json.slice(lastIndex)
      });
    }
    return tokens2;
  }
  function getTokenClass(type) {
    switch (type) {
      case "bracket":
        return "text-blue-400 font-bold";
      case "key":
        return "text-cyan-400";
      case "string":
        return "text-green-400";
      case "number":
        return "text-orange-400";
      case "boolean":
        return "text-purple-400";
      case "null":
        return "text-purple-400";
      default:
        return "text-gray-300";
    }
  }
  const copyToClipboard = reactExports.useCallback(async () => {
    const textToCopy = activeView === "formatted" ? formattedJson : minifiedJson;
    if (!textToCopy) return;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2e3);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  }, [activeView, formattedJson, minifiedJson]);
  const downloadCSV = reactExports.useCallback(() => {
    if (!parsedData) return;
    let dataArray;
    if (Array.isArray(parsedData)) {
      dataArray = parsedData;
    } else if (typeof parsedData === "object") {
      dataArray = [parsedData];
    } else {
      setError("JSON must be an object or array of objects to convert to CSV");
      return;
    }
    if (dataArray.length === 0) {
      setError("JSON array is empty");
      return;
    }
    const keys = /* @__PURE__ */ new Set();
    dataArray.forEach((item) => {
      if (typeof item === "object" && item !== null) {
        Object.keys(item).forEach((key) => keys.add(key));
      }
    });
    const headers = Array.from(keys);
    if (headers.length === 0) {
      setError("No valid keys found in JSON");
      return;
    }
    const escapeCSV = (value) => {
      if (value === null || value === void 0) return "";
      const str = typeof value === "object" ? JSON.stringify(value) : String(value);
      if (str.includes(",") || str.includes('"') || str.includes("\n")) {
        return `"${str.replace(/"/g, '""')}"`;
      }
      return str;
    };
    const csvRows = [headers.join(","), ...dataArray.map((item) => headers.map((key) => escapeCSV(item?.[key] ?? "")).join(","))];
    const csvContent = csvRows.join("\n");
    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "data.csv";
    link.click();
    URL.revokeObjectURL(url);
  }, [parsedData]);
  const clearInput = () => {
    setInput("");
    setError(null);
  };
  const formatInput = () => {
    if (formattedJson) {
      setInput(formattedJson);
      setActiveView("formatted");
    }
  };
  const minifyInput = () => {
    if (minifiedJson) {
      setInput(minifiedJson);
      setActiveView("minified");
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-to-br from-gray-800 to-slate-900 pt-24 pb-8 px-4 flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-bold text-gray-100 mb-2", children: [
        "JSON ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-blue-400", children: "Formatter" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-md text-gray-200", children: "Format, validate & minify JSON instantly. No data sent to servers—completely private." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 max-w-9xl w-full mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-800 rounded-xl shadow-lg p-4 mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-gray-100 rounded-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "Quotes:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setUseSingleQuotes(false), className: `px-2 py-1 text-xs rounded transition-colors ${!useSingleQuotes ? "bg-blue-700 text-blue-100" : "bg-gray-600 text-gray-300 hover:bg-gray-500"}`, children: '"' }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setUseSingleQuotes(true), className: `px-2 py-1 text-xs rounded transition-colors ${useSingleQuotes ? "bg-blue-700 text-blue-100" : "bg-gray-600 text-gray-300 hover:bg-gray-500"}`, children: "'" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: formatInput, disabled: !input.trim() || !!error, className: "inline-flex items-center gap-2 px-4 py-2 bg-blue-700 text-blue-100 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconBraces, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Format" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: minifyInput, disabled: !input.trim() || !!error, className: "inline-flex items-center gap-2 px-4 py-2 bg-blue-700 text-blue-100 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconArrowsMinimize, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Minify" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: copyToClipboard, disabled: !formattedJson, className: `inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${copySuccess ? "bg-green-800 text-green-200" : "bg-gray-700 text-gray-100 hover:bg-gray-600"}`, children: copySuccess ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconCheck, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Copied!" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconCopy, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Copy" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: downloadCSV, disabled: !parsedData, className: "inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-gray-100 rounded-lg hover:bg-gray-600 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconDownload, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Download CSV" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: clearInput, disabled: !input, className: "inline-flex items-center gap-2 px-4 py-2 bg-red-900 text-red-200 rounded-lg hover:bg-red-800 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconTrash, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Clear" })
        ] })
      ] }) }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-red-900/30 border border-red-700 rounded-xl p-4 mb-6 flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(IconAlertCircle, { className: "w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-red-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "Invalid JSON" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm opacity-80", children: error })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-800 rounded-xl shadow-lg p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-100 mb-4", children: "Input" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: input, onChange: (e) => setInput(e.target.value), placeholder: 'Paste your JSON here, e.g., {"name": "John", "age": 30}', className: `w-full h-96 p-4 border rounded-lg bg-gray-700 text-gray-100 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 ${error ? "border-red-500" : "border-gray-600"}`, spellCheck: false }),
          input && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-400 mt-2", children: [
            "Size: ",
            new Blob([input]).size.toLocaleString(),
            " bytes"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-800 rounded-xl shadow-lg p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-gray-100", children: "Output" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveView("formatted"), className: `px-3 py-1 text-sm rounded-lg transition-colors ${activeView === "formatted" ? "bg-blue-700 text-blue-100" : "bg-gray-700 text-gray-300 hover:bg-gray-600"}`, children: "Formatted" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveView("minified"), className: `px-3 py-1 text-sm rounded-lg transition-colors ${activeView === "minified" ? "bg-blue-700 text-blue-100" : "bg-gray-700 text-gray-300 hover:bg-gray-600"}`, children: "Minified" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "w-full h-96 p-4 border border-gray-600 rounded-lg bg-gray-900 font-mono text-sm overflow-auto", style: {
            tabSize: 2
          }, children: activeView === "formatted" ? tokens.length > 0 ? tokens.map((token, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: getTokenClass(token.type), children: token.value }, index)) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-500", children: "Formatted JSON will appear here..." }) : minifiedJson ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-300 break-all", children: minifiedJson }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-500", children: "Minified JSON will appear here..." }) }),
          formattedJson && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-400 mt-2", children: [
            "Size:",
            " ",
            new Blob([activeView === "formatted" ? formattedJson : minifiedJson]).size.toLocaleString(),
            " ",
            "bytes"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ToolInfo, { title: "JSON Formatter & Validator", description: "Our JSON Formatter is a comprehensive suite for developers to clean, validate, and optimize JSON data. Whether you need to beautify deep nested objects for readability or minify data for production use, this tool provides a secure, client-side environment for all your JSON needs.", features: [{
        title: "Smart Formatting",
        description: "Automatic indentation and syntax highlighting make scanning complex JSON structures effortless.",
        icon: IconBraces
      }, {
        title: "Instant Minification",
        description: "Strip whitespaces and newlines to reduce payload size for API calls and configuration files.",
        icon: IconArrowsMinimize
      }, {
        title: "CSV Export",
        description: "Convert arrays of JSON objects into CSV format instantly for spreadsheet analysis.",
        icon: IconDownload
      }], steps: [{
        title: "Paste JSON",
        description: "Input your raw JSON string into the left editor panel. It can even handle single quotes!"
      }, {
        title: "Auto-Validate",
        description: "The tool immediately checks for syntax errors and provides helpful debugging messages."
      }, {
        title: "Apply View",
        description: 'Switch between "Formatted" and "Minified" views to see your data in different contexts.'
      }, {
        title: "Export Data",
        description: "Copy the result to your clipboard or download the data as a CSV file for external use."
      }] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "mt-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-400 text-xs", children: [
      "Crafted with care by",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://sidme.vercel.app/", target: "_blank", rel: "noopener noreferrer", className: "text-brand-primary hover:text-brand-hover transition-colors", children: "sidme" })
    ] }) })
  ] });
}
export {
  RouteComponent as component
};
