import { r as requireEs_object_toString, a as requireEs_promise, b as requireEs_reflect_deleteProperty, c as requireEs_array_map, d as requireEs_parseFloat, e as requireEs_regexp_exec, f as requireEs_string_match, g as requireEs_string_replace, h as requireEs_string_startsWith, i as requireEs_array_join, j as requireEs_array_concat, k as requireEs_array_every, l as requireEs_array_reduce, m as requireEs_string_endsWith, n as requireEs_string_split, o as requireEs_function_name, p as requireEs_string_trim, q as requireEs_array_forEach, s as requireWeb_domCollections_forEach, t as requireEs_array_from, u as requireEs_array_includes, v as requireEs_array_indexOf, w as requireEs_array_some, x as requireEs_string_includes, y as requireEs_string_iterator, z as requireEs_array_reverse, A as requireEs_number_constructor, B as requireEs_array_fill, C as requireEs_regexp_toString, D as requireEs_array_iterator, E as requireWeb_domCollections_iterator, F as requireEs_map, G as requireEs_reflect_apply, H as requireEs_reflect_getPrototypeOf } from "./core-js.mjs";
import { r as requireGetPrototypeOf, a as requirePossibleConstructorReturn, b as requireSlicedToArray, c as requireGet, d as requireAssertThisInitialized, e as requireAsyncToGenerator, f as requireRegenerator, g as requireToConsumableArray, h as requireDefineProperty, i as requireClassCallCheck, j as requireCreateClass, k as requireInherits } from "../_chunks/_libs/@babel/runtime.mjs";
import { r as requireRaf } from "./raf.mjs";
import { r as requireRgbcolor } from "./rgbcolor.mjs";
import { r as require$$41 } from "./svg-pathdata.mjs";
import { r as require$$49 } from "./stackblur-canvas.mjs";
var lib = {};
var hasRequiredLib;
function requireLib() {
  if (hasRequiredLib) return lib;
  hasRequiredLib = 1;
  (function(exports$1) {
    Object.defineProperty(exports$1, "__esModule", { value: true });
    requireEs_object_toString();
    requireEs_promise();
    requireEs_reflect_deleteProperty();
    var _regeneratorRuntime = /* @__PURE__ */ requireRegenerator();
    var _asyncToGenerator = /* @__PURE__ */ requireAsyncToGenerator();
    requireEs_array_map();
    requireEs_parseFloat();
    requireEs_regexp_exec();
    requireEs_string_match();
    requireEs_string_replace();
    requireEs_string_startsWith();
    requireEs_array_join();
    var _slicedToArray = /* @__PURE__ */ requireSlicedToArray();
    var _defineProperty = /* @__PURE__ */ requireDefineProperty();
    var _classCallCheck = /* @__PURE__ */ requireClassCallCheck();
    var _createClass = /* @__PURE__ */ requireCreateClass();
    requireEs_array_concat();
    requireEs_array_every();
    requireEs_array_reduce();
    requireEs_string_endsWith();
    requireEs_string_split();
    var requestAnimationFrame = /* @__PURE__ */ requireRaf();
    requireEs_function_name();
    requireEs_string_trim();
    var RGBColor = /* @__PURE__ */ requireRgbcolor();
    requireEs_array_forEach();
    requireWeb_domCollections_forEach();
    var _inherits = /* @__PURE__ */ requireInherits();
    var _possibleConstructorReturn = /* @__PURE__ */ requirePossibleConstructorReturn();
    var _getPrototypeOf = /* @__PURE__ */ requireGetPrototypeOf();
    requireEs_array_from();
    requireEs_array_includes();
    requireEs_array_indexOf();
    requireEs_array_some();
    requireEs_string_includes();
    requireEs_string_iterator();
    var _toConsumableArray = /* @__PURE__ */ requireToConsumableArray();
    requireEs_array_reverse();
    requireEs_number_constructor();
    var _get = /* @__PURE__ */ requireGet();
    requireEs_array_fill();
    var svgPathdata = require$$41;
    requireEs_regexp_toString();
    var _assertThisInitialized = /* @__PURE__ */ requireAssertThisInitialized();
    requireEs_array_iterator();
    requireWeb_domCollections_iterator();
    requireEs_map();
    requireEs_reflect_apply();
    requireEs_reflect_getPrototypeOf();
    var stackblurCanvas = require$$49;
    function _interopDefaultLegacy(e) {
      return e && typeof e === "object" && "default" in e ? e : { "default": e };
    }
    var _regeneratorRuntime__default = /* @__PURE__ */ _interopDefaultLegacy(_regeneratorRuntime);
    var _asyncToGenerator__default = /* @__PURE__ */ _interopDefaultLegacy(_asyncToGenerator);
    var _slicedToArray__default = /* @__PURE__ */ _interopDefaultLegacy(_slicedToArray);
    var _defineProperty__default = /* @__PURE__ */ _interopDefaultLegacy(_defineProperty);
    var _classCallCheck__default = /* @__PURE__ */ _interopDefaultLegacy(_classCallCheck);
    var _createClass__default = /* @__PURE__ */ _interopDefaultLegacy(_createClass);
    var requestAnimationFrame__default = /* @__PURE__ */ _interopDefaultLegacy(requestAnimationFrame);
    var RGBColor__default = /* @__PURE__ */ _interopDefaultLegacy(RGBColor);
    var _inherits__default = /* @__PURE__ */ _interopDefaultLegacy(_inherits);
    var _possibleConstructorReturn__default = /* @__PURE__ */ _interopDefaultLegacy(_possibleConstructorReturn);
    var _getPrototypeOf__default = /* @__PURE__ */ _interopDefaultLegacy(_getPrototypeOf);
    var _toConsumableArray__default = /* @__PURE__ */ _interopDefaultLegacy(_toConsumableArray);
    var _get__default = /* @__PURE__ */ _interopDefaultLegacy(_get);
    var _assertThisInitialized__default = /* @__PURE__ */ _interopDefaultLegacy(_assertThisInitialized);
    function offscreen() {
      var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, DOMParserFallback = _ref.DOMParser;
      var preset = {
        window: null,
        ignoreAnimation: true,
        ignoreMouse: true,
        DOMParser: DOMParserFallback,
        createCanvas: function createCanvas2(width, height) {
          return new OffscreenCanvas(width, height);
        },
        createImage: function createImage2(url) {
          return _asyncToGenerator__default["default"](/* @__PURE__ */ _regeneratorRuntime__default["default"].mark(function _callee() {
            var response, blob, img;
            return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return fetch(url);
                  case 2:
                    response = _context.sent;
                    _context.next = 5;
                    return response.blob();
                  case 5:
                    blob = _context.sent;
                    _context.next = 8;
                    return createImageBitmap(blob);
                  case 8:
                    img = _context.sent;
                    return _context.abrupt("return", img);
                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }))();
        }
      };
      if (typeof DOMParser !== "undefined" || typeof DOMParserFallback === "undefined") {
        Reflect.deleteProperty(preset, "DOMParser");
      }
      return preset;
    }
    function node(_ref) {
      var DOMParser2 = _ref.DOMParser, canvas = _ref.canvas, fetch2 = _ref.fetch;
      return {
        window: null,
        ignoreAnimation: true,
        ignoreMouse: true,
        DOMParser: DOMParser2,
        fetch: fetch2,
        createCanvas: canvas.createCanvas,
        createImage: canvas.loadImage
      };
    }
    var index = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      offscreen,
      node
    });
    function compressSpaces(str) {
      return str.replace(/(?!\u3000)\s+/gm, " ");
    }
    function trimLeft(str) {
      return str.replace(/^[\n \t]+/, "");
    }
    function trimRight(str) {
      return str.replace(/[\n \t]+$/, "");
    }
    function toNumbers(str) {
      var matches = (str || "").match(/-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm) || [];
      return matches.map(parseFloat);
    }
    var allUppercase = /^[A-Z-]+$/;
    function normalizeAttributeName(name) {
      if (allUppercase.test(name)) {
        return name.toLowerCase();
      }
      return name;
    }
    function parseExternalUrl(url) {
      var urlMatch = /url\(('([^']+)'|"([^"]+)"|([^'")]+))\)/.exec(url) || [];
      return urlMatch[2] || urlMatch[3] || urlMatch[4];
    }
    function normalizeColor(color) {
      if (!color.startsWith("rgb")) {
        return color;
      }
      var rgbParts = 3;
      var normalizedColor = color.replace(/\d+(\.\d+)?/g, function(num, isFloat) {
        return rgbParts-- && isFloat ? String(Math.round(parseFloat(num))) : num;
      });
      return normalizedColor;
    }
    var attributeRegex = /(\[[^\]]+\])/g;
    var idRegex = /(#[^\s+>~.[:]+)/g;
    var classRegex = /(\.[^\s+>~.[:]+)/g;
    var pseudoElementRegex = /(::[^\s+>~.[:]+|:first-line|:first-letter|:before|:after)/gi;
    var pseudoClassWithBracketsRegex = /(:[\w-]+\([^)]*\))/gi;
    var pseudoClassRegex = /(:[^\s+>~.[:]+)/g;
    var elementRegex = /([^\s+>~.[:]+)/g;
    function findSelectorMatch(selector, regex) {
      var matches = regex.exec(selector);
      if (!matches) {
        return [selector, 0];
      }
      return [selector.replace(regex, " "), matches.length];
    }
    function getSelectorSpecificity(selector) {
      var specificity = [0, 0, 0];
      var currentSelector = selector.replace(/:not\(([^)]*)\)/g, "     $1 ").replace(/{[\s\S]*/gm, " ");
      var delta = 0;
      var _findSelectorMatch = findSelectorMatch(currentSelector, attributeRegex);
      var _findSelectorMatch2 = _slicedToArray__default["default"](_findSelectorMatch, 2);
      currentSelector = _findSelectorMatch2[0];
      delta = _findSelectorMatch2[1];
      specificity[1] += delta;
      var _findSelectorMatch3 = findSelectorMatch(currentSelector, idRegex);
      var _findSelectorMatch4 = _slicedToArray__default["default"](_findSelectorMatch3, 2);
      currentSelector = _findSelectorMatch4[0];
      delta = _findSelectorMatch4[1];
      specificity[0] += delta;
      var _findSelectorMatch5 = findSelectorMatch(currentSelector, classRegex);
      var _findSelectorMatch6 = _slicedToArray__default["default"](_findSelectorMatch5, 2);
      currentSelector = _findSelectorMatch6[0];
      delta = _findSelectorMatch6[1];
      specificity[1] += delta;
      var _findSelectorMatch7 = findSelectorMatch(currentSelector, pseudoElementRegex);
      var _findSelectorMatch8 = _slicedToArray__default["default"](_findSelectorMatch7, 2);
      currentSelector = _findSelectorMatch8[0];
      delta = _findSelectorMatch8[1];
      specificity[2] += delta;
      var _findSelectorMatch9 = findSelectorMatch(currentSelector, pseudoClassWithBracketsRegex);
      var _findSelectorMatch10 = _slicedToArray__default["default"](_findSelectorMatch9, 2);
      currentSelector = _findSelectorMatch10[0];
      delta = _findSelectorMatch10[1];
      specificity[1] += delta;
      var _findSelectorMatch11 = findSelectorMatch(currentSelector, pseudoClassRegex);
      var _findSelectorMatch12 = _slicedToArray__default["default"](_findSelectorMatch11, 2);
      currentSelector = _findSelectorMatch12[0];
      delta = _findSelectorMatch12[1];
      specificity[1] += delta;
      currentSelector = currentSelector.replace(/[*\s+>~]/g, " ").replace(/[#.]/g, " ");
      var _findSelectorMatch13 = findSelectorMatch(currentSelector, elementRegex);
      var _findSelectorMatch14 = _slicedToArray__default["default"](_findSelectorMatch13, 2);
      currentSelector = _findSelectorMatch14[0];
      delta = _findSelectorMatch14[1];
      specificity[2] += delta;
      return specificity.join("");
    }
    var PSEUDO_ZERO = 1e-8;
    function vectorMagnitude(v) {
      return Math.sqrt(Math.pow(v[0], 2) + Math.pow(v[1], 2));
    }
    function vectorsRatio(u, v) {
      return (u[0] * v[0] + u[1] * v[1]) / (vectorMagnitude(u) * vectorMagnitude(v));
    }
    function vectorsAngle(u, v) {
      return (u[0] * v[1] < u[1] * v[0] ? -1 : 1) * Math.acos(vectorsRatio(u, v));
    }
    function CB1(t) {
      return t * t * t;
    }
    function CB2(t) {
      return 3 * t * t * (1 - t);
    }
    function CB3(t) {
      return 3 * t * (1 - t) * (1 - t);
    }
    function CB4(t) {
      return (1 - t) * (1 - t) * (1 - t);
    }
    function QB1(t) {
      return t * t;
    }
    function QB2(t) {
      return 2 * t * (1 - t);
    }
    function QB3(t) {
      return (1 - t) * (1 - t);
    }
    var Property = /* @__PURE__ */ (function() {
      function Property2(document2, name, value) {
        _classCallCheck__default["default"](this, Property2);
        this.document = document2;
        this.name = name;
        this.value = value;
        this.isNormalizedColor = false;
      }
      _createClass__default["default"](Property2, [{
        key: "split",
        value: function split() {
          var separator = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : " ";
          var document2 = this.document, name = this.name;
          return compressSpaces(this.getString()).trim().split(separator).map(function(value) {
            return new Property2(document2, name, value);
          });
        }
      }, {
        key: "hasValue",
        value: function hasValue(zeroIsValue) {
          var value = this.value;
          return value !== null && value !== "" && (zeroIsValue || value !== 0) && typeof value !== "undefined";
        }
      }, {
        key: "isString",
        value: function isString(regexp) {
          var value = this.value;
          var result = typeof value === "string";
          if (!result || !regexp) {
            return result;
          }
          return regexp.test(value);
        }
      }, {
        key: "isUrlDefinition",
        value: function isUrlDefinition() {
          return this.isString(/^url\(/);
        }
      }, {
        key: "isPixels",
        value: function isPixels() {
          if (!this.hasValue()) {
            return false;
          }
          var asString = this.getString();
          switch (true) {
            case asString.endsWith("px"):
            case /^[0-9]+$/.test(asString):
              return true;
            default:
              return false;
          }
        }
      }, {
        key: "setValue",
        value: function setValue(value) {
          this.value = value;
          return this;
        }
      }, {
        key: "getValue",
        value: function getValue(def) {
          if (typeof def === "undefined" || this.hasValue()) {
            return this.value;
          }
          return def;
        }
      }, {
        key: "getNumber",
        value: function getNumber(def) {
          if (!this.hasValue()) {
            if (typeof def === "undefined") {
              return 0;
            }
            return parseFloat(def);
          }
          var value = this.value;
          var n = parseFloat(value);
          if (this.isString(/%$/)) {
            n /= 100;
          }
          return n;
        }
      }, {
        key: "getString",
        value: function getString(def) {
          if (typeof def === "undefined" || this.hasValue()) {
            return typeof this.value === "undefined" ? "" : String(this.value);
          }
          return String(def);
        }
      }, {
        key: "getColor",
        value: function getColor(def) {
          var color = this.getString(def);
          if (this.isNormalizedColor) {
            return color;
          }
          this.isNormalizedColor = true;
          color = normalizeColor(color);
          this.value = color;
          return color;
        }
      }, {
        key: "getDpi",
        value: function getDpi() {
          return 96;
        }
      }, {
        key: "getRem",
        value: function getRem() {
          return this.document.rootEmSize;
        }
      }, {
        key: "getEm",
        value: function getEm() {
          return this.document.emSize;
        }
      }, {
        key: "getUnits",
        value: function getUnits() {
          return this.getString().replace(/[0-9.-]/g, "");
        }
      }, {
        key: "getPixels",
        value: function getPixels(axisOrIsFontSize) {
          var processPercent = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
          if (!this.hasValue()) {
            return 0;
          }
          var _ref = typeof axisOrIsFontSize === "boolean" ? [void 0, axisOrIsFontSize] : [axisOrIsFontSize], _ref2 = _slicedToArray__default["default"](_ref, 2), axis = _ref2[0], isFontSize = _ref2[1];
          var viewPort = this.document.screen.viewPort;
          switch (true) {
            case this.isString(/vmin$/):
              return this.getNumber() / 100 * Math.min(viewPort.computeSize("x"), viewPort.computeSize("y"));
            case this.isString(/vmax$/):
              return this.getNumber() / 100 * Math.max(viewPort.computeSize("x"), viewPort.computeSize("y"));
            case this.isString(/vw$/):
              return this.getNumber() / 100 * viewPort.computeSize("x");
            case this.isString(/vh$/):
              return this.getNumber() / 100 * viewPort.computeSize("y");
            case this.isString(/rem$/):
              return this.getNumber() * this.getRem();
            case this.isString(/em$/):
              return this.getNumber() * this.getEm();
            case this.isString(/ex$/):
              return this.getNumber() * this.getEm() / 2;
            case this.isString(/px$/):
              return this.getNumber();
            case this.isString(/pt$/):
              return this.getNumber() * this.getDpi() * (1 / 72);
            case this.isString(/pc$/):
              return this.getNumber() * 15;
            case this.isString(/cm$/):
              return this.getNumber() * this.getDpi() / 2.54;
            case this.isString(/mm$/):
              return this.getNumber() * this.getDpi() / 25.4;
            case this.isString(/in$/):
              return this.getNumber() * this.getDpi();
            case (this.isString(/%$/) && isFontSize):
              return this.getNumber() * this.getEm();
            case this.isString(/%$/):
              return this.getNumber() * viewPort.computeSize(axis);
            default: {
              var n = this.getNumber();
              if (processPercent && n < 1) {
                return n * viewPort.computeSize(axis);
              }
              return n;
            }
          }
        }
      }, {
        key: "getMilliseconds",
        value: function getMilliseconds() {
          if (!this.hasValue()) {
            return 0;
          }
          if (this.isString(/ms$/)) {
            return this.getNumber();
          }
          return this.getNumber() * 1e3;
        }
      }, {
        key: "getRadians",
        value: function getRadians() {
          if (!this.hasValue()) {
            return 0;
          }
          switch (true) {
            case this.isString(/deg$/):
              return this.getNumber() * (Math.PI / 180);
            case this.isString(/grad$/):
              return this.getNumber() * (Math.PI / 200);
            case this.isString(/rad$/):
              return this.getNumber();
            default:
              return this.getNumber() * (Math.PI / 180);
          }
        }
      }, {
        key: "getDefinition",
        value: function getDefinition() {
          var asString = this.getString();
          var name = /#([^)'"]+)/.exec(asString);
          if (name) {
            name = name[1];
          }
          if (!name) {
            name = asString;
          }
          return this.document.definitions[name];
        }
      }, {
        key: "getFillStyleDefinition",
        value: function getFillStyleDefinition(element, opacity) {
          var def = this.getDefinition();
          if (!def) {
            return null;
          }
          if (typeof def.createGradient === "function") {
            return def.createGradient(this.document.ctx, element, opacity);
          }
          if (typeof def.createPattern === "function") {
            if (def.getHrefAttribute().hasValue()) {
              var patternTransform = def.getAttribute("patternTransform");
              def = def.getHrefAttribute().getDefinition();
              if (patternTransform.hasValue()) {
                def.getAttribute("patternTransform", true).setValue(patternTransform.value);
              }
            }
            return def.createPattern(this.document.ctx, element, opacity);
          }
          return null;
        }
      }, {
        key: "getTextBaseline",
        value: function getTextBaseline() {
          if (!this.hasValue()) {
            return null;
          }
          return Property2.textBaselineMapping[this.getString()];
        }
      }, {
        key: "addOpacity",
        value: function addOpacity(opacity) {
          var value = this.getColor();
          var len = value.length;
          var commas = 0;
          for (var i = 0; i < len; i++) {
            if (value[i] === ",") {
              commas++;
            }
            if (commas === 3) {
              break;
            }
          }
          if (opacity.hasValue() && this.isString() && commas !== 3) {
            var color = new RGBColor__default["default"](value);
            if (color.ok) {
              color.alpha = opacity.getNumber();
              value = color.toRGBA();
            }
          }
          return new Property2(this.document, this.name, value);
        }
      }], [{
        key: "empty",
        value: function empty(document2) {
          return new Property2(document2, "EMPTY", "");
        }
      }]);
      return Property2;
    })();
    Property.textBaselineMapping = {
      "baseline": "alphabetic",
      "before-edge": "top",
      "text-before-edge": "top",
      "middle": "middle",
      "central": "middle",
      "after-edge": "bottom",
      "text-after-edge": "bottom",
      "ideographic": "ideographic",
      "alphabetic": "alphabetic",
      "hanging": "hanging",
      "mathematical": "alphabetic"
    };
    var ViewPort = /* @__PURE__ */ (function() {
      function ViewPort2() {
        _classCallCheck__default["default"](this, ViewPort2);
        this.viewPorts = [];
      }
      _createClass__default["default"](ViewPort2, [{
        key: "clear",
        value: function clear() {
          this.viewPorts = [];
        }
      }, {
        key: "setCurrent",
        value: function setCurrent(width, height) {
          this.viewPorts.push({
            width,
            height
          });
        }
      }, {
        key: "removeCurrent",
        value: function removeCurrent() {
          this.viewPorts.pop();
        }
      }, {
        key: "getCurrent",
        value: function getCurrent() {
          var viewPorts = this.viewPorts;
          return viewPorts[viewPorts.length - 1];
        }
      }, {
        key: "computeSize",
        value: function computeSize(d) {
          if (typeof d === "number") {
            return d;
          }
          if (d === "x") {
            return this.width;
          }
          if (d === "y") {
            return this.height;
          }
          return Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2)) / Math.sqrt(2);
        }
      }, {
        key: "width",
        get: function get() {
          return this.getCurrent().width;
        }
      }, {
        key: "height",
        get: function get() {
          return this.getCurrent().height;
        }
      }]);
      return ViewPort2;
    })();
    var Point = /* @__PURE__ */ (function() {
      function Point2(x, y) {
        _classCallCheck__default["default"](this, Point2);
        this.x = x;
        this.y = y;
      }
      _createClass__default["default"](Point2, [{
        key: "angleTo",
        value: function angleTo(point) {
          return Math.atan2(point.y - this.y, point.x - this.x);
        }
      }, {
        key: "applyTransform",
        value: function applyTransform(transform) {
          var x = this.x, y = this.y;
          var xp = x * transform[0] + y * transform[2] + transform[4];
          var yp = x * transform[1] + y * transform[3] + transform[5];
          this.x = xp;
          this.y = yp;
        }
      }], [{
        key: "parse",
        value: function parse(point) {
          var defaultValue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          var _toNumbers = toNumbers(point), _toNumbers2 = _slicedToArray__default["default"](_toNumbers, 2), _toNumbers2$ = _toNumbers2[0], x = _toNumbers2$ === void 0 ? defaultValue : _toNumbers2$, _toNumbers2$2 = _toNumbers2[1], y = _toNumbers2$2 === void 0 ? defaultValue : _toNumbers2$2;
          return new Point2(x, y);
        }
      }, {
        key: "parseScale",
        value: function parseScale(scale) {
          var defaultValue = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
          var _toNumbers3 = toNumbers(scale), _toNumbers4 = _slicedToArray__default["default"](_toNumbers3, 2), _toNumbers4$ = _toNumbers4[0], x = _toNumbers4$ === void 0 ? defaultValue : _toNumbers4$, _toNumbers4$2 = _toNumbers4[1], y = _toNumbers4$2 === void 0 ? x : _toNumbers4$2;
          return new Point2(x, y);
        }
      }, {
        key: "parsePath",
        value: function parsePath(path) {
          var points = toNumbers(path);
          var len = points.length;
          var pathPoints = [];
          for (var i = 0; i < len; i += 2) {
            pathPoints.push(new Point2(points[i], points[i + 1]));
          }
          return pathPoints;
        }
      }]);
      return Point2;
    })();
    var Mouse = /* @__PURE__ */ (function() {
      function Mouse2(screen) {
        _classCallCheck__default["default"](this, Mouse2);
        this.screen = screen;
        this.working = false;
        this.events = [];
        this.eventElements = [];
        this.onClick = this.onClick.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
      }
      _createClass__default["default"](Mouse2, [{
        key: "isWorking",
        value: function isWorking() {
          return this.working;
        }
      }, {
        key: "start",
        value: function start() {
          if (this.working) {
            return;
          }
          var screen = this.screen, onClick = this.onClick, onMouseMove = this.onMouseMove;
          var canvas = screen.ctx.canvas;
          canvas.onclick = onClick;
          canvas.onmousemove = onMouseMove;
          this.working = true;
        }
      }, {
        key: "stop",
        value: function stop() {
          if (!this.working) {
            return;
          }
          var canvas = this.screen.ctx.canvas;
          this.working = false;
          canvas.onclick = null;
          canvas.onmousemove = null;
        }
      }, {
        key: "hasEvents",
        value: function hasEvents() {
          return this.working && this.events.length > 0;
        }
      }, {
        key: "runEvents",
        value: function runEvents() {
          if (!this.working) {
            return;
          }
          var document2 = this.screen, events = this.events, eventElements = this.eventElements;
          var style = document2.ctx.canvas.style;
          if (style) {
            style.cursor = "";
          }
          events.forEach(function(_ref, i) {
            var run = _ref.run;
            var element = eventElements[i];
            while (element) {
              run(element);
              element = element.parent;
            }
          });
          this.events = [];
          this.eventElements = [];
        }
      }, {
        key: "checkPath",
        value: function checkPath(element, ctx) {
          if (!this.working || !ctx) {
            return;
          }
          var events = this.events, eventElements = this.eventElements;
          events.forEach(function(_ref2, i) {
            var x = _ref2.x, y = _ref2.y;
            if (!eventElements[i] && ctx.isPointInPath && ctx.isPointInPath(x, y)) {
              eventElements[i] = element;
            }
          });
        }
      }, {
        key: "checkBoundingBox",
        value: function checkBoundingBox(element, boundingBox) {
          if (!this.working || !boundingBox) {
            return;
          }
          var events = this.events, eventElements = this.eventElements;
          events.forEach(function(_ref3, i) {
            var x = _ref3.x, y = _ref3.y;
            if (!eventElements[i] && boundingBox.isPointInBox(x, y)) {
              eventElements[i] = element;
            }
          });
        }
      }, {
        key: "mapXY",
        value: function mapXY(x, y) {
          var _this$screen = this.screen, window2 = _this$screen.window, ctx = _this$screen.ctx;
          var point = new Point(x, y);
          var element = ctx.canvas;
          while (element) {
            point.x -= element.offsetLeft;
            point.y -= element.offsetTop;
            element = element.offsetParent;
          }
          if (window2.scrollX) {
            point.x += window2.scrollX;
          }
          if (window2.scrollY) {
            point.y += window2.scrollY;
          }
          return point;
        }
      }, {
        key: "onClick",
        value: function onClick(event) {
          var _this$mapXY = this.mapXY(event.clientX, event.clientY), x = _this$mapXY.x, y = _this$mapXY.y;
          this.events.push({
            type: "onclick",
            x,
            y,
            run: function run(eventTarget) {
              if (eventTarget.onClick) {
                eventTarget.onClick();
              }
            }
          });
        }
      }, {
        key: "onMouseMove",
        value: function onMouseMove(event) {
          var _this$mapXY2 = this.mapXY(event.clientX, event.clientY), x = _this$mapXY2.x, y = _this$mapXY2.y;
          this.events.push({
            type: "onmousemove",
            x,
            y,
            run: function run(eventTarget) {
              if (eventTarget.onMouseMove) {
                eventTarget.onMouseMove();
              }
            }
          });
        }
      }]);
      return Mouse2;
    })();
    var defaultWindow = typeof window !== "undefined" ? window : null;
    var defaultFetch$1 = typeof fetch !== "undefined" ? fetch.bind(void 0) : null;
    var Screen = /* @__PURE__ */ (function() {
      function Screen2(ctx) {
        var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$fetch = _ref.fetch, fetch2 = _ref$fetch === void 0 ? defaultFetch$1 : _ref$fetch, _ref$window = _ref.window, window2 = _ref$window === void 0 ? defaultWindow : _ref$window;
        _classCallCheck__default["default"](this, Screen2);
        this.ctx = ctx;
        this.FRAMERATE = 30;
        this.MAX_VIRTUAL_PIXELS = 3e4;
        this.CLIENT_WIDTH = 800;
        this.CLIENT_HEIGHT = 600;
        this.viewPort = new ViewPort();
        this.mouse = new Mouse(this);
        this.animations = [];
        this.waits = [];
        this.frameDuration = 0;
        this.isReadyLock = false;
        this.isFirstRender = true;
        this.intervalId = null;
        this.window = window2;
        this.fetch = fetch2;
      }
      _createClass__default["default"](Screen2, [{
        key: "wait",
        value: function wait(checker) {
          this.waits.push(checker);
        }
      }, {
        key: "ready",
        value: function ready() {
          if (!this.readyPromise) {
            return Promise.resolve();
          }
          return this.readyPromise;
        }
      }, {
        key: "isReady",
        value: function isReady() {
          if (this.isReadyLock) {
            return true;
          }
          var isReadyLock = this.waits.every(function(_) {
            return _();
          });
          if (isReadyLock) {
            this.waits = [];
            if (this.resolveReady) {
              this.resolveReady();
            }
          }
          this.isReadyLock = isReadyLock;
          return isReadyLock;
        }
      }, {
        key: "setDefaults",
        value: function setDefaults(ctx) {
          ctx.strokeStyle = "rgba(0,0,0,0)";
          ctx.lineCap = "butt";
          ctx.lineJoin = "miter";
          ctx.miterLimit = 4;
        }
      }, {
        key: "setViewBox",
        value: function setViewBox(_ref2) {
          var document2 = _ref2.document, ctx = _ref2.ctx, aspectRatio = _ref2.aspectRatio, width = _ref2.width, desiredWidth = _ref2.desiredWidth, height = _ref2.height, desiredHeight = _ref2.desiredHeight, _ref2$minX = _ref2.minX, minX = _ref2$minX === void 0 ? 0 : _ref2$minX, _ref2$minY = _ref2.minY, minY = _ref2$minY === void 0 ? 0 : _ref2$minY, refX = _ref2.refX, refY = _ref2.refY, _ref2$clip = _ref2.clip, clip = _ref2$clip === void 0 ? false : _ref2$clip, _ref2$clipX = _ref2.clipX, clipX = _ref2$clipX === void 0 ? 0 : _ref2$clipX, _ref2$clipY = _ref2.clipY, clipY = _ref2$clipY === void 0 ? 0 : _ref2$clipY;
          var cleanAspectRatio = compressSpaces(aspectRatio).replace(/^defer\s/, "");
          var _cleanAspectRatio$spl = cleanAspectRatio.split(" "), _cleanAspectRatio$spl2 = _slicedToArray__default["default"](_cleanAspectRatio$spl, 2), aspectRatioAlign = _cleanAspectRatio$spl2[0], aspectRatioMeetOrSlice = _cleanAspectRatio$spl2[1];
          var align = aspectRatioAlign || "xMidYMid";
          var meetOrSlice = aspectRatioMeetOrSlice || "meet";
          var scaleX = width / desiredWidth;
          var scaleY = height / desiredHeight;
          var scaleMin = Math.min(scaleX, scaleY);
          var scaleMax = Math.max(scaleX, scaleY);
          var finalDesiredWidth = desiredWidth;
          var finalDesiredHeight = desiredHeight;
          if (meetOrSlice === "meet") {
            finalDesiredWidth *= scaleMin;
            finalDesiredHeight *= scaleMin;
          }
          if (meetOrSlice === "slice") {
            finalDesiredWidth *= scaleMax;
            finalDesiredHeight *= scaleMax;
          }
          var refXProp = new Property(document2, "refX", refX);
          var refYProp = new Property(document2, "refY", refY);
          var hasRefs = refXProp.hasValue() && refYProp.hasValue();
          if (hasRefs) {
            ctx.translate(-scaleMin * refXProp.getPixels("x"), -scaleMin * refYProp.getPixels("y"));
          }
          if (clip) {
            var scaledClipX = scaleMin * clipX;
            var scaledClipY = scaleMin * clipY;
            ctx.beginPath();
            ctx.moveTo(scaledClipX, scaledClipY);
            ctx.lineTo(width, scaledClipY);
            ctx.lineTo(width, height);
            ctx.lineTo(scaledClipX, height);
            ctx.closePath();
            ctx.clip();
          }
          if (!hasRefs) {
            var isMeetMinY = meetOrSlice === "meet" && scaleMin === scaleY;
            var isSliceMaxY = meetOrSlice === "slice" && scaleMax === scaleY;
            var isMeetMinX = meetOrSlice === "meet" && scaleMin === scaleX;
            var isSliceMaxX = meetOrSlice === "slice" && scaleMax === scaleX;
            if (align.startsWith("xMid") && (isMeetMinY || isSliceMaxY)) {
              ctx.translate(width / 2 - finalDesiredWidth / 2, 0);
            }
            if (align.endsWith("YMid") && (isMeetMinX || isSliceMaxX)) {
              ctx.translate(0, height / 2 - finalDesiredHeight / 2);
            }
            if (align.startsWith("xMax") && (isMeetMinY || isSliceMaxY)) {
              ctx.translate(width - finalDesiredWidth, 0);
            }
            if (align.endsWith("YMax") && (isMeetMinX || isSliceMaxX)) {
              ctx.translate(0, height - finalDesiredHeight);
            }
          }
          switch (true) {
            case align === "none":
              ctx.scale(scaleX, scaleY);
              break;
            case meetOrSlice === "meet":
              ctx.scale(scaleMin, scaleMin);
              break;
            case meetOrSlice === "slice":
              ctx.scale(scaleMax, scaleMax);
              break;
          }
          ctx.translate(-minX, -minY);
        }
      }, {
        key: "start",
        value: function start(element) {
          var _this = this;
          var _ref3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref3$enableRedraw = _ref3.enableRedraw, enableRedraw = _ref3$enableRedraw === void 0 ? false : _ref3$enableRedraw, _ref3$ignoreMouse = _ref3.ignoreMouse, ignoreMouse = _ref3$ignoreMouse === void 0 ? false : _ref3$ignoreMouse, _ref3$ignoreAnimation = _ref3.ignoreAnimation, ignoreAnimation = _ref3$ignoreAnimation === void 0 ? false : _ref3$ignoreAnimation, _ref3$ignoreDimension = _ref3.ignoreDimensions, ignoreDimensions = _ref3$ignoreDimension === void 0 ? false : _ref3$ignoreDimension, _ref3$ignoreClear = _ref3.ignoreClear, ignoreClear = _ref3$ignoreClear === void 0 ? false : _ref3$ignoreClear, forceRedraw = _ref3.forceRedraw, scaleWidth = _ref3.scaleWidth, scaleHeight = _ref3.scaleHeight, offsetX = _ref3.offsetX, offsetY = _ref3.offsetY;
          var FRAMERATE = this.FRAMERATE, mouse = this.mouse;
          var frameDuration = 1e3 / FRAMERATE;
          this.frameDuration = frameDuration;
          this.readyPromise = new Promise(function(resolve) {
            _this.resolveReady = resolve;
          });
          if (this.isReady()) {
            this.render(element, ignoreDimensions, ignoreClear, scaleWidth, scaleHeight, offsetX, offsetY);
          }
          if (!enableRedraw) {
            return;
          }
          var now = Date.now();
          var then = now;
          var delta = 0;
          var tick = function tick2() {
            now = Date.now();
            delta = now - then;
            if (delta >= frameDuration) {
              then = now - delta % frameDuration;
              if (_this.shouldUpdate(ignoreAnimation, forceRedraw)) {
                _this.render(element, ignoreDimensions, ignoreClear, scaleWidth, scaleHeight, offsetX, offsetY);
                mouse.runEvents();
              }
            }
            _this.intervalId = requestAnimationFrame__default["default"](tick2);
          };
          if (!ignoreMouse) {
            mouse.start();
          }
          this.intervalId = requestAnimationFrame__default["default"](tick);
        }
      }, {
        key: "stop",
        value: function stop() {
          if (this.intervalId) {
            requestAnimationFrame__default["default"].cancel(this.intervalId);
            this.intervalId = null;
          }
          this.mouse.stop();
        }
      }, {
        key: "shouldUpdate",
        value: function shouldUpdate(ignoreAnimation, forceRedraw) {
          if (!ignoreAnimation) {
            var frameDuration = this.frameDuration;
            var shouldUpdate2 = this.animations.reduce(function(shouldUpdate3, animation) {
              return animation.update(frameDuration) || shouldUpdate3;
            }, false);
            if (shouldUpdate2) {
              return true;
            }
          }
          if (typeof forceRedraw === "function" && forceRedraw()) {
            return true;
          }
          if (!this.isReadyLock && this.isReady()) {
            return true;
          }
          if (this.mouse.hasEvents()) {
            return true;
          }
          return false;
        }
      }, {
        key: "render",
        value: function render(element, ignoreDimensions, ignoreClear, scaleWidth, scaleHeight, offsetX, offsetY) {
          var CLIENT_WIDTH = this.CLIENT_WIDTH, CLIENT_HEIGHT = this.CLIENT_HEIGHT, viewPort = this.viewPort, ctx = this.ctx, isFirstRender = this.isFirstRender;
          var canvas = ctx.canvas;
          viewPort.clear();
          if (canvas.width && canvas.height) {
            viewPort.setCurrent(canvas.width, canvas.height);
          } else {
            viewPort.setCurrent(CLIENT_WIDTH, CLIENT_HEIGHT);
          }
          var widthStyle = element.getStyle("width");
          var heightStyle = element.getStyle("height");
          if (!ignoreDimensions && (isFirstRender || typeof scaleWidth !== "number" && typeof scaleHeight !== "number")) {
            if (widthStyle.hasValue()) {
              canvas.width = widthStyle.getPixels("x");
              if (canvas.style) {
                canvas.style.width = "".concat(canvas.width, "px");
              }
            }
            if (heightStyle.hasValue()) {
              canvas.height = heightStyle.getPixels("y");
              if (canvas.style) {
                canvas.style.height = "".concat(canvas.height, "px");
              }
            }
          }
          var cWidth = canvas.clientWidth || canvas.width;
          var cHeight = canvas.clientHeight || canvas.height;
          if (ignoreDimensions && widthStyle.hasValue() && heightStyle.hasValue()) {
            cWidth = widthStyle.getPixels("x");
            cHeight = heightStyle.getPixels("y");
          }
          viewPort.setCurrent(cWidth, cHeight);
          if (typeof offsetX === "number") {
            element.getAttribute("x", true).setValue(offsetX);
          }
          if (typeof offsetY === "number") {
            element.getAttribute("y", true).setValue(offsetY);
          }
          if (typeof scaleWidth === "number" || typeof scaleHeight === "number") {
            var viewBox = toNumbers(element.getAttribute("viewBox").getString());
            var xRatio = 0;
            var yRatio = 0;
            if (typeof scaleWidth === "number") {
              var _widthStyle = element.getStyle("width");
              if (_widthStyle.hasValue()) {
                xRatio = _widthStyle.getPixels("x") / scaleWidth;
              } else if (!isNaN(viewBox[2])) {
                xRatio = viewBox[2] / scaleWidth;
              }
            }
            if (typeof scaleHeight === "number") {
              var _heightStyle = element.getStyle("height");
              if (_heightStyle.hasValue()) {
                yRatio = _heightStyle.getPixels("y") / scaleHeight;
              } else if (!isNaN(viewBox[3])) {
                yRatio = viewBox[3] / scaleHeight;
              }
            }
            if (!xRatio) {
              xRatio = yRatio;
            }
            if (!yRatio) {
              yRatio = xRatio;
            }
            element.getAttribute("width", true).setValue(scaleWidth);
            element.getAttribute("height", true).setValue(scaleHeight);
            var transformStyle = element.getStyle("transform", true, true);
            transformStyle.setValue("".concat(transformStyle.getString(), " scale(").concat(1 / xRatio, ", ").concat(1 / yRatio, ")"));
          }
          if (!ignoreClear) {
            ctx.clearRect(0, 0, cWidth, cHeight);
          }
          element.render(ctx);
          if (isFirstRender) {
            this.isFirstRender = false;
          }
        }
      }]);
      return Screen2;
    })();
    Screen.defaultWindow = defaultWindow;
    Screen.defaultFetch = defaultFetch$1;
    var defaultFetch = Screen.defaultFetch;
    var DefaultDOMParser = typeof DOMParser !== "undefined" ? DOMParser : null;
    var Parser = /* @__PURE__ */ (function() {
      function Parser2() {
        var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref$fetch = _ref.fetch, fetch2 = _ref$fetch === void 0 ? defaultFetch : _ref$fetch, _ref$DOMParser = _ref.DOMParser, DOMParser2 = _ref$DOMParser === void 0 ? DefaultDOMParser : _ref$DOMParser;
        _classCallCheck__default["default"](this, Parser2);
        this.fetch = fetch2;
        this.DOMParser = DOMParser2;
      }
      _createClass__default["default"](Parser2, [{
        key: "parse",
        value: (function() {
          var _parse = _asyncToGenerator__default["default"](/* @__PURE__ */ _regeneratorRuntime__default["default"].mark(function _callee(resource) {
            return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!resource.startsWith("<")) {
                      _context.next = 2;
                      break;
                    }
                    return _context.abrupt("return", this.parseFromString(resource));
                  case 2:
                    return _context.abrupt("return", this.load(resource));
                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
          function parse(_x) {
            return _parse.apply(this, arguments);
          }
          return parse;
        })()
      }, {
        key: "parseFromString",
        value: function parseFromString(xml) {
          var parser = new this.DOMParser();
          try {
            return this.checkDocument(parser.parseFromString(xml, "image/svg+xml"));
          } catch (err) {
            return this.checkDocument(parser.parseFromString(xml, "text/xml"));
          }
        }
      }, {
        key: "checkDocument",
        value: function checkDocument(document2) {
          var parserError = document2.getElementsByTagName("parsererror")[0];
          if (parserError) {
            throw new Error(parserError.textContent);
          }
          return document2;
        }
      }, {
        key: "load",
        value: (function() {
          var _load = _asyncToGenerator__default["default"](/* @__PURE__ */ _regeneratorRuntime__default["default"].mark(function _callee2(url) {
            var response, xml;
            return _regeneratorRuntime__default["default"].wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.fetch(url);
                  case 2:
                    response = _context2.sent;
                    _context2.next = 5;
                    return response.text();
                  case 5:
                    xml = _context2.sent;
                    return _context2.abrupt("return", this.parseFromString(xml));
                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
          function load(_x2) {
            return _load.apply(this, arguments);
          }
          return load;
        })()
      }]);
      return Parser2;
    })();
    var Translate = /* @__PURE__ */ (function() {
      function Translate2(_, point) {
        _classCallCheck__default["default"](this, Translate2);
        this.type = "translate";
        this.point = null;
        this.point = Point.parse(point);
      }
      _createClass__default["default"](Translate2, [{
        key: "apply",
        value: function apply(ctx) {
          var _this$point = this.point, x = _this$point.x, y = _this$point.y;
          ctx.translate(x || 0, y || 0);
        }
      }, {
        key: "unapply",
        value: function unapply(ctx) {
          var _this$point2 = this.point, x = _this$point2.x, y = _this$point2.y;
          ctx.translate(-1 * x || 0, -1 * y || 0);
        }
      }, {
        key: "applyToPoint",
        value: function applyToPoint(point) {
          var _this$point3 = this.point, x = _this$point3.x, y = _this$point3.y;
          point.applyTransform([1, 0, 0, 1, x || 0, y || 0]);
        }
      }]);
      return Translate2;
    })();
    var Rotate = /* @__PURE__ */ (function() {
      function Rotate2(document2, rotate, transformOrigin) {
        _classCallCheck__default["default"](this, Rotate2);
        this.type = "rotate";
        this.angle = null;
        this.originX = null;
        this.originY = null;
        this.cx = 0;
        this.cy = 0;
        var numbers = toNumbers(rotate);
        this.angle = new Property(document2, "angle", numbers[0]);
        this.originX = transformOrigin[0];
        this.originY = transformOrigin[1];
        this.cx = numbers[1] || 0;
        this.cy = numbers[2] || 0;
      }
      _createClass__default["default"](Rotate2, [{
        key: "apply",
        value: function apply(ctx) {
          var cx = this.cx, cy = this.cy, originX = this.originX, originY = this.originY, angle = this.angle;
          var tx = cx + originX.getPixels("x");
          var ty = cy + originY.getPixels("y");
          ctx.translate(tx, ty);
          ctx.rotate(angle.getRadians());
          ctx.translate(-tx, -ty);
        }
      }, {
        key: "unapply",
        value: function unapply(ctx) {
          var cx = this.cx, cy = this.cy, originX = this.originX, originY = this.originY, angle = this.angle;
          var tx = cx + originX.getPixels("x");
          var ty = cy + originY.getPixels("y");
          ctx.translate(tx, ty);
          ctx.rotate(-1 * angle.getRadians());
          ctx.translate(-tx, -ty);
        }
      }, {
        key: "applyToPoint",
        value: function applyToPoint(point) {
          var cx = this.cx, cy = this.cy, angle = this.angle;
          var rad = angle.getRadians();
          point.applyTransform([
            1,
            0,
            0,
            1,
            cx || 0,
            cy || 0
            // this.p.y
          ]);
          point.applyTransform([Math.cos(rad), Math.sin(rad), -Math.sin(rad), Math.cos(rad), 0, 0]);
          point.applyTransform([
            1,
            0,
            0,
            1,
            -cx || 0,
            -cy || 0
            // -this.p.y
          ]);
        }
      }]);
      return Rotate2;
    })();
    var Scale = /* @__PURE__ */ (function() {
      function Scale2(_, scale, transformOrigin) {
        _classCallCheck__default["default"](this, Scale2);
        this.type = "scale";
        this.scale = null;
        this.originX = null;
        this.originY = null;
        var scaleSize = Point.parseScale(scale);
        if (scaleSize.x === 0 || scaleSize.y === 0) {
          scaleSize.x = PSEUDO_ZERO;
          scaleSize.y = PSEUDO_ZERO;
        }
        this.scale = scaleSize;
        this.originX = transformOrigin[0];
        this.originY = transformOrigin[1];
      }
      _createClass__default["default"](Scale2, [{
        key: "apply",
        value: function apply(ctx) {
          var _this$scale = this.scale, x = _this$scale.x, y = _this$scale.y, originX = this.originX, originY = this.originY;
          var tx = originX.getPixels("x");
          var ty = originY.getPixels("y");
          ctx.translate(tx, ty);
          ctx.scale(x, y || x);
          ctx.translate(-tx, -ty);
        }
      }, {
        key: "unapply",
        value: function unapply(ctx) {
          var _this$scale2 = this.scale, x = _this$scale2.x, y = _this$scale2.y, originX = this.originX, originY = this.originY;
          var tx = originX.getPixels("x");
          var ty = originY.getPixels("y");
          ctx.translate(tx, ty);
          ctx.scale(1 / x, 1 / y || x);
          ctx.translate(-tx, -ty);
        }
      }, {
        key: "applyToPoint",
        value: function applyToPoint(point) {
          var _this$scale3 = this.scale, x = _this$scale3.x, y = _this$scale3.y;
          point.applyTransform([x || 0, 0, 0, y || 0, 0, 0]);
        }
      }]);
      return Scale2;
    })();
    var Matrix = /* @__PURE__ */ (function() {
      function Matrix2(_, matrix, transformOrigin) {
        _classCallCheck__default["default"](this, Matrix2);
        this.type = "matrix";
        this.matrix = [];
        this.originX = null;
        this.originY = null;
        this.matrix = toNumbers(matrix);
        this.originX = transformOrigin[0];
        this.originY = transformOrigin[1];
      }
      _createClass__default["default"](Matrix2, [{
        key: "apply",
        value: function apply(ctx) {
          var originX = this.originX, originY = this.originY, matrix = this.matrix;
          var tx = originX.getPixels("x");
          var ty = originY.getPixels("y");
          ctx.translate(tx, ty);
          ctx.transform(matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5]);
          ctx.translate(-tx, -ty);
        }
      }, {
        key: "unapply",
        value: function unapply(ctx) {
          var originX = this.originX, originY = this.originY, matrix = this.matrix;
          var a = matrix[0];
          var b = matrix[2];
          var c2 = matrix[4];
          var d = matrix[1];
          var e = matrix[3];
          var f = matrix[5];
          var g = 0;
          var h = 0;
          var i = 1;
          var det = 1 / (a * (e * i - f * h) - b * (d * i - f * g) + c2 * (d * h - e * g));
          var tx = originX.getPixels("x");
          var ty = originY.getPixels("y");
          ctx.translate(tx, ty);
          ctx.transform(det * (e * i - f * h), det * (f * g - d * i), det * (c2 * h - b * i), det * (a * i - c2 * g), det * (b * f - c2 * e), det * (c2 * d - a * f));
          ctx.translate(-tx, -ty);
        }
      }, {
        key: "applyToPoint",
        value: function applyToPoint(point) {
          point.applyTransform(this.matrix);
        }
      }]);
      return Matrix2;
    })();
    function _createSuper$M(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$M();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$M() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var Skew = /* @__PURE__ */ (function(_Matrix) {
      _inherits__default["default"](Skew2, _Matrix);
      var _super = _createSuper$M(Skew2);
      function Skew2(document2, skew, transformOrigin) {
        var _this;
        _classCallCheck__default["default"](this, Skew2);
        _this = _super.call(this, document2, skew, transformOrigin);
        _this.type = "skew";
        _this.angle = null;
        _this.angle = new Property(document2, "angle", skew);
        return _this;
      }
      return Skew2;
    })(Matrix);
    function _createSuper$L(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$L();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$L() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var SkewX = /* @__PURE__ */ (function(_Skew) {
      _inherits__default["default"](SkewX2, _Skew);
      var _super = _createSuper$L(SkewX2);
      function SkewX2(document2, skew, transformOrigin) {
        var _this;
        _classCallCheck__default["default"](this, SkewX2);
        _this = _super.call(this, document2, skew, transformOrigin);
        _this.type = "skewX";
        _this.matrix = [1, 0, Math.tan(_this.angle.getRadians()), 1, 0, 0];
        return _this;
      }
      return SkewX2;
    })(Skew);
    function _createSuper$K(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$K();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$K() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var SkewY = /* @__PURE__ */ (function(_Skew) {
      _inherits__default["default"](SkewY2, _Skew);
      var _super = _createSuper$K(SkewY2);
      function SkewY2(document2, skew, transformOrigin) {
        var _this;
        _classCallCheck__default["default"](this, SkewY2);
        _this = _super.call(this, document2, skew, transformOrigin);
        _this.type = "skewY";
        _this.matrix = [1, Math.tan(_this.angle.getRadians()), 0, 1, 0, 0];
        return _this;
      }
      return SkewY2;
    })(Skew);
    function parseTransforms(transform) {
      return compressSpaces(transform).trim().replace(/\)([a-zA-Z])/g, ") $1").replace(/\)(\s?,\s?)/g, ") ").split(/\s(?=[a-z])/);
    }
    function parseTransform(transform) {
      var _transform$split = transform.split("("), _transform$split2 = _slicedToArray__default["default"](_transform$split, 2), type = _transform$split2[0], value = _transform$split2[1];
      return [type.trim(), value.trim().replace(")", "")];
    }
    var Transform = /* @__PURE__ */ (function() {
      function Transform2(document2, transform, transformOrigin) {
        var _this = this;
        _classCallCheck__default["default"](this, Transform2);
        this.document = document2;
        this.transforms = [];
        var data = parseTransforms(transform);
        data.forEach(function(transform2) {
          if (transform2 === "none") {
            return;
          }
          var _parseTransform = parseTransform(transform2), _parseTransform2 = _slicedToArray__default["default"](_parseTransform, 2), type = _parseTransform2[0], value = _parseTransform2[1];
          var TransformType = Transform2.transformTypes[type];
          if (typeof TransformType !== "undefined") {
            _this.transforms.push(new TransformType(_this.document, value, transformOrigin));
          }
        });
      }
      _createClass__default["default"](Transform2, [{
        key: "apply",
        value: function apply(ctx) {
          var transforms = this.transforms;
          var len = transforms.length;
          for (var i = 0; i < len; i++) {
            transforms[i].apply(ctx);
          }
        }
      }, {
        key: "unapply",
        value: function unapply(ctx) {
          var transforms = this.transforms;
          var len = transforms.length;
          for (var i = len - 1; i >= 0; i--) {
            transforms[i].unapply(ctx);
          }
        }
        // TODO: applyToPoint unused ... remove?
      }, {
        key: "applyToPoint",
        value: function applyToPoint(point) {
          var transforms = this.transforms;
          var len = transforms.length;
          for (var i = 0; i < len; i++) {
            transforms[i].applyToPoint(point);
          }
        }
      }], [{
        key: "fromElement",
        value: function fromElement(document2, element) {
          var transformStyle = element.getStyle("transform", false, true);
          var _element$getStyle$spl = element.getStyle("transform-origin", false, true).split(), _element$getStyle$spl2 = _slicedToArray__default["default"](_element$getStyle$spl, 2), transformOriginXProperty = _element$getStyle$spl2[0], _element$getStyle$spl3 = _element$getStyle$spl2[1], transformOriginYProperty = _element$getStyle$spl3 === void 0 ? transformOriginXProperty : _element$getStyle$spl3;
          var transformOrigin = [transformOriginXProperty, transformOriginYProperty];
          if (transformStyle.hasValue()) {
            return new Transform2(document2, transformStyle.getString(), transformOrigin);
          }
          return null;
        }
      }]);
      return Transform2;
    })();
    Transform.transformTypes = {
      translate: Translate,
      rotate: Rotate,
      scale: Scale,
      matrix: Matrix,
      skewX: SkewX,
      skewY: SkewY
    };
    var Element = /* @__PURE__ */ (function() {
      function Element2(document2, node2) {
        var _this = this;
        var captureTextNodes = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
        _classCallCheck__default["default"](this, Element2);
        this.document = document2;
        this.node = node2;
        this.captureTextNodes = captureTextNodes;
        this.attributes = /* @__PURE__ */ Object.create(null);
        this.styles = /* @__PURE__ */ Object.create(null);
        this.stylesSpecificity = /* @__PURE__ */ Object.create(null);
        this.animationFrozen = false;
        this.animationFrozenValue = "";
        this.parent = null;
        this.children = [];
        if (!node2 || node2.nodeType !== 1) {
          return;
        }
        Array.from(node2.attributes).forEach(function(attribute) {
          var nodeName = normalizeAttributeName(attribute.nodeName);
          _this.attributes[nodeName] = new Property(document2, nodeName, attribute.value);
        });
        this.addStylesFromStyleDefinition();
        if (this.getAttribute("style").hasValue()) {
          var styles = this.getAttribute("style").getString().split(";").map(function(_) {
            return _.trim();
          });
          styles.forEach(function(style) {
            if (!style) {
              return;
            }
            var _style$split$map = style.split(":").map(function(_) {
              return _.trim();
            }), _style$split$map2 = _slicedToArray__default["default"](_style$split$map, 2), name = _style$split$map2[0], value = _style$split$map2[1];
            _this.styles[name] = new Property(document2, name, value);
          });
        }
        var definitions = document2.definitions;
        var id = this.getAttribute("id");
        if (id.hasValue()) {
          if (!definitions[id.getString()]) {
            definitions[id.getString()] = this;
          }
        }
        Array.from(node2.childNodes).forEach(function(childNode) {
          if (childNode.nodeType === 1) {
            _this.addChild(childNode);
          } else if (captureTextNodes && (childNode.nodeType === 3 || childNode.nodeType === 4)) {
            var textNode = document2.createTextNode(childNode);
            if (textNode.getText().length > 0) {
              _this.addChild(textNode);
            }
          }
        });
      }
      _createClass__default["default"](Element2, [{
        key: "getAttribute",
        value: function getAttribute(name) {
          var createIfNotExists = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
          var attr = this.attributes[name];
          if (!attr && createIfNotExists) {
            var _attr = new Property(this.document, name, "");
            this.attributes[name] = _attr;
            return _attr;
          }
          return attr || Property.empty(this.document);
        }
      }, {
        key: "getHrefAttribute",
        value: function getHrefAttribute() {
          for (var key in this.attributes) {
            if (key === "href" || key.endsWith(":href")) {
              return this.attributes[key];
            }
          }
          return Property.empty(this.document);
        }
      }, {
        key: "getStyle",
        value: function getStyle(name) {
          var createIfNotExists = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
          var skipAncestors = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
          var style = this.styles[name];
          if (style) {
            return style;
          }
          var attr = this.getAttribute(name);
          if (attr !== null && attr !== void 0 && attr.hasValue()) {
            this.styles[name] = attr;
            return attr;
          }
          if (!skipAncestors) {
            var parent = this.parent;
            if (parent) {
              var parentStyle = parent.getStyle(name);
              if (parentStyle !== null && parentStyle !== void 0 && parentStyle.hasValue()) {
                return parentStyle;
              }
            }
          }
          if (createIfNotExists) {
            var _style = new Property(this.document, name, "");
            this.styles[name] = _style;
            return _style;
          }
          return style || Property.empty(this.document);
        }
      }, {
        key: "render",
        value: function render(ctx) {
          if (this.getStyle("display").getString() === "none" || this.getStyle("visibility").getString() === "hidden") {
            return;
          }
          ctx.save();
          if (this.getStyle("mask").hasValue()) {
            var mask = this.getStyle("mask").getDefinition();
            if (mask) {
              this.applyEffects(ctx);
              mask.apply(ctx, this);
            }
          } else if (this.getStyle("filter").getValue("none") !== "none") {
            var filter = this.getStyle("filter").getDefinition();
            if (filter) {
              this.applyEffects(ctx);
              filter.apply(ctx, this);
            }
          } else {
            this.setContext(ctx);
            this.renderChildren(ctx);
            this.clearContext(ctx);
          }
          ctx.restore();
        }
      }, {
        key: "setContext",
        value: function setContext(_) {
        }
      }, {
        key: "applyEffects",
        value: function applyEffects(ctx) {
          var transform = Transform.fromElement(this.document, this);
          if (transform) {
            transform.apply(ctx);
          }
          var clipPathStyleProp = this.getStyle("clip-path", false, true);
          if (clipPathStyleProp.hasValue()) {
            var clip = clipPathStyleProp.getDefinition();
            if (clip) {
              clip.apply(ctx);
            }
          }
        }
      }, {
        key: "clearContext",
        value: function clearContext(_) {
        }
      }, {
        key: "renderChildren",
        value: function renderChildren(ctx) {
          this.children.forEach(function(child) {
            child.render(ctx);
          });
        }
      }, {
        key: "addChild",
        value: function addChild(childNode) {
          var child = childNode instanceof Element2 ? childNode : this.document.createElement(childNode);
          child.parent = this;
          if (!Element2.ignoreChildTypes.includes(child.type)) {
            this.children.push(child);
          }
        }
      }, {
        key: "matchesSelector",
        value: function matchesSelector(selector) {
          var _node$getAttribute;
          var node2 = this.node;
          if (typeof node2.matches === "function") {
            return node2.matches(selector);
          }
          var styleClasses = (_node$getAttribute = node2.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node2, "class");
          if (!styleClasses || styleClasses === "") {
            return false;
          }
          return styleClasses.split(" ").some(function(styleClass) {
            return ".".concat(styleClass) === selector;
          });
        }
      }, {
        key: "addStylesFromStyleDefinition",
        value: function addStylesFromStyleDefinition() {
          var _this$document = this.document, styles = _this$document.styles, stylesSpecificity = _this$document.stylesSpecificity;
          for (var selector in styles) {
            if (!selector.startsWith("@") && this.matchesSelector(selector)) {
              var style = styles[selector];
              var specificity = stylesSpecificity[selector];
              if (style) {
                for (var name in style) {
                  var existingSpecificity = this.stylesSpecificity[name];
                  if (typeof existingSpecificity === "undefined") {
                    existingSpecificity = "000";
                  }
                  if (specificity >= existingSpecificity) {
                    this.styles[name] = style[name];
                    this.stylesSpecificity[name] = specificity;
                  }
                }
              }
            }
          }
        }
      }, {
        key: "removeStyles",
        value: function removeStyles(element, ignoreStyles) {
          var toRestore = ignoreStyles.reduce(function(toRestore2, name) {
            var styleProp = element.getStyle(name);
            if (!styleProp.hasValue()) {
              return toRestore2;
            }
            var value = styleProp.getString();
            styleProp.setValue("");
            return [].concat(_toConsumableArray__default["default"](toRestore2), [[name, value]]);
          }, []);
          return toRestore;
        }
      }, {
        key: "restoreStyles",
        value: function restoreStyles(element, styles) {
          styles.forEach(function(_ref) {
            var _ref2 = _slicedToArray__default["default"](_ref, 2), name = _ref2[0], value = _ref2[1];
            element.getStyle(name, true).setValue(value);
          });
        }
      }, {
        key: "isFirstChild",
        value: function isFirstChild() {
          var _this$parent;
          return ((_this$parent = this.parent) === null || _this$parent === void 0 ? void 0 : _this$parent.children.indexOf(this)) === 0;
        }
      }]);
      return Element2;
    })();
    Element.ignoreChildTypes = ["title"];
    function _createSuper$J(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$J();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$J() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var UnknownElement = /* @__PURE__ */ (function(_Element) {
      _inherits__default["default"](UnknownElement2, _Element);
      var _super = _createSuper$J(UnknownElement2);
      function UnknownElement2(document2, node2, captureTextNodes) {
        var _this;
        _classCallCheck__default["default"](this, UnknownElement2);
        _this = _super.call(this, document2, node2, captureTextNodes);
        return _this;
      }
      return UnknownElement2;
    })(Element);
    function wrapFontFamily(fontFamily) {
      var trimmed = fontFamily.trim();
      return /^('|")/.test(trimmed) ? trimmed : '"'.concat(trimmed, '"');
    }
    function prepareFontFamily(fontFamily) {
      return typeof process === "undefined" ? fontFamily : fontFamily.trim().split(",").map(wrapFontFamily).join(",");
    }
    function prepareFontStyle(fontStyle) {
      if (!fontStyle) {
        return "";
      }
      var targetFontStyle = fontStyle.trim().toLowerCase();
      switch (targetFontStyle) {
        case "normal":
        case "italic":
        case "oblique":
        case "inherit":
        case "initial":
        case "unset":
          return targetFontStyle;
        default:
          if (/^oblique\s+(-|)\d+deg$/.test(targetFontStyle)) {
            return targetFontStyle;
          }
          return "";
      }
    }
    function prepareFontWeight(fontWeight) {
      if (!fontWeight) {
        return "";
      }
      var targetFontWeight = fontWeight.trim().toLowerCase();
      switch (targetFontWeight) {
        case "normal":
        case "bold":
        case "lighter":
        case "bolder":
        case "inherit":
        case "initial":
        case "unset":
          return targetFontWeight;
        default:
          if (/^[\d.]+$/.test(targetFontWeight)) {
            return targetFontWeight;
          }
          return "";
      }
    }
    var Font = /* @__PURE__ */ (function() {
      function Font2(fontStyle, fontVariant, fontWeight, fontSize, fontFamily, inherit) {
        _classCallCheck__default["default"](this, Font2);
        var inheritFont = inherit ? typeof inherit === "string" ? Font2.parse(inherit) : inherit : {};
        this.fontFamily = fontFamily || inheritFont.fontFamily;
        this.fontSize = fontSize || inheritFont.fontSize;
        this.fontStyle = fontStyle || inheritFont.fontStyle;
        this.fontWeight = fontWeight || inheritFont.fontWeight;
        this.fontVariant = fontVariant || inheritFont.fontVariant;
      }
      _createClass__default["default"](Font2, [{
        key: "toString",
        value: function toString() {
          return [
            prepareFontStyle(this.fontStyle),
            this.fontVariant,
            prepareFontWeight(this.fontWeight),
            this.fontSize,
            // Wrap fontFamily only on nodejs and only for canvas.ctx
            prepareFontFamily(this.fontFamily)
          ].join(" ").trim();
        }
      }], [{
        key: "parse",
        value: function parse() {
          var font = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
          var inherit = arguments.length > 1 ? arguments[1] : void 0;
          var fontStyle = "";
          var fontVariant = "";
          var fontWeight = "";
          var fontSize = "";
          var fontFamily = "";
          var parts = compressSpaces(font).trim().split(" ");
          var set = {
            fontSize: false,
            fontStyle: false,
            fontWeight: false,
            fontVariant: false
          };
          parts.forEach(function(part) {
            switch (true) {
              case (!set.fontStyle && Font2.styles.includes(part)):
                if (part !== "inherit") {
                  fontStyle = part;
                }
                set.fontStyle = true;
                break;
              case (!set.fontVariant && Font2.variants.includes(part)):
                if (part !== "inherit") {
                  fontVariant = part;
                }
                set.fontStyle = true;
                set.fontVariant = true;
                break;
              case (!set.fontWeight && Font2.weights.includes(part)):
                if (part !== "inherit") {
                  fontWeight = part;
                }
                set.fontStyle = true;
                set.fontVariant = true;
                set.fontWeight = true;
                break;
              case !set.fontSize:
                if (part !== "inherit") {
                  var _part$split = part.split("/");
                  var _part$split2 = _slicedToArray__default["default"](_part$split, 1);
                  fontSize = _part$split2[0];
                }
                set.fontStyle = true;
                set.fontVariant = true;
                set.fontWeight = true;
                set.fontSize = true;
                break;
              default:
                if (part !== "inherit") {
                  fontFamily += part;
                }
            }
          });
          return new Font2(fontStyle, fontVariant, fontWeight, fontSize, fontFamily, inherit);
        }
      }]);
      return Font2;
    })();
    Font.styles = "normal|italic|oblique|inherit";
    Font.variants = "normal|small-caps|inherit";
    Font.weights = "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit";
    var BoundingBox = /* @__PURE__ */ (function() {
      function BoundingBox2() {
        var x1 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Number.NaN;
        var y1 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.NaN;
        var x2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Number.NaN;
        var y2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Number.NaN;
        _classCallCheck__default["default"](this, BoundingBox2);
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.addPoint(x1, y1);
        this.addPoint(x2, y2);
      }
      _createClass__default["default"](BoundingBox2, [{
        key: "addPoint",
        value: function addPoint(x, y) {
          if (typeof x !== "undefined") {
            if (isNaN(this.x1) || isNaN(this.x2)) {
              this.x1 = x;
              this.x2 = x;
            }
            if (x < this.x1) {
              this.x1 = x;
            }
            if (x > this.x2) {
              this.x2 = x;
            }
          }
          if (typeof y !== "undefined") {
            if (isNaN(this.y1) || isNaN(this.y2)) {
              this.y1 = y;
              this.y2 = y;
            }
            if (y < this.y1) {
              this.y1 = y;
            }
            if (y > this.y2) {
              this.y2 = y;
            }
          }
        }
      }, {
        key: "addX",
        value: function addX(x) {
          this.addPoint(x, null);
        }
      }, {
        key: "addY",
        value: function addY(y) {
          this.addPoint(null, y);
        }
      }, {
        key: "addBoundingBox",
        value: function addBoundingBox(boundingBox) {
          if (!boundingBox) {
            return;
          }
          var x1 = boundingBox.x1, y1 = boundingBox.y1, x2 = boundingBox.x2, y2 = boundingBox.y2;
          this.addPoint(x1, y1);
          this.addPoint(x2, y2);
        }
      }, {
        key: "sumCubic",
        value: function sumCubic(t, p0, p1, p2, p3) {
          return Math.pow(1 - t, 3) * p0 + 3 * Math.pow(1 - t, 2) * t * p1 + 3 * (1 - t) * Math.pow(t, 2) * p2 + Math.pow(t, 3) * p3;
        }
      }, {
        key: "bezierCurveAdd",
        value: function bezierCurveAdd(forX, p0, p1, p2, p3) {
          var b = 6 * p0 - 12 * p1 + 6 * p2;
          var a = -3 * p0 + 9 * p1 - 9 * p2 + 3 * p3;
          var c2 = 3 * p1 - 3 * p0;
          if (a === 0) {
            if (b === 0) {
              return;
            }
            var t = -c2 / b;
            if (0 < t && t < 1) {
              if (forX) {
                this.addX(this.sumCubic(t, p0, p1, p2, p3));
              } else {
                this.addY(this.sumCubic(t, p0, p1, p2, p3));
              }
            }
            return;
          }
          var b2ac = Math.pow(b, 2) - 4 * c2 * a;
          if (b2ac < 0) {
            return;
          }
          var t1 = (-b + Math.sqrt(b2ac)) / (2 * a);
          if (0 < t1 && t1 < 1) {
            if (forX) {
              this.addX(this.sumCubic(t1, p0, p1, p2, p3));
            } else {
              this.addY(this.sumCubic(t1, p0, p1, p2, p3));
            }
          }
          var t2 = (-b - Math.sqrt(b2ac)) / (2 * a);
          if (0 < t2 && t2 < 1) {
            if (forX) {
              this.addX(this.sumCubic(t2, p0, p1, p2, p3));
            } else {
              this.addY(this.sumCubic(t2, p0, p1, p2, p3));
            }
          }
        }
        // from http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
      }, {
        key: "addBezierCurve",
        value: function addBezierCurve(p0x, p0y, p1x, p1y, p2x, p2y, p3x, p3y) {
          this.addPoint(p0x, p0y);
          this.addPoint(p3x, p3y);
          this.bezierCurveAdd(true, p0x, p1x, p2x, p3x);
          this.bezierCurveAdd(false, p0y, p1y, p2y, p3y);
        }
      }, {
        key: "addQuadraticCurve",
        value: function addQuadraticCurve(p0x, p0y, p1x, p1y, p2x, p2y) {
          var cp1x = p0x + 2 / 3 * (p1x - p0x);
          var cp1y = p0y + 2 / 3 * (p1y - p0y);
          var cp2x = cp1x + 1 / 3 * (p2x - p0x);
          var cp2y = cp1y + 1 / 3 * (p2y - p0y);
          this.addBezierCurve(p0x, p0y, cp1x, cp2x, cp1y, cp2y, p2x, p2y);
        }
      }, {
        key: "isPointInBox",
        value: function isPointInBox(x, y) {
          var x1 = this.x1, y1 = this.y1, x2 = this.x2, y2 = this.y2;
          return x1 <= x && x <= x2 && y1 <= y && y <= y2;
        }
      }, {
        key: "x",
        get: function get() {
          return this.x1;
        }
      }, {
        key: "y",
        get: function get() {
          return this.y1;
        }
      }, {
        key: "width",
        get: function get() {
          return this.x2 - this.x1;
        }
      }, {
        key: "height",
        get: function get() {
          return this.y2 - this.y1;
        }
      }]);
      return BoundingBox2;
    })();
    function _createSuper$I(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$I();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$I() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var PathParser = /* @__PURE__ */ (function(_SVGPathData) {
      _inherits__default["default"](PathParser2, _SVGPathData);
      var _super = _createSuper$I(PathParser2);
      function PathParser2(path) {
        var _this;
        _classCallCheck__default["default"](this, PathParser2);
        _this = _super.call(this, path.replace(/([+\-.])\s+/gm, "$1").replace(/[^MmZzLlHhVvCcSsQqTtAae\d\s.,+-].*/g, ""));
        _this.control = null;
        _this.start = null;
        _this.current = null;
        _this.command = null;
        _this.commands = _this.commands;
        _this.i = -1;
        _this.previousCommand = null;
        _this.points = [];
        _this.angles = [];
        return _this;
      }
      _createClass__default["default"](PathParser2, [{
        key: "reset",
        value: function reset() {
          this.i = -1;
          this.command = null;
          this.previousCommand = null;
          this.start = new Point(0, 0);
          this.control = new Point(0, 0);
          this.current = new Point(0, 0);
          this.points = [];
          this.angles = [];
        }
      }, {
        key: "isEnd",
        value: function isEnd() {
          var i = this.i, commands = this.commands;
          return i >= commands.length - 1;
        }
      }, {
        key: "next",
        value: function next() {
          var command = this.commands[++this.i];
          this.previousCommand = this.command;
          this.command = command;
          return command;
        }
      }, {
        key: "getPoint",
        value: function getPoint() {
          var xProp = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "x";
          var yProp = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "y";
          var point = new Point(this.command[xProp], this.command[yProp]);
          return this.makeAbsolute(point);
        }
      }, {
        key: "getAsControlPoint",
        value: function getAsControlPoint(xProp, yProp) {
          var point = this.getPoint(xProp, yProp);
          this.control = point;
          return point;
        }
      }, {
        key: "getAsCurrentPoint",
        value: function getAsCurrentPoint(xProp, yProp) {
          var point = this.getPoint(xProp, yProp);
          this.current = point;
          return point;
        }
      }, {
        key: "getReflectedControlPoint",
        value: function getReflectedControlPoint() {
          var previousCommand = this.previousCommand.type;
          if (previousCommand !== svgPathdata.SVGPathData.CURVE_TO && previousCommand !== svgPathdata.SVGPathData.SMOOTH_CURVE_TO && previousCommand !== svgPathdata.SVGPathData.QUAD_TO && previousCommand !== svgPathdata.SVGPathData.SMOOTH_QUAD_TO) {
            return this.current;
          }
          var _this$current = this.current, cx = _this$current.x, cy = _this$current.y, _this$control = this.control, ox = _this$control.x, oy = _this$control.y;
          var point = new Point(2 * cx - ox, 2 * cy - oy);
          return point;
        }
      }, {
        key: "makeAbsolute",
        value: function makeAbsolute(point) {
          if (this.command.relative) {
            var _this$current2 = this.current, x = _this$current2.x, y = _this$current2.y;
            point.x += x;
            point.y += y;
          }
          return point;
        }
      }, {
        key: "addMarker",
        value: function addMarker(point, from, priorTo) {
          var points = this.points, angles = this.angles;
          if (priorTo && angles.length > 0 && !angles[angles.length - 1]) {
            angles[angles.length - 1] = points[points.length - 1].angleTo(priorTo);
          }
          this.addMarkerAngle(point, from ? from.angleTo(point) : null);
        }
      }, {
        key: "addMarkerAngle",
        value: function addMarkerAngle(point, angle) {
          this.points.push(point);
          this.angles.push(angle);
        }
      }, {
        key: "getMarkerPoints",
        value: function getMarkerPoints() {
          return this.points;
        }
      }, {
        key: "getMarkerAngles",
        value: function getMarkerAngles() {
          var angles = this.angles;
          var len = angles.length;
          for (var i = 0; i < len; i++) {
            if (!angles[i]) {
              for (var j = i + 1; j < len; j++) {
                if (angles[j]) {
                  angles[i] = angles[j];
                  break;
                }
              }
            }
          }
          return angles;
        }
      }]);
      return PathParser2;
    })(svgPathdata.SVGPathData);
    function _createSuper$H(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$H();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$H() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var RenderedElement = /* @__PURE__ */ (function(_Element) {
      _inherits__default["default"](RenderedElement2, _Element);
      var _super = _createSuper$H(RenderedElement2);
      function RenderedElement2() {
        var _this;
        _classCallCheck__default["default"](this, RenderedElement2);
        _this = _super.apply(this, arguments);
        _this.modifiedEmSizeStack = false;
        return _this;
      }
      _createClass__default["default"](RenderedElement2, [{
        key: "calculateOpacity",
        value: function calculateOpacity() {
          var opacity = 1;
          var element = this;
          while (element) {
            var opacityStyle = element.getStyle("opacity", false, true);
            if (opacityStyle.hasValue(true)) {
              opacity *= opacityStyle.getNumber();
            }
            element = element.parent;
          }
          return opacity;
        }
      }, {
        key: "setContext",
        value: function setContext(ctx) {
          var fromMeasure = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
          if (!fromMeasure) {
            var fillStyleProp = this.getStyle("fill");
            var fillOpacityStyleProp = this.getStyle("fill-opacity");
            var strokeStyleProp = this.getStyle("stroke");
            var strokeOpacityProp = this.getStyle("stroke-opacity");
            if (fillStyleProp.isUrlDefinition()) {
              var fillStyle = fillStyleProp.getFillStyleDefinition(this, fillOpacityStyleProp);
              if (fillStyle) {
                ctx.fillStyle = fillStyle;
              }
            } else if (fillStyleProp.hasValue()) {
              if (fillStyleProp.getString() === "currentColor") {
                fillStyleProp.setValue(this.getStyle("color").getColor());
              }
              var _fillStyle = fillStyleProp.getColor();
              if (_fillStyle !== "inherit") {
                ctx.fillStyle = _fillStyle === "none" ? "rgba(0,0,0,0)" : _fillStyle;
              }
            }
            if (fillOpacityStyleProp.hasValue()) {
              var _fillStyle2 = new Property(this.document, "fill", ctx.fillStyle).addOpacity(fillOpacityStyleProp).getColor();
              ctx.fillStyle = _fillStyle2;
            }
            if (strokeStyleProp.isUrlDefinition()) {
              var strokeStyle = strokeStyleProp.getFillStyleDefinition(this, strokeOpacityProp);
              if (strokeStyle) {
                ctx.strokeStyle = strokeStyle;
              }
            } else if (strokeStyleProp.hasValue()) {
              if (strokeStyleProp.getString() === "currentColor") {
                strokeStyleProp.setValue(this.getStyle("color").getColor());
              }
              var _strokeStyle = strokeStyleProp.getString();
              if (_strokeStyle !== "inherit") {
                ctx.strokeStyle = _strokeStyle === "none" ? "rgba(0,0,0,0)" : _strokeStyle;
              }
            }
            if (strokeOpacityProp.hasValue()) {
              var _strokeStyle2 = new Property(this.document, "stroke", ctx.strokeStyle).addOpacity(strokeOpacityProp).getString();
              ctx.strokeStyle = _strokeStyle2;
            }
            var strokeWidthStyleProp = this.getStyle("stroke-width");
            if (strokeWidthStyleProp.hasValue()) {
              var newLineWidth = strokeWidthStyleProp.getPixels();
              ctx.lineWidth = !newLineWidth ? PSEUDO_ZERO : newLineWidth;
            }
            var strokeLinecapStyleProp = this.getStyle("stroke-linecap");
            var strokeLinejoinStyleProp = this.getStyle("stroke-linejoin");
            var strokeMiterlimitProp = this.getStyle("stroke-miterlimit");
            var strokeDasharrayStyleProp = this.getStyle("stroke-dasharray");
            var strokeDashoffsetProp = this.getStyle("stroke-dashoffset");
            if (strokeLinecapStyleProp.hasValue()) {
              ctx.lineCap = strokeLinecapStyleProp.getString();
            }
            if (strokeLinejoinStyleProp.hasValue()) {
              ctx.lineJoin = strokeLinejoinStyleProp.getString();
            }
            if (strokeMiterlimitProp.hasValue()) {
              ctx.miterLimit = strokeMiterlimitProp.getNumber();
            }
            if (strokeDasharrayStyleProp.hasValue() && strokeDasharrayStyleProp.getString() !== "none") {
              var gaps = toNumbers(strokeDasharrayStyleProp.getString());
              if (typeof ctx.setLineDash !== "undefined") {
                ctx.setLineDash(gaps);
              } else if (typeof ctx.webkitLineDash !== "undefined") {
                ctx.webkitLineDash = gaps;
              } else if (typeof ctx.mozDash !== "undefined" && !(gaps.length === 1 && gaps[0] === 0)) {
                ctx.mozDash = gaps;
              }
              var offset = strokeDashoffsetProp.getPixels();
              if (typeof ctx.lineDashOffset !== "undefined") {
                ctx.lineDashOffset = offset;
              } else if (typeof ctx.webkitLineDashOffset !== "undefined") {
                ctx.webkitLineDashOffset = offset;
              } else if (typeof ctx.mozDashOffset !== "undefined") {
                ctx.mozDashOffset = offset;
              }
            }
          }
          this.modifiedEmSizeStack = false;
          if (typeof ctx.font !== "undefined") {
            var fontStyleProp = this.getStyle("font");
            var fontStyleStyleProp = this.getStyle("font-style");
            var fontVariantStyleProp = this.getStyle("font-variant");
            var fontWeightStyleProp = this.getStyle("font-weight");
            var fontSizeStyleProp = this.getStyle("font-size");
            var fontFamilyStyleProp = this.getStyle("font-family");
            var font = new Font(fontStyleStyleProp.getString(), fontVariantStyleProp.getString(), fontWeightStyleProp.getString(), fontSizeStyleProp.hasValue() ? "".concat(fontSizeStyleProp.getPixels(true), "px") : "", fontFamilyStyleProp.getString(), Font.parse(fontStyleProp.getString(), ctx.font));
            fontStyleStyleProp.setValue(font.fontStyle);
            fontVariantStyleProp.setValue(font.fontVariant);
            fontWeightStyleProp.setValue(font.fontWeight);
            fontSizeStyleProp.setValue(font.fontSize);
            fontFamilyStyleProp.setValue(font.fontFamily);
            ctx.font = font.toString();
            if (fontSizeStyleProp.isPixels()) {
              this.document.emSize = fontSizeStyleProp.getPixels();
              this.modifiedEmSizeStack = true;
            }
          }
          if (!fromMeasure) {
            this.applyEffects(ctx);
            ctx.globalAlpha = this.calculateOpacity();
          }
        }
      }, {
        key: "clearContext",
        value: function clearContext(ctx) {
          _get__default["default"](_getPrototypeOf__default["default"](RenderedElement2.prototype), "clearContext", this).call(this, ctx);
          if (this.modifiedEmSizeStack) {
            this.document.popEmSize();
          }
        }
      }]);
      return RenderedElement2;
    })(Element);
    function _createSuper$G(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$G();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$G() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var PathElement = /* @__PURE__ */ (function(_RenderedElement) {
      _inherits__default["default"](PathElement2, _RenderedElement);
      var _super = _createSuper$G(PathElement2);
      function PathElement2(document2, node2, captureTextNodes) {
        var _this;
        _classCallCheck__default["default"](this, PathElement2);
        _this = _super.call(this, document2, node2, captureTextNodes);
        _this.type = "path";
        _this.pathParser = null;
        _this.pathParser = new PathParser(_this.getAttribute("d").getString());
        return _this;
      }
      _createClass__default["default"](PathElement2, [{
        key: "path",
        value: function path(ctx) {
          var pathParser = this.pathParser;
          var boundingBox = new BoundingBox();
          pathParser.reset();
          if (ctx) {
            ctx.beginPath();
          }
          while (!pathParser.isEnd()) {
            switch (pathParser.next().type) {
              case PathParser.MOVE_TO:
                this.pathM(ctx, boundingBox);
                break;
              case PathParser.LINE_TO:
                this.pathL(ctx, boundingBox);
                break;
              case PathParser.HORIZ_LINE_TO:
                this.pathH(ctx, boundingBox);
                break;
              case PathParser.VERT_LINE_TO:
                this.pathV(ctx, boundingBox);
                break;
              case PathParser.CURVE_TO:
                this.pathC(ctx, boundingBox);
                break;
              case PathParser.SMOOTH_CURVE_TO:
                this.pathS(ctx, boundingBox);
                break;
              case PathParser.QUAD_TO:
                this.pathQ(ctx, boundingBox);
                break;
              case PathParser.SMOOTH_QUAD_TO:
                this.pathT(ctx, boundingBox);
                break;
              case PathParser.ARC:
                this.pathA(ctx, boundingBox);
                break;
              case PathParser.CLOSE_PATH:
                this.pathZ(ctx, boundingBox);
                break;
            }
          }
          return boundingBox;
        }
      }, {
        key: "getBoundingBox",
        value: function getBoundingBox(_) {
          return this.path();
        }
      }, {
        key: "getMarkers",
        value: function getMarkers() {
          var pathParser = this.pathParser;
          var points = pathParser.getMarkerPoints();
          var angles = pathParser.getMarkerAngles();
          var markers = points.map(function(point, i) {
            return [point, angles[i]];
          });
          return markers;
        }
      }, {
        key: "renderChildren",
        value: function renderChildren(ctx) {
          this.path(ctx);
          this.document.screen.mouse.checkPath(this, ctx);
          var fillRuleStyleProp = this.getStyle("fill-rule");
          if (ctx.fillStyle !== "") {
            if (fillRuleStyleProp.getString("inherit") !== "inherit") {
              ctx.fill(fillRuleStyleProp.getString());
            } else {
              ctx.fill();
            }
          }
          if (ctx.strokeStyle !== "") {
            if (this.getAttribute("vector-effect").getString() === "non-scaling-stroke") {
              ctx.save();
              ctx.setTransform(1, 0, 0, 1, 0, 0);
              ctx.stroke();
              ctx.restore();
            } else {
              ctx.stroke();
            }
          }
          var markers = this.getMarkers();
          if (markers) {
            var markersLastIndex = markers.length - 1;
            var markerStartStyleProp = this.getStyle("marker-start");
            var markerMidStyleProp = this.getStyle("marker-mid");
            var markerEndStyleProp = this.getStyle("marker-end");
            if (markerStartStyleProp.isUrlDefinition()) {
              var marker = markerStartStyleProp.getDefinition();
              var _markers$ = _slicedToArray__default["default"](markers[0], 2), point = _markers$[0], angle = _markers$[1];
              marker.render(ctx, point, angle);
            }
            if (markerMidStyleProp.isUrlDefinition()) {
              var _marker = markerMidStyleProp.getDefinition();
              for (var i = 1; i < markersLastIndex; i++) {
                var _markers$i = _slicedToArray__default["default"](markers[i], 2), _point = _markers$i[0], _angle = _markers$i[1];
                _marker.render(ctx, _point, _angle);
              }
            }
            if (markerEndStyleProp.isUrlDefinition()) {
              var _marker2 = markerEndStyleProp.getDefinition();
              var _markers$markersLastI = _slicedToArray__default["default"](markers[markersLastIndex], 2), _point2 = _markers$markersLastI[0], _angle2 = _markers$markersLastI[1];
              _marker2.render(ctx, _point2, _angle2);
            }
          }
        }
      }, {
        key: "pathM",
        value: function pathM(ctx, boundingBox) {
          var pathParser = this.pathParser;
          var _PathElement$pathM = PathElement2.pathM(pathParser), point = _PathElement$pathM.point;
          var x = point.x, y = point.y;
          pathParser.addMarker(point);
          boundingBox.addPoint(x, y);
          if (ctx) {
            ctx.moveTo(x, y);
          }
        }
      }, {
        key: "pathL",
        value: function pathL(ctx, boundingBox) {
          var pathParser = this.pathParser;
          var _PathElement$pathL = PathElement2.pathL(pathParser), current = _PathElement$pathL.current, point = _PathElement$pathL.point;
          var x = point.x, y = point.y;
          pathParser.addMarker(point, current);
          boundingBox.addPoint(x, y);
          if (ctx) {
            ctx.lineTo(x, y);
          }
        }
      }, {
        key: "pathH",
        value: function pathH(ctx, boundingBox) {
          var pathParser = this.pathParser;
          var _PathElement$pathH = PathElement2.pathH(pathParser), current = _PathElement$pathH.current, point = _PathElement$pathH.point;
          var x = point.x, y = point.y;
          pathParser.addMarker(point, current);
          boundingBox.addPoint(x, y);
          if (ctx) {
            ctx.lineTo(x, y);
          }
        }
      }, {
        key: "pathV",
        value: function pathV(ctx, boundingBox) {
          var pathParser = this.pathParser;
          var _PathElement$pathV = PathElement2.pathV(pathParser), current = _PathElement$pathV.current, point = _PathElement$pathV.point;
          var x = point.x, y = point.y;
          pathParser.addMarker(point, current);
          boundingBox.addPoint(x, y);
          if (ctx) {
            ctx.lineTo(x, y);
          }
        }
      }, {
        key: "pathC",
        value: function pathC(ctx, boundingBox) {
          var pathParser = this.pathParser;
          var _PathElement$pathC = PathElement2.pathC(pathParser), current = _PathElement$pathC.current, point = _PathElement$pathC.point, controlPoint = _PathElement$pathC.controlPoint, currentPoint = _PathElement$pathC.currentPoint;
          pathParser.addMarker(currentPoint, controlPoint, point);
          boundingBox.addBezierCurve(current.x, current.y, point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
          if (ctx) {
            ctx.bezierCurveTo(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
          }
        }
      }, {
        key: "pathS",
        value: function pathS(ctx, boundingBox) {
          var pathParser = this.pathParser;
          var _PathElement$pathS = PathElement2.pathS(pathParser), current = _PathElement$pathS.current, point = _PathElement$pathS.point, controlPoint = _PathElement$pathS.controlPoint, currentPoint = _PathElement$pathS.currentPoint;
          pathParser.addMarker(currentPoint, controlPoint, point);
          boundingBox.addBezierCurve(current.x, current.y, point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
          if (ctx) {
            ctx.bezierCurveTo(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
          }
        }
      }, {
        key: "pathQ",
        value: function pathQ(ctx, boundingBox) {
          var pathParser = this.pathParser;
          var _PathElement$pathQ = PathElement2.pathQ(pathParser), current = _PathElement$pathQ.current, controlPoint = _PathElement$pathQ.controlPoint, currentPoint = _PathElement$pathQ.currentPoint;
          pathParser.addMarker(currentPoint, controlPoint, controlPoint);
          boundingBox.addQuadraticCurve(current.x, current.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
          if (ctx) {
            ctx.quadraticCurveTo(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
          }
        }
      }, {
        key: "pathT",
        value: function pathT(ctx, boundingBox) {
          var pathParser = this.pathParser;
          var _PathElement$pathT = PathElement2.pathT(pathParser), current = _PathElement$pathT.current, controlPoint = _PathElement$pathT.controlPoint, currentPoint = _PathElement$pathT.currentPoint;
          pathParser.addMarker(currentPoint, controlPoint, controlPoint);
          boundingBox.addQuadraticCurve(current.x, current.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
          if (ctx) {
            ctx.quadraticCurveTo(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
          }
        }
      }, {
        key: "pathA",
        value: function pathA(ctx, boundingBox) {
          var pathParser = this.pathParser;
          var _PathElement$pathA = PathElement2.pathA(pathParser), currentPoint = _PathElement$pathA.currentPoint, rX = _PathElement$pathA.rX, rY = _PathElement$pathA.rY, sweepFlag = _PathElement$pathA.sweepFlag, xAxisRotation = _PathElement$pathA.xAxisRotation, centp = _PathElement$pathA.centp, a1 = _PathElement$pathA.a1, ad = _PathElement$pathA.ad;
          var dir = 1 - sweepFlag ? 1 : -1;
          var ah = a1 + dir * (ad / 2);
          var halfWay = new Point(centp.x + rX * Math.cos(ah), centp.y + rY * Math.sin(ah));
          pathParser.addMarkerAngle(halfWay, ah - dir * Math.PI / 2);
          pathParser.addMarkerAngle(currentPoint, ah - dir * Math.PI);
          boundingBox.addPoint(currentPoint.x, currentPoint.y);
          if (ctx && !isNaN(a1) && !isNaN(ad)) {
            var r = rX > rY ? rX : rY;
            var sx = rX > rY ? 1 : rX / rY;
            var sy = rX > rY ? rY / rX : 1;
            ctx.translate(centp.x, centp.y);
            ctx.rotate(xAxisRotation);
            ctx.scale(sx, sy);
            ctx.arc(0, 0, r, a1, a1 + ad, Boolean(1 - sweepFlag));
            ctx.scale(1 / sx, 1 / sy);
            ctx.rotate(-xAxisRotation);
            ctx.translate(-centp.x, -centp.y);
          }
        }
      }, {
        key: "pathZ",
        value: function pathZ(ctx, boundingBox) {
          PathElement2.pathZ(this.pathParser);
          if (ctx) {
            if (boundingBox.x1 !== boundingBox.x2 && boundingBox.y1 !== boundingBox.y2) {
              ctx.closePath();
            }
          }
        }
      }], [{
        key: "pathM",
        value: function pathM(pathParser) {
          var point = pathParser.getAsCurrentPoint();
          pathParser.start = pathParser.current;
          return {
            point
          };
        }
      }, {
        key: "pathL",
        value: function pathL(pathParser) {
          var current = pathParser.current;
          var point = pathParser.getAsCurrentPoint();
          return {
            current,
            point
          };
        }
      }, {
        key: "pathH",
        value: function pathH(pathParser) {
          var current = pathParser.current, command = pathParser.command;
          var point = new Point((command.relative ? current.x : 0) + command.x, current.y);
          pathParser.current = point;
          return {
            current,
            point
          };
        }
      }, {
        key: "pathV",
        value: function pathV(pathParser) {
          var current = pathParser.current, command = pathParser.command;
          var point = new Point(current.x, (command.relative ? current.y : 0) + command.y);
          pathParser.current = point;
          return {
            current,
            point
          };
        }
      }, {
        key: "pathC",
        value: function pathC(pathParser) {
          var current = pathParser.current;
          var point = pathParser.getPoint("x1", "y1");
          var controlPoint = pathParser.getAsControlPoint("x2", "y2");
          var currentPoint = pathParser.getAsCurrentPoint();
          return {
            current,
            point,
            controlPoint,
            currentPoint
          };
        }
      }, {
        key: "pathS",
        value: function pathS(pathParser) {
          var current = pathParser.current;
          var point = pathParser.getReflectedControlPoint();
          var controlPoint = pathParser.getAsControlPoint("x2", "y2");
          var currentPoint = pathParser.getAsCurrentPoint();
          return {
            current,
            point,
            controlPoint,
            currentPoint
          };
        }
      }, {
        key: "pathQ",
        value: function pathQ(pathParser) {
          var current = pathParser.current;
          var controlPoint = pathParser.getAsControlPoint("x1", "y1");
          var currentPoint = pathParser.getAsCurrentPoint();
          return {
            current,
            controlPoint,
            currentPoint
          };
        }
      }, {
        key: "pathT",
        value: function pathT(pathParser) {
          var current = pathParser.current;
          var controlPoint = pathParser.getReflectedControlPoint();
          pathParser.control = controlPoint;
          var currentPoint = pathParser.getAsCurrentPoint();
          return {
            current,
            controlPoint,
            currentPoint
          };
        }
      }, {
        key: "pathA",
        value: function pathA(pathParser) {
          var current = pathParser.current, command = pathParser.command;
          var rX = command.rX, rY = command.rY, xRot = command.xRot, lArcFlag = command.lArcFlag, sweepFlag = command.sweepFlag;
          var xAxisRotation = xRot * (Math.PI / 180);
          var currentPoint = pathParser.getAsCurrentPoint();
          var currp = new Point(Math.cos(xAxisRotation) * (current.x - currentPoint.x) / 2 + Math.sin(xAxisRotation) * (current.y - currentPoint.y) / 2, -Math.sin(xAxisRotation) * (current.x - currentPoint.x) / 2 + Math.cos(xAxisRotation) * (current.y - currentPoint.y) / 2);
          var l = Math.pow(currp.x, 2) / Math.pow(rX, 2) + Math.pow(currp.y, 2) / Math.pow(rY, 2);
          if (l > 1) {
            rX *= Math.sqrt(l);
            rY *= Math.sqrt(l);
          }
          var s = (lArcFlag === sweepFlag ? -1 : 1) * Math.sqrt((Math.pow(rX, 2) * Math.pow(rY, 2) - Math.pow(rX, 2) * Math.pow(currp.y, 2) - Math.pow(rY, 2) * Math.pow(currp.x, 2)) / (Math.pow(rX, 2) * Math.pow(currp.y, 2) + Math.pow(rY, 2) * Math.pow(currp.x, 2)));
          if (isNaN(s)) {
            s = 0;
          }
          var cpp = new Point(s * rX * currp.y / rY, s * -rY * currp.x / rX);
          var centp = new Point((current.x + currentPoint.x) / 2 + Math.cos(xAxisRotation) * cpp.x - Math.sin(xAxisRotation) * cpp.y, (current.y + currentPoint.y) / 2 + Math.sin(xAxisRotation) * cpp.x + Math.cos(xAxisRotation) * cpp.y);
          var a1 = vectorsAngle([1, 0], [(currp.x - cpp.x) / rX, (currp.y - cpp.y) / rY]);
          var u = [(currp.x - cpp.x) / rX, (currp.y - cpp.y) / rY];
          var v = [(-currp.x - cpp.x) / rX, (-currp.y - cpp.y) / rY];
          var ad = vectorsAngle(u, v);
          if (vectorsRatio(u, v) <= -1) {
            ad = Math.PI;
          }
          if (vectorsRatio(u, v) >= 1) {
            ad = 0;
          }
          return {
            currentPoint,
            rX,
            rY,
            sweepFlag,
            xAxisRotation,
            centp,
            a1,
            ad
          };
        }
      }, {
        key: "pathZ",
        value: function pathZ(pathParser) {
          pathParser.current = pathParser.start;
        }
      }]);
      return PathElement2;
    })(RenderedElement);
    function _createSuper$F(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$F();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$F() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var GlyphElement = /* @__PURE__ */ (function(_PathElement) {
      _inherits__default["default"](GlyphElement2, _PathElement);
      var _super = _createSuper$F(GlyphElement2);
      function GlyphElement2(document2, node2, captureTextNodes) {
        var _this;
        _classCallCheck__default["default"](this, GlyphElement2);
        _this = _super.call(this, document2, node2, captureTextNodes);
        _this.type = "glyph";
        _this.horizAdvX = _this.getAttribute("horiz-adv-x").getNumber();
        _this.unicode = _this.getAttribute("unicode").getString();
        _this.arabicForm = _this.getAttribute("arabic-form").getString();
        return _this;
      }
      return GlyphElement2;
    })(PathElement);
    function _createSuper$E(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$E();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$E() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var TextElement = /* @__PURE__ */ (function(_RenderedElement) {
      _inherits__default["default"](TextElement2, _RenderedElement);
      var _super = _createSuper$E(TextElement2);
      function TextElement2(document2, node2, captureTextNodes) {
        var _this;
        _classCallCheck__default["default"](this, TextElement2);
        _this = _super.call(this, document2, node2, (this instanceof TextElement2 ? this.constructor : void 0) === TextElement2 ? true : captureTextNodes);
        _this.type = "text";
        _this.x = 0;
        _this.y = 0;
        _this.measureCache = -1;
        return _this;
      }
      _createClass__default["default"](TextElement2, [{
        key: "setContext",
        value: function setContext(ctx) {
          var fromMeasure = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
          _get__default["default"](_getPrototypeOf__default["default"](TextElement2.prototype), "setContext", this).call(this, ctx, fromMeasure);
          var textBaseline = this.getStyle("dominant-baseline").getTextBaseline() || this.getStyle("alignment-baseline").getTextBaseline();
          if (textBaseline) {
            ctx.textBaseline = textBaseline;
          }
        }
      }, {
        key: "initializeCoordinates",
        value: function initializeCoordinates() {
          this.x = 0;
          this.y = 0;
          this.leafTexts = [];
          this.textChunkStart = 0;
          this.minX = Number.POSITIVE_INFINITY;
          this.maxX = Number.NEGATIVE_INFINITY;
        }
      }, {
        key: "getBoundingBox",
        value: function getBoundingBox(ctx) {
          var _this2 = this;
          if (this.type !== "text") {
            return this.getTElementBoundingBox(ctx);
          }
          this.initializeCoordinates();
          this.adjustChildCoordinatesRecursive(ctx);
          var boundingBox = null;
          this.children.forEach(function(_, i) {
            var childBoundingBox = _this2.getChildBoundingBox(ctx, _this2, _this2, i);
            if (!boundingBox) {
              boundingBox = childBoundingBox;
            } else {
              boundingBox.addBoundingBox(childBoundingBox);
            }
          });
          return boundingBox;
        }
      }, {
        key: "getFontSize",
        value: function getFontSize() {
          var document2 = this.document, parent = this.parent;
          var inheritFontSize = Font.parse(document2.ctx.font).fontSize;
          var fontSize = parent.getStyle("font-size").getNumber(inheritFontSize);
          return fontSize;
        }
      }, {
        key: "getTElementBoundingBox",
        value: function getTElementBoundingBox(ctx) {
          var fontSize = this.getFontSize();
          return new BoundingBox(this.x, this.y - fontSize, this.x + this.measureText(ctx), this.y);
        }
      }, {
        key: "getGlyph",
        value: function getGlyph(font, text, i) {
          var char = text[i];
          var glyph = null;
          if (font.isArabic) {
            var len = text.length;
            var prevChar = text[i - 1];
            var nextChar = text[i + 1];
            var arabicForm = "isolated";
            if ((i === 0 || prevChar === " ") && i < len - 1 && nextChar !== " ") {
              arabicForm = "terminal";
            }
            if (i > 0 && prevChar !== " " && i < len - 1 && nextChar !== " ") {
              arabicForm = "medial";
            }
            if (i > 0 && prevChar !== " " && (i === len - 1 || nextChar === " ")) {
              arabicForm = "initial";
            }
            if (typeof font.glyphs[char] !== "undefined") {
              var maybeGlyph = font.glyphs[char];
              glyph = maybeGlyph instanceof GlyphElement ? maybeGlyph : maybeGlyph[arabicForm];
            }
          } else {
            glyph = font.glyphs[char];
          }
          if (!glyph) {
            glyph = font.missingGlyph;
          }
          return glyph;
        }
      }, {
        key: "getText",
        value: function getText() {
          return "";
        }
      }, {
        key: "getTextFromNode",
        value: function getTextFromNode(node2) {
          var textNode = node2 || this.node;
          var childNodes = Array.from(textNode.parentNode.childNodes);
          var index2 = childNodes.indexOf(textNode);
          var lastIndex = childNodes.length - 1;
          var text = compressSpaces(
            // textNode.value
            // || textNode.text
            textNode.textContent || ""
          );
          if (index2 === 0) {
            text = trimLeft(text);
          }
          if (index2 === lastIndex) {
            text = trimRight(text);
          }
          return text;
        }
      }, {
        key: "renderChildren",
        value: function renderChildren(ctx) {
          var _this3 = this;
          if (this.type !== "text") {
            this.renderTElementChildren(ctx);
            return;
          }
          this.initializeCoordinates();
          this.adjustChildCoordinatesRecursive(ctx);
          this.children.forEach(function(_, i) {
            _this3.renderChild(ctx, _this3, _this3, i);
          });
          var mouse = this.document.screen.mouse;
          if (mouse.isWorking()) {
            mouse.checkBoundingBox(this, this.getBoundingBox(ctx));
          }
        }
      }, {
        key: "renderTElementChildren",
        value: function renderTElementChildren(ctx) {
          var document2 = this.document, parent = this.parent;
          var renderText = this.getText();
          var customFont = parent.getStyle("font-family").getDefinition();
          if (customFont) {
            var unitsPerEm = customFont.fontFace.unitsPerEm;
            var ctxFont = Font.parse(document2.ctx.font);
            var fontSize = parent.getStyle("font-size").getNumber(ctxFont.fontSize);
            var fontStyle = parent.getStyle("font-style").getString(ctxFont.fontStyle);
            var scale = fontSize / unitsPerEm;
            var text = customFont.isRTL ? renderText.split("").reverse().join("") : renderText;
            var dx = toNumbers(parent.getAttribute("dx").getString());
            var len = text.length;
            for (var i = 0; i < len; i++) {
              var glyph = this.getGlyph(customFont, text, i);
              ctx.translate(this.x, this.y);
              ctx.scale(scale, -scale);
              var lw = ctx.lineWidth;
              ctx.lineWidth = ctx.lineWidth * unitsPerEm / fontSize;
              if (fontStyle === "italic") {
                ctx.transform(1, 0, 0.4, 1, 0, 0);
              }
              glyph.render(ctx);
              if (fontStyle === "italic") {
                ctx.transform(1, 0, -0.4, 1, 0, 0);
              }
              ctx.lineWidth = lw;
              ctx.scale(1 / scale, -1 / scale);
              ctx.translate(-this.x, -this.y);
              this.x += fontSize * (glyph.horizAdvX || customFont.horizAdvX) / unitsPerEm;
              if (typeof dx[i] !== "undefined" && !isNaN(dx[i])) {
                this.x += dx[i];
              }
            }
            return;
          }
          var x = this.x, y = this.y;
          if (ctx.fillStyle) {
            ctx.fillText(renderText, x, y);
          }
          if (ctx.strokeStyle) {
            ctx.strokeText(renderText, x, y);
          }
        }
      }, {
        key: "applyAnchoring",
        value: function applyAnchoring() {
          if (this.textChunkStart >= this.leafTexts.length) {
            return;
          }
          var firstElement = this.leafTexts[this.textChunkStart];
          var textAnchor = firstElement.getStyle("text-anchor").getString("start");
          var isRTL = false;
          var shift = 0;
          if (textAnchor === "start" && !isRTL || textAnchor === "end" && isRTL) {
            shift = firstElement.x - this.minX;
          } else if (textAnchor === "end" && !isRTL || textAnchor === "start" && isRTL) {
            shift = firstElement.x - this.maxX;
          } else {
            shift = firstElement.x - (this.minX + this.maxX) / 2;
          }
          for (var i = this.textChunkStart; i < this.leafTexts.length; i++) {
            this.leafTexts[i].x += shift;
          }
          this.minX = Number.POSITIVE_INFINITY;
          this.maxX = Number.NEGATIVE_INFINITY;
          this.textChunkStart = this.leafTexts.length;
        }
      }, {
        key: "adjustChildCoordinatesRecursive",
        value: function adjustChildCoordinatesRecursive(ctx) {
          var _this4 = this;
          this.children.forEach(function(_, i) {
            _this4.adjustChildCoordinatesRecursiveCore(ctx, _this4, _this4, i);
          });
          this.applyAnchoring();
        }
      }, {
        key: "adjustChildCoordinatesRecursiveCore",
        value: function adjustChildCoordinatesRecursiveCore(ctx, textParent, parent, i) {
          var child = parent.children[i];
          if (child.children.length > 0) {
            child.children.forEach(function(_, i2) {
              textParent.adjustChildCoordinatesRecursiveCore(ctx, textParent, child, i2);
            });
          } else {
            this.adjustChildCoordinates(ctx, textParent, parent, i);
          }
        }
      }, {
        key: "adjustChildCoordinates",
        value: function adjustChildCoordinates(ctx, textParent, parent, i) {
          var child = parent.children[i];
          if (typeof child.measureText !== "function") {
            return child;
          }
          ctx.save();
          child.setContext(ctx, true);
          var xAttr = child.getAttribute("x");
          var yAttr = child.getAttribute("y");
          var dxAttr = child.getAttribute("dx");
          var dyAttr = child.getAttribute("dy");
          var customFont = child.getStyle("font-family").getDefinition();
          var isRTL = Boolean(customFont) && customFont.isRTL;
          if (i === 0) {
            if (!xAttr.hasValue()) {
              xAttr.setValue(child.getInheritedAttribute("x"));
            }
            if (!yAttr.hasValue()) {
              yAttr.setValue(child.getInheritedAttribute("y"));
            }
            if (!dxAttr.hasValue()) {
              dxAttr.setValue(child.getInheritedAttribute("dx"));
            }
            if (!dyAttr.hasValue()) {
              dyAttr.setValue(child.getInheritedAttribute("dy"));
            }
          }
          var width = child.measureText(ctx);
          if (isRTL) {
            textParent.x -= width;
          }
          if (xAttr.hasValue()) {
            textParent.applyAnchoring();
            child.x = xAttr.getPixels("x");
            if (dxAttr.hasValue()) {
              child.x += dxAttr.getPixels("x");
            }
          } else {
            if (dxAttr.hasValue()) {
              textParent.x += dxAttr.getPixels("x");
            }
            child.x = textParent.x;
          }
          textParent.x = child.x;
          if (!isRTL) {
            textParent.x += width;
          }
          if (yAttr.hasValue()) {
            child.y = yAttr.getPixels("y");
            if (dyAttr.hasValue()) {
              child.y += dyAttr.getPixels("y");
            }
          } else {
            if (dyAttr.hasValue()) {
              textParent.y += dyAttr.getPixels("y");
            }
            child.y = textParent.y;
          }
          textParent.y = child.y;
          textParent.leafTexts.push(child);
          textParent.minX = Math.min(textParent.minX, child.x, child.x + width);
          textParent.maxX = Math.max(textParent.maxX, child.x, child.x + width);
          child.clearContext(ctx);
          ctx.restore();
          return child;
        }
      }, {
        key: "getChildBoundingBox",
        value: function getChildBoundingBox(ctx, textParent, parent, i) {
          var child = parent.children[i];
          if (typeof child.getBoundingBox !== "function") {
            return null;
          }
          var boundingBox = child.getBoundingBox(ctx);
          if (!boundingBox) {
            return null;
          }
          child.children.forEach(function(_, i2) {
            var childBoundingBox = textParent.getChildBoundingBox(ctx, textParent, child, i2);
            boundingBox.addBoundingBox(childBoundingBox);
          });
          return boundingBox;
        }
      }, {
        key: "renderChild",
        value: function renderChild(ctx, textParent, parent, i) {
          var child = parent.children[i];
          child.render(ctx);
          child.children.forEach(function(_, i2) {
            textParent.renderChild(ctx, textParent, child, i2);
          });
        }
      }, {
        key: "measureText",
        value: function measureText(ctx) {
          var measureCache = this.measureCache;
          if (~measureCache) {
            return measureCache;
          }
          var renderText = this.getText();
          var measure = this.measureTargetText(ctx, renderText);
          this.measureCache = measure;
          return measure;
        }
      }, {
        key: "measureTargetText",
        value: function measureTargetText(ctx, targetText) {
          if (!targetText.length) {
            return 0;
          }
          var parent = this.parent;
          var customFont = parent.getStyle("font-family").getDefinition();
          if (customFont) {
            var fontSize = this.getFontSize();
            var text = customFont.isRTL ? targetText.split("").reverse().join("") : targetText;
            var dx = toNumbers(parent.getAttribute("dx").getString());
            var len = text.length;
            var _measure = 0;
            for (var i = 0; i < len; i++) {
              var glyph = this.getGlyph(customFont, text, i);
              _measure += (glyph.horizAdvX || customFont.horizAdvX) * fontSize / customFont.fontFace.unitsPerEm;
              if (typeof dx[i] !== "undefined" && !isNaN(dx[i])) {
                _measure += dx[i];
              }
            }
            return _measure;
          }
          if (!ctx.measureText) {
            return targetText.length * 10;
          }
          ctx.save();
          this.setContext(ctx, true);
          var _ctx$measureText = ctx.measureText(targetText), measure = _ctx$measureText.width;
          this.clearContext(ctx);
          ctx.restore();
          return measure;
        }
        /**
         * Inherits positional attributes from {@link TextElement} parent(s). Attributes
         * are only inherited from a parent to its first child.
         * @param name - The attribute name.
         * @returns The attribute value or null.
         */
      }, {
        key: "getInheritedAttribute",
        value: function getInheritedAttribute(name) {
          var current = this;
          while (current instanceof TextElement2 && current.isFirstChild()) {
            var parentAttr = current.parent.getAttribute(name);
            if (parentAttr.hasValue(true)) {
              return parentAttr.getValue("0");
            }
            current = current.parent;
          }
          return null;
        }
      }]);
      return TextElement2;
    })(RenderedElement);
    function _createSuper$D(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$D();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$D() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var TSpanElement = /* @__PURE__ */ (function(_TextElement) {
      _inherits__default["default"](TSpanElement2, _TextElement);
      var _super = _createSuper$D(TSpanElement2);
      function TSpanElement2(document2, node2, captureTextNodes) {
        var _this;
        _classCallCheck__default["default"](this, TSpanElement2);
        _this = _super.call(this, document2, node2, (this instanceof TSpanElement2 ? this.constructor : void 0) === TSpanElement2 ? true : captureTextNodes);
        _this.type = "tspan";
        _this.text = _this.children.length > 0 ? "" : _this.getTextFromNode();
        return _this;
      }
      _createClass__default["default"](TSpanElement2, [{
        key: "getText",
        value: function getText() {
          return this.text;
        }
      }]);
      return TSpanElement2;
    })(TextElement);
    function _createSuper$C(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$C();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$C() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var TextNode = /* @__PURE__ */ (function(_TSpanElement) {
      _inherits__default["default"](TextNode2, _TSpanElement);
      var _super = _createSuper$C(TextNode2);
      function TextNode2() {
        var _this;
        _classCallCheck__default["default"](this, TextNode2);
        _this = _super.apply(this, arguments);
        _this.type = "textNode";
        return _this;
      }
      return TextNode2;
    })(TSpanElement);
    function _createSuper$B(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$B();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$B() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var SVGElement = /* @__PURE__ */ (function(_RenderedElement) {
      _inherits__default["default"](SVGElement2, _RenderedElement);
      var _super = _createSuper$B(SVGElement2);
      function SVGElement2() {
        var _this;
        _classCallCheck__default["default"](this, SVGElement2);
        _this = _super.apply(this, arguments);
        _this.type = "svg";
        _this.root = false;
        return _this;
      }
      _createClass__default["default"](SVGElement2, [{
        key: "setContext",
        value: function setContext(ctx) {
          var _this$node$parentNode;
          var document2 = this.document;
          var screen = document2.screen, window2 = document2.window;
          var canvas = ctx.canvas;
          screen.setDefaults(ctx);
          if (canvas.style && typeof ctx.font !== "undefined" && window2 && typeof window2.getComputedStyle !== "undefined") {
            ctx.font = window2.getComputedStyle(canvas).getPropertyValue("font");
            var fontSizeProp = new Property(document2, "fontSize", Font.parse(ctx.font).fontSize);
            if (fontSizeProp.hasValue()) {
              document2.rootEmSize = fontSizeProp.getPixels("y");
              document2.emSize = document2.rootEmSize;
            }
          }
          if (!this.getAttribute("x").hasValue()) {
            this.getAttribute("x", true).setValue(0);
          }
          if (!this.getAttribute("y").hasValue()) {
            this.getAttribute("y", true).setValue(0);
          }
          var _screen$viewPort = screen.viewPort, width = _screen$viewPort.width, height = _screen$viewPort.height;
          if (!this.getStyle("width").hasValue()) {
            this.getStyle("width", true).setValue("100%");
          }
          if (!this.getStyle("height").hasValue()) {
            this.getStyle("height", true).setValue("100%");
          }
          if (!this.getStyle("color").hasValue()) {
            this.getStyle("color", true).setValue("black");
          }
          var refXAttr = this.getAttribute("refX");
          var refYAttr = this.getAttribute("refY");
          var viewBoxAttr = this.getAttribute("viewBox");
          var viewBox = viewBoxAttr.hasValue() ? toNumbers(viewBoxAttr.getString()) : null;
          var clip = !this.root && this.getStyle("overflow").getValue("hidden") !== "visible";
          var minX = 0;
          var minY = 0;
          var clipX = 0;
          var clipY = 0;
          if (viewBox) {
            minX = viewBox[0];
            minY = viewBox[1];
          }
          if (!this.root) {
            width = this.getStyle("width").getPixels("x");
            height = this.getStyle("height").getPixels("y");
            if (this.type === "marker") {
              clipX = minX;
              clipY = minY;
              minX = 0;
              minY = 0;
            }
          }
          screen.viewPort.setCurrent(width, height);
          if (this.node && (!this.parent || ((_this$node$parentNode = this.node.parentNode) === null || _this$node$parentNode === void 0 ? void 0 : _this$node$parentNode.nodeName) === "foreignObject") && this.getStyle("transform", false, true).hasValue() && !this.getStyle("transform-origin", false, true).hasValue()) {
            this.getStyle("transform-origin", true, true).setValue("50% 50%");
          }
          _get__default["default"](_getPrototypeOf__default["default"](SVGElement2.prototype), "setContext", this).call(this, ctx);
          ctx.translate(this.getAttribute("x").getPixels("x"), this.getAttribute("y").getPixels("y"));
          if (viewBox) {
            width = viewBox[2];
            height = viewBox[3];
          }
          document2.setViewBox({
            ctx,
            aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
            width: screen.viewPort.width,
            desiredWidth: width,
            height: screen.viewPort.height,
            desiredHeight: height,
            minX,
            minY,
            refX: refXAttr.getValue(),
            refY: refYAttr.getValue(),
            clip,
            clipX,
            clipY
          });
          if (viewBox) {
            screen.viewPort.removeCurrent();
            screen.viewPort.setCurrent(width, height);
          }
        }
      }, {
        key: "clearContext",
        value: function clearContext(ctx) {
          _get__default["default"](_getPrototypeOf__default["default"](SVGElement2.prototype), "clearContext", this).call(this, ctx);
          this.document.screen.viewPort.removeCurrent();
        }
        /**
         * Resize SVG to fit in given size.
         * @param width
         * @param height
         * @param preserveAspectRatio
         */
      }, {
        key: "resize",
        value: function resize(width) {
          var height = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : width;
          var preserveAspectRatio = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
          var widthAttr = this.getAttribute("width", true);
          var heightAttr = this.getAttribute("height", true);
          var viewBoxAttr = this.getAttribute("viewBox");
          var styleAttr = this.getAttribute("style");
          var originWidth = widthAttr.getNumber(0);
          var originHeight = heightAttr.getNumber(0);
          if (preserveAspectRatio) {
            if (typeof preserveAspectRatio === "string") {
              this.getAttribute("preserveAspectRatio", true).setValue(preserveAspectRatio);
            } else {
              var preserveAspectRatioAttr = this.getAttribute("preserveAspectRatio");
              if (preserveAspectRatioAttr.hasValue()) {
                preserveAspectRatioAttr.setValue(preserveAspectRatioAttr.getString().replace(/^\s*(\S.*\S)\s*$/, "$1"));
              }
            }
          }
          widthAttr.setValue(width);
          heightAttr.setValue(height);
          if (!viewBoxAttr.hasValue()) {
            viewBoxAttr.setValue("0 0 ".concat(originWidth || width, " ").concat(originHeight || height));
          }
          if (styleAttr.hasValue()) {
            var widthStyle = this.getStyle("width");
            var heightStyle = this.getStyle("height");
            if (widthStyle.hasValue()) {
              widthStyle.setValue("".concat(width, "px"));
            }
            if (heightStyle.hasValue()) {
              heightStyle.setValue("".concat(height, "px"));
            }
          }
        }
      }]);
      return SVGElement2;
    })(RenderedElement);
    function _createSuper$A(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$A();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$A() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var RectElement = /* @__PURE__ */ (function(_PathElement) {
      _inherits__default["default"](RectElement2, _PathElement);
      var _super = _createSuper$A(RectElement2);
      function RectElement2() {
        var _this;
        _classCallCheck__default["default"](this, RectElement2);
        _this = _super.apply(this, arguments);
        _this.type = "rect";
        return _this;
      }
      _createClass__default["default"](RectElement2, [{
        key: "path",
        value: function path(ctx) {
          var x = this.getAttribute("x").getPixels("x");
          var y = this.getAttribute("y").getPixels("y");
          var width = this.getStyle("width", false, true).getPixels("x");
          var height = this.getStyle("height", false, true).getPixels("y");
          var rxAttr = this.getAttribute("rx");
          var ryAttr = this.getAttribute("ry");
          var rx = rxAttr.getPixels("x");
          var ry = ryAttr.getPixels("y");
          if (rxAttr.hasValue() && !ryAttr.hasValue()) {
            ry = rx;
          }
          if (ryAttr.hasValue() && !rxAttr.hasValue()) {
            rx = ry;
          }
          rx = Math.min(rx, width / 2);
          ry = Math.min(ry, height / 2);
          if (ctx) {
            var KAPPA = 4 * ((Math.sqrt(2) - 1) / 3);
            ctx.beginPath();
            if (height > 0 && width > 0) {
              ctx.moveTo(x + rx, y);
              ctx.lineTo(x + width - rx, y);
              ctx.bezierCurveTo(x + width - rx + KAPPA * rx, y, x + width, y + ry - KAPPA * ry, x + width, y + ry);
              ctx.lineTo(x + width, y + height - ry);
              ctx.bezierCurveTo(x + width, y + height - ry + KAPPA * ry, x + width - rx + KAPPA * rx, y + height, x + width - rx, y + height);
              ctx.lineTo(x + rx, y + height);
              ctx.bezierCurveTo(x + rx - KAPPA * rx, y + height, x, y + height - ry + KAPPA * ry, x, y + height - ry);
              ctx.lineTo(x, y + ry);
              ctx.bezierCurveTo(x, y + ry - KAPPA * ry, x + rx - KAPPA * rx, y, x + rx, y);
              ctx.closePath();
            }
          }
          return new BoundingBox(x, y, x + width, y + height);
        }
      }, {
        key: "getMarkers",
        value: function getMarkers() {
          return null;
        }
      }]);
      return RectElement2;
    })(PathElement);
    function _createSuper$z(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$z();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$z() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var CircleElement = /* @__PURE__ */ (function(_PathElement) {
      _inherits__default["default"](CircleElement2, _PathElement);
      var _super = _createSuper$z(CircleElement2);
      function CircleElement2() {
        var _this;
        _classCallCheck__default["default"](this, CircleElement2);
        _this = _super.apply(this, arguments);
        _this.type = "circle";
        return _this;
      }
      _createClass__default["default"](CircleElement2, [{
        key: "path",
        value: function path(ctx) {
          var cx = this.getAttribute("cx").getPixels("x");
          var cy = this.getAttribute("cy").getPixels("y");
          var r = this.getAttribute("r").getPixels();
          if (ctx && r > 0) {
            ctx.beginPath();
            ctx.arc(cx, cy, r, 0, Math.PI * 2, false);
            ctx.closePath();
          }
          return new BoundingBox(cx - r, cy - r, cx + r, cy + r);
        }
      }, {
        key: "getMarkers",
        value: function getMarkers() {
          return null;
        }
      }]);
      return CircleElement2;
    })(PathElement);
    function _createSuper$y(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$y();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$y() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var EllipseElement = /* @__PURE__ */ (function(_PathElement) {
      _inherits__default["default"](EllipseElement2, _PathElement);
      var _super = _createSuper$y(EllipseElement2);
      function EllipseElement2() {
        var _this;
        _classCallCheck__default["default"](this, EllipseElement2);
        _this = _super.apply(this, arguments);
        _this.type = "ellipse";
        return _this;
      }
      _createClass__default["default"](EllipseElement2, [{
        key: "path",
        value: function path(ctx) {
          var KAPPA = 4 * ((Math.sqrt(2) - 1) / 3);
          var rx = this.getAttribute("rx").getPixels("x");
          var ry = this.getAttribute("ry").getPixels("y");
          var cx = this.getAttribute("cx").getPixels("x");
          var cy = this.getAttribute("cy").getPixels("y");
          if (ctx && rx > 0 && ry > 0) {
            ctx.beginPath();
            ctx.moveTo(cx + rx, cy);
            ctx.bezierCurveTo(cx + rx, cy + KAPPA * ry, cx + KAPPA * rx, cy + ry, cx, cy + ry);
            ctx.bezierCurveTo(cx - KAPPA * rx, cy + ry, cx - rx, cy + KAPPA * ry, cx - rx, cy);
            ctx.bezierCurveTo(cx - rx, cy - KAPPA * ry, cx - KAPPA * rx, cy - ry, cx, cy - ry);
            ctx.bezierCurveTo(cx + KAPPA * rx, cy - ry, cx + rx, cy - KAPPA * ry, cx + rx, cy);
            ctx.closePath();
          }
          return new BoundingBox(cx - rx, cy - ry, cx + rx, cy + ry);
        }
      }, {
        key: "getMarkers",
        value: function getMarkers() {
          return null;
        }
      }]);
      return EllipseElement2;
    })(PathElement);
    function _createSuper$x(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$x();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$x() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var LineElement = /* @__PURE__ */ (function(_PathElement) {
      _inherits__default["default"](LineElement2, _PathElement);
      var _super = _createSuper$x(LineElement2);
      function LineElement2() {
        var _this;
        _classCallCheck__default["default"](this, LineElement2);
        _this = _super.apply(this, arguments);
        _this.type = "line";
        return _this;
      }
      _createClass__default["default"](LineElement2, [{
        key: "getPoints",
        value: function getPoints() {
          return [new Point(this.getAttribute("x1").getPixels("x"), this.getAttribute("y1").getPixels("y")), new Point(this.getAttribute("x2").getPixels("x"), this.getAttribute("y2").getPixels("y"))];
        }
      }, {
        key: "path",
        value: function path(ctx) {
          var _this$getPoints = this.getPoints(), _this$getPoints2 = _slicedToArray__default["default"](_this$getPoints, 2), _this$getPoints2$ = _this$getPoints2[0], x0 = _this$getPoints2$.x, y0 = _this$getPoints2$.y, _this$getPoints2$2 = _this$getPoints2[1], x1 = _this$getPoints2$2.x, y1 = _this$getPoints2$2.y;
          if (ctx) {
            ctx.beginPath();
            ctx.moveTo(x0, y0);
            ctx.lineTo(x1, y1);
          }
          return new BoundingBox(x0, y0, x1, y1);
        }
      }, {
        key: "getMarkers",
        value: function getMarkers() {
          var _this$getPoints3 = this.getPoints(), _this$getPoints4 = _slicedToArray__default["default"](_this$getPoints3, 2), p0 = _this$getPoints4[0], p1 = _this$getPoints4[1];
          var a = p0.angleTo(p1);
          return [[p0, a], [p1, a]];
        }
      }]);
      return LineElement2;
    })(PathElement);
    function _createSuper$w(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$w();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$w() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var PolylineElement = /* @__PURE__ */ (function(_PathElement) {
      _inherits__default["default"](PolylineElement2, _PathElement);
      var _super = _createSuper$w(PolylineElement2);
      function PolylineElement2(document2, node2, captureTextNodes) {
        var _this;
        _classCallCheck__default["default"](this, PolylineElement2);
        _this = _super.call(this, document2, node2, captureTextNodes);
        _this.type = "polyline";
        _this.points = [];
        _this.points = Point.parsePath(_this.getAttribute("points").getString());
        return _this;
      }
      _createClass__default["default"](PolylineElement2, [{
        key: "path",
        value: function path(ctx) {
          var points = this.points;
          var _points = _slicedToArray__default["default"](points, 1), _points$ = _points[0], x0 = _points$.x, y0 = _points$.y;
          var boundingBox = new BoundingBox(x0, y0);
          if (ctx) {
            ctx.beginPath();
            ctx.moveTo(x0, y0);
          }
          points.forEach(function(_ref) {
            var x = _ref.x, y = _ref.y;
            boundingBox.addPoint(x, y);
            if (ctx) {
              ctx.lineTo(x, y);
            }
          });
          return boundingBox;
        }
      }, {
        key: "getMarkers",
        value: function getMarkers() {
          var points = this.points;
          var lastIndex = points.length - 1;
          var markers = [];
          points.forEach(function(point, i) {
            if (i === lastIndex) {
              return;
            }
            markers.push([point, point.angleTo(points[i + 1])]);
          });
          if (markers.length > 0) {
            markers.push([points[points.length - 1], markers[markers.length - 1][1]]);
          }
          return markers;
        }
      }]);
      return PolylineElement2;
    })(PathElement);
    function _createSuper$v(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$v();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$v() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var PolygonElement = /* @__PURE__ */ (function(_PolylineElement) {
      _inherits__default["default"](PolygonElement2, _PolylineElement);
      var _super = _createSuper$v(PolygonElement2);
      function PolygonElement2() {
        var _this;
        _classCallCheck__default["default"](this, PolygonElement2);
        _this = _super.apply(this, arguments);
        _this.type = "polygon";
        return _this;
      }
      _createClass__default["default"](PolygonElement2, [{
        key: "path",
        value: function path(ctx) {
          var boundingBox = _get__default["default"](_getPrototypeOf__default["default"](PolygonElement2.prototype), "path", this).call(this, ctx);
          var _this$points = _slicedToArray__default["default"](this.points, 1), _this$points$ = _this$points[0], x = _this$points$.x, y = _this$points$.y;
          if (ctx) {
            ctx.lineTo(x, y);
            ctx.closePath();
          }
          return boundingBox;
        }
      }]);
      return PolygonElement2;
    })(PolylineElement);
    function _createSuper$u(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$u();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$u() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var PatternElement = /* @__PURE__ */ (function(_Element) {
      _inherits__default["default"](PatternElement2, _Element);
      var _super = _createSuper$u(PatternElement2);
      function PatternElement2() {
        var _this;
        _classCallCheck__default["default"](this, PatternElement2);
        _this = _super.apply(this, arguments);
        _this.type = "pattern";
        return _this;
      }
      _createClass__default["default"](PatternElement2, [{
        key: "createPattern",
        value: function createPattern(ctx, _, parentOpacityProp) {
          var width = this.getStyle("width").getPixels("x", true);
          var height = this.getStyle("height").getPixels("y", true);
          var patternSvg = new SVGElement(this.document, null);
          patternSvg.attributes.viewBox = new Property(this.document, "viewBox", this.getAttribute("viewBox").getValue());
          patternSvg.attributes.width = new Property(this.document, "width", "".concat(width, "px"));
          patternSvg.attributes.height = new Property(this.document, "height", "".concat(height, "px"));
          patternSvg.attributes.transform = new Property(this.document, "transform", this.getAttribute("patternTransform").getValue());
          patternSvg.children = this.children;
          var patternCanvas = this.document.createCanvas(width, height);
          var patternCtx = patternCanvas.getContext("2d");
          var xAttr = this.getAttribute("x");
          var yAttr = this.getAttribute("y");
          if (xAttr.hasValue() && yAttr.hasValue()) {
            patternCtx.translate(xAttr.getPixels("x", true), yAttr.getPixels("y", true));
          }
          if (parentOpacityProp.hasValue()) {
            this.styles["fill-opacity"] = parentOpacityProp;
          } else {
            Reflect.deleteProperty(this.styles, "fill-opacity");
          }
          for (var x = -1; x <= 1; x++) {
            for (var y = -1; y <= 1; y++) {
              patternCtx.save();
              patternSvg.attributes.x = new Property(this.document, "x", x * patternCanvas.width);
              patternSvg.attributes.y = new Property(this.document, "y", y * patternCanvas.height);
              patternSvg.render(patternCtx);
              patternCtx.restore();
            }
          }
          var pattern = ctx.createPattern(patternCanvas, "repeat");
          return pattern;
        }
      }]);
      return PatternElement2;
    })(Element);
    function _createSuper$t(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$t();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$t() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var MarkerElement = /* @__PURE__ */ (function(_Element) {
      _inherits__default["default"](MarkerElement2, _Element);
      var _super = _createSuper$t(MarkerElement2);
      function MarkerElement2() {
        var _this;
        _classCallCheck__default["default"](this, MarkerElement2);
        _this = _super.apply(this, arguments);
        _this.type = "marker";
        return _this;
      }
      _createClass__default["default"](MarkerElement2, [{
        key: "render",
        value: function render(ctx, point, angle) {
          if (!point) {
            return;
          }
          var x = point.x, y = point.y;
          var orient = this.getAttribute("orient").getString("auto");
          var markerUnits = this.getAttribute("markerUnits").getString("strokeWidth");
          ctx.translate(x, y);
          if (orient === "auto") {
            ctx.rotate(angle);
          }
          if (markerUnits === "strokeWidth") {
            ctx.scale(ctx.lineWidth, ctx.lineWidth);
          }
          ctx.save();
          var markerSvg = new SVGElement(this.document, null);
          markerSvg.type = this.type;
          markerSvg.attributes.viewBox = new Property(this.document, "viewBox", this.getAttribute("viewBox").getValue());
          markerSvg.attributes.refX = new Property(this.document, "refX", this.getAttribute("refX").getValue());
          markerSvg.attributes.refY = new Property(this.document, "refY", this.getAttribute("refY").getValue());
          markerSvg.attributes.width = new Property(this.document, "width", this.getAttribute("markerWidth").getValue());
          markerSvg.attributes.height = new Property(this.document, "height", this.getAttribute("markerHeight").getValue());
          markerSvg.attributes.overflow = new Property(this.document, "overflow", this.getAttribute("overflow").getValue());
          markerSvg.attributes.fill = new Property(this.document, "fill", this.getAttribute("fill").getColor("black"));
          markerSvg.attributes.stroke = new Property(this.document, "stroke", this.getAttribute("stroke").getValue("none"));
          markerSvg.children = this.children;
          markerSvg.render(ctx);
          ctx.restore();
          if (markerUnits === "strokeWidth") {
            ctx.scale(1 / ctx.lineWidth, 1 / ctx.lineWidth);
          }
          if (orient === "auto") {
            ctx.rotate(-angle);
          }
          ctx.translate(-x, -y);
        }
      }]);
      return MarkerElement2;
    })(Element);
    function _createSuper$s(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$s();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$s() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var DefsElement = /* @__PURE__ */ (function(_Element) {
      _inherits__default["default"](DefsElement2, _Element);
      var _super = _createSuper$s(DefsElement2);
      function DefsElement2() {
        var _this;
        _classCallCheck__default["default"](this, DefsElement2);
        _this = _super.apply(this, arguments);
        _this.type = "defs";
        return _this;
      }
      _createClass__default["default"](DefsElement2, [{
        key: "render",
        value: function render() {
        }
      }]);
      return DefsElement2;
    })(Element);
    function _createSuper$r(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$r();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$r() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var GElement = /* @__PURE__ */ (function(_RenderedElement) {
      _inherits__default["default"](GElement2, _RenderedElement);
      var _super = _createSuper$r(GElement2);
      function GElement2() {
        var _this;
        _classCallCheck__default["default"](this, GElement2);
        _this = _super.apply(this, arguments);
        _this.type = "g";
        return _this;
      }
      _createClass__default["default"](GElement2, [{
        key: "getBoundingBox",
        value: function getBoundingBox(ctx) {
          var boundingBox = new BoundingBox();
          this.children.forEach(function(child) {
            boundingBox.addBoundingBox(child.getBoundingBox(ctx));
          });
          return boundingBox;
        }
      }]);
      return GElement2;
    })(RenderedElement);
    function _createSuper$q(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$q();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$q() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var GradientElement = /* @__PURE__ */ (function(_Element) {
      _inherits__default["default"](GradientElement2, _Element);
      var _super = _createSuper$q(GradientElement2);
      function GradientElement2(document2, node2, captureTextNodes) {
        var _this;
        _classCallCheck__default["default"](this, GradientElement2);
        _this = _super.call(this, document2, node2, captureTextNodes);
        _this.attributesToInherit = ["gradientUnits"];
        _this.stops = [];
        var _assertThisInitialize = _assertThisInitialized__default["default"](_this), stops = _assertThisInitialize.stops, children = _assertThisInitialize.children;
        children.forEach(function(child) {
          if (child.type === "stop") {
            stops.push(child);
          }
        });
        return _this;
      }
      _createClass__default["default"](GradientElement2, [{
        key: "getGradientUnits",
        value: function getGradientUnits() {
          return this.getAttribute("gradientUnits").getString("objectBoundingBox");
        }
      }, {
        key: "createGradient",
        value: function createGradient(ctx, element, parentOpacityProp) {
          var _this2 = this;
          var stopsContainer = this;
          if (this.getHrefAttribute().hasValue()) {
            stopsContainer = this.getHrefAttribute().getDefinition();
            this.inheritStopContainer(stopsContainer);
          }
          var _stopsContainer = stopsContainer, stops = _stopsContainer.stops;
          var gradient = this.getGradient(ctx, element);
          if (!gradient) {
            return this.addParentOpacity(parentOpacityProp, stops[stops.length - 1].color);
          }
          stops.forEach(function(stop) {
            gradient.addColorStop(stop.offset, _this2.addParentOpacity(parentOpacityProp, stop.color));
          });
          if (this.getAttribute("gradientTransform").hasValue()) {
            var document2 = this.document;
            var _document$screen = document2.screen, MAX_VIRTUAL_PIXELS = _document$screen.MAX_VIRTUAL_PIXELS, viewPort = _document$screen.viewPort;
            var _viewPort$viewPorts = _slicedToArray__default["default"](viewPort.viewPorts, 1), rootView = _viewPort$viewPorts[0];
            var rect = new RectElement(document2, null);
            rect.attributes.x = new Property(document2, "x", -MAX_VIRTUAL_PIXELS / 3);
            rect.attributes.y = new Property(document2, "y", -MAX_VIRTUAL_PIXELS / 3);
            rect.attributes.width = new Property(document2, "width", MAX_VIRTUAL_PIXELS);
            rect.attributes.height = new Property(document2, "height", MAX_VIRTUAL_PIXELS);
            var group = new GElement(document2, null);
            group.attributes.transform = new Property(document2, "transform", this.getAttribute("gradientTransform").getValue());
            group.children = [rect];
            var patternSvg = new SVGElement(document2, null);
            patternSvg.attributes.x = new Property(document2, "x", 0);
            patternSvg.attributes.y = new Property(document2, "y", 0);
            patternSvg.attributes.width = new Property(document2, "width", rootView.width);
            patternSvg.attributes.height = new Property(document2, "height", rootView.height);
            patternSvg.children = [group];
            var patternCanvas = document2.createCanvas(rootView.width, rootView.height);
            var patternCtx = patternCanvas.getContext("2d");
            patternCtx.fillStyle = gradient;
            patternSvg.render(patternCtx);
            return patternCtx.createPattern(patternCanvas, "no-repeat");
          }
          return gradient;
        }
      }, {
        key: "inheritStopContainer",
        value: function inheritStopContainer(stopsContainer) {
          var _this3 = this;
          this.attributesToInherit.forEach(function(attributeToInherit) {
            if (!_this3.getAttribute(attributeToInherit).hasValue() && stopsContainer.getAttribute(attributeToInherit).hasValue()) {
              _this3.getAttribute(attributeToInherit, true).setValue(stopsContainer.getAttribute(attributeToInherit).getValue());
            }
          });
        }
      }, {
        key: "addParentOpacity",
        value: function addParentOpacity(parentOpacityProp, color) {
          if (parentOpacityProp.hasValue()) {
            var colorProp = new Property(this.document, "color", color);
            return colorProp.addOpacity(parentOpacityProp).getColor();
          }
          return color;
        }
      }]);
      return GradientElement2;
    })(Element);
    function _createSuper$p(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$p();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$p() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var LinearGradientElement = /* @__PURE__ */ (function(_GradientElement) {
      _inherits__default["default"](LinearGradientElement2, _GradientElement);
      var _super = _createSuper$p(LinearGradientElement2);
      function LinearGradientElement2(document2, node2, captureTextNodes) {
        var _this;
        _classCallCheck__default["default"](this, LinearGradientElement2);
        _this = _super.call(this, document2, node2, captureTextNodes);
        _this.type = "linearGradient";
        _this.attributesToInherit.push("x1", "y1", "x2", "y2");
        return _this;
      }
      _createClass__default["default"](LinearGradientElement2, [{
        key: "getGradient",
        value: function getGradient(ctx, element) {
          var isBoundingBoxUnits = this.getGradientUnits() === "objectBoundingBox";
          var boundingBox = isBoundingBoxUnits ? element.getBoundingBox(ctx) : null;
          if (isBoundingBoxUnits && !boundingBox) {
            return null;
          }
          if (!this.getAttribute("x1").hasValue() && !this.getAttribute("y1").hasValue() && !this.getAttribute("x2").hasValue() && !this.getAttribute("y2").hasValue()) {
            this.getAttribute("x1", true).setValue(0);
            this.getAttribute("y1", true).setValue(0);
            this.getAttribute("x2", true).setValue(1);
            this.getAttribute("y2", true).setValue(0);
          }
          var x1 = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute("x1").getNumber() : this.getAttribute("x1").getPixels("x");
          var y1 = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute("y1").getNumber() : this.getAttribute("y1").getPixels("y");
          var x2 = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute("x2").getNumber() : this.getAttribute("x2").getPixels("x");
          var y2 = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute("y2").getNumber() : this.getAttribute("y2").getPixels("y");
          if (x1 === x2 && y1 === y2) {
            return null;
          }
          return ctx.createLinearGradient(x1, y1, x2, y2);
        }
      }]);
      return LinearGradientElement2;
    })(GradientElement);
    function _createSuper$o(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$o();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$o() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var RadialGradientElement = /* @__PURE__ */ (function(_GradientElement) {
      _inherits__default["default"](RadialGradientElement2, _GradientElement);
      var _super = _createSuper$o(RadialGradientElement2);
      function RadialGradientElement2(document2, node2, captureTextNodes) {
        var _this;
        _classCallCheck__default["default"](this, RadialGradientElement2);
        _this = _super.call(this, document2, node2, captureTextNodes);
        _this.type = "radialGradient";
        _this.attributesToInherit.push("cx", "cy", "r", "fx", "fy", "fr");
        return _this;
      }
      _createClass__default["default"](RadialGradientElement2, [{
        key: "getGradient",
        value: function getGradient(ctx, element) {
          var isBoundingBoxUnits = this.getGradientUnits() === "objectBoundingBox";
          var boundingBox = element.getBoundingBox(ctx);
          if (isBoundingBoxUnits && !boundingBox) {
            return null;
          }
          if (!this.getAttribute("cx").hasValue()) {
            this.getAttribute("cx", true).setValue("50%");
          }
          if (!this.getAttribute("cy").hasValue()) {
            this.getAttribute("cy", true).setValue("50%");
          }
          if (!this.getAttribute("r").hasValue()) {
            this.getAttribute("r", true).setValue("50%");
          }
          var cx = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute("cx").getNumber() : this.getAttribute("cx").getPixels("x");
          var cy = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute("cy").getNumber() : this.getAttribute("cy").getPixels("y");
          var fx = cx;
          var fy = cy;
          if (this.getAttribute("fx").hasValue()) {
            fx = isBoundingBoxUnits ? boundingBox.x + boundingBox.width * this.getAttribute("fx").getNumber() : this.getAttribute("fx").getPixels("x");
          }
          if (this.getAttribute("fy").hasValue()) {
            fy = isBoundingBoxUnits ? boundingBox.y + boundingBox.height * this.getAttribute("fy").getNumber() : this.getAttribute("fy").getPixels("y");
          }
          var r = isBoundingBoxUnits ? (boundingBox.width + boundingBox.height) / 2 * this.getAttribute("r").getNumber() : this.getAttribute("r").getPixels();
          var fr = this.getAttribute("fr").getPixels();
          return ctx.createRadialGradient(fx, fy, fr, cx, cy, r);
        }
      }]);
      return RadialGradientElement2;
    })(GradientElement);
    function _createSuper$n(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$n();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$n() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var StopElement = /* @__PURE__ */ (function(_Element) {
      _inherits__default["default"](StopElement2, _Element);
      var _super = _createSuper$n(StopElement2);
      function StopElement2(document2, node2, captureTextNodes) {
        var _this;
        _classCallCheck__default["default"](this, StopElement2);
        _this = _super.call(this, document2, node2, captureTextNodes);
        _this.type = "stop";
        var offset = Math.max(0, Math.min(1, _this.getAttribute("offset").getNumber()));
        var stopOpacity = _this.getStyle("stop-opacity");
        var stopColor = _this.getStyle("stop-color", true);
        if (stopColor.getString() === "") {
          stopColor.setValue("#000");
        }
        if (stopOpacity.hasValue()) {
          stopColor = stopColor.addOpacity(stopOpacity);
        }
        _this.offset = offset;
        _this.color = stopColor.getColor();
        return _this;
      }
      return StopElement2;
    })(Element);
    function _createSuper$m(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$m();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$m() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var AnimateElement = /* @__PURE__ */ (function(_Element) {
      _inherits__default["default"](AnimateElement2, _Element);
      var _super = _createSuper$m(AnimateElement2);
      function AnimateElement2(document2, node2, captureTextNodes) {
        var _this;
        _classCallCheck__default["default"](this, AnimateElement2);
        _this = _super.call(this, document2, node2, captureTextNodes);
        _this.type = "animate";
        _this.duration = 0;
        _this.initialValue = null;
        _this.initialUnits = "";
        _this.removed = false;
        _this.frozen = false;
        document2.screen.animations.push(_assertThisInitialized__default["default"](_this));
        _this.begin = _this.getAttribute("begin").getMilliseconds();
        _this.maxDuration = _this.begin + _this.getAttribute("dur").getMilliseconds();
        _this.from = _this.getAttribute("from");
        _this.to = _this.getAttribute("to");
        _this.values = new Property(document2, "values", null);
        var valuesAttr = _this.getAttribute("values");
        if (valuesAttr.hasValue()) {
          _this.values.setValue(valuesAttr.getString().split(";"));
        }
        return _this;
      }
      _createClass__default["default"](AnimateElement2, [{
        key: "getProperty",
        value: function getProperty() {
          var attributeType = this.getAttribute("attributeType").getString();
          var attributeName = this.getAttribute("attributeName").getString();
          if (attributeType === "CSS") {
            return this.parent.getStyle(attributeName, true);
          }
          return this.parent.getAttribute(attributeName, true);
        }
      }, {
        key: "calcValue",
        value: function calcValue() {
          var initialUnits = this.initialUnits;
          var _this$getProgress = this.getProgress(), progress = _this$getProgress.progress, from = _this$getProgress.from, to = _this$getProgress.to;
          var newValue = from.getNumber() + (to.getNumber() - from.getNumber()) * progress;
          if (initialUnits === "%") {
            newValue *= 100;
          }
          return "".concat(newValue).concat(initialUnits);
        }
      }, {
        key: "update",
        value: function update(delta) {
          var parent = this.parent;
          var prop = this.getProperty();
          if (!this.initialValue) {
            this.initialValue = prop.getString();
            this.initialUnits = prop.getUnits();
          }
          if (this.duration > this.maxDuration) {
            var fill = this.getAttribute("fill").getString("remove");
            if (this.getAttribute("repeatCount").getString() === "indefinite" || this.getAttribute("repeatDur").getString() === "indefinite") {
              this.duration = 0;
            } else if (fill === "freeze" && !this.frozen) {
              this.frozen = true;
              parent.animationFrozen = true;
              parent.animationFrozenValue = prop.getString();
            } else if (fill === "remove" && !this.removed) {
              this.removed = true;
              prop.setValue(parent.animationFrozen ? parent.animationFrozenValue : this.initialValue);
              return true;
            }
            return false;
          }
          this.duration += delta;
          var updated = false;
          if (this.begin < this.duration) {
            var newValue = this.calcValue();
            var typeAttr = this.getAttribute("type");
            if (typeAttr.hasValue()) {
              var type = typeAttr.getString();
              newValue = "".concat(type, "(").concat(newValue, ")");
            }
            prop.setValue(newValue);
            updated = true;
          }
          return updated;
        }
      }, {
        key: "getProgress",
        value: function getProgress() {
          var document2 = this.document, values = this.values;
          var result = {
            progress: (this.duration - this.begin) / (this.maxDuration - this.begin)
          };
          if (values.hasValue()) {
            var p = result.progress * (values.getValue().length - 1);
            var lb = Math.floor(p);
            var ub = Math.ceil(p);
            result.from = new Property(document2, "from", parseFloat(values.getValue()[lb]));
            result.to = new Property(document2, "to", parseFloat(values.getValue()[ub]));
            result.progress = (p - lb) / (ub - lb);
          } else {
            result.from = this.from;
            result.to = this.to;
          }
          return result;
        }
      }]);
      return AnimateElement2;
    })(Element);
    function _createSuper$l(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$l();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$l() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var AnimateColorElement = /* @__PURE__ */ (function(_AnimateElement) {
      _inherits__default["default"](AnimateColorElement2, _AnimateElement);
      var _super = _createSuper$l(AnimateColorElement2);
      function AnimateColorElement2() {
        var _this;
        _classCallCheck__default["default"](this, AnimateColorElement2);
        _this = _super.apply(this, arguments);
        _this.type = "animateColor";
        return _this;
      }
      _createClass__default["default"](AnimateColorElement2, [{
        key: "calcValue",
        value: function calcValue() {
          var _this$getProgress = this.getProgress(), progress = _this$getProgress.progress, from = _this$getProgress.from, to = _this$getProgress.to;
          var colorFrom = new RGBColor__default["default"](from.getColor());
          var colorTo = new RGBColor__default["default"](to.getColor());
          if (colorFrom.ok && colorTo.ok) {
            var r = colorFrom.r + (colorTo.r - colorFrom.r) * progress;
            var g = colorFrom.g + (colorTo.g - colorFrom.g) * progress;
            var b = colorFrom.b + (colorTo.b - colorFrom.b) * progress;
            return "rgb(".concat(Math.floor(r), ", ").concat(Math.floor(g), ", ").concat(Math.floor(b), ")");
          }
          return this.getAttribute("from").getColor();
        }
      }]);
      return AnimateColorElement2;
    })(AnimateElement);
    function _createSuper$k(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$k();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$k() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var AnimateTransformElement = /* @__PURE__ */ (function(_AnimateElement) {
      _inherits__default["default"](AnimateTransformElement2, _AnimateElement);
      var _super = _createSuper$k(AnimateTransformElement2);
      function AnimateTransformElement2() {
        var _this;
        _classCallCheck__default["default"](this, AnimateTransformElement2);
        _this = _super.apply(this, arguments);
        _this.type = "animateTransform";
        return _this;
      }
      _createClass__default["default"](AnimateTransformElement2, [{
        key: "calcValue",
        value: function calcValue() {
          var _this$getProgress = this.getProgress(), progress = _this$getProgress.progress, from = _this$getProgress.from, to = _this$getProgress.to;
          var transformFrom = toNumbers(from.getString());
          var transformTo = toNumbers(to.getString());
          var newValue = transformFrom.map(function(from2, i) {
            var to2 = transformTo[i];
            return from2 + (to2 - from2) * progress;
          }).join(" ");
          return newValue;
        }
      }]);
      return AnimateTransformElement2;
    })(AnimateElement);
    function _createForOfIteratorHelper$1(o, allowArrayLike) {
      var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
      if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike) {
          if (it) o = it;
          var i = 0;
          var F = function F2() {
          };
          return { s: F, n: function n() {
            if (i >= o.length) return { done: true };
            return { done: false, value: o[i++] };
          }, e: function e(_e) {
            throw _e;
          }, f: F };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var normalCompletion = true, didErr = false, err;
      return { s: function s() {
        it = it.call(o);
      }, n: function n() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      }, e: function e(_e2) {
        didErr = true;
        err = _e2;
      }, f: function f() {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      } };
    }
    function _unsupportedIterableToArray$1(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
    }
    function _arrayLikeToArray$1(arr, len) {
      if (len == null || len > arr.length) len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function _createSuper$j(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$j();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$j() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var FontElement = /* @__PURE__ */ (function(_Element) {
      _inherits__default["default"](FontElement2, _Element);
      var _super = _createSuper$j(FontElement2);
      function FontElement2(document2, node2, captureTextNodes) {
        var _this;
        _classCallCheck__default["default"](this, FontElement2);
        _this = _super.call(this, document2, node2, captureTextNodes);
        _this.type = "font";
        _this.glyphs = /* @__PURE__ */ Object.create(null);
        _this.horizAdvX = _this.getAttribute("horiz-adv-x").getNumber();
        var definitions = document2.definitions;
        var _assertThisInitialize = _assertThisInitialized__default["default"](_this), children = _assertThisInitialize.children;
        var _iterator = _createForOfIteratorHelper$1(children), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var child = _step.value;
            switch (child.type) {
              case "font-face": {
                _this.fontFace = child;
                var fontFamilyStyle = child.getStyle("font-family");
                if (fontFamilyStyle.hasValue()) {
                  definitions[fontFamilyStyle.getString()] = _assertThisInitialized__default["default"](_this);
                }
                break;
              }
              case "missing-glyph":
                _this.missingGlyph = child;
                break;
              case "glyph": {
                var glyph = child;
                if (glyph.arabicForm) {
                  _this.isRTL = true;
                  _this.isArabic = true;
                  if (typeof _this.glyphs[glyph.unicode] === "undefined") {
                    _this.glyphs[glyph.unicode] = /* @__PURE__ */ Object.create(null);
                  }
                  _this.glyphs[glyph.unicode][glyph.arabicForm] = glyph;
                } else {
                  _this.glyphs[glyph.unicode] = glyph;
                }
                break;
              }
              default:
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return _this;
      }
      _createClass__default["default"](FontElement2, [{
        key: "render",
        value: function render() {
        }
      }]);
      return FontElement2;
    })(Element);
    function _createSuper$i(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$i();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$i() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var FontFaceElement = /* @__PURE__ */ (function(_Element) {
      _inherits__default["default"](FontFaceElement2, _Element);
      var _super = _createSuper$i(FontFaceElement2);
      function FontFaceElement2(document2, node2, captureTextNodes) {
        var _this;
        _classCallCheck__default["default"](this, FontFaceElement2);
        _this = _super.call(this, document2, node2, captureTextNodes);
        _this.type = "font-face";
        _this.ascent = _this.getAttribute("ascent").getNumber();
        _this.descent = _this.getAttribute("descent").getNumber();
        _this.unitsPerEm = _this.getAttribute("units-per-em").getNumber();
        return _this;
      }
      return FontFaceElement2;
    })(Element);
    function _createSuper$h(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$h();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$h() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var MissingGlyphElement = /* @__PURE__ */ (function(_PathElement) {
      _inherits__default["default"](MissingGlyphElement2, _PathElement);
      var _super = _createSuper$h(MissingGlyphElement2);
      function MissingGlyphElement2() {
        var _this;
        _classCallCheck__default["default"](this, MissingGlyphElement2);
        _this = _super.apply(this, arguments);
        _this.type = "missing-glyph";
        _this.horizAdvX = 0;
        return _this;
      }
      return MissingGlyphElement2;
    })(PathElement);
    function _createSuper$g(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$g();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$g() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var TRefElement = /* @__PURE__ */ (function(_TextElement) {
      _inherits__default["default"](TRefElement2, _TextElement);
      var _super = _createSuper$g(TRefElement2);
      function TRefElement2() {
        var _this;
        _classCallCheck__default["default"](this, TRefElement2);
        _this = _super.apply(this, arguments);
        _this.type = "tref";
        return _this;
      }
      _createClass__default["default"](TRefElement2, [{
        key: "getText",
        value: function getText() {
          var element = this.getHrefAttribute().getDefinition();
          if (element) {
            var firstChild = element.children[0];
            if (firstChild) {
              return firstChild.getText();
            }
          }
          return "";
        }
      }]);
      return TRefElement2;
    })(TextElement);
    function _createSuper$f(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$f();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$f() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var AElement = /* @__PURE__ */ (function(_TextElement) {
      _inherits__default["default"](AElement2, _TextElement);
      var _super = _createSuper$f(AElement2);
      function AElement2(document2, node2, captureTextNodes) {
        var _this;
        _classCallCheck__default["default"](this, AElement2);
        _this = _super.call(this, document2, node2, captureTextNodes);
        _this.type = "a";
        var childNodes = node2.childNodes;
        var firstChild = childNodes[0];
        var hasText = childNodes.length > 0 && Array.from(childNodes).every(function(node3) {
          return node3.nodeType === 3;
        });
        _this.hasText = hasText;
        _this.text = hasText ? _this.getTextFromNode(firstChild) : "";
        return _this;
      }
      _createClass__default["default"](AElement2, [{
        key: "getText",
        value: function getText() {
          return this.text;
        }
      }, {
        key: "renderChildren",
        value: function renderChildren(ctx) {
          if (this.hasText) {
            _get__default["default"](_getPrototypeOf__default["default"](AElement2.prototype), "renderChildren", this).call(this, ctx);
            var document2 = this.document, x = this.x, y = this.y;
            var mouse = document2.screen.mouse;
            var fontSize = new Property(document2, "fontSize", Font.parse(document2.ctx.font).fontSize);
            if (mouse.isWorking()) {
              mouse.checkBoundingBox(this, new BoundingBox(x, y - fontSize.getPixels("y"), x + this.measureText(ctx), y));
            }
          } else if (this.children.length > 0) {
            var g = new GElement(this.document, null);
            g.children = this.children;
            g.parent = this;
            g.render(ctx);
          }
        }
      }, {
        key: "onClick",
        value: function onClick() {
          var window2 = this.document.window;
          if (window2) {
            window2.open(this.getHrefAttribute().getString());
          }
        }
      }, {
        key: "onMouseMove",
        value: function onMouseMove() {
          var ctx = this.document.ctx;
          ctx.canvas.style.cursor = "pointer";
        }
      }]);
      return AElement2;
    })(TextElement);
    function _createForOfIteratorHelper(o, allowArrayLike) {
      var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
      if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike) {
          if (it) o = it;
          var i = 0;
          var F = function F2() {
          };
          return { s: F, n: function n() {
            if (i >= o.length) return { done: true };
            return { done: false, value: o[i++] };
          }, e: function e(_e) {
            throw _e;
          }, f: F };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var normalCompletion = true, didErr = false, err;
      return { s: function s() {
        it = it.call(o);
      }, n: function n() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      }, e: function e(_e2) {
        didErr = true;
        err = _e2;
      }, f: function f() {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      } };
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;
      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }
      return arr2;
    }
    function ownKeys$2(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread$2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys$2(Object(source), true).forEach(function(key) {
            _defineProperty__default["default"](target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys$2(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _createSuper$e(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$e();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$e() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var TextPathElement = /* @__PURE__ */ (function(_TextElement) {
      _inherits__default["default"](TextPathElement2, _TextElement);
      var _super = _createSuper$e(TextPathElement2);
      function TextPathElement2(document2, node2, captureTextNodes) {
        var _this;
        _classCallCheck__default["default"](this, TextPathElement2);
        _this = _super.call(this, document2, node2, captureTextNodes);
        _this.type = "textPath";
        _this.textWidth = 0;
        _this.textHeight = 0;
        _this.pathLength = -1;
        _this.glyphInfo = null;
        _this.letterSpacingCache = [];
        _this.measuresCache = /* @__PURE__ */ new Map([["", 0]]);
        var pathElement = _this.getHrefAttribute().getDefinition();
        _this.text = _this.getTextFromNode();
        _this.dataArray = _this.parsePathData(pathElement);
        return _this;
      }
      _createClass__default["default"](TextPathElement2, [{
        key: "getText",
        value: function getText() {
          return this.text;
        }
      }, {
        key: "path",
        value: function path(ctx) {
          var dataArray = this.dataArray;
          if (ctx) {
            ctx.beginPath();
          }
          dataArray.forEach(function(_ref) {
            var type = _ref.type, points = _ref.points;
            switch (type) {
              case PathParser.LINE_TO:
                if (ctx) {
                  ctx.lineTo(points[0], points[1]);
                }
                break;
              case PathParser.MOVE_TO:
                if (ctx) {
                  ctx.moveTo(points[0], points[1]);
                }
                break;
              case PathParser.CURVE_TO:
                if (ctx) {
                  ctx.bezierCurveTo(points[0], points[1], points[2], points[3], points[4], points[5]);
                }
                break;
              case PathParser.QUAD_TO:
                if (ctx) {
                  ctx.quadraticCurveTo(points[0], points[1], points[2], points[3]);
                }
                break;
              case PathParser.ARC: {
                var _points = _slicedToArray__default["default"](points, 8), cx = _points[0], cy = _points[1], rx = _points[2], ry = _points[3], theta = _points[4], dTheta = _points[5], psi = _points[6], fs = _points[7];
                var r = rx > ry ? rx : ry;
                var scaleX = rx > ry ? 1 : rx / ry;
                var scaleY = rx > ry ? ry / rx : 1;
                if (ctx) {
                  ctx.translate(cx, cy);
                  ctx.rotate(psi);
                  ctx.scale(scaleX, scaleY);
                  ctx.arc(0, 0, r, theta, theta + dTheta, Boolean(1 - fs));
                  ctx.scale(1 / scaleX, 1 / scaleY);
                  ctx.rotate(-psi);
                  ctx.translate(-cx, -cy);
                }
                break;
              }
              case PathParser.CLOSE_PATH:
                if (ctx) {
                  ctx.closePath();
                }
                break;
            }
          });
        }
      }, {
        key: "renderChildren",
        value: function renderChildren(ctx) {
          this.setTextData(ctx);
          ctx.save();
          var textDecoration = this.parent.getStyle("text-decoration").getString();
          var fontSize = this.getFontSize();
          var glyphInfo = this.glyphInfo;
          var fill = ctx.fillStyle;
          if (textDecoration === "underline") {
            ctx.beginPath();
          }
          glyphInfo.forEach(function(glyph, i) {
            var p0 = glyph.p0, p1 = glyph.p1, rotation = glyph.rotation, partialText = glyph.text;
            ctx.save();
            ctx.translate(p0.x, p0.y);
            ctx.rotate(rotation);
            if (ctx.fillStyle) {
              ctx.fillText(partialText, 0, 0);
            }
            if (ctx.strokeStyle) {
              ctx.strokeText(partialText, 0, 0);
            }
            ctx.restore();
            if (textDecoration === "underline") {
              if (i === 0) {
                ctx.moveTo(p0.x, p0.y + fontSize / 8);
              }
              ctx.lineTo(p1.x, p1.y + fontSize / 5);
            }
          });
          if (textDecoration === "underline") {
            ctx.lineWidth = fontSize / 20;
            ctx.strokeStyle = fill;
            ctx.stroke();
            ctx.closePath();
          }
          ctx.restore();
        }
      }, {
        key: "getLetterSpacingAt",
        value: function getLetterSpacingAt() {
          var idx = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
          return this.letterSpacingCache[idx] || 0;
        }
      }, {
        key: "findSegmentToFitChar",
        value: function findSegmentToFitChar(ctx, anchor, textFullWidth, fullPathWidth, spacesNumber, inputOffset, dy, c2, charI) {
          var offset = inputOffset;
          var glyphWidth = this.measureText(ctx, c2);
          if (c2 === " " && anchor === "justify" && textFullWidth < fullPathWidth) {
            glyphWidth += (fullPathWidth - textFullWidth) / spacesNumber;
          }
          if (charI > -1) {
            offset += this.getLetterSpacingAt(charI);
          }
          var splineStep = this.textHeight / 20;
          var p0 = this.getEquidistantPointOnPath(offset, splineStep, 0);
          var p1 = this.getEquidistantPointOnPath(offset + glyphWidth, splineStep, 0);
          var segment = {
            p0,
            p1
          };
          var rotation = p0 && p1 ? Math.atan2(p1.y - p0.y, p1.x - p0.x) : 0;
          if (dy) {
            var dyX = Math.cos(Math.PI / 2 + rotation) * dy;
            var dyY = Math.cos(-rotation) * dy;
            segment.p0 = _objectSpread$2(_objectSpread$2({}, p0), {}, {
              x: p0.x + dyX,
              y: p0.y + dyY
            });
            segment.p1 = _objectSpread$2(_objectSpread$2({}, p1), {}, {
              x: p1.x + dyX,
              y: p1.y + dyY
            });
          }
          offset += glyphWidth;
          return {
            offset,
            segment,
            rotation
          };
        }
      }, {
        key: "measureText",
        value: function measureText(ctx, text) {
          var measuresCache = this.measuresCache;
          var targetText = text || this.getText();
          if (measuresCache.has(targetText)) {
            return measuresCache.get(targetText);
          }
          var measure = this.measureTargetText(ctx, targetText);
          measuresCache.set(targetText, measure);
          return measure;
        }
        // This method supposes what all custom fonts already loaded.
        // If some font will be loaded after this method call, <textPath> will not be rendered correctly.
        // You need to call this method manually to update glyphs cache.
      }, {
        key: "setTextData",
        value: function setTextData(ctx) {
          var _this2 = this;
          if (this.glyphInfo) {
            return;
          }
          var renderText = this.getText();
          var chars = renderText.split("");
          var spacesNumber = renderText.split(" ").length - 1;
          var dx = this.parent.getAttribute("dx").split().map(function(_) {
            return _.getPixels("x");
          });
          var dy = this.parent.getAttribute("dy").getPixels("y");
          var anchor = this.parent.getStyle("text-anchor").getString("start");
          var thisSpacing = this.getStyle("letter-spacing");
          var parentSpacing = this.parent.getStyle("letter-spacing");
          var letterSpacing = 0;
          if (!thisSpacing.hasValue() || thisSpacing.getValue() === "inherit") {
            letterSpacing = parentSpacing.getPixels();
          } else if (thisSpacing.hasValue()) {
            if (thisSpacing.getValue() !== "initial" && thisSpacing.getValue() !== "unset") {
              letterSpacing = thisSpacing.getPixels();
            }
          }
          var letterSpacingCache = [];
          var textLen = renderText.length;
          this.letterSpacingCache = letterSpacingCache;
          for (var i = 0; i < textLen; i++) {
            letterSpacingCache.push(typeof dx[i] !== "undefined" ? dx[i] : letterSpacing);
          }
          var dxSum = letterSpacingCache.reduce(function(acc, cur, i2) {
            return i2 === 0 ? 0 : acc + cur || 0;
          }, 0);
          var textWidth = this.measureText(ctx);
          var textFullWidth = Math.max(textWidth + dxSum, 0);
          this.textWidth = textWidth;
          this.textHeight = this.getFontSize();
          this.glyphInfo = [];
          var fullPathWidth = this.getPathLength();
          var startOffset = this.getStyle("startOffset").getNumber(0) * fullPathWidth;
          var offset = 0;
          if (anchor === "middle" || anchor === "center") {
            offset = -textFullWidth / 2;
          }
          if (anchor === "end" || anchor === "right") {
            offset = -textFullWidth;
          }
          offset += startOffset;
          chars.forEach(function(char, i2) {
            var _this2$findSegmentToF = _this2.findSegmentToFitChar(ctx, anchor, textFullWidth, fullPathWidth, spacesNumber, offset, dy, char, i2), nextOffset = _this2$findSegmentToF.offset, segment = _this2$findSegmentToF.segment, rotation = _this2$findSegmentToF.rotation;
            offset = nextOffset;
            if (!segment.p0 || !segment.p1) {
              return;
            }
            _this2.glyphInfo.push({
              // transposeX: midpoint.x,
              // transposeY: midpoint.y,
              text: chars[i2],
              p0: segment.p0,
              p1: segment.p1,
              rotation
            });
          });
        }
      }, {
        key: "parsePathData",
        value: function parsePathData(path) {
          this.pathLength = -1;
          if (!path) {
            return [];
          }
          var pathCommands = [];
          var pathParser = path.pathParser;
          pathParser.reset();
          while (!pathParser.isEnd()) {
            var current = pathParser.current;
            var startX = current ? current.x : 0;
            var startY = current ? current.y : 0;
            var command = pathParser.next();
            var nextCommandType = command.type;
            var points = [];
            switch (command.type) {
              case PathParser.MOVE_TO:
                this.pathM(pathParser, points);
                break;
              case PathParser.LINE_TO:
                nextCommandType = this.pathL(pathParser, points);
                break;
              case PathParser.HORIZ_LINE_TO:
                nextCommandType = this.pathH(pathParser, points);
                break;
              case PathParser.VERT_LINE_TO:
                nextCommandType = this.pathV(pathParser, points);
                break;
              case PathParser.CURVE_TO:
                this.pathC(pathParser, points);
                break;
              case PathParser.SMOOTH_CURVE_TO:
                nextCommandType = this.pathS(pathParser, points);
                break;
              case PathParser.QUAD_TO:
                this.pathQ(pathParser, points);
                break;
              case PathParser.SMOOTH_QUAD_TO:
                nextCommandType = this.pathT(pathParser, points);
                break;
              case PathParser.ARC:
                points = this.pathA(pathParser);
                break;
              case PathParser.CLOSE_PATH:
                PathElement.pathZ(pathParser);
                break;
            }
            if (command.type !== PathParser.CLOSE_PATH) {
              pathCommands.push({
                type: nextCommandType,
                points,
                start: {
                  x: startX,
                  y: startY
                },
                pathLength: this.calcLength(startX, startY, nextCommandType, points)
              });
            } else {
              pathCommands.push({
                type: PathParser.CLOSE_PATH,
                points: [],
                pathLength: 0
              });
            }
          }
          return pathCommands;
        }
      }, {
        key: "pathM",
        value: function pathM(pathParser, points) {
          var _PathElement$pathM$po = PathElement.pathM(pathParser).point, x = _PathElement$pathM$po.x, y = _PathElement$pathM$po.y;
          points.push(x, y);
        }
      }, {
        key: "pathL",
        value: function pathL(pathParser, points) {
          var _PathElement$pathL$po = PathElement.pathL(pathParser).point, x = _PathElement$pathL$po.x, y = _PathElement$pathL$po.y;
          points.push(x, y);
          return PathParser.LINE_TO;
        }
      }, {
        key: "pathH",
        value: function pathH(pathParser, points) {
          var _PathElement$pathH$po = PathElement.pathH(pathParser).point, x = _PathElement$pathH$po.x, y = _PathElement$pathH$po.y;
          points.push(x, y);
          return PathParser.LINE_TO;
        }
      }, {
        key: "pathV",
        value: function pathV(pathParser, points) {
          var _PathElement$pathV$po = PathElement.pathV(pathParser).point, x = _PathElement$pathV$po.x, y = _PathElement$pathV$po.y;
          points.push(x, y);
          return PathParser.LINE_TO;
        }
      }, {
        key: "pathC",
        value: function pathC(pathParser, points) {
          var _PathElement$pathC = PathElement.pathC(pathParser), point = _PathElement$pathC.point, controlPoint = _PathElement$pathC.controlPoint, currentPoint = _PathElement$pathC.currentPoint;
          points.push(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
        }
      }, {
        key: "pathS",
        value: function pathS(pathParser, points) {
          var _PathElement$pathS = PathElement.pathS(pathParser), point = _PathElement$pathS.point, controlPoint = _PathElement$pathS.controlPoint, currentPoint = _PathElement$pathS.currentPoint;
          points.push(point.x, point.y, controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
          return PathParser.CURVE_TO;
        }
      }, {
        key: "pathQ",
        value: function pathQ(pathParser, points) {
          var _PathElement$pathQ = PathElement.pathQ(pathParser), controlPoint = _PathElement$pathQ.controlPoint, currentPoint = _PathElement$pathQ.currentPoint;
          points.push(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
        }
      }, {
        key: "pathT",
        value: function pathT(pathParser, points) {
          var _PathElement$pathT = PathElement.pathT(pathParser), controlPoint = _PathElement$pathT.controlPoint, currentPoint = _PathElement$pathT.currentPoint;
          points.push(controlPoint.x, controlPoint.y, currentPoint.x, currentPoint.y);
          return PathParser.QUAD_TO;
        }
      }, {
        key: "pathA",
        value: function pathA(pathParser) {
          var _PathElement$pathA = PathElement.pathA(pathParser), rX = _PathElement$pathA.rX, rY = _PathElement$pathA.rY, sweepFlag = _PathElement$pathA.sweepFlag, xAxisRotation = _PathElement$pathA.xAxisRotation, centp = _PathElement$pathA.centp, a1 = _PathElement$pathA.a1, ad = _PathElement$pathA.ad;
          if (sweepFlag === 0 && ad > 0) {
            ad -= 2 * Math.PI;
          }
          if (sweepFlag === 1 && ad < 0) {
            ad += 2 * Math.PI;
          }
          return [centp.x, centp.y, rX, rY, a1, ad, xAxisRotation, sweepFlag];
        }
      }, {
        key: "calcLength",
        value: function calcLength(x, y, commandType, points) {
          var len = 0;
          var p1 = null;
          var p2 = null;
          var t = 0;
          switch (commandType) {
            case PathParser.LINE_TO:
              return this.getLineLength(x, y, points[0], points[1]);
            case PathParser.CURVE_TO:
              len = 0;
              p1 = this.getPointOnCubicBezier(0, x, y, points[0], points[1], points[2], points[3], points[4], points[5]);
              for (t = 0.01; t <= 1; t += 0.01) {
                p2 = this.getPointOnCubicBezier(t, x, y, points[0], points[1], points[2], points[3], points[4], points[5]);
                len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
                p1 = p2;
              }
              return len;
            case PathParser.QUAD_TO:
              len = 0;
              p1 = this.getPointOnQuadraticBezier(0, x, y, points[0], points[1], points[2], points[3]);
              for (t = 0.01; t <= 1; t += 0.01) {
                p2 = this.getPointOnQuadraticBezier(t, x, y, points[0], points[1], points[2], points[3]);
                len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
                p1 = p2;
              }
              return len;
            case PathParser.ARC: {
              len = 0;
              var start = points[4];
              var dTheta = points[5];
              var end = points[4] + dTheta;
              var inc = Math.PI / 180;
              if (Math.abs(start - end) < inc) {
                inc = Math.abs(start - end);
              }
              p1 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], start, 0);
              if (dTheta < 0) {
                for (t = start - inc; t > end; t -= inc) {
                  p2 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t, 0);
                  len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
                  p1 = p2;
                }
              } else {
                for (t = start + inc; t < end; t += inc) {
                  p2 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t, 0);
                  len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
                  p1 = p2;
                }
              }
              p2 = this.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], end, 0);
              len += this.getLineLength(p1.x, p1.y, p2.x, p2.y);
              return len;
            }
          }
          return 0;
        }
      }, {
        key: "getPointOnLine",
        value: function getPointOnLine(dist, p1x, p1y, p2x, p2y) {
          var fromX = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : p1x;
          var fromY = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : p1y;
          var m2 = (p2y - p1y) / (p2x - p1x + PSEUDO_ZERO);
          var run = Math.sqrt(dist * dist / (1 + m2 * m2));
          if (p2x < p1x) {
            run *= -1;
          }
          var rise = m2 * run;
          var pt = null;
          if (p2x === p1x) {
            pt = {
              x: fromX,
              y: fromY + rise
            };
          } else if ((fromY - p1y) / (fromX - p1x + PSEUDO_ZERO) === m2) {
            pt = {
              x: fromX + run,
              y: fromY + rise
            };
          } else {
            var ix = 0;
            var iy = 0;
            var len = this.getLineLength(p1x, p1y, p2x, p2y);
            if (len < PSEUDO_ZERO) {
              return null;
            }
            var u = (fromX - p1x) * (p2x - p1x) + (fromY - p1y) * (p2y - p1y);
            u /= len * len;
            ix = p1x + u * (p2x - p1x);
            iy = p1y + u * (p2y - p1y);
            var pRise = this.getLineLength(fromX, fromY, ix, iy);
            var pRun = Math.sqrt(dist * dist - pRise * pRise);
            run = Math.sqrt(pRun * pRun / (1 + m2 * m2));
            if (p2x < p1x) {
              run *= -1;
            }
            rise = m2 * run;
            pt = {
              x: ix + run,
              y: iy + rise
            };
          }
          return pt;
        }
      }, {
        key: "getPointOnPath",
        value: function getPointOnPath(distance) {
          var fullLen = this.getPathLength();
          var cumulativePathLength = 0;
          var p = null;
          if (distance < -5e-5 || distance - 5e-5 > fullLen) {
            return null;
          }
          var dataArray = this.dataArray;
          var _iterator = _createForOfIteratorHelper(dataArray), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var command = _step.value;
              if (command && (command.pathLength < 5e-5 || cumulativePathLength + command.pathLength + 5e-5 < distance)) {
                cumulativePathLength += command.pathLength;
                continue;
              }
              var delta = distance - cumulativePathLength;
              var currentT = 0;
              switch (command.type) {
                case PathParser.LINE_TO:
                  p = this.getPointOnLine(delta, command.start.x, command.start.y, command.points[0], command.points[1], command.start.x, command.start.y);
                  break;
                case PathParser.ARC: {
                  var start = command.points[4];
                  var dTheta = command.points[5];
                  var end = command.points[4] + dTheta;
                  currentT = start + delta / command.pathLength * dTheta;
                  if (dTheta < 0 && currentT < end || dTheta >= 0 && currentT > end) {
                    break;
                  }
                  p = this.getPointOnEllipticalArc(command.points[0], command.points[1], command.points[2], command.points[3], currentT, command.points[6]);
                  break;
                }
                case PathParser.CURVE_TO:
                  currentT = delta / command.pathLength;
                  if (currentT > 1) {
                    currentT = 1;
                  }
                  p = this.getPointOnCubicBezier(currentT, command.start.x, command.start.y, command.points[0], command.points[1], command.points[2], command.points[3], command.points[4], command.points[5]);
                  break;
                case PathParser.QUAD_TO:
                  currentT = delta / command.pathLength;
                  if (currentT > 1) {
                    currentT = 1;
                  }
                  p = this.getPointOnQuadraticBezier(currentT, command.start.x, command.start.y, command.points[0], command.points[1], command.points[2], command.points[3]);
                  break;
                default:
              }
              if (p) {
                return p;
              }
              break;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          return null;
        }
      }, {
        key: "getLineLength",
        value: function getLineLength(x1, y1, x2, y2) {
          return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
        }
      }, {
        key: "getPathLength",
        value: function getPathLength() {
          if (this.pathLength === -1) {
            this.pathLength = this.dataArray.reduce(function(length, command) {
              return command.pathLength > 0 ? length + command.pathLength : length;
            }, 0);
          }
          return this.pathLength;
        }
      }, {
        key: "getPointOnCubicBezier",
        value: function getPointOnCubicBezier(pct, p1x, p1y, p2x, p2y, p3x, p3y, p4x, p4y) {
          var x = p4x * CB1(pct) + p3x * CB2(pct) + p2x * CB3(pct) + p1x * CB4(pct);
          var y = p4y * CB1(pct) + p3y * CB2(pct) + p2y * CB3(pct) + p1y * CB4(pct);
          return {
            x,
            y
          };
        }
      }, {
        key: "getPointOnQuadraticBezier",
        value: function getPointOnQuadraticBezier(pct, p1x, p1y, p2x, p2y, p3x, p3y) {
          var x = p3x * QB1(pct) + p2x * QB2(pct) + p1x * QB3(pct);
          var y = p3y * QB1(pct) + p2y * QB2(pct) + p1y * QB3(pct);
          return {
            x,
            y
          };
        }
      }, {
        key: "getPointOnEllipticalArc",
        value: function getPointOnEllipticalArc(cx, cy, rx, ry, theta, psi) {
          var cosPsi = Math.cos(psi);
          var sinPsi = Math.sin(psi);
          var pt = {
            x: rx * Math.cos(theta),
            y: ry * Math.sin(theta)
          };
          return {
            x: cx + (pt.x * cosPsi - pt.y * sinPsi),
            y: cy + (pt.x * sinPsi + pt.y * cosPsi)
          };
        }
        // TODO need some optimisations. possibly build cache only for curved segments?
      }, {
        key: "buildEquidistantCache",
        value: function buildEquidistantCache(inputStep, inputPrecision) {
          var fullLen = this.getPathLength();
          var precision = inputPrecision || 0.25;
          var step = inputStep || fullLen / 100;
          if (!this.equidistantCache || this.equidistantCache.step !== step || this.equidistantCache.precision !== precision) {
            this.equidistantCache = {
              step,
              precision,
              points: []
            };
            var s = 0;
            for (var l = 0; l <= fullLen; l += precision) {
              var p0 = this.getPointOnPath(l);
              var p1 = this.getPointOnPath(l + precision);
              if (!p0 || !p1) {
                continue;
              }
              s += this.getLineLength(p0.x, p0.y, p1.x, p1.y);
              if (s >= step) {
                this.equidistantCache.points.push({
                  x: p0.x,
                  y: p0.y,
                  distance: l
                });
                s -= step;
              }
            }
          }
        }
      }, {
        key: "getEquidistantPointOnPath",
        value: function getEquidistantPointOnPath(targetDistance, step, precision) {
          this.buildEquidistantCache(step, precision);
          if (targetDistance < 0 || targetDistance - this.getPathLength() > 5e-5) {
            return null;
          }
          var idx = Math.round(targetDistance / this.getPathLength() * (this.equidistantCache.points.length - 1));
          return this.equidistantCache.points[idx] || null;
        }
      }]);
      return TextPathElement2;
    })(TextElement);
    function _createSuper$d(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$d();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$d() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var dataUriRegex = /^\s*data:(([^/,;]+\/[^/,;]+)(?:;([^,;=]+=[^,;=]+))?)?(?:;(base64))?,(.*)$/i;
    var ImageElement = /* @__PURE__ */ (function(_RenderedElement) {
      _inherits__default["default"](ImageElement2, _RenderedElement);
      var _super = _createSuper$d(ImageElement2);
      function ImageElement2(document2, node2, captureTextNodes) {
        var _this;
        _classCallCheck__default["default"](this, ImageElement2);
        _this = _super.call(this, document2, node2, captureTextNodes);
        _this.type = "image";
        _this.loaded = false;
        var href = _this.getHrefAttribute().getString();
        if (!href) {
          return _possibleConstructorReturn__default["default"](_this);
        }
        var isSvg = href.endsWith(".svg") || /^\s*data:image\/svg\+xml/i.test(href);
        document2.images.push(_assertThisInitialized__default["default"](_this));
        if (!isSvg) {
          void _this.loadImage(href);
        } else {
          void _this.loadSvg(href);
        }
        _this.isSvg = isSvg;
        return _this;
      }
      _createClass__default["default"](ImageElement2, [{
        key: "loadImage",
        value: (function() {
          var _loadImage = _asyncToGenerator__default["default"](/* @__PURE__ */ _regeneratorRuntime__default["default"].mark(function _callee(href) {
            var image;
            return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return this.document.createImage(href);
                  case 3:
                    image = _context.sent;
                    this.image = image;
                    _context.next = 10;
                    break;
                  case 7:
                    _context.prev = 7;
                    _context.t0 = _context["catch"](0);
                    console.error('Error while loading image "'.concat(href, '":'), _context.t0);
                  case 10:
                    this.loaded = true;
                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[0, 7]]);
          }));
          function loadImage(_x) {
            return _loadImage.apply(this, arguments);
          }
          return loadImage;
        })()
      }, {
        key: "loadSvg",
        value: (function() {
          var _loadSvg = _asyncToGenerator__default["default"](/* @__PURE__ */ _regeneratorRuntime__default["default"].mark(function _callee2(href) {
            var match, data, response, svg;
            return _regeneratorRuntime__default["default"].wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    match = dataUriRegex.exec(href);
                    if (!match) {
                      _context2.next = 6;
                      break;
                    }
                    data = match[5];
                    if (match[4] === "base64") {
                      this.image = atob(data);
                    } else {
                      this.image = decodeURIComponent(data);
                    }
                    _context2.next = 19;
                    break;
                  case 6:
                    _context2.prev = 6;
                    _context2.next = 9;
                    return this.document.fetch(href);
                  case 9:
                    response = _context2.sent;
                    _context2.next = 12;
                    return response.text();
                  case 12:
                    svg = _context2.sent;
                    this.image = svg;
                    _context2.next = 19;
                    break;
                  case 16:
                    _context2.prev = 16;
                    _context2.t0 = _context2["catch"](6);
                    console.error('Error while loading image "'.concat(href, '":'), _context2.t0);
                  case 19:
                    this.loaded = true;
                  case 20:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[6, 16]]);
          }));
          function loadSvg(_x2) {
            return _loadSvg.apply(this, arguments);
          }
          return loadSvg;
        })()
      }, {
        key: "renderChildren",
        value: function renderChildren(ctx) {
          var document2 = this.document, image = this.image, loaded = this.loaded;
          var x = this.getAttribute("x").getPixels("x");
          var y = this.getAttribute("y").getPixels("y");
          var width = this.getStyle("width").getPixels("x");
          var height = this.getStyle("height").getPixels("y");
          if (!loaded || !image || !width || !height) {
            return;
          }
          ctx.save();
          ctx.translate(x, y);
          if (this.isSvg) {
            var subDocument = document2.canvg.forkString(ctx, this.image, {
              ignoreMouse: true,
              ignoreAnimation: true,
              ignoreDimensions: true,
              ignoreClear: true,
              offsetX: 0,
              offsetY: 0,
              scaleWidth: width,
              scaleHeight: height
            });
            subDocument.document.documentElement.parent = this;
            void subDocument.render();
          } else {
            var _image = this.image;
            document2.setViewBox({
              ctx,
              aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
              width,
              desiredWidth: _image.width,
              height,
              desiredHeight: _image.height
            });
            if (this.loaded) {
              if (typeof _image.complete === "undefined" || _image.complete) {
                ctx.drawImage(_image, 0, 0);
              }
            }
          }
          ctx.restore();
        }
      }, {
        key: "getBoundingBox",
        value: function getBoundingBox() {
          var x = this.getAttribute("x").getPixels("x");
          var y = this.getAttribute("y").getPixels("y");
          var width = this.getStyle("width").getPixels("x");
          var height = this.getStyle("height").getPixels("y");
          return new BoundingBox(x, y, x + width, y + height);
        }
      }]);
      return ImageElement2;
    })(RenderedElement);
    function _createSuper$c(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$c();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$c() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var SymbolElement = /* @__PURE__ */ (function(_RenderedElement) {
      _inherits__default["default"](SymbolElement2, _RenderedElement);
      var _super = _createSuper$c(SymbolElement2);
      function SymbolElement2() {
        var _this;
        _classCallCheck__default["default"](this, SymbolElement2);
        _this = _super.apply(this, arguments);
        _this.type = "symbol";
        return _this;
      }
      _createClass__default["default"](SymbolElement2, [{
        key: "render",
        value: function render(_) {
        }
      }]);
      return SymbolElement2;
    })(RenderedElement);
    var SVGFontLoader = /* @__PURE__ */ (function() {
      function SVGFontLoader2(document2) {
        _classCallCheck__default["default"](this, SVGFontLoader2);
        this.document = document2;
        this.loaded = false;
        document2.fonts.push(this);
      }
      _createClass__default["default"](SVGFontLoader2, [{
        key: "load",
        value: (function() {
          var _load = _asyncToGenerator__default["default"](/* @__PURE__ */ _regeneratorRuntime__default["default"].mark(function _callee(fontFamily, url) {
            var document2, svgDocument, fonts;
            return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    document2 = this.document;
                    _context.next = 4;
                    return document2.canvg.parser.load(url);
                  case 4:
                    svgDocument = _context.sent;
                    fonts = svgDocument.getElementsByTagName("font");
                    Array.from(fonts).forEach(function(fontNode) {
                      var font = document2.createElement(fontNode);
                      document2.definitions[fontFamily] = font;
                    });
                    _context.next = 12;
                    break;
                  case 9:
                    _context.prev = 9;
                    _context.t0 = _context["catch"](0);
                    console.error('Error while loading font "'.concat(url, '":'), _context.t0);
                  case 12:
                    this.loaded = true;
                  case 13:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this, [[0, 9]]);
          }));
          function load(_x, _x2) {
            return _load.apply(this, arguments);
          }
          return load;
        })()
      }]);
      return SVGFontLoader2;
    })();
    function _createSuper$b(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$b();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$b() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var StyleElement = /* @__PURE__ */ (function(_Element) {
      _inherits__default["default"](StyleElement2, _Element);
      var _super = _createSuper$b(StyleElement2);
      function StyleElement2(document2, node2, captureTextNodes) {
        var _this;
        _classCallCheck__default["default"](this, StyleElement2);
        _this = _super.call(this, document2, node2, captureTextNodes);
        _this.type = "style";
        var css = compressSpaces(
          Array.from(node2.childNodes).map(function(_) {
            return _.textContent;
          }).join("").replace(/(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, "").replace(/@import.*;/g, "")
          // remove imports
        );
        var cssDefs = css.split("}");
        cssDefs.forEach(function(_) {
          var def = _.trim();
          if (!def) {
            return;
          }
          var cssParts = def.split("{");
          var cssClasses = cssParts[0].split(",");
          var cssProps = cssParts[1].split(";");
          cssClasses.forEach(function(_2) {
            var cssClass = _2.trim();
            if (!cssClass) {
              return;
            }
            var props = document2.styles[cssClass] || {};
            cssProps.forEach(function(cssProp) {
              var prop = cssProp.indexOf(":");
              var name = cssProp.substr(0, prop).trim();
              var value = cssProp.substr(prop + 1, cssProp.length - prop).trim();
              if (name && value) {
                props[name] = new Property(document2, name, value);
              }
            });
            document2.styles[cssClass] = props;
            document2.stylesSpecificity[cssClass] = getSelectorSpecificity(cssClass);
            if (cssClass === "@font-face") {
              var fontFamily = props["font-family"].getString().replace(/"|'/g, "");
              var srcs = props.src.getString().split(",");
              srcs.forEach(function(src) {
                if (src.indexOf('format("svg")') > 0) {
                  var url = parseExternalUrl(src);
                  if (url) {
                    void new SVGFontLoader(document2).load(fontFamily, url);
                  }
                }
              });
            }
          });
        });
        return _this;
      }
      return StyleElement2;
    })(Element);
    StyleElement.parseExternalUrl = parseExternalUrl;
    function _createSuper$a(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$a();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$a() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var UseElement = /* @__PURE__ */ (function(_RenderedElement) {
      _inherits__default["default"](UseElement2, _RenderedElement);
      var _super = _createSuper$a(UseElement2);
      function UseElement2() {
        var _this;
        _classCallCheck__default["default"](this, UseElement2);
        _this = _super.apply(this, arguments);
        _this.type = "use";
        return _this;
      }
      _createClass__default["default"](UseElement2, [{
        key: "setContext",
        value: function setContext(ctx) {
          _get__default["default"](_getPrototypeOf__default["default"](UseElement2.prototype), "setContext", this).call(this, ctx);
          var xAttr = this.getAttribute("x");
          var yAttr = this.getAttribute("y");
          if (xAttr.hasValue()) {
            ctx.translate(xAttr.getPixels("x"), 0);
          }
          if (yAttr.hasValue()) {
            ctx.translate(0, yAttr.getPixels("y"));
          }
        }
      }, {
        key: "path",
        value: function path(ctx) {
          var element = this.element;
          if (element) {
            element.path(ctx);
          }
        }
      }, {
        key: "renderChildren",
        value: function renderChildren(ctx) {
          var document2 = this.document, element = this.element;
          if (element) {
            var tempSvg = element;
            if (element.type === "symbol") {
              tempSvg = new SVGElement(document2, null);
              tempSvg.attributes.viewBox = new Property(document2, "viewBox", element.getAttribute("viewBox").getString());
              tempSvg.attributes.preserveAspectRatio = new Property(document2, "preserveAspectRatio", element.getAttribute("preserveAspectRatio").getString());
              tempSvg.attributes.overflow = new Property(document2, "overflow", element.getAttribute("overflow").getString());
              tempSvg.children = element.children;
              element.styles.opacity = new Property(document2, "opacity", this.calculateOpacity());
            }
            if (tempSvg.type === "svg") {
              var widthStyle = this.getStyle("width", false, true);
              var heightStyle = this.getStyle("height", false, true);
              if (widthStyle.hasValue()) {
                tempSvg.attributes.width = new Property(document2, "width", widthStyle.getString());
              }
              if (heightStyle.hasValue()) {
                tempSvg.attributes.height = new Property(document2, "height", heightStyle.getString());
              }
            }
            var oldParent = tempSvg.parent;
            tempSvg.parent = this;
            tempSvg.render(ctx);
            tempSvg.parent = oldParent;
          }
        }
      }, {
        key: "getBoundingBox",
        value: function getBoundingBox(ctx) {
          var element = this.element;
          if (element) {
            return element.getBoundingBox(ctx);
          }
          return null;
        }
      }, {
        key: "elementTransform",
        value: function elementTransform() {
          var document2 = this.document, element = this.element;
          return Transform.fromElement(document2, element);
        }
      }, {
        key: "element",
        get: function get() {
          if (!this.cachedElement) {
            this.cachedElement = this.getHrefAttribute().getDefinition();
          }
          return this.cachedElement;
        }
      }]);
      return UseElement2;
    })(RenderedElement);
    function _createSuper$9(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$9();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$9() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function imGet(img, x, y, width, _height, rgba) {
      return img[y * width * 4 + x * 4 + rgba];
    }
    function imSet(img, x, y, width, _height, rgba, val) {
      img[y * width * 4 + x * 4 + rgba] = val;
    }
    function m(matrix, i, v) {
      var mi = matrix[i];
      return mi * v;
    }
    function c(a, m1, m2, m3) {
      return m1 + Math.cos(a) * m2 + Math.sin(a) * m3;
    }
    var FeColorMatrixElement = /* @__PURE__ */ (function(_Element) {
      _inherits__default["default"](FeColorMatrixElement2, _Element);
      var _super = _createSuper$9(FeColorMatrixElement2);
      function FeColorMatrixElement2(document2, node2, captureTextNodes) {
        var _this;
        _classCallCheck__default["default"](this, FeColorMatrixElement2);
        _this = _super.call(this, document2, node2, captureTextNodes);
        _this.type = "feColorMatrix";
        var matrix = toNumbers(_this.getAttribute("values").getString());
        switch (_this.getAttribute("type").getString("matrix")) {
          // http://www.w3.org/TR/SVG/filters.html#feColorMatrixElement
          case "saturate": {
            var s = matrix[0];
            matrix = [0.213 + 0.787 * s, 0.715 - 0.715 * s, 0.072 - 0.072 * s, 0, 0, 0.213 - 0.213 * s, 0.715 + 0.285 * s, 0.072 - 0.072 * s, 0, 0, 0.213 - 0.213 * s, 0.715 - 0.715 * s, 0.072 + 0.928 * s, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
            break;
          }
          case "hueRotate": {
            var a = matrix[0] * Math.PI / 180;
            matrix = [c(a, 0.213, 0.787, -0.213), c(a, 0.715, -0.715, -0.715), c(a, 0.072, -0.072, 0.928), 0, 0, c(a, 0.213, -0.213, 0.143), c(a, 0.715, 0.285, 0.14), c(a, 0.072, -0.072, -0.283), 0, 0, c(a, 0.213, -0.213, -0.787), c(a, 0.715, -0.715, 0.715), c(a, 0.072, 0.928, 0.072), 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
            break;
          }
          case "luminanceToAlpha":
            matrix = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2125, 0.7154, 0.0721, 0, 0, 0, 0, 0, 0, 1];
            break;
        }
        _this.matrix = matrix;
        _this.includeOpacity = _this.getAttribute("includeOpacity").hasValue();
        return _this;
      }
      _createClass__default["default"](FeColorMatrixElement2, [{
        key: "apply",
        value: function apply(ctx, _x, _y, width, height) {
          var includeOpacity = this.includeOpacity, matrix = this.matrix;
          var srcData = ctx.getImageData(0, 0, width, height);
          for (var y = 0; y < height; y++) {
            for (var x = 0; x < width; x++) {
              var r = imGet(srcData.data, x, y, width, height, 0);
              var g = imGet(srcData.data, x, y, width, height, 1);
              var b = imGet(srcData.data, x, y, width, height, 2);
              var a = imGet(srcData.data, x, y, width, height, 3);
              var nr = m(matrix, 0, r) + m(matrix, 1, g) + m(matrix, 2, b) + m(matrix, 3, a) + m(matrix, 4, 1);
              var ng = m(matrix, 5, r) + m(matrix, 6, g) + m(matrix, 7, b) + m(matrix, 8, a) + m(matrix, 9, 1);
              var nb = m(matrix, 10, r) + m(matrix, 11, g) + m(matrix, 12, b) + m(matrix, 13, a) + m(matrix, 14, 1);
              var na = m(matrix, 15, r) + m(matrix, 16, g) + m(matrix, 17, b) + m(matrix, 18, a) + m(matrix, 19, 1);
              if (includeOpacity) {
                nr = 0;
                ng = 0;
                nb = 0;
                na *= a / 255;
              }
              imSet(srcData.data, x, y, width, height, 0, nr);
              imSet(srcData.data, x, y, width, height, 1, ng);
              imSet(srcData.data, x, y, width, height, 2, nb);
              imSet(srcData.data, x, y, width, height, 3, na);
            }
          }
          ctx.clearRect(0, 0, width, height);
          ctx.putImageData(srcData, 0, 0);
        }
      }]);
      return FeColorMatrixElement2;
    })(Element);
    function _createSuper$8(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$8();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$8() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var MaskElement = /* @__PURE__ */ (function(_Element) {
      _inherits__default["default"](MaskElement2, _Element);
      var _super = _createSuper$8(MaskElement2);
      function MaskElement2() {
        var _this;
        _classCallCheck__default["default"](this, MaskElement2);
        _this = _super.apply(this, arguments);
        _this.type = "mask";
        return _this;
      }
      _createClass__default["default"](MaskElement2, [{
        key: "apply",
        value: function apply(ctx, element) {
          var document2 = this.document;
          var x = this.getAttribute("x").getPixels("x");
          var y = this.getAttribute("y").getPixels("y");
          var width = this.getStyle("width").getPixels("x");
          var height = this.getStyle("height").getPixels("y");
          if (!width && !height) {
            var boundingBox = new BoundingBox();
            this.children.forEach(function(child) {
              boundingBox.addBoundingBox(child.getBoundingBox(ctx));
            });
            x = Math.floor(boundingBox.x1);
            y = Math.floor(boundingBox.y1);
            width = Math.floor(boundingBox.width);
            height = Math.floor(boundingBox.height);
          }
          var ignoredStyles = this.removeStyles(element, MaskElement2.ignoreStyles);
          var maskCanvas = document2.createCanvas(x + width, y + height);
          var maskCtx = maskCanvas.getContext("2d");
          document2.screen.setDefaults(maskCtx);
          this.renderChildren(maskCtx);
          new FeColorMatrixElement(document2, {
            nodeType: 1,
            childNodes: [],
            attributes: [{
              nodeName: "type",
              value: "luminanceToAlpha"
            }, {
              nodeName: "includeOpacity",
              value: "true"
            }]
          }).apply(maskCtx, 0, 0, x + width, y + height);
          var tmpCanvas = document2.createCanvas(x + width, y + height);
          var tmpCtx = tmpCanvas.getContext("2d");
          document2.screen.setDefaults(tmpCtx);
          element.render(tmpCtx);
          tmpCtx.globalCompositeOperation = "destination-in";
          tmpCtx.fillStyle = maskCtx.createPattern(maskCanvas, "no-repeat");
          tmpCtx.fillRect(0, 0, x + width, y + height);
          ctx.fillStyle = tmpCtx.createPattern(tmpCanvas, "no-repeat");
          ctx.fillRect(0, 0, x + width, y + height);
          this.restoreStyles(element, ignoredStyles);
        }
      }, {
        key: "render",
        value: function render(_) {
        }
      }]);
      return MaskElement2;
    })(Element);
    MaskElement.ignoreStyles = ["mask", "transform", "clip-path"];
    function _createSuper$7(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$7();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$7() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var noop = function noop2() {
    };
    var ClipPathElement = /* @__PURE__ */ (function(_Element) {
      _inherits__default["default"](ClipPathElement2, _Element);
      var _super = _createSuper$7(ClipPathElement2);
      function ClipPathElement2() {
        var _this;
        _classCallCheck__default["default"](this, ClipPathElement2);
        _this = _super.apply(this, arguments);
        _this.type = "clipPath";
        return _this;
      }
      _createClass__default["default"](ClipPathElement2, [{
        key: "apply",
        value: function apply(ctx) {
          var document2 = this.document;
          var contextProto = Reflect.getPrototypeOf(ctx);
          var beginPath = ctx.beginPath, closePath = ctx.closePath;
          if (contextProto) {
            contextProto.beginPath = noop;
            contextProto.closePath = noop;
          }
          Reflect.apply(beginPath, ctx, []);
          this.children.forEach(function(child) {
            if (typeof child.path === "undefined") {
              return;
            }
            var transform = typeof child.elementTransform !== "undefined" ? child.elementTransform() : null;
            if (!transform) {
              transform = Transform.fromElement(document2, child);
            }
            if (transform) {
              transform.apply(ctx);
            }
            child.path(ctx);
            if (contextProto) {
              contextProto.closePath = closePath;
            }
            if (transform) {
              transform.unapply(ctx);
            }
          });
          Reflect.apply(closePath, ctx, []);
          ctx.clip();
          if (contextProto) {
            contextProto.beginPath = beginPath;
            contextProto.closePath = closePath;
          }
        }
      }, {
        key: "render",
        value: function render(_) {
        }
      }]);
      return ClipPathElement2;
    })(Element);
    function _createSuper$6(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$6();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$6() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var FilterElement = /* @__PURE__ */ (function(_Element) {
      _inherits__default["default"](FilterElement2, _Element);
      var _super = _createSuper$6(FilterElement2);
      function FilterElement2() {
        var _this;
        _classCallCheck__default["default"](this, FilterElement2);
        _this = _super.apply(this, arguments);
        _this.type = "filter";
        return _this;
      }
      _createClass__default["default"](FilterElement2, [{
        key: "apply",
        value: function apply(ctx, element) {
          var document2 = this.document, children = this.children;
          var boundingBox = element.getBoundingBox(ctx);
          if (!boundingBox) {
            return;
          }
          var px = 0;
          var py = 0;
          children.forEach(function(child) {
            var efd = child.extraFilterDistance || 0;
            px = Math.max(px, efd);
            py = Math.max(py, efd);
          });
          var width = Math.floor(boundingBox.width);
          var height = Math.floor(boundingBox.height);
          var tmpCanvasWidth = width + 2 * px;
          var tmpCanvasHeight = height + 2 * py;
          if (tmpCanvasWidth < 1 || tmpCanvasHeight < 1) {
            return;
          }
          var x = Math.floor(boundingBox.x);
          var y = Math.floor(boundingBox.y);
          var ignoredStyles = this.removeStyles(element, FilterElement2.ignoreStyles);
          var tmpCanvas = document2.createCanvas(tmpCanvasWidth, tmpCanvasHeight);
          var tmpCtx = tmpCanvas.getContext("2d");
          document2.screen.setDefaults(tmpCtx);
          tmpCtx.translate(-x + px, -y + py);
          element.render(tmpCtx);
          children.forEach(function(child) {
            if (typeof child.apply === "function") {
              child.apply(tmpCtx, 0, 0, tmpCanvasWidth, tmpCanvasHeight);
            }
          });
          ctx.drawImage(tmpCanvas, 0, 0, tmpCanvasWidth, tmpCanvasHeight, x - px, y - py, tmpCanvasWidth, tmpCanvasHeight);
          this.restoreStyles(element, ignoredStyles);
        }
      }, {
        key: "render",
        value: function render(_) {
        }
      }]);
      return FilterElement2;
    })(Element);
    FilterElement.ignoreStyles = ["filter", "transform", "clip-path"];
    function _createSuper$5(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$5();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$5() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var FeDropShadowElement = /* @__PURE__ */ (function(_Element) {
      _inherits__default["default"](FeDropShadowElement2, _Element);
      var _super = _createSuper$5(FeDropShadowElement2);
      function FeDropShadowElement2(document2, node2, captureTextNodes) {
        var _this;
        _classCallCheck__default["default"](this, FeDropShadowElement2);
        _this = _super.call(this, document2, node2, captureTextNodes);
        _this.type = "feDropShadow";
        _this.addStylesFromStyleDefinition();
        return _this;
      }
      _createClass__default["default"](FeDropShadowElement2, [{
        key: "apply",
        value: function apply(_, _x, _y, _width, _height) {
        }
      }]);
      return FeDropShadowElement2;
    })(Element);
    function _createSuper$4(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$4();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$4() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var FeMorphologyElement = /* @__PURE__ */ (function(_Element) {
      _inherits__default["default"](FeMorphologyElement2, _Element);
      var _super = _createSuper$4(FeMorphologyElement2);
      function FeMorphologyElement2() {
        var _this;
        _classCallCheck__default["default"](this, FeMorphologyElement2);
        _this = _super.apply(this, arguments);
        _this.type = "feMorphology";
        return _this;
      }
      _createClass__default["default"](FeMorphologyElement2, [{
        key: "apply",
        value: function apply(_, _x, _y, _width, _height) {
        }
      }]);
      return FeMorphologyElement2;
    })(Element);
    function _createSuper$3(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$3();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$3() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var FeCompositeElement = /* @__PURE__ */ (function(_Element) {
      _inherits__default["default"](FeCompositeElement2, _Element);
      var _super = _createSuper$3(FeCompositeElement2);
      function FeCompositeElement2() {
        var _this;
        _classCallCheck__default["default"](this, FeCompositeElement2);
        _this = _super.apply(this, arguments);
        _this.type = "feComposite";
        return _this;
      }
      _createClass__default["default"](FeCompositeElement2, [{
        key: "apply",
        value: function apply(_, _x, _y, _width, _height) {
        }
      }]);
      return FeCompositeElement2;
    })(Element);
    function _createSuper$2(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$2();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$2() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var FeGaussianBlurElement = /* @__PURE__ */ (function(_Element) {
      _inherits__default["default"](FeGaussianBlurElement2, _Element);
      var _super = _createSuper$2(FeGaussianBlurElement2);
      function FeGaussianBlurElement2(document2, node2, captureTextNodes) {
        var _this;
        _classCallCheck__default["default"](this, FeGaussianBlurElement2);
        _this = _super.call(this, document2, node2, captureTextNodes);
        _this.type = "feGaussianBlur";
        _this.blurRadius = Math.floor(_this.getAttribute("stdDeviation").getNumber());
        _this.extraFilterDistance = _this.blurRadius;
        return _this;
      }
      _createClass__default["default"](FeGaussianBlurElement2, [{
        key: "apply",
        value: function apply(ctx, x, y, width, height) {
          var document2 = this.document, blurRadius = this.blurRadius;
          var body = document2.window ? document2.window.document.body : null;
          var canvas = ctx.canvas;
          canvas.id = document2.getUniqueId();
          if (body) {
            canvas.style.display = "none";
            body.appendChild(canvas);
          }
          stackblurCanvas.canvasRGBA(canvas, x, y, width, height, blurRadius);
          if (body) {
            body.removeChild(canvas);
          }
        }
      }]);
      return FeGaussianBlurElement2;
    })(Element);
    function _createSuper$1(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct$1();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct$1() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var TitleElement = /* @__PURE__ */ (function(_Element) {
      _inherits__default["default"](TitleElement2, _Element);
      var _super = _createSuper$1(TitleElement2);
      function TitleElement2() {
        var _this;
        _classCallCheck__default["default"](this, TitleElement2);
        _this = _super.apply(this, arguments);
        _this.type = "title";
        return _this;
      }
      return TitleElement2;
    })(Element);
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf__default["default"](Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf__default["default"](this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn__default["default"](this, result);
      };
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    var DescElement = /* @__PURE__ */ (function(_Element) {
      _inherits__default["default"](DescElement2, _Element);
      var _super = _createSuper(DescElement2);
      function DescElement2() {
        var _this;
        _classCallCheck__default["default"](this, DescElement2);
        _this = _super.apply(this, arguments);
        _this.type = "desc";
        return _this;
      }
      return DescElement2;
    })(Element);
    var elements = {
      "svg": SVGElement,
      "rect": RectElement,
      "circle": CircleElement,
      "ellipse": EllipseElement,
      "line": LineElement,
      "polyline": PolylineElement,
      "polygon": PolygonElement,
      "path": PathElement,
      "pattern": PatternElement,
      "marker": MarkerElement,
      "defs": DefsElement,
      "linearGradient": LinearGradientElement,
      "radialGradient": RadialGradientElement,
      "stop": StopElement,
      "animate": AnimateElement,
      "animateColor": AnimateColorElement,
      "animateTransform": AnimateTransformElement,
      "font": FontElement,
      "font-face": FontFaceElement,
      "missing-glyph": MissingGlyphElement,
      "glyph": GlyphElement,
      "text": TextElement,
      "tspan": TSpanElement,
      "tref": TRefElement,
      "a": AElement,
      "textPath": TextPathElement,
      "image": ImageElement,
      "g": GElement,
      "symbol": SymbolElement,
      "style": StyleElement,
      "use": UseElement,
      "mask": MaskElement,
      "clipPath": ClipPathElement,
      "filter": FilterElement,
      "feDropShadow": FeDropShadowElement,
      "feMorphology": FeMorphologyElement,
      "feComposite": FeCompositeElement,
      "feColorMatrix": FeColorMatrixElement,
      "feGaussianBlur": FeGaussianBlurElement,
      "title": TitleElement,
      "desc": DescElement
    };
    function ownKeys$1(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread$1(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys$1(Object(source), true).forEach(function(key) {
            _defineProperty__default["default"](target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys$1(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function createCanvas(width, height) {
      var canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      return canvas;
    }
    function createImage(_x) {
      return _createImage.apply(this, arguments);
    }
    function _createImage() {
      _createImage = _asyncToGenerator__default["default"](/* @__PURE__ */ _regeneratorRuntime__default["default"].mark(function _callee(src) {
        var anonymousCrossOrigin, image, _args = arguments;
        return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                anonymousCrossOrigin = _args.length > 1 && _args[1] !== void 0 ? _args[1] : false;
                image = document.createElement("img");
                if (anonymousCrossOrigin) {
                  image.crossOrigin = "Anonymous";
                }
                return _context.abrupt("return", new Promise(function(resolve, reject) {
                  image.onload = function() {
                    resolve(image);
                  };
                  image.onerror = function(_event, _source, _lineno, _colno, error) {
                    reject(error);
                  };
                  image.src = src;
                }));
              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _createImage.apply(this, arguments);
    }
    var Document = /* @__PURE__ */ (function() {
      function Document2(canvg) {
        var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$rootEmSize = _ref.rootEmSize, rootEmSize = _ref$rootEmSize === void 0 ? 12 : _ref$rootEmSize, _ref$emSize = _ref.emSize, emSize = _ref$emSize === void 0 ? 12 : _ref$emSize, _ref$createCanvas = _ref.createCanvas, createCanvas2 = _ref$createCanvas === void 0 ? Document2.createCanvas : _ref$createCanvas, _ref$createImage = _ref.createImage, createImage2 = _ref$createImage === void 0 ? Document2.createImage : _ref$createImage, anonymousCrossOrigin = _ref.anonymousCrossOrigin;
        _classCallCheck__default["default"](this, Document2);
        this.canvg = canvg;
        this.definitions = /* @__PURE__ */ Object.create(null);
        this.styles = /* @__PURE__ */ Object.create(null);
        this.stylesSpecificity = /* @__PURE__ */ Object.create(null);
        this.images = [];
        this.fonts = [];
        this.emSizeStack = [];
        this.uniqueId = 0;
        this.screen = canvg.screen;
        this.rootEmSize = rootEmSize;
        this.emSize = emSize;
        this.createCanvas = createCanvas2;
        this.createImage = this.bindCreateImage(createImage2, anonymousCrossOrigin);
        this.screen.wait(this.isImagesLoaded.bind(this));
        this.screen.wait(this.isFontsLoaded.bind(this));
      }
      _createClass__default["default"](Document2, [{
        key: "bindCreateImage",
        value: function bindCreateImage(createImage2, anonymousCrossOrigin) {
          if (typeof anonymousCrossOrigin === "boolean") {
            return function(source, forceAnonymousCrossOrigin) {
              return createImage2(source, typeof forceAnonymousCrossOrigin === "boolean" ? forceAnonymousCrossOrigin : anonymousCrossOrigin);
            };
          }
          return createImage2;
        }
      }, {
        key: "popEmSize",
        value: function popEmSize() {
          var emSizeStack = this.emSizeStack;
          emSizeStack.pop();
        }
      }, {
        key: "getUniqueId",
        value: function getUniqueId() {
          return "canvg".concat(++this.uniqueId);
        }
      }, {
        key: "isImagesLoaded",
        value: function isImagesLoaded() {
          return this.images.every(function(_) {
            return _.loaded;
          });
        }
      }, {
        key: "isFontsLoaded",
        value: function isFontsLoaded() {
          return this.fonts.every(function(_) {
            return _.loaded;
          });
        }
      }, {
        key: "createDocumentElement",
        value: function createDocumentElement(document2) {
          var documentElement = this.createElement(document2.documentElement);
          documentElement.root = true;
          documentElement.addStylesFromStyleDefinition();
          this.documentElement = documentElement;
          return documentElement;
        }
      }, {
        key: "createElement",
        value: function createElement(node2) {
          var elementType = node2.nodeName.replace(/^[^:]+:/, "");
          var ElementType = Document2.elementTypes[elementType];
          if (typeof ElementType !== "undefined") {
            return new ElementType(this, node2);
          }
          return new UnknownElement(this, node2);
        }
      }, {
        key: "createTextNode",
        value: function createTextNode(node2) {
          return new TextNode(this, node2);
        }
      }, {
        key: "setViewBox",
        value: function setViewBox(config) {
          this.screen.setViewBox(_objectSpread$1({
            document: this
          }, config));
        }
      }, {
        key: "window",
        get: function get() {
          return this.screen.window;
        }
      }, {
        key: "fetch",
        get: function get() {
          return this.screen.fetch;
        }
      }, {
        key: "ctx",
        get: function get() {
          return this.screen.ctx;
        }
      }, {
        key: "emSize",
        get: function get() {
          var emSizeStack = this.emSizeStack;
          return emSizeStack[emSizeStack.length - 1];
        },
        set: function set(value) {
          var emSizeStack = this.emSizeStack;
          emSizeStack.push(value);
        }
      }]);
      return Document2;
    })();
    Document.createCanvas = createCanvas;
    Document.createImage = createImage;
    Document.elementTypes = elements;
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        }
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty__default["default"](target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    var Canvg = /* @__PURE__ */ (function() {
      function Canvg2(ctx, svg) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        _classCallCheck__default["default"](this, Canvg2);
        this.parser = new Parser(options);
        this.screen = new Screen(ctx, options);
        this.options = options;
        var document2 = new Document(this, options);
        var documentElement = document2.createDocumentElement(svg);
        this.document = document2;
        this.documentElement = documentElement;
      }
      _createClass__default["default"](Canvg2, [{
        key: "fork",
        /**
         * Create new Canvg instance with inherited options.
         * @param ctx - Rendering context.
         * @param svg - SVG source string or URL.
         * @param options - Rendering options.
         * @returns Canvg instance.
         */
        value: function fork(ctx, svg) {
          var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return Canvg2.from(ctx, svg, _objectSpread(_objectSpread({}, this.options), options));
        }
        /**
         * Create new Canvg instance with inherited options.
         * @param ctx - Rendering context.
         * @param svg - SVG source string.
         * @param options - Rendering options.
         * @returns Canvg instance.
         */
      }, {
        key: "forkString",
        value: function forkString(ctx, svg) {
          var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return Canvg2.fromString(ctx, svg, _objectSpread(_objectSpread({}, this.options), options));
        }
        /**
         * Document is ready promise.
         * @returns Ready promise.
         */
      }, {
        key: "ready",
        value: function ready() {
          return this.screen.ready();
        }
        /**
         * Document is ready value.
         * @returns Is ready or not.
         */
      }, {
        key: "isReady",
        value: function isReady() {
          return this.screen.isReady();
        }
        /**
         * Render only first frame, ignoring animations and mouse.
         * @param options - Rendering options.
         */
      }, {
        key: "render",
        value: (function() {
          var _render = _asyncToGenerator__default["default"](/* @__PURE__ */ _regeneratorRuntime__default["default"].mark(function _callee() {
            var options, _args = arguments;
            return _regeneratorRuntime__default["default"].wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    options = _args.length > 0 && _args[0] !== void 0 ? _args[0] : {};
                    this.start(_objectSpread({
                      enableRedraw: true,
                      ignoreAnimation: true,
                      ignoreMouse: true
                    }, options));
                    _context.next = 4;
                    return this.ready();
                  case 4:
                    this.stop();
                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
          function render() {
            return _render.apply(this, arguments);
          }
          return render;
        })()
        /**
         * Start rendering.
         * @param options - Render options.
         */
      }, {
        key: "start",
        value: function start() {
          var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          var documentElement = this.documentElement, screen = this.screen, baseOptions = this.options;
          screen.start(documentElement, _objectSpread(_objectSpread({
            enableRedraw: true
          }, baseOptions), options));
        }
        /**
         * Stop rendering.
         */
      }, {
        key: "stop",
        value: function stop() {
          this.screen.stop();
        }
        /**
         * Resize SVG to fit in given size.
         * @param width
         * @param height
         * @param preserveAspectRatio
         */
      }, {
        key: "resize",
        value: function resize(width) {
          var height = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : width;
          var preserveAspectRatio = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
          this.documentElement.resize(width, height, preserveAspectRatio);
        }
      }], [{
        key: "from",
        value: (function() {
          var _from = _asyncToGenerator__default["default"](/* @__PURE__ */ _regeneratorRuntime__default["default"].mark(function _callee2(ctx, svg) {
            var options, parser, svgDocument, _args2 = arguments;
            return _regeneratorRuntime__default["default"].wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    options = _args2.length > 2 && _args2[2] !== void 0 ? _args2[2] : {};
                    parser = new Parser(options);
                    _context2.next = 4;
                    return parser.parse(svg);
                  case 4:
                    svgDocument = _context2.sent;
                    return _context2.abrupt("return", new Canvg2(ctx, svgDocument, options));
                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
          function from(_x, _x2) {
            return _from.apply(this, arguments);
          }
          return from;
        })()
        /**
         * Create Canvg instance from SVG source string.
         * @param ctx - Rendering context.
         * @param svg - SVG source string.
         * @param options - Rendering options.
         * @returns Canvg instance.
         */
      }, {
        key: "fromString",
        value: function fromString(ctx, svg) {
          var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          var parser = new Parser(options);
          var svgDocument = parser.parseFromString(svg);
          return new Canvg2(ctx, svgDocument, options);
        }
      }]);
      return Canvg2;
    })();
    exports$1.AElement = AElement;
    exports$1.AnimateColorElement = AnimateColorElement;
    exports$1.AnimateElement = AnimateElement;
    exports$1.AnimateTransformElement = AnimateTransformElement;
    exports$1.BoundingBox = BoundingBox;
    exports$1.CB1 = CB1;
    exports$1.CB2 = CB2;
    exports$1.CB3 = CB3;
    exports$1.CB4 = CB4;
    exports$1.Canvg = Canvg;
    exports$1.CircleElement = CircleElement;
    exports$1.ClipPathElement = ClipPathElement;
    exports$1.DefsElement = DefsElement;
    exports$1.DescElement = DescElement;
    exports$1.Document = Document;
    exports$1.Element = Element;
    exports$1.EllipseElement = EllipseElement;
    exports$1.FeColorMatrixElement = FeColorMatrixElement;
    exports$1.FeCompositeElement = FeCompositeElement;
    exports$1.FeDropShadowElement = FeDropShadowElement;
    exports$1.FeGaussianBlurElement = FeGaussianBlurElement;
    exports$1.FeMorphologyElement = FeMorphologyElement;
    exports$1.FilterElement = FilterElement;
    exports$1.Font = Font;
    exports$1.FontElement = FontElement;
    exports$1.FontFaceElement = FontFaceElement;
    exports$1.GElement = GElement;
    exports$1.GlyphElement = GlyphElement;
    exports$1.GradientElement = GradientElement;
    exports$1.ImageElement = ImageElement;
    exports$1.LineElement = LineElement;
    exports$1.LinearGradientElement = LinearGradientElement;
    exports$1.MarkerElement = MarkerElement;
    exports$1.MaskElement = MaskElement;
    exports$1.Matrix = Matrix;
    exports$1.MissingGlyphElement = MissingGlyphElement;
    exports$1.Mouse = Mouse;
    exports$1.PSEUDO_ZERO = PSEUDO_ZERO;
    exports$1.Parser = Parser;
    exports$1.PathElement = PathElement;
    exports$1.PathParser = PathParser;
    exports$1.PatternElement = PatternElement;
    exports$1.Point = Point;
    exports$1.PolygonElement = PolygonElement;
    exports$1.PolylineElement = PolylineElement;
    exports$1.Property = Property;
    exports$1.QB1 = QB1;
    exports$1.QB2 = QB2;
    exports$1.QB3 = QB3;
    exports$1.RadialGradientElement = RadialGradientElement;
    exports$1.RectElement = RectElement;
    exports$1.RenderedElement = RenderedElement;
    exports$1.Rotate = Rotate;
    exports$1.SVGElement = SVGElement;
    exports$1.SVGFontLoader = SVGFontLoader;
    exports$1.Scale = Scale;
    exports$1.Screen = Screen;
    exports$1.Skew = Skew;
    exports$1.SkewX = SkewX;
    exports$1.SkewY = SkewY;
    exports$1.StopElement = StopElement;
    exports$1.StyleElement = StyleElement;
    exports$1.SymbolElement = SymbolElement;
    exports$1.TRefElement = TRefElement;
    exports$1.TSpanElement = TSpanElement;
    exports$1.TextElement = TextElement;
    exports$1.TextPathElement = TextPathElement;
    exports$1.TitleElement = TitleElement;
    exports$1.Transform = Transform;
    exports$1.Translate = Translate;
    exports$1.UnknownElement = UnknownElement;
    exports$1.UseElement = UseElement;
    exports$1.ViewPort = ViewPort;
    exports$1.compressSpaces = compressSpaces;
    exports$1["default"] = Canvg;
    exports$1.getSelectorSpecificity = getSelectorSpecificity;
    exports$1.normalizeAttributeName = normalizeAttributeName;
    exports$1.normalizeColor = normalizeColor;
    exports$1.parseExternalUrl = parseExternalUrl;
    exports$1.presets = index;
    exports$1.toNumbers = toNumbers;
    exports$1.trimLeft = trimLeft;
    exports$1.trimRight = trimRight;
    exports$1.vectorMagnitude = vectorMagnitude;
    exports$1.vectorsAngle = vectorsAngle;
    exports$1.vectorsRatio = vectorsRatio;
  })(lib);
  return lib;
}
export {
  requireLib as r
};
