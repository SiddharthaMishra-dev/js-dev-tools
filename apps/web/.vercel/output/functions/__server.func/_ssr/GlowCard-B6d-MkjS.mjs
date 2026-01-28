import { r as reactExports, j as jsxRuntimeExports } from "../_chunks/_libs/react.mjs";
import { L as Link } from "../_chunks/_libs/@tanstack/react-router.mjs";
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
export {
  GlowCard as G
};
