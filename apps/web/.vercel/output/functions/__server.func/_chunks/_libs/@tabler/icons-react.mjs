import { r as reactExports } from "../react.mjs";
var defaultAttributes = {
  outline: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  },
  filled: {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    stroke: "none"
  }
};
const createReactComponent = (type, iconName, iconNamePascal, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ color = "currentColor", size = 24, stroke = 2, title, className, children, ...rest }, ref) => reactExports.createElement(
      "svg",
      {
        ref,
        ...defaultAttributes[type],
        width: size,
        height: size,
        className: [`tabler-icon`, `tabler-icon-${iconName}`, className].join(" "),
        ...{
          strokeWidth: stroke,
          stroke: color
        },
        ...rest
      },
      [
        title && reactExports.createElement("title", { key: "svg-title" }, title),
        ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    )
  );
  Component.displayName = `${iconNamePascal}`;
  return Component;
};
const __iconNode$v = [["path", { "d": "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", "key": "svg-0" }], ["path", { "d": "M12 8v4", "key": "svg-1" }], ["path", { "d": "M12 16h.01", "key": "svg-2" }]];
const IconAlertCircle = createReactComponent("outline", "alert-circle", "AlertCircle", __iconNode$v);
const __iconNode$u = [["path", { "d": "M4 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4", "key": "svg-0" }], ["path", { "d": "M4 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4", "key": "svg-1" }], ["path", { "d": "M14 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4", "key": "svg-2" }], ["path", { "d": "M14 7l6 0", "key": "svg-3" }], ["path", { "d": "M17 4l0 6", "key": "svg-4" }]];
const IconApps = createReactComponent("outline", "apps", "Apps", __iconNode$u);
const __iconNode$t = [["path", { "d": "M7 10h14l-4 -4", "key": "svg-0" }], ["path", { "d": "M17 14h-14l4 4", "key": "svg-1" }]];
const IconArrowsExchange = createReactComponent("outline", "arrows-exchange", "ArrowsExchange", __iconNode$t);
const __iconNode$s = [["path", { "d": "M16 4l4 0l0 4", "key": "svg-0" }], ["path", { "d": "M14 10l6 -6", "key": "svg-1" }], ["path", { "d": "M8 20l-4 0l0 -4", "key": "svg-2" }], ["path", { "d": "M4 20l6 -6", "key": "svg-3" }], ["path", { "d": "M16 20l4 0l0 -4", "key": "svg-4" }], ["path", { "d": "M14 14l6 6", "key": "svg-5" }], ["path", { "d": "M8 4l-4 0l0 4", "key": "svg-6" }], ["path", { "d": "M4 4l6 6", "key": "svg-7" }]];
const IconArrowsMaximize = createReactComponent("outline", "arrows-maximize", "ArrowsMaximize", __iconNode$s);
const __iconNode$r = [["path", { "d": "M5 9l4 0l0 -4", "key": "svg-0" }], ["path", { "d": "M3 3l6 6", "key": "svg-1" }], ["path", { "d": "M5 15l4 0l0 4", "key": "svg-2" }], ["path", { "d": "M3 21l6 -6", "key": "svg-3" }], ["path", { "d": "M19 9l-4 0l0 -4", "key": "svg-4" }], ["path", { "d": "M15 9l6 -6", "key": "svg-5" }], ["path", { "d": "M19 15l-4 0l0 4", "key": "svg-6" }], ["path", { "d": "M15 15l6 6", "key": "svg-7" }]];
const IconArrowsMinimize = createReactComponent("outline", "arrows-minimize", "ArrowsMinimize", __iconNode$r);
const __iconNode$q = [["path", { "d": "M3 9l4 -4l4 4m-4 -4v14", "key": "svg-0" }], ["path", { "d": "M21 15l-4 4l-4 -4m4 4v-14", "key": "svg-1" }]];
const IconArrowsSort = createReactComponent("outline", "arrows-sort", "ArrowsSort", __iconNode$q);
const __iconNode$p = [["path", { "d": "M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11", "key": "svg-0" }]];
const IconBolt = createReactComponent("outline", "bolt", "Bolt", __iconNode$p);
const __iconNode$o = [["path", { "d": "M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5", "key": "svg-0" }], ["path", { "d": "M12 12l8 -4.5", "key": "svg-1" }], ["path", { "d": "M12 12l0 9", "key": "svg-2" }], ["path", { "d": "M12 12l-8 -4.5", "key": "svg-3" }]];
const IconBox = createReactComponent("outline", "box", "Box", __iconNode$o);
const __iconNode$n = [["path", { "d": "M7 4a2 2 0 0 0 -2 2v3a2 3 0 0 1 -2 3a2 3 0 0 1 2 3v3a2 2 0 0 0 2 2", "key": "svg-0" }], ["path", { "d": "M17 4a2 2 0 0 1 2 2v3a2 3 0 0 0 2 3a2 3 0 0 0 -2 3v3a2 2 0 0 1 -2 2", "key": "svg-1" }]];
const IconBraces = createReactComponent("outline", "braces", "Braces", __iconNode$n);
const __iconNode$m = [["path", { "d": "M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5", "key": "svg-0" }]];
const IconBrandGithub = createReactComponent("outline", "brand-github", "BrandGithub", __iconNode$m);
const __iconNode$l = [["path", { "d": "M5 12l5 5l10 -10", "key": "svg-0" }]];
const IconCheck = createReactComponent("outline", "check", "Check", __iconNode$l);
const __iconNode$k = [["path", { "d": "M9 6l6 6l-6 6", "key": "svg-0" }]];
const IconChevronRight = createReactComponent("outline", "chevron-right", "ChevronRight", __iconNode$k);
const __iconNode$j = [["path", { "d": "M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", "key": "svg-0" }], ["path", { "d": "M10 10l4 4m0 -4l-4 4", "key": "svg-1" }]];
const IconCircleX = createReactComponent("outline", "circle-x", "CircleX", __iconNode$j);
const __iconNode$i = [["path", { "d": "M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1", "key": "svg-0" }], ["path", { "d": "M9 15l3 -3l3 3", "key": "svg-1" }], ["path", { "d": "M12 12l0 9", "key": "svg-2" }]];
const IconCloudUpload = createReactComponent("outline", "cloud-upload", "CloudUpload", __iconNode$i);
const __iconNode$h = [["path", { "d": "M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666", "key": "svg-0" }], ["path", { "d": "M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1", "key": "svg-1" }]];
const IconCopy = createReactComponent("outline", "copy", "Copy", __iconNode$h);
const __iconNode$g = [["path", { "d": "M8 5v10a1 1 0 0 0 1 1h10", "key": "svg-0" }], ["path", { "d": "M5 8h10a1 1 0 0 1 1 1v10", "key": "svg-1" }]];
const IconCrop = createReactComponent("outline", "crop", "Crop", __iconNode$g);
const __iconNode$f = [["path", { "d": "M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2", "key": "svg-0" }], ["path", { "d": "M7 11l5 5l5 -5", "key": "svg-1" }], ["path", { "d": "M12 4l0 12", "key": "svg-2" }]];
const IconDownload = createReactComponent("outline", "download", "Download", __iconNode$f);
const __iconNode$e = [["path", { "d": "M14 3v4a1 1 0 0 0 1 1h4", "key": "svg-0" }], ["path", { "d": "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2", "key": "svg-1" }], ["path", { "d": "M10 13l-1 2l1 2", "key": "svg-2" }], ["path", { "d": "M14 13l1 2l-1 2", "key": "svg-3" }]];
const IconFileCode = createReactComponent("outline", "file-code", "FileCode", __iconNode$e);
const __iconNode$d = [["path", { "d": "M14 3v4a1 1 0 0 0 1 1h4", "key": "svg-0" }], ["path", { "d": "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2", "key": "svg-1" }], ["path", { "d": "M8 11h8v7h-8l0 -7", "key": "svg-2" }], ["path", { "d": "M8 15h8", "key": "svg-3" }], ["path", { "d": "M11 11v7", "key": "svg-4" }]];
const IconFileSpreadsheet = createReactComponent("outline", "file-spreadsheet", "FileSpreadsheet", __iconNode$d);
const __iconNode$c = [["path", { "d": "M14 3v4a1 1 0 0 0 1 1h4", "key": "svg-0" }], ["path", { "d": "M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2", "key": "svg-1" }], ["path", { "d": "M9 9l1 0", "key": "svg-2" }], ["path", { "d": "M9 13l6 0", "key": "svg-3" }], ["path", { "d": "M9 17l6 0", "key": "svg-4" }]];
const IconFileText = createReactComponent("outline", "file-text", "FileText", __iconNode$c);
const __iconNode$b = [["path", { "d": "M14 3v4a1 1 0 0 0 1 1h4", "key": "svg-0" }], ["path", { "d": "M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4", "key": "svg-1" }], ["path", { "d": "M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6", "key": "svg-2" }], ["path", { "d": "M17 18h2", "key": "svg-3" }], ["path", { "d": "M20 15h-3v6", "key": "svg-4" }], ["path", { "d": "M11 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1", "key": "svg-5" }]];
const IconFileTypePdf = createReactComponent("outline", "file-type-pdf", "FileTypePdf", __iconNode$b);
const __iconNode$a = [["path", { "d": "M3 12l18 0", "key": "svg-0" }], ["path", { "d": "M7 16l10 0l-10 5l0 -5", "key": "svg-1" }], ["path", { "d": "M7 8l10 0l-10 -5l0 5", "key": "svg-2" }]];
const IconFlipHorizontal = createReactComponent("outline", "flip-horizontal", "FlipHorizontal", __iconNode$a);
const __iconNode$9 = [["path", { "d": "M12 3l0 18", "key": "svg-0" }], ["path", { "d": "M16 7l0 10l5 0l-5 -10", "key": "svg-1" }], ["path", { "d": "M8 7l0 10l-5 0l5 -10", "key": "svg-2" }]];
const IconFlipVertical = createReactComponent("outline", "flip-vertical", "FlipVertical", __iconNode$9);
const __iconNode$8 = [["path", { "d": "M5 12l-2 0l9 -9l9 9l-2 0", "key": "svg-0" }], ["path", { "d": "M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7", "key": "svg-1" }], ["path", { "d": "M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6", "key": "svg-2" }]];
const IconHome = createReactComponent("outline", "home", "Home", __iconNode$8);
const __iconNode$7 = [["path", { "d": "M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6", "key": "svg-0" }], ["path", { "d": "M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0", "key": "svg-1" }], ["path", { "d": "M8 11v-4a4 4 0 1 1 8 0v4", "key": "svg-2" }]];
const IconLock = createReactComponent("outline", "lock", "Lock", __iconNode$7);
const __iconNode$6 = [["path", { "d": "M4 6l16 0", "key": "svg-0" }], ["path", { "d": "M4 12l16 0", "key": "svg-1" }], ["path", { "d": "M4 18l16 0", "key": "svg-2" }]];
const IconMenu2 = createReactComponent("outline", "menu-2", "Menu2", __iconNode$6);
const __iconNode$5 = [["path", { "d": "M14 8v3a1 1 0 0 0 1 1h3", "key": "svg-0" }], ["path", { "d": "M18 8v8", "key": "svg-1" }], ["path", { "d": "M10 9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-3", "key": "svg-2" }]];
const IconNumber64Small = createReactComponent("outline", "number-64-small", "Number64Small", __iconNode$5);
const __iconNode$4 = [["path", { "d": "M15 8h.01", "key": "svg-0" }], ["path", { "d": "M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12", "key": "svg-1" }], ["path", { "d": "M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5", "key": "svg-2" }], ["path", { "d": "M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3", "key": "svg-3" }]];
const IconPhoto = createReactComponent("outline", "photo", "Photo", __iconNode$4);
const __iconNode$3 = [["path", { "d": "M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5", "key": "svg-0" }]];
const IconRotateClockwise = createReactComponent("outline", "rotate-clockwise", "RotateClockwise", __iconNode$3);
const __iconNode$2 = [["path", { "d": "M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", "key": "svg-0" }], ["path", { "d": "M21 21l-6 -6", "key": "svg-1" }]];
const IconSearch = createReactComponent("outline", "search", "Search", __iconNode$2);
const __iconNode$1 = [["path", { "d": "M4 7l16 0", "key": "svg-0" }], ["path", { "d": "M10 11l0 6", "key": "svg-1" }], ["path", { "d": "M14 11l0 6", "key": "svg-2" }], ["path", { "d": "M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12", "key": "svg-3" }], ["path", { "d": "M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3", "key": "svg-4" }]];
const IconTrash = createReactComponent("outline", "trash", "Trash", __iconNode$1);
const __iconNode = [["path", { "d": "M18 6l-12 12", "key": "svg-0" }], ["path", { "d": "M6 6l12 12", "key": "svg-1" }]];
const IconX = createReactComponent("outline", "x", "X", __iconNode);
export {
  IconFileSpreadsheet as A,
  IconBrandGithub as B,
  IconSearch as C,
  IconNumber64Small as D,
  IconPhoto as E,
  IconX as I,
  IconMenu2 as a,
  IconHome as b,
  IconApps as c,
  IconChevronRight as d,
  IconBraces as e,
  IconArrowsMinimize as f,
  IconCheck as g,
  IconCopy as h,
  IconDownload as i,
  IconTrash as j,
  IconAlertCircle as k,
  IconCloudUpload as l,
  IconFileTypePdf as m,
  IconArrowsSort as n,
  IconLock as o,
  IconBolt as p,
  IconFileCode as q,
  IconCircleX as r,
  IconBox as s,
  IconArrowsExchange as t,
  IconRotateClockwise as u,
  IconFlipHorizontal as v,
  IconFlipVertical as w,
  IconCrop as x,
  IconArrowsMaximize as y,
  IconFileText as z
};
