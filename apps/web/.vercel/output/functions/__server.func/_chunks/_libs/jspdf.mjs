import { c as commonjsGlobal } from "./react.mjs";
import { r as require$$0 } from "../../_libs/fflate.mjs";
import { r as require$$1 } from "../../_libs/fast-png.mjs";
import require$$2 from "fs";
import require$$3 from "path";
import { r as require$$4 } from "../../_libs/html2canvas.mjs";
import { r as require$$5 } from "../../_libs/dompurify.mjs";
import { r as requireLib } from "../../_libs/canvg.mjs";
var jspdf_node_min = { exports: {} };
var hasRequiredJspdf_node_min;
function requireJspdf_node_min() {
  if (hasRequiredJspdf_node_min) return jspdf_node_min.exports;
  hasRequiredJspdf_node_min = 1;
  (function(module, exports$1) {
    Object.defineProperty(exports$1, "__esModule", { value: true });
    var t = require$$0, e = require$$1, r = /* @__PURE__ */ (function() {
      return "undefined" != typeof window ? window : "undefined" != typeof commonjsGlobal ? commonjsGlobal : "undefined" != typeof self ? self : this;
    })();
    function n(t2) {
      var e2;
      t2 = t2 || "", this.ok = false, "#" == t2.charAt(0) && (t2 = t2.substr(1, 6)), t2 = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "00ffff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000000", blanchedalmond: "ffebcd", blue: "0000ff", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "00ffff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dodgerblue: "1e90ff", feldspar: "d19275", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "ff00ff", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgrey: "d3d3d3", lightgreen: "90ee90", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslateblue: "8470ff", lightslategray: "778899", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "00ff00", limegreen: "32cd32", linen: "faf0e6", magenta: "ff00ff", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370d8", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "d87093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", red: "ff0000", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", violetred: "d02090", wheat: "f5deb3", white: "ffffff", whitesmoke: "f5f5f5", yellow: "ffff00", yellowgreen: "9acd32" }[t2 = (t2 = t2.replace(/ /g, "")).toLowerCase()] || t2;
      for (var r2 = [{ re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/, example: ["rgb(123, 234, 45)", "rgb(255,234,245)"], process: function(t3) {
        return [parseInt(t3[1]), parseInt(t3[2]), parseInt(t3[3])];
      } }, { re: /^(\w{2})(\w{2})(\w{2})$/, example: ["#00ff00", "336699"], process: function(t3) {
        return [parseInt(t3[1], 16), parseInt(t3[2], 16), parseInt(t3[3], 16)];
      } }, { re: /^(\w{1})(\w{1})(\w{1})$/, example: ["#fb0", "f0f"], process: function(t3) {
        return [parseInt(t3[1] + t3[1], 16), parseInt(t3[2] + t3[2], 16), parseInt(t3[3] + t3[3], 16)];
      } }], n2 = 0; n2 < r2.length; n2++) {
        var i2 = r2[n2].re, a2 = r2[n2].process, o2 = i2.exec(t2);
        o2 && (e2 = a2(o2), this.r = e2[0], this.g = e2[1], this.b = e2[2], this.ok = true);
      }
      this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.toRGB = function() {
        return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
      }, this.toHex = function() {
        var t3 = this.r.toString(16), e3 = this.g.toString(16), r3 = this.b.toString(16);
        return 1 == t3.length && (t3 = "0" + t3), 1 == e3.length && (e3 = "0" + e3), 1 == r3.length && (r3 = "0" + r3), "#" + t3 + e3 + r3;
      };
    }
    const i = r.atob.bind(r), a = r.btoa.bind(r);
    function o() {
      r.console && "function" == typeof r.console.log && r.console.log.apply(r.console, arguments);
    }
    var s = { log: o, warn: function(t2) {
      r.console && ("function" == typeof r.console.warn ? r.console.warn.apply(r.console, arguments) : o.call(null, arguments));
    }, error: function(t2) {
      r.console && ("function" == typeof r.console.error ? r.console.error.apply(r.console, arguments) : o(t2));
    } };
    function c(t2, e2) {
      var r2 = t2[0], n2 = t2[1], i2 = t2[2], a2 = t2[3];
      r2 = l(r2, n2, i2, a2, e2[0], 7, -680876936), a2 = l(a2, r2, n2, i2, e2[1], 12, -389564586), i2 = l(i2, a2, r2, n2, e2[2], 17, 606105819), n2 = l(n2, i2, a2, r2, e2[3], 22, -1044525330), r2 = l(r2, n2, i2, a2, e2[4], 7, -176418897), a2 = l(a2, r2, n2, i2, e2[5], 12, 1200080426), i2 = l(i2, a2, r2, n2, e2[6], 17, -1473231341), n2 = l(n2, i2, a2, r2, e2[7], 22, -45705983), r2 = l(r2, n2, i2, a2, e2[8], 7, 1770035416), a2 = l(a2, r2, n2, i2, e2[9], 12, -1958414417), i2 = l(i2, a2, r2, n2, e2[10], 17, -42063), n2 = l(n2, i2, a2, r2, e2[11], 22, -1990404162), r2 = l(r2, n2, i2, a2, e2[12], 7, 1804603682), a2 = l(a2, r2, n2, i2, e2[13], 12, -40341101), i2 = l(i2, a2, r2, n2, e2[14], 17, -1502002290), r2 = h(r2, n2 = l(n2, i2, a2, r2, e2[15], 22, 1236535329), i2, a2, e2[1], 5, -165796510), a2 = h(a2, r2, n2, i2, e2[6], 9, -1069501632), i2 = h(i2, a2, r2, n2, e2[11], 14, 643717713), n2 = h(n2, i2, a2, r2, e2[0], 20, -373897302), r2 = h(r2, n2, i2, a2, e2[5], 5, -701558691), a2 = h(a2, r2, n2, i2, e2[10], 9, 38016083), i2 = h(i2, a2, r2, n2, e2[15], 14, -660478335), n2 = h(n2, i2, a2, r2, e2[4], 20, -405537848), r2 = h(r2, n2, i2, a2, e2[9], 5, 568446438), a2 = h(a2, r2, n2, i2, e2[14], 9, -1019803690), i2 = h(i2, a2, r2, n2, e2[3], 14, -187363961), n2 = h(n2, i2, a2, r2, e2[8], 20, 1163531501), r2 = h(r2, n2, i2, a2, e2[13], 5, -1444681467), a2 = h(a2, r2, n2, i2, e2[2], 9, -51403784), i2 = h(i2, a2, r2, n2, e2[7], 14, 1735328473), r2 = f(r2, n2 = h(n2, i2, a2, r2, e2[12], 20, -1926607734), i2, a2, e2[5], 4, -378558), a2 = f(a2, r2, n2, i2, e2[8], 11, -2022574463), i2 = f(i2, a2, r2, n2, e2[11], 16, 1839030562), n2 = f(n2, i2, a2, r2, e2[14], 23, -35309556), r2 = f(r2, n2, i2, a2, e2[1], 4, -1530992060), a2 = f(a2, r2, n2, i2, e2[4], 11, 1272893353), i2 = f(i2, a2, r2, n2, e2[7], 16, -155497632), n2 = f(n2, i2, a2, r2, e2[10], 23, -1094730640), r2 = f(r2, n2, i2, a2, e2[13], 4, 681279174), a2 = f(a2, r2, n2, i2, e2[0], 11, -358537222), i2 = f(i2, a2, r2, n2, e2[3], 16, -722521979), n2 = f(n2, i2, a2, r2, e2[6], 23, 76029189), r2 = f(r2, n2, i2, a2, e2[9], 4, -640364487), a2 = f(a2, r2, n2, i2, e2[12], 11, -421815835), i2 = f(i2, a2, r2, n2, e2[15], 16, 530742520), r2 = d(r2, n2 = f(n2, i2, a2, r2, e2[2], 23, -995338651), i2, a2, e2[0], 6, -198630844), a2 = d(a2, r2, n2, i2, e2[7], 10, 1126891415), i2 = d(i2, a2, r2, n2, e2[14], 15, -1416354905), n2 = d(n2, i2, a2, r2, e2[5], 21, -57434055), r2 = d(r2, n2, i2, a2, e2[12], 6, 1700485571), a2 = d(a2, r2, n2, i2, e2[3], 10, -1894986606), i2 = d(i2, a2, r2, n2, e2[10], 15, -1051523), n2 = d(n2, i2, a2, r2, e2[1], 21, -2054922799), r2 = d(r2, n2, i2, a2, e2[8], 6, 1873313359), a2 = d(a2, r2, n2, i2, e2[15], 10, -30611744), i2 = d(i2, a2, r2, n2, e2[6], 15, -1560198380), n2 = d(n2, i2, a2, r2, e2[13], 21, 1309151649), r2 = d(r2, n2, i2, a2, e2[4], 6, -145523070), a2 = d(a2, r2, n2, i2, e2[11], 10, -1120210379), i2 = d(i2, a2, r2, n2, e2[2], 15, 718787259), n2 = d(n2, i2, a2, r2, e2[9], 21, -343485551), t2[0] = N(r2, t2[0]), t2[1] = N(n2, t2[1]), t2[2] = N(i2, t2[2]), t2[3] = N(a2, t2[3]);
    }
    function u(t2, e2, r2, n2, i2, a2) {
      return e2 = N(N(e2, t2), N(n2, a2)), N(e2 << i2 | e2 >>> 32 - i2, r2);
    }
    function l(t2, e2, r2, n2, i2, a2, o2) {
      return u(e2 & r2 | ~e2 & n2, t2, e2, i2, a2, o2);
    }
    function h(t2, e2, r2, n2, i2, a2, o2) {
      return u(e2 & n2 | r2 & ~n2, t2, e2, i2, a2, o2);
    }
    function f(t2, e2, r2, n2, i2, a2, o2) {
      return u(e2 ^ r2 ^ n2, t2, e2, i2, a2, o2);
    }
    function d(t2, e2, r2, n2, i2, a2, o2) {
      return u(r2 ^ (e2 | ~n2), t2, e2, i2, a2, o2);
    }
    function p(t2) {
      var e2, r2 = t2.length, n2 = [1732584193, -271733879, -1732584194, 271733878];
      for (e2 = 64; e2 <= t2.length; e2 += 64) c(n2, g(t2.substring(e2 - 64, e2)));
      t2 = t2.substring(e2 - 64);
      var i2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      for (e2 = 0; e2 < t2.length; e2++) i2[e2 >> 2] |= t2.charCodeAt(e2) << (e2 % 4 << 3);
      if (i2[e2 >> 2] |= 128 << (e2 % 4 << 3), e2 > 55) for (c(n2, i2), e2 = 0; e2 < 16; e2++) i2[e2] = 0;
      return i2[14] = 8 * r2, c(n2, i2), n2;
    }
    function g(t2) {
      var e2, r2 = [];
      for (e2 = 0; e2 < 64; e2 += 4) r2[e2 >> 2] = t2.charCodeAt(e2) + (t2.charCodeAt(e2 + 1) << 8) + (t2.charCodeAt(e2 + 2) << 16) + (t2.charCodeAt(e2 + 3) << 24);
      return r2;
    }
    var m = "0123456789abcdef".split("");
    function v(t2) {
      for (var e2 = "", r2 = 0; r2 < 4; r2++) e2 += m[t2 >> 8 * r2 + 4 & 15] + m[t2 >> 8 * r2 & 15];
      return e2;
    }
    function b(t2) {
      return String.fromCharCode(255 & t2, (65280 & t2) >> 8, (16711680 & t2) >> 16, (4278190080 & t2) >> 24);
    }
    function y(t2) {
      return p(t2).map(b).join("");
    }
    var w = "5d41402abc4b2a76b9719d911017c592" != (function(t2) {
      for (var e2 = 0; e2 < t2.length; e2++) t2[e2] = v(t2[e2]);
      return t2.join("");
    })(p("hello"));
    function N(t2, e2) {
      if (w) {
        var r2 = (65535 & t2) + (65535 & e2);
        return (t2 >> 16) + (e2 >> 16) + (r2 >> 16) << 16 | 65535 & r2;
      }
      return t2 + e2 & 4294967295;
    }
    function L(t2, e2) {
      var r2, n2, i2, a2;
      if (t2 !== r2) {
        for (var o2 = (i2 = t2, a2 = 1 + (256 / t2.length | 0), new Array(a2 + 1).join(i2)), s2 = [], c2 = 0; c2 < 256; c2++) s2[c2] = c2;
        var u2 = 0;
        for (c2 = 0; c2 < 256; c2++) {
          var l2 = s2[c2];
          u2 = (u2 + l2 + o2.charCodeAt(c2)) % 256, s2[c2] = s2[u2], s2[u2] = l2;
        }
        r2 = t2, n2 = s2;
      } else s2 = n2;
      var h2 = e2.length, f2 = 0, d2 = 0, p2 = "";
      for (c2 = 0; c2 < h2; c2++) d2 = (d2 + (l2 = s2[f2 = (f2 + 1) % 256])) % 256, s2[f2] = s2[d2], s2[d2] = l2, o2 = s2[(s2[f2] + s2[d2]) % 256], p2 += String.fromCharCode(e2.charCodeAt(c2) ^ o2);
      return p2;
    }
    var x = { print: 4, modify: 8, copy: 16, "annot-forms": 32 };
    function A(t2, e2, r2, n2) {
      this.v = 1, this.r = 2;
      let i2 = 192;
      t2.forEach(function(t3) {
        if (void 0 !== x.perm) throw new Error("Invalid permission: " + t3);
        i2 += x[t3];
      }), this.padding = "(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz";
      let a2 = (e2 + this.padding).substr(0, 32), o2 = (r2 + this.padding).substr(0, 32);
      this.O = this.processOwnerPassword(a2, o2), this.P = -(1 + (255 ^ i2)), this.encryptionKey = y(a2 + this.O + this.lsbFirstWord(this.P) + this.hexToBytes(n2)).substr(0, 5), this.U = L(this.encryptionKey, this.padding);
    }
    function S(t2) {
      if (/[^\u0000-\u00ff]/.test(t2)) throw new Error("Invalid PDF Name Object: " + t2 + ", Only accept ASCII characters.");
      for (var e2 = "", r2 = t2.length, n2 = 0; n2 < r2; n2++) {
        var i2 = t2.charCodeAt(n2);
        e2 += i2 < 33 || 35 === i2 || 37 === i2 || 40 === i2 || 41 === i2 || 47 === i2 || 60 === i2 || 62 === i2 || 91 === i2 || 93 === i2 || 123 === i2 || 125 === i2 || i2 > 126 ? "#" + ("0" + i2.toString(16)).slice(-2) : t2[n2];
      }
      return e2;
    }
    function _(t2) {
      if ("object" != typeof t2) throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");
      var e2 = {};
      this.subscribe = function(t3, r2, n2) {
        if (n2 = n2 || false, "string" != typeof t3 || "function" != typeof r2 || "boolean" != typeof n2) throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");
        e2.hasOwnProperty(t3) || (e2[t3] = {});
        var i2 = Math.random().toString(35);
        return e2[t3][i2] = [r2, !!n2], i2;
      }, this.unsubscribe = function(t3) {
        for (var r2 in e2) if (e2[r2][t3]) return delete e2[r2][t3], 0 === Object.keys(e2[r2]).length && delete e2[r2], true;
        return false;
      }, this.publish = function(n2) {
        if (e2.hasOwnProperty(n2)) {
          var i2 = Array.prototype.slice.call(arguments, 1), a2 = [];
          for (var o2 in e2[n2]) {
            var c2 = e2[n2][o2];
            try {
              c2[0].apply(t2, i2);
            } catch (u2) {
              r.console && s.error("jsPDF PubSub Error", u2.message, u2);
            }
            c2[1] && a2.push(o2);
          }
          a2.length && a2.forEach(this.unsubscribe);
        }
      }, this.getTopics = function() {
        return e2;
      };
    }
    function P(t2) {
      if (!(this instanceof P)) return new P(t2);
      var e2 = "opacity,stroke-opacity".split(",");
      for (var r2 in t2) t2.hasOwnProperty(r2) && e2.indexOf(r2) >= 0 && (this[r2] = t2[r2]);
      this.id = "", this.objectNumber = -1;
    }
    function k(t2, e2) {
      this.gState = t2, this.matrix = e2, this.id = "", this.objectNumber = -1;
    }
    function F(t2, e2, r2, n2, i2) {
      if (!(this instanceof F)) return new F(t2, e2, r2, n2, i2);
      this.type = "axial" === t2 ? 2 : 3, this.coords = e2, this.colors = r2, k.call(this, n2, i2);
    }
    function I(t2, e2, r2, n2, i2) {
      if (!(this instanceof I)) return new I(t2, e2, r2, n2, i2);
      this.boundingBox = t2, this.xStep = e2, this.yStep = r2, this.stream = "", this.cloneIndex = 0, k.call(this, n2, i2);
    }
    function j(t2) {
      var e2, i2 = "string" == typeof arguments[0] ? arguments[0] : "p", o2 = arguments[1], c2 = arguments[2], u2 = arguments[3], l2 = [], h2 = 1, f2 = 16, d2 = "S", p2 = null;
      "object" == typeof (t2 = t2 || {}) && (i2 = t2.orientation, o2 = t2.unit || o2, c2 = t2.format || c2, u2 = t2.compress || t2.compressPdf || u2, null !== (p2 = t2.encryption || null) && (p2.userPassword = p2.userPassword || "", p2.ownerPassword = p2.ownerPassword || "", p2.userPermissions = p2.userPermissions || []), h2 = "number" == typeof t2.userUnit ? Math.abs(t2.userUnit) : 1, void 0 !== t2.precision && (e2 = t2.precision), void 0 !== t2.floatPrecision && (f2 = t2.floatPrecision), d2 = t2.defaultPathOperation || "S"), l2 = t2.filters || (true === u2 ? ["FlateEncode"] : l2), o2 = o2 || "mm", i2 = ("" + (i2 || "P")).toLowerCase();
      var g2 = t2.putOnlyUsedFonts || false, m2 = {}, v2 = { internal: {}, __private__: {} };
      v2.__private__.PubSub = _;
      var b2 = "1.3", y2 = v2.__private__.getPdfVersion = function() {
        return b2;
      };
      v2.__private__.setPdfVersion = function(t3) {
        b2 = t3;
      };
      var w2 = { a0: [2383.94, 3370.39], a1: [1683.78, 2383.94], a2: [1190.55, 1683.78], a3: [841.89, 1190.55], a4: [595.28, 841.89], a5: [419.53, 595.28], a6: [297.64, 419.53], a7: [209.76, 297.64], a8: [147.4, 209.76], a9: [104.88, 147.4], a10: [73.7, 104.88], b0: [2834.65, 4008.19], b1: [2004.09, 2834.65], b2: [1417.32, 2004.09], b3: [1000.63, 1417.32], b4: [708.66, 1000.63], b5: [498.9, 708.66], b6: [354.33, 498.9], b7: [249.45, 354.33], b8: [175.75, 249.45], b9: [124.72, 175.75], b10: [87.87, 124.72], c0: [2599.37, 3676.54], c1: [1836.85, 2599.37], c2: [1298.27, 1836.85], c3: [918.43, 1298.27], c4: [649.13, 918.43], c5: [459.21, 649.13], c6: [323.15, 459.21], c7: [229.61, 323.15], c8: [161.57, 229.61], c9: [113.39, 161.57], c10: [79.37, 113.39], dl: [311.81, 623.62], letter: [612, 792], "government-letter": [576, 756], legal: [612, 1008], "junior-legal": [576, 360], ledger: [1224, 792], tabloid: [792, 1224], "credit-card": [153, 243] };
      v2.__private__.getPageFormats = function() {
        return w2;
      };
      var N2 = v2.__private__.getPageFormat = function(t3) {
        return w2[t3];
      };
      c2 = c2 || "a4";
      var L2 = "compat", x2 = "advanced", k2 = L2;
      function C2() {
        this.saveGraphicsState(), ct2(new Ut2(xt2, 0, 0, -xt2, 0, xr() * xt2).toString() + " cm"), this.setFontSize(this.getFontSize() / xt2), d2 = "n", k2 = x2;
      }
      function O2() {
        this.restoreGraphicsState(), d2 = "S", k2 = L2;
      }
      var B2 = v2.__private__.combineFontStyleAndFontWeight = function(t3, e3) {
        if ("bold" == t3 && "normal" == e3 || "bold" == t3 && 400 == e3 || "normal" == t3 && "italic" == e3 || "bold" == t3 && "italic" == e3) throw new Error("Invalid Combination of fontweight and fontstyle");
        return e3 && (t3 = 400 == e3 || "normal" === e3 ? "italic" === t3 ? "italic" : "normal" : 700 != e3 && "bold" !== e3 || "normal" !== t3 ? (700 == e3 ? "bold" : e3) + "" + t3 : "bold"), t3;
      };
      v2.advancedAPI = function(t3) {
        var e3 = k2 === L2;
        return e3 && C2.call(this), "function" != typeof t3 || (t3(this), e3 && O2.call(this)), this;
      }, v2.compatAPI = function(t3) {
        var e3 = k2 === x2;
        return e3 && O2.call(this), "function" != typeof t3 || (t3(this), e3 && C2.call(this)), this;
      }, v2.isAdvancedAPI = function() {
        return k2 === x2;
      };
      var q2, M2 = function(t3) {
        if (k2 !== x2) throw new Error(t3 + " is only available in 'advanced' API mode. You need to call advancedAPI() first.");
      }, E2 = v2.roundToPrecision = v2.__private__.roundToPrecision = function(t3, r2) {
        var n2 = e2 || r2;
        if (isNaN(t3) || isNaN(n2)) throw new Error("Invalid argument passed to jsPDF.roundToPrecision");
        return t3.toFixed(n2).replace(/0+$/, "");
      };
      q2 = v2.hpf = v2.__private__.hpf = "number" == typeof f2 ? function(t3) {
        if (isNaN(t3)) throw new Error("Invalid argument passed to jsPDF.hpf");
        return E2(t3, f2);
      } : "smart" === f2 ? function(t3) {
        if (isNaN(t3)) throw new Error("Invalid argument passed to jsPDF.hpf");
        return E2(t3, t3 > -1 && t3 < 1 ? 16 : 5);
      } : function(t3) {
        if (isNaN(t3)) throw new Error("Invalid argument passed to jsPDF.hpf");
        return E2(t3, 16);
      };
      var R2 = v2.f2 = v2.__private__.f2 = function(t3) {
        if (isNaN(t3)) throw new Error("Invalid argument passed to jsPDF.f2");
        return E2(t3, 2);
      }, D2 = v2.__private__.f3 = function(t3) {
        if (isNaN(t3)) throw new Error("Invalid argument passed to jsPDF.f3");
        return E2(t3, 3);
      }, T2 = v2.scale = v2.__private__.scale = function(t3) {
        if (isNaN(t3)) throw new Error("Invalid argument passed to jsPDF.scale");
        return k2 === L2 ? t3 * xt2 : k2 === x2 ? t3 : void 0;
      }, z2 = function(t3) {
        return T2((function(t4) {
          return k2 === L2 ? xr() - t4 : k2 === x2 ? t4 : void 0;
        })(t3));
      };
      v2.__private__.setPrecision = v2.setPrecision = function(t3) {
        "number" == typeof parseInt(t3, 10) && (e2 = parseInt(t3, 10));
      };
      var U2, H2 = "00000000000000000000000000000000", W2 = v2.__private__.getFileId = function() {
        return H2;
      }, V2 = v2.__private__.setFileId = function(t3) {
        return H2 = void 0 !== t3 && /^[a-fA-F0-9]{32}$/.test(t3) ? t3.toUpperCase() : H2.split("").map(function() {
          return "ABCDEF0123456789".charAt(Math.floor(16 * Math.random()));
        }).join(""), null !== p2 && (Fe = new A(p2.userPermissions, p2.userPassword, p2.ownerPassword, H2)), H2;
      };
      v2.setFileId = function(t3) {
        return V2(t3), this;
      }, v2.getFileId = function() {
        return W2();
      };
      var G2 = v2.__private__.convertDateToPDFDate = function(t3) {
        var e3 = t3.getTimezoneOffset(), r2 = e3 < 0 ? "+" : "-", n2 = Math.floor(Math.abs(e3 / 60)), i3 = Math.abs(e3 % 60), a2 = [r2, $2(n2), "'", $2(i3), "'"].join("");
        return ["D:", t3.getFullYear(), $2(t3.getMonth() + 1), $2(t3.getDate()), $2(t3.getHours()), $2(t3.getMinutes()), $2(t3.getSeconds()), a2].join("");
      }, Y2 = v2.__private__.convertPDFDateToDate = function(t3) {
        var e3 = parseInt(t3.substr(2, 4), 10), r2 = parseInt(t3.substr(6, 2), 10) - 1, n2 = parseInt(t3.substr(8, 2), 10), i3 = parseInt(t3.substr(10, 2), 10), a2 = parseInt(t3.substr(12, 2), 10), o3 = parseInt(t3.substr(14, 2), 10);
        return new Date(e3, r2, n2, i3, a2, o3, 0);
      }, J2 = v2.__private__.setCreationDate = function(t3) {
        var e3;
        if (void 0 === t3 && (t3 = /* @__PURE__ */ new Date()), t3 instanceof Date) e3 = G2(t3);
        else {
          if (!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(t3)) throw new Error("Invalid argument passed to jsPDF.setCreationDate");
          e3 = t3;
        }
        return U2 = e3;
      }, X2 = v2.__private__.getCreationDate = function(t3) {
        var e3 = U2;
        return "jsDate" === t3 && (e3 = Y2(U2)), e3;
      };
      v2.setCreationDate = function(t3) {
        return J2(t3), this;
      }, v2.getCreationDate = function(t3) {
        return X2(t3);
      };
      var K2, $2 = v2.__private__.padd2 = function(t3) {
        return ("0" + parseInt(t3)).slice(-2);
      }, Z2 = v2.__private__.padd2Hex = function(t3) {
        return ("00" + (t3 = t3.toString())).substr(t3.length);
      }, Q2 = 0, tt2 = [], et2 = [], rt2 = 0, nt2 = [], it2 = [], at2 = false, ot2 = et2;
      v2.__private__.setCustomOutputDestination = function(t3) {
        at2 = true, ot2 = t3;
      };
      var st2 = function(t3) {
        at2 || (ot2 = t3);
      };
      v2.__private__.resetCustomOutputDestination = function() {
        at2 = false, ot2 = et2;
      };
      var ct2 = v2.__private__.out = function(t3) {
        return t3 = t3.toString(), rt2 += t3.length + 1, ot2.push(t3), ot2;
      }, ut2 = v2.__private__.write = function(t3) {
        return ct2(1 === arguments.length ? t3.toString() : Array.prototype.join.call(arguments, " "));
      }, lt2 = v2.__private__.getArrayBuffer = function(t3) {
        for (var e3 = t3.length, r2 = new ArrayBuffer(e3), n2 = new Uint8Array(r2); e3--; ) n2[e3] = t3.charCodeAt(e3);
        return r2;
      }, ht2 = [["Helvetica", "helvetica", "normal", "WinAnsiEncoding"], ["Helvetica-Bold", "helvetica", "bold", "WinAnsiEncoding"], ["Helvetica-Oblique", "helvetica", "italic", "WinAnsiEncoding"], ["Helvetica-BoldOblique", "helvetica", "bolditalic", "WinAnsiEncoding"], ["Courier", "courier", "normal", "WinAnsiEncoding"], ["Courier-Bold", "courier", "bold", "WinAnsiEncoding"], ["Courier-Oblique", "courier", "italic", "WinAnsiEncoding"], ["Courier-BoldOblique", "courier", "bolditalic", "WinAnsiEncoding"], ["Times-Roman", "times", "normal", "WinAnsiEncoding"], ["Times-Bold", "times", "bold", "WinAnsiEncoding"], ["Times-Italic", "times", "italic", "WinAnsiEncoding"], ["Times-BoldItalic", "times", "bolditalic", "WinAnsiEncoding"], ["ZapfDingbats", "zapfdingbats", "normal", null], ["Symbol", "symbol", "normal", null]];
      v2.__private__.getStandardFonts = function() {
        return ht2;
      };
      var ft2 = t2.fontSize || 16;
      v2.__private__.setFontSize = v2.setFontSize = function(t3) {
        return ft2 = k2 === x2 ? t3 / xt2 : t3, this;
      };
      var dt2, pt2 = v2.__private__.getFontSize = v2.getFontSize = function() {
        return k2 === L2 ? ft2 : ft2 * xt2;
      }, gt2 = t2.R2L || false;
      v2.__private__.setR2L = v2.setR2L = function(t3) {
        return gt2 = t3, this;
      }, v2.__private__.getR2L = v2.getR2L = function() {
        return gt2;
      };
      var mt2, vt2 = v2.__private__.setZoomMode = function(t3) {
        if (/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(t3)) dt2 = t3;
        else if (isNaN(t3)) {
          if (-1 === [void 0, null, "fullwidth", "fullheight", "fullpage", "original"].indexOf(t3)) throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "' + t3 + '" is not recognized.');
          dt2 = t3;
        } else dt2 = parseInt(t3, 10);
      };
      v2.__private__.getZoomMode = function() {
        return dt2;
      };
      var bt2, yt2 = v2.__private__.setPageMode = function(t3) {
        if (-1 == [void 0, null, "UseNone", "UseOutlines", "UseThumbs", "FullScreen"].indexOf(t3)) throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' + t3 + '" is not recognized.');
        mt2 = t3;
      };
      v2.__private__.getPageMode = function() {
        return mt2;
      };
      var wt2 = v2.__private__.setLayoutMode = function(t3) {
        if (-1 == [void 0, null, "continuous", "single", "twoleft", "tworight", "two"].indexOf(t3)) throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "' + t3 + '" is not recognized.');
        bt2 = t3;
      };
      v2.__private__.getLayoutMode = function() {
        return bt2;
      }, v2.__private__.setDisplayMode = v2.setDisplayMode = function(t3, e3, r2) {
        return vt2(t3), wt2(e3), yt2(r2), this;
      };
      var Nt2 = { title: "", subject: "", author: "", keywords: "", creator: "" };
      v2.__private__.getDocumentProperty = function(t3) {
        if (-1 === Object.keys(Nt2).indexOf(t3)) throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");
        return Nt2[t3];
      }, v2.__private__.getDocumentProperties = function() {
        return Nt2;
      }, v2.__private__.setDocumentProperties = v2.setProperties = v2.setDocumentProperties = function(t3) {
        for (var e3 in Nt2) Nt2.hasOwnProperty(e3) && t3[e3] && (Nt2[e3] = t3[e3]);
        return this;
      }, v2.__private__.setDocumentProperty = function(t3, e3) {
        if (-1 === Object.keys(Nt2).indexOf(t3)) throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");
        return Nt2[t3] = e3;
      };
      var Lt2, xt2, At2, St2, _t2, Pt2 = {}, kt2 = {}, Ft2 = [], It2 = {}, jt2 = {}, Ct2 = {}, Ot2 = {}, Bt2 = null, qt2 = 0, Mt2 = [], Et2 = new _(v2), Rt2 = t2.hotfixes || [], Dt2 = {}, Tt2 = {}, zt2 = [], Ut2 = function(t3, e3, r2, n2, i3, a2) {
        if (!(this instanceof Ut2)) return new Ut2(t3, e3, r2, n2, i3, a2);
        isNaN(t3) && (t3 = 1), isNaN(e3) && (e3 = 0), isNaN(r2) && (r2 = 0), isNaN(n2) && (n2 = 1), isNaN(i3) && (i3 = 0), isNaN(a2) && (a2 = 0), this._matrix = [t3, e3, r2, n2, i3, a2];
      };
      Object.defineProperty(Ut2.prototype, "sx", { get: function() {
        return this._matrix[0];
      }, set: function(t3) {
        this._matrix[0] = t3;
      } }), Object.defineProperty(Ut2.prototype, "shy", { get: function() {
        return this._matrix[1];
      }, set: function(t3) {
        this._matrix[1] = t3;
      } }), Object.defineProperty(Ut2.prototype, "shx", { get: function() {
        return this._matrix[2];
      }, set: function(t3) {
        this._matrix[2] = t3;
      } }), Object.defineProperty(Ut2.prototype, "sy", { get: function() {
        return this._matrix[3];
      }, set: function(t3) {
        this._matrix[3] = t3;
      } }), Object.defineProperty(Ut2.prototype, "tx", { get: function() {
        return this._matrix[4];
      }, set: function(t3) {
        this._matrix[4] = t3;
      } }), Object.defineProperty(Ut2.prototype, "ty", { get: function() {
        return this._matrix[5];
      }, set: function(t3) {
        this._matrix[5] = t3;
      } }), Object.defineProperty(Ut2.prototype, "a", { get: function() {
        return this._matrix[0];
      }, set: function(t3) {
        this._matrix[0] = t3;
      } }), Object.defineProperty(Ut2.prototype, "b", { get: function() {
        return this._matrix[1];
      }, set: function(t3) {
        this._matrix[1] = t3;
      } }), Object.defineProperty(Ut2.prototype, "c", { get: function() {
        return this._matrix[2];
      }, set: function(t3) {
        this._matrix[2] = t3;
      } }), Object.defineProperty(Ut2.prototype, "d", { get: function() {
        return this._matrix[3];
      }, set: function(t3) {
        this._matrix[3] = t3;
      } }), Object.defineProperty(Ut2.prototype, "e", { get: function() {
        return this._matrix[4];
      }, set: function(t3) {
        this._matrix[4] = t3;
      } }), Object.defineProperty(Ut2.prototype, "f", { get: function() {
        return this._matrix[5];
      }, set: function(t3) {
        this._matrix[5] = t3;
      } }), Object.defineProperty(Ut2.prototype, "rotation", { get: function() {
        return Math.atan2(this.shx, this.sx);
      } }), Object.defineProperty(Ut2.prototype, "scaleX", { get: function() {
        return this.decompose().scale.sx;
      } }), Object.defineProperty(Ut2.prototype, "scaleY", { get: function() {
        return this.decompose().scale.sy;
      } }), Object.defineProperty(Ut2.prototype, "isIdentity", { get: function() {
        return 1 === this.sx && 0 === this.shy && 0 === this.shx && 1 === this.sy && 0 === this.tx && 0 === this.ty;
      } }), Ut2.prototype.join = function(t3) {
        return [this.sx, this.shy, this.shx, this.sy, this.tx, this.ty].map(q2).join(t3);
      }, Ut2.prototype.multiply = function(t3) {
        var e3 = t3.sx * this.sx + t3.shy * this.shx, r2 = t3.sx * this.shy + t3.shy * this.sy, n2 = t3.shx * this.sx + t3.sy * this.shx, i3 = t3.shx * this.shy + t3.sy * this.sy, a2 = t3.tx * this.sx + t3.ty * this.shx + this.tx, o3 = t3.tx * this.shy + t3.ty * this.sy + this.ty;
        return new Ut2(e3, r2, n2, i3, a2, o3);
      }, Ut2.prototype.decompose = function() {
        var t3 = this.sx, e3 = this.shy, r2 = this.shx, n2 = this.sy, i3 = this.tx, a2 = this.ty, o3 = Math.sqrt(t3 * t3 + e3 * e3), s2 = (t3 /= o3) * r2 + (e3 /= o3) * n2;
        r2 -= t3 * s2, n2 -= e3 * s2;
        var c3 = Math.sqrt(r2 * r2 + n2 * n2);
        return s2 /= c3, t3 * (n2 /= c3) < e3 * (r2 /= c3) && (t3 = -t3, e3 = -e3, s2 = -s2, o3 = -o3), { scale: new Ut2(o3, 0, 0, c3, 0, 0), translate: new Ut2(1, 0, 0, 1, i3, a2), rotate: new Ut2(t3, e3, -e3, t3, 0, 0), skew: new Ut2(1, 0, s2, 1, 0, 0) };
      }, Ut2.prototype.toString = function(t3) {
        return this.join(" ");
      }, Ut2.prototype.inversed = function() {
        var t3 = this.sx, e3 = this.shy, r2 = this.shx, n2 = this.sy, i3 = this.tx, a2 = this.ty, o3 = 1 / (t3 * n2 - e3 * r2), s2 = n2 * o3, c3 = -e3 * o3, u3 = -r2 * o3, l3 = t3 * o3;
        return new Ut2(s2, c3, u3, l3, -s2 * i3 - u3 * a2, -c3 * i3 - l3 * a2);
      }, Ut2.prototype.applyToPoint = function(t3) {
        var e3 = t3.x * this.sx + t3.y * this.shx + this.tx, r2 = t3.x * this.shy + t3.y * this.sy + this.ty;
        return new fr(e3, r2);
      }, Ut2.prototype.applyToRectangle = function(t3) {
        var e3 = this.applyToPoint(t3), r2 = this.applyToPoint(new fr(t3.x + t3.w, t3.y + t3.h));
        return new dr(e3.x, e3.y, r2.x - e3.x, r2.y - e3.y);
      }, Ut2.prototype.clone = function() {
        var t3 = this.sx, e3 = this.shy, r2 = this.shx, n2 = this.sy, i3 = this.tx, a2 = this.ty;
        return new Ut2(t3, e3, r2, n2, i3, a2);
      }, v2.Matrix = Ut2;
      var Ht2 = v2.matrixMult = function(t3, e3) {
        return e3.multiply(t3);
      }, Wt2 = new Ut2(1, 0, 0, 1, 0, 0);
      v2.unitMatrix = v2.identityMatrix = Wt2;
      var Vt2 = function(t3, e3) {
        if (!jt2[t3]) {
          var r2 = (e3 instanceof F ? "Sh" : "P") + (Object.keys(It2).length + 1).toString(10);
          e3.id = r2, jt2[t3] = r2, It2[r2] = e3, Et2.publish("addPattern", e3);
        }
      };
      v2.ShadingPattern = F, v2.TilingPattern = I, v2.addShadingPattern = function(t3, e3) {
        return M2("addShadingPattern()"), Vt2(t3, e3), this;
      }, v2.beginTilingPattern = function(t3) {
        M2("beginTilingPattern()"), gr(t3.boundingBox[0], t3.boundingBox[1], t3.boundingBox[2] - t3.boundingBox[0], t3.boundingBox[3] - t3.boundingBox[1], t3.matrix);
      }, v2.endTilingPattern = function(t3, e3) {
        M2("endTilingPattern()"), e3.stream = it2[K2].join("\n"), Vt2(t3, e3), Et2.publish("endTilingPattern", e3), zt2.pop().restore();
      };
      var Gt2, Yt2 = v2.__private__.newObject = function() {
        var t3 = Jt2();
        return Xt2(t3, true), t3;
      }, Jt2 = v2.__private__.newObjectDeferred = function() {
        return Q2++, tt2[Q2] = function() {
          return rt2;
        }, Q2;
      }, Xt2 = function(t3, e3) {
        return e3 = "boolean" == typeof e3 && e3, tt2[t3] = rt2, e3 && ct2(t3 + " 0 obj"), t3;
      }, Kt2 = v2.__private__.newAdditionalObject = function() {
        var t3 = { objId: Jt2(), content: "" };
        return nt2.push(t3), t3;
      }, $t2 = Jt2(), Zt2 = Jt2(), Qt2 = v2.__private__.decodeColorString = function(t3) {
        var e3 = t3.split(" ");
        if (2 !== e3.length || "g" !== e3[1] && "G" !== e3[1]) 5 !== e3.length || "k" !== e3[4] && "K" !== e3[4] || (e3 = [(1 - e3[0]) * (1 - e3[3]), (1 - e3[1]) * (1 - e3[3]), (1 - e3[2]) * (1 - e3[3]), "r"]);
        else {
          var r2 = parseFloat(e3[0]);
          e3 = [r2, r2, r2, "r"];
        }
        for (var n2 = "#", i3 = 0; i3 < 3; i3++) n2 += ("0" + Math.floor(255 * parseFloat(e3[i3])).toString(16)).slice(-2);
        return n2;
      }, te2 = v2.__private__.encodeColorString = function(t3) {
        var e3;
        "string" == typeof t3 && (t3 = { ch1: t3 });
        var r2 = t3.ch1, i3 = t3.ch2, a2 = t3.ch3, o3 = t3.ch4, s2 = "draw" === t3.pdfColorType ? ["G", "RG", "K"] : ["g", "rg", "k"];
        if ("string" == typeof r2 && "#" !== r2.charAt(0)) {
          var c3 = new n(r2);
          if (c3.ok) r2 = c3.toHex();
          else if (!/^\d*\.?\d*$/.test(r2)) throw new Error('Invalid color "' + r2 + '" passed to jsPDF.encodeColorString.');
        }
        if ("string" == typeof r2 && /^#[0-9A-Fa-f]{3}$/.test(r2) && (r2 = "#" + r2[1] + r2[1] + r2[2] + r2[2] + r2[3] + r2[3]), "string" == typeof r2 && /^#[0-9A-Fa-f]{6}$/.test(r2)) {
          var u3 = parseInt(r2.substr(1), 16);
          r2 = u3 >> 16 & 255, i3 = u3 >> 8 & 255, a2 = 255 & u3;
        }
        if (void 0 === i3 || void 0 === o3 && r2 === i3 && i3 === a2) e3 = "string" == typeof r2 ? r2 + " " + s2[0] : 2 === t3.precision ? R2(r2 / 255) + " " + s2[0] : D2(r2 / 255) + " " + s2[0];
        else if (void 0 === o3 || "object" == typeof o3) {
          if (o3 && !isNaN(o3.a) && 0 === o3.a) return ["1.", "1.", "1.", s2[1]].join(" ");
          e3 = "string" == typeof r2 ? [r2, i3, a2, s2[1]].join(" ") : 2 === t3.precision ? [R2(r2 / 255), R2(i3 / 255), R2(a2 / 255), s2[1]].join(" ") : [D2(r2 / 255), D2(i3 / 255), D2(a2 / 255), s2[1]].join(" ");
        } else e3 = "string" == typeof r2 ? [r2, i3, a2, o3, s2[2]].join(" ") : 2 === t3.precision ? [R2(r2), R2(i3), R2(a2), R2(o3), s2[2]].join(" ") : [D2(r2), D2(i3), D2(a2), D2(o3), s2[2]].join(" ");
        return e3;
      }, ee2 = v2.__private__.getFilters = function() {
        return l2;
      }, re2 = v2.__private__.putStream = function(t3) {
        var e3 = (t3 = t3 || {}).data || "", r2 = t3.filters || ee2(), n2 = t3.alreadyAppliedFilters || [], i3 = t3.addLength1 || false, a2 = e3.length, o3 = t3.objectId, s2 = function(t4) {
          return t4;
        };
        if (null !== p2 && void 0 === o3) throw new Error("ObjectId must be passed to putStream for file encryption");
        null !== p2 && (s2 = Fe.encryptor(o3, 0));
        var c3 = {};
        true === r2 && (r2 = ["FlateEncode"]);
        var u3 = t3.additionalKeyValues || [], l3 = (c3 = void 0 !== j.API.processDataByFilters ? j.API.processDataByFilters(e3, r2) : { data: e3, reverseChain: [] }).reverseChain + (Array.isArray(n2) ? n2.join(" ") : n2.toString());
        if (0 !== c3.data.length && (u3.push({ key: "Length", value: c3.data.length }), true === i3 && u3.push({ key: "Length1", value: a2 })), 0 != l3.length) if (l3.split("/").length - 1 == 1) u3.push({ key: "Filter", value: l3 });
        else {
          u3.push({ key: "Filter", value: "[" + l3 + "]" });
          for (var h3 = 0; h3 < u3.length; h3 += 1) if ("DecodeParms" === u3[h3].key) {
            for (var f3 = [], d3 = 0; d3 < c3.reverseChain.split("/").length - 1; d3 += 1) f3.push("null");
            f3.push(u3[h3].value), u3[h3].value = "[" + f3.join(" ") + "]";
          }
        }
        ct2("<<");
        for (var g3 = 0; g3 < u3.length; g3++) ct2("/" + u3[g3].key + " " + u3[g3].value);
        ct2(">>"), 0 !== c3.data.length && (ct2("stream"), ct2(s2(c3.data)), ct2("endstream"));
      }, ne2 = v2.__private__.putPage = function(t3) {
        var e3 = t3.number, r2 = t3.data, n2 = t3.objId, i3 = t3.contentsObjId;
        Xt2(n2, true), ct2("<</Type /Page"), ct2("/Parent " + t3.rootDictionaryObjId + " 0 R"), ct2("/Resources " + t3.resourceDictionaryObjId + " 0 R"), ct2("/MediaBox [" + parseFloat(q2(t3.mediaBox.bottomLeftX)) + " " + parseFloat(q2(t3.mediaBox.bottomLeftY)) + " " + q2(t3.mediaBox.topRightX) + " " + q2(t3.mediaBox.topRightY) + "]"), null !== t3.cropBox && ct2("/CropBox [" + q2(t3.cropBox.bottomLeftX) + " " + q2(t3.cropBox.bottomLeftY) + " " + q2(t3.cropBox.topRightX) + " " + q2(t3.cropBox.topRightY) + "]"), null !== t3.bleedBox && ct2("/BleedBox [" + q2(t3.bleedBox.bottomLeftX) + " " + q2(t3.bleedBox.bottomLeftY) + " " + q2(t3.bleedBox.topRightX) + " " + q2(t3.bleedBox.topRightY) + "]"), null !== t3.trimBox && ct2("/TrimBox [" + q2(t3.trimBox.bottomLeftX) + " " + q2(t3.trimBox.bottomLeftY) + " " + q2(t3.trimBox.topRightX) + " " + q2(t3.trimBox.topRightY) + "]"), null !== t3.artBox && ct2("/ArtBox [" + q2(t3.artBox.bottomLeftX) + " " + q2(t3.artBox.bottomLeftY) + " " + q2(t3.artBox.topRightX) + " " + q2(t3.artBox.topRightY) + "]"), "number" == typeof t3.userUnit && 1 !== t3.userUnit && ct2("/UserUnit " + t3.userUnit), Et2.publish("putPage", { objId: n2, pageContext: Mt2[e3], pageNumber: e3, page: r2 }), ct2("/Contents " + i3 + " 0 R"), ct2(">>"), ct2("endobj");
        var a2 = r2.join("\n");
        return k2 === x2 && (a2 += "\nQ"), Xt2(i3, true), re2({ data: a2, filters: ee2(), objectId: i3 }), ct2("endobj"), n2;
      }, ie2 = v2.__private__.putPages = function() {
        var t3, e3, r2 = [];
        for (t3 = 1; t3 <= qt2; t3++) Mt2[t3].objId = Jt2(), Mt2[t3].contentsObjId = Jt2();
        for (t3 = 1; t3 <= qt2; t3++) r2.push(ne2({ number: t3, data: it2[t3], objId: Mt2[t3].objId, contentsObjId: Mt2[t3].contentsObjId, mediaBox: Mt2[t3].mediaBox, cropBox: Mt2[t3].cropBox, bleedBox: Mt2[t3].bleedBox, trimBox: Mt2[t3].trimBox, artBox: Mt2[t3].artBox, userUnit: Mt2[t3].userUnit, rootDictionaryObjId: $t2, resourceDictionaryObjId: Zt2 }));
        Xt2($t2, true), ct2("<</Type /Pages");
        var n2 = "/Kids [";
        for (e3 = 0; e3 < qt2; e3++) n2 += r2[e3] + " 0 R ";
        ct2(n2 + "]"), ct2("/Count " + qt2), ct2(">>"), ct2("endobj"), Et2.publish("postPutPages");
      }, ae2 = function(t3) {
        Et2.publish("putFont", { font: t3, out: ct2, newObject: Yt2, putStream: re2 }), true !== t3.isAlreadyPutted && (t3.objectNumber = Yt2(), ct2("<<"), ct2("/Type /Font"), ct2("/BaseFont /" + S(t3.postScriptName)), ct2("/Subtype /Type1"), "string" == typeof t3.encoding && ct2("/Encoding /" + t3.encoding), ct2("/FirstChar 32"), ct2("/LastChar 255"), ct2(">>"), ct2("endobj"));
      }, oe2 = function(t3) {
        t3.objectNumber = Yt2();
        var e3 = [];
        e3.push({ key: "Type", value: "/XObject" }), e3.push({ key: "Subtype", value: "/Form" }), e3.push({ key: "BBox", value: "[" + [q2(t3.x), q2(t3.y), q2(t3.x + t3.width), q2(t3.y + t3.height)].join(" ") + "]" }), e3.push({ key: "Matrix", value: "[" + t3.matrix.toString() + "]" });
        var r2 = t3.pages[1].join("\n");
        re2({ data: r2, additionalKeyValues: e3, objectId: t3.objectNumber }), ct2("endobj");
      }, se2 = function(t3, e3) {
        e3 || (e3 = 21);
        var r2 = Yt2(), n2 = (function(t4, e4) {
          var r3, n3 = [], i4 = 1 / (e4 - 1);
          for (r3 = 0; r3 < 1; r3 += i4) n3.push(r3);
          if (n3.push(1), 0 != t4[0].offset) {
            var a3 = { offset: 0, color: t4[0].color };
            t4.unshift(a3);
          }
          if (1 != t4[t4.length - 1].offset) {
            var o3 = { offset: 1, color: t4[t4.length - 1].color };
            t4.push(o3);
          }
          for (var s2 = "", c3 = 0, u3 = 0; u3 < n3.length; u3++) {
            for (r3 = n3[u3]; r3 > t4[c3 + 1].offset; ) c3++;
            var l3 = t4[c3].offset, h3 = (r3 - l3) / (t4[c3 + 1].offset - l3), f3 = t4[c3].color, d3 = t4[c3 + 1].color;
            s2 += Z2(Math.round((1 - h3) * f3[0] + h3 * d3[0]).toString(16)) + Z2(Math.round((1 - h3) * f3[1] + h3 * d3[1]).toString(16)) + Z2(Math.round((1 - h3) * f3[2] + h3 * d3[2]).toString(16));
          }
          return s2.trim();
        })(t3.colors, e3), i3 = [];
        i3.push({ key: "FunctionType", value: "0" }), i3.push({ key: "Domain", value: "[0.0 1.0]" }), i3.push({ key: "Size", value: "[" + e3 + "]" }), i3.push({ key: "BitsPerSample", value: "8" }), i3.push({ key: "Range", value: "[0.0 1.0 0.0 1.0 0.0 1.0]" }), i3.push({ key: "Decode", value: "[0.0 1.0 0.0 1.0 0.0 1.0]" }), re2({ data: n2, additionalKeyValues: i3, alreadyAppliedFilters: ["/ASCIIHexDecode"], objectId: r2 }), ct2("endobj"), t3.objectNumber = Yt2(), ct2("<< /ShadingType " + t3.type), ct2("/ColorSpace /DeviceRGB");
        var a2 = "/Coords [" + q2(parseFloat(t3.coords[0])) + " " + q2(parseFloat(t3.coords[1])) + " ";
        2 === t3.type ? a2 += q2(parseFloat(t3.coords[2])) + " " + q2(parseFloat(t3.coords[3])) : a2 += q2(parseFloat(t3.coords[2])) + " " + q2(parseFloat(t3.coords[3])) + " " + q2(parseFloat(t3.coords[4])) + " " + q2(parseFloat(t3.coords[5])), ct2(a2 += "]"), t3.matrix && ct2("/Matrix [" + t3.matrix.toString() + "]"), ct2("/Function " + r2 + " 0 R"), ct2("/Extend [true true]"), ct2(">>"), ct2("endobj");
      }, ce2 = function(t3, e3) {
        var r2 = Jt2(), n2 = Yt2();
        e3.push({ resourcesOid: r2, objectOid: n2 }), t3.objectNumber = n2;
        var i3 = [];
        i3.push({ key: "Type", value: "/Pattern" }), i3.push({ key: "PatternType", value: "1" }), i3.push({ key: "PaintType", value: "1" }), i3.push({ key: "TilingType", value: "1" }), i3.push({ key: "BBox", value: "[" + t3.boundingBox.map(q2).join(" ") + "]" }), i3.push({ key: "XStep", value: q2(t3.xStep) }), i3.push({ key: "YStep", value: q2(t3.yStep) }), i3.push({ key: "Resources", value: r2 + " 0 R" }), t3.matrix && i3.push({ key: "Matrix", value: "[" + t3.matrix.toString() + "]" }), re2({ data: t3.stream, additionalKeyValues: i3, objectId: t3.objectNumber }), ct2("endobj");
      }, ue2 = function(t3) {
        for (var e3 in t3.objectNumber = Yt2(), ct2("<<"), t3) switch (e3) {
          case "opacity":
            ct2("/ca " + R2(t3[e3]));
            break;
          case "stroke-opacity":
            ct2("/CA " + R2(t3[e3]));
        }
        ct2(">>"), ct2("endobj");
      }, le2 = function(t3) {
        Xt2(t3.resourcesOid, true), ct2("<<"), ct2("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"), (function() {
          for (var t4 in ct2("/Font <<"), Pt2) Pt2.hasOwnProperty(t4) && (false === g2 || true === g2 && m2.hasOwnProperty(t4)) && ct2("/" + t4 + " " + Pt2[t4].objectNumber + " 0 R");
          ct2(">>");
        })(), (function() {
          if (Object.keys(It2).length > 0) {
            for (var t4 in ct2("/Shading <<"), It2) It2.hasOwnProperty(t4) && It2[t4] instanceof F && It2[t4].objectNumber >= 0 && ct2("/" + t4 + " " + It2[t4].objectNumber + " 0 R");
            Et2.publish("putShadingPatternDict"), ct2(">>");
          }
        })(), (function(t4) {
          if (Object.keys(It2).length > 0) {
            for (var e3 in ct2("/Pattern <<"), It2) It2.hasOwnProperty(e3) && It2[e3] instanceof v2.TilingPattern && It2[e3].objectNumber >= 0 && It2[e3].objectNumber < t4 && ct2("/" + e3 + " " + It2[e3].objectNumber + " 0 R");
            Et2.publish("putTilingPatternDict"), ct2(">>");
          }
        })(t3.objectOid), (function() {
          if (Object.keys(Ct2).length > 0) {
            var t4;
            for (t4 in ct2("/ExtGState <<"), Ct2) Ct2.hasOwnProperty(t4) && Ct2[t4].objectNumber >= 0 && ct2("/" + t4 + " " + Ct2[t4].objectNumber + " 0 R");
            Et2.publish("putGStateDict"), ct2(">>");
          }
        })(), (function() {
          for (var t4 in ct2("/XObject <<"), Dt2) Dt2.hasOwnProperty(t4) && Dt2[t4].objectNumber >= 0 && ct2("/" + t4 + " " + Dt2[t4].objectNumber + " 0 R");
          Et2.publish("putXobjectDict"), ct2(">>");
        })(), ct2(">>"), ct2("endobj");
      }, he2 = function(t3) {
        kt2[t3.fontName] = kt2[t3.fontName] || {}, kt2[t3.fontName][t3.fontStyle] = t3.id;
      }, fe2 = function(t3, e3, r2, n2, i3) {
        var a2 = { id: "F" + (Object.keys(Pt2).length + 1).toString(10), postScriptName: t3, fontName: e3, fontStyle: r2, encoding: n2, isStandardFont: i3 || false, metadata: {} };
        return Et2.publish("addFont", { font: a2, instance: this }), Pt2[a2.id] = a2, he2(a2), a2.id;
      }, de2 = v2.__private__.pdfEscape = v2.pdfEscape = function(t3, e3) {
        return (function(t4, e4) {
          var r2, n2, i3, a2, o3, s2, c3, u3, l3;
          if (i3 = (e4 = e4 || {}).sourceEncoding || "Unicode", o3 = e4.outputEncoding, (e4.autoencode || o3) && Pt2[Lt2].metadata && Pt2[Lt2].metadata[i3] && Pt2[Lt2].metadata[i3].encoding && (a2 = Pt2[Lt2].metadata[i3].encoding, !o3 && Pt2[Lt2].encoding && (o3 = Pt2[Lt2].encoding), !o3 && a2.codePages && (o3 = a2.codePages[0]), "string" == typeof o3 && (o3 = a2[o3]), o3)) {
            for (c3 = false, s2 = [], r2 = 0, n2 = t4.length; r2 < n2; r2++) (u3 = o3[t4.charCodeAt(r2)]) ? s2.push(String.fromCharCode(u3)) : s2.push(t4[r2]), s2[r2].charCodeAt(0) >> 8 && (c3 = true);
            t4 = s2.join("");
          }
          for (r2 = t4.length; void 0 === c3 && 0 !== r2; ) t4.charCodeAt(r2 - 1) >> 8 && (c3 = true), r2--;
          if (!c3) return t4;
          for (s2 = e4.noBOM ? [] : [254, 255], r2 = 0, n2 = t4.length; r2 < n2; r2++) {
            if ((l3 = (u3 = t4.charCodeAt(r2)) >> 8) >> 8) throw new Error("Character at position " + r2 + " of string '" + t4 + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
            s2.push(l3), s2.push(u3 - (l3 << 8));
          }
          return String.fromCharCode.apply(void 0, s2);
        })(t3, e3).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
      }, pe2 = v2.__private__.beginPage = function(t3) {
        it2[++qt2] = [], Mt2[qt2] = { objId: 0, contentsObjId: 0, userUnit: Number(h2), artBox: null, bleedBox: null, cropBox: null, trimBox: null, mediaBox: { bottomLeftX: 0, bottomLeftY: 0, topRightX: Number(t3[0]), topRightY: Number(t3[1]) } }, ve2(qt2), st2(it2[K2]);
      }, ge2 = function(t3, e3) {
        var r2, n2, a2;
        switch (i2 = e3 || i2, "string" == typeof t3 && (r2 = N2(t3.toLowerCase()), Array.isArray(r2) && (n2 = r2[0], a2 = r2[1])), Array.isArray(t3) && (n2 = t3[0] * xt2, a2 = t3[1] * xt2), isNaN(n2) && (n2 = c2[0], a2 = c2[1]), (n2 > 14400 || a2 > 14400) && (s.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"), n2 = Math.min(14400, n2), a2 = Math.min(14400, a2)), c2 = [n2, a2], i2.substr(0, 1)) {
          case "l":
            a2 > n2 && (c2 = [a2, n2]);
            break;
          case "p":
            n2 > a2 && (c2 = [a2, n2]);
        }
        pe2(c2), Xe(Ye), ct2(nr), 0 !== ur && ct2(ur + " J"), 0 !== lr && ct2(lr + " j"), Et2.publish("addPage", { pageNumber: qt2 });
      }, me2 = function(t3) {
        t3 > 0 && t3 <= qt2 && (it2.splice(t3, 1), Mt2.splice(t3, 1), qt2--, K2 > qt2 && (K2 = qt2), this.setPage(K2));
      }, ve2 = function(t3) {
        t3 > 0 && t3 <= qt2 && (K2 = t3);
      }, be2 = v2.__private__.getNumberOfPages = v2.getNumberOfPages = function() {
        return it2.length - 1;
      }, ye2 = function(t3, e3, r2) {
        var n2, i3 = void 0;
        return r2 = r2 || {}, t3 = void 0 !== t3 ? t3 : Pt2[Lt2].fontName, e3 = void 0 !== e3 ? e3 : Pt2[Lt2].fontStyle, n2 = t3.toLowerCase(), void 0 !== kt2[n2] && void 0 !== kt2[n2][e3] ? i3 = kt2[n2][e3] : void 0 !== kt2[t3] && void 0 !== kt2[t3][e3] ? i3 = kt2[t3][e3] : false === r2.disableWarning && s.warn("Unable to look up font label for font '" + t3 + "', '" + e3 + "'. Refer to getFontList() for available fonts."), i3 || r2.noFallback || null == (i3 = kt2.times[e3]) && (i3 = kt2.times.normal), i3;
      }, we2 = v2.__private__.putInfo = function() {
        var t3 = Yt2(), e3 = function(t4) {
          return t4;
        };
        for (var r2 in null !== p2 && (e3 = Fe.encryptor(t3, 0)), ct2("<<"), ct2("/Producer (" + de2(e3("jsPDF " + j.version)) + ")"), Nt2) Nt2.hasOwnProperty(r2) && Nt2[r2] && ct2("/" + r2.substr(0, 1).toUpperCase() + r2.substr(1) + " (" + de2(e3(Nt2[r2])) + ")");
        ct2("/CreationDate (" + de2(e3(U2)) + ")"), ct2(">>"), ct2("endobj");
      }, Ne2 = v2.__private__.putCatalog = function(t3) {
        var e3 = (t3 = t3 || {}).rootDictionaryObjId || $t2;
        switch (Yt2(), ct2("<<"), ct2("/Type /Catalog"), ct2("/Pages " + e3 + " 0 R"), dt2 || (dt2 = "fullwidth"), dt2) {
          case "fullwidth":
            ct2("/OpenAction [3 0 R /FitH null]");
            break;
          case "fullheight":
            ct2("/OpenAction [3 0 R /FitV null]");
            break;
          case "fullpage":
            ct2("/OpenAction [3 0 R /Fit]");
            break;
          case "original":
            ct2("/OpenAction [3 0 R /XYZ null null 1]");
            break;
          default:
            var r2 = "" + dt2;
            "%" === r2.substr(r2.length - 1) && (dt2 = parseInt(dt2) / 100), "number" == typeof dt2 && ct2("/OpenAction [3 0 R /XYZ null null " + R2(dt2) + "]");
        }
        switch (bt2 || (bt2 = "continuous"), bt2) {
          case "continuous":
            ct2("/PageLayout /OneColumn");
            break;
          case "single":
            ct2("/PageLayout /SinglePage");
            break;
          case "two":
          case "twoleft":
            ct2("/PageLayout /TwoColumnLeft");
            break;
          case "tworight":
            ct2("/PageLayout /TwoColumnRight");
        }
        mt2 && ct2("/PageMode /" + mt2), Et2.publish("putCatalog"), ct2(">>"), ct2("endobj");
      }, Le2 = v2.__private__.putTrailer = function() {
        ct2("trailer"), ct2("<<"), ct2("/Size " + (Q2 + 1)), ct2("/Root " + Q2 + " 0 R"), ct2("/Info " + (Q2 - 1) + " 0 R"), null !== p2 && ct2("/Encrypt " + Fe.oid + " 0 R"), ct2("/ID [ <" + H2 + "> <" + H2 + "> ]"), ct2(">>");
      }, xe2 = v2.__private__.putHeader = function() {
        ct2("%PDF-" + b2), ct2("%ºß¬à");
      }, Ae2 = v2.__private__.putXRef = function() {
        var t3 = "0000000000";
        ct2("xref"), ct2("0 " + (Q2 + 1)), ct2("0000000000 65535 f ");
        for (var e3 = 1; e3 <= Q2; e3++) "function" == typeof tt2[e3] ? ct2((t3 + tt2[e3]()).slice(-10) + " 00000 n ") : void 0 !== tt2[e3] ? ct2((t3 + tt2[e3]).slice(-10) + " 00000 n ") : ct2("0000000000 00000 n ");
      }, Se = v2.__private__.buildDocument = function() {
        var t3;
        Q2 = 0, rt2 = 0, et2 = [], tt2 = [], nt2 = [], $t2 = Jt2(), Zt2 = Jt2(), st2(et2), Et2.publish("buildDocument"), xe2(), ie2(), (function() {
          Et2.publish("putAdditionalObjects");
          for (var t4 = 0; t4 < nt2.length; t4++) {
            var e4 = nt2[t4];
            Xt2(e4.objId, true), ct2(e4.content), ct2("endobj");
          }
          Et2.publish("postPutAdditionalObjects");
        })(), t3 = [], (function() {
          for (var t4 in Pt2) Pt2.hasOwnProperty(t4) && (false === g2 || true === g2 && m2.hasOwnProperty(t4)) && ae2(Pt2[t4]);
        })(), (function() {
          var t4;
          for (t4 in Ct2) Ct2.hasOwnProperty(t4) && ue2(Ct2[t4]);
        })(), (function() {
          for (var t4 in Dt2) Dt2.hasOwnProperty(t4) && oe2(Dt2[t4]);
        })(), (function(t4) {
          var e4;
          for (e4 in It2) It2.hasOwnProperty(e4) && (It2[e4] instanceof F ? se2(It2[e4]) : It2[e4] instanceof I && ce2(It2[e4], t4));
        })(t3), Et2.publish("putResources"), t3.forEach(le2), le2({ resourcesOid: Zt2, objectOid: Number.MAX_SAFE_INTEGER }), Et2.publish("postPutResources"), null !== p2 && (Fe.oid = Yt2(), ct2("<<"), ct2("/Filter /Standard"), ct2("/V " + Fe.v), ct2("/R " + Fe.r), ct2("/U <" + Fe.toHexString(Fe.U) + ">"), ct2("/O <" + Fe.toHexString(Fe.O) + ">"), ct2("/P " + Fe.P), ct2(">>"), ct2("endobj")), we2(), Ne2();
        var e3 = rt2;
        return Ae2(), Le2(), ct2("startxref"), ct2("" + e3), ct2("%%EOF"), st2(it2[K2]), et2.join("\n");
      }, _e = v2.__private__.getBlob = function(t3) {
        return new Blob([lt2(t3)], { type: "application/pdf" });
      }, Pe = v2.output = v2.__private__.output = (Gt2 = function(t3, e3) {
        switch ("string" == typeof (e3 = e3 || {}) ? e3 = { filename: e3 } : e3.filename = e3.filename || "generated.pdf", t3) {
          case void 0:
            return Se();
          case "save":
            v2.save(e3.filename);
            break;
          case "arraybuffer":
            return lt2(Se());
          case "blob":
            return _e(Se());
          case "bloburi":
          case "bloburl":
            if (void 0 !== r.URL && "function" == typeof r.URL.createObjectURL) return r.URL && r.URL.createObjectURL(_e(Se())) || void 0;
            s.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");
            break;
          case "datauristring":
          case "dataurlstring":
            var n2 = "", i3 = Se();
            try {
              n2 = a(i3);
            } catch (m3) {
              n2 = a(unescape(encodeURIComponent(i3)));
            }
            return "data:application/pdf;filename=" + e3.filename + ";base64," + n2;
          case "pdfobjectnewwindow":
            if ("[object Window]" === Object.prototype.toString.call(r)) {
              var o3 = "https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js", c3 = ' integrity="sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==" crossorigin="anonymous"';
              e3.pdfObjectUrl && (o3 = e3.pdfObjectUrl, c3 = "");
              var u3 = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="' + o3 + '"' + c3 + '><\/script><script >PDFObject.embed("' + this.output("dataurlstring") + '", ' + JSON.stringify(e3) + ");<\/script></body></html>", l3 = r.open();
              return null !== l3 && l3.document.write(u3), l3;
            }
            throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");
          case "pdfjsnewwindow":
            if ("[object Window]" === Object.prototype.toString.call(r)) {
              var h3 = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="' + (e3.pdfJsUrl || "examples/PDF.js/web/viewer.html") + "?file=&downloadName=" + e3.filename + '" width="500px" height="400px" /></body></html>', f3 = r.open();
              if (null !== f3) {
                f3.document.write(h3);
                var d3 = this;
                f3.document.documentElement.querySelector("#pdfViewer").onload = function() {
                  f3.document.title = e3.filename, f3.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open(d3.output("bloburl"));
                };
              }
              return f3;
            }
            throw new Error("The option pdfjsnewwindow just works in a browser-environment.");
          case "dataurlnewwindow":
            if ("[object Window]" !== Object.prototype.toString.call(r)) throw new Error("The option dataurlnewwindow just works in a browser-environment.");
            var p3 = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="' + this.output("datauristring", e3) + '"></iframe></body></html>', g3 = r.open();
            if (null !== g3 && (g3.document.write(p3), g3.document.title = e3.filename), g3 || "undefined" == typeof safari) return g3;
            break;
          case "datauri":
          case "dataurl":
            return r.document.location.href = this.output("datauristring", e3);
          default:
            return null;
        }
      }, Gt2.foo = function() {
        try {
          return Gt2.apply(this, arguments);
        } catch (n2) {
          var t3 = n2.stack || "";
          ~t3.indexOf(" at ") && (t3 = t3.split(" at ")[1]);
          var e3 = "Error in function " + t3.split("\n")[0].split("<")[0] + ": " + n2.message;
          if (!r.console) throw new Error(e3);
          r.console.error(e3, n2), r.alert && alert(e3);
        }
      }, Gt2.foo.bar = Gt2, Gt2.foo), ke = function(t3) {
        return true === Array.isArray(Rt2) && Rt2.indexOf(t3) > -1;
      };
      switch (o2) {
        case "pt":
          xt2 = 1;
          break;
        case "mm":
          xt2 = 72 / 25.4;
          break;
        case "cm":
          xt2 = 72 / 2.54;
          break;
        case "in":
          xt2 = 72;
          break;
        case "px":
          xt2 = 1 == ke("px_scaling") ? 0.75 : 96 / 72;
          break;
        case "pc":
        case "em":
          xt2 = 12;
          break;
        case "ex":
          xt2 = 6;
          break;
        default:
          if ("number" != typeof o2) throw new Error("Invalid unit: " + o2);
          xt2 = o2;
      }
      var Fe = null;
      J2(), V2();
      var Ie = v2.__private__.getPageInfo = v2.getPageInfo = function(t3) {
        if (isNaN(t3) || t3 % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfo");
        return { objId: Mt2[t3].objId, pageNumber: t3, pageContext: Mt2[t3] };
      }, je = v2.__private__.getPageInfoByObjId = function(t3) {
        if (isNaN(t3) || t3 % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");
        for (var e3 in Mt2) if (Mt2[e3].objId === t3) break;
        return Ie(e3);
      }, Ce = v2.__private__.getCurrentPageInfo = v2.getCurrentPageInfo = function() {
        return { objId: Mt2[K2].objId, pageNumber: K2, pageContext: Mt2[K2] };
      };
      v2.addPage = function() {
        return ge2.apply(this, arguments), this;
      }, v2.setPage = function() {
        return ve2.apply(this, arguments), st2.call(this, it2[K2]), this;
      }, v2.insertPage = function(t3) {
        return this.addPage(), this.movePage(K2, t3), this;
      }, v2.movePage = function(t3, e3) {
        var r2, n2;
        if (t3 > e3) {
          r2 = it2[t3], n2 = Mt2[t3];
          for (var i3 = t3; i3 > e3; i3--) it2[i3] = it2[i3 - 1], Mt2[i3] = Mt2[i3 - 1];
          it2[e3] = r2, Mt2[e3] = n2, this.setPage(e3);
        } else if (t3 < e3) {
          r2 = it2[t3], n2 = Mt2[t3];
          for (var a2 = t3; a2 < e3; a2++) it2[a2] = it2[a2 + 1], Mt2[a2] = Mt2[a2 + 1];
          it2[e3] = r2, Mt2[e3] = n2, this.setPage(e3);
        }
        return this;
      }, v2.deletePage = function() {
        return me2.apply(this, arguments), this;
      }, v2.__private__.text = v2.text = function(t3, e3, r2, n2, i3) {
        var a2, o3, s2, c3, u3, l3, h3, f3, d3, p3 = (n2 = n2 || {}).scope || this;
        if ("number" == typeof t3 && "number" == typeof e3 && ("string" == typeof r2 || Array.isArray(r2))) {
          var g3 = r2;
          r2 = e3, e3 = t3, t3 = g3;
        }
        if (arguments[3] instanceof Ut2 == 0 ? (s2 = arguments[4], c3 = arguments[5], "object" == typeof (h3 = arguments[3]) && null !== h3 || ("string" == typeof s2 && (c3 = s2, s2 = null), "string" == typeof h3 && (c3 = h3, h3 = null), "number" == typeof h3 && (s2 = h3, h3 = null), n2 = { flags: h3, angle: s2, align: c3 })) : (M2("The transform parameter of text() with a Matrix value"), d3 = i3), isNaN(e3) || isNaN(r2) || null == t3) throw new Error("Invalid arguments passed to jsPDF.text");
        if (0 === t3.length) return p3;
        var v3, b3 = "", y3 = "number" == typeof n2.lineHeightFactor ? n2.lineHeightFactor : Ge, w3 = p3.internal.scaleFactor;
        function N3(t4) {
          return t4 = t4.split("	").join(Array(n2.TabLen || 9).join(" ")), de2(t4, h3);
        }
        function L3(t4) {
          for (var e4, r3 = t4.concat(), n3 = [], i4 = r3.length; i4--; ) "string" == typeof (e4 = r3.shift()) ? n3.push(e4) : Array.isArray(t4) && (1 === e4.length || void 0 === e4[1] && void 0 === e4[2]) ? n3.push(e4[0]) : n3.push([e4[0], e4[1], e4[2]]);
          return n3;
        }
        function A2(t4, e4) {
          var r3;
          if ("string" == typeof t4) r3 = e4(t4)[0];
          else if (Array.isArray(t4)) {
            for (var n3, i4, a3 = t4.concat(), o4 = [], s3 = a3.length; s3--; ) "string" == typeof (n3 = a3.shift()) ? o4.push(e4(n3)[0]) : Array.isArray(n3) && "string" == typeof n3[0] && (i4 = e4(n3[0], n3[1], n3[2]), o4.push([i4[0], i4[1], i4[2]]));
            r3 = o4;
          }
          return r3;
        }
        var S2 = false, _2 = true;
        if ("string" == typeof t3) S2 = true;
        else if (Array.isArray(t3)) {
          var P2 = t3.concat();
          o3 = [];
          for (var F2, I2 = P2.length; I2--; ) ("string" != typeof (F2 = P2.shift()) || Array.isArray(F2) && "string" != typeof F2[0]) && (_2 = false);
          S2 = _2;
        }
        if (false === S2) throw new Error('Type of text must be string or Array. "' + t3 + '" is not recognized.');
        "string" == typeof t3 && (t3 = t3.match(/[\r?\n]/) ? t3.split(/\r\n|\r|\n/g) : [t3]);
        var j2 = ft2 / p3.internal.scaleFactor, C3 = j2 * (y3 - 1);
        switch (n2.baseline) {
          case "bottom":
            r2 -= C3;
            break;
          case "top":
            r2 += j2 - C3;
            break;
          case "hanging":
            r2 += j2 - 2 * C3;
            break;
          case "middle":
            r2 += j2 / 2 - C3;
        }
        if ((l3 = n2.maxWidth || 0) > 0 && ("string" == typeof t3 ? t3 = p3.splitTextToSize(t3, l3) : "[object Array]" === Object.prototype.toString.call(t3) && (t3 = t3.reduce(function(t4, e4) {
          return t4.concat(p3.splitTextToSize(e4, l3));
        }, []))), a2 = { text: t3, x: e3, y: r2, options: n2, mutex: { pdfEscape: de2, activeFontKey: Lt2, fonts: Pt2, activeFontSize: ft2 } }, Et2.publish("preProcessText", a2), t3 = a2.text, s2 = (n2 = a2.options).angle, d3 instanceof Ut2 == 0 && s2 && "number" == typeof s2) {
          s2 *= Math.PI / 180, 0 === n2.rotationDirection && (s2 = -s2), k2 === x2 && (s2 = -s2);
          var O3 = Math.cos(s2), B3 = Math.sin(s2);
          d3 = new Ut2(O3, B3, -B3, O3, 0, 0);
        } else s2 && s2 instanceof Ut2 && (d3 = s2);
        k2 !== x2 || d3 || (d3 = Wt2), void 0 !== (u3 = n2.charSpace || sr) && (b3 += q2(T2(u3)) + " Tc\n", this.setCharSpace(this.getCharSpace() || 0)), void 0 !== (f3 = n2.horizontalScale) && (b3 += q2(100 * f3) + " Tz\n"), n2.lang;
        var E3 = -1, R3 = void 0 !== n2.renderingMode ? n2.renderingMode : n2.stroke, D3 = p3.internal.getCurrentPageInfo().pageContext;
        switch (R3) {
          case 0:
          case false:
          case "fill":
            E3 = 0;
            break;
          case 1:
          case true:
          case "stroke":
            E3 = 1;
            break;
          case 2:
          case "fillThenStroke":
            E3 = 2;
            break;
          case 3:
          case "invisible":
            E3 = 3;
            break;
          case 4:
          case "fillAndAddForClipping":
            E3 = 4;
            break;
          case 5:
          case "strokeAndAddPathForClipping":
            E3 = 5;
            break;
          case 6:
          case "fillThenStrokeAndAddToPathForClipping":
            E3 = 6;
            break;
          case 7:
          case "addToPathForClipping":
            E3 = 7;
        }
        var z3 = void 0 !== D3.usedRenderingMode ? D3.usedRenderingMode : -1;
        -1 !== E3 ? b3 += E3 + " Tr\n" : -1 !== z3 && (b3 += "0 Tr\n"), -1 !== E3 && (D3.usedRenderingMode = E3), c3 = n2.align || "left";
        var U3, H3 = ft2 * y3, W3 = p3.internal.pageSize.getWidth(), V3 = Pt2[Lt2];
        u3 = n2.charSpace || sr, l3 = n2.maxWidth || 0, h3 = Object.assign({ autoencode: true, noBOM: true }, n2.flags);
        var G3 = [], Y3 = function(t4) {
          return p3.getStringUnitWidth(t4, { font: V3, charSpace: u3, fontSize: ft2, doKerning: false }) * ft2 / w3;
        };
        if ("[object Array]" === Object.prototype.toString.call(t3)) {
          var J3;
          o3 = L3(t3), "left" !== c3 && (U3 = o3.map(Y3));
          var X3, K3 = 0;
          if ("right" === c3) {
            e3 -= U3[0], t3 = [], I2 = o3.length;
            for (var $3 = 0; $3 < I2; $3++) 0 === $3 ? (X3 = Qe(e3), J3 = tr(r2)) : (X3 = T2(K3 - U3[$3]), J3 = -H3), t3.push([o3[$3], X3, J3]), K3 = U3[$3];
          } else if ("center" === c3) {
            e3 -= U3[0] / 2, t3 = [], I2 = o3.length;
            for (var Z3 = 0; Z3 < I2; Z3++) 0 === Z3 ? (X3 = Qe(e3), J3 = tr(r2)) : (X3 = T2((K3 - U3[Z3]) / 2), J3 = -H3), t3.push([o3[Z3], X3, J3]), K3 = U3[Z3];
          } else if ("left" === c3) {
            t3 = [], I2 = o3.length;
            for (var Q3 = 0; Q3 < I2; Q3++) t3.push(o3[Q3]);
          } else if ("justify" === c3 && "Identity-H" === V3.encoding) {
            t3 = [], I2 = o3.length, l3 = 0 !== l3 ? l3 : W3;
            let n3 = 0;
            for (var tt3 = 0; tt3 < I2; tt3++) if (J3 = 0 === tt3 ? tr(r2) : -H3, X3 = 0 === tt3 ? Qe(e3) : n3, tt3 < I2 - 1) {
              let e4 = T2((l3 - U3[tt3]) / (o3[tt3].split(" ").length - 1)), r3 = o3[tt3].split(" ");
              t3.push([r3[0] + " ", X3, J3]), n3 = 0;
              for (let i4 = 1; i4 < r3.length; i4++) {
                let a3 = (Y3(r3[i4 - 1] + " " + r3[i4]) - Y3(r3[i4])) * w3 + e4;
                i4 == r3.length - 1 ? t3.push([r3[i4], a3, 0]) : t3.push([r3[i4] + " ", a3, 0]), n3 -= a3;
              }
            } else t3.push([o3[tt3], X3, J3]);
            t3.push(["", n3, 0]);
          } else {
            if ("justify" !== c3) throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');
            for (t3 = [], I2 = o3.length, l3 = 0 !== l3 ? l3 : W3, tt3 = 0; tt3 < I2; tt3++) {
              J3 = 0 === tt3 ? tr(r2) : -H3, X3 = 0 === tt3 ? Qe(e3) : 0;
              const n3 = o3[tt3].split(" ").length - 1, i4 = n3 > 0 ? (l3 - U3[tt3]) / n3 : 0;
              tt3 < I2 - 1 ? G3.push(q2(T2(i4))) : G3.push(0), t3.push([o3[tt3], X3, J3]);
            }
          }
        }
        true === ("boolean" == typeof n2.R2L ? n2.R2L : gt2) && (t3 = A2(t3, function(t4, e4, r3) {
          return [t4.split("").reverse().join(""), e4, r3];
        })), a2 = { text: t3, x: e3, y: r2, options: n2, mutex: { pdfEscape: de2, activeFontKey: Lt2, fonts: Pt2, activeFontSize: ft2 } }, Et2.publish("postProcessText", a2), t3 = a2.text, v3 = a2.mutex.isHex || false;
        var et3 = Pt2[Lt2].encoding;
        "WinAnsiEncoding" !== et3 && "StandardEncoding" !== et3 || (t3 = A2(t3, function(t4, e4, r3) {
          return [N3(t4), e4, r3];
        })), o3 = L3(t3), t3 = [];
        for (var rt3, nt3, it3, at3 = Array.isArray(o3[0]) ? 1 : 0, ot3 = "", st3 = function(t4, e4, r3) {
          var i4 = "";
          return r3 instanceof Ut2 ? (r3 = "number" == typeof n2.angle ? Ht2(r3, new Ut2(1, 0, 0, 1, t4, e4)) : Ht2(new Ut2(1, 0, 0, 1, t4, e4), r3), k2 === x2 && (r3 = Ht2(new Ut2(1, 0, 0, -1, 0, 0), r3)), i4 = r3.join(" ") + " Tm\n") : i4 = q2(t4) + " " + q2(e4) + " Td\n", i4;
        }, ut3 = 0; ut3 < o3.length; ut3++) {
          switch (ot3 = "", at3) {
            case 1:
              it3 = (v3 ? "<" : "(") + o3[ut3][0] + (v3 ? ">" : ")"), rt3 = parseFloat(o3[ut3][1]), nt3 = parseFloat(o3[ut3][2]);
              break;
            case 0:
              it3 = (v3 ? "<" : "(") + o3[ut3] + (v3 ? ">" : ")"), rt3 = Qe(e3), nt3 = tr(r2);
          }
          void 0 !== G3 && void 0 !== G3[ut3] && (ot3 = G3[ut3] + " Tw\n"), 0 === ut3 ? t3.push(ot3 + st3(rt3, nt3, d3) + it3) : 0 === at3 ? t3.push(ot3 + it3) : 1 === at3 && t3.push(ot3 + st3(rt3, nt3, d3) + it3);
        }
        t3 = 0 === at3 ? t3.join(" Tj\nT* ") : t3.join(" Tj\n"), t3 += " Tj\n";
        var lt3 = "BT\n/";
        return lt3 += Lt2 + " " + ft2 + " Tf\n", lt3 += q2(ft2 * y3) + " TL\n", lt3 += ar + "\n", lt3 += b3, lt3 += t3, ct2(lt3 += "ET"), m2[Lt2] = true, p3;
      };
      var Oe = v2.__private__.clip = v2.clip = function(t3) {
        return ct2("evenodd" === t3 ? "W*" : "W"), this;
      };
      v2.clipEvenOdd = function() {
        return Oe("evenodd");
      }, v2.__private__.discardPath = v2.discardPath = function() {
        return ct2("n"), this;
      };
      var Be = v2.__private__.isValidStyle = function(t3) {
        var e3 = false;
        return -1 !== [void 0, null, "S", "D", "F", "DF", "FD", "f", "f*", "B", "B*", "n"].indexOf(t3) && (e3 = true), e3;
      };
      v2.__private__.setDefaultPathOperation = v2.setDefaultPathOperation = function(t3) {
        return Be(t3) && (d2 = t3), this;
      };
      var qe = v2.__private__.getStyle = v2.getStyle = function(t3) {
        var e3 = d2;
        switch (t3) {
          case "D":
          case "S":
            e3 = "S";
            break;
          case "F":
            e3 = "f";
            break;
          case "FD":
          case "DF":
            e3 = "B";
            break;
          case "f":
          case "f*":
          case "B":
          case "B*":
            e3 = t3;
        }
        return e3;
      }, Me = v2.close = function() {
        return ct2("h"), this;
      };
      v2.stroke = function() {
        return ct2("S"), this;
      }, v2.fill = function(t3) {
        return Ee("f", t3), this;
      }, v2.fillEvenOdd = function(t3) {
        return Ee("f*", t3), this;
      }, v2.fillStroke = function(t3) {
        return Ee("B", t3), this;
      }, v2.fillStrokeEvenOdd = function(t3) {
        return Ee("B*", t3), this;
      };
      var Ee = function(t3, e3) {
        "object" == typeof e3 ? Te(e3, t3) : ct2(t3);
      }, Re = function(t3) {
        null === t3 || k2 === x2 && void 0 === t3 || (t3 = qe(t3), ct2(t3));
      };
      function De(t3, e3, r2, n2, i3) {
        var a2 = new I(e3 || this.boundingBox, r2 || this.xStep, n2 || this.yStep, this.gState, i3 || this.matrix);
        a2.stream = this.stream;
        var o3 = t3 + "$$" + this.cloneIndex++ + "$$";
        return Vt2(o3, a2), a2;
      }
      var Te = function(t3, e3) {
        var r2 = jt2[t3.key], n2 = It2[r2];
        if (n2 instanceof F) ct2("q"), ct2(ze(e3)), n2.gState && v2.setGState(n2.gState), ct2(t3.matrix.toString() + " cm"), ct2("/" + r2 + " sh"), ct2("Q");
        else if (n2 instanceof I) {
          var i3 = new Ut2(1, 0, 0, -1, 0, xr());
          t3.matrix && (i3 = i3.multiply(t3.matrix || Wt2), r2 = De.call(n2, t3.key, t3.boundingBox, t3.xStep, t3.yStep, i3).id), ct2("q"), ct2("/Pattern cs"), ct2("/" + r2 + " scn"), n2.gState && v2.setGState(n2.gState), ct2(e3), ct2("Q");
        }
      }, ze = function(t3) {
        switch (t3) {
          case "f":
          case "F":
          case "n":
            return "W n";
          case "f*":
            return "W* n";
          case "B":
          case "S":
            return "W S";
          case "B*":
            return "W* S";
        }
      }, Ue = v2.moveTo = function(t3, e3) {
        return ct2(q2(T2(t3)) + " " + q2(z2(e3)) + " m"), this;
      }, He = v2.lineTo = function(t3, e3) {
        return ct2(q2(T2(t3)) + " " + q2(z2(e3)) + " l"), this;
      }, We = v2.curveTo = function(t3, e3, r2, n2, i3, a2) {
        return ct2([q2(T2(t3)), q2(z2(e3)), q2(T2(r2)), q2(z2(n2)), q2(T2(i3)), q2(z2(a2)), "c"].join(" ")), this;
      };
      v2.__private__.line = v2.line = function(t3, e3, r2, n2, i3) {
        if (isNaN(t3) || isNaN(e3) || isNaN(r2) || isNaN(n2) || !Be(i3)) throw new Error("Invalid arguments passed to jsPDF.line");
        return k2 === L2 ? this.lines([[r2 - t3, n2 - e3]], t3, e3, [1, 1], i3 || "S") : this.lines([[r2 - t3, n2 - e3]], t3, e3, [1, 1]).stroke();
      }, v2.__private__.lines = v2.lines = function(t3, e3, r2, n2, i3, a2) {
        var o3, s2, c3, u3, l3, h3, f3, d3, p3, g3, m3, v3;
        if ("number" == typeof t3 && (v3 = r2, r2 = e3, e3 = t3, t3 = v3), n2 = n2 || [1, 1], a2 = a2 || false, isNaN(e3) || isNaN(r2) || !Array.isArray(t3) || !Array.isArray(n2) || !Be(i3) || "boolean" != typeof a2) throw new Error("Invalid arguments passed to jsPDF.lines");
        for (Ue(e3, r2), o3 = n2[0], s2 = n2[1], u3 = t3.length, g3 = e3, m3 = r2, c3 = 0; c3 < u3; c3++) 2 === (l3 = t3[c3]).length ? (g3 = l3[0] * o3 + g3, m3 = l3[1] * s2 + m3, He(g3, m3)) : (h3 = l3[0] * o3 + g3, f3 = l3[1] * s2 + m3, d3 = l3[2] * o3 + g3, p3 = l3[3] * s2 + m3, g3 = l3[4] * o3 + g3, m3 = l3[5] * s2 + m3, We(h3, f3, d3, p3, g3, m3));
        return a2 && Me(), Re(i3), this;
      }, v2.path = function(t3) {
        for (var e3 = 0; e3 < t3.length; e3++) {
          var r2 = t3[e3], n2 = r2.c;
          switch (r2.op) {
            case "m":
              Ue(n2[0], n2[1]);
              break;
            case "l":
              He(n2[0], n2[1]);
              break;
            case "c":
              We.apply(this, n2);
              break;
            case "h":
              Me();
          }
        }
        return this;
      }, v2.__private__.rect = v2.rect = function(t3, e3, r2, n2, i3) {
        if (isNaN(t3) || isNaN(e3) || isNaN(r2) || isNaN(n2) || !Be(i3)) throw new Error("Invalid arguments passed to jsPDF.rect");
        return k2 === L2 && (n2 = -n2), ct2([q2(T2(t3)), q2(z2(e3)), q2(T2(r2)), q2(T2(n2)), "re"].join(" ")), Re(i3), this;
      }, v2.__private__.triangle = v2.triangle = function(t3, e3, r2, n2, i3, a2, o3) {
        if (isNaN(t3) || isNaN(e3) || isNaN(r2) || isNaN(n2) || isNaN(i3) || isNaN(a2) || !Be(o3)) throw new Error("Invalid arguments passed to jsPDF.triangle");
        return this.lines([[r2 - t3, n2 - e3], [i3 - r2, a2 - n2], [t3 - i3, e3 - a2]], t3, e3, [1, 1], o3, true), this;
      }, v2.__private__.roundedRect = v2.roundedRect = function(t3, e3, r2, n2, i3, a2, o3) {
        if (isNaN(t3) || isNaN(e3) || isNaN(r2) || isNaN(n2) || isNaN(i3) || isNaN(a2) || !Be(o3)) throw new Error("Invalid arguments passed to jsPDF.roundedRect");
        var s2 = 4 / 3 * (Math.SQRT2 - 1);
        return i3 = Math.min(i3, 0.5 * r2), a2 = Math.min(a2, 0.5 * n2), this.lines([[r2 - 2 * i3, 0], [i3 * s2, 0, i3, a2 - a2 * s2, i3, a2], [0, n2 - 2 * a2], [0, a2 * s2, -i3 * s2, a2, -i3, a2], [2 * i3 - r2, 0], [-i3 * s2, 0, -i3, -a2 * s2, -i3, -a2], [0, 2 * a2 - n2], [0, -a2 * s2, i3 * s2, -a2, i3, -a2]], t3 + i3, e3, [1, 1], o3, true), this;
      }, v2.__private__.ellipse = v2.ellipse = function(t3, e3, r2, n2, i3) {
        if (isNaN(t3) || isNaN(e3) || isNaN(r2) || isNaN(n2) || !Be(i3)) throw new Error("Invalid arguments passed to jsPDF.ellipse");
        var a2 = 4 / 3 * (Math.SQRT2 - 1) * r2, o3 = 4 / 3 * (Math.SQRT2 - 1) * n2;
        return Ue(t3 + r2, e3), We(t3 + r2, e3 - o3, t3 + a2, e3 - n2, t3, e3 - n2), We(t3 - a2, e3 - n2, t3 - r2, e3 - o3, t3 - r2, e3), We(t3 - r2, e3 + o3, t3 - a2, e3 + n2, t3, e3 + n2), We(t3 + a2, e3 + n2, t3 + r2, e3 + o3, t3 + r2, e3), Re(i3), this;
      }, v2.__private__.circle = v2.circle = function(t3, e3, r2, n2) {
        if (isNaN(t3) || isNaN(e3) || isNaN(r2) || !Be(n2)) throw new Error("Invalid arguments passed to jsPDF.circle");
        return this.ellipse(t3, e3, r2, r2, n2);
      }, v2.setFont = function(t3, e3, r2) {
        return r2 && (e3 = B2(e3, r2)), Lt2 = ye2(t3, e3, { disableWarning: false }), this;
      };
      var Ve = v2.__private__.getFont = v2.getFont = function() {
        return Pt2[ye2.apply(v2, arguments)];
      };
      v2.__private__.getFontList = v2.getFontList = function() {
        var t3, e3, r2 = {};
        for (t3 in kt2) if (kt2.hasOwnProperty(t3)) for (e3 in r2[t3] = [], kt2[t3]) kt2[t3].hasOwnProperty(e3) && r2[t3].push(e3);
        return r2;
      }, v2.addFont = function(t3, e3, r2, n2, i3) {
        var a2 = ["StandardEncoding", "MacRomanEncoding", "Identity-H", "WinAnsiEncoding"];
        return arguments[3] && -1 !== a2.indexOf(arguments[3]) ? i3 = arguments[3] : arguments[3] && -1 == a2.indexOf(arguments[3]) && (r2 = B2(r2, n2)), fe2.call(this, t3, e3, r2, i3 = i3 || "Identity-H");
      };
      var Ge, Ye = t2.lineWidth || 0.200025, Je = v2.__private__.getLineWidth = v2.getLineWidth = function() {
        return Ye;
      }, Xe = v2.__private__.setLineWidth = v2.setLineWidth = function(t3) {
        return Ye = t3, ct2(q2(T2(t3)) + " w"), this;
      };
      v2.__private__.setLineDash = j.API.setLineDash = j.API.setLineDashPattern = function(t3, e3) {
        if (t3 = t3 || [], e3 = e3 || 0, isNaN(e3) || !Array.isArray(t3)) throw new Error("Invalid arguments passed to jsPDF.setLineDash");
        return t3 = t3.map(function(t4) {
          return q2(T2(t4));
        }).join(" "), e3 = q2(T2(e3)), ct2("[" + t3 + "] " + e3 + " d"), this;
      };
      var Ke = v2.__private__.getLineHeight = v2.getLineHeight = function() {
        return ft2 * Ge;
      };
      v2.__private__.getLineHeight = v2.getLineHeight = function() {
        return ft2 * Ge;
      };
      var $e = v2.__private__.setLineHeightFactor = v2.setLineHeightFactor = function(t3) {
        return "number" == typeof (t3 = t3 || 1.15) && (Ge = t3), this;
      }, Ze = v2.__private__.getLineHeightFactor = v2.getLineHeightFactor = function() {
        return Ge;
      };
      $e(t2.lineHeight);
      var Qe = v2.__private__.getHorizontalCoordinate = function(t3) {
        return T2(t3);
      }, tr = v2.__private__.getVerticalCoordinate = function(t3) {
        return k2 === x2 ? t3 : Mt2[K2].mediaBox.topRightY - Mt2[K2].mediaBox.bottomLeftY - T2(t3);
      }, er = v2.__private__.getHorizontalCoordinateString = v2.getHorizontalCoordinateString = function(t3) {
        return q2(Qe(t3));
      }, rr = v2.__private__.getVerticalCoordinateString = v2.getVerticalCoordinateString = function(t3) {
        return q2(tr(t3));
      }, nr = t2.strokeColor || "0 G";
      v2.__private__.getStrokeColor = v2.getDrawColor = function() {
        return Qt2(nr);
      }, v2.__private__.setStrokeColor = v2.setDrawColor = function(t3, e3, r2, n2) {
        return nr = te2({ ch1: t3, ch2: e3, ch3: r2, ch4: n2, pdfColorType: "draw", precision: 2 }), ct2(nr), this;
      };
      var ir = t2.fillColor || "0 g";
      v2.__private__.getFillColor = v2.getFillColor = function() {
        return Qt2(ir);
      }, v2.__private__.setFillColor = v2.setFillColor = function(t3, e3, r2, n2) {
        return ir = te2({ ch1: t3, ch2: e3, ch3: r2, ch4: n2, pdfColorType: "fill", precision: 2 }), ct2(ir), this;
      };
      var ar = t2.textColor || "0 g", or = v2.__private__.getTextColor = v2.getTextColor = function() {
        return Qt2(ar);
      };
      v2.__private__.setTextColor = v2.setTextColor = function(t3, e3, r2, n2) {
        return ar = te2({ ch1: t3, ch2: e3, ch3: r2, ch4: n2, pdfColorType: "text", precision: 3 }), this;
      };
      var sr = t2.charSpace, cr = v2.__private__.getCharSpace = v2.getCharSpace = function() {
        return parseFloat(sr || 0);
      };
      v2.__private__.setCharSpace = v2.setCharSpace = function(t3) {
        if (isNaN(t3)) throw new Error("Invalid argument passed to jsPDF.setCharSpace");
        return sr = t3, this;
      };
      var ur = 0;
      v2.CapJoinStyles = { 0: 0, butt: 0, but: 0, miter: 0, 1: 1, round: 1, rounded: 1, circle: 1, 2: 2, projecting: 2, project: 2, square: 2, bevel: 2 }, v2.__private__.setLineCap = v2.setLineCap = function(t3) {
        var e3 = v2.CapJoinStyles[t3];
        if (void 0 === e3) throw new Error("Line cap style of '" + t3 + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
        return ur = e3, ct2(e3 + " J"), this;
      };
      var lr = 0;
      v2.__private__.setLineJoin = v2.setLineJoin = function(t3) {
        var e3 = v2.CapJoinStyles[t3];
        if (void 0 === e3) throw new Error("Line join style of '" + t3 + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
        return lr = e3, ct2(e3 + " j"), this;
      }, v2.__private__.setLineMiterLimit = v2.__private__.setMiterLimit = v2.setLineMiterLimit = v2.setMiterLimit = function(t3) {
        if (t3 = t3 || 0, isNaN(t3)) throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");
        return ct2(q2(T2(t3)) + " M"), this;
      }, v2.GState = P, v2.setGState = function(t3) {
        (t3 = "string" == typeof t3 ? Ct2[Ot2[t3]] : hr(null, t3)).equals(Bt2) || (ct2("/" + t3.id + " gs"), Bt2 = t3);
      };
      var hr = function(t3, e3) {
        if (!t3 || !Ot2[t3]) {
          var r2 = false;
          for (var n2 in Ct2) if (Ct2.hasOwnProperty(n2) && Ct2[n2].equals(e3)) {
            r2 = true;
            break;
          }
          if (r2) e3 = Ct2[n2];
          else {
            var i3 = "GS" + (Object.keys(Ct2).length + 1).toString(10);
            Ct2[i3] = e3, e3.id = i3;
          }
          return t3 && (Ot2[t3] = e3.id), Et2.publish("addGState", e3), e3;
        }
      };
      v2.addGState = function(t3, e3) {
        return hr(t3, e3), this;
      }, v2.saveGraphicsState = function() {
        return ct2("q"), Ft2.push({ key: Lt2, size: ft2, color: ar }), this;
      }, v2.restoreGraphicsState = function() {
        ct2("Q");
        var t3 = Ft2.pop();
        return Lt2 = t3.key, ft2 = t3.size, ar = t3.color, Bt2 = null, this;
      }, v2.setCurrentTransformationMatrix = function(t3) {
        return ct2(t3.toString() + " cm"), this;
      }, v2.comment = function(t3) {
        return ct2("#" + t3), this;
      };
      var fr = function(t3, e3) {
        var r2 = t3 || 0;
        Object.defineProperty(this, "x", { enumerable: true, get: function() {
          return r2;
        }, set: function(t4) {
          isNaN(t4) || (r2 = parseFloat(t4));
        } });
        var n2 = e3 || 0;
        Object.defineProperty(this, "y", { enumerable: true, get: function() {
          return n2;
        }, set: function(t4) {
          isNaN(t4) || (n2 = parseFloat(t4));
        } });
        var i3 = "pt";
        return Object.defineProperty(this, "type", { enumerable: true, get: function() {
          return i3;
        }, set: function(t4) {
          i3 = t4.toString();
        } }), this;
      }, dr = function(t3, e3, r2, n2) {
        fr.call(this, t3, e3), this.type = "rect";
        var i3 = r2 || 0;
        Object.defineProperty(this, "w", { enumerable: true, get: function() {
          return i3;
        }, set: function(t4) {
          isNaN(t4) || (i3 = parseFloat(t4));
        } });
        var a2 = n2 || 0;
        return Object.defineProperty(this, "h", { enumerable: true, get: function() {
          return a2;
        }, set: function(t4) {
          isNaN(t4) || (a2 = parseFloat(t4));
        } }), this;
      }, pr = function() {
        this.page = qt2, this.currentPage = K2, this.pages = it2.slice(0), this.pagesContext = Mt2.slice(0), this.x = At2, this.y = St2, this.matrix = _t2, this.width = vr(K2), this.height = yr(K2), this.outputDestination = ot2, this.id = "", this.objectNumber = -1;
      };
      pr.prototype.restore = function() {
        qt2 = this.page, K2 = this.currentPage, Mt2 = this.pagesContext, it2 = this.pages, At2 = this.x, St2 = this.y, _t2 = this.matrix, br(K2, this.width), wr(K2, this.height), ot2 = this.outputDestination;
      };
      var gr = function(t3, e3, r2, n2, i3) {
        zt2.push(new pr()), qt2 = K2 = 0, it2 = [], At2 = t3, St2 = e3, _t2 = i3, pe2([r2, n2]);
      };
      for (var mr in v2.beginFormObject = function(t3, e3, r2, n2, i3) {
        return gr(t3, e3, r2, n2, i3), this;
      }, v2.endFormObject = function(t3) {
        return (function(t4) {
          if (Tt2[t4]) zt2.pop().restore();
          else {
            var e3 = new pr(), r2 = "Xo" + (Object.keys(Dt2).length + 1).toString(10);
            e3.id = r2, Tt2[t4] = r2, Dt2[r2] = e3, Et2.publish("addFormObject", e3), zt2.pop().restore();
          }
        })(t3), this;
      }, v2.doFormObject = function(t3, e3) {
        var r2 = Dt2[Tt2[t3]];
        return ct2("q"), ct2(e3.toString() + " cm"), ct2("/" + r2.id + " Do"), ct2("Q"), this;
      }, v2.getFormObject = function(t3) {
        var e3 = Dt2[Tt2[t3]];
        return { x: e3.x, y: e3.y, width: e3.width, height: e3.height, matrix: e3.matrix };
      }, v2.save = function(t3, e3) {
        t3 = t3 || "generated.pdf", (e3 = e3 || {}).returnPromise = e3.returnPromise || false;
        var r2 = require$$2, n2 = Buffer.from(lt2(Se()));
        if (false !== e3.returnPromise) return new Promise(function(e4, i3) {
          r2.writeFile(t3, n2, function(t4) {
            t4 ? i3(t4) : e4();
          });
        });
        r2.writeFileSync(t3, n2);
      }, j.API) j.API.hasOwnProperty(mr) && ("events" === mr && j.API.events.length ? (function(t3, e3) {
        var r2, n2, i3;
        for (i3 = e3.length - 1; -1 !== i3; i3--) r2 = e3[i3][0], n2 = e3[i3][1], t3.subscribe.apply(t3, [r2].concat("function" == typeof n2 ? [n2] : n2));
      })(Et2, j.API.events) : v2[mr] = j.API[mr]);
      function vr(t3) {
        return Mt2[t3].mediaBox.topRightX - Mt2[t3].mediaBox.bottomLeftX;
      }
      function br(t3, e3) {
        Mt2[t3].mediaBox.topRightX = e3 + Mt2[t3].mediaBox.bottomLeftX;
      }
      function yr(t3) {
        return Mt2[t3].mediaBox.topRightY - Mt2[t3].mediaBox.bottomLeftY;
      }
      function wr(t3, e3) {
        Mt2[t3].mediaBox.topRightY = e3 + Mt2[t3].mediaBox.bottomLeftY;
      }
      var Nr = v2.getPageWidth = function(t3) {
        return vr(t3 = t3 || K2) / xt2;
      }, Lr = v2.setPageWidth = function(t3, e3) {
        br(t3, e3 * xt2);
      }, xr = v2.getPageHeight = function(t3) {
        return yr(t3 = t3 || K2) / xt2;
      }, Ar = v2.setPageHeight = function(t3, e3) {
        wr(t3, e3 * xt2);
      };
      return v2.internal = { pdfEscape: de2, getStyle: qe, getFont: Ve, getFontSize: pt2, getCharSpace: cr, getTextColor: or, getLineHeight: Ke, getLineHeightFactor: Ze, getLineWidth: Je, write: ut2, getHorizontalCoordinate: Qe, getVerticalCoordinate: tr, getCoordinateString: er, getVerticalCoordinateString: rr, collections: {}, newObject: Yt2, newAdditionalObject: Kt2, newObjectDeferred: Jt2, newObjectDeferredBegin: Xt2, getFilters: ee2, putStream: re2, events: Et2, scaleFactor: xt2, pageSize: { getWidth: function() {
        return Nr(K2);
      }, setWidth: function(t3) {
        Lr(K2, t3);
      }, getHeight: function() {
        return xr(K2);
      }, setHeight: function(t3) {
        Ar(K2, t3);
      } }, encryptionOptions: p2, encryption: Fe, getEncryptor: function(t3) {
        return null !== p2 ? Fe.encryptor(t3, 0) : function(t4) {
          return t4;
        };
      }, output: Pe, getNumberOfPages: be2, get pages() {
        return it2;
      }, out: ct2, f2: R2, f3: D2, getPageInfo: Ie, getPageInfoByObjId: je, getCurrentPageInfo: Ce, getPDFVersion: y2, Point: fr, Rectangle: dr, Matrix: Ut2, hasHotfix: ke }, Object.defineProperty(v2.internal.pageSize, "width", { get: function() {
        return Nr(K2);
      }, set: function(t3) {
        Lr(K2, t3);
      }, enumerable: true, configurable: true }), Object.defineProperty(v2.internal.pageSize, "height", { get: function() {
        return xr(K2);
      }, set: function(t3) {
        Ar(K2, t3);
      }, enumerable: true, configurable: true }), (function(t3) {
        for (var e3 = 0, r2 = ht2.length; e3 < r2; e3++) {
          var n2 = fe2.call(this, t3[e3][0], t3[e3][1], t3[e3][2], ht2[e3][3], true);
          false === g2 && (m2[n2] = true);
          var i3 = t3[e3][0].split("-");
          he2({ id: n2, fontName: i3[0], fontStyle: i3[1] || "" });
        }
        Et2.publish("addFonts", { fonts: Pt2, dictionary: kt2 });
      }).call(v2, ht2), Lt2 = "F1", ge2(c2, i2), Et2.publish("initialized"), v2;
    }
    A.prototype.lsbFirstWord = function(t2) {
      return String.fromCharCode(255 & t2, t2 >> 8 & 255, t2 >> 16 & 255, t2 >> 24 & 255);
    }, A.prototype.toHexString = function(t2) {
      return t2.split("").map(function(t3) {
        return ("0" + (255 & t3.charCodeAt(0)).toString(16)).slice(-2);
      }).join("");
    }, A.prototype.hexToBytes = function(t2) {
      for (var e2 = [], r2 = 0; r2 < t2.length; r2 += 2) e2.push(String.fromCharCode(parseInt(t2.substr(r2, 2), 16)));
      return e2.join("");
    }, A.prototype.processOwnerPassword = function(t2, e2) {
      return L(y(e2).substr(0, 5), t2);
    }, A.prototype.encryptor = function(t2, e2) {
      let r2 = y(this.encryptionKey + String.fromCharCode(255 & t2, t2 >> 8 & 255, t2 >> 16 & 255, 255 & e2, e2 >> 8 & 255)).substr(0, 10);
      return function(t3) {
        return L(r2, t3);
      };
    }, P.prototype.equals = function(t2) {
      var e2, r2 = "id,objectNumber,equals";
      if (!t2 || typeof t2 != typeof this) return false;
      var n2 = 0;
      for (e2 in this) if (!(r2.indexOf(e2) >= 0)) {
        if (this.hasOwnProperty(e2) && !t2.hasOwnProperty(e2)) return false;
        if (this[e2] !== t2[e2]) return false;
        n2++;
      }
      for (e2 in t2) t2.hasOwnProperty(e2) && r2.indexOf(e2) < 0 && n2--;
      return 0 === n2;
    }, j.API = { events: [] }, j.version = "4.0.0";
    var C = j.API, O = 1, B = function(t2) {
      return t2.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
    }, q = function(t2) {
      return t2.replace(/\\\\/g, "\\").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
    }, M = function(t2) {
      return t2.toFixed(2);
    }, E = function(t2) {
      return t2.toFixed(5);
    };
    C.__acroform__ = {};
    var R = function(t2, e2) {
      t2.prototype = Object.create(e2.prototype), t2.prototype.constructor = t2;
    }, D = function(t2) {
      return t2 * O;
    }, T = function(t2) {
      var e2 = new rt(), r2 = mt.internal.getHeight(t2) || 0, n2 = mt.internal.getWidth(t2) || 0;
      return e2.BBox = [0, 0, Number(M(n2)), Number(M(r2))], e2;
    }, z = C.__acroform__.setBit = function(t2, e2) {
      if (t2 = t2 || 0, e2 = e2 || 0, isNaN(t2) || isNaN(e2)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");
      return t2 | 1 << e2;
    }, U = C.__acroform__.clearBit = function(t2, e2) {
      if (t2 = t2 || 0, e2 = e2 || 0, isNaN(t2) || isNaN(e2)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");
      return t2 & ~(1 << e2);
    }, H = C.__acroform__.getBit = function(t2, e2) {
      if (isNaN(t2) || isNaN(e2)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");
      return t2 & 1 << e2 ? 1 : 0;
    }, W = C.__acroform__.getBitForPdf = function(t2, e2) {
      if (isNaN(t2) || isNaN(e2)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");
      return H(t2, e2 - 1);
    }, V = C.__acroform__.setBitForPdf = function(t2, e2) {
      if (isNaN(t2) || isNaN(e2)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");
      return z(t2, e2 - 1);
    }, G = C.__acroform__.clearBitForPdf = function(t2, e2) {
      if (isNaN(t2) || isNaN(e2)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");
      return U(t2, e2 - 1);
    }, Y = C.__acroform__.calculateCoordinates = function(t2, e2) {
      var r2 = e2.internal.getHorizontalCoordinate, n2 = e2.internal.getVerticalCoordinate, i2 = t2[0], a2 = t2[1], o2 = t2[2], s2 = t2[3], c2 = {};
      return c2.lowerLeft_X = r2(i2) || 0, c2.lowerLeft_Y = n2(a2 + s2) || 0, c2.upperRight_X = r2(i2 + o2) || 0, c2.upperRight_Y = n2(a2) || 0, [Number(M(c2.lowerLeft_X)), Number(M(c2.lowerLeft_Y)), Number(M(c2.upperRight_X)), Number(M(c2.upperRight_Y))];
    }, J = function(t2) {
      if (t2.appearanceStreamContent) return t2.appearanceStreamContent;
      if (t2.V || t2.DV) {
        var e2 = [], r2 = t2._V || t2.DV, n2 = X(t2, r2), i2 = t2.scope.internal.getFont(t2.fontName, t2.fontStyle).id;
        e2.push("/Tx BMC"), e2.push("q"), e2.push("BT"), e2.push(t2.scope.__private__.encodeColorString(t2.color)), e2.push("/" + i2 + " " + M(n2.fontSize) + " Tf"), e2.push("1 0 0 1 0 0 Tm"), e2.push(n2.text), e2.push("ET"), e2.push("Q"), e2.push("EMC");
        var a2 = T(t2);
        return a2.scope = t2.scope, a2.stream = e2.join("\n"), a2;
      }
    }, X = function(t2, e2) {
      var r2 = 0 === t2.fontSize ? t2.maxFontSize : t2.fontSize, n2 = { text: "", fontSize: "" }, i2 = (e2 = ")" == (e2 = "(" == e2.substr(0, 1) ? e2.substr(1) : e2).substr(e2.length - 1) ? e2.substr(0, e2.length - 1) : e2).split(" ");
      i2 = t2.multiline ? i2.map((t3) => t3.split("\n")) : i2.map((t3) => [t3]);
      var a2 = r2, o2 = mt.internal.getHeight(t2) || 0;
      o2 = o2 < 0 ? -o2 : o2;
      var s2 = mt.internal.getWidth(t2) || 0;
      s2 = s2 < 0 ? -s2 : s2;
      var c2 = function(e3, r3, n3) {
        if (e3 + 1 < i2.length) {
          var a3 = r3 + " " + i2[e3 + 1][0];
          return K(a3, t2, n3).width <= s2 - 4;
        }
        return false;
      };
      a2++;
      t: for (; a2 > 0; ) {
        e2 = "", a2--;
        var u2, l2, h2 = K("3", t2, a2).height, f2 = t2.multiline ? o2 - a2 : (o2 - h2) / 2, d2 = f2 += 2, p2 = 0, g2 = 0, m2 = 0;
        if (a2 <= 0) {
          e2 = "(...) Tj\n", e2 += "% Width of Text: " + K(e2, t2, a2 = 12).width + ", FieldWidth:" + s2 + "\n";
          break;
        }
        var v2 = "", b2 = 0;
        e: for (var y2 = 0; y2 < i2.length; y2++) if (i2.hasOwnProperty(y2)) {
          let r3 = false;
          if (1 !== i2[y2].length && m2 !== i2[y2].length - 1) {
            if ((h2 + 2) * (b2 + 2) + 2 > o2) continue t;
            v2 += i2[y2][m2], r3 = true, g2 = y2, y2--;
          } else {
            v2 = " " == (v2 += i2[y2][m2] + " ").substr(v2.length - 1) ? v2.substr(0, v2.length - 1) : v2;
            var w2 = parseInt(y2), N2 = c2(w2, v2, a2), L2 = y2 >= i2.length - 1;
            if (N2 && !L2) {
              v2 += " ", m2 = 0;
              continue;
            }
            if (N2 || L2) {
              if (L2) g2 = w2;
              else if (t2.multiline && (h2 + 2) * (b2 + 2) + 2 > o2) continue t;
            } else {
              if (!t2.multiline) continue t;
              if ((h2 + 2) * (b2 + 2) + 2 > o2) continue t;
              g2 = w2;
            }
          }
          for (var x2 = "", A2 = p2; A2 <= g2; A2++) {
            var S2 = i2[A2];
            if (t2.multiline) {
              if (A2 === g2) {
                x2 += S2[m2] + " ", m2 = (m2 + 1) % S2.length;
                continue;
              }
              if (A2 === p2) {
                x2 += S2[S2.length - 1] + " ";
                continue;
              }
            }
            x2 += S2[0] + " ";
          }
          switch (x2 = " " == x2.substr(x2.length - 1) ? x2.substr(0, x2.length - 1) : x2, l2 = K(x2, t2, a2).width, t2.textAlign) {
            case "right":
              u2 = s2 - l2 - 2;
              break;
            case "center":
              u2 = (s2 - l2) / 2;
              break;
            default:
              u2 = 2;
          }
          e2 += M(u2) + " " + M(d2) + " Td\n", e2 += "(" + B(x2) + ") Tj\n", e2 += -M(u2) + " 0 Td\n", d2 = -(a2 + 2), l2 = 0, p2 = r3 ? g2 : g2 + 1, b2++, v2 = "";
          continue e;
        }
        break;
      }
      return n2.text = e2, n2.fontSize = a2, n2;
    }, K = function(t2, e2, r2) {
      var n2 = e2.scope.internal.getFont(e2.fontName, e2.fontStyle), i2 = e2.scope.getStringUnitWidth(t2, { font: n2, fontSize: parseFloat(r2), charSpace: 0 }) * parseFloat(r2);
      return { height: e2.scope.getStringUnitWidth("3", { font: n2, fontSize: parseFloat(r2), charSpace: 0 }) * parseFloat(r2) * 1.5, width: i2 };
    }, $ = { fields: [], xForms: [], acroFormDictionaryRoot: null, printedOut: false, internal: null, isInitialized: false }, Z = function(t2, e2) {
      var r2 = { type: "reference", object: t2 };
      void 0 === e2.internal.getPageInfo(t2.page).pageContext.annotations.find(function(t3) {
        return t3.type === r2.type && t3.object === r2.object;
      }) && e2.internal.getPageInfo(t2.page).pageContext.annotations.push(r2);
    }, Q = C.__acroform__.arrayToPdfArray = function(t2, e2, r2) {
      var n2 = function(t3) {
        return t3;
      };
      if (Array.isArray(t2)) {
        for (var i2 = "[", a2 = 0; a2 < t2.length; a2++) switch (0 !== a2 && (i2 += " "), typeof t2[a2]) {
          case "boolean":
          case "number":
          case "object":
            i2 += t2[a2].toString();
            break;
          case "string":
            "/" !== t2[a2].substr(0, 1) ? (void 0 !== e2 && r2 && (n2 = r2.internal.getEncryptor(e2)), i2 += "(" + B(n2(t2[a2].toString())) + ")") : i2 += t2[a2].toString();
        }
        return i2 + "]";
      }
      throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray");
    }, tt = function(t2, e2, r2) {
      var n2 = function(t3) {
        return t3;
      };
      return void 0 !== e2 && r2 && (n2 = r2.internal.getEncryptor(e2)), (t2 = t2 || "").toString(), "(" + B(n2(t2)) + ")";
    }, et = function() {
      this._objId = void 0, this._scope = void 0, Object.defineProperty(this, "objId", { get: function() {
        if (void 0 === this._objId) {
          if (void 0 === this.scope) return;
          this._objId = this.scope.internal.newObjectDeferred();
        }
        return this._objId;
      }, set: function(t2) {
        this._objId = t2;
      } }), Object.defineProperty(this, "scope", { value: this._scope, writable: true });
    };
    et.prototype.toString = function() {
      return this.objId + " 0 R";
    }, et.prototype.putStream = function() {
      var t2 = this.getKeyValueListForStream();
      this.scope.internal.putStream({ data: this.stream, additionalKeyValues: t2, objectId: this.objId }), this.scope.internal.out("endobj");
    }, et.prototype.getKeyValueListForStream = function() {
      var t2 = [], e2 = Object.getOwnPropertyNames(this).filter(function(t3) {
        return "content" != t3 && "appearanceStreamContent" != t3 && "scope" != t3 && "objId" != t3 && "_" != t3.substring(0, 1);
      });
      for (var r2 in e2) if (false === Object.getOwnPropertyDescriptor(this, e2[r2]).configurable) {
        var n2 = e2[r2], i2 = this[n2];
        i2 && (Array.isArray(i2) ? t2.push({ key: n2, value: Q(i2, this.objId, this.scope) }) : i2 instanceof et ? (i2.scope = this.scope, t2.push({ key: n2, value: i2.objId + " 0 R" })) : "function" != typeof i2 && t2.push({ key: n2, value: i2 }));
      }
      return t2;
    };
    var rt = function() {
      et.call(this), Object.defineProperty(this, "Type", { value: "/XObject", configurable: false, writable: true }), Object.defineProperty(this, "Subtype", { value: "/Form", configurable: false, writable: true }), Object.defineProperty(this, "FormType", { value: 1, configurable: false, writable: true });
      var t2, e2 = [];
      Object.defineProperty(this, "BBox", { configurable: false, get: function() {
        return e2;
      }, set: function(t3) {
        e2 = t3;
      } }), Object.defineProperty(this, "Resources", { value: "2 0 R", configurable: false, writable: true }), Object.defineProperty(this, "stream", { enumerable: false, configurable: true, set: function(e3) {
        t2 = e3.trim();
      }, get: function() {
        return t2 || null;
      } });
    };
    R(rt, et);
    var nt = function() {
      et.call(this);
      var t2, e2 = [];
      Object.defineProperty(this, "Kids", { enumerable: false, configurable: true, get: function() {
        return e2.length > 0 ? e2 : void 0;
      } }), Object.defineProperty(this, "Fields", { enumerable: false, configurable: false, get: function() {
        return e2;
      } }), Object.defineProperty(this, "DA", { enumerable: false, configurable: false, get: function() {
        if (t2) {
          var e3 = function(t3) {
            return t3;
          };
          return this.scope && (e3 = this.scope.internal.getEncryptor(this.objId)), "(" + B(e3(t2)) + ")";
        }
      }, set: function(e3) {
        t2 = e3;
      } });
    };
    R(nt, et);
    var it = function() {
      et.call(this);
      var t2 = 4;
      Object.defineProperty(this, "F", { enumerable: false, configurable: false, get: function() {
        return t2;
      }, set: function(e3) {
        if (isNaN(e3)) throw new Error('Invalid value "' + e3 + '" for attribute F supplied.');
        t2 = e3;
      } }), Object.defineProperty(this, "showWhenPrinted", { enumerable: true, configurable: true, get: function() {
        return Boolean(W(t2, 3));
      }, set: function(e3) {
        true === Boolean(e3) ? this.F = V(t2, 3) : this.F = G(t2, 3);
      } });
      var e2 = 0;
      Object.defineProperty(this, "Ff", { enumerable: false, configurable: false, get: function() {
        return e2;
      }, set: function(t3) {
        if (isNaN(t3)) throw new Error('Invalid value "' + t3 + '" for attribute Ff supplied.');
        e2 = t3;
      } });
      var r2 = [];
      Object.defineProperty(this, "Rect", { enumerable: false, configurable: false, get: function() {
        if (0 !== r2.length) return r2;
      }, set: function(t3) {
        r2 = void 0 !== t3 ? t3 : [];
      } }), Object.defineProperty(this, "x", { enumerable: true, configurable: true, get: function() {
        return !r2 || isNaN(r2[0]) ? 0 : r2[0];
      }, set: function(t3) {
        r2[0] = t3;
      } }), Object.defineProperty(this, "y", { enumerable: true, configurable: true, get: function() {
        return !r2 || isNaN(r2[1]) ? 0 : r2[1];
      }, set: function(t3) {
        r2[1] = t3;
      } }), Object.defineProperty(this, "width", { enumerable: true, configurable: true, get: function() {
        return !r2 || isNaN(r2[2]) ? 0 : r2[2];
      }, set: function(t3) {
        r2[2] = t3;
      } }), Object.defineProperty(this, "height", { enumerable: true, configurable: true, get: function() {
        return !r2 || isNaN(r2[3]) ? 0 : r2[3];
      }, set: function(t3) {
        r2[3] = t3;
      } });
      var n2 = "";
      Object.defineProperty(this, "FT", { enumerable: true, configurable: false, get: function() {
        return n2;
      }, set: function(t3) {
        switch (t3) {
          case "/Btn":
          case "/Tx":
          case "/Ch":
          case "/Sig":
            n2 = t3;
            break;
          default:
            throw new Error('Invalid value "' + t3 + '" for attribute FT supplied.');
        }
      } });
      var i2 = null;
      Object.defineProperty(this, "T", { enumerable: true, configurable: false, get: function() {
        if (!i2 || i2.length < 1) {
          if (this instanceof ft) return;
          i2 = "FieldObject" + it.FieldNum++;
        }
        var t3 = function(t4) {
          return t4;
        };
        return this.scope && (t3 = this.scope.internal.getEncryptor(this.objId)), "(" + B(t3(i2)) + ")";
      }, set: function(t3) {
        i2 = t3.toString();
      } }), Object.defineProperty(this, "fieldName", { configurable: true, enumerable: true, get: function() {
        return i2;
      }, set: function(t3) {
        i2 = t3;
      } });
      var a2 = "helvetica";
      Object.defineProperty(this, "fontName", { enumerable: true, configurable: true, get: function() {
        return a2;
      }, set: function(t3) {
        a2 = t3;
      } });
      var o2 = "normal";
      Object.defineProperty(this, "fontStyle", { enumerable: true, configurable: true, get: function() {
        return o2;
      }, set: function(t3) {
        o2 = t3;
      } });
      var s2 = 0;
      Object.defineProperty(this, "fontSize", { enumerable: true, configurable: true, get: function() {
        return s2;
      }, set: function(t3) {
        s2 = t3;
      } });
      var c2 = void 0;
      Object.defineProperty(this, "maxFontSize", { enumerable: true, configurable: true, get: function() {
        return void 0 === c2 ? 50 / O : c2;
      }, set: function(t3) {
        c2 = t3;
      } });
      var u2 = "black";
      Object.defineProperty(this, "color", { enumerable: true, configurable: true, get: function() {
        return u2;
      }, set: function(t3) {
        u2 = t3;
      } });
      var l2 = "/F1 0 Tf 0 g";
      Object.defineProperty(this, "DA", { enumerable: true, configurable: false, get: function() {
        if (!(!l2 || this instanceof ft || this instanceof pt)) return tt(l2, this.objId, this.scope);
      }, set: function(t3) {
        t3 = t3.toString(), l2 = t3;
      } });
      var h2 = null;
      Object.defineProperty(this, "DV", { enumerable: false, configurable: false, get: function() {
        if (h2) return this instanceof ut == 0 ? tt(h2, this.objId, this.scope) : h2;
      }, set: function(t3) {
        t3 = t3.toString(), h2 = this instanceof ut == 0 ? "(" === t3.substr(0, 1) ? q(t3.substr(1, t3.length - 2)) : q(t3) : t3;
      } }), Object.defineProperty(this, "defaultValue", { enumerable: true, configurable: true, get: function() {
        return this instanceof ut == 1 ? q(h2.substr(1, h2.length - 1)) : h2;
      }, set: function(t3) {
        t3 = t3.toString(), h2 = this instanceof ut == 1 ? "/" + t3 : t3;
      } });
      var f2 = null;
      Object.defineProperty(this, "_V", { enumerable: false, configurable: false, get: function() {
        if (f2) return f2;
      }, set: function(t3) {
        this.V = t3;
      } }), Object.defineProperty(this, "V", { enumerable: false, configurable: false, get: function() {
        if (f2) return this instanceof ut == 0 ? tt(f2, this.objId, this.scope) : f2;
      }, set: function(t3) {
        t3 = t3.toString(), f2 = this instanceof ut == 0 ? "(" === t3.substr(0, 1) ? q(t3.substr(1, t3.length - 2)) : q(t3) : t3;
      } }), Object.defineProperty(this, "value", { enumerable: true, configurable: true, get: function() {
        return this instanceof ut == 1 ? q(f2.substr(1, f2.length - 1)) : f2;
      }, set: function(t3) {
        t3 = t3.toString(), f2 = this instanceof ut == 1 ? "/" + t3 : t3;
      } }), Object.defineProperty(this, "hasAnnotation", { enumerable: true, configurable: true, get: function() {
        return this.Rect;
      } }), Object.defineProperty(this, "Type", { enumerable: true, configurable: false, get: function() {
        return this.hasAnnotation ? "/Annot" : null;
      } }), Object.defineProperty(this, "Subtype", { enumerable: true, configurable: false, get: function() {
        return this.hasAnnotation ? "/Widget" : null;
      } });
      var d2, p2 = false;
      Object.defineProperty(this, "hasAppearanceStream", { enumerable: true, configurable: true, get: function() {
        return p2;
      }, set: function(t3) {
        t3 = Boolean(t3), p2 = t3;
      } }), Object.defineProperty(this, "page", { enumerable: true, configurable: true, get: function() {
        if (d2) return d2;
      }, set: function(t3) {
        d2 = t3;
      } }), Object.defineProperty(this, "readOnly", { enumerable: true, configurable: true, get: function() {
        return Boolean(W(this.Ff, 1));
      }, set: function(t3) {
        true === Boolean(t3) ? this.Ff = V(this.Ff, 1) : this.Ff = G(this.Ff, 1);
      } }), Object.defineProperty(this, "required", { enumerable: true, configurable: true, get: function() {
        return Boolean(W(this.Ff, 2));
      }, set: function(t3) {
        true === Boolean(t3) ? this.Ff = V(this.Ff, 2) : this.Ff = G(this.Ff, 2);
      } }), Object.defineProperty(this, "noExport", { enumerable: true, configurable: true, get: function() {
        return Boolean(W(this.Ff, 3));
      }, set: function(t3) {
        true === Boolean(t3) ? this.Ff = V(this.Ff, 3) : this.Ff = G(this.Ff, 3);
      } });
      var g2 = null;
      Object.defineProperty(this, "Q", { enumerable: true, configurable: false, get: function() {
        if (null !== g2) return g2;
      }, set: function(t3) {
        if (-1 === [0, 1, 2].indexOf(t3)) throw new Error('Invalid value "' + t3 + '" for attribute Q supplied.');
        g2 = t3;
      } }), Object.defineProperty(this, "textAlign", { get: function() {
        var t3;
        switch (g2) {
          case 0:
          default:
            t3 = "left";
            break;
          case 1:
            t3 = "center";
            break;
          case 2:
            t3 = "right";
        }
        return t3;
      }, configurable: true, enumerable: true, set: function(t3) {
        switch (t3) {
          case "right":
          case 2:
            g2 = 2;
            break;
          case "center":
          case 1:
            g2 = 1;
            break;
          default:
            g2 = 0;
        }
      } });
    };
    R(it, et);
    var at = function() {
      it.call(this), this.FT = "/Ch", this.V = "()", this.fontName = "zapfdingbats";
      var t2 = 0;
      Object.defineProperty(this, "TI", { enumerable: true, configurable: false, get: function() {
        return t2;
      }, set: function(e3) {
        t2 = e3;
      } }), Object.defineProperty(this, "topIndex", { enumerable: true, configurable: true, get: function() {
        return t2;
      }, set: function(e3) {
        t2 = e3;
      } });
      var e2 = [];
      Object.defineProperty(this, "Opt", { enumerable: true, configurable: false, get: function() {
        return Q(e2, this.objId, this.scope);
      }, set: function(t3) {
        var r2, n2;
        n2 = [], "string" == typeof (r2 = t3) && (n2 = (function(t4, e3, r3) {
          r3 || (r3 = 1);
          for (var n3, i2 = []; n3 = e3.exec(t4); ) i2.push(n3[r3]);
          return i2;
        })(r2, /\((.*?)\)/g)), e2 = n2;
      } }), this.getOptions = function() {
        return e2;
      }, this.setOptions = function(t3) {
        e2 = t3, this.sort && e2.sort();
      }, this.addOption = function(t3) {
        t3 = (t3 = t3 || "").toString(), e2.push(t3), this.sort && e2.sort();
      }, this.removeOption = function(t3, r2) {
        for (r2 = r2 || false, t3 = (t3 = t3 || "").toString(); -1 !== e2.indexOf(t3) && (e2.splice(e2.indexOf(t3), 1), false !== r2); ) ;
      }, Object.defineProperty(this, "combo", { enumerable: true, configurable: true, get: function() {
        return Boolean(W(this.Ff, 18));
      }, set: function(t3) {
        true === Boolean(t3) ? this.Ff = V(this.Ff, 18) : this.Ff = G(this.Ff, 18);
      } }), Object.defineProperty(this, "edit", { enumerable: true, configurable: true, get: function() {
        return Boolean(W(this.Ff, 19));
      }, set: function(t3) {
        true === this.combo && (true === Boolean(t3) ? this.Ff = V(this.Ff, 19) : this.Ff = G(this.Ff, 19));
      } }), Object.defineProperty(this, "sort", { enumerable: true, configurable: true, get: function() {
        return Boolean(W(this.Ff, 20));
      }, set: function(t3) {
        true === Boolean(t3) ? (this.Ff = V(this.Ff, 20), e2.sort()) : this.Ff = G(this.Ff, 20);
      } }), Object.defineProperty(this, "multiSelect", { enumerable: true, configurable: true, get: function() {
        return Boolean(W(this.Ff, 22));
      }, set: function(t3) {
        true === Boolean(t3) ? this.Ff = V(this.Ff, 22) : this.Ff = G(this.Ff, 22);
      } }), Object.defineProperty(this, "doNotSpellCheck", { enumerable: true, configurable: true, get: function() {
        return Boolean(W(this.Ff, 23));
      }, set: function(t3) {
        true === Boolean(t3) ? this.Ff = V(this.Ff, 23) : this.Ff = G(this.Ff, 23);
      } }), Object.defineProperty(this, "commitOnSelChange", { enumerable: true, configurable: true, get: function() {
        return Boolean(W(this.Ff, 27));
      }, set: function(t3) {
        true === Boolean(t3) ? this.Ff = V(this.Ff, 27) : this.Ff = G(this.Ff, 27);
      } }), this.hasAppearanceStream = false;
    };
    R(at, it);
    var ot = function() {
      at.call(this), this.fontName = "helvetica", this.combo = false;
    };
    R(ot, at);
    var st = function() {
      ot.call(this), this.combo = true;
    };
    R(st, ot);
    var ct = function() {
      st.call(this), this.edit = true;
    };
    R(ct, st);
    var ut = function() {
      it.call(this), this.FT = "/Btn", Object.defineProperty(this, "noToggleToOff", { enumerable: true, configurable: true, get: function() {
        return Boolean(W(this.Ff, 15));
      }, set: function(t3) {
        true === Boolean(t3) ? this.Ff = V(this.Ff, 15) : this.Ff = G(this.Ff, 15);
      } }), Object.defineProperty(this, "radio", { enumerable: true, configurable: true, get: function() {
        return Boolean(W(this.Ff, 16));
      }, set: function(t3) {
        true === Boolean(t3) ? this.Ff = V(this.Ff, 16) : this.Ff = G(this.Ff, 16);
      } }), Object.defineProperty(this, "pushButton", { enumerable: true, configurable: true, get: function() {
        return Boolean(W(this.Ff, 17));
      }, set: function(t3) {
        true === Boolean(t3) ? this.Ff = V(this.Ff, 17) : this.Ff = G(this.Ff, 17);
      } }), Object.defineProperty(this, "radioIsUnison", { enumerable: true, configurable: true, get: function() {
        return Boolean(W(this.Ff, 26));
      }, set: function(t3) {
        true === Boolean(t3) ? this.Ff = V(this.Ff, 26) : this.Ff = G(this.Ff, 26);
      } });
      var t2, e2 = {};
      Object.defineProperty(this, "MK", { enumerable: false, configurable: false, get: function() {
        var t3 = function(t4) {
          return t4;
        };
        if (this.scope && (t3 = this.scope.internal.getEncryptor(this.objId)), 0 !== Object.keys(e2).length) {
          var r2, n2 = [];
          for (r2 in n2.push("<<"), e2) n2.push("/" + r2 + " (" + B(t3(e2[r2])) + ")");
          return n2.push(">>"), n2.join("\n");
        }
      }, set: function(t3) {
        "object" == typeof t3 && (e2 = t3);
      } }), Object.defineProperty(this, "caption", { enumerable: true, configurable: true, get: function() {
        return e2.CA || "";
      }, set: function(t3) {
        "string" == typeof t3 && (e2.CA = t3);
      } }), Object.defineProperty(this, "AS", { enumerable: false, configurable: false, get: function() {
        return t2;
      }, set: function(e3) {
        t2 = e3;
      } }), Object.defineProperty(this, "appearanceState", { enumerable: true, configurable: true, get: function() {
        return t2.substr(1, t2.length - 1);
      }, set: function(e3) {
        t2 = "/" + e3;
      } });
    };
    R(ut, it);
    var lt = function() {
      ut.call(this), this.pushButton = true;
    };
    R(lt, ut);
    var ht = function() {
      ut.call(this), this.radio = true, this.pushButton = false;
      var t2 = [];
      Object.defineProperty(this, "Kids", { enumerable: true, configurable: false, get: function() {
        return t2;
      }, set: function(e2) {
        t2 = void 0 !== e2 ? e2 : [];
      } });
    };
    R(ht, ut);
    var ft = function() {
      var t2, e2;
      it.call(this), Object.defineProperty(this, "Parent", { enumerable: false, configurable: false, get: function() {
        return t2;
      }, set: function(e3) {
        t2 = e3;
      } }), Object.defineProperty(this, "optionName", { enumerable: false, configurable: true, get: function() {
        return e2;
      }, set: function(t3) {
        e2 = t3;
      } });
      var r2, n2 = {};
      Object.defineProperty(this, "MK", { enumerable: false, configurable: false, get: function() {
        var t3 = function(t4) {
          return t4;
        };
        this.scope && (t3 = this.scope.internal.getEncryptor(this.objId));
        var e3, r3 = [];
        for (e3 in r3.push("<<"), n2) r3.push("/" + e3 + " (" + B(t3(n2[e3])) + ")");
        return r3.push(">>"), r3.join("\n");
      }, set: function(t3) {
        "object" == typeof t3 && (n2 = t3);
      } }), Object.defineProperty(this, "caption", { enumerable: true, configurable: true, get: function() {
        return n2.CA || "";
      }, set: function(t3) {
        "string" == typeof t3 && (n2.CA = t3);
      } }), Object.defineProperty(this, "AS", { enumerable: false, configurable: false, get: function() {
        return r2;
      }, set: function(t3) {
        r2 = t3;
      } }), Object.defineProperty(this, "appearanceState", { enumerable: true, configurable: true, get: function() {
        return r2.substr(1, r2.length - 1);
      }, set: function(t3) {
        r2 = "/" + t3;
      } }), this.caption = "l", this.appearanceState = "Off", this._AppearanceType = mt.RadioButton.Circle, this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(this.optionName);
    };
    R(ft, it), ht.prototype.setAppearance = function(t2) {
      if (!("createAppearanceStream" in t2) || !("getCA" in t2)) throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
      for (var e2 in this.Kids) if (this.Kids.hasOwnProperty(e2)) {
        var r2 = this.Kids[e2];
        r2.appearanceStreamContent = t2.createAppearanceStream(r2.optionName), r2.caption = t2.getCA();
      }
    }, ht.prototype.createOption = function(t2) {
      var e2 = new ft();
      return e2.Parent = this, e2.optionName = t2, this.Kids.push(e2), vt.call(this.scope, e2), e2;
    };
    var dt = function() {
      ut.call(this), this.fontName = "zapfdingbats", this.caption = "3", this.appearanceState = "On", this.value = "On", this.textAlign = "center", this.appearanceStreamContent = mt.CheckBox.createAppearanceStream();
    };
    R(dt, ut);
    var pt = function() {
      it.call(this), this.FT = "/Tx", Object.defineProperty(this, "multiline", { enumerable: true, configurable: true, get: function() {
        return Boolean(W(this.Ff, 13));
      }, set: function(t3) {
        true === Boolean(t3) ? this.Ff = V(this.Ff, 13) : this.Ff = G(this.Ff, 13);
      } }), Object.defineProperty(this, "fileSelect", { enumerable: true, configurable: true, get: function() {
        return Boolean(W(this.Ff, 21));
      }, set: function(t3) {
        true === Boolean(t3) ? this.Ff = V(this.Ff, 21) : this.Ff = G(this.Ff, 21);
      } }), Object.defineProperty(this, "doNotSpellCheck", { enumerable: true, configurable: true, get: function() {
        return Boolean(W(this.Ff, 23));
      }, set: function(t3) {
        true === Boolean(t3) ? this.Ff = V(this.Ff, 23) : this.Ff = G(this.Ff, 23);
      } }), Object.defineProperty(this, "doNotScroll", { enumerable: true, configurable: true, get: function() {
        return Boolean(W(this.Ff, 24));
      }, set: function(t3) {
        true === Boolean(t3) ? this.Ff = V(this.Ff, 24) : this.Ff = G(this.Ff, 24);
      } }), Object.defineProperty(this, "comb", { enumerable: true, configurable: true, get: function() {
        return Boolean(W(this.Ff, 25));
      }, set: function(t3) {
        true === Boolean(t3) ? this.Ff = V(this.Ff, 25) : this.Ff = G(this.Ff, 25);
      } }), Object.defineProperty(this, "richText", { enumerable: true, configurable: true, get: function() {
        return Boolean(W(this.Ff, 26));
      }, set: function(t3) {
        true === Boolean(t3) ? this.Ff = V(this.Ff, 26) : this.Ff = G(this.Ff, 26);
      } });
      var t2 = null;
      Object.defineProperty(this, "MaxLen", { enumerable: true, configurable: false, get: function() {
        return t2;
      }, set: function(e2) {
        t2 = e2;
      } }), Object.defineProperty(this, "maxLength", { enumerable: true, configurable: true, get: function() {
        return t2;
      }, set: function(e2) {
        Number.isInteger(e2) && (t2 = e2);
      } }), Object.defineProperty(this, "hasAppearanceStream", { enumerable: true, configurable: true, get: function() {
        return this.V || this.DV;
      } });
    };
    R(pt, it);
    var gt = function() {
      pt.call(this), Object.defineProperty(this, "password", { enumerable: true, configurable: true, get: function() {
        return Boolean(W(this.Ff, 14));
      }, set: function(t2) {
        true === Boolean(t2) ? this.Ff = V(this.Ff, 14) : this.Ff = G(this.Ff, 14);
      } }), this.password = true;
    };
    R(gt, pt);
    var mt = { CheckBox: { createAppearanceStream: function() {
      return { N: { On: mt.CheckBox.YesNormal }, D: { On: mt.CheckBox.YesPushDown, Off: mt.CheckBox.OffPushDown } };
    }, YesPushDown: function(t2) {
      var e2 = T(t2);
      e2.scope = t2.scope;
      var r2 = [], n2 = t2.scope.internal.getFont(t2.fontName, t2.fontStyle).id, i2 = t2.scope.__private__.encodeColorString(t2.color), a2 = X(t2, t2.caption);
      return r2.push("0.749023 g"), r2.push("0 0 " + M(mt.internal.getWidth(t2)) + " " + M(mt.internal.getHeight(t2)) + " re"), r2.push("f"), r2.push("BMC"), r2.push("q"), r2.push("0 0 1 rg"), r2.push("/" + n2 + " " + M(a2.fontSize) + " Tf " + i2), r2.push("BT"), r2.push(a2.text), r2.push("ET"), r2.push("Q"), r2.push("EMC"), e2.stream = r2.join("\n"), e2;
    }, YesNormal: function(t2) {
      var e2 = T(t2);
      e2.scope = t2.scope;
      var r2 = t2.scope.internal.getFont(t2.fontName, t2.fontStyle).id, n2 = t2.scope.__private__.encodeColorString(t2.color), i2 = [], a2 = mt.internal.getHeight(t2), o2 = mt.internal.getWidth(t2), s2 = X(t2, t2.caption);
      return i2.push("1 g"), i2.push("0 0 " + M(o2) + " " + M(a2) + " re"), i2.push("f"), i2.push("q"), i2.push("0 0 1 rg"), i2.push("0 0 " + M(o2 - 1) + " " + M(a2 - 1) + " re"), i2.push("W"), i2.push("n"), i2.push("0 g"), i2.push("BT"), i2.push("/" + r2 + " " + M(s2.fontSize) + " Tf " + n2), i2.push(s2.text), i2.push("ET"), i2.push("Q"), e2.stream = i2.join("\n"), e2;
    }, OffPushDown: function(t2) {
      var e2 = T(t2);
      e2.scope = t2.scope;
      var r2 = [];
      return r2.push("0.749023 g"), r2.push("0 0 " + M(mt.internal.getWidth(t2)) + " " + M(mt.internal.getHeight(t2)) + " re"), r2.push("f"), e2.stream = r2.join("\n"), e2;
    } }, RadioButton: { Circle: { createAppearanceStream: function(t2) {
      var e2 = { D: { Off: mt.RadioButton.Circle.OffPushDown }, N: {} };
      return e2.N[t2] = mt.RadioButton.Circle.YesNormal, e2.D[t2] = mt.RadioButton.Circle.YesPushDown, e2;
    }, getCA: function() {
      return "l";
    }, YesNormal: function(t2) {
      var e2 = T(t2);
      e2.scope = t2.scope;
      var r2 = [], n2 = mt.internal.getWidth(t2) <= mt.internal.getHeight(t2) ? mt.internal.getWidth(t2) / 4 : mt.internal.getHeight(t2) / 4;
      n2 = Number((0.9 * n2).toFixed(5));
      var i2 = mt.internal.Bezier_C, a2 = Number((n2 * i2).toFixed(5));
      return r2.push("q"), r2.push("1 0 0 1 " + E(mt.internal.getWidth(t2) / 2) + " " + E(mt.internal.getHeight(t2) / 2) + " cm"), r2.push(n2 + " 0 m"), r2.push(n2 + " " + a2 + " " + a2 + " " + n2 + " 0 " + n2 + " c"), r2.push("-" + a2 + " " + n2 + " -" + n2 + " " + a2 + " -" + n2 + " 0 c"), r2.push("-" + n2 + " -" + a2 + " -" + a2 + " -" + n2 + " 0 -" + n2 + " c"), r2.push(a2 + " -" + n2 + " " + n2 + " -" + a2 + " " + n2 + " 0 c"), r2.push("f"), r2.push("Q"), e2.stream = r2.join("\n"), e2;
    }, YesPushDown: function(t2) {
      var e2 = T(t2);
      e2.scope = t2.scope;
      var r2 = [], n2 = mt.internal.getWidth(t2) <= mt.internal.getHeight(t2) ? mt.internal.getWidth(t2) / 4 : mt.internal.getHeight(t2) / 4;
      n2 = Number((0.9 * n2).toFixed(5));
      var i2 = Number((2 * n2).toFixed(5)), a2 = Number((i2 * mt.internal.Bezier_C).toFixed(5)), o2 = Number((n2 * mt.internal.Bezier_C).toFixed(5));
      return r2.push("0.749023 g"), r2.push("q"), r2.push("1 0 0 1 " + E(mt.internal.getWidth(t2) / 2) + " " + E(mt.internal.getHeight(t2) / 2) + " cm"), r2.push(i2 + " 0 m"), r2.push(i2 + " " + a2 + " " + a2 + " " + i2 + " 0 " + i2 + " c"), r2.push("-" + a2 + " " + i2 + " -" + i2 + " " + a2 + " -" + i2 + " 0 c"), r2.push("-" + i2 + " -" + a2 + " -" + a2 + " -" + i2 + " 0 -" + i2 + " c"), r2.push(a2 + " -" + i2 + " " + i2 + " -" + a2 + " " + i2 + " 0 c"), r2.push("f"), r2.push("Q"), r2.push("0 g"), r2.push("q"), r2.push("1 0 0 1 " + E(mt.internal.getWidth(t2) / 2) + " " + E(mt.internal.getHeight(t2) / 2) + " cm"), r2.push(n2 + " 0 m"), r2.push(n2 + " " + o2 + " " + o2 + " " + n2 + " 0 " + n2 + " c"), r2.push("-" + o2 + " " + n2 + " -" + n2 + " " + o2 + " -" + n2 + " 0 c"), r2.push("-" + n2 + " -" + o2 + " -" + o2 + " -" + n2 + " 0 -" + n2 + " c"), r2.push(o2 + " -" + n2 + " " + n2 + " -" + o2 + " " + n2 + " 0 c"), r2.push("f"), r2.push("Q"), e2.stream = r2.join("\n"), e2;
    }, OffPushDown: function(t2) {
      var e2 = T(t2);
      e2.scope = t2.scope;
      var r2 = [], n2 = mt.internal.getWidth(t2) <= mt.internal.getHeight(t2) ? mt.internal.getWidth(t2) / 4 : mt.internal.getHeight(t2) / 4;
      n2 = Number((0.9 * n2).toFixed(5));
      var i2 = Number((2 * n2).toFixed(5)), a2 = Number((i2 * mt.internal.Bezier_C).toFixed(5));
      return r2.push("0.749023 g"), r2.push("q"), r2.push("1 0 0 1 " + E(mt.internal.getWidth(t2) / 2) + " " + E(mt.internal.getHeight(t2) / 2) + " cm"), r2.push(i2 + " 0 m"), r2.push(i2 + " " + a2 + " " + a2 + " " + i2 + " 0 " + i2 + " c"), r2.push("-" + a2 + " " + i2 + " -" + i2 + " " + a2 + " -" + i2 + " 0 c"), r2.push("-" + i2 + " -" + a2 + " -" + a2 + " -" + i2 + " 0 -" + i2 + " c"), r2.push(a2 + " -" + i2 + " " + i2 + " -" + a2 + " " + i2 + " 0 c"), r2.push("f"), r2.push("Q"), e2.stream = r2.join("\n"), e2;
    } }, Cross: { createAppearanceStream: function(t2) {
      var e2 = { D: { Off: mt.RadioButton.Cross.OffPushDown }, N: {} };
      return e2.N[t2] = mt.RadioButton.Cross.YesNormal, e2.D[t2] = mt.RadioButton.Cross.YesPushDown, e2;
    }, getCA: function() {
      return "8";
    }, YesNormal: function(t2) {
      var e2 = T(t2);
      e2.scope = t2.scope;
      var r2 = [], n2 = mt.internal.calculateCross(t2);
      return r2.push("q"), r2.push("1 1 " + M(mt.internal.getWidth(t2) - 2) + " " + M(mt.internal.getHeight(t2) - 2) + " re"), r2.push("W"), r2.push("n"), r2.push(M(n2.x1.x) + " " + M(n2.x1.y) + " m"), r2.push(M(n2.x2.x) + " " + M(n2.x2.y) + " l"), r2.push(M(n2.x4.x) + " " + M(n2.x4.y) + " m"), r2.push(M(n2.x3.x) + " " + M(n2.x3.y) + " l"), r2.push("s"), r2.push("Q"), e2.stream = r2.join("\n"), e2;
    }, YesPushDown: function(t2) {
      var e2 = T(t2);
      e2.scope = t2.scope;
      var r2 = mt.internal.calculateCross(t2), n2 = [];
      return n2.push("0.749023 g"), n2.push("0 0 " + M(mt.internal.getWidth(t2)) + " " + M(mt.internal.getHeight(t2)) + " re"), n2.push("f"), n2.push("q"), n2.push("1 1 " + M(mt.internal.getWidth(t2) - 2) + " " + M(mt.internal.getHeight(t2) - 2) + " re"), n2.push("W"), n2.push("n"), n2.push(M(r2.x1.x) + " " + M(r2.x1.y) + " m"), n2.push(M(r2.x2.x) + " " + M(r2.x2.y) + " l"), n2.push(M(r2.x4.x) + " " + M(r2.x4.y) + " m"), n2.push(M(r2.x3.x) + " " + M(r2.x3.y) + " l"), n2.push("s"), n2.push("Q"), e2.stream = n2.join("\n"), e2;
    }, OffPushDown: function(t2) {
      var e2 = T(t2);
      e2.scope = t2.scope;
      var r2 = [];
      return r2.push("0.749023 g"), r2.push("0 0 " + M(mt.internal.getWidth(t2)) + " " + M(mt.internal.getHeight(t2)) + " re"), r2.push("f"), e2.stream = r2.join("\n"), e2;
    } } }, createDefaultAppearanceStream: function(t2) {
      var e2 = t2.scope.internal.getFont(t2.fontName, t2.fontStyle).id, r2 = t2.scope.__private__.encodeColorString(t2.color);
      return "/" + e2 + " " + t2.fontSize + " Tf " + r2;
    } };
    mt.internal = { Bezier_C: 0.551915024494, calculateCross: function(t2) {
      var e2 = mt.internal.getWidth(t2), r2 = mt.internal.getHeight(t2), n2 = Math.min(e2, r2);
      return { x1: { x: (e2 - n2) / 2, y: (r2 - n2) / 2 + n2 }, x2: { x: (e2 - n2) / 2 + n2, y: (r2 - n2) / 2 }, x3: { x: (e2 - n2) / 2, y: (r2 - n2) / 2 }, x4: { x: (e2 - n2) / 2 + n2, y: (r2 - n2) / 2 + n2 } };
    } }, mt.internal.getWidth = function(t2) {
      var e2 = 0;
      return "object" == typeof t2 && (e2 = D(t2.Rect[2])), e2;
    }, mt.internal.getHeight = function(t2) {
      var e2 = 0;
      return "object" == typeof t2 && (e2 = D(t2.Rect[3])), e2;
    };
    var vt = C.addField = function(t2) {
      if ((function(t3, e3) {
        if (e3.scope = t3, void 0 !== t3.internal && (void 0 === t3.internal.acroformPlugin || false === t3.internal.acroformPlugin.isInitialized)) {
          if (it.FieldNum = 0, t3.internal.acroformPlugin = JSON.parse(JSON.stringify($)), t3.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("Exception while creating AcroformDictionary");
          O = t3.internal.scaleFactor, t3.internal.acroformPlugin.acroFormDictionaryRoot = new nt(), t3.internal.acroformPlugin.acroFormDictionaryRoot.scope = t3, t3.internal.acroformPlugin.acroFormDictionaryRoot._eventID = t3.internal.events.subscribe("postPutResources", function() {
            !(function(t4) {
              t4.internal.events.unsubscribe(t4.internal.acroformPlugin.acroFormDictionaryRoot._eventID), delete t4.internal.acroformPlugin.acroFormDictionaryRoot._eventID, t4.internal.acroformPlugin.printedOut = true;
            })(t3);
          }), t3.internal.events.subscribe("buildDocument", function() {
            !(function(t4) {
              t4.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0;
              var e4 = t4.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
              for (var r2 in e4) if (e4.hasOwnProperty(r2)) {
                var n2 = e4[r2];
                n2.objId = void 0, n2.hasAnnotation && Z(n2, t4);
              }
            })(t3);
          }), t3.internal.events.subscribe("putCatalog", function() {
            !(function(t4) {
              if (void 0 === t4.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("putCatalogCallback: Root missing.");
              t4.internal.write("/AcroForm " + t4.internal.acroformPlugin.acroFormDictionaryRoot.objId + " 0 R");
            })(t3);
          }), t3.internal.events.subscribe("postPutPages", function(e4) {
            !(function(t4, e5) {
              var r2 = !t4;
              for (var n2 in t4 || (e5.internal.newObjectDeferredBegin(e5.internal.acroformPlugin.acroFormDictionaryRoot.objId, true), e5.internal.acroformPlugin.acroFormDictionaryRoot.putStream()), t4 = t4 || e5.internal.acroformPlugin.acroFormDictionaryRoot.Kids) if (t4.hasOwnProperty(n2)) {
                var i2 = t4[n2], a2 = [], o2 = i2.Rect;
                if (i2.Rect && (i2.Rect = Y(i2.Rect, e5)), e5.internal.newObjectDeferredBegin(i2.objId, true), i2.DA = mt.createDefaultAppearanceStream(i2), "object" == typeof i2 && "function" == typeof i2.getKeyValueListForStream && (a2 = i2.getKeyValueListForStream()), i2.Rect = o2, i2.hasAppearanceStream && !i2.appearanceStreamContent) {
                  var s2 = J(i2);
                  a2.push({ key: "AP", value: "<</N " + s2 + ">>" }), e5.internal.acroformPlugin.xForms.push(s2);
                }
                if (i2.appearanceStreamContent) {
                  var c2 = "";
                  for (var u2 in i2.appearanceStreamContent) if (i2.appearanceStreamContent.hasOwnProperty(u2)) {
                    var l2 = i2.appearanceStreamContent[u2];
                    if (c2 += "/" + u2 + " ", c2 += "<<", Object.keys(l2).length >= 1 || Array.isArray(l2)) {
                      for (var n2 in l2) if (l2.hasOwnProperty(n2)) {
                        var h2 = l2[n2];
                        "function" == typeof h2 && (h2 = h2.call(e5, i2)), c2 += "/" + n2 + " " + h2 + " ", e5.internal.acroformPlugin.xForms.indexOf(h2) >= 0 || e5.internal.acroformPlugin.xForms.push(h2);
                      }
                    } else "function" == typeof (h2 = l2) && (h2 = h2.call(e5, i2)), c2 += "/" + n2 + " " + h2, e5.internal.acroformPlugin.xForms.indexOf(h2) >= 0 || e5.internal.acroformPlugin.xForms.push(h2);
                    c2 += ">>";
                  }
                  a2.push({ key: "AP", value: "<<\n" + c2 + ">>" });
                }
                e5.internal.putStream({ additionalKeyValues: a2, objectId: i2.objId }), e5.internal.out("endobj");
              }
              r2 && (function(t5, e6) {
                for (var r3 in t5) if (t5.hasOwnProperty(r3)) {
                  var n3 = r3, i3 = t5[r3];
                  e6.internal.newObjectDeferredBegin(i3.objId, true), "object" == typeof i3 && "function" == typeof i3.putStream && i3.putStream(), delete t5[n3];
                }
              })(e5.internal.acroformPlugin.xForms, e5);
            })(e4, t3);
          }), t3.internal.acroformPlugin.isInitialized = true;
        }
      })(this, t2), !(t2 instanceof it)) throw new Error("Invalid argument passed to jsPDF.addField.");
      var e2;
      return (e2 = t2).scope.internal.acroformPlugin.printedOut && (e2.scope.internal.acroformPlugin.printedOut = false, e2.scope.internal.acroformPlugin.acroFormDictionaryRoot = null), e2.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(e2), t2.page = t2.scope.internal.getCurrentPageInfo().pageNumber, this;
    };
    C.AcroFormChoiceField = at, C.AcroFormListBox = ot, C.AcroFormComboBox = st, C.AcroFormEditBox = ct, C.AcroFormButton = ut, C.AcroFormPushButton = lt, C.AcroFormRadioButton = ht, C.AcroFormCheckBox = dt, C.AcroFormTextField = pt, C.AcroFormPasswordField = gt, C.AcroFormAppearance = mt, C.AcroForm = { ChoiceField: at, ListBox: ot, ComboBox: st, EditBox: ct, Button: ut, PushButton: lt, RadioButton: ht, CheckBox: dt, TextField: pt, PasswordField: gt, Appearance: mt }, j.AcroForm = { ChoiceField: at, ListBox: ot, ComboBox: st, EditBox: ct, Button: ut, PushButton: lt, RadioButton: ht, CheckBox: dt, TextField: pt, PasswordField: gt, Appearance: mt };
    var bt = j.AcroForm;
    function yt(t2) {
      return t2.reduce(function(t3, e2, r2) {
        return t3[e2] = r2, t3;
      }, {});
    }
    !(function(t2) {
      var e2 = "addImage_";
      t2.__addimage__ = {};
      var r2 = "UNKNOWN", n2 = { PNG: [[137, 80, 78, 71]], TIFF: [[77, 77, 0, 42], [73, 73, 42, 0]], JPEG: [[255, 216, 255, 224, void 0, void 0, 74, 70, 73, 70, 0], [255, 216, 255, 225, void 0, void 0, 69, 120, 105, 102, 0, 0], [255, 216, 255, 219], [255, 216, 255, 238]], JPEG2000: [[0, 0, 0, 12, 106, 80, 32, 32]], GIF87a: [[71, 73, 70, 56, 55, 97]], GIF89a: [[71, 73, 70, 56, 57, 97]], WEBP: [[82, 73, 70, 70, void 0, void 0, void 0, void 0, 87, 69, 66, 80]], BMP: [[66, 77], [66, 65], [67, 73], [67, 80], [73, 67], [80, 84]] }, a2 = t2.__addimage__.getImageFileTypeByImageData = function(t3, e3) {
        var i2, a3, o3, s3, c3, u3 = r2;
        if ("RGBA" === (e3 = e3 || r2) || void 0 !== t3.data && t3.data instanceof Uint8ClampedArray && "height" in t3 && "width" in t3) return "RGBA";
        if (x2(t3)) for (c3 in n2) for (o3 = n2[c3], i2 = 0; i2 < o3.length; i2 += 1) {
          for (s3 = true, a3 = 0; a3 < o3[i2].length; a3 += 1) if (void 0 !== o3[i2][a3] && o3[i2][a3] !== t3[a3]) {
            s3 = false;
            break;
          }
          if (true === s3) {
            u3 = c3;
            break;
          }
        }
        else for (c3 in n2) for (o3 = n2[c3], i2 = 0; i2 < o3.length; i2 += 1) {
          for (s3 = true, a3 = 0; a3 < o3[i2].length; a3 += 1) if (void 0 !== o3[i2][a3] && o3[i2][a3] !== t3.charCodeAt(a3)) {
            s3 = false;
            break;
          }
          if (true === s3) {
            u3 = c3;
            break;
          }
        }
        return u3 === r2 && e3 !== r2 && (u3 = e3), u3;
      }, o2 = function(t3) {
        for (var e3 = this.internal.write, r3 = this.internal.putStream, n3 = (0, this.internal.getFilters)(); -1 !== n3.indexOf("FlateEncode"); ) n3.splice(n3.indexOf("FlateEncode"), 1);
        t3.objectId = this.internal.newObject();
        var i2 = [];
        if (i2.push({ key: "Type", value: "/XObject" }), i2.push({ key: "Subtype", value: "/Image" }), i2.push({ key: "Width", value: t3.width }), i2.push({ key: "Height", value: t3.height }), t3.colorSpace === b2.INDEXED ? i2.push({ key: "ColorSpace", value: "[/Indexed /DeviceRGB " + (t3.palette.length / 3 - 1) + " " + ("sMask" in t3 && void 0 !== t3.sMask ? t3.objectId + 2 : t3.objectId + 1) + " 0 R]" }) : (i2.push({ key: "ColorSpace", value: "/" + t3.colorSpace }), t3.colorSpace === b2.DEVICE_CMYK && i2.push({ key: "Decode", value: "[1 0 1 0 1 0 1 0]" })), i2.push({ key: "BitsPerComponent", value: t3.bitsPerComponent }), "decodeParameters" in t3 && void 0 !== t3.decodeParameters && i2.push({ key: "DecodeParms", value: "<<" + t3.decodeParameters + ">>" }), "transparency" in t3 && Array.isArray(t3.transparency) && t3.transparency.length > 0) {
          for (var a3 = "", s3 = 0, c3 = t3.transparency.length; s3 < c3; s3++) a3 += t3.transparency[s3] + " " + t3.transparency[s3] + " ";
          i2.push({ key: "Mask", value: "[" + a3 + "]" });
        }
        void 0 !== t3.sMask && i2.push({ key: "SMask", value: t3.objectId + 1 + " 0 R" });
        var u3 = void 0 !== t3.filter ? ["/" + t3.filter] : void 0;
        if (r3({ data: t3.data, additionalKeyValues: i2, alreadyAppliedFilters: u3, objectId: t3.objectId }), e3("endobj"), "sMask" in t3 && void 0 !== t3.sMask) {
          const e4 = t3.sMaskBitsPerComponent ?? t3.bitsPerComponent, r4 = { width: t3.width, height: t3.height, colorSpace: "DeviceGray", bitsPerComponent: e4, data: t3.sMask };
          "filter" in t3 && (r4.decodeParameters = `/Predictor ${t3.predictor} /Colors 1 /BitsPerComponent ${e4} /Columns ${t3.width}`, r4.filter = t3.filter), o2.call(this, r4);
        }
        if (t3.colorSpace === b2.INDEXED) {
          var l3 = this.internal.newObject();
          r3({ data: S2(new Uint8Array(t3.palette)), objectId: l3 }), e3("endobj");
        }
      }, s2 = function() {
        var t3 = this.internal.collections[e2 + "images"];
        for (var r3 in t3) o2.call(this, t3[r3]);
      }, c2 = function() {
        var t3, r3 = this.internal.collections[e2 + "images"], n3 = this.internal.write;
        for (var i2 in r3) n3("/I" + (t3 = r3[i2]).index, t3.objectId, "0", "R");
      }, u2 = function() {
        this.internal.collections[e2 + "images"] || (this.internal.collections[e2 + "images"] = {}, this.internal.events.subscribe("putResources", s2), this.internal.events.subscribe("putXobjectDict", c2));
      }, l2 = function() {
        var t3 = this.internal.collections[e2 + "images"];
        return u2.call(this), t3;
      }, h2 = function() {
        return Object.keys(this.internal.collections[e2 + "images"]).length;
      }, f2 = function(e3) {
        return "function" == typeof t2["process" + e3.toUpperCase()];
      }, d2 = function(t3) {
        return "object" == typeof t3 && 1 === t3.nodeType;
      }, p2 = function(e3, r3) {
        if ("IMG" === e3.nodeName && e3.hasAttribute("src")) {
          var n3 = "" + e3.getAttribute("src");
          if (0 === n3.indexOf("data:image/")) return i(unescape(n3).split("base64,").pop());
          var a3 = t2.loadFile(n3, true);
          if (void 0 !== a3) return a3;
        }
        if ("CANVAS" === e3.nodeName) {
          if (0 === e3.width || 0 === e3.height) throw new Error("Given canvas must have data. Canvas width: " + e3.width + ", height: " + e3.height);
          var o3;
          switch (r3) {
            case "PNG":
              o3 = "image/png";
              break;
            case "WEBP":
              o3 = "image/webp";
              break;
            default:
              o3 = "image/jpeg";
          }
          return i(e3.toDataURL(o3, 1).split("base64,").pop());
        }
      }, g2 = function(t3) {
        var r3 = this.internal.collections[e2 + "images"];
        if (r3) {
          for (var n3 in r3) if (t3 === r3[n3].alias) return r3[n3];
        }
      }, m2 = function(t3, e3, r3) {
        return t3 || e3 || (t3 = -96, e3 = -96), t3 < 0 && (t3 = -1 * r3.width * 72 / t3 / this.internal.scaleFactor), e3 < 0 && (e3 = -1 * r3.height * 72 / e3 / this.internal.scaleFactor), 0 === t3 && (t3 = e3 * r3.width / r3.height), 0 === e3 && (e3 = t3 * r3.height / r3.width), [t3, e3];
      }, v2 = function(t3, e3, r3, n3, i2, a3) {
        var o3 = m2.call(this, r3, n3, i2), s3 = this.internal.getCoordinateString, c3 = this.internal.getVerticalCoordinateString, u3 = l2.call(this);
        if (r3 = o3[0], n3 = o3[1], u3[i2.index] = i2, a3) {
          a3 *= Math.PI / 180;
          var h3 = Math.cos(a3), f3 = Math.sin(a3), d3 = function(t4) {
            return t4.toFixed(4);
          }, p3 = [d3(h3), d3(f3), d3(-1 * f3), d3(h3), 0, 0, "cm"];
        }
        this.internal.write("q"), a3 ? (this.internal.write([1, "0", "0", 1, s3(t3), c3(e3 + n3), "cm"].join(" ")), this.internal.write(p3.join(" ")), this.internal.write([s3(r3), "0", "0", s3(n3), "0", "0", "cm"].join(" "))) : this.internal.write([s3(r3), "0", "0", s3(n3), s3(t3), c3(e3 + n3), "cm"].join(" ")), this.isAdvancedAPI() && this.internal.write([1, 0, 0, -1, 0, 0, "cm"].join(" ")), this.internal.write("/I" + i2.index + " Do"), this.internal.write("Q");
      }, b2 = t2.color_spaces = { DEVICE_RGB: "DeviceRGB", DEVICE_GRAY: "DeviceGray", DEVICE_CMYK: "DeviceCMYK", CAL_GREY: "CalGray", CAL_RGB: "CalRGB", LAB: "Lab", ICC_BASED: "ICCBased", INDEXED: "Indexed", PATTERN: "Pattern", SEPARATION: "Separation", DEVICE_N: "DeviceN" };
      t2.decode = { DCT_DECODE: "DCTDecode", FLATE_DECODE: "FlateDecode", LZW_DECODE: "LZWDecode", JPX_DECODE: "JPXDecode", JBIG2_DECODE: "JBIG2Decode", ASCII85_DECODE: "ASCII85Decode", ASCII_HEX_DECODE: "ASCIIHexDecode", RUN_LENGTH_DECODE: "RunLengthDecode", CCITT_FAX_DECODE: "CCITTFaxDecode" };
      var y2 = t2.image_compression = { NONE: "NONE", FAST: "FAST", MEDIUM: "MEDIUM", SLOW: "SLOW" }, w2 = t2.__addimage__.sHashCode = function(t3) {
        var e3, r3, n3 = 0;
        if ("string" == typeof t3) for (r3 = t3.length, e3 = 0; e3 < r3; e3++) n3 = (n3 << 5) - n3 + t3.charCodeAt(e3), n3 |= 0;
        else if (x2(t3)) for (r3 = t3.byteLength / 2, e3 = 0; e3 < r3; e3++) n3 = (n3 << 5) - n3 + t3[e3], n3 |= 0;
        return n3;
      }, N2 = t2.__addimage__.validateStringAsBase64 = function(t3) {
        (t3 = t3 || "").toString().trim();
        var e3 = true;
        return 0 === t3.length && (e3 = false), t3.length % 4 != 0 && (e3 = false), false === /^[A-Za-z0-9+/]+$/.test(t3.substr(0, t3.length - 2)) && (e3 = false), false === /^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(t3.substr(-2)) && (e3 = false), e3;
      }, L2 = t2.__addimage__.extractImageFromDataUrl = function(t3) {
        if (null == t3) return null;
        if (!(t3 = t3.trim()).startsWith("data:")) return null;
        const e3 = t3.indexOf(",");
        return e3 < 0 ? null : t3.substring(0, e3).trim().endsWith("base64") ? t3.substring(e3 + 1) : null;
      };
      t2.__addimage__.isArrayBuffer = function(t3) {
        return t3 instanceof ArrayBuffer;
      };
      var x2 = t2.__addimage__.isArrayBufferView = function(t3) {
        return t3 instanceof Int8Array || t3 instanceof Uint8Array || t3 instanceof Uint8ClampedArray || t3 instanceof Int16Array || t3 instanceof Uint16Array || t3 instanceof Int32Array || t3 instanceof Uint32Array || t3 instanceof Float32Array || t3 instanceof Float64Array;
      }, A2 = t2.__addimage__.binaryStringToUint8Array = function(t3) {
        for (var e3 = t3.length, r3 = new Uint8Array(e3), n3 = 0; n3 < e3; n3++) r3[n3] = t3.charCodeAt(n3);
        return r3;
      }, S2 = t2.__addimage__.arrayBufferToBinaryString = function(t3) {
        for (var e3 = "", r3 = x2(t3) ? t3 : new Uint8Array(t3), n3 = 0; n3 < r3.length; n3 += 8192) e3 += String.fromCharCode.apply(null, r3.subarray(n3, n3 + 8192));
        return e3;
      };
      t2.addImage = function() {
        var t3, e3, n3, i2, a3, o3, s3, c3, l3;
        if ("number" == typeof arguments[1] ? (e3 = r2, n3 = arguments[1], i2 = arguments[2], a3 = arguments[3], o3 = arguments[4], s3 = arguments[5], c3 = arguments[6], l3 = arguments[7]) : (e3 = arguments[1], n3 = arguments[2], i2 = arguments[3], a3 = arguments[4], o3 = arguments[5], s3 = arguments[6], c3 = arguments[7], l3 = arguments[8]), "object" == typeof (t3 = arguments[0]) && !d2(t3) && "imageData" in t3) {
          var h3 = t3;
          t3 = h3.imageData, e3 = h3.format || e3 || r2, n3 = h3.x || n3 || 0, i2 = h3.y || i2 || 0, a3 = h3.w || h3.width || a3, o3 = h3.h || h3.height || o3, s3 = h3.alias || s3, c3 = h3.compression || c3, l3 = h3.rotation || h3.angle || l3;
        }
        var f3 = this.internal.getFilters();
        if (void 0 === c3 && -1 !== f3.indexOf("FlateEncode") && (c3 = "SLOW"), isNaN(n3) || isNaN(i2)) throw new Error("Invalid coordinates passed to jsPDF.addImage");
        u2.call(this);
        var p3 = _2.call(this, t3, e3, s3, c3);
        return v2.call(this, n3, i2, a3, o3, p3, l3), this;
      };
      var _2 = function(e3, n3, i2, o3) {
        var s3, c3, u3;
        if ("string" == typeof e3 && a2(e3) === r2) {
          e3 = unescape(e3);
          var l3 = P2(e3, false);
          ("" !== l3 || void 0 !== (l3 = t2.loadFile(e3, true))) && (e3 = l3);
        }
        if (d2(e3) && (e3 = p2(e3, n3)), n3 = a2(e3, n3), !f2(n3)) throw new Error("addImage does not support files of type '" + n3 + "', please ensure that a plugin for '" + n3 + "' support is added.");
        if ((null == (u3 = i2) || 0 === u3.length) && (i2 = (function(t3) {
          return "string" == typeof t3 || x2(t3) ? w2(t3) : x2(t3.data) ? w2(t3.data) : null;
        })(e3)), (s3 = g2.call(this, i2)) || (e3 instanceof Uint8Array || "RGBA" === n3 || (c3 = e3, e3 = A2(e3)), s3 = this["process" + n3.toUpperCase()](e3, h2.call(this), i2, (function(e4) {
          return e4 && "string" == typeof e4 && (e4 = e4.toUpperCase()), e4 in t2.image_compression ? e4 : y2.NONE;
        })(o3), c3)), !s3) throw new Error("An unknown error occurred whilst processing the image.");
        return s3;
      }, P2 = t2.__addimage__.convertBase64ToBinaryString = function(t3, e3) {
        e3 = "boolean" != typeof e3 || e3;
        var r3, n3 = "";
        if ("string" == typeof t3) {
          r3 = L2(t3) ?? t3;
          try {
            n3 = i(r3);
          } catch (a3) {
            if (e3) throw N2(r3) ? new Error("atob-Error in jsPDF.convertBase64ToBinaryString " + a3.message) : new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ");
          }
        }
        return n3;
      };
      t2.getImageProperties = function(e3) {
        var n3, i2, o3 = "";
        if (d2(e3) && (e3 = p2(e3)), "string" == typeof e3 && a2(e3) === r2 && ("" === (o3 = P2(e3, false)) && (o3 = t2.loadFile(e3) || ""), e3 = o3), i2 = a2(e3), !f2(i2)) throw new Error("addImage does not support files of type '" + i2 + "', please ensure that a plugin for '" + i2 + "' support is added.");
        if (e3 instanceof Uint8Array || (e3 = A2(e3)), !(n3 = this["process" + i2.toUpperCase()](e3))) throw new Error("An unknown error occurred whilst processing the image");
        return n3.fileType = i2, n3;
      };
    })(j.API), /**
     * @license
     * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
    (function(t2) {
      var e2 = function(t3) {
        if (void 0 !== t3 && "" != t3) return true;
      };
      j.API.events.push(["addPage", function(t3) {
        this.internal.getPageInfo(t3.pageNumber).pageContext.annotations = [];
      }]), t2.events.push(["putPage", function(t3) {
        for (var r2, n2, i2, a2 = this.internal.getCoordinateString, o2 = this.internal.getVerticalCoordinateString, s2 = this.internal.getPageInfoByObjId(t3.objId), c2 = t3.pageContext.annotations, u2 = false, l2 = 0; l2 < c2.length && !u2; l2++) switch ((r2 = c2[l2]).type) {
          case "link":
            (e2(r2.options.url) || e2(r2.options.pageNumber)) && (u2 = true);
            break;
          case "reference":
          case "text":
          case "freetext":
            u2 = true;
        }
        if (0 != u2) {
          this.internal.write("/Annots [");
          for (var h2 = 0; h2 < c2.length; h2++) {
            r2 = c2[h2];
            var f2 = this.internal.pdfEscape, d2 = this.internal.getEncryptor(t3.objId);
            switch (r2.type) {
              case "reference":
                this.internal.write(" " + r2.object.objId + " 0 R ");
                break;
              case "text":
                var p2 = this.internal.newAdditionalObject(), g2 = this.internal.newAdditionalObject(), m2 = this.internal.getEncryptor(p2.objId), v2 = r2.title || "Note";
                i2 = "<</Type /Annot /Subtype /Text " + (n2 = "/Rect [" + a2(r2.bounds.x) + " " + o2(r2.bounds.y + r2.bounds.h) + " " + a2(r2.bounds.x + r2.bounds.w) + " " + o2(r2.bounds.y) + "] ") + "/Contents (" + f2(m2(r2.contents)) + ")", i2 += " /Popup " + g2.objId + " 0 R", i2 += " /P " + s2.objId + " 0 R", i2 += " /T (" + f2(m2(v2)) + ") >>", p2.content = i2;
                var b2 = p2.objId + " 0 R";
                i2 = "<</Type /Annot /Subtype /Popup " + (n2 = "/Rect [" + a2(r2.bounds.x + 30) + " " + o2(r2.bounds.y + r2.bounds.h) + " " + a2(r2.bounds.x + r2.bounds.w + 30) + " " + o2(r2.bounds.y) + "] ") + " /Parent " + b2, r2.open && (i2 += " /Open true"), i2 += " >>", g2.content = i2, this.internal.write(p2.objId, "0 R", g2.objId, "0 R");
                break;
              case "freetext":
                n2 = "/Rect [" + a2(r2.bounds.x) + " " + o2(r2.bounds.y) + " " + a2(r2.bounds.x + r2.bounds.w) + " " + o2(r2.bounds.y + r2.bounds.h) + "] ";
                var y2 = r2.color || "#000000";
                i2 = "<</Type /Annot /Subtype /FreeText " + n2 + "/Contents (" + f2(d2(r2.contents)) + ")", i2 += " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + y2 + ")", i2 += " /Border [0 0 0]", i2 += " >>", this.internal.write(i2);
                break;
              case "link":
                if (r2.options.name) {
                  var w2 = this.annotations._nameMap[r2.options.name];
                  r2.options.pageNumber = w2.page, r2.options.top = w2.y;
                } else r2.options.top || (r2.options.top = 0);
                if (n2 = "/Rect [" + r2.finalBounds.x + " " + r2.finalBounds.y + " " + r2.finalBounds.w + " " + r2.finalBounds.h + "] ", i2 = "", r2.options.url) i2 = "<</Type /Annot /Subtype /Link " + n2 + "/Border [0 0 0] /A <</S /URI /URI (" + f2(d2(r2.options.url)) + ") >>";
                else if (r2.options.pageNumber) switch (i2 = "<</Type /Annot /Subtype /Link " + n2 + "/Border [0 0 0] /Dest [" + this.internal.getPageInfo(r2.options.pageNumber).objId + " 0 R", r2.options.magFactor = r2.options.magFactor || "XYZ", r2.options.magFactor) {
                  case "Fit":
                    i2 += " /Fit]";
                    break;
                  case "FitH":
                    i2 += " /FitH " + r2.options.top + "]";
                    break;
                  case "FitV":
                    r2.options.left = r2.options.left || 0, i2 += " /FitV " + r2.options.left + "]";
                    break;
                  default:
                    var N2 = o2(r2.options.top);
                    r2.options.left = r2.options.left || 0, void 0 === r2.options.zoom && (r2.options.zoom = 0), i2 += " /XYZ " + r2.options.left + " " + N2 + " " + r2.options.zoom + "]";
                }
                "" != i2 && (i2 += " >>", this.internal.write(i2));
            }
          }
          this.internal.write("]");
        }
      }]), t2.createAnnotation = function(t3) {
        var e3 = this.internal.getCurrentPageInfo();
        switch (t3.type) {
          case "link":
            this.link(t3.bounds.x, t3.bounds.y, t3.bounds.w, t3.bounds.h, t3);
            break;
          case "text":
          case "freetext":
            e3.pageContext.annotations.push(t3);
        }
      }, t2.link = function(t3, e3, r2, n2, i2) {
        var a2 = this.internal.getCurrentPageInfo(), o2 = this.internal.getCoordinateString, s2 = this.internal.getVerticalCoordinateString;
        a2.pageContext.annotations.push({ finalBounds: { x: o2(t3), y: s2(e3), w: o2(t3 + r2), h: s2(e3 + n2) }, options: i2, type: "link" });
      }, t2.textWithLink = function(t3, e3, r2, n2) {
        var i2, a2, o2 = this.getTextWidth(t3), s2 = this.internal.getLineHeight() / this.internal.scaleFactor;
        if (void 0 !== n2.maxWidth) {
          var { maxWidth: c2 } = n2;
          a2 = c2;
          var u2 = this.splitTextToSize(t3, a2).length;
          i2 = Math.ceil(s2 * u2);
        } else a2 = o2, i2 = s2;
        return this.text(t3, e3, r2, n2), r2 += 0.2 * s2, "center" === n2.align && (e3 -= o2 / 2), "right" === n2.align && (e3 -= o2), this.link(e3, r2 - s2, a2, i2, n2), o2;
      }, t2.getTextWidth = function(t3) {
        var e3 = this.internal.getFontSize();
        return this.getStringUnitWidth(t3) * e3 / this.internal.scaleFactor;
      };
    })(j.API), /**
     * @license
     * Copyright (c) 2017 Aras Abbasi
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
    (function(t2) {
      var e2 = { 1569: [65152], 1570: [65153, 65154], 1571: [65155, 65156], 1572: [65157, 65158], 1573: [65159, 65160], 1574: [65161, 65162, 65163, 65164], 1575: [65165, 65166], 1576: [65167, 65168, 65169, 65170], 1577: [65171, 65172], 1578: [65173, 65174, 65175, 65176], 1579: [65177, 65178, 65179, 65180], 1580: [65181, 65182, 65183, 65184], 1581: [65185, 65186, 65187, 65188], 1582: [65189, 65190, 65191, 65192], 1583: [65193, 65194], 1584: [65195, 65196], 1585: [65197, 65198], 1586: [65199, 65200], 1587: [65201, 65202, 65203, 65204], 1588: [65205, 65206, 65207, 65208], 1589: [65209, 65210, 65211, 65212], 1590: [65213, 65214, 65215, 65216], 1591: [65217, 65218, 65219, 65220], 1592: [65221, 65222, 65223, 65224], 1593: [65225, 65226, 65227, 65228], 1594: [65229, 65230, 65231, 65232], 1601: [65233, 65234, 65235, 65236], 1602: [65237, 65238, 65239, 65240], 1603: [65241, 65242, 65243, 65244], 1604: [65245, 65246, 65247, 65248], 1605: [65249, 65250, 65251, 65252], 1606: [65253, 65254, 65255, 65256], 1607: [65257, 65258, 65259, 65260], 1608: [65261, 65262], 1609: [65263, 65264, 64488, 64489], 1610: [65265, 65266, 65267, 65268], 1649: [64336, 64337], 1655: [64477], 1657: [64358, 64359, 64360, 64361], 1658: [64350, 64351, 64352, 64353], 1659: [64338, 64339, 64340, 64341], 1662: [64342, 64343, 64344, 64345], 1663: [64354, 64355, 64356, 64357], 1664: [64346, 64347, 64348, 64349], 1667: [64374, 64375, 64376, 64377], 1668: [64370, 64371, 64372, 64373], 1670: [64378, 64379, 64380, 64381], 1671: [64382, 64383, 64384, 64385], 1672: [64392, 64393], 1676: [64388, 64389], 1677: [64386, 64387], 1678: [64390, 64391], 1681: [64396, 64397], 1688: [64394, 64395], 1700: [64362, 64363, 64364, 64365], 1702: [64366, 64367, 64368, 64369], 1705: [64398, 64399, 64400, 64401], 1709: [64467, 64468, 64469, 64470], 1711: [64402, 64403, 64404, 64405], 1713: [64410, 64411, 64412, 64413], 1715: [64406, 64407, 64408, 64409], 1722: [64414, 64415], 1723: [64416, 64417, 64418, 64419], 1726: [64426, 64427, 64428, 64429], 1728: [64420, 64421], 1729: [64422, 64423, 64424, 64425], 1733: [64480, 64481], 1734: [64473, 64474], 1735: [64471, 64472], 1736: [64475, 64476], 1737: [64482, 64483], 1739: [64478, 64479], 1740: [64508, 64509, 64510, 64511], 1744: [64484, 64485, 64486, 64487], 1746: [64430, 64431], 1747: [64432, 64433] }, r2 = { 65247: { 65154: 65269, 65156: 65271, 65160: 65273, 65166: 65275 }, 65248: { 65154: 65270, 65156: 65272, 65160: 65274, 65166: 65276 }, 65165: { 65247: { 65248: { 65258: 65010 } } }, 1617: { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 } }, n2 = { 1612: 64606, 1613: 64607, 1614: 64608, 1615: 64609, 1616: 64610 }, i2 = [1570, 1571, 1573, 1575];
      t2.__arabicParser__ = {};
      var a2 = t2.__arabicParser__.isInArabicSubstitutionA = function(t3) {
        return void 0 !== e2[t3.charCodeAt(0)];
      }, o2 = t2.__arabicParser__.isArabicLetter = function(t3) {
        return "string" == typeof t3 && /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(t3);
      }, s2 = t2.__arabicParser__.isArabicEndLetter = function(t3) {
        return o2(t3) && a2(t3) && e2[t3.charCodeAt(0)].length <= 2;
      }, c2 = t2.__arabicParser__.isArabicAlfLetter = function(t3) {
        return o2(t3) && i2.indexOf(t3.charCodeAt(0)) >= 0;
      };
      t2.__arabicParser__.arabicLetterHasIsolatedForm = function(t3) {
        return o2(t3) && a2(t3) && e2[t3.charCodeAt(0)].length >= 1;
      };
      var u2 = t2.__arabicParser__.arabicLetterHasFinalForm = function(t3) {
        return o2(t3) && a2(t3) && e2[t3.charCodeAt(0)].length >= 2;
      };
      t2.__arabicParser__.arabicLetterHasInitialForm = function(t3) {
        return o2(t3) && a2(t3) && e2[t3.charCodeAt(0)].length >= 3;
      };
      var l2 = t2.__arabicParser__.arabicLetterHasMedialForm = function(t3) {
        return o2(t3) && a2(t3) && 4 == e2[t3.charCodeAt(0)].length;
      }, h2 = t2.__arabicParser__.resolveLigatures = function(t3) {
        var e3 = 0, n3 = r2, i3 = "", a3 = 0;
        for (e3 = 0; e3 < t3.length; e3 += 1) void 0 !== n3[t3.charCodeAt(e3)] ? (a3++, "number" == typeof (n3 = n3[t3.charCodeAt(e3)]) && (i3 += String.fromCharCode(n3), n3 = r2, a3 = 0), e3 === t3.length - 1 && (n3 = r2, i3 += t3.charAt(e3 - (a3 - 1)), e3 -= a3 - 1, a3 = 0)) : (n3 = r2, i3 += t3.charAt(e3 - a3), e3 -= a3, a3 = 0);
        return i3;
      };
      t2.__arabicParser__.isArabicDiacritic = function(t3) {
        return void 0 !== t3 && void 0 !== n2[t3.charCodeAt(0)];
      };
      var f2 = t2.__arabicParser__.getCorrectForm = function(t3, e3, r3) {
        return o2(t3) ? false === a2(t3) ? -1 : !u2(t3) || !o2(e3) && !o2(r3) || !o2(r3) && s2(e3) || s2(t3) && !o2(e3) || s2(t3) && c2(e3) || s2(t3) && s2(e3) ? 0 : l2(t3) && o2(e3) && !s2(e3) && o2(r3) && u2(r3) ? 3 : s2(t3) || !o2(r3) ? 1 : 2 : -1;
      }, d2 = function(t3) {
        var r3 = 0, n3 = 0, i3 = 0, a3 = "", s3 = "", c3 = "", u3 = (t3 = t3 || "").split("\\s+"), l3 = [];
        for (r3 = 0; r3 < u3.length; r3 += 1) {
          for (l3.push(""), n3 = 0; n3 < u3[r3].length; n3 += 1) a3 = u3[r3][n3], s3 = u3[r3][n3 - 1], c3 = u3[r3][n3 + 1], o2(a3) ? (i3 = f2(a3, s3, c3), l3[r3] += -1 !== i3 ? String.fromCharCode(e2[a3.charCodeAt(0)][i3]) : a3) : l3[r3] += a3;
          l3[r3] = h2(l3[r3]);
        }
        return l3.join(" ");
      }, p2 = t2.__arabicParser__.processArabic = t2.processArabic = function() {
        var t3, e3 = "string" == typeof arguments[0] ? arguments[0] : arguments[0].text, r3 = [];
        if (Array.isArray(e3)) {
          var n3 = 0;
          for (r3 = [], n3 = 0; n3 < e3.length; n3 += 1) Array.isArray(e3[n3]) ? r3.push([d2(e3[n3][0]), e3[n3][1], e3[n3][2]]) : r3.push([d2(e3[n3])]);
          t3 = r3;
        } else t3 = d2(e3);
        return "string" == typeof arguments[0] ? t3 : (arguments[0].text = t3, arguments[0]);
      };
      t2.events.push(["preProcessText", p2]);
    })(j.API), j.API.autoPrint = function(t2) {
      var e2;
      return (t2 = t2 || {}).variant = t2.variant || "non-conform", "javascript" === t2.variant ? this.addJS("print({});") : (this.internal.events.subscribe("postPutResources", function() {
        e2 = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /Named"), this.internal.out("/Type /Action"), this.internal.out("/N /Print"), this.internal.out(">>"), this.internal.out("endobj");
      }), this.internal.events.subscribe("putCatalog", function() {
        this.internal.out("/OpenAction " + e2 + " 0 R");
      })), this;
    }, /**
     * @license
     * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
    (function(t2) {
      var e2 = function() {
        var t3 = void 0;
        Object.defineProperty(this, "pdf", { get: function() {
          return t3;
        }, set: function(e4) {
          t3 = e4;
        } });
        var e3 = 150;
        Object.defineProperty(this, "width", { get: function() {
          return e3;
        }, set: function(t4) {
          e3 = isNaN(t4) || false === Number.isInteger(t4) || t4 < 0 ? 150 : t4, this.getContext("2d").pageWrapXEnabled && (this.getContext("2d").pageWrapX = e3 + 1);
        } });
        var r2 = 300;
        Object.defineProperty(this, "height", { get: function() {
          return r2;
        }, set: function(t4) {
          r2 = isNaN(t4) || false === Number.isInteger(t4) || t4 < 0 ? 300 : t4, this.getContext("2d").pageWrapYEnabled && (this.getContext("2d").pageWrapY = r2 + 1);
        } });
        var n2 = [];
        Object.defineProperty(this, "childNodes", { get: function() {
          return n2;
        }, set: function(t4) {
          n2 = t4;
        } });
        var i2 = {};
        Object.defineProperty(this, "style", { get: function() {
          return i2;
        }, set: function(t4) {
          i2 = t4;
        } }), Object.defineProperty(this, "parentNode", {});
      };
      e2.prototype.getContext = function(t3, e3) {
        var r2;
        if ("2d" !== (t3 = t3 || "2d")) return null;
        for (r2 in e3) this.pdf.context2d.hasOwnProperty(r2) && (this.pdf.context2d[r2] = e3[r2]);
        return this.pdf.context2d._canvas = this, this.pdf.context2d;
      }, e2.prototype.toDataURL = function() {
        throw new Error("toDataURL is not implemented.");
      }, t2.events.push(["initialized", function() {
        this.canvas = new e2(), this.canvas.pdf = this;
      }]);
    })(j.API), /**
     * @license
     * ====================================================================
     * Copyright (c) 2013 Youssef Beddad, youssef.beddad@gmail.com
     *               2013 Eduardo Menezes de Morais, eduardo.morais@usp.br
     *               2013 Lee Driscoll, https://github.com/lsdriscoll
     *               2014 Juan Pablo Gaviria, https://github.com/juanpgaviria
     *               2014 James Hall, james@parall.ax
     *               2014 Diego Casorran, https://github.com/diegocr
     *
     * Permission is hereby granted, free of charge, to any person obtaining
     * a copy of this software and associated documentation files (the
     * "Software"), to deal in the Software without restriction, including
     * without limitation the rights to use, copy, modify, merge, publish,
     * distribute, sublicense, and/or sell copies of the Software, and to
     * permit persons to whom the Software is furnished to do so, subject to
     * the following conditions:
     *
     * The above copyright notice and this permission notice shall be
     * included in all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
     * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
     * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
     * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
     * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
     * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
     * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
     * ====================================================================
     */
    (function(t2) {
      var e2 = { left: 0, top: 0, bottom: 0, right: 0 }, r2 = false, n2 = function() {
        void 0 === this.internal.__cell__ && (this.internal.__cell__ = {}, this.internal.__cell__.padding = 3, this.internal.__cell__.headerFunction = void 0, this.internal.__cell__.margins = Object.assign({}, e2), this.internal.__cell__.margins.width = this.getPageWidth(), i2.call(this));
      }, i2 = function() {
        this.internal.__cell__.lastCell = new a2(), this.internal.__cell__.pages = 1;
      }, a2 = function() {
        var t3 = arguments[0];
        Object.defineProperty(this, "x", { enumerable: true, get: function() {
          return t3;
        }, set: function(e4) {
          t3 = e4;
        } });
        var e3 = arguments[1];
        Object.defineProperty(this, "y", { enumerable: true, get: function() {
          return e3;
        }, set: function(t4) {
          e3 = t4;
        } });
        var r3 = arguments[2];
        Object.defineProperty(this, "width", { enumerable: true, get: function() {
          return r3;
        }, set: function(t4) {
          r3 = t4;
        } });
        var n3 = arguments[3];
        Object.defineProperty(this, "height", { enumerable: true, get: function() {
          return n3;
        }, set: function(t4) {
          n3 = t4;
        } });
        var i3 = arguments[4];
        Object.defineProperty(this, "text", { enumerable: true, get: function() {
          return i3;
        }, set: function(t4) {
          i3 = t4;
        } });
        var a3 = arguments[5];
        Object.defineProperty(this, "lineNumber", { enumerable: true, get: function() {
          return a3;
        }, set: function(t4) {
          a3 = t4;
        } });
        var o3 = arguments[6];
        return Object.defineProperty(this, "align", { enumerable: true, get: function() {
          return o3;
        }, set: function(t4) {
          o3 = t4;
        } }), this;
      };
      a2.prototype.clone = function() {
        return new a2(this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align);
      }, a2.prototype.toArray = function() {
        return [this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align];
      }, t2.setHeaderFunction = function(t3) {
        return n2.call(this), this.internal.__cell__.headerFunction = "function" == typeof t3 ? t3 : void 0, this;
      }, t2.getTextDimensions = function(t3, e3) {
        n2.call(this);
        var r3 = (e3 = e3 || {}).fontSize || this.getFontSize(), i3 = e3.font || this.getFont(), a3 = e3.scaleFactor || this.internal.scaleFactor, o3 = 0, s3 = 0, c2 = 0, u2 = this;
        if (!Array.isArray(t3) && "string" != typeof t3) {
          if ("number" != typeof t3) throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");
          t3 = String(t3);
        }
        const l2 = e3.maxWidth;
        l2 > 0 ? "string" == typeof t3 ? t3 = this.splitTextToSize(t3, l2) : "[object Array]" === Object.prototype.toString.call(t3) && (t3 = t3.reduce(function(t4, e4) {
          return t4.concat(u2.splitTextToSize(e4, l2));
        }, [])) : t3 = Array.isArray(t3) ? t3 : [t3];
        for (var h2 = 0; h2 < t3.length; h2++) o3 < (c2 = this.getStringUnitWidth(t3[h2], { font: i3 }) * r3) && (o3 = c2);
        return 0 !== o3 && (s3 = t3.length), { w: o3 /= a3, h: Math.max((s3 * r3 * this.getLineHeightFactor() - r3 * (this.getLineHeightFactor() - 1)) / a3, 0) };
      }, t2.cellAddPage = function() {
        n2.call(this), this.addPage();
        var t3 = this.internal.__cell__.margins || e2;
        return this.internal.__cell__.lastCell = new a2(t3.left, t3.top, void 0, void 0), this.internal.__cell__.pages += 1, this;
      };
      var o2 = t2.cell = function() {
        var t3;
        t3 = arguments[0] instanceof a2 ? arguments[0] : new a2(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6]), n2.call(this);
        var i3 = this.internal.__cell__.lastCell, o3 = this.internal.__cell__.padding, s3 = this.internal.__cell__.margins || e2, c2 = this.internal.__cell__.tableHeaderRow, u2 = this.internal.__cell__.printHeaders;
        return void 0 !== i3.lineNumber && (i3.lineNumber === t3.lineNumber ? (t3.x = (i3.x || 0) + (i3.width || 0), t3.y = i3.y || 0) : i3.y + i3.height + t3.height + s3.bottom > this.getPageHeight() ? (this.cellAddPage(), t3.y = s3.top, u2 && c2 && (this.printHeaderRow(t3.lineNumber, true), t3.y += c2[0].height)) : t3.y = i3.y + i3.height || t3.y), void 0 !== t3.text[0] && (this.rect(t3.x, t3.y, t3.width, t3.height, true === r2 ? "FD" : void 0), "right" === t3.align ? this.text(t3.text, t3.x + t3.width - o3, t3.y + o3, { align: "right", baseline: "top" }) : "center" === t3.align ? this.text(t3.text, t3.x + t3.width / 2, t3.y + o3, { align: "center", baseline: "top", maxWidth: t3.width - o3 - o3 }) : this.text(t3.text, t3.x + o3, t3.y + o3, { align: "left", baseline: "top", maxWidth: t3.width - o3 - o3 })), this.internal.__cell__.lastCell = t3, this;
      };
      t2.table = function(t3, r3, c2, u2, l2) {
        if (n2.call(this), !c2) throw new Error("No data for PDF table.");
        var h2, f2, d2, p2, g2 = [], m2 = [], v2 = [], b2 = {}, y2 = {}, w2 = [], N2 = [], L2 = (l2 = l2 || {}).autoSize || false, x2 = false !== l2.printHeaders, A2 = l2.css && void 0 !== l2.css["font-size"] ? 16 * l2.css["font-size"] : l2.fontSize || 12, S2 = l2.margins || Object.assign({ width: this.getPageWidth() }, e2), _2 = "number" == typeof l2.padding ? l2.padding : 3, P2 = l2.headerBackgroundColor || "#c8c8c8", k2 = l2.headerTextColor || "#000";
        if (i2.call(this), this.internal.__cell__.printHeaders = x2, this.internal.__cell__.margins = S2, this.internal.__cell__.table_font_size = A2, this.internal.__cell__.padding = _2, this.internal.__cell__.headerBackgroundColor = P2, this.internal.__cell__.headerTextColor = k2, this.setFontSize(A2), null == u2) m2 = g2 = Object.keys(c2[0]), v2 = g2.map(function() {
          return "left";
        });
        else if (Array.isArray(u2) && "object" == typeof u2[0]) for (g2 = u2.map(function(t4) {
          return t4.name;
        }), m2 = u2.map(function(t4) {
          return t4.prompt || t4.name || "";
        }), v2 = u2.map(function(t4) {
          return t4.align || "left";
        }), h2 = 0; h2 < u2.length; h2 += 1) y2[u2[h2].name] = 0.7499990551181103 * u2[h2].width;
        else Array.isArray(u2) && "string" == typeof u2[0] && (m2 = g2 = u2, v2 = g2.map(function() {
          return "left";
        }));
        if (L2 || Array.isArray(u2) && "string" == typeof u2[0]) for (h2 = 0; h2 < g2.length; h2 += 1) {
          for (b2[p2 = g2[h2]] = c2.map(function(t4) {
            return t4[p2];
          }), this.setFont(void 0, "bold"), w2.push(this.getTextDimensions(m2[h2], { fontSize: this.internal.__cell__.table_font_size, scaleFactor: this.internal.scaleFactor }).w), f2 = b2[p2], this.setFont(void 0, "normal"), d2 = 0; d2 < f2.length; d2 += 1) w2.push(this.getTextDimensions(f2[d2], { fontSize: this.internal.__cell__.table_font_size, scaleFactor: this.internal.scaleFactor }).w);
          y2[p2] = Math.max.apply(null, w2) + _2 + _2, w2 = [];
        }
        if (x2) {
          var F2 = {};
          for (h2 = 0; h2 < g2.length; h2 += 1) F2[g2[h2]] = {}, F2[g2[h2]].text = m2[h2], F2[g2[h2]].align = v2[h2];
          var I2 = s2.call(this, F2, y2);
          N2 = g2.map(function(e3) {
            return new a2(t3, r3, y2[e3], I2, F2[e3].text, void 0, F2[e3].align);
          }), this.setTableHeaderRow(N2), this.printHeaderRow(1, false);
        }
        var j2 = u2.reduce(function(t4, e3) {
          return t4[e3.name] = e3.align, t4;
        }, {});
        for (h2 = 0; h2 < c2.length; h2 += 1) {
          "rowStart" in l2 && l2.rowStart instanceof Function && l2.rowStart({ row: h2, data: c2[h2] }, this);
          var C2 = s2.call(this, c2[h2], y2);
          for (d2 = 0; d2 < g2.length; d2 += 1) {
            var O2 = c2[h2][g2[d2]];
            "cellStart" in l2 && l2.cellStart instanceof Function && l2.cellStart({ row: h2, col: d2, data: O2 }, this), o2.call(this, new a2(t3, r3, y2[g2[d2]], C2, O2, h2 + 2, j2[g2[d2]]));
          }
        }
        return this.internal.__cell__.table_x = t3, this.internal.__cell__.table_y = r3, this;
      };
      var s2 = function(t3, e3) {
        var r3 = this.internal.__cell__.padding, n3 = this.internal.__cell__.table_font_size, i3 = this.internal.scaleFactor;
        return Object.keys(t3).map(function(n4) {
          var i4 = t3[n4];
          return this.splitTextToSize(i4.hasOwnProperty("text") ? i4.text : i4, e3[n4] - r3 - r3);
        }, this).map(function(t4) {
          return this.getLineHeightFactor() * t4.length * n3 / i3 + r3 + r3;
        }, this).reduce(function(t4, e4) {
          return Math.max(t4, e4);
        }, 0);
      };
      t2.setTableHeaderRow = function(t3) {
        n2.call(this), this.internal.__cell__.tableHeaderRow = t3;
      }, t2.printHeaderRow = function(t3, e3) {
        if (n2.call(this), !this.internal.__cell__.tableHeaderRow) throw new Error("Property tableHeaderRow does not exist.");
        var i3;
        if (r2 = true, "function" == typeof this.internal.__cell__.headerFunction) {
          var s3 = this.internal.__cell__.headerFunction(this, this.internal.__cell__.pages);
          this.internal.__cell__.lastCell = new a2(s3[0], s3[1], s3[2], s3[3], void 0, -1);
        }
        this.setFont(void 0, "bold");
        for (var c2 = [], u2 = 0; u2 < this.internal.__cell__.tableHeaderRow.length; u2 += 1) {
          i3 = this.internal.__cell__.tableHeaderRow[u2].clone(), e3 && (i3.y = this.internal.__cell__.margins.top || 0, c2.push(i3)), i3.lineNumber = t3;
          var l2 = this.getTextColor();
          this.setTextColor(this.internal.__cell__.headerTextColor), this.setFillColor(this.internal.__cell__.headerBackgroundColor), o2.call(this, i3), this.setTextColor(l2);
        }
        c2.length > 0 && this.setTableHeaderRow(c2), this.setFont(void 0, "normal"), r2 = false;
      };
    })(j.API);
    var wt = { italic: ["italic", "oblique", "normal"], oblique: ["oblique", "italic", "normal"], normal: ["normal", "oblique", "italic"] }, Nt = ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded"], Lt = yt(Nt), xt = [100, 200, 300, 400, 500, 600, 700, 800, 900], At = yt(xt);
    function St(t2) {
      var e2 = t2.family.replace(/"|'/g, "").toLowerCase(), r2 = (function(t3) {
        return wt[t3 = t3 || "normal"] ? t3 : "normal";
      })(t2.style), n2 = (function(t3) {
        return t3 ? "number" == typeof t3 ? t3 >= 100 && t3 <= 900 && t3 % 100 == 0 ? t3 : 400 : /^\d00$/.test(t3) ? parseInt(t3) : "bold" === t3 ? 700 : 400 : 400;
      })(t2.weight), i2 = (function(t3) {
        return "number" == typeof Lt[t3 = t3 || "normal"] ? t3 : "normal";
      })(t2.stretch);
      return { family: e2, style: r2, weight: n2, stretch: i2, src: t2.src || [], ref: t2.ref || { name: e2, style: [i2, r2, n2].join(" ") } };
    }
    function _t(t2, e2, r2, n2) {
      var i2;
      for (i2 = r2; i2 >= 0 && i2 < e2.length; i2 += n2) if (t2[e2[i2]]) return t2[e2[i2]];
      for (i2 = r2; i2 >= 0 && i2 < e2.length; i2 -= n2) if (t2[e2[i2]]) return t2[e2[i2]];
    }
    var Pt = { "sans-serif": "helvetica", fixed: "courier", monospace: "courier", terminal: "courier", cursive: "times", fantasy: "times", serif: "times" }, kt = { caption: "times", icon: "times", menu: "times", "message-box": "times", "small-caption": "times", "status-bar": "times" };
    function Ft(t2) {
      return [t2.stretch, t2.style, t2.weight, t2.family].join(" ");
    }
    function It(t2) {
      return t2.trimLeft();
    }
    function jt(t2, e2) {
      for (var r2 = 0; r2 < t2.length; ) {
        if (t2.charAt(r2) === e2) return [t2.substring(0, r2), t2.substring(r2 + 1)];
        r2 += 1;
      }
      return null;
    }
    function Ct(t2) {
      var e2 = t2.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);
      return null === e2 ? null : [e2[0], t2.substring(e2[0].length)];
    }
    var Ot, Bt, qt, Mt, Et, Rt, Dt, Tt, zt = ["times"];
    function Ut(e2, r2, n2, i2, a2) {
      let o2 = 4, s2 = Vt;
      switch (a2) {
        case j.API.image_compression.FAST:
          o2 = 1, s2 = Wt;
          break;
        case j.API.image_compression.MEDIUM:
          o2 = 6, s2 = Gt;
          break;
        case j.API.image_compression.SLOW:
          o2 = 9, s2 = Yt;
      }
      e2 = (function(t2, e3, r3, n3) {
        const i3 = t2.length / e3, a3 = new Uint8Array(t2.length + i3), o3 = [Ht, Wt, Vt, Gt, Yt];
        let s3;
        for (let c3 = 0; c3 < i3; c3 += 1) {
          const i4 = c3 * e3, u2 = t2.subarray(i4, i4 + e3);
          if (n3) a3.set(n3(u2, r3, s3), i4 + c3);
          else {
            const t3 = o3.length, e4 = [];
            for (let i5 = 0; i5 < t3; i5 += 1) e4[i5] = o3[i5](u2, r3, s3);
            const n4 = Xt(e4.concat());
            a3.set(e4[n4], i4 + c3);
          }
          s3 = u2;
        }
        return a3;
      })(e2, r2, Math.ceil(n2 * i2 / 8), s2);
      const c2 = t.zlibSync(e2, { level: o2 });
      return j.API.__addimage__.arrayBufferToBinaryString(c2);
    }
    function Ht(t2) {
      const e2 = Array.apply([], t2);
      return e2.unshift(0), e2;
    }
    function Wt(t2, e2) {
      const r2 = t2.length, n2 = [];
      n2[0] = 1;
      for (let i2 = 0; i2 < r2; i2 += 1) {
        const r3 = t2[i2 - e2] || 0;
        n2[i2 + 1] = t2[i2] - r3 + 256 & 255;
      }
      return n2;
    }
    function Vt(t2, e2, r2) {
      const n2 = t2.length, i2 = [];
      i2[0] = 2;
      for (let a2 = 0; a2 < n2; a2 += 1) {
        const e3 = r2 && r2[a2] || 0;
        i2[a2 + 1] = t2[a2] - e3 + 256 & 255;
      }
      return i2;
    }
    function Gt(t2, e2, r2) {
      const n2 = t2.length, i2 = [];
      i2[0] = 3;
      for (let a2 = 0; a2 < n2; a2 += 1) {
        const n3 = t2[a2 - e2] || 0, o2 = r2 && r2[a2] || 0;
        i2[a2 + 1] = t2[a2] + 256 - (n3 + o2 >>> 1) & 255;
      }
      return i2;
    }
    function Yt(t2, e2, r2) {
      const n2 = t2.length, i2 = [];
      i2[0] = 4;
      for (let a2 = 0; a2 < n2; a2 += 1) {
        const n3 = Jt(t2[a2 - e2] || 0, r2 && r2[a2] || 0, r2 && r2[a2 - e2] || 0);
        i2[a2 + 1] = t2[a2] - n3 + 256 & 255;
      }
      return i2;
    }
    function Jt(t2, e2, r2) {
      if (t2 === e2 && e2 === r2) return t2;
      const n2 = Math.abs(e2 - r2), i2 = Math.abs(t2 - r2), a2 = Math.abs(t2 + e2 - r2 - r2);
      return n2 <= i2 && n2 <= a2 ? t2 : i2 <= a2 ? e2 : r2;
    }
    function Xt(t2) {
      const e2 = t2.map(function(t3) {
        return t3.reduce(function(t4, e3) {
          return t4 + Math.abs(e3);
        }, 0);
      });
      return e2.indexOf(Math.min.apply(null, e2));
    }
    function Kt(t2, e2, r2) {
      const n2 = e2 * r2, i2 = Math.floor(n2 / 8), a2 = 16 - (n2 - 8 * i2 + r2), o2 = (1 << r2) - 1;
      return Zt(t2, i2) >> a2 & o2;
    }
    function $t(t2, e2, r2, n2) {
      const i2 = r2 * n2, a2 = Math.floor(i2 / 8), o2 = 16 - (i2 - 8 * a2 + n2), s2 = (1 << n2) - 1, c2 = (e2 & s2) << o2;
      !(function(t3, e3, r3) {
        if (e3 + 1 < t3.byteLength) return void t3.setUint16(e3, r3, false);
        const n3 = r3 >> 8 & 255;
        t3.setUint8(e3, n3);
      })(t2, a2, Zt(t2, a2) & ~(s2 << o2) & 65535 | c2);
    }
    function Zt(t2, e2) {
      return e2 + 1 < t2.byteLength ? t2.getUint16(e2, false) : t2.getUint8(e2) << 8;
    }
    function Qt(t2) {
      var e2 = 0;
      if (71 !== t2[e2++] || 73 !== t2[e2++] || 70 !== t2[e2++] || 56 !== t2[e2++] || 56 != (t2[e2++] + 1 & 253) || 97 !== t2[e2++]) throw new Error("Invalid GIF 87a/89a header.");
      var r2 = t2[e2++] | t2[e2++] << 8, n2 = t2[e2++] | t2[e2++] << 8, i2 = t2[e2++], a2 = i2 >> 7, o2 = 1 << 1 + (7 & i2);
      t2[e2++], t2[e2++];
      var s2 = null, c2 = null;
      a2 && (s2 = e2, c2 = o2, e2 += 3 * o2);
      var u2 = true, l2 = [], h2 = 0, f2 = null, d2 = 0, p2 = null;
      for (this.width = r2, this.height = n2; u2 && e2 < t2.length; ) switch (t2[e2++]) {
        case 33:
          switch (t2[e2++]) {
            case 255:
              if (11 !== t2[e2] || 78 == t2[e2 + 1] && 69 == t2[e2 + 2] && 84 == t2[e2 + 3] && 83 == t2[e2 + 4] && 67 == t2[e2 + 5] && 65 == t2[e2 + 6] && 80 == t2[e2 + 7] && 69 == t2[e2 + 8] && 50 == t2[e2 + 9] && 46 == t2[e2 + 10] && 48 == t2[e2 + 11] && 3 == t2[e2 + 12] && 1 == t2[e2 + 13] && 0 == t2[e2 + 16]) e2 += 14, p2 = t2[e2++] | t2[e2++] << 8, e2++;
              else for (e2 += 12; ; ) {
                if (!((P2 = t2[e2++]) >= 0)) throw Error("Invalid block size");
                if (0 === P2) break;
                e2 += P2;
              }
              break;
            case 249:
              if (4 !== t2[e2++] || 0 !== t2[e2 + 4]) throw new Error("Invalid graphics extension block.");
              var g2 = t2[e2++];
              h2 = t2[e2++] | t2[e2++] << 8, f2 = t2[e2++], 1 & g2 || (f2 = null), d2 = g2 >> 2 & 7, e2++;
              break;
            case 254:
              for (; ; ) {
                if (!((P2 = t2[e2++]) >= 0)) throw Error("Invalid block size");
                if (0 === P2) break;
                e2 += P2;
              }
              break;
            default:
              throw new Error("Unknown graphic control label: 0x" + t2[e2 - 1].toString(16));
          }
          break;
        case 44:
          var m2 = t2[e2++] | t2[e2++] << 8, v2 = t2[e2++] | t2[e2++] << 8, b2 = t2[e2++] | t2[e2++] << 8, y2 = t2[e2++] | t2[e2++] << 8, w2 = t2[e2++], N2 = w2 >> 6 & 1, L2 = 1 << 1 + (7 & w2), x2 = s2, A2 = c2, S2 = false;
          w2 >> 7 && (S2 = true, x2 = e2, A2 = L2, e2 += 3 * L2);
          var _2 = e2;
          for (e2++; ; ) {
            var P2;
            if (!((P2 = t2[e2++]) >= 0)) throw Error("Invalid block size");
            if (0 === P2) break;
            e2 += P2;
          }
          l2.push({ x: m2, y: v2, width: b2, height: y2, has_local_palette: S2, palette_offset: x2, palette_size: A2, data_offset: _2, data_length: e2 - _2, transparent_index: f2, interlaced: !!N2, delay: h2, disposal: d2 });
          break;
        case 59:
          u2 = false;
          break;
        default:
          throw new Error("Unknown gif block: 0x" + t2[e2 - 1].toString(16));
      }
      this.numFrames = function() {
        return l2.length;
      }, this.loopCount = function() {
        return p2;
      }, this.frameInfo = function(t3) {
        if (t3 < 0 || t3 >= l2.length) throw new Error("Frame index out of range.");
        return l2[t3];
      }, this.decodeAndBlitFrameBGRA = function(e3, n3) {
        var i3 = this.frameInfo(e3), a3 = i3.width * i3.height, o3 = new Uint8Array(a3);
        te(t2, i3.data_offset, o3, a3);
        var s3 = i3.palette_offset, c3 = i3.transparent_index;
        null === c3 && (c3 = 256);
        var u3 = i3.width, l3 = r2 - u3, h3 = u3, f3 = 4 * (i3.y * r2 + i3.x), d3 = 4 * ((i3.y + i3.height) * r2 + i3.x), p3 = f3, g3 = 4 * l3;
        true === i3.interlaced && (g3 += 4 * r2 * 7);
        for (var m3 = 8, v3 = 0, b3 = o3.length; v3 < b3; ++v3) {
          var y3 = o3[v3];
          if (0 === h3 && (h3 = u3, (p3 += g3) >= d3 && (g3 = 4 * l3 + 4 * r2 * (m3 - 1), p3 = f3 + (u3 + l3) * (m3 << 1), m3 >>= 1)), y3 === c3) p3 += 4;
          else {
            var w3 = t2[s3 + 3 * y3], N3 = t2[s3 + 3 * y3 + 1], L3 = t2[s3 + 3 * y3 + 2];
            n3[p3++] = L3, n3[p3++] = N3, n3[p3++] = w3, n3[p3++] = 255;
          }
          --h3;
        }
      }, this.decodeAndBlitFrameRGBA = function(e3, n3) {
        var i3 = this.frameInfo(e3), a3 = i3.width * i3.height, o3 = new Uint8Array(a3);
        te(t2, i3.data_offset, o3, a3);
        var s3 = i3.palette_offset, c3 = i3.transparent_index;
        null === c3 && (c3 = 256);
        var u3 = i3.width, l3 = r2 - u3, h3 = u3, f3 = 4 * (i3.y * r2 + i3.x), d3 = 4 * ((i3.y + i3.height) * r2 + i3.x), p3 = f3, g3 = 4 * l3;
        true === i3.interlaced && (g3 += 4 * r2 * 7);
        for (var m3 = 8, v3 = 0, b3 = o3.length; v3 < b3; ++v3) {
          var y3 = o3[v3];
          if (0 === h3 && (h3 = u3, (p3 += g3) >= d3 && (g3 = 4 * l3 + 4 * r2 * (m3 - 1), p3 = f3 + (u3 + l3) * (m3 << 1), m3 >>= 1)), y3 === c3) p3 += 4;
          else {
            var w3 = t2[s3 + 3 * y3], N3 = t2[s3 + 3 * y3 + 1], L3 = t2[s3 + 3 * y3 + 2];
            n3[p3++] = w3, n3[p3++] = N3, n3[p3++] = L3, n3[p3++] = 255;
          }
          --h3;
        }
      };
    }
    function te(t2, e2, r2, n2) {
      for (var i2 = t2[e2++], a2 = 1 << i2, o2 = a2 + 1, c2 = o2 + 1, u2 = i2 + 1, l2 = (1 << u2) - 1, h2 = 0, f2 = 0, d2 = 0, p2 = t2[e2++], g2 = new Int32Array(4096), m2 = null; ; ) {
        for (; h2 < 16 && 0 !== p2; ) f2 |= t2[e2++] << h2, h2 += 8, 1 === p2 ? p2 = t2[e2++] : --p2;
        if (h2 < u2) break;
        var v2 = f2 & l2;
        if (f2 >>= u2, h2 -= u2, v2 !== a2) {
          if (v2 === o2) break;
          for (var b2 = v2 < c2 ? v2 : m2, y2 = 0, w2 = b2; w2 > a2; ) w2 = g2[w2] >> 8, ++y2;
          var N2 = w2;
          if (d2 + y2 + (b2 !== v2 ? 1 : 0) > n2) return void s.log("Warning, gif stream longer than expected.");
          r2[d2++] = N2;
          var L2 = d2 += y2;
          for (b2 !== v2 && (r2[d2++] = N2), w2 = b2; y2--; ) w2 = g2[w2], r2[--L2] = 255 & w2, w2 >>= 8;
          null !== m2 && c2 < 4096 && (g2[c2++] = m2 << 8 | N2, c2 >= l2 + 1 && u2 < 12 && (++u2, l2 = l2 << 1 | 1)), m2 = v2;
        } else c2 = o2 + 1, l2 = (1 << (u2 = i2 + 1)) - 1, m2 = null;
      }
      return d2 !== n2 && s.log("Warning, gif stream shorter than expected."), r2;
    }
    function ee(t2) {
      var e2, r2, n2, i2, a2, o2 = Math.floor, s2 = new Array(64), c2 = new Array(64), u2 = new Array(64), l2 = new Array(64), h2 = new Array(65535), f2 = new Array(65535), d2 = new Array(64), p2 = new Array(64), g2 = [], m2 = 0, v2 = 7, b2 = new Array(64), y2 = new Array(64), w2 = new Array(64), N2 = new Array(256), L2 = new Array(2048), x2 = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63], A2 = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], S2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], _2 = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125], P2 = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250], k2 = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], F2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], I2 = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119], j2 = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];
      function C2(t3, e3) {
        for (var r3 = 0, n3 = 0, i3 = new Array(), a3 = 1; a3 <= 16; a3++) {
          for (var o3 = 1; o3 <= t3[a3]; o3++) i3[e3[n3]] = [], i3[e3[n3]][0] = r3, i3[e3[n3]][1] = a3, n3++, r3++;
          r3 *= 2;
        }
        return i3;
      }
      function O2(t3) {
        for (var e3 = t3[0], r3 = t3[1] - 1; r3 >= 0; ) e3 & 1 << r3 && (m2 |= 1 << v2), r3--, --v2 < 0 && (255 == m2 ? (B2(255), B2(0)) : B2(m2), v2 = 7, m2 = 0);
      }
      function B2(t3) {
        g2.push(t3);
      }
      function q2(t3) {
        B2(t3 >> 8 & 255), B2(255 & t3);
      }
      function M2(t3, e3, r3, n3, i3) {
        for (var a3, o3 = i3[0], s3 = i3[240], c3 = (function(t4, e4) {
          var r4, n4, i4, a4, o4, s4, c4, u4, l4, h3, f3 = 0;
          for (l4 = 0; l4 < 8; ++l4) {
            r4 = t4[f3], n4 = t4[f3 + 1], i4 = t4[f3 + 2], a4 = t4[f3 + 3], o4 = t4[f3 + 4], s4 = t4[f3 + 5], c4 = t4[f3 + 6];
            var p3 = r4 + (u4 = t4[f3 + 7]), g4 = r4 - u4, m4 = n4 + c4, v4 = n4 - c4, b4 = i4 + s4, y4 = i4 - s4, w4 = a4 + o4, N3 = a4 - o4, L3 = p3 + w4, x3 = p3 - w4, A3 = m4 + b4, S3 = m4 - b4;
            t4[f3] = L3 + A3, t4[f3 + 4] = L3 - A3;
            var _3 = 0.707106781 * (S3 + x3);
            t4[f3 + 2] = x3 + _3, t4[f3 + 6] = x3 - _3;
            var P3 = 0.382683433 * ((L3 = N3 + y4) - (S3 = v4 + g4)), k3 = 0.5411961 * L3 + P3, F3 = 1.306562965 * S3 + P3, I3 = 0.707106781 * (A3 = y4 + v4), j3 = g4 + I3, C3 = g4 - I3;
            t4[f3 + 5] = C3 + k3, t4[f3 + 3] = C3 - k3, t4[f3 + 1] = j3 + F3, t4[f3 + 7] = j3 - F3, f3 += 8;
          }
          for (f3 = 0, l4 = 0; l4 < 8; ++l4) {
            r4 = t4[f3], n4 = t4[f3 + 8], i4 = t4[f3 + 16], a4 = t4[f3 + 24], o4 = t4[f3 + 32], s4 = t4[f3 + 40], c4 = t4[f3 + 48];
            var O3 = r4 + (u4 = t4[f3 + 56]), B3 = r4 - u4, q3 = n4 + c4, M3 = n4 - c4, E3 = i4 + s4, R2 = i4 - s4, D2 = a4 + o4, T2 = a4 - o4, z2 = O3 + D2, U2 = O3 - D2, H2 = q3 + E3, W2 = q3 - E3;
            t4[f3] = z2 + H2, t4[f3 + 32] = z2 - H2;
            var V2 = 0.707106781 * (W2 + U2);
            t4[f3 + 16] = U2 + V2, t4[f3 + 48] = U2 - V2;
            var G2 = 0.382683433 * ((z2 = T2 + R2) - (W2 = M3 + B3)), Y2 = 0.5411961 * z2 + G2, J2 = 1.306562965 * W2 + G2, X2 = 0.707106781 * (H2 = R2 + M3), K2 = B3 + X2, $2 = B3 - X2;
            t4[f3 + 40] = $2 + Y2, t4[f3 + 24] = $2 - Y2, t4[f3 + 8] = K2 + J2, t4[f3 + 56] = K2 - J2, f3++;
          }
          for (l4 = 0; l4 < 64; ++l4) h3 = t4[l4] * e4[l4], d2[l4] = h3 > 0 ? h3 + 0.5 | 0 : h3 - 0.5 | 0;
          return d2;
        })(t3, e3), u3 = 0; u3 < 64; ++u3) p2[x2[u3]] = c3[u3];
        var l3 = p2[0] - r3;
        r3 = p2[0], 0 == l3 ? O2(n3[0]) : (O2(n3[f2[a3 = 32767 + l3]]), O2(h2[a3]));
        for (var g3 = 63; g3 > 0 && 0 == p2[g3]; ) g3--;
        if (0 == g3) return O2(o3), r3;
        for (var m3, v3 = 1; v3 <= g3; ) {
          for (var b3 = v3; 0 == p2[v3] && v3 <= g3; ) ++v3;
          var y3 = v3 - b3;
          if (y3 >= 16) {
            m3 = y3 >> 4;
            for (var w3 = 1; w3 <= m3; ++w3) O2(s3);
            y3 &= 15;
          }
          a3 = 32767 + p2[v3], O2(i3[(y3 << 4) + f2[a3]]), O2(h2[a3]), v3++;
        }
        return 63 != g3 && O2(o3), r3;
      }
      function E2(t3) {
        t3 = Math.min(Math.max(t3, 1), 100), a2 != t3 && ((function(t4) {
          for (var e3 = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], r3 = 0; r3 < 64; r3++) {
            var n3 = o2((e3[r3] * t4 + 50) / 100);
            n3 = Math.min(Math.max(n3, 1), 255), s2[x2[r3]] = n3;
          }
          for (var i3 = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], a3 = 0; a3 < 64; a3++) {
            var h3 = o2((i3[a3] * t4 + 50) / 100);
            h3 = Math.min(Math.max(h3, 1), 255), c2[x2[a3]] = h3;
          }
          for (var f3 = [1, 1.387039845, 1.306562965, 1.175875602, 1, 0.785694958, 0.5411961, 0.275899379], d3 = 0, p3 = 0; p3 < 8; p3++) for (var g3 = 0; g3 < 8; g3++) u2[d3] = 1 / (s2[x2[d3]] * f3[p3] * f3[g3] * 8), l2[d3] = 1 / (c2[x2[d3]] * f3[p3] * f3[g3] * 8), d3++;
        })(t3 < 50 ? Math.floor(5e3 / t3) : Math.floor(200 - 2 * t3)), a2 = t3);
      }
      this.encode = function(t3, a3) {
        a3 && E2(a3), g2 = new Array(), m2 = 0, v2 = 7, q2(65496), q2(65504), q2(16), B2(74), B2(70), B2(73), B2(70), B2(0), B2(1), B2(1), B2(0), q2(1), q2(1), B2(0), B2(0), (function() {
          q2(65499), q2(132), B2(0);
          for (var t4 = 0; t4 < 64; t4++) B2(s2[t4]);
          B2(1);
          for (var e3 = 0; e3 < 64; e3++) B2(c2[e3]);
        })(), (function(t4, e3) {
          q2(65472), q2(17), B2(8), q2(e3), q2(t4), B2(3), B2(1), B2(17), B2(0), B2(2), B2(17), B2(1), B2(3), B2(17), B2(1);
        })(t3.width, t3.height), (function() {
          q2(65476), q2(418), B2(0);
          for (var t4 = 0; t4 < 16; t4++) B2(A2[t4 + 1]);
          for (var e3 = 0; e3 <= 11; e3++) B2(S2[e3]);
          B2(16);
          for (var r3 = 0; r3 < 16; r3++) B2(_2[r3 + 1]);
          for (var n3 = 0; n3 <= 161; n3++) B2(P2[n3]);
          B2(1);
          for (var i3 = 0; i3 < 16; i3++) B2(k2[i3 + 1]);
          for (var a4 = 0; a4 <= 11; a4++) B2(F2[a4]);
          B2(17);
          for (var o4 = 0; o4 < 16; o4++) B2(I2[o4 + 1]);
          for (var s3 = 0; s3 <= 161; s3++) B2(j2[s3]);
        })(), q2(65498), q2(12), B2(3), B2(1), B2(0), B2(2), B2(17), B2(3), B2(17), B2(0), B2(63), B2(0);
        var o3 = 0, h3 = 0, f3 = 0;
        m2 = 0, v2 = 7, this.encode.displayName = "_encode_";
        for (var d3, p3, N3, x3, C3, R2, D2, T2, z2, U2 = t3.data, H2 = t3.width, W2 = t3.height, V2 = 4 * H2, G2 = 0; G2 < W2; ) {
          for (d3 = 0; d3 < V2; ) {
            for (C3 = V2 * G2 + d3, D2 = -1, T2 = 0, z2 = 0; z2 < 64; z2++) R2 = C3 + (T2 = z2 >> 3) * V2 + (D2 = 4 * (7 & z2)), G2 + T2 >= W2 && (R2 -= V2 * (G2 + 1 + T2 - W2)), d3 + D2 >= V2 && (R2 -= d3 + D2 - V2 + 4), p3 = U2[R2++], N3 = U2[R2++], x3 = U2[R2++], b2[z2] = (L2[p3] + L2[N3 + 256 | 0] + L2[x3 + 512 | 0] >> 16) - 128, y2[z2] = (L2[p3 + 768 | 0] + L2[N3 + 1024 | 0] + L2[x3 + 1280 | 0] >> 16) - 128, w2[z2] = (L2[p3 + 1280 | 0] + L2[N3 + 1536 | 0] + L2[x3 + 1792 | 0] >> 16) - 128;
            o3 = M2(b2, u2, o3, e2, n2), h3 = M2(y2, l2, h3, r2, i2), f3 = M2(w2, l2, f3, r2, i2), d3 += 32;
          }
          G2 += 8;
        }
        if (v2 >= 0) {
          var Y2 = [];
          Y2[1] = v2 + 1, Y2[0] = (1 << v2 + 1) - 1, O2(Y2);
        }
        return q2(65497), new Uint8Array(g2);
      }, t2 = t2 || 50, (function() {
        for (var t3 = String.fromCharCode, e3 = 0; e3 < 256; e3++) N2[e3] = t3(e3);
      })(), e2 = C2(A2, S2), r2 = C2(k2, F2), n2 = C2(_2, P2), i2 = C2(I2, j2), (function() {
        for (var t3 = 1, e3 = 2, r3 = 1; r3 <= 15; r3++) {
          for (var n3 = t3; n3 < e3; n3++) f2[32767 + n3] = r3, h2[32767 + n3] = [], h2[32767 + n3][1] = r3, h2[32767 + n3][0] = n3;
          for (var i3 = -(e3 - 1); i3 <= -t3; i3++) f2[32767 + i3] = r3, h2[32767 + i3] = [], h2[32767 + i3][1] = r3, h2[32767 + i3][0] = e3 - 1 + i3;
          t3 <<= 1, e3 <<= 1;
        }
      })(), (function() {
        for (var t3 = 0; t3 < 256; t3++) L2[t3] = 19595 * t3, L2[t3 + 256 | 0] = 38470 * t3, L2[t3 + 512 | 0] = 7471 * t3 + 32768, L2[t3 + 768 | 0] = -11059 * t3, L2[t3 + 1024 | 0] = -21709 * t3, L2[t3 + 1280 | 0] = 32768 * t3 + 8421375, L2[t3 + 1536 | 0] = -27439 * t3, L2[t3 + 1792 | 0] = -5329 * t3;
      })(), E2(t2);
    }
    function re(t2, e2) {
      if (this.pos = 0, this.buffer = t2, this.datav = new DataView(t2.buffer), this.is_with_alpha = !!e2, this.bottom_up = true, this.flag = String.fromCharCode(this.buffer[0]) + String.fromCharCode(this.buffer[1]), this.pos += 2, -1 === ["BM", "BA", "CI", "CP", "IC", "PT"].indexOf(this.flag)) throw new Error("Invalid BMP File");
      this.parseHeader(), this.parseBGR();
    }
    function ne(t2) {
      function e2(t3) {
        if (!t3) throw Error("assert :P");
      }
      function r2(t3, e3, r3) {
        for (var n3 = 0; 4 > n3; n3++) if (t3[e3 + n3] != r3.charCodeAt(n3)) return true;
        return false;
      }
      function n2(t3, e3, r3, n3, i3) {
        for (var a3 = 0; a3 < i3; a3++) t3[e3 + a3] = r3[n3 + a3];
      }
      function i2(t3, e3, r3, n3) {
        for (var i3 = 0; i3 < n3; i3++) t3[e3 + i3] = r3;
      }
      function a2(t3) {
        return new Int32Array(t3);
      }
      function o2(t3, e3) {
        for (var r3 = [], n3 = 0; n3 < t3; n3++) r3.push(new e3());
        return r3;
      }
      function s2(t3, e3) {
        var r3 = [];
        return (function t4(r4, n3, i3) {
          for (var a3 = i3[n3], o3 = 0; o3 < a3 && (r4.push(i3.length > n3 + 1 ? [] : new e3()), !(i3.length < n3 + 1)); o3++) t4(r4[o3], n3 + 1, i3);
        })(r3, 0, t3), r3;
      }
      var c2 = function() {
        var t3 = this;
        function c3(t4, e3) {
          for (var r3 = 1 << e3 - 1 >>> 0; t4 & r3; ) r3 >>>= 1;
          return r3 ? (t4 & r3 - 1) + r3 : t4;
        }
        function u3(t4, r3, n3, i3, a3) {
          e2(!(i3 % n3));
          do {
            t4[r3 + (i3 -= n3)] = a3;
          } while (0 < i3);
        }
        function l3(t4, r3, n3, i3, o3) {
          if (e2(2328 >= o3), 512 >= o3) var s3 = a2(512);
          else if (null == (s3 = a2(o3))) return 0;
          return (function(t5, r4, n4, i4, o4, s4) {
            var l4, f4, d4 = r4, p4 = 1 << n4, g4 = a2(16), m4 = a2(16);
            for (e2(0 != o4), e2(null != i4), e2(null != t5), e2(0 < n4), f4 = 0; f4 < o4; ++f4) {
              if (15 < i4[f4]) return 0;
              ++g4[i4[f4]];
            }
            if (g4[0] == o4) return 0;
            for (m4[1] = 0, l4 = 1; 15 > l4; ++l4) {
              if (g4[l4] > 1 << l4) return 0;
              m4[l4 + 1] = m4[l4] + g4[l4];
            }
            for (f4 = 0; f4 < o4; ++f4) l4 = i4[f4], 0 < i4[f4] && (s4[m4[l4]++] = f4);
            if (1 == m4[15]) return (i4 = new h3()).g = 0, i4.value = s4[0], u3(t5, d4, 1, p4, i4), p4;
            var v4, b4 = -1, y4 = p4 - 1, w4 = 0, N4 = 1, L4 = 1, x4 = 1 << n4;
            for (f4 = 0, l4 = 1, o4 = 2; l4 <= n4; ++l4, o4 <<= 1) {
              if (N4 += L4 <<= 1, 0 > (L4 -= g4[l4])) return 0;
              for (; 0 < g4[l4]; --g4[l4]) (i4 = new h3()).g = l4, i4.value = s4[f4++], u3(t5, d4 + w4, o4, x4, i4), w4 = c3(w4, l4);
            }
            for (l4 = n4 + 1, o4 = 2; 15 >= l4; ++l4, o4 <<= 1) {
              if (N4 += L4 <<= 1, 0 > (L4 -= g4[l4])) return 0;
              for (; 0 < g4[l4]; --g4[l4]) {
                if (i4 = new h3(), (w4 & y4) != b4) {
                  for (d4 += x4, v4 = 1 << (b4 = l4) - n4; 15 > b4 && !(0 >= (v4 -= g4[b4])); ) ++b4, v4 <<= 1;
                  p4 += x4 = 1 << (v4 = b4 - n4), t5[r4 + (b4 = w4 & y4)].g = v4 + n4, t5[r4 + b4].value = d4 - r4 - b4;
                }
                i4.g = l4 - n4, i4.value = s4[f4++], u3(t5, d4 + (w4 >> n4), o4, x4, i4), w4 = c3(w4, l4);
              }
            }
            return N4 != 2 * m4[15] - 1 ? 0 : p4;
          })(t4, r3, n3, i3, o3, s3);
        }
        function h3() {
          this.value = this.g = 0;
        }
        function f3() {
          this.value = this.g = 0;
        }
        function d3() {
          this.G = o2(5, h3), this.H = a2(5), this.jc = this.Qb = this.qb = this.nd = 0, this.pd = o2(Er, f3);
        }
        function p3(t4, r3, n3, i3) {
          e2(null != t4), e2(null != r3), e2(2147483648 > i3), t4.Ca = 254, t4.I = 0, t4.b = -8, t4.Ka = 0, t4.oa = r3, t4.pa = n3, t4.Jd = r3, t4.Yc = n3 + i3, t4.Zc = 4 <= i3 ? n3 + i3 - 4 + 1 : n3, _2(t4);
        }
        function g3(t4, e3) {
          for (var r3 = 0; 0 < e3--; ) r3 |= k2(t4, 128) << e3;
          return r3;
        }
        function m3(t4, e3) {
          var r3 = g3(t4, e3);
          return P2(t4) ? -r3 : r3;
        }
        function v3(t4, r3, n3, i3) {
          var a3, o3 = 0;
          for (e2(null != t4), e2(null != r3), e2(4294967288 > i3), t4.Sb = i3, t4.Ra = 0, t4.u = 0, t4.h = 0, 4 < i3 && (i3 = 4), a3 = 0; a3 < i3; ++a3) o3 += r3[n3 + a3] << 8 * a3;
          t4.Ra = o3, t4.bb = i3, t4.oa = r3, t4.pa = n3;
        }
        function b3(t4) {
          for (; 8 <= t4.u && t4.bb < t4.Sb; ) t4.Ra >>>= 8, t4.Ra += t4.oa[t4.pa + t4.bb] << Tr - 8 >>> 0, ++t4.bb, t4.u -= 8;
          x3(t4) && (t4.h = 1, t4.u = 0);
        }
        function y3(t4, r3) {
          if (e2(0 <= r3), !t4.h && r3 <= Dr) {
            var n3 = L3(t4) & Rr[r3];
            return t4.u += r3, b3(t4), n3;
          }
          return t4.h = 1, t4.u = 0;
        }
        function w3() {
          this.b = this.Ca = this.I = 0, this.oa = [], this.pa = 0, this.Jd = [], this.Yc = 0, this.Zc = [], this.Ka = 0;
        }
        function N3() {
          this.Ra = 0, this.oa = [], this.h = this.u = this.bb = this.Sb = this.pa = 0;
        }
        function L3(t4) {
          return t4.Ra >>> (t4.u & Tr - 1) >>> 0;
        }
        function x3(t4) {
          return e2(t4.bb <= t4.Sb), t4.h || t4.bb == t4.Sb && t4.u > Tr;
        }
        function A3(t4, e3) {
          t4.u = e3, t4.h = x3(t4);
        }
        function S2(t4) {
          t4.u >= zr && (e2(t4.u >= zr), b3(t4));
        }
        function _2(t4) {
          e2(null != t4 && null != t4.oa), t4.pa < t4.Zc ? (t4.I = (t4.oa[t4.pa++] | t4.I << 8) >>> 0, t4.b += 8) : (e2(null != t4 && null != t4.oa), t4.pa < t4.Yc ? (t4.b += 8, t4.I = t4.oa[t4.pa++] | t4.I << 8) : t4.Ka ? t4.b = 0 : (t4.I <<= 8, t4.b += 8, t4.Ka = 1));
        }
        function P2(t4) {
          return g3(t4, 1);
        }
        function k2(t4, e3) {
          var r3 = t4.Ca;
          0 > t4.b && _2(t4);
          var n3 = t4.b, i3 = r3 * e3 >>> 8, a3 = (t4.I >>> n3 > i3) + 0;
          for (a3 ? (r3 -= i3, t4.I -= i3 + 1 << n3 >>> 0) : r3 = i3 + 1, n3 = r3, i3 = 0; 256 <= n3; ) i3 += 8, n3 >>= 8;
          return n3 = 7 ^ i3 + Ur[n3], t4.b -= n3, t4.Ca = (r3 << n3) - 1, a3;
        }
        function F2(t4, e3, r3) {
          t4[e3 + 0] = r3 >> 24 & 255, t4[e3 + 1] = r3 >> 16 & 255, t4[e3 + 2] = r3 >> 8 & 255, t4[e3 + 3] = 255 & r3;
        }
        function I2(t4, e3) {
          return t4[e3 + 0] | t4[e3 + 1] << 8;
        }
        function j2(t4, e3) {
          return I2(t4, e3) | t4[e3 + 2] << 16;
        }
        function C2(t4, e3) {
          return I2(t4, e3) | I2(t4, e3 + 2) << 16;
        }
        function O2(t4, r3) {
          var n3 = 1 << r3;
          return e2(null != t4), e2(0 < r3), t4.X = a2(n3), null == t4.X ? 0 : (t4.Mb = 32 - r3, t4.Xa = r3, 1);
        }
        function B2(t4, r3) {
          e2(null != t4), e2(null != r3), e2(t4.Xa == r3.Xa), n2(r3.X, 0, t4.X, 0, 1 << r3.Xa);
        }
        function q2() {
          this.X = [], this.Xa = this.Mb = 0;
        }
        function M2(t4, r3, n3, i3) {
          e2(null != n3), e2(null != i3);
          var a3 = n3[0], o3 = i3[0];
          return 0 == a3 && (a3 = (t4 * o3 + r3 / 2) / r3), 0 == o3 && (o3 = (r3 * a3 + t4 / 2) / t4), 0 >= a3 || 0 >= o3 ? 0 : (n3[0] = a3, i3[0] = o3, 1);
        }
        function E2(t4, e3) {
          return t4 + (1 << e3) - 1 >>> e3;
        }
        function R2(t4, e3) {
          return ((4278255360 & t4) + (4278255360 & e3) >>> 0 & 4278255360) + ((16711935 & t4) + (16711935 & e3) >>> 0 & 16711935) >>> 0;
        }
        function D2(e3, r3) {
          t3[r3] = function(r4, n3, i3, a3, o3, s3, c4) {
            var u4;
            for (u4 = 0; u4 < o3; ++u4) {
              var l4 = t3[e3](s3[c4 + u4 - 1], i3, a3 + u4);
              s3[c4 + u4] = R2(r4[n3 + u4], l4);
            }
          };
        }
        function T2() {
          this.ud = this.hd = this.jd = 0;
        }
        function z2(t4, e3) {
          return ((4278124286 & (t4 ^ e3)) >>> 1) + (t4 & e3) >>> 0;
        }
        function U2(t4) {
          return 0 <= t4 && 256 > t4 ? t4 : 0 > t4 ? 0 : 255 < t4 ? 255 : void 0;
        }
        function H2(t4, e3) {
          return U2(t4 + (t4 - e3 + 0.5 >> 1));
        }
        function W2(t4, e3, r3) {
          return Math.abs(e3 - r3) - Math.abs(t4 - r3);
        }
        function V2(t4, e3, r3, n3, i3, a3, o3) {
          for (n3 = a3[o3 - 1], r3 = 0; r3 < i3; ++r3) a3[o3 + r3] = n3 = R2(t4[e3 + r3], n3);
        }
        function G2(t4, e3, r3, n3, i3) {
          var a3;
          for (a3 = 0; a3 < r3; ++a3) {
            var o3 = t4[e3 + a3], s3 = o3 >> 8 & 255, c4 = 16711935 & (c4 = (c4 = 16711935 & o3) + ((s3 << 16) + s3));
            n3[i3 + a3] = (4278255360 & o3) + c4 >>> 0;
          }
        }
        function Y2(t4, e3) {
          e3.jd = 255 & t4, e3.hd = t4 >> 8 & 255, e3.ud = t4 >> 16 & 255;
        }
        function J2(t4, e3, r3, n3, i3, a3) {
          var o3;
          for (o3 = 0; o3 < n3; ++o3) {
            var s3 = e3[r3 + o3], c4 = s3 >>> 8, u4 = s3, l4 = 255 & (l4 = (l4 = s3 >>> 16) + ((t4.jd << 24 >> 24) * (c4 << 24 >> 24) >>> 5));
            u4 = 255 & (u4 = (u4 += (t4.hd << 24 >> 24) * (c4 << 24 >> 24) >>> 5) + ((t4.ud << 24 >> 24) * (l4 << 24 >> 24) >>> 5)), i3[a3 + o3] = (4278255360 & s3) + (l4 << 16) + u4;
          }
        }
        function X2(e3, r3, n3, i3, a3) {
          t3[r3] = function(t4, e4, r4, n4, o3, s3, c4, u4, l4) {
            for (n4 = c4; n4 < u4; ++n4) for (c4 = 0; c4 < l4; ++c4) o3[s3++] = a3(r4[i3(t4[e4++])]);
          }, t3[e3] = function(e4, r4, o3, s3, c4, u4, l4) {
            var h4 = 8 >> e4.b, f4 = e4.Ea, d4 = e4.K[0], p4 = e4.w;
            if (8 > h4) for (e4 = (1 << e4.b) - 1, p4 = (1 << h4) - 1; r4 < o3; ++r4) {
              var g4, m4 = 0;
              for (g4 = 0; g4 < f4; ++g4) g4 & e4 || (m4 = i3(s3[c4++])), u4[l4++] = a3(d4[m4 & p4]), m4 >>= h4;
            }
            else t3["VP8LMapColor" + n3](s3, c4, d4, p4, u4, l4, r4, o3, f4);
          };
        }
        function K2(t4, e3, r3, n3, i3) {
          for (r3 = e3 + r3; e3 < r3; ) {
            var a3 = t4[e3++];
            n3[i3++] = a3 >> 16 & 255, n3[i3++] = a3 >> 8 & 255, n3[i3++] = 255 & a3;
          }
        }
        function $2(t4, e3, r3, n3, i3) {
          for (r3 = e3 + r3; e3 < r3; ) {
            var a3 = t4[e3++];
            n3[i3++] = a3 >> 16 & 255, n3[i3++] = a3 >> 8 & 255, n3[i3++] = 255 & a3, n3[i3++] = a3 >> 24 & 255;
          }
        }
        function Z2(t4, e3, r3, n3, i3) {
          for (r3 = e3 + r3; e3 < r3; ) {
            var a3 = (o3 = t4[e3++]) >> 16 & 240 | o3 >> 12 & 15, o3 = 240 & o3 | o3 >> 28 & 15;
            n3[i3++] = a3, n3[i3++] = o3;
          }
        }
        function Q2(t4, e3, r3, n3, i3) {
          for (r3 = e3 + r3; e3 < r3; ) {
            var a3 = (o3 = t4[e3++]) >> 16 & 248 | o3 >> 13 & 7, o3 = o3 >> 5 & 224 | o3 >> 3 & 31;
            n3[i3++] = a3, n3[i3++] = o3;
          }
        }
        function tt2(t4, e3, r3, n3, i3) {
          for (r3 = e3 + r3; e3 < r3; ) {
            var a3 = t4[e3++];
            n3[i3++] = 255 & a3, n3[i3++] = a3 >> 8 & 255, n3[i3++] = a3 >> 16 & 255;
          }
        }
        function et2(t4, e3, r3, i3, a3, o3) {
          if (0 == o3) for (r3 = e3 + r3; e3 < r3; ) F2(i3, ((o3 = t4[e3++])[0] >> 24 | o3[1] >> 8 & 65280 | o3[2] << 8 & 16711680 | o3[3] << 24) >>> 0), a3 += 32;
          else n2(i3, a3, t4, e3, r3);
        }
        function rt2(e3, r3) {
          t3[r3][0] = t3[e3 + "0"], t3[r3][1] = t3[e3 + "1"], t3[r3][2] = t3[e3 + "2"], t3[r3][3] = t3[e3 + "3"], t3[r3][4] = t3[e3 + "4"], t3[r3][5] = t3[e3 + "5"], t3[r3][6] = t3[e3 + "6"], t3[r3][7] = t3[e3 + "7"], t3[r3][8] = t3[e3 + "8"], t3[r3][9] = t3[e3 + "9"], t3[r3][10] = t3[e3 + "10"], t3[r3][11] = t3[e3 + "11"], t3[r3][12] = t3[e3 + "12"], t3[r3][13] = t3[e3 + "13"], t3[r3][14] = t3[e3 + "0"], t3[r3][15] = t3[e3 + "0"];
        }
        function nt2(t4) {
          return t4 == Un || t4 == Hn || t4 == Wn || t4 == Vn;
        }
        function it2() {
          this.eb = [], this.size = this.A = this.fb = 0;
        }
        function at2() {
          this.y = [], this.f = [], this.ea = [], this.F = [], this.Tc = this.Ed = this.Cd = this.Fd = this.lb = this.Db = this.Ab = this.fa = this.J = this.W = this.N = this.O = 0;
        }
        function ot2() {
          this.Rd = this.height = this.width = this.S = 0, this.f = {}, this.f.RGBA = new it2(), this.f.kb = new at2(), this.sd = null;
        }
        function st2() {
          this.width = [0], this.height = [0], this.Pd = [0], this.Qd = [0], this.format = [0];
        }
        function ct2() {
          this.Id = this.fd = this.Md = this.hb = this.ib = this.da = this.bd = this.cd = this.j = this.v = this.Da = this.Sd = this.ob = 0;
        }
        function ut2(t4) {
          return alert("todo:WebPSamplerProcessPlane"), t4.T;
        }
        function lt2(t4, e3) {
          var r3 = t4.T, i3 = e3.ba.f.RGBA, a3 = i3.eb, o3 = i3.fb + t4.ka * i3.A, s3 = mi[e3.ba.S], c4 = t4.y, u4 = t4.O, l4 = t4.f, h4 = t4.N, f4 = t4.ea, d4 = t4.W, p4 = e3.cc, g4 = e3.dc, m4 = e3.Mc, v4 = e3.Nc, b4 = t4.ka, y4 = t4.ka + t4.T, w4 = t4.U, N4 = w4 + 1 >> 1;
          for (0 == b4 ? s3(c4, u4, null, null, l4, h4, f4, d4, l4, h4, f4, d4, a3, o3, null, null, w4) : (s3(e3.ec, e3.fc, c4, u4, p4, g4, m4, v4, l4, h4, f4, d4, a3, o3 - i3.A, a3, o3, w4), ++r3); b4 + 2 < y4; b4 += 2) p4 = l4, g4 = h4, m4 = f4, v4 = d4, h4 += t4.Rc, d4 += t4.Rc, o3 += 2 * i3.A, s3(c4, (u4 += 2 * t4.fa) - t4.fa, c4, u4, p4, g4, m4, v4, l4, h4, f4, d4, a3, o3 - i3.A, a3, o3, w4);
          return u4 += t4.fa, t4.j + y4 < t4.o ? (n2(e3.ec, e3.fc, c4, u4, w4), n2(e3.cc, e3.dc, l4, h4, N4), n2(e3.Mc, e3.Nc, f4, d4, N4), r3--) : 1 & y4 || s3(c4, u4, null, null, l4, h4, f4, d4, l4, h4, f4, d4, a3, o3 + i3.A, null, null, w4), r3;
        }
        function ht2(t4, r3, n3) {
          var i3 = t4.F, a3 = [t4.J];
          if (null != i3) {
            var o3 = t4.U, s3 = r3.ba.S, c4 = s3 == Dn || s3 == Wn;
            r3 = r3.ba.f.RGBA;
            var u4 = [0], l4 = t4.ka;
            u4[0] = t4.T, t4.Kb && (0 == l4 ? --u4[0] : (--l4, a3[0] -= t4.width), t4.j + t4.ka + t4.T == t4.o && (u4[0] = t4.o - t4.j - l4));
            var h4 = r3.eb;
            l4 = r3.fb + l4 * r3.A, t4 = An(i3, a3[0], t4.width, o3, u4, h4, l4 + (c4 ? 0 : 3), r3.A), e2(n3 == u4), t4 && nt2(s3) && Ln(h4, l4, c4, o3, u4, r3.A);
          }
          return 0;
        }
        function ft2(t4) {
          var e3 = t4.ma, r3 = e3.ba.S, n3 = 11 > r3, i3 = r3 == Mn || r3 == Rn || r3 == Dn || r3 == Tn || 12 == r3 || nt2(r3);
          if (e3.memory = null, e3.Ib = null, e3.Jb = null, e3.Nd = null, !Br(e3.Oa, t4, i3 ? 11 : 12)) return 0;
          if (i3 && nt2(r3) && vr(), t4.da) alert("todo:use_scaling");
          else {
            if (n3) {
              if (e3.Ib = ut2, t4.Kb) {
                if (r3 = t4.U + 1 >> 1, e3.memory = a2(t4.U + 2 * r3), null == e3.memory) return 0;
                e3.ec = e3.memory, e3.fc = 0, e3.cc = e3.ec, e3.dc = e3.fc + t4.U, e3.Mc = e3.cc, e3.Nc = e3.dc + r3, e3.Ib = lt2, vr();
              }
            } else alert("todo:EmitYUV");
            i3 && (e3.Jb = ht2, n3 && gr());
          }
          if (n3 && !Ii) {
            for (t4 = 0; 256 > t4; ++t4) ji[t4] = 89858 * (t4 - 128) + Si >> Ai, Bi[t4] = -22014 * (t4 - 128) + Si, Oi[t4] = -45773 * (t4 - 128), Ci[t4] = 113618 * (t4 - 128) + Si >> Ai;
            for (t4 = _i; t4 < Pi; ++t4) e3 = 76283 * (t4 - 16) + Si >> Ai, qi[t4 - _i] = Vt2(e3, 255), Mi[t4 - _i] = Vt2(e3 + 8 >> 4, 15);
            Ii = 1;
          }
          return 1;
        }
        function dt2(t4) {
          var r3 = t4.ma, n3 = t4.U, i3 = t4.T;
          return e2(!(1 & t4.ka)), 0 >= n3 || 0 >= i3 ? 0 : (n3 = r3.Ib(t4, r3), null != r3.Jb && r3.Jb(t4, r3, n3), r3.Dc += n3, 1);
        }
        function pt2(t4) {
          t4.ma.memory = null;
        }
        function gt2(t4, e3, r3, n3) {
          return 47 != y3(t4, 8) ? 0 : (e3[0] = y3(t4, 14) + 1, r3[0] = y3(t4, 14) + 1, n3[0] = y3(t4, 1), 0 != y3(t4, 3) ? 0 : !t4.h);
        }
        function mt2(t4, e3) {
          if (4 > t4) return t4 + 1;
          var r3 = t4 - 2 >> 1;
          return (2 + (1 & t4) << r3) + y3(e3, r3) + 1;
        }
        function vt2(t4, e3) {
          return 120 < e3 ? e3 - 120 : 1 <= (r3 = ((r3 = $n[e3 - 1]) >> 4) * t4 + (8 - (15 & r3))) ? r3 : 1;
          var r3;
        }
        function bt2(t4, e3, r3) {
          var n3 = L3(r3), i3 = t4[e3 += 255 & n3].g - 8;
          return 0 < i3 && (A3(r3, r3.u + 8), n3 = L3(r3), e3 += t4[e3].value, e3 += n3 & (1 << i3) - 1), A3(r3, r3.u + t4[e3].g), t4[e3].value;
        }
        function yt2(t4, r3, n3) {
          return n3.g += t4.g, n3.value += t4.value << r3 >>> 0, e2(8 >= n3.g), t4.g;
        }
        function wt2(t4, r3, n3) {
          var i3 = t4.xc;
          return e2((r3 = 0 == i3 ? 0 : t4.vc[t4.md * (n3 >> i3) + (r3 >> i3)]) < t4.Wb), t4.Ya[r3];
        }
        function Nt2(t4, r3, i3, a3) {
          var o3 = t4.ab, s3 = t4.c * r3, c4 = t4.C;
          r3 = c4 + r3;
          var u4 = i3, l4 = a3;
          for (a3 = t4.Ta, i3 = t4.Ua; 0 < o3--; ) {
            var h4 = t4.gc[o3], f4 = c4, d4 = r3, p4 = u4, g4 = l4, m4 = (l4 = a3, u4 = i3, h4.Ea);
            switch (e2(f4 < d4), e2(d4 <= h4.nc), h4.hc) {
              case 2:
                Vr(p4, g4, (d4 - f4) * m4, l4, u4);
                break;
              case 0:
                var v4 = f4, b4 = d4, y4 = l4, w4 = u4, N4 = (_3 = h4).Ea;
                0 == v4 && (Hr(p4, g4, null, null, 1, y4, w4), V2(p4, g4 + 1, 0, 0, N4 - 1, y4, w4 + 1), g4 += N4, w4 += N4, ++v4);
                for (var L4 = 1 << _3.b, x4 = L4 - 1, A4 = E2(N4, _3.b), S3 = _3.K, _3 = _3.w + (v4 >> _3.b) * A4; v4 < b4; ) {
                  var P3 = S3, k3 = _3, F3 = 1;
                  for (Wr(p4, g4, y4, w4 - N4, 1, y4, w4); F3 < N4; ) {
                    var I3 = (F3 & ~x4) + L4;
                    I3 > N4 && (I3 = N4), (0, Kr[P3[k3++] >> 8 & 15])(p4, g4 + +F3, y4, w4 + F3 - N4, I3 - F3, y4, w4 + F3), F3 = I3;
                  }
                  g4 += N4, w4 += N4, ++v4 & x4 || (_3 += A4);
                }
                d4 != h4.nc && n2(l4, u4 - m4, l4, u4 + (d4 - f4 - 1) * m4, m4);
                break;
              case 1:
                for (m4 = p4, b4 = g4, N4 = (p4 = h4.Ea) - (w4 = p4 & ~(y4 = (g4 = 1 << h4.b) - 1)), v4 = E2(p4, h4.b), L4 = h4.K, h4 = h4.w + (f4 >> h4.b) * v4; f4 < d4; ) {
                  for (x4 = L4, A4 = h4, S3 = new T2(), _3 = b4 + w4, P3 = b4 + p4; b4 < _3; ) Y2(x4[A4++], S3), $r(S3, m4, b4, g4, l4, u4), b4 += g4, u4 += g4;
                  b4 < P3 && (Y2(x4[A4++], S3), $r(S3, m4, b4, N4, l4, u4), b4 += N4, u4 += N4), ++f4 & y4 || (h4 += v4);
                }
                break;
              case 3:
                if (p4 == l4 && g4 == u4 && 0 < h4.b) {
                  for (b4 = l4, p4 = m4 = u4 + (d4 - f4) * m4 - (w4 = (d4 - f4) * E2(h4.Ea, h4.b)), g4 = l4, y4 = u4, v4 = [], w4 = (N4 = w4) - 1; 0 <= w4; --w4) v4[w4] = g4[y4 + w4];
                  for (w4 = N4 - 1; 0 <= w4; --w4) b4[p4 + w4] = v4[w4];
                  Gr(h4, f4, d4, l4, m4, l4, u4);
                } else Gr(h4, f4, d4, p4, g4, l4, u4);
            }
            u4 = a3, l4 = i3;
          }
          l4 != i3 && n2(a3, i3, u4, l4, s3);
        }
        function Lt2(t4, r3) {
          var n3 = t4.V, i3 = t4.Ba + t4.c * t4.C, a3 = r3 - t4.C;
          if (e2(r3 <= t4.l.o), e2(16 >= a3), 0 < a3) {
            var o3 = t4.l, s3 = t4.Ta, c4 = t4.Ua, u4 = o3.width;
            if (Nt2(t4, a3, n3, i3), a3 = c4 = [c4], e2((n3 = t4.C) < (i3 = r3)), e2(o3.v < o3.va), i3 > o3.o && (i3 = o3.o), n3 < o3.j) {
              var l4 = o3.j - n3;
              n3 = o3.j, a3[0] += l4 * u4;
            }
            if (n3 >= i3 ? n3 = 0 : (a3[0] += 4 * o3.v, o3.ka = n3 - o3.j, o3.U = o3.va - o3.v, o3.T = i3 - n3, n3 = 1), n3) {
              if (c4 = c4[0], 11 > (n3 = t4.ca).S) {
                var h4 = n3.f.RGBA, f4 = (i3 = n3.S, a3 = o3.U, o3 = o3.T, l4 = h4.eb, h4.A), d4 = o3;
                for (h4 = h4.fb + t4.Ma * h4.A; 0 < d4--; ) {
                  var p4 = s3, g4 = c4, m4 = a3, v4 = l4, b4 = h4;
                  switch (i3) {
                    case qn:
                      Zr(p4, g4, m4, v4, b4);
                      break;
                    case Mn:
                      Qr(p4, g4, m4, v4, b4);
                      break;
                    case Un:
                      Qr(p4, g4, m4, v4, b4), Ln(v4, b4, 0, m4, 1, 0);
                      break;
                    case En:
                      rn(p4, g4, m4, v4, b4);
                      break;
                    case Rn:
                      et2(p4, g4, m4, v4, b4, 1);
                      break;
                    case Hn:
                      et2(p4, g4, m4, v4, b4, 1), Ln(v4, b4, 0, m4, 1, 0);
                      break;
                    case Dn:
                      et2(p4, g4, m4, v4, b4, 0);
                      break;
                    case Wn:
                      et2(p4, g4, m4, v4, b4, 0), Ln(v4, b4, 1, m4, 1, 0);
                      break;
                    case Tn:
                      tn(p4, g4, m4, v4, b4);
                      break;
                    case Vn:
                      tn(p4, g4, m4, v4, b4), xn(v4, b4, m4, 1, 0);
                      break;
                    case zn:
                      en(p4, g4, m4, v4, b4);
                      break;
                    default:
                      e2(0);
                  }
                  c4 += u4, h4 += f4;
                }
                t4.Ma += o3;
              } else alert("todo:EmitRescaledRowsYUVA");
              e2(t4.Ma <= n3.height);
            }
          }
          t4.C = r3, e2(t4.C <= t4.i);
        }
        function xt2(t4) {
          var e3;
          if (0 < t4.ua) return 0;
          for (e3 = 0; e3 < t4.Wb; ++e3) {
            var r3 = t4.Ya[e3].G, n3 = t4.Ya[e3].H;
            if (0 < r3[1][n3[1] + 0].g || 0 < r3[2][n3[2] + 0].g || 0 < r3[3][n3[3] + 0].g) return 0;
          }
          return 1;
        }
        function At2(t4, r3, n3, i3, a3, o3) {
          if (0 != t4.Z) {
            var s3 = t4.qd, c4 = t4.rd;
            for (e2(null != gi[t4.Z]); r3 < n3; ++r3) gi[t4.Z](s3, c4, i3, a3, i3, a3, o3), s3 = i3, c4 = a3, a3 += o3;
            t4.qd = s3, t4.rd = c4;
          }
        }
        function St2(t4, r3) {
          var n3 = t4.l.ma, i3 = 0 == n3.Z || 1 == n3.Z ? t4.l.j : t4.C;
          if (i3 = t4.C < i3 ? i3 : t4.C, e2(r3 <= t4.l.o), r3 > i3) {
            var a3 = t4.l.width, o3 = n3.ca, s3 = n3.tb + a3 * i3, c4 = t4.V, u4 = t4.Ba + t4.c * i3, l4 = t4.gc;
            e2(1 == t4.ab), e2(3 == l4[0].hc), Jr(l4[0], i3, r3, c4, u4, o3, s3), At2(n3, i3, r3, o3, s3, a3);
          }
          t4.C = t4.Ma = r3;
        }
        function _t2(t4, r3, n3, i3, a3, o3, s3) {
          var c4 = t4.$ / i3, u4 = t4.$ % i3, l4 = t4.m, h4 = t4.s, f4 = n3 + t4.$, d4 = f4;
          a3 = n3 + i3 * a3;
          var p4 = n3 + i3 * o3, g4 = 280 + h4.ua, m4 = t4.Pb ? c4 : 16777216, v4 = 0 < h4.ua ? h4.Wa : null, b4 = h4.wc, y4 = f4 < p4 ? wt2(h4, u4, c4) : null;
          e2(t4.C < o3), e2(p4 <= a3);
          var w4 = false;
          t: for (; ; ) {
            for (; w4 || f4 < p4; ) {
              var N4 = 0;
              if (c4 >= m4) {
                var _3 = f4 - n3;
                e2((m4 = t4).Pb), m4.wd = m4.m, m4.xd = _3, 0 < m4.s.ua && B2(m4.s.Wa, m4.s.vb), m4 = c4 + Qn;
              }
              if (u4 & b4 || (y4 = wt2(h4, u4, c4)), e2(null != y4), y4.Qb && (r3[f4] = y4.qb, w4 = true), !w4) if (S2(l4), y4.jc) {
                N4 = l4, _3 = r3;
                var P3 = f4, k3 = y4.pd[L3(N4) & Er - 1];
                e2(y4.jc), 256 > k3.g ? (A3(N4, N4.u + k3.g), _3[P3] = k3.value, N4 = 0) : (A3(N4, N4.u + k3.g - 256), e2(256 <= k3.value), N4 = k3.value), 0 == N4 && (w4 = true);
              } else N4 = bt2(y4.G[0], y4.H[0], l4);
              if (l4.h) break;
              if (w4 || 256 > N4) {
                if (!w4) if (y4.nd) r3[f4] = (y4.qb | N4 << 8) >>> 0;
                else {
                  if (S2(l4), w4 = bt2(y4.G[1], y4.H[1], l4), S2(l4), _3 = bt2(y4.G[2], y4.H[2], l4), P3 = bt2(y4.G[3], y4.H[3], l4), l4.h) break;
                  r3[f4] = (P3 << 24 | w4 << 16 | N4 << 8 | _3) >>> 0;
                }
                if (w4 = false, ++f4, ++u4 >= i3 && (u4 = 0, ++c4, null != s3 && c4 <= o3 && !(c4 % 16) && s3(t4, c4), null != v4)) for (; d4 < f4; ) N4 = r3[d4++], v4.X[(506832829 * N4 & 4294967295) >>> v4.Mb] = N4;
              } else if (280 > N4) {
                if (N4 = mt2(N4 - 256, l4), _3 = bt2(y4.G[4], y4.H[4], l4), S2(l4), _3 = vt2(i3, _3 = mt2(_3, l4)), l4.h) break;
                if (f4 - n3 < _3 || a3 - f4 < N4) break t;
                for (P3 = 0; P3 < N4; ++P3) r3[f4 + P3] = r3[f4 + P3 - _3];
                for (f4 += N4, u4 += N4; u4 >= i3; ) u4 -= i3, ++c4, null != s3 && c4 <= o3 && !(c4 % 16) && s3(t4, c4);
                if (e2(f4 <= a3), u4 & b4 && (y4 = wt2(h4, u4, c4)), null != v4) for (; d4 < f4; ) N4 = r3[d4++], v4.X[(506832829 * N4 & 4294967295) >>> v4.Mb] = N4;
              } else {
                if (!(N4 < g4)) break t;
                for (w4 = N4 - 280, e2(null != v4); d4 < f4; ) N4 = r3[d4++], v4.X[(506832829 * N4 & 4294967295) >>> v4.Mb] = N4;
                N4 = f4, e2(!(w4 >>> (_3 = v4).Xa)), r3[N4] = _3.X[w4], w4 = true;
              }
              w4 || e2(l4.h == x3(l4));
            }
            if (t4.Pb && l4.h && f4 < a3) e2(t4.m.h), t4.a = 5, t4.m = t4.wd, t4.$ = t4.xd, 0 < t4.s.ua && B2(t4.s.vb, t4.s.Wa);
            else {
              if (l4.h) break t;
              null != s3 && s3(t4, c4 > o3 ? o3 : c4), t4.a = 0, t4.$ = f4 - n3;
            }
            return 1;
          }
          return t4.a = 3, 0;
        }
        function Pt2(t4) {
          e2(null != t4), t4.vc = null, t4.yc = null, t4.Ya = null;
          var r3 = t4.Wa;
          null != r3 && (r3.X = null), t4.vb = null, e2(null != t4);
        }
        function kt2() {
          var e3 = new ar();
          return null == e3 ? null : (e3.a = 0, e3.xb = pi, rt2("Predictor", "VP8LPredictors"), rt2("Predictor", "VP8LPredictors_C"), rt2("PredictorAdd", "VP8LPredictorsAdd"), rt2("PredictorAdd", "VP8LPredictorsAdd_C"), Vr = G2, $r = J2, Zr = K2, Qr = $2, tn = Z2, en = Q2, rn = tt2, t3.VP8LMapColor32b = Yr, t3.VP8LMapColor8b = Xr, e3);
        }
        function Ft2(t4, r3, n3, s3, c4) {
          var u4 = 1, f4 = [t4], p4 = [r3], g4 = s3.m, m4 = s3.s, v4 = null, b4 = 0;
          t: for (; ; ) {
            if (n3) for (; u4 && y3(g4, 1); ) {
              var w4 = f4, N4 = p4, x4 = s3, _3 = 1, P3 = x4.m, k3 = x4.gc[x4.ab], F3 = y3(P3, 2);
              if (x4.Oc & 1 << F3) u4 = 0;
              else {
                switch (x4.Oc |= 1 << F3, k3.hc = F3, k3.Ea = w4[0], k3.nc = N4[0], k3.K = [null], ++x4.ab, e2(4 >= x4.ab), F3) {
                  case 0:
                  case 1:
                    k3.b = y3(P3, 3) + 2, _3 = Ft2(E2(k3.Ea, k3.b), E2(k3.nc, k3.b), 0, x4, k3.K), k3.K = k3.K[0];
                    break;
                  case 3:
                    var I3, j3 = y3(P3, 8) + 1, C3 = 16 < j3 ? 0 : 4 < j3 ? 1 : 2 < j3 ? 2 : 3;
                    if (w4[0] = E2(k3.Ea, C3), k3.b = C3, I3 = _3 = Ft2(j3, 1, 0, x4, k3.K)) {
                      var B3, q3 = j3, M3 = k3, D3 = 1 << (8 >> M3.b), T3 = a2(D3);
                      if (null == T3) I3 = 0;
                      else {
                        var z3 = M3.K[0], U3 = M3.w;
                        for (T3[0] = M3.K[0][0], B3 = 1; B3 < 1 * q3; ++B3) T3[B3] = R2(z3[U3 + B3], T3[B3 - 1]);
                        for (; B3 < 4 * D3; ++B3) T3[B3] = 0;
                        M3.K[0] = null, M3.K[0] = T3, I3 = 1;
                      }
                    }
                    _3 = I3;
                    break;
                  case 2:
                    break;
                  default:
                    e2(0);
                }
                u4 = _3;
              }
            }
            if (f4 = f4[0], p4 = p4[0], u4 && y3(g4, 1) && !(u4 = 1 <= (b4 = y3(g4, 4)) && 11 >= b4)) {
              s3.a = 3;
              break t;
            }
            var H3;
            if (H3 = u4) e: {
              var W3, V3, G3, Y3 = s3, J3 = f4, X3 = p4, K3 = b4, $3 = n3, Z3 = Y3.m, Q3 = Y3.s, tt3 = [null], et3 = 1, rt3 = 0, nt3 = Zn[K3];
              r: for (; ; ) {
                if ($3 && y3(Z3, 1)) {
                  var it3 = y3(Z3, 3) + 2, at3 = E2(J3, it3), ot3 = E2(X3, it3), st3 = at3 * ot3;
                  if (!Ft2(at3, ot3, 0, Y3, tt3)) break r;
                  for (tt3 = tt3[0], Q3.xc = it3, W3 = 0; W3 < st3; ++W3) {
                    var ct3 = tt3[W3] >> 8 & 65535;
                    tt3[W3] = ct3, ct3 >= et3 && (et3 = ct3 + 1);
                  }
                }
                if (Z3.h) break r;
                for (V3 = 0; 5 > V3; ++V3) {
                  var ut3 = Jn[V3];
                  !V3 && 0 < K3 && (ut3 += 1 << K3), rt3 < ut3 && (rt3 = ut3);
                }
                var lt3 = o2(et3 * nt3, h3), ht3 = et3, ft3 = o2(ht3, d3);
                if (null == ft3) var dt3 = null;
                else e2(65536 >= ht3), dt3 = ft3;
                var pt3 = a2(rt3);
                if (null == dt3 || null == pt3 || null == lt3) {
                  Y3.a = 1;
                  break r;
                }
                var gt3 = lt3;
                for (W3 = G3 = 0; W3 < et3; ++W3) {
                  var mt3 = dt3[W3], vt3 = mt3.G, bt3 = mt3.H, wt3 = 0, Nt3 = 1, Lt3 = 0;
                  for (V3 = 0; 5 > V3; ++V3) {
                    ut3 = Jn[V3], vt3[V3] = gt3, bt3[V3] = G3, !V3 && 0 < K3 && (ut3 += 1 << K3);
                    n: {
                      var xt3, At3 = ut3, St3 = Y3, kt3 = pt3, It3 = gt3, jt3 = G3, Ct3 = 0, Ot3 = St3.m, Bt3 = y3(Ot3, 1);
                      if (i2(kt3, 0, 0, At3), Bt3) {
                        var qt3 = y3(Ot3, 1) + 1, Mt3 = y3(Ot3, 1), Et3 = y3(Ot3, 0 == Mt3 ? 1 : 8);
                        kt3[Et3] = 1, 2 == qt3 && (kt3[Et3 = y3(Ot3, 8)] = 1);
                        var Rt3 = 1;
                      } else {
                        var Dt3 = a2(19), Tt3 = y3(Ot3, 4) + 4;
                        if (19 < Tt3) {
                          St3.a = 3;
                          var zt3 = 0;
                          break n;
                        }
                        for (xt3 = 0; xt3 < Tt3; ++xt3) Dt3[Kn[xt3]] = y3(Ot3, 3);
                        var Ut3 = void 0, Ht3 = void 0, Wt3 = St3, Vt3 = Dt3, Gt3 = At3, Yt3 = kt3, Jt3 = 0, Xt3 = Wt3.m, Kt3 = 8, $t3 = o2(128, h3);
                        i: for (; l3($t3, 0, 7, Vt3, 19); ) {
                          if (y3(Xt3, 1)) {
                            var Zt3 = 2 + 2 * y3(Xt3, 3);
                            if ((Ut3 = 2 + y3(Xt3, Zt3)) > Gt3) break i;
                          } else Ut3 = Gt3;
                          for (Ht3 = 0; Ht3 < Gt3 && Ut3--; ) {
                            S2(Xt3);
                            var Qt3 = $t3[0 + (127 & L3(Xt3))];
                            A3(Xt3, Xt3.u + Qt3.g);
                            var te3 = Qt3.value;
                            if (16 > te3) Yt3[Ht3++] = te3, 0 != te3 && (Kt3 = te3);
                            else {
                              var ee3 = 16 == te3, re3 = te3 - 16, ne3 = Yn[re3], ie3 = y3(Xt3, Gn[re3]) + ne3;
                              if (Ht3 + ie3 > Gt3) break i;
                              for (var ae3 = ee3 ? Kt3 : 0; 0 < ie3--; ) Yt3[Ht3++] = ae3;
                            }
                          }
                          Jt3 = 1;
                          break i;
                        }
                        Jt3 || (Wt3.a = 3), Rt3 = Jt3;
                      }
                      (Rt3 = Rt3 && !Ot3.h) && (Ct3 = l3(It3, jt3, 8, kt3, At3)), Rt3 && 0 != Ct3 ? zt3 = Ct3 : (St3.a = 3, zt3 = 0);
                    }
                    if (0 == zt3) break r;
                    if (Nt3 && 1 == Xn[V3] && (Nt3 = 0 == gt3[G3].g), wt3 += gt3[G3].g, G3 += zt3, 3 >= V3) {
                      var oe3, se3 = pt3[0];
                      for (oe3 = 1; oe3 < ut3; ++oe3) pt3[oe3] > se3 && (se3 = pt3[oe3]);
                      Lt3 += se3;
                    }
                  }
                  if (mt3.nd = Nt3, mt3.Qb = 0, Nt3 && (mt3.qb = (vt3[3][bt3[3] + 0].value << 24 | vt3[1][bt3[1] + 0].value << 16 | vt3[2][bt3[2] + 0].value) >>> 0, 0 == wt3 && 256 > vt3[0][bt3[0] + 0].value && (mt3.Qb = 1, mt3.qb += vt3[0][bt3[0] + 0].value << 8)), mt3.jc = !mt3.Qb && 6 > Lt3, mt3.jc) {
                    var ce3, ue3 = mt3;
                    for (ce3 = 0; ce3 < Er; ++ce3) {
                      var le3 = ce3, he3 = ue3.pd[le3], fe3 = ue3.G[0][ue3.H[0] + le3];
                      256 <= fe3.value ? (he3.g = fe3.g + 256, he3.value = fe3.value) : (he3.g = 0, he3.value = 0, le3 >>= yt2(fe3, 8, he3), le3 >>= yt2(ue3.G[1][ue3.H[1] + le3], 16, he3), le3 >>= yt2(ue3.G[2][ue3.H[2] + le3], 0, he3), yt2(ue3.G[3][ue3.H[3] + le3], 24, he3));
                    }
                  }
                }
                Q3.vc = tt3, Q3.Wb = et3, Q3.Ya = dt3, Q3.yc = lt3, H3 = 1;
                break e;
              }
              H3 = 0;
            }
            if (!(u4 = H3)) {
              s3.a = 3;
              break t;
            }
            if (0 < b4) {
              if (m4.ua = 1 << b4, !O2(m4.Wa, b4)) {
                s3.a = 1, u4 = 0;
                break t;
              }
            } else m4.ua = 0;
            var de3 = s3, pe3 = f4, ge3 = p4, me3 = de3.s, ve3 = me3.xc;
            if (de3.c = pe3, de3.i = ge3, me3.md = E2(pe3, ve3), me3.wc = 0 == ve3 ? -1 : (1 << ve3) - 1, n3) {
              s3.xb = di;
              break t;
            }
            if (null == (v4 = a2(f4 * p4))) {
              s3.a = 1, u4 = 0;
              break t;
            }
            u4 = (u4 = _t2(s3, v4, 0, f4, p4, p4, null)) && !g4.h;
            break t;
          }
          return u4 ? (null != c4 ? c4[0] = v4 : (e2(null == v4), e2(n3)), s3.$ = 0, n3 || Pt2(m4)) : Pt2(m4), u4;
        }
        function It2(t4, r3) {
          var n3 = t4.c * t4.i, i3 = n3 + r3 + 16 * r3;
          return e2(t4.c <= r3), t4.V = a2(i3), null == t4.V ? (t4.Ta = null, t4.Ua = 0, t4.a = 1, 0) : (t4.Ta = t4.V, t4.Ua = t4.Ba + n3 + r3, 1);
        }
        function jt2(t4, r3) {
          var n3 = t4.C, i3 = r3 - n3, a3 = t4.V, o3 = t4.Ba + t4.c * n3;
          for (e2(r3 <= t4.l.o); 0 < i3; ) {
            var s3 = 16 < i3 ? 16 : i3, c4 = t4.l.ma, u4 = t4.l.width, l4 = u4 * s3, h4 = c4.ca, f4 = c4.tb + u4 * n3, d4 = t4.Ta, p4 = t4.Ua;
            Nt2(t4, s3, a3, o3), Sn(d4, p4, h4, f4, l4), At2(c4, n3, n3 + s3, h4, f4, u4), i3 -= s3, a3 += s3 * t4.c, n3 += s3;
          }
          e2(n3 == r3), t4.C = t4.Ma = r3;
        }
        function Ct2() {
          this.ub = this.yd = this.td = this.Rb = 0;
        }
        function Ot2() {
          this.Kd = this.Ld = this.Ud = this.Td = this.i = this.c = 0;
        }
        function Bt2() {
          this.Fb = this.Bb = this.Cb = 0, this.Zb = a2(4), this.Lb = a2(4);
        }
        function qt2() {
          this.Yb = (function() {
            var t4 = [];
            return (function t5(e3, r3, n3) {
              for (var i3 = n3[r3], a3 = 0; a3 < i3 && (e3.push(n3.length > r3 + 1 ? [] : 0), !(n3.length < r3 + 1)); a3++) t5(e3[a3], r3 + 1, n3);
            })(t4, 0, [3, 11]), t4;
          })();
        }
        function Mt2() {
          this.jb = a2(3), this.Wc = s2([4, 8], qt2), this.Xc = s2([4, 17], qt2);
        }
        function Et2() {
          this.Pc = this.wb = this.Tb = this.zd = 0, this.vd = new a2(4), this.od = new a2(4);
        }
        function Rt2() {
          this.ld = this.La = this.dd = this.tc = 0;
        }
        function Dt2() {
          this.Na = this.la = 0;
        }
        function Tt2() {
          this.Sc = [0, 0], this.Eb = [0, 0], this.Qc = [0, 0], this.ia = this.lc = 0;
        }
        function zt2() {
          this.ad = a2(384), this.Za = 0, this.Ob = a2(16), this.$b = this.Ad = this.ia = this.Gc = this.Hc = this.Dd = 0;
        }
        function Ut2() {
          this.uc = this.M = this.Nb = 0, this.wa = Array(new Rt2()), this.Y = 0, this.ya = Array(new zt2()), this.aa = 0, this.l = new Gt2();
        }
        function Ht2() {
          this.y = a2(16), this.f = a2(8), this.ea = a2(8);
        }
        function Wt2() {
          this.cb = this.a = 0, this.sc = "", this.m = new w3(), this.Od = new Ct2(), this.Kc = new Ot2(), this.ed = new Et2(), this.Qa = new Bt2(), this.Ic = this.$c = this.Aa = 0, this.D = new Ut2(), this.Xb = this.Va = this.Hb = this.zb = this.yb = this.Ub = this.za = 0, this.Jc = o2(8, w3), this.ia = 0, this.pb = o2(4, Tt2), this.Pa = new Mt2(), this.Bd = this.kc = 0, this.Ac = [], this.Bc = 0, this.zc = [0, 0, 0, 0], this.Gd = Array(new Ht2()), this.Hd = 0, this.rb = Array(new Dt2()), this.sb = 0, this.wa = Array(new Rt2()), this.Y = 0, this.oc = [], this.pc = 0, this.sa = [], this.ta = 0, this.qa = [], this.ra = 0, this.Ha = [], this.B = this.R = this.Ia = 0, this.Ec = [], this.M = this.ja = this.Vb = this.Fc = 0, this.ya = Array(new zt2()), this.L = this.aa = 0, this.gd = s2([4, 2], Rt2), this.ga = null, this.Fa = [], this.Cc = this.qc = this.P = 0, this.Gb = [], this.Uc = 0, this.mb = [], this.nb = 0, this.rc = [], this.Ga = this.Vc = 0;
        }
        function Vt2(t4, e3) {
          return 0 > t4 ? 0 : t4 > e3 ? e3 : t4;
        }
        function Gt2() {
          this.T = this.U = this.ka = this.height = this.width = 0, this.y = [], this.f = [], this.ea = [], this.Rc = this.fa = this.W = this.N = this.O = 0, this.ma = "void", this.put = "VP8IoPutHook", this.ac = "VP8IoSetupHook", this.bc = "VP8IoTeardownHook", this.ha = this.Kb = 0, this.data = [], this.hb = this.ib = this.da = this.o = this.j = this.va = this.v = this.Da = this.ob = this.w = 0, this.F = [], this.J = 0;
        }
        function Yt2() {
          var t4 = new Wt2();
          return null != t4 && (t4.a = 0, t4.sc = "OK", t4.cb = 0, t4.Xb = 0, ri || (ri = $t2)), t4;
        }
        function Jt2(t4, e3, r3) {
          return 0 == t4.a && (t4.a = e3, t4.sc = r3, t4.cb = 0), 0;
        }
        function Xt2(t4, e3, r3) {
          return 3 <= r3 && 157 == t4[e3 + 0] && 1 == t4[e3 + 1] && 42 == t4[e3 + 2];
        }
        function Kt2(t4, r3) {
          if (null == t4) return 0;
          if (t4.a = 0, t4.sc = "OK", null == r3) return Jt2(t4, 2, "null VP8Io passed to VP8GetHeaders()");
          var n3 = r3.data, a3 = r3.w, o3 = r3.ha;
          if (4 > o3) return Jt2(t4, 7, "Truncated header.");
          var s3 = n3[a3 + 0] | n3[a3 + 1] << 8 | n3[a3 + 2] << 16, c4 = t4.Od;
          if (c4.Rb = !(1 & s3), c4.td = s3 >> 1 & 7, c4.yd = s3 >> 4 & 1, c4.ub = s3 >> 5, 3 < c4.td) return Jt2(t4, 3, "Incorrect keyframe parameters.");
          if (!c4.yd) return Jt2(t4, 4, "Frame not displayable.");
          a3 += 3, o3 -= 3;
          var u4 = t4.Kc;
          if (c4.Rb) {
            if (7 > o3) return Jt2(t4, 7, "cannot parse picture header");
            if (!Xt2(n3, a3, o3)) return Jt2(t4, 3, "Bad code word");
            u4.c = 16383 & (n3[a3 + 4] << 8 | n3[a3 + 3]), u4.Td = n3[a3 + 4] >> 6, u4.i = 16383 & (n3[a3 + 6] << 8 | n3[a3 + 5]), u4.Ud = n3[a3 + 6] >> 6, a3 += 7, o3 -= 7, t4.za = u4.c + 15 >> 4, t4.Ub = u4.i + 15 >> 4, r3.width = u4.c, r3.height = u4.i, r3.Da = 0, r3.j = 0, r3.v = 0, r3.va = r3.width, r3.o = r3.height, r3.da = 0, r3.ib = r3.width, r3.hb = r3.height, r3.U = r3.width, r3.T = r3.height, i2((s3 = t4.Pa).jb, 0, 255, s3.jb.length), e2(null != (s3 = t4.Qa)), s3.Cb = 0, s3.Bb = 0, s3.Fb = 1, i2(s3.Zb, 0, 0, s3.Zb.length), i2(s3.Lb, 0, 0, s3.Lb);
          }
          if (c4.ub > o3) return Jt2(t4, 7, "bad partition length");
          p3(s3 = t4.m, n3, a3, c4.ub), a3 += c4.ub, o3 -= c4.ub, c4.Rb && (u4.Ld = P2(s3), u4.Kd = P2(s3)), u4 = t4.Qa;
          var l4, h4 = t4.Pa;
          if (e2(null != s3), e2(null != u4), u4.Cb = P2(s3), u4.Cb) {
            if (u4.Bb = P2(s3), P2(s3)) {
              for (u4.Fb = P2(s3), l4 = 0; 4 > l4; ++l4) u4.Zb[l4] = P2(s3) ? m3(s3, 7) : 0;
              for (l4 = 0; 4 > l4; ++l4) u4.Lb[l4] = P2(s3) ? m3(s3, 6) : 0;
            }
            if (u4.Bb) for (l4 = 0; 3 > l4; ++l4) h4.jb[l4] = P2(s3) ? g3(s3, 8) : 255;
          } else u4.Bb = 0;
          if (s3.Ka) return Jt2(t4, 3, "cannot parse segment header");
          if ((u4 = t4.ed).zd = P2(s3), u4.Tb = g3(s3, 6), u4.wb = g3(s3, 3), u4.Pc = P2(s3), u4.Pc && P2(s3)) {
            for (h4 = 0; 4 > h4; ++h4) P2(s3) && (u4.vd[h4] = m3(s3, 6));
            for (h4 = 0; 4 > h4; ++h4) P2(s3) && (u4.od[h4] = m3(s3, 6));
          }
          if (t4.L = 0 == u4.Tb ? 0 : u4.zd ? 1 : 2, s3.Ka) return Jt2(t4, 3, "cannot parse filter header");
          var f4 = o3;
          if (o3 = l4 = a3, a3 = l4 + f4, u4 = f4, t4.Xb = (1 << g3(t4.m, 2)) - 1, f4 < 3 * (h4 = t4.Xb)) n3 = 7;
          else {
            for (l4 += 3 * h4, u4 -= 3 * h4, f4 = 0; f4 < h4; ++f4) {
              var d4 = n3[o3 + 0] | n3[o3 + 1] << 8 | n3[o3 + 2] << 16;
              d4 > u4 && (d4 = u4), p3(t4.Jc[+f4], n3, l4, d4), l4 += d4, u4 -= d4, o3 += 3;
            }
            p3(t4.Jc[+h4], n3, l4, u4), n3 = l4 < a3 ? 0 : 5;
          }
          if (0 != n3) return Jt2(t4, n3, "cannot parse partitions");
          for (n3 = g3(l4 = t4.m, 7), o3 = P2(l4) ? m3(l4, 4) : 0, a3 = P2(l4) ? m3(l4, 4) : 0, u4 = P2(l4) ? m3(l4, 4) : 0, h4 = P2(l4) ? m3(l4, 4) : 0, l4 = P2(l4) ? m3(l4, 4) : 0, f4 = t4.Qa, d4 = 0; 4 > d4; ++d4) {
            if (f4.Cb) {
              var v4 = f4.Zb[d4];
              f4.Fb || (v4 += n3);
            } else {
              if (0 < d4) {
                t4.pb[d4] = t4.pb[0];
                continue;
              }
              v4 = n3;
            }
            var b4 = t4.pb[d4];
            b4.Sc[0] = ti[Vt2(v4 + o3, 127)], b4.Sc[1] = ei[Vt2(v4 + 0, 127)], b4.Eb[0] = 2 * ti[Vt2(v4 + a3, 127)], b4.Eb[1] = 101581 * ei[Vt2(v4 + u4, 127)] >> 16, 8 > b4.Eb[1] && (b4.Eb[1] = 8), b4.Qc[0] = ti[Vt2(v4 + h4, 117)], b4.Qc[1] = ei[Vt2(v4 + l4, 127)], b4.lc = v4 + l4;
          }
          if (!c4.Rb) return Jt2(t4, 4, "Not a key frame.");
          for (P2(s3), c4 = t4.Pa, n3 = 0; 4 > n3; ++n3) {
            for (o3 = 0; 8 > o3; ++o3) for (a3 = 0; 3 > a3; ++a3) for (u4 = 0; 11 > u4; ++u4) h4 = k2(s3, ci[n3][o3][a3][u4]) ? g3(s3, 8) : oi[n3][o3][a3][u4], c4.Wc[n3][o3].Yb[a3][u4] = h4;
            for (o3 = 0; 17 > o3; ++o3) c4.Xc[n3][o3] = c4.Wc[n3][ui[o3]];
          }
          return t4.kc = P2(s3), t4.kc && (t4.Bd = g3(s3, 8)), t4.cb = 1;
        }
        function $t2(t4, e3, r3, n3, i3, a3, o3) {
          var s3 = e3[i3].Yb[r3];
          for (r3 = 0; 16 > i3; ++i3) {
            if (!k2(t4, s3[r3 + 0])) return i3;
            for (; !k2(t4, s3[r3 + 1]); ) if (s3 = e3[++i3].Yb[0], r3 = 0, 16 == i3) return 16;
            var c4 = e3[i3 + 1].Yb;
            if (k2(t4, s3[r3 + 2])) {
              var u4 = t4, l4 = 0;
              if (k2(u4, (f4 = s3)[(h4 = r3) + 3])) if (k2(u4, f4[h4 + 6])) {
                for (s3 = 0, h4 = 2 * (l4 = k2(u4, f4[h4 + 8])) + (f4 = k2(u4, f4[h4 + 9 + l4])), l4 = 0, f4 = ni[h4]; f4[s3]; ++s3) l4 += l4 + k2(u4, f4[s3]);
                l4 += 3 + (8 << h4);
              } else k2(u4, f4[h4 + 7]) ? (l4 = 7 + 2 * k2(u4, 165), l4 += k2(u4, 145)) : l4 = 5 + k2(u4, 159);
              else l4 = k2(u4, f4[h4 + 4]) ? 3 + k2(u4, f4[h4 + 5]) : 2;
              s3 = c4[2];
            } else l4 = 1, s3 = c4[1];
            c4 = o3 + ii[i3], 0 > (u4 = t4).b && _2(u4);
            var h4, f4 = u4.b, d4 = (h4 = u4.Ca >> 1) - (u4.I >> f4) >> 31;
            --u4.b, u4.Ca += d4, u4.Ca |= 1, u4.I -= (h4 + 1 & d4) << f4, a3[c4] = ((l4 ^ d4) - d4) * n3[(0 < i3) + 0];
          }
          return 16;
        }
        function Zt2(t4) {
          var e3 = t4.rb[t4.sb - 1];
          e3.la = 0, e3.Na = 0, i2(t4.zc, 0, 0, t4.zc.length), t4.ja = 0;
        }
        function Qt2(t4, e3, r3, n3, i3) {
          i3 = t4[e3 + r3 + 32 * n3] + (i3 >> 3), t4[e3 + r3 + 32 * n3] = -256 & i3 ? 0 > i3 ? 0 : 255 : i3;
        }
        function te2(t4, e3, r3, n3, i3, a3) {
          Qt2(t4, e3, 0, r3, n3 + i3), Qt2(t4, e3, 1, r3, n3 + a3), Qt2(t4, e3, 2, r3, n3 - a3), Qt2(t4, e3, 3, r3, n3 - i3);
        }
        function ee2(t4) {
          return (20091 * t4 >> 16) + t4;
        }
        function re2(t4, e3, r3, n3) {
          var i3, o3 = 0, s3 = a2(16);
          for (i3 = 0; 4 > i3; ++i3) {
            var c4 = t4[e3 + 0] + t4[e3 + 8], u4 = t4[e3 + 0] - t4[e3 + 8], l4 = (35468 * t4[e3 + 4] >> 16) - ee2(t4[e3 + 12]), h4 = ee2(t4[e3 + 4]) + (35468 * t4[e3 + 12] >> 16);
            s3[o3 + 0] = c4 + h4, s3[o3 + 1] = u4 + l4, s3[o3 + 2] = u4 - l4, s3[o3 + 3] = c4 - h4, o3 += 4, e3++;
          }
          for (i3 = o3 = 0; 4 > i3; ++i3) c4 = (t4 = s3[o3 + 0] + 4) + s3[o3 + 8], u4 = t4 - s3[o3 + 8], l4 = (35468 * s3[o3 + 4] >> 16) - ee2(s3[o3 + 12]), Qt2(r3, n3, 0, 0, c4 + (h4 = ee2(s3[o3 + 4]) + (35468 * s3[o3 + 12] >> 16))), Qt2(r3, n3, 1, 0, u4 + l4), Qt2(r3, n3, 2, 0, u4 - l4), Qt2(r3, n3, 3, 0, c4 - h4), o3++, n3 += 32;
        }
        function ne2(t4, e3, r3, n3) {
          var i3 = t4[e3 + 0] + 4, a3 = 35468 * t4[e3 + 4] >> 16, o3 = ee2(t4[e3 + 4]), s3 = 35468 * t4[e3 + 1] >> 16;
          te2(r3, n3, 0, i3 + o3, t4 = ee2(t4[e3 + 1]), s3), te2(r3, n3, 1, i3 + a3, t4, s3), te2(r3, n3, 2, i3 - a3, t4, s3), te2(r3, n3, 3, i3 - o3, t4, s3);
        }
        function ie2(t4, e3, r3, n3, i3) {
          re2(t4, e3, r3, n3), i3 && re2(t4, e3 + 16, r3, n3 + 4);
        }
        function ae2(t4, e3, r3, n3) {
          an(t4, e3 + 0, r3, n3, 1), an(t4, e3 + 32, r3, n3 + 128, 1);
        }
        function oe2(t4, e3, r3, n3) {
          var i3;
          for (t4 = t4[e3 + 0] + 4, i3 = 0; 4 > i3; ++i3) for (e3 = 0; 4 > e3; ++e3) Qt2(r3, n3, e3, i3, t4);
        }
        function se2(t4, e3, r3, n3) {
          t4[e3 + 0] && cn(t4, e3 + 0, r3, n3), t4[e3 + 16] && cn(t4, e3 + 16, r3, n3 + 4), t4[e3 + 32] && cn(t4, e3 + 32, r3, n3 + 128), t4[e3 + 48] && cn(t4, e3 + 48, r3, n3 + 128 + 4);
        }
        function ce2(t4, e3, r3, n3) {
          var i3, o3 = a2(16);
          for (i3 = 0; 4 > i3; ++i3) {
            var s3 = t4[e3 + 0 + i3] + t4[e3 + 12 + i3], c4 = t4[e3 + 4 + i3] + t4[e3 + 8 + i3], u4 = t4[e3 + 4 + i3] - t4[e3 + 8 + i3], l4 = t4[e3 + 0 + i3] - t4[e3 + 12 + i3];
            o3[0 + i3] = s3 + c4, o3[8 + i3] = s3 - c4, o3[4 + i3] = l4 + u4, o3[12 + i3] = l4 - u4;
          }
          for (i3 = 0; 4 > i3; ++i3) s3 = (t4 = o3[0 + 4 * i3] + 3) + o3[3 + 4 * i3], c4 = o3[1 + 4 * i3] + o3[2 + 4 * i3], u4 = o3[1 + 4 * i3] - o3[2 + 4 * i3], l4 = t4 - o3[3 + 4 * i3], r3[n3 + 0] = s3 + c4 >> 3, r3[n3 + 16] = l4 + u4 >> 3, r3[n3 + 32] = s3 - c4 >> 3, r3[n3 + 48] = l4 - u4 >> 3, n3 += 64;
        }
        function ue2(t4, e3, r3) {
          var n3, i3 = e3 - 32, a3 = On, o3 = 255 - t4[i3 - 1];
          for (n3 = 0; n3 < r3; ++n3) {
            var s3, c4 = a3, u4 = o3 + t4[e3 - 1];
            for (s3 = 0; s3 < r3; ++s3) t4[e3 + s3] = c4[u4 + t4[i3 + s3]];
            e3 += 32;
          }
        }
        function le2(t4, e3) {
          ue2(t4, e3, 4);
        }
        function he2(t4, e3) {
          ue2(t4, e3, 8);
        }
        function fe2(t4, e3) {
          ue2(t4, e3, 16);
        }
        function de2(t4, e3) {
          var r3;
          for (r3 = 0; 16 > r3; ++r3) n2(t4, e3 + 32 * r3, t4, e3 - 32, 16);
        }
        function pe2(t4, e3) {
          var r3;
          for (r3 = 16; 0 < r3; --r3) i2(t4, e3, t4[e3 - 1], 16), e3 += 32;
        }
        function ge2(t4, e3, r3) {
          var n3;
          for (n3 = 0; 16 > n3; ++n3) i2(e3, r3 + 32 * n3, t4, 16);
        }
        function me2(t4, e3) {
          var r3, n3 = 16;
          for (r3 = 0; 16 > r3; ++r3) n3 += t4[e3 - 1 + 32 * r3] + t4[e3 + r3 - 32];
          ge2(n3 >> 5, t4, e3);
        }
        function ve2(t4, e3) {
          var r3, n3 = 8;
          for (r3 = 0; 16 > r3; ++r3) n3 += t4[e3 - 1 + 32 * r3];
          ge2(n3 >> 4, t4, e3);
        }
        function be2(t4, e3) {
          var r3, n3 = 8;
          for (r3 = 0; 16 > r3; ++r3) n3 += t4[e3 + r3 - 32];
          ge2(n3 >> 4, t4, e3);
        }
        function ye2(t4, e3) {
          ge2(128, t4, e3);
        }
        function we2(t4, e3, r3) {
          return t4 + 2 * e3 + r3 + 2 >> 2;
        }
        function Ne2(t4, e3) {
          var r3, i3 = e3 - 32;
          for (i3 = new Uint8Array([we2(t4[i3 - 1], t4[i3 + 0], t4[i3 + 1]), we2(t4[i3 + 0], t4[i3 + 1], t4[i3 + 2]), we2(t4[i3 + 1], t4[i3 + 2], t4[i3 + 3]), we2(t4[i3 + 2], t4[i3 + 3], t4[i3 + 4])]), r3 = 0; 4 > r3; ++r3) n2(t4, e3 + 32 * r3, i3, 0, i3.length);
        }
        function Le2(t4, e3) {
          var r3 = t4[e3 - 1], n3 = t4[e3 - 1 + 32], i3 = t4[e3 - 1 + 64], a3 = t4[e3 - 1 + 96];
          F2(t4, e3 + 0, 16843009 * we2(t4[e3 - 1 - 32], r3, n3)), F2(t4, e3 + 32, 16843009 * we2(r3, n3, i3)), F2(t4, e3 + 64, 16843009 * we2(n3, i3, a3)), F2(t4, e3 + 96, 16843009 * we2(i3, a3, a3));
        }
        function xe2(t4, e3) {
          var r3, n3 = 4;
          for (r3 = 0; 4 > r3; ++r3) n3 += t4[e3 + r3 - 32] + t4[e3 - 1 + 32 * r3];
          for (n3 >>= 3, r3 = 0; 4 > r3; ++r3) i2(t4, e3 + 32 * r3, n3, 4);
        }
        function Ae2(t4, e3) {
          var r3 = t4[e3 - 1 + 0], n3 = t4[e3 - 1 + 32], i3 = t4[e3 - 1 + 64], a3 = t4[e3 - 1 - 32], o3 = t4[e3 + 0 - 32], s3 = t4[e3 + 1 - 32], c4 = t4[e3 + 2 - 32], u4 = t4[e3 + 3 - 32];
          t4[e3 + 0 + 96] = we2(n3, i3, t4[e3 - 1 + 96]), t4[e3 + 1 + 96] = t4[e3 + 0 + 64] = we2(r3, n3, i3), t4[e3 + 2 + 96] = t4[e3 + 1 + 64] = t4[e3 + 0 + 32] = we2(a3, r3, n3), t4[e3 + 3 + 96] = t4[e3 + 2 + 64] = t4[e3 + 1 + 32] = t4[e3 + 0 + 0] = we2(o3, a3, r3), t4[e3 + 3 + 64] = t4[e3 + 2 + 32] = t4[e3 + 1 + 0] = we2(s3, o3, a3), t4[e3 + 3 + 32] = t4[e3 + 2 + 0] = we2(c4, s3, o3), t4[e3 + 3 + 0] = we2(u4, c4, s3);
        }
        function Se(t4, e3) {
          var r3 = t4[e3 + 1 - 32], n3 = t4[e3 + 2 - 32], i3 = t4[e3 + 3 - 32], a3 = t4[e3 + 4 - 32], o3 = t4[e3 + 5 - 32], s3 = t4[e3 + 6 - 32], c4 = t4[e3 + 7 - 32];
          t4[e3 + 0 + 0] = we2(t4[e3 + 0 - 32], r3, n3), t4[e3 + 1 + 0] = t4[e3 + 0 + 32] = we2(r3, n3, i3), t4[e3 + 2 + 0] = t4[e3 + 1 + 32] = t4[e3 + 0 + 64] = we2(n3, i3, a3), t4[e3 + 3 + 0] = t4[e3 + 2 + 32] = t4[e3 + 1 + 64] = t4[e3 + 0 + 96] = we2(i3, a3, o3), t4[e3 + 3 + 32] = t4[e3 + 2 + 64] = t4[e3 + 1 + 96] = we2(a3, o3, s3), t4[e3 + 3 + 64] = t4[e3 + 2 + 96] = we2(o3, s3, c4), t4[e3 + 3 + 96] = we2(s3, c4, c4);
        }
        function _e(t4, e3) {
          var r3 = t4[e3 - 1 + 0], n3 = t4[e3 - 1 + 32], i3 = t4[e3 - 1 + 64], a3 = t4[e3 - 1 - 32], o3 = t4[e3 + 0 - 32], s3 = t4[e3 + 1 - 32], c4 = t4[e3 + 2 - 32], u4 = t4[e3 + 3 - 32];
          t4[e3 + 0 + 0] = t4[e3 + 1 + 64] = a3 + o3 + 1 >> 1, t4[e3 + 1 + 0] = t4[e3 + 2 + 64] = o3 + s3 + 1 >> 1, t4[e3 + 2 + 0] = t4[e3 + 3 + 64] = s3 + c4 + 1 >> 1, t4[e3 + 3 + 0] = c4 + u4 + 1 >> 1, t4[e3 + 0 + 96] = we2(i3, n3, r3), t4[e3 + 0 + 64] = we2(n3, r3, a3), t4[e3 + 0 + 32] = t4[e3 + 1 + 96] = we2(r3, a3, o3), t4[e3 + 1 + 32] = t4[e3 + 2 + 96] = we2(a3, o3, s3), t4[e3 + 2 + 32] = t4[e3 + 3 + 96] = we2(o3, s3, c4), t4[e3 + 3 + 32] = we2(s3, c4, u4);
        }
        function Pe(t4, e3) {
          var r3 = t4[e3 + 0 - 32], n3 = t4[e3 + 1 - 32], i3 = t4[e3 + 2 - 32], a3 = t4[e3 + 3 - 32], o3 = t4[e3 + 4 - 32], s3 = t4[e3 + 5 - 32], c4 = t4[e3 + 6 - 32], u4 = t4[e3 + 7 - 32];
          t4[e3 + 0 + 0] = r3 + n3 + 1 >> 1, t4[e3 + 1 + 0] = t4[e3 + 0 + 64] = n3 + i3 + 1 >> 1, t4[e3 + 2 + 0] = t4[e3 + 1 + 64] = i3 + a3 + 1 >> 1, t4[e3 + 3 + 0] = t4[e3 + 2 + 64] = a3 + o3 + 1 >> 1, t4[e3 + 0 + 32] = we2(r3, n3, i3), t4[e3 + 1 + 32] = t4[e3 + 0 + 96] = we2(n3, i3, a3), t4[e3 + 2 + 32] = t4[e3 + 1 + 96] = we2(i3, a3, o3), t4[e3 + 3 + 32] = t4[e3 + 2 + 96] = we2(a3, o3, s3), t4[e3 + 3 + 64] = we2(o3, s3, c4), t4[e3 + 3 + 96] = we2(s3, c4, u4);
        }
        function ke(t4, e3) {
          var r3 = t4[e3 - 1 + 0], n3 = t4[e3 - 1 + 32], i3 = t4[e3 - 1 + 64], a3 = t4[e3 - 1 + 96];
          t4[e3 + 0 + 0] = r3 + n3 + 1 >> 1, t4[e3 + 2 + 0] = t4[e3 + 0 + 32] = n3 + i3 + 1 >> 1, t4[e3 + 2 + 32] = t4[e3 + 0 + 64] = i3 + a3 + 1 >> 1, t4[e3 + 1 + 0] = we2(r3, n3, i3), t4[e3 + 3 + 0] = t4[e3 + 1 + 32] = we2(n3, i3, a3), t4[e3 + 3 + 32] = t4[e3 + 1 + 64] = we2(i3, a3, a3), t4[e3 + 3 + 64] = t4[e3 + 2 + 64] = t4[e3 + 0 + 96] = t4[e3 + 1 + 96] = t4[e3 + 2 + 96] = t4[e3 + 3 + 96] = a3;
        }
        function Fe(t4, e3) {
          var r3 = t4[e3 - 1 + 0], n3 = t4[e3 - 1 + 32], i3 = t4[e3 - 1 + 64], a3 = t4[e3 - 1 + 96], o3 = t4[e3 - 1 - 32], s3 = t4[e3 + 0 - 32], c4 = t4[e3 + 1 - 32], u4 = t4[e3 + 2 - 32];
          t4[e3 + 0 + 0] = t4[e3 + 2 + 32] = r3 + o3 + 1 >> 1, t4[e3 + 0 + 32] = t4[e3 + 2 + 64] = n3 + r3 + 1 >> 1, t4[e3 + 0 + 64] = t4[e3 + 2 + 96] = i3 + n3 + 1 >> 1, t4[e3 + 0 + 96] = a3 + i3 + 1 >> 1, t4[e3 + 3 + 0] = we2(s3, c4, u4), t4[e3 + 2 + 0] = we2(o3, s3, c4), t4[e3 + 1 + 0] = t4[e3 + 3 + 32] = we2(r3, o3, s3), t4[e3 + 1 + 32] = t4[e3 + 3 + 64] = we2(n3, r3, o3), t4[e3 + 1 + 64] = t4[e3 + 3 + 96] = we2(i3, n3, r3), t4[e3 + 1 + 96] = we2(a3, i3, n3);
        }
        function Ie(t4, e3) {
          var r3;
          for (r3 = 0; 8 > r3; ++r3) n2(t4, e3 + 32 * r3, t4, e3 - 32, 8);
        }
        function je(t4, e3) {
          var r3;
          for (r3 = 0; 8 > r3; ++r3) i2(t4, e3, t4[e3 - 1], 8), e3 += 32;
        }
        function Ce(t4, e3, r3) {
          var n3;
          for (n3 = 0; 8 > n3; ++n3) i2(e3, r3 + 32 * n3, t4, 8);
        }
        function Oe(t4, e3) {
          var r3, n3 = 8;
          for (r3 = 0; 8 > r3; ++r3) n3 += t4[e3 + r3 - 32] + t4[e3 - 1 + 32 * r3];
          Ce(n3 >> 4, t4, e3);
        }
        function Be(t4, e3) {
          var r3, n3 = 4;
          for (r3 = 0; 8 > r3; ++r3) n3 += t4[e3 + r3 - 32];
          Ce(n3 >> 3, t4, e3);
        }
        function qe(t4, e3) {
          var r3, n3 = 4;
          for (r3 = 0; 8 > r3; ++r3) n3 += t4[e3 - 1 + 32 * r3];
          Ce(n3 >> 3, t4, e3);
        }
        function Me(t4, e3) {
          Ce(128, t4, e3);
        }
        function Ee(t4, e3, r3) {
          var n3 = t4[e3 - r3], i3 = t4[e3 + 0], a3 = 3 * (i3 - n3) + jn[1020 + t4[e3 - 2 * r3] - t4[e3 + r3]], o3 = Cn[112 + (a3 + 4 >> 3)];
          t4[e3 - r3] = On[255 + n3 + Cn[112 + (a3 + 3 >> 3)]], t4[e3 + 0] = On[255 + i3 - o3];
        }
        function Re(t4, e3, r3, n3) {
          var i3 = t4[e3 + 0], a3 = t4[e3 + r3];
          return Bn[255 + t4[e3 - 2 * r3] - t4[e3 - r3]] > n3 || Bn[255 + a3 - i3] > n3;
        }
        function De(t4, e3, r3, n3) {
          return 4 * Bn[255 + t4[e3 - r3] - t4[e3 + 0]] + Bn[255 + t4[e3 - 2 * r3] - t4[e3 + r3]] <= n3;
        }
        function Te(t4, e3, r3, n3, i3) {
          var a3 = t4[e3 - 3 * r3], o3 = t4[e3 - 2 * r3], s3 = t4[e3 - r3], c4 = t4[e3 + 0], u4 = t4[e3 + r3], l4 = t4[e3 + 2 * r3], h4 = t4[e3 + 3 * r3];
          return 4 * Bn[255 + s3 - c4] + Bn[255 + o3 - u4] > n3 ? 0 : Bn[255 + t4[e3 - 4 * r3] - a3] <= i3 && Bn[255 + a3 - o3] <= i3 && Bn[255 + o3 - s3] <= i3 && Bn[255 + h4 - l4] <= i3 && Bn[255 + l4 - u4] <= i3 && Bn[255 + u4 - c4] <= i3;
        }
        function ze(t4, e3, r3, n3) {
          var i3 = 2 * n3 + 1;
          for (n3 = 0; 16 > n3; ++n3) De(t4, e3 + n3, r3, i3) && Ee(t4, e3 + n3, r3);
        }
        function Ue(t4, e3, r3, n3) {
          var i3 = 2 * n3 + 1;
          for (n3 = 0; 16 > n3; ++n3) De(t4, e3 + n3 * r3, 1, i3) && Ee(t4, e3 + n3 * r3, 1);
        }
        function He(t4, e3, r3, n3) {
          var i3;
          for (i3 = 3; 0 < i3; --i3) ze(t4, e3 += 4 * r3, r3, n3);
        }
        function We(t4, e3, r3, n3) {
          var i3;
          for (i3 = 3; 0 < i3; --i3) Ue(t4, e3 += 4, r3, n3);
        }
        function Ve(t4, e3, r3, n3, i3, a3, o3, s3) {
          for (a3 = 2 * a3 + 1; 0 < i3--; ) {
            if (Te(t4, e3, r3, a3, o3)) if (Re(t4, e3, r3, s3)) Ee(t4, e3, r3);
            else {
              var c4 = t4, u4 = e3, l4 = r3, h4 = c4[u4 - 2 * l4], f4 = c4[u4 - l4], d4 = c4[u4 + 0], p4 = c4[u4 + l4], g4 = c4[u4 + 2 * l4], m4 = 27 * (b4 = jn[1020 + 3 * (d4 - f4) + jn[1020 + h4 - p4]]) + 63 >> 7, v4 = 18 * b4 + 63 >> 7, b4 = 9 * b4 + 63 >> 7;
              c4[u4 - 3 * l4] = On[255 + c4[u4 - 3 * l4] + b4], c4[u4 - 2 * l4] = On[255 + h4 + v4], c4[u4 - l4] = On[255 + f4 + m4], c4[u4 + 0] = On[255 + d4 - m4], c4[u4 + l4] = On[255 + p4 - v4], c4[u4 + 2 * l4] = On[255 + g4 - b4];
            }
            e3 += n3;
          }
        }
        function Ge(t4, e3, r3, n3, i3, a3, o3, s3) {
          for (a3 = 2 * a3 + 1; 0 < i3--; ) {
            if (Te(t4, e3, r3, a3, o3)) if (Re(t4, e3, r3, s3)) Ee(t4, e3, r3);
            else {
              var c4 = t4, u4 = e3, l4 = r3, h4 = c4[u4 - l4], f4 = c4[u4 + 0], d4 = c4[u4 + l4], p4 = Cn[112 + (4 + (g4 = 3 * (f4 - h4)) >> 3)], g4 = Cn[112 + (g4 + 3 >> 3)], m4 = p4 + 1 >> 1;
              c4[u4 - 2 * l4] = On[255 + c4[u4 - 2 * l4] + m4], c4[u4 - l4] = On[255 + h4 + g4], c4[u4 + 0] = On[255 + f4 - p4], c4[u4 + l4] = On[255 + d4 - m4];
            }
            e3 += n3;
          }
        }
        function Ye(t4, e3, r3, n3, i3, a3) {
          Ve(t4, e3, r3, 1, 16, n3, i3, a3);
        }
        function Je(t4, e3, r3, n3, i3, a3) {
          Ve(t4, e3, 1, r3, 16, n3, i3, a3);
        }
        function Xe(t4, e3, r3, n3, i3, a3) {
          var o3;
          for (o3 = 3; 0 < o3; --o3) Ge(t4, e3 += 4 * r3, r3, 1, 16, n3, i3, a3);
        }
        function Ke(t4, e3, r3, n3, i3, a3) {
          var o3;
          for (o3 = 3; 0 < o3; --o3) Ge(t4, e3 += 4, 1, r3, 16, n3, i3, a3);
        }
        function $e(t4, e3, r3, n3, i3, a3, o3, s3) {
          Ve(t4, e3, i3, 1, 8, a3, o3, s3), Ve(r3, n3, i3, 1, 8, a3, o3, s3);
        }
        function Ze(t4, e3, r3, n3, i3, a3, o3, s3) {
          Ve(t4, e3, 1, i3, 8, a3, o3, s3), Ve(r3, n3, 1, i3, 8, a3, o3, s3);
        }
        function Qe(t4, e3, r3, n3, i3, a3, o3, s3) {
          Ge(t4, e3 + 4 * i3, i3, 1, 8, a3, o3, s3), Ge(r3, n3 + 4 * i3, i3, 1, 8, a3, o3, s3);
        }
        function tr(t4, e3, r3, n3, i3, a3, o3, s3) {
          Ge(t4, e3 + 4, 1, i3, 8, a3, o3, s3), Ge(r3, n3 + 4, 1, i3, 8, a3, o3, s3);
        }
        function er() {
          this.ba = new ot2(), this.ec = [], this.cc = [], this.Mc = [], this.Dc = this.Nc = this.dc = this.fc = 0, this.Oa = new ct2(), this.memory = 0, this.Ib = "OutputFunc", this.Jb = "OutputAlphaFunc", this.Nd = "OutputRowFunc";
        }
        function rr() {
          this.data = [], this.offset = this.kd = this.ha = this.w = 0, this.na = [], this.xa = this.gb = this.Ja = this.Sa = this.P = 0;
        }
        function nr() {
          this.nc = this.Ea = this.b = this.hc = 0, this.K = [], this.w = 0;
        }
        function ir() {
          this.ua = 0, this.Wa = new q2(), this.vb = new q2(), this.md = this.xc = this.wc = 0, this.vc = [], this.Wb = 0, this.Ya = new d3(), this.yc = new h3();
        }
        function ar() {
          this.xb = this.a = 0, this.l = new Gt2(), this.ca = new ot2(), this.V = [], this.Ba = 0, this.Ta = [], this.Ua = 0, this.m = new N3(), this.Pb = 0, this.wd = new N3(), this.Ma = this.$ = this.C = this.i = this.c = this.xd = 0, this.s = new ir(), this.ab = 0, this.gc = o2(4, nr), this.Oc = 0;
        }
        function or() {
          this.Lc = this.Z = this.$a = this.i = this.c = 0, this.l = new Gt2(), this.ic = 0, this.ca = [], this.tb = 0, this.qd = null, this.rd = 0;
        }
        function sr(t4, e3, r3, n3, i3, a3, o3) {
          for (t4 = null == t4 ? 0 : t4[e3 + 0], e3 = 0; e3 < o3; ++e3) i3[a3 + e3] = t4 + r3[n3 + e3] & 255, t4 = i3[a3 + e3];
        }
        function cr(t4, e3, r3, n3, i3, a3, o3) {
          var s3;
          if (null == t4) sr(null, null, r3, n3, i3, a3, o3);
          else for (s3 = 0; s3 < o3; ++s3) i3[a3 + s3] = t4[e3 + s3] + r3[n3 + s3] & 255;
        }
        function ur(t4, e3, r3, n3, i3, a3, o3) {
          if (null == t4) sr(null, null, r3, n3, i3, a3, o3);
          else {
            var s3, c4 = t4[e3 + 0], u4 = c4, l4 = c4;
            for (s3 = 0; s3 < o3; ++s3) u4 = l4 + (c4 = t4[e3 + s3]) - u4, l4 = r3[n3 + s3] + (-256 & u4 ? 0 > u4 ? 0 : 255 : u4) & 255, u4 = c4, i3[a3 + s3] = l4;
          }
        }
        function lr(t4, r3, i3, o3) {
          var s3 = r3.width, c4 = r3.o;
          if (e2(null != t4 && null != r3), 0 > i3 || 0 >= o3 || i3 + o3 > c4) return null;
          if (!t4.Cc) {
            if (null == t4.ga) {
              var u4;
              if (t4.ga = new or(), (u4 = null == t4.ga) || (u4 = r3.width * r3.o, e2(0 == t4.Gb.length), t4.Gb = a2(u4), t4.Uc = 0, null == t4.Gb ? u4 = 0 : (t4.mb = t4.Gb, t4.nb = t4.Uc, t4.rc = null, u4 = 1), u4 = !u4), !u4) {
                u4 = t4.ga;
                var l4 = t4.Fa, h4 = t4.P, f4 = t4.qc, d4 = t4.mb, p4 = t4.nb, g4 = h4 + 1, m4 = f4 - 1, b4 = u4.l;
                if (e2(null != l4 && null != d4 && null != r3), gi[0] = null, gi[1] = sr, gi[2] = cr, gi[3] = ur, u4.ca = d4, u4.tb = p4, u4.c = r3.width, u4.i = r3.height, e2(0 < u4.c && 0 < u4.i), 1 >= f4) r3 = 0;
                else if (u4.$a = 3 & l4[h4 + 0], u4.Z = l4[h4 + 0] >> 2 & 3, u4.Lc = l4[h4 + 0] >> 4 & 3, h4 = l4[h4 + 0] >> 6 & 3, 0 > u4.$a || 1 < u4.$a || 4 <= u4.Z || 1 < u4.Lc || h4) r3 = 0;
                else if (b4.put = dt2, b4.ac = ft2, b4.bc = pt2, b4.ma = u4, b4.width = r3.width, b4.height = r3.height, b4.Da = r3.Da, b4.v = r3.v, b4.va = r3.va, b4.j = r3.j, b4.o = r3.o, u4.$a) t: {
                  e2(1 == u4.$a), r3 = kt2();
                  e: for (; ; ) {
                    if (null == r3) {
                      r3 = 0;
                      break t;
                    }
                    if (e2(null != u4), u4.mc = r3, r3.c = u4.c, r3.i = u4.i, r3.l = u4.l, r3.l.ma = u4, r3.l.width = u4.c, r3.l.height = u4.i, r3.a = 0, v3(r3.m, l4, g4, m4), !Ft2(u4.c, u4.i, 1, r3, null)) break e;
                    if (1 == r3.ab && 3 == r3.gc[0].hc && xt2(r3.s) ? (u4.ic = 1, l4 = r3.c * r3.i, r3.Ta = null, r3.Ua = 0, r3.V = a2(l4), r3.Ba = 0, null == r3.V ? (r3.a = 1, r3 = 0) : r3 = 1) : (u4.ic = 0, r3 = It2(r3, u4.c)), !r3) break e;
                    r3 = 1;
                    break t;
                  }
                  u4.mc = null, r3 = 0;
                }
                else r3 = m4 >= u4.c * u4.i;
                u4 = !r3;
              }
              if (u4) return null;
              1 != t4.ga.Lc ? t4.Ga = 0 : o3 = c4 - i3;
            }
            e2(null != t4.ga), e2(i3 + o3 <= c4);
            t: {
              if (r3 = (l4 = t4.ga).c, c4 = l4.l.o, 0 == l4.$a) {
                if (g4 = t4.rc, m4 = t4.Vc, b4 = t4.Fa, h4 = t4.P + 1 + i3 * r3, f4 = t4.mb, d4 = t4.nb + i3 * r3, e2(h4 <= t4.P + t4.qc), 0 != l4.Z) for (e2(null != gi[l4.Z]), u4 = 0; u4 < o3; ++u4) gi[l4.Z](g4, m4, b4, h4, f4, d4, r3), g4 = f4, m4 = d4, d4 += r3, h4 += r3;
                else for (u4 = 0; u4 < o3; ++u4) n2(f4, d4, b4, h4, r3), g4 = f4, m4 = d4, d4 += r3, h4 += r3;
                t4.rc = g4, t4.Vc = m4;
              } else {
                if (e2(null != l4.mc), r3 = i3 + o3, e2(null != (u4 = l4.mc)), e2(r3 <= u4.i), u4.C >= r3) r3 = 1;
                else if (l4.ic || gr(), l4.ic) {
                  l4 = u4.V, g4 = u4.Ba, m4 = u4.c;
                  var y4 = u4.i, w4 = (b4 = 1, h4 = u4.$ / m4, f4 = u4.$ % m4, d4 = u4.m, p4 = u4.s, u4.$), N4 = m4 * y4, L4 = m4 * r3, A4 = p4.wc, _3 = w4 < L4 ? wt2(p4, f4, h4) : null;
                  e2(w4 <= N4), e2(r3 <= y4), e2(xt2(p4));
                  e: for (; ; ) {
                    for (; !d4.h && w4 < L4; ) {
                      if (f4 & A4 || (_3 = wt2(p4, f4, h4)), e2(null != _3), S2(d4), 256 > (y4 = bt2(_3.G[0], _3.H[0], d4))) l4[g4 + w4] = y4, ++w4, ++f4 >= m4 && (f4 = 0, ++h4 <= r3 && !(h4 % 16) && St2(u4, h4));
                      else {
                        if (!(280 > y4)) {
                          b4 = 0;
                          break e;
                        }
                        y4 = mt2(y4 - 256, d4);
                        var P3, k3 = bt2(_3.G[4], _3.H[4], d4);
                        if (S2(d4), !(w4 >= (k3 = vt2(m4, k3 = mt2(k3, d4))) && N4 - w4 >= y4)) {
                          b4 = 0;
                          break e;
                        }
                        for (P3 = 0; P3 < y4; ++P3) l4[g4 + w4 + P3] = l4[g4 + w4 + P3 - k3];
                        for (w4 += y4, f4 += y4; f4 >= m4; ) f4 -= m4, ++h4 <= r3 && !(h4 % 16) && St2(u4, h4);
                        w4 < L4 && f4 & A4 && (_3 = wt2(p4, f4, h4));
                      }
                      e2(d4.h == x3(d4));
                    }
                    St2(u4, h4 > r3 ? r3 : h4);
                    break e;
                  }
                  !b4 || d4.h && w4 < N4 ? (b4 = 0, u4.a = d4.h ? 5 : 3) : u4.$ = w4, r3 = b4;
                } else r3 = _t2(u4, u4.V, u4.Ba, u4.c, u4.i, r3, jt2);
                if (!r3) {
                  o3 = 0;
                  break t;
                }
              }
              i3 + o3 >= c4 && (t4.Cc = 1), o3 = 1;
            }
            if (!o3) return null;
            if (t4.Cc && (null != (o3 = t4.ga) && (o3.mc = null), t4.ga = null, 0 < t4.Ga)) return alert("todo:WebPDequantizeLevels"), null;
          }
          return t4.nb + i3 * s3;
        }
        function hr(t4, e3, r3, n3, i3, a3) {
          for (; 0 < i3--; ) {
            var o3, s3 = t4, c4 = e3 + (r3 ? 1 : 0), u4 = t4, l4 = e3 + (r3 ? 0 : 3);
            for (o3 = 0; o3 < n3; ++o3) {
              var h4 = u4[l4 + 4 * o3];
              255 != h4 && (h4 *= 32897, s3[c4 + 4 * o3 + 0] = s3[c4 + 4 * o3 + 0] * h4 >> 23, s3[c4 + 4 * o3 + 1] = s3[c4 + 4 * o3 + 1] * h4 >> 23, s3[c4 + 4 * o3 + 2] = s3[c4 + 4 * o3 + 2] * h4 >> 23);
            }
            e3 += a3;
          }
        }
        function fr(t4, e3, r3, n3, i3) {
          for (; 0 < n3--; ) {
            var a3;
            for (a3 = 0; a3 < r3; ++a3) {
              var o3 = t4[e3 + 2 * a3 + 0], s3 = 15 & (u4 = t4[e3 + 2 * a3 + 1]), c4 = 4369 * s3, u4 = (240 & u4 | u4 >> 4) * c4 >> 16;
              t4[e3 + 2 * a3 + 0] = (240 & o3 | o3 >> 4) * c4 >> 16 & 240 | (15 & o3 | o3 << 4) * c4 >> 16 >> 4 & 15, t4[e3 + 2 * a3 + 1] = 240 & u4 | s3;
            }
            e3 += i3;
          }
        }
        function dr(t4, e3, r3, n3, i3, a3, o3, s3) {
          var c4, u4, l4 = 255;
          for (u4 = 0; u4 < i3; ++u4) {
            for (c4 = 0; c4 < n3; ++c4) {
              var h4 = t4[e3 + c4];
              a3[o3 + 4 * c4] = h4, l4 &= h4;
            }
            e3 += r3, o3 += s3;
          }
          return 255 != l4;
        }
        function pr(t4, e3, r3, n3, i3) {
          var a3;
          for (a3 = 0; a3 < i3; ++a3) r3[n3 + a3] = t4[e3 + a3] >> 8;
        }
        function gr() {
          Ln = hr, xn = fr, An = dr, Sn = pr;
        }
        function mr(r3, n3, i3) {
          t3[r3] = function(t4, r4, a3, o3, s3, c4, u4, l4, h4, f4, d4, p4, g4, m4, v4, b4, y4) {
            var w4, N4 = y4 - 1 >> 1, L4 = s3[c4 + 0] | u4[l4 + 0] << 16, x4 = h4[f4 + 0] | d4[p4 + 0] << 16;
            e2(null != t4);
            var A4 = 3 * L4 + x4 + 131074 >> 2;
            for (n3(t4[r4 + 0], 255 & A4, A4 >> 16, g4, m4), null != a3 && (A4 = 3 * x4 + L4 + 131074 >> 2, n3(a3[o3 + 0], 255 & A4, A4 >> 16, v4, b4)), w4 = 1; w4 <= N4; ++w4) {
              var S3 = s3[c4 + w4] | u4[l4 + w4] << 16, _3 = h4[f4 + w4] | d4[p4 + w4] << 16, P3 = L4 + S3 + x4 + _3 + 524296, k3 = P3 + 2 * (S3 + x4) >> 3;
              A4 = k3 + L4 >> 1, L4 = (P3 = P3 + 2 * (L4 + _3) >> 3) + S3 >> 1, n3(t4[r4 + 2 * w4 - 1], 255 & A4, A4 >> 16, g4, m4 + (2 * w4 - 1) * i3), n3(t4[r4 + 2 * w4 - 0], 255 & L4, L4 >> 16, g4, m4 + (2 * w4 - 0) * i3), null != a3 && (A4 = P3 + x4 >> 1, L4 = k3 + _3 >> 1, n3(a3[o3 + 2 * w4 - 1], 255 & A4, A4 >> 16, v4, b4 + (2 * w4 - 1) * i3), n3(a3[o3 + 2 * w4 + 0], 255 & L4, L4 >> 16, v4, b4 + (2 * w4 + 0) * i3)), L4 = S3, x4 = _3;
            }
            1 & y4 || (A4 = 3 * L4 + x4 + 131074 >> 2, n3(t4[r4 + y4 - 1], 255 & A4, A4 >> 16, g4, m4 + (y4 - 1) * i3), null != a3 && (A4 = 3 * x4 + L4 + 131074 >> 2, n3(a3[o3 + y4 - 1], 255 & A4, A4 >> 16, v4, b4 + (y4 - 1) * i3)));
          };
        }
        function vr() {
          mi[qn] = vi, mi[Mn] = yi, mi[En] = bi, mi[Rn] = wi, mi[Dn] = Ni, mi[Tn] = Li, mi[zn] = xi, mi[Un] = yi, mi[Hn] = wi, mi[Wn] = Ni, mi[Vn] = Li;
        }
        function br(t4) {
          return t4 & -16384 ? 0 > t4 ? 0 : 255 : t4 >> ki;
        }
        function yr(t4, e3) {
          return br((19077 * t4 >> 8) + (26149 * e3 >> 8) - 14234);
        }
        function wr(t4, e3, r3) {
          return br((19077 * t4 >> 8) - (6419 * e3 >> 8) - (13320 * r3 >> 8) + 8708);
        }
        function Nr(t4, e3) {
          return br((19077 * t4 >> 8) + (33050 * e3 >> 8) - 17685);
        }
        function Lr(t4, e3, r3, n3, i3) {
          n3[i3 + 0] = yr(t4, r3), n3[i3 + 1] = wr(t4, e3, r3), n3[i3 + 2] = Nr(t4, e3);
        }
        function xr(t4, e3, r3, n3, i3) {
          n3[i3 + 0] = Nr(t4, e3), n3[i3 + 1] = wr(t4, e3, r3), n3[i3 + 2] = yr(t4, r3);
        }
        function Ar(t4, e3, r3, n3, i3) {
          var a3 = wr(t4, e3, r3);
          e3 = a3 << 3 & 224 | Nr(t4, e3) >> 3, n3[i3 + 0] = 248 & yr(t4, r3) | a3 >> 5, n3[i3 + 1] = e3;
        }
        function Sr(t4, e3, r3, n3, i3) {
          var a3 = 240 & Nr(t4, e3) | 15;
          n3[i3 + 0] = 240 & yr(t4, r3) | wr(t4, e3, r3) >> 4, n3[i3 + 1] = a3;
        }
        function _r(t4, e3, r3, n3, i3) {
          n3[i3 + 0] = 255, Lr(t4, e3, r3, n3, i3 + 1);
        }
        function Pr(t4, e3, r3, n3, i3) {
          xr(t4, e3, r3, n3, i3), n3[i3 + 3] = 255;
        }
        function kr(t4, e3, r3, n3, i3) {
          Lr(t4, e3, r3, n3, i3), n3[i3 + 3] = 255;
        }
        function Fr(e3, r3, n3) {
          t3[e3] = function(t4, e4, i3, a3, o3, s3, c4, u4, l4) {
            for (var h4 = u4 + (-2 & l4) * n3; u4 != h4; ) r3(t4[e4 + 0], i3[a3 + 0], o3[s3 + 0], c4, u4), r3(t4[e4 + 1], i3[a3 + 0], o3[s3 + 0], c4, u4 + n3), e4 += 2, ++a3, ++s3, u4 += 2 * n3;
            1 & l4 && r3(t4[e4 + 0], i3[a3 + 0], o3[s3 + 0], c4, u4);
          };
        }
        function Ir(t4, e3, r3) {
          return 0 == r3 ? 0 == t4 ? 0 == e3 ? 6 : 5 : 0 == e3 ? 4 : 0 : r3;
        }
        function jr(t4, e3, r3, n3, i3) {
          switch (t4 >>> 30) {
            case 3:
              an(e3, r3, n3, i3, 0);
              break;
            case 2:
              on(e3, r3, n3, i3);
              break;
            case 1:
              cn(e3, r3, n3, i3);
          }
        }
        function Cr(t4, e3) {
          var r3, a3, o3 = e3.M, s3 = e3.Nb, c4 = t4.oc, u4 = t4.pc + 40, l4 = t4.oc, h4 = t4.pc + 584, f4 = t4.oc, d4 = t4.pc + 600;
          for (r3 = 0; 16 > r3; ++r3) c4[u4 + 32 * r3 - 1] = 129;
          for (r3 = 0; 8 > r3; ++r3) l4[h4 + 32 * r3 - 1] = 129, f4[d4 + 32 * r3 - 1] = 129;
          for (0 < o3 ? c4[u4 - 1 - 32] = l4[h4 - 1 - 32] = f4[d4 - 1 - 32] = 129 : (i2(c4, u4 - 32 - 1, 127, 21), i2(l4, h4 - 32 - 1, 127, 9), i2(f4, d4 - 32 - 1, 127, 9)), a3 = 0; a3 < t4.za; ++a3) {
            var p4 = e3.ya[e3.aa + a3];
            if (0 < a3) {
              for (r3 = -1; 16 > r3; ++r3) n2(c4, u4 + 32 * r3 - 4, c4, u4 + 32 * r3 + 12, 4);
              for (r3 = -1; 8 > r3; ++r3) n2(l4, h4 + 32 * r3 - 4, l4, h4 + 32 * r3 + 4, 4), n2(f4, d4 + 32 * r3 - 4, f4, d4 + 32 * r3 + 4, 4);
            }
            var g4 = t4.Gd, m4 = t4.Hd + a3, v4 = p4.ad, b4 = p4.Hc;
            if (0 < o3 && (n2(c4, u4 - 32, g4[m4].y, 0, 16), n2(l4, h4 - 32, g4[m4].f, 0, 8), n2(f4, d4 - 32, g4[m4].ea, 0, 8)), p4.Za) {
              var y4 = c4, w4 = u4 - 32 + 16;
              for (0 < o3 && (a3 >= t4.za - 1 ? i2(y4, w4, g4[m4].y[15], 4) : n2(y4, w4, g4[m4 + 1].y, 0, 4)), r3 = 0; 4 > r3; r3++) y4[w4 + 128 + r3] = y4[w4 + 256 + r3] = y4[w4 + 384 + r3] = y4[w4 + 0 + r3];
              for (r3 = 0; 16 > r3; ++r3, b4 <<= 2) y4 = c4, w4 = u4 + Ei[r3], hi[p4.Ob[r3]](y4, w4), jr(b4, v4, 16 * +r3, y4, w4);
            } else if (y4 = Ir(a3, o3, p4.Ob[0]), li[y4](c4, u4), 0 != b4) for (r3 = 0; 16 > r3; ++r3, b4 <<= 2) jr(b4, v4, 16 * +r3, c4, u4 + Ei[r3]);
            for (r3 = p4.Gc, y4 = Ir(a3, o3, p4.Dd), fi[y4](l4, h4), fi[y4](f4, d4), b4 = v4, y4 = l4, w4 = h4, 255 & (p4 = 0 | r3) && (170 & p4 ? sn(b4, 256, y4, w4) : un(b4, 256, y4, w4)), p4 = f4, b4 = d4, 255 & (r3 >>= 8) && (170 & r3 ? sn(v4, 320, p4, b4) : un(v4, 320, p4, b4)), o3 < t4.Ub - 1 && (n2(g4[m4].y, 0, c4, u4 + 480, 16), n2(g4[m4].f, 0, l4, h4 + 224, 8), n2(g4[m4].ea, 0, f4, d4 + 224, 8)), r3 = 8 * s3 * t4.B, g4 = t4.sa, m4 = t4.ta + 16 * a3 + 16 * s3 * t4.R, v4 = t4.qa, p4 = t4.ra + 8 * a3 + r3, b4 = t4.Ha, y4 = t4.Ia + 8 * a3 + r3, r3 = 0; 16 > r3; ++r3) n2(g4, m4 + r3 * t4.R, c4, u4 + 32 * r3, 16);
            for (r3 = 0; 8 > r3; ++r3) n2(v4, p4 + r3 * t4.B, l4, h4 + 32 * r3, 8), n2(b4, y4 + r3 * t4.B, f4, d4 + 32 * r3, 8);
          }
        }
        function Or(t4, n3, i3, a3, o3, s3, c4, u4, l4) {
          var h4 = [0], f4 = [0], d4 = 0, p4 = null != l4 ? l4.kd : 0, g4 = null != l4 ? l4 : new rr();
          if (null == t4 || 12 > i3) return 7;
          g4.data = t4, g4.w = n3, g4.ha = i3, n3 = [n3], i3 = [i3], g4.gb = [g4.gb];
          t: {
            var m4 = n3, b4 = i3, y4 = g4.gb;
            if (e2(null != t4), e2(null != b4), e2(null != y4), y4[0] = 0, 12 <= b4[0] && !r2(t4, m4[0], "RIFF")) {
              if (r2(t4, m4[0] + 8, "WEBP")) {
                y4 = 3;
                break t;
              }
              var w4 = C2(t4, m4[0] + 4);
              if (12 > w4 || 4294967286 < w4) {
                y4 = 3;
                break t;
              }
              if (p4 && w4 > b4[0] - 8) {
                y4 = 7;
                break t;
              }
              y4[0] = w4, m4[0] += 12, b4[0] -= 12;
            }
            y4 = 0;
          }
          if (0 != y4) return y4;
          for (w4 = 0 < g4.gb[0], i3 = i3[0]; ; ) {
            t: {
              var L4 = t4;
              b4 = n3, y4 = i3;
              var x4 = h4, A4 = f4, S3 = m4 = [0];
              if ((k3 = d4 = [d4])[0] = 0, 8 > y4[0]) y4 = 7;
              else {
                if (!r2(L4, b4[0], "VP8X")) {
                  if (10 != C2(L4, b4[0] + 4)) {
                    y4 = 3;
                    break t;
                  }
                  if (18 > y4[0]) {
                    y4 = 7;
                    break t;
                  }
                  var _3 = C2(L4, b4[0] + 8), P3 = 1 + j2(L4, b4[0] + 12);
                  if (2147483648 <= P3 * (L4 = 1 + j2(L4, b4[0] + 15))) {
                    y4 = 3;
                    break t;
                  }
                  null != S3 && (S3[0] = _3), null != x4 && (x4[0] = P3), null != A4 && (A4[0] = L4), b4[0] += 18, y4[0] -= 18, k3[0] = 1;
                }
                y4 = 0;
              }
            }
            if (d4 = d4[0], m4 = m4[0], 0 != y4) return y4;
            if (b4 = !!(2 & m4), !w4 && d4) return 3;
            if (null != s3 && (s3[0] = !!(16 & m4)), null != c4 && (c4[0] = b4), null != u4 && (u4[0] = 0), c4 = h4[0], m4 = f4[0], d4 && b4 && null == l4) {
              y4 = 0;
              break;
            }
            if (4 > i3) {
              y4 = 7;
              break;
            }
            if (w4 && d4 || !w4 && !d4 && !r2(t4, n3[0], "ALPH")) {
              i3 = [i3], g4.na = [g4.na], g4.P = [g4.P], g4.Sa = [g4.Sa];
              t: {
                _3 = t4, y4 = n3, w4 = i3;
                var k3 = g4.gb;
                x4 = g4.na, A4 = g4.P, S3 = g4.Sa, P3 = 22, e2(null != _3), e2(null != w4), L4 = y4[0];
                var F3 = w4[0];
                for (e2(null != x4), e2(null != S3), x4[0] = null, A4[0] = null, S3[0] = 0; ; ) {
                  if (y4[0] = L4, w4[0] = F3, 8 > F3) {
                    y4 = 7;
                    break t;
                  }
                  var I3 = C2(_3, L4 + 4);
                  if (4294967286 < I3) {
                    y4 = 3;
                    break t;
                  }
                  var O3 = 8 + I3 + 1 & -2;
                  if (P3 += O3, 0 < k3 && P3 > k3) {
                    y4 = 3;
                    break t;
                  }
                  if (!r2(_3, L4, "VP8 ") || !r2(_3, L4, "VP8L")) {
                    y4 = 0;
                    break t;
                  }
                  if (F3[0] < O3) {
                    y4 = 7;
                    break t;
                  }
                  r2(_3, L4, "ALPH") || (x4[0] = _3, A4[0] = L4 + 8, S3[0] = I3), L4 += O3, F3 -= O3;
                }
              }
              if (i3 = i3[0], g4.na = g4.na[0], g4.P = g4.P[0], g4.Sa = g4.Sa[0], 0 != y4) break;
            }
            i3 = [i3], g4.Ja = [g4.Ja], g4.xa = [g4.xa];
            t: if (k3 = t4, y4 = n3, w4 = i3, x4 = g4.gb[0], A4 = g4.Ja, S3 = g4.xa, _3 = y4[0], L4 = !r2(k3, _3, "VP8 "), P3 = !r2(k3, _3, "VP8L"), e2(null != k3), e2(null != w4), e2(null != A4), e2(null != S3), 8 > w4[0]) y4 = 7;
            else {
              if (L4 || P3) {
                if (k3 = C2(k3, _3 + 4), 12 <= x4 && k3 > x4 - 12) {
                  y4 = 3;
                  break t;
                }
                if (p4 && k3 > w4[0] - 8) {
                  y4 = 7;
                  break t;
                }
                A4[0] = k3, y4[0] += 8, w4[0] -= 8, S3[0] = P3;
              } else S3[0] = 5 <= w4[0] && 47 == k3[_3 + 0] && !(k3[_3 + 4] >> 5), A4[0] = w4[0];
              y4 = 0;
            }
            if (i3 = i3[0], g4.Ja = g4.Ja[0], g4.xa = g4.xa[0], n3 = n3[0], 0 != y4) break;
            if (4294967286 < g4.Ja) return 3;
            if (null == u4 || b4 || (u4[0] = g4.xa ? 2 : 1), c4 = [c4], m4 = [m4], g4.xa) {
              if (5 > i3) {
                y4 = 7;
                break;
              }
              u4 = c4, p4 = m4, b4 = s3, null == t4 || 5 > i3 ? t4 = 0 : 5 <= i3 && 47 == t4[n3 + 0] && !(t4[n3 + 4] >> 5) ? (w4 = [0], k3 = [0], x4 = [0], v3(A4 = new N3(), t4, n3, i3), gt2(A4, w4, k3, x4) ? (null != u4 && (u4[0] = w4[0]), null != p4 && (p4[0] = k3[0]), null != b4 && (b4[0] = x4[0]), t4 = 1) : t4 = 0) : t4 = 0;
            } else {
              if (10 > i3) {
                y4 = 7;
                break;
              }
              u4 = m4, null == t4 || 10 > i3 || !Xt2(t4, n3 + 3, i3 - 3) ? t4 = 0 : (p4 = t4[n3 + 0] | t4[n3 + 1] << 8 | t4[n3 + 2] << 16, b4 = 16383 & (t4[n3 + 7] << 8 | t4[n3 + 6]), t4 = 16383 & (t4[n3 + 9] << 8 | t4[n3 + 8]), 1 & p4 || 3 < (p4 >> 1 & 7) || !(p4 >> 4 & 1) || p4 >> 5 >= g4.Ja || !b4 || !t4 ? t4 = 0 : (c4 && (c4[0] = b4), u4 && (u4[0] = t4), t4 = 1));
            }
            if (!t4) return 3;
            if (c4 = c4[0], m4 = m4[0], d4 && (h4[0] != c4 || f4[0] != m4)) return 3;
            null != l4 && (l4[0] = g4, l4.offset = n3 - l4.w, e2(4294967286 > n3 - l4.w), e2(l4.offset == l4.ha - i3));
            break;
          }
          return 0 == y4 || 7 == y4 && d4 && null == l4 ? (null != s3 && (s3[0] |= null != g4.na && 0 < g4.na.length), null != a3 && (a3[0] = c4), null != o3 && (o3[0] = m4), 0) : y4;
        }
        function Br(t4, e3, r3) {
          var n3 = e3.width, i3 = e3.height, a3 = 0, o3 = 0, s3 = n3, c4 = i3;
          if (e3.Da = null != t4 && 0 < t4.Da, e3.Da && (s3 = t4.cd, c4 = t4.bd, a3 = t4.v, o3 = t4.j, 11 > r3 || (a3 &= -2, o3 &= -2), 0 > a3 || 0 > o3 || 0 >= s3 || 0 >= c4 || a3 + s3 > n3 || o3 + c4 > i3)) return 0;
          if (e3.v = a3, e3.j = o3, e3.va = a3 + s3, e3.o = o3 + c4, e3.U = s3, e3.T = c4, e3.da = null != t4 && 0 < t4.da, e3.da) {
            if (!M2(s3, c4, r3 = [t4.ib], a3 = [t4.hb])) return 0;
            e3.ib = r3[0], e3.hb = a3[0];
          }
          return e3.ob = null != t4 && t4.ob, e3.Kb = null == t4 || !t4.Sd, e3.da && (e3.ob = e3.ib < 3 * n3 / 4 && e3.hb < 3 * i3 / 4, e3.Kb = 0), 1;
        }
        function qr(t4) {
          if (null == t4) return 2;
          if (11 > t4.S) {
            var e3 = t4.f.RGBA;
            e3.fb += (t4.height - 1) * e3.A, e3.A = -e3.A;
          } else e3 = t4.f.kb, t4 = t4.height, e3.O += (t4 - 1) * e3.fa, e3.fa = -e3.fa, e3.N += (t4 - 1 >> 1) * e3.Ab, e3.Ab = -e3.Ab, e3.W += (t4 - 1 >> 1) * e3.Db, e3.Db = -e3.Db, null != e3.F && (e3.J += (t4 - 1) * e3.lb, e3.lb = -e3.lb);
          return 0;
        }
        function Mr(t4, e3, r3, n3) {
          if (null == n3 || 0 >= t4 || 0 >= e3) return 2;
          if (null != r3) {
            if (r3.Da) {
              var i3 = r3.cd, o3 = r3.bd, s3 = -2 & r3.v, c4 = -2 & r3.j;
              if (0 > s3 || 0 > c4 || 0 >= i3 || 0 >= o3 || s3 + i3 > t4 || c4 + o3 > e3) return 2;
              t4 = i3, e3 = o3;
            }
            if (r3.da) {
              if (!M2(t4, e3, i3 = [r3.ib], o3 = [r3.hb])) return 2;
              t4 = i3[0], e3 = o3[0];
            }
          }
          n3.width = t4, n3.height = e3;
          t: {
            var u4 = n3.width, l4 = n3.height;
            if (t4 = n3.S, 0 >= u4 || 0 >= l4 || !(t4 >= qn && 13 > t4)) t4 = 2;
            else {
              if (0 >= n3.Rd && null == n3.sd) {
                s3 = o3 = i3 = e3 = 0;
                var h4 = (c4 = u4 * zi[t4]) * l4;
                if (11 > t4 || (o3 = (l4 + 1) / 2 * (e3 = (u4 + 1) / 2), 12 == t4 && (s3 = (i3 = u4) * l4)), null == (l4 = a2(h4 + 2 * o3 + s3))) {
                  t4 = 1;
                  break t;
                }
                n3.sd = l4, 11 > t4 ? ((u4 = n3.f.RGBA).eb = l4, u4.fb = 0, u4.A = c4, u4.size = h4) : ((u4 = n3.f.kb).y = l4, u4.O = 0, u4.fa = c4, u4.Fd = h4, u4.f = l4, u4.N = 0 + h4, u4.Ab = e3, u4.Cd = o3, u4.ea = l4, u4.W = 0 + h4 + o3, u4.Db = e3, u4.Ed = o3, 12 == t4 && (u4.F = l4, u4.J = 0 + h4 + 2 * o3), u4.Tc = s3, u4.lb = i3);
              }
              if (e3 = 1, i3 = n3.S, o3 = n3.width, s3 = n3.height, i3 >= qn && 13 > i3) if (11 > i3) t4 = n3.f.RGBA, e3 &= (c4 = Math.abs(t4.A)) * (s3 - 1) + o3 <= t4.size, e3 &= c4 >= o3 * zi[i3], e3 &= null != t4.eb;
              else {
                t4 = n3.f.kb, c4 = (o3 + 1) / 2, h4 = (s3 + 1) / 2, u4 = Math.abs(t4.fa), l4 = Math.abs(t4.Ab);
                var f4 = Math.abs(t4.Db), d4 = Math.abs(t4.lb), p4 = d4 * (s3 - 1) + o3;
                e3 &= u4 * (s3 - 1) + o3 <= t4.Fd, e3 &= l4 * (h4 - 1) + c4 <= t4.Cd, e3 = (e3 &= f4 * (h4 - 1) + c4 <= t4.Ed) & u4 >= o3 & l4 >= c4 & f4 >= c4, e3 &= null != t4.y, e3 &= null != t4.f, e3 &= null != t4.ea, 12 == i3 && (e3 &= d4 >= o3, e3 &= p4 <= t4.Tc, e3 &= null != t4.F);
              }
              else e3 = 0;
              t4 = e3 ? 0 : 2;
            }
          }
          return 0 != t4 || null != r3 && r3.fd && (t4 = qr(n3)), t4;
        }
        var Er = 64, Rr = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575, 2097151, 4194303, 8388607, 16777215], Dr = 24, Tr = 32, zr = 8, Ur = [0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7];
        D2("Predictor0", "PredictorAdd0"), t3.Predictor0 = function() {
          return 4278190080;
        }, t3.Predictor1 = function(t4) {
          return t4;
        }, t3.Predictor2 = function(t4, e3, r3) {
          return e3[r3 + 0];
        }, t3.Predictor3 = function(t4, e3, r3) {
          return e3[r3 + 1];
        }, t3.Predictor4 = function(t4, e3, r3) {
          return e3[r3 - 1];
        }, t3.Predictor5 = function(t4, e3, r3) {
          return z2(z2(t4, e3[r3 + 1]), e3[r3 + 0]);
        }, t3.Predictor6 = function(t4, e3, r3) {
          return z2(t4, e3[r3 - 1]);
        }, t3.Predictor7 = function(t4, e3, r3) {
          return z2(t4, e3[r3 + 0]);
        }, t3.Predictor8 = function(t4, e3, r3) {
          return z2(e3[r3 - 1], e3[r3 + 0]);
        }, t3.Predictor9 = function(t4, e3, r3) {
          return z2(e3[r3 + 0], e3[r3 + 1]);
        }, t3.Predictor10 = function(t4, e3, r3) {
          return z2(z2(t4, e3[r3 - 1]), z2(e3[r3 + 0], e3[r3 + 1]));
        }, t3.Predictor11 = function(t4, e3, r3) {
          var n3 = e3[r3 + 0];
          return 0 >= W2(n3 >> 24 & 255, t4 >> 24 & 255, (e3 = e3[r3 - 1]) >> 24 & 255) + W2(n3 >> 16 & 255, t4 >> 16 & 255, e3 >> 16 & 255) + W2(n3 >> 8 & 255, t4 >> 8 & 255, e3 >> 8 & 255) + W2(255 & n3, 255 & t4, 255 & e3) ? n3 : t4;
        }, t3.Predictor12 = function(t4, e3, r3) {
          var n3 = e3[r3 + 0];
          return (U2((t4 >> 24 & 255) + (n3 >> 24 & 255) - ((e3 = e3[r3 - 1]) >> 24 & 255)) << 24 | U2((t4 >> 16 & 255) + (n3 >> 16 & 255) - (e3 >> 16 & 255)) << 16 | U2((t4 >> 8 & 255) + (n3 >> 8 & 255) - (e3 >> 8 & 255)) << 8 | U2((255 & t4) + (255 & n3) - (255 & e3))) >>> 0;
        }, t3.Predictor13 = function(t4, e3, r3) {
          var n3 = e3[r3 - 1];
          return (H2((t4 = z2(t4, e3[r3 + 0])) >> 24 & 255, n3 >> 24 & 255) << 24 | H2(t4 >> 16 & 255, n3 >> 16 & 255) << 16 | H2(t4 >> 8 & 255, n3 >> 8 & 255) << 8 | H2(255 & t4, 255 & n3)) >>> 0;
        };
        var Hr = t3.PredictorAdd0;
        t3.PredictorAdd1 = V2, D2("Predictor2", "PredictorAdd2"), D2("Predictor3", "PredictorAdd3"), D2("Predictor4", "PredictorAdd4"), D2("Predictor5", "PredictorAdd5"), D2("Predictor6", "PredictorAdd6"), D2("Predictor7", "PredictorAdd7"), D2("Predictor8", "PredictorAdd8"), D2("Predictor9", "PredictorAdd9"), D2("Predictor10", "PredictorAdd10"), D2("Predictor11", "PredictorAdd11"), D2("Predictor12", "PredictorAdd12"), D2("Predictor13", "PredictorAdd13");
        var Wr = t3.PredictorAdd2;
        X2("ColorIndexInverseTransform", "MapARGB", "32b", function(t4) {
          return t4 >> 8 & 255;
        }, function(t4) {
          return t4;
        }), X2("VP8LColorIndexInverseTransformAlpha", "MapAlpha", "8b", function(t4) {
          return t4;
        }, function(t4) {
          return t4 >> 8 & 255;
        });
        var Vr, Gr = t3.ColorIndexInverseTransform, Yr = t3.MapARGB, Jr = t3.VP8LColorIndexInverseTransformAlpha, Xr = t3.MapAlpha, Kr = t3.VP8LPredictorsAdd = [];
        Kr.length = 16, (t3.VP8LPredictors = []).length = 16, (t3.VP8LPredictorsAdd_C = []).length = 16, (t3.VP8LPredictors_C = []).length = 16;
        var $r, Zr, Qr, tn, en, rn, nn, an, on, sn, cn, un, ln, hn, fn, dn, pn, gn, mn, vn, bn, yn, wn, Nn, Ln, xn, An, Sn, _n = a2(511), Pn = a2(2041), kn = a2(225), Fn = a2(767), In = 0, jn = Pn, Cn = kn, On = Fn, Bn = _n, qn = 0, Mn = 1, En = 2, Rn = 3, Dn = 4, Tn = 5, zn = 6, Un = 7, Hn = 8, Wn = 9, Vn = 10, Gn = [2, 3, 7], Yn = [3, 3, 11], Jn = [280, 256, 256, 256, 40], Xn = [0, 1, 1, 1, 0], Kn = [17, 18, 0, 1, 2, 3, 4, 5, 16, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], $n = [24, 7, 23, 25, 40, 6, 39, 41, 22, 26, 38, 42, 56, 5, 55, 57, 21, 27, 54, 58, 37, 43, 72, 4, 71, 73, 20, 28, 53, 59, 70, 74, 36, 44, 88, 69, 75, 52, 60, 3, 87, 89, 19, 29, 86, 90, 35, 45, 68, 76, 85, 91, 51, 61, 104, 2, 103, 105, 18, 30, 102, 106, 34, 46, 84, 92, 67, 77, 101, 107, 50, 62, 120, 1, 119, 121, 83, 93, 17, 31, 100, 108, 66, 78, 118, 122, 33, 47, 117, 123, 49, 63, 99, 109, 82, 94, 0, 116, 124, 65, 79, 16, 32, 98, 110, 48, 115, 125, 81, 95, 64, 114, 126, 97, 111, 80, 113, 127, 96, 112], Zn = [2954, 2956, 2958, 2962, 2970, 2986, 3018, 3082, 3212, 3468, 3980, 5004], Qn = 8, ti = [4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 93, 95, 96, 98, 100, 101, 102, 104, 106, 108, 110, 112, 114, 116, 118, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 143, 145, 148, 151, 154, 157], ei = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 119, 122, 125, 128, 131, 134, 137, 140, 143, 146, 149, 152, 155, 158, 161, 164, 167, 170, 173, 177, 181, 185, 189, 193, 197, 201, 205, 209, 213, 217, 221, 225, 229, 234, 239, 245, 249, 254, 259, 264, 269, 274, 279, 284], ri = null, ni = [[173, 148, 140, 0], [176, 155, 140, 135, 0], [180, 157, 141, 134, 130, 0], [254, 254, 243, 230, 196, 177, 153, 140, 133, 130, 129, 0]], ii = [0, 1, 4, 8, 5, 2, 3, 6, 9, 12, 13, 10, 7, 11, 14, 15], ai = [-0, 1, -1, 2, -2, 3, 4, 6, -3, 5, -4, -5, -6, 7, -7, 8, -8, -9], oi = [[[[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]], [[253, 136, 254, 255, 228, 219, 128, 128, 128, 128, 128], [189, 129, 242, 255, 227, 213, 255, 219, 128, 128, 128], [106, 126, 227, 252, 214, 209, 255, 255, 128, 128, 128]], [[1, 98, 248, 255, 236, 226, 255, 255, 128, 128, 128], [181, 133, 238, 254, 221, 234, 255, 154, 128, 128, 128], [78, 134, 202, 247, 198, 180, 255, 219, 128, 128, 128]], [[1, 185, 249, 255, 243, 255, 128, 128, 128, 128, 128], [184, 150, 247, 255, 236, 224, 128, 128, 128, 128, 128], [77, 110, 216, 255, 236, 230, 128, 128, 128, 128, 128]], [[1, 101, 251, 255, 241, 255, 128, 128, 128, 128, 128], [170, 139, 241, 252, 236, 209, 255, 255, 128, 128, 128], [37, 116, 196, 243, 228, 255, 255, 255, 128, 128, 128]], [[1, 204, 254, 255, 245, 255, 128, 128, 128, 128, 128], [207, 160, 250, 255, 238, 128, 128, 128, 128, 128, 128], [102, 103, 231, 255, 211, 171, 128, 128, 128, 128, 128]], [[1, 152, 252, 255, 240, 255, 128, 128, 128, 128, 128], [177, 135, 243, 255, 234, 225, 128, 128, 128, 128, 128], [80, 129, 211, 255, 194, 224, 128, 128, 128, 128, 128]], [[1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [246, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [255, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]]], [[[198, 35, 237, 223, 193, 187, 162, 160, 145, 155, 62], [131, 45, 198, 221, 172, 176, 220, 157, 252, 221, 1], [68, 47, 146, 208, 149, 167, 221, 162, 255, 223, 128]], [[1, 149, 241, 255, 221, 224, 255, 255, 128, 128, 128], [184, 141, 234, 253, 222, 220, 255, 199, 128, 128, 128], [81, 99, 181, 242, 176, 190, 249, 202, 255, 255, 128]], [[1, 129, 232, 253, 214, 197, 242, 196, 255, 255, 128], [99, 121, 210, 250, 201, 198, 255, 202, 128, 128, 128], [23, 91, 163, 242, 170, 187, 247, 210, 255, 255, 128]], [[1, 200, 246, 255, 234, 255, 128, 128, 128, 128, 128], [109, 178, 241, 255, 231, 245, 255, 255, 128, 128, 128], [44, 130, 201, 253, 205, 192, 255, 255, 128, 128, 128]], [[1, 132, 239, 251, 219, 209, 255, 165, 128, 128, 128], [94, 136, 225, 251, 218, 190, 255, 255, 128, 128, 128], [22, 100, 174, 245, 186, 161, 255, 199, 128, 128, 128]], [[1, 182, 249, 255, 232, 235, 128, 128, 128, 128, 128], [124, 143, 241, 255, 227, 234, 128, 128, 128, 128, 128], [35, 77, 181, 251, 193, 211, 255, 205, 128, 128, 128]], [[1, 157, 247, 255, 236, 231, 255, 255, 128, 128, 128], [121, 141, 235, 255, 225, 227, 255, 255, 128, 128, 128], [45, 99, 188, 251, 195, 217, 255, 224, 128, 128, 128]], [[1, 1, 251, 255, 213, 255, 128, 128, 128, 128, 128], [203, 1, 248, 255, 255, 128, 128, 128, 128, 128, 128], [137, 1, 177, 255, 224, 255, 128, 128, 128, 128, 128]]], [[[253, 9, 248, 251, 207, 208, 255, 192, 128, 128, 128], [175, 13, 224, 243, 193, 185, 249, 198, 255, 255, 128], [73, 17, 171, 221, 161, 179, 236, 167, 255, 234, 128]], [[1, 95, 247, 253, 212, 183, 255, 255, 128, 128, 128], [239, 90, 244, 250, 211, 209, 255, 255, 128, 128, 128], [155, 77, 195, 248, 188, 195, 255, 255, 128, 128, 128]], [[1, 24, 239, 251, 218, 219, 255, 205, 128, 128, 128], [201, 51, 219, 255, 196, 186, 128, 128, 128, 128, 128], [69, 46, 190, 239, 201, 218, 255, 228, 128, 128, 128]], [[1, 191, 251, 255, 255, 128, 128, 128, 128, 128, 128], [223, 165, 249, 255, 213, 255, 128, 128, 128, 128, 128], [141, 124, 248, 255, 255, 128, 128, 128, 128, 128, 128]], [[1, 16, 248, 255, 255, 128, 128, 128, 128, 128, 128], [190, 36, 230, 255, 236, 255, 128, 128, 128, 128, 128], [149, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[1, 226, 255, 128, 128, 128, 128, 128, 128, 128, 128], [247, 192, 255, 128, 128, 128, 128, 128, 128, 128, 128], [240, 128, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[1, 134, 252, 255, 255, 128, 128, 128, 128, 128, 128], [213, 62, 250, 255, 255, 128, 128, 128, 128, 128, 128], [55, 93, 255, 128, 128, 128, 128, 128, 128, 128, 128]], [[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128], [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]]], [[[202, 24, 213, 235, 186, 191, 220, 160, 240, 175, 255], [126, 38, 182, 232, 169, 184, 228, 174, 255, 187, 128], [61, 46, 138, 219, 151, 178, 240, 170, 255, 216, 128]], [[1, 112, 230, 250, 199, 191, 247, 159, 255, 255, 128], [166, 109, 228, 252, 211, 215, 255, 174, 128, 128, 128], [39, 77, 162, 232, 172, 180, 245, 178, 255, 255, 128]], [[1, 52, 220, 246, 198, 199, 249, 220, 255, 255, 128], [124, 74, 191, 243, 183, 193, 250, 221, 255, 255, 128], [24, 71, 130, 219, 154, 170, 243, 182, 255, 255, 128]], [[1, 182, 225, 249, 219, 240, 255, 224, 128, 128, 128], [149, 150, 226, 252, 216, 205, 255, 171, 128, 128, 128], [28, 108, 170, 242, 183, 194, 254, 223, 255, 255, 128]], [[1, 81, 230, 252, 204, 203, 255, 192, 128, 128, 128], [123, 102, 209, 247, 188, 196, 255, 233, 128, 128, 128], [20, 95, 153, 243, 164, 173, 255, 203, 128, 128, 128]], [[1, 222, 248, 255, 216, 213, 128, 128, 128, 128, 128], [168, 175, 246, 252, 235, 205, 255, 255, 128, 128, 128], [47, 116, 215, 255, 211, 212, 255, 255, 128, 128, 128]], [[1, 121, 236, 253, 212, 214, 255, 255, 128, 128, 128], [141, 84, 213, 252, 201, 202, 255, 219, 128, 128, 128], [42, 80, 160, 240, 162, 185, 255, 205, 128, 128, 128]], [[1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [244, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128], [238, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]]]], si = [[[231, 120, 48, 89, 115, 113, 120, 152, 112], [152, 179, 64, 126, 170, 118, 46, 70, 95], [175, 69, 143, 80, 85, 82, 72, 155, 103], [56, 58, 10, 171, 218, 189, 17, 13, 152], [114, 26, 17, 163, 44, 195, 21, 10, 173], [121, 24, 80, 195, 26, 62, 44, 64, 85], [144, 71, 10, 38, 171, 213, 144, 34, 26], [170, 46, 55, 19, 136, 160, 33, 206, 71], [63, 20, 8, 114, 114, 208, 12, 9, 226], [81, 40, 11, 96, 182, 84, 29, 16, 36]], [[134, 183, 89, 137, 98, 101, 106, 165, 148], [72, 187, 100, 130, 157, 111, 32, 75, 80], [66, 102, 167, 99, 74, 62, 40, 234, 128], [41, 53, 9, 178, 241, 141, 26, 8, 107], [74, 43, 26, 146, 73, 166, 49, 23, 157], [65, 38, 105, 160, 51, 52, 31, 115, 128], [104, 79, 12, 27, 217, 255, 87, 17, 7], [87, 68, 71, 44, 114, 51, 15, 186, 23], [47, 41, 14, 110, 182, 183, 21, 17, 194], [66, 45, 25, 102, 197, 189, 23, 18, 22]], [[88, 88, 147, 150, 42, 46, 45, 196, 205], [43, 97, 183, 117, 85, 38, 35, 179, 61], [39, 53, 200, 87, 26, 21, 43, 232, 171], [56, 34, 51, 104, 114, 102, 29, 93, 77], [39, 28, 85, 171, 58, 165, 90, 98, 64], [34, 22, 116, 206, 23, 34, 43, 166, 73], [107, 54, 32, 26, 51, 1, 81, 43, 31], [68, 25, 106, 22, 64, 171, 36, 225, 114], [34, 19, 21, 102, 132, 188, 16, 76, 124], [62, 18, 78, 95, 85, 57, 50, 48, 51]], [[193, 101, 35, 159, 215, 111, 89, 46, 111], [60, 148, 31, 172, 219, 228, 21, 18, 111], [112, 113, 77, 85, 179, 255, 38, 120, 114], [40, 42, 1, 196, 245, 209, 10, 25, 109], [88, 43, 29, 140, 166, 213, 37, 43, 154], [61, 63, 30, 155, 67, 45, 68, 1, 209], [100, 80, 8, 43, 154, 1, 51, 26, 71], [142, 78, 78, 16, 255, 128, 34, 197, 171], [41, 40, 5, 102, 211, 183, 4, 1, 221], [51, 50, 17, 168, 209, 192, 23, 25, 82]], [[138, 31, 36, 171, 27, 166, 38, 44, 229], [67, 87, 58, 169, 82, 115, 26, 59, 179], [63, 59, 90, 180, 59, 166, 93, 73, 154], [40, 40, 21, 116, 143, 209, 34, 39, 175], [47, 15, 16, 183, 34, 223, 49, 45, 183], [46, 17, 33, 183, 6, 98, 15, 32, 183], [57, 46, 22, 24, 128, 1, 54, 17, 37], [65, 32, 73, 115, 28, 128, 23, 128, 205], [40, 3, 9, 115, 51, 192, 18, 6, 223], [87, 37, 9, 115, 59, 77, 64, 21, 47]], [[104, 55, 44, 218, 9, 54, 53, 130, 226], [64, 90, 70, 205, 40, 41, 23, 26, 57], [54, 57, 112, 184, 5, 41, 38, 166, 213], [30, 34, 26, 133, 152, 116, 10, 32, 134], [39, 19, 53, 221, 26, 114, 32, 73, 255], [31, 9, 65, 234, 2, 15, 1, 118, 73], [75, 32, 12, 51, 192, 255, 160, 43, 51], [88, 31, 35, 67, 102, 85, 55, 186, 85], [56, 21, 23, 111, 59, 205, 45, 37, 192], [55, 38, 70, 124, 73, 102, 1, 34, 98]], [[125, 98, 42, 88, 104, 85, 117, 175, 82], [95, 84, 53, 89, 128, 100, 113, 101, 45], [75, 79, 123, 47, 51, 128, 81, 171, 1], [57, 17, 5, 71, 102, 57, 53, 41, 49], [38, 33, 13, 121, 57, 73, 26, 1, 85], [41, 10, 67, 138, 77, 110, 90, 47, 114], [115, 21, 2, 10, 102, 255, 166, 23, 6], [101, 29, 16, 10, 85, 128, 101, 196, 26], [57, 18, 10, 102, 102, 213, 34, 20, 43], [117, 20, 15, 36, 163, 128, 68, 1, 26]], [[102, 61, 71, 37, 34, 53, 31, 243, 192], [69, 60, 71, 38, 73, 119, 28, 222, 37], [68, 45, 128, 34, 1, 47, 11, 245, 171], [62, 17, 19, 70, 146, 85, 55, 62, 70], [37, 43, 37, 154, 100, 163, 85, 160, 1], [63, 9, 92, 136, 28, 64, 32, 201, 85], [75, 15, 9, 9, 64, 255, 184, 119, 16], [86, 6, 28, 5, 64, 255, 25, 248, 1], [56, 8, 17, 132, 137, 255, 55, 116, 128], [58, 15, 20, 82, 135, 57, 26, 121, 40]], [[164, 50, 31, 137, 154, 133, 25, 35, 218], [51, 103, 44, 131, 131, 123, 31, 6, 158], [86, 40, 64, 135, 148, 224, 45, 183, 128], [22, 26, 17, 131, 240, 154, 14, 1, 209], [45, 16, 21, 91, 64, 222, 7, 1, 197], [56, 21, 39, 155, 60, 138, 23, 102, 213], [83, 12, 13, 54, 192, 255, 68, 47, 28], [85, 26, 85, 85, 128, 128, 32, 146, 171], [18, 11, 7, 63, 144, 171, 4, 4, 246], [35, 27, 10, 146, 174, 171, 12, 26, 128]], [[190, 80, 35, 99, 180, 80, 126, 54, 45], [85, 126, 47, 87, 176, 51, 41, 20, 32], [101, 75, 128, 139, 118, 146, 116, 128, 85], [56, 41, 15, 176, 236, 85, 37, 9, 62], [71, 30, 17, 119, 118, 255, 17, 18, 138], [101, 38, 60, 138, 55, 70, 43, 26, 142], [146, 36, 19, 30, 171, 255, 97, 27, 20], [138, 45, 61, 62, 219, 1, 81, 188, 64], [32, 41, 20, 117, 151, 142, 20, 21, 163], [112, 19, 12, 61, 195, 128, 48, 4, 24]]], ci = [[[[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[176, 246, 255, 255, 255, 255, 255, 255, 255, 255, 255], [223, 241, 252, 255, 255, 255, 255, 255, 255, 255, 255], [249, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 244, 252, 255, 255, 255, 255, 255, 255, 255, 255], [234, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 246, 254, 255, 255, 255, 255, 255, 255, 255, 255], [239, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 253, 255, 254, 255, 255, 255, 255, 255, 255], [250, 255, 254, 255, 254, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[217, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [225, 252, 241, 253, 255, 255, 254, 255, 255, 255, 255], [234, 250, 241, 250, 253, 255, 253, 254, 255, 255, 255]], [[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [223, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [238, 253, 254, 254, 255, 255, 255, 255, 255, 255, 255]], [[255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255], [249, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255], [247, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255], [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[186, 251, 250, 255, 255, 255, 255, 255, 255, 255, 255], [234, 251, 244, 254, 255, 255, 255, 255, 255, 255, 255], [251, 251, 243, 253, 254, 255, 254, 255, 255, 255, 255]], [[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [236, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [251, 253, 253, 254, 254, 255, 255, 255, 255, 255, 255]], [[255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]], [[[248, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [250, 254, 252, 254, 255, 255, 255, 255, 255, 255, 255], [248, 254, 249, 253, 255, 255, 255, 255, 255, 255, 255]], [[255, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255], [246, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255], [252, 254, 251, 254, 254, 255, 255, 255, 255, 255, 255]], [[255, 254, 252, 255, 255, 255, 255, 255, 255, 255, 255], [248, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255], [253, 255, 254, 254, 255, 255, 255, 255, 255, 255, 255]], [[255, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255], [245, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255], [253, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 251, 253, 255, 255, 255, 255, 255, 255, 255, 255], [252, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255], [249, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 253, 255, 255, 255, 255, 255, 255, 255, 255], [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]], [[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255], [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]]]], ui = [0, 1, 2, 3, 6, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 0], li = [], hi = [], fi = [], di = 1, pi = 2, gi = [], mi = [];
        mr("UpsampleRgbLinePair", Lr, 3), mr("UpsampleBgrLinePair", xr, 3), mr("UpsampleRgbaLinePair", kr, 4), mr("UpsampleBgraLinePair", Pr, 4), mr("UpsampleArgbLinePair", _r, 4), mr("UpsampleRgba4444LinePair", Sr, 2), mr("UpsampleRgb565LinePair", Ar, 2);
        var vi = t3.UpsampleRgbLinePair, bi = t3.UpsampleBgrLinePair, yi = t3.UpsampleRgbaLinePair, wi = t3.UpsampleBgraLinePair, Ni = t3.UpsampleArgbLinePair, Li = t3.UpsampleRgba4444LinePair, xi = t3.UpsampleRgb565LinePair, Ai = 16, Si = 1 << Ai - 1, _i = -227, Pi = 482, ki = 6, Ii = 0, ji = a2(256), Ci = a2(256), Oi = a2(256), Bi = a2(256), qi = a2(Pi - _i), Mi = a2(Pi - _i);
        Fr("YuvToRgbRow", Lr, 3), Fr("YuvToBgrRow", xr, 3), Fr("YuvToRgbaRow", kr, 4), Fr("YuvToBgraRow", Pr, 4), Fr("YuvToArgbRow", _r, 4), Fr("YuvToRgba4444Row", Sr, 2), Fr("YuvToRgb565Row", Ar, 2);
        var Ei = [0, 4, 8, 12, 128, 132, 136, 140, 256, 260, 264, 268, 384, 388, 392, 396], Ri = [0, 2, 8], Di = [8, 7, 6, 4, 4, 2, 2, 2, 1, 1, 1, 1], Ti = 1;
        this.WebPDecodeRGBA = function(t4, r3, s3, c4, u4) {
          var l4 = Mn, h4 = new er(), f4 = new ot2();
          h4.ba = f4, f4.S = l4, f4.width = [f4.width], f4.height = [f4.height];
          var d4 = f4.width, p4 = f4.height, g4 = new st2();
          if (null == g4 || null == t4) var m4 = 2;
          else e2(null != g4), m4 = Or(t4, r3, s3, g4.width, g4.height, g4.Pd, g4.Qd, g4.format, null);
          if (0 != m4 ? d4 = 0 : (null != d4 && (d4[0] = g4.width[0]), null != p4 && (p4[0] = g4.height[0]), d4 = 1), d4) {
            f4.width = f4.width[0], f4.height = f4.height[0], null != c4 && (c4[0] = f4.width), null != u4 && (u4[0] = f4.height);
            t: {
              if (c4 = new Gt2(), (u4 = new rr()).data = t4, u4.w = r3, u4.ha = s3, u4.kd = 1, r3 = [0], e2(null != u4), (0 == (t4 = Or(u4.data, u4.w, u4.ha, null, null, null, r3, null, u4)) || 7 == t4) && r3[0] && (t4 = 4), 0 == (r3 = t4)) {
                if (e2(null != h4), c4.data = u4.data, c4.w = u4.w + u4.offset, c4.ha = u4.ha - u4.offset, c4.put = dt2, c4.ac = ft2, c4.bc = pt2, c4.ma = h4, u4.xa) {
                  if (null == (t4 = kt2())) {
                    h4 = 1;
                    break t;
                  }
                  if ((function(t5, r4) {
                    var n3 = [0], i3 = [0], a3 = [0];
                    e: for (; ; ) {
                      if (null == t5) return 0;
                      if (null == r4) return t5.a = 2, 0;
                      if (t5.l = r4, t5.a = 0, v3(t5.m, r4.data, r4.w, r4.ha), !gt2(t5.m, n3, i3, a3)) {
                        t5.a = 3;
                        break e;
                      }
                      if (t5.xb = pi, r4.width = n3[0], r4.height = i3[0], !Ft2(n3[0], i3[0], 1, t5, null)) break e;
                      return 1;
                    }
                    return e2(0 != t5.a), 0;
                  })(t4, c4)) {
                    if (c4 = 0 == (r3 = Mr(c4.width, c4.height, h4.Oa, h4.ba))) {
                      e: {
                        c4 = t4;
                        r: for (; ; ) {
                          if (null == c4) {
                            c4 = 0;
                            break e;
                          }
                          if (e2(null != c4.s.yc), e2(null != c4.s.Ya), e2(0 < c4.s.Wb), e2(null != (s3 = c4.l)), e2(null != (u4 = s3.ma)), 0 != c4.xb) {
                            if (c4.ca = u4.ba, c4.tb = u4.tb, e2(null != c4.ca), !Br(u4.Oa, s3, Rn)) {
                              c4.a = 2;
                              break r;
                            }
                            if (!It2(c4, s3.width)) break r;
                            if (s3.da) break r;
                            if ((s3.da || nt2(c4.ca.S)) && gr(), 11 > c4.ca.S || (alert("todo:WebPInitConvertARGBToYUV"), null != c4.ca.f.kb.F && gr()), c4.Pb && 0 < c4.s.ua && null == c4.s.vb.X && !O2(c4.s.vb, c4.s.Wa.Xa)) {
                              c4.a = 1;
                              break r;
                            }
                            c4.xb = 0;
                          }
                          if (!_t2(c4, c4.V, c4.Ba, c4.c, c4.i, s3.o, Lt2)) break r;
                          u4.Dc = c4.Ma, c4 = 1;
                          break e;
                        }
                        e2(0 != c4.a), c4 = 0;
                      }
                      c4 = !c4;
                    }
                    c4 && (r3 = t4.a);
                  } else r3 = t4.a;
                } else {
                  if (null == (t4 = new Yt2())) {
                    h4 = 1;
                    break t;
                  }
                  if (t4.Fa = u4.na, t4.P = u4.P, t4.qc = u4.Sa, Kt2(t4, c4)) {
                    if (0 == (r3 = Mr(c4.width, c4.height, h4.Oa, h4.ba))) {
                      if (t4.Aa = 0, s3 = h4.Oa, e2(null != (u4 = t4)), null != s3) {
                        if (0 < (d4 = 0 > (d4 = s3.Md) ? 0 : 100 < d4 ? 255 : 255 * d4 / 100)) {
                          for (p4 = g4 = 0; 4 > p4; ++p4) 12 > (m4 = u4.pb[p4]).lc && (m4.ia = d4 * Di[0 > m4.lc ? 0 : m4.lc] >> 3), g4 |= m4.ia;
                          g4 && (alert("todo:VP8InitRandom"), u4.ia = 1);
                        }
                        u4.Ga = s3.Id, 100 < u4.Ga ? u4.Ga = 100 : 0 > u4.Ga && (u4.Ga = 0);
                      }
                      (function(t5, r4) {
                        if (null == t5) return 0;
                        if (null == r4) return Jt2(t5, 2, "NULL VP8Io parameter in VP8Decode().");
                        if (!t5.cb && !Kt2(t5, r4)) return 0;
                        if (e2(t5.cb), null == r4.ac || r4.ac(r4)) {
                          r4.ob && (t5.L = 0);
                          var s4 = Ri[t5.L];
                          if (2 == t5.L ? (t5.yb = 0, t5.zb = 0) : (t5.yb = r4.v - s4 >> 4, t5.zb = r4.j - s4 >> 4, 0 > t5.yb && (t5.yb = 0), 0 > t5.zb && (t5.zb = 0)), t5.Va = r4.o + 15 + s4 >> 4, t5.Hb = r4.va + 15 + s4 >> 4, t5.Hb > t5.za && (t5.Hb = t5.za), t5.Va > t5.Ub && (t5.Va = t5.Ub), 0 < t5.L) {
                            var c5 = t5.ed;
                            for (s4 = 0; 4 > s4; ++s4) {
                              var u5;
                              if (t5.Qa.Cb) {
                                var l5 = t5.Qa.Lb[s4];
                                t5.Qa.Fb || (l5 += c5.Tb);
                              } else l5 = c5.Tb;
                              for (u5 = 0; 1 >= u5; ++u5) {
                                var h5 = t5.gd[s4][u5], f5 = l5;
                                if (c5.Pc && (f5 += c5.vd[0], u5 && (f5 += c5.od[0])), 0 < (f5 = 0 > f5 ? 0 : 63 < f5 ? 63 : f5)) {
                                  var d5 = f5;
                                  0 < c5.wb && (d5 = 4 < c5.wb ? d5 >> 2 : d5 >> 1) > 9 - c5.wb && (d5 = 9 - c5.wb), 1 > d5 && (d5 = 1), h5.dd = d5, h5.tc = 2 * f5 + d5, h5.ld = 40 <= f5 ? 2 : 15 <= f5 ? 1 : 0;
                                } else h5.tc = 0;
                                h5.La = u5;
                              }
                            }
                          }
                          s4 = 0;
                        } else Jt2(t5, 6, "Frame setup failed"), s4 = t5.a;
                        if (s4 = 0 == s4) {
                          if (s4) {
                            t5.$c = 0, 0 < t5.Aa || (t5.Ic = Ti);
                            e: {
                              s4 = t5.Ic, c5 = 4 * (d5 = t5.za);
                              var p5 = 32 * d5, g5 = d5 + 1, m5 = 0 < t5.L ? d5 * (0 < t5.Aa ? 2 : 1) : 0, v4 = (2 == t5.Aa ? 2 : 1) * d5;
                              if ((h5 = c5 + 832 + (u5 = 3 * (16 * s4 + Ri[t5.L]) / 2 * p5) + (l5 = null != t5.Fa && 0 < t5.Fa.length ? t5.Kc.c * t5.Kc.i : 0)) != h5) s4 = 0;
                              else {
                                if (h5 > t5.Vb) {
                                  if (t5.Vb = 0, t5.Ec = a2(h5), t5.Fc = 0, null == t5.Ec) {
                                    s4 = Jt2(t5, 1, "no memory during frame initialization.");
                                    break e;
                                  }
                                  t5.Vb = h5;
                                }
                                h5 = t5.Ec, f5 = t5.Fc, t5.Ac = h5, t5.Bc = f5, f5 += c5, t5.Gd = o2(p5, Ht2), t5.Hd = 0, t5.rb = o2(g5 + 1, Dt2), t5.sb = 1, t5.wa = m5 ? o2(m5, Rt2) : null, t5.Y = 0, t5.D.Nb = 0, t5.D.wa = t5.wa, t5.D.Y = t5.Y, 0 < t5.Aa && (t5.D.Y += d5), e2(true), t5.oc = h5, t5.pc = f5, f5 += 832, t5.ya = o2(v4, zt2), t5.aa = 0, t5.D.ya = t5.ya, t5.D.aa = t5.aa, 2 == t5.Aa && (t5.D.aa += d5), t5.R = 16 * d5, t5.B = 8 * d5, d5 = (p5 = Ri[t5.L]) * t5.R, p5 = p5 / 2 * t5.B, t5.sa = h5, t5.ta = f5 + d5, t5.qa = t5.sa, t5.ra = t5.ta + 16 * s4 * t5.R + p5, t5.Ha = t5.qa, t5.Ia = t5.ra + 8 * s4 * t5.B + p5, t5.$c = 0, f5 += u5, t5.mb = l5 ? h5 : null, t5.nb = l5 ? f5 : null, e2(f5 + l5 <= t5.Fc + t5.Vb), Zt2(t5), i2(t5.Ac, t5.Bc, 0, c5), s4 = 1;
                              }
                            }
                            if (s4) {
                              if (r4.ka = 0, r4.y = t5.sa, r4.O = t5.ta, r4.f = t5.qa, r4.N = t5.ra, r4.ea = t5.Ha, r4.Vd = t5.Ia, r4.fa = t5.R, r4.Rc = t5.B, r4.F = null, r4.J = 0, !In) {
                                for (s4 = -255; 255 >= s4; ++s4) _n[255 + s4] = 0 > s4 ? -s4 : s4;
                                for (s4 = -1020; 1020 >= s4; ++s4) Pn[1020 + s4] = -128 > s4 ? -128 : 127 < s4 ? 127 : s4;
                                for (s4 = -112; 112 >= s4; ++s4) kn[112 + s4] = -16 > s4 ? -16 : 15 < s4 ? 15 : s4;
                                for (s4 = -255; 510 >= s4; ++s4) Fn[255 + s4] = 0 > s4 ? 0 : 255 < s4 ? 255 : s4;
                                In = 1;
                              }
                              nn = ce2, an = ie2, sn = ae2, cn = oe2, un = se2, on = ne2, ln = Ye, hn = Je, fn = $e, dn = Ze, pn = Xe, gn = Ke, mn = Qe, vn = tr, bn = ze, yn = Ue, wn = He, Nn = We, hi[0] = xe2, hi[1] = le2, hi[2] = Ne2, hi[3] = Le2, hi[4] = Ae2, hi[5] = _e, hi[6] = Se, hi[7] = Pe, hi[8] = Fe, hi[9] = ke, li[0] = me2, li[1] = fe2, li[2] = de2, li[3] = pe2, li[4] = ve2, li[5] = be2, li[6] = ye2, fi[0] = Oe, fi[1] = he2, fi[2] = Ie, fi[3] = je, fi[4] = qe, fi[5] = Be, fi[6] = Me, s4 = 1;
                            } else s4 = 0;
                          }
                          s4 && (s4 = (function(t6, r5) {
                            for (t6.M = 0; t6.M < t6.Va; ++t6.M) {
                              var o3, s5 = t6.Jc[t6.M & t6.Xb], c6 = t6.m, u6 = t6;
                              for (o3 = 0; o3 < u6.za; ++o3) {
                                var l6 = c6, h6 = u6, f6 = h6.Ac, d6 = h6.Bc + 4 * o3, p6 = h6.zc, g6 = h6.ya[h6.aa + o3];
                                if (h6.Qa.Bb ? g6.$b = k2(l6, h6.Pa.jb[0]) ? 2 + k2(l6, h6.Pa.jb[2]) : k2(l6, h6.Pa.jb[1]) : g6.$b = 0, h6.kc && (g6.Ad = k2(l6, h6.Bd)), g6.Za = !k2(l6, 145) + 0, g6.Za) {
                                  var m6 = g6.Ob, v5 = 0;
                                  for (h6 = 0; 4 > h6; ++h6) {
                                    var b4, y4 = p6[0 + h6];
                                    for (b4 = 0; 4 > b4; ++b4) {
                                      y4 = si[f6[d6 + b4]][y4];
                                      for (var w4 = ai[k2(l6, y4[0])]; 0 < w4; ) w4 = ai[2 * w4 + k2(l6, y4[w4])];
                                      y4 = -w4, f6[d6 + b4] = y4;
                                    }
                                    n2(m6, v5, f6, d6, 4), v5 += 4, p6[0 + h6] = y4;
                                  }
                                } else y4 = k2(l6, 156) ? k2(l6, 128) ? 1 : 3 : k2(l6, 163) ? 2 : 0, g6.Ob[0] = y4, i2(f6, d6, y4, 4), i2(p6, 0, y4, 4);
                                g6.Dd = k2(l6, 142) ? k2(l6, 114) ? k2(l6, 183) ? 1 : 3 : 2 : 0;
                              }
                              if (u6.m.Ka) return Jt2(t6, 7, "Premature end-of-partition0 encountered.");
                              for (; t6.ja < t6.za; ++t6.ja) {
                                if (u6 = s5, l6 = (c6 = t6).rb[c6.sb - 1], f6 = c6.rb[c6.sb + c6.ja], o3 = c6.ya[c6.aa + c6.ja], d6 = c6.kc ? o3.Ad : 0) l6.la = f6.la = 0, o3.Za || (l6.Na = f6.Na = 0), o3.Hc = 0, o3.Gc = 0, o3.ia = 0;
                                else {
                                  var N4, L4;
                                  if (l6 = f6, f6 = u6, d6 = c6.Pa.Xc, p6 = c6.ya[c6.aa + c6.ja], g6 = c6.pb[p6.$b], h6 = p6.ad, m6 = 0, v5 = c6.rb[c6.sb - 1], y4 = b4 = 0, i2(h6, m6, 0, 384), p6.Za) var x4 = 0, A4 = d6[3];
                                  else {
                                    w4 = a2(16);
                                    var S3 = l6.Na + v5.Na;
                                    if (S3 = ri(f6, d6[1], S3, g6.Eb, 0, w4, 0), l6.Na = v5.Na = (0 < S3) + 0, 1 < S3) nn(w4, 0, h6, m6);
                                    else {
                                      var _3 = w4[0] + 3 >> 3;
                                      for (w4 = 0; 256 > w4; w4 += 16) h6[m6 + w4] = _3;
                                    }
                                    x4 = 1, A4 = d6[0];
                                  }
                                  var P3 = 15 & l6.la, F3 = 15 & v5.la;
                                  for (w4 = 0; 4 > w4; ++w4) {
                                    var I3 = 1 & F3;
                                    for (_3 = L4 = 0; 4 > _3; ++_3) P3 = P3 >> 1 | (I3 = (S3 = ri(f6, A4, S3 = I3 + (1 & P3), g6.Sc, x4, h6, m6)) > x4) << 7, L4 = L4 << 2 | (3 < S3 ? 3 : 1 < S3 ? 2 : 0 != h6[m6 + 0]), m6 += 16;
                                    P3 >>= 4, F3 = F3 >> 1 | I3 << 7, b4 = (b4 << 8 | L4) >>> 0;
                                  }
                                  for (A4 = P3, x4 = F3 >> 4, N4 = 0; 4 > N4; N4 += 2) {
                                    for (L4 = 0, P3 = l6.la >> 4 + N4, F3 = v5.la >> 4 + N4, w4 = 0; 2 > w4; ++w4) {
                                      for (I3 = 1 & F3, _3 = 0; 2 > _3; ++_3) S3 = I3 + (1 & P3), P3 = P3 >> 1 | (I3 = 0 < (S3 = ri(f6, d6[2], S3, g6.Qc, 0, h6, m6))) << 3, L4 = L4 << 2 | (3 < S3 ? 3 : 1 < S3 ? 2 : 0 != h6[m6 + 0]), m6 += 16;
                                      P3 >>= 2, F3 = F3 >> 1 | I3 << 5;
                                    }
                                    y4 |= L4 << 4 * N4, A4 |= P3 << 4 << N4, x4 |= (240 & F3) << N4;
                                  }
                                  l6.la = A4, v5.la = x4, p6.Hc = b4, p6.Gc = y4, p6.ia = 43690 & y4 ? 0 : g6.ia, d6 = !(b4 | y4);
                                }
                                if (0 < c6.L && (c6.wa[c6.Y + c6.ja] = c6.gd[o3.$b][o3.Za], c6.wa[c6.Y + c6.ja].La |= !d6), u6.Ka) return Jt2(t6, 7, "Premature end-of-file encountered.");
                              }
                              if (Zt2(t6), c6 = r5, u6 = 1, o3 = (s5 = t6).D, l6 = 0 < s5.L && s5.M >= s5.zb && s5.M <= s5.Va, 0 == s5.Aa) e: {
                                if (o3.M = s5.M, o3.uc = l6, Cr(s5, o3), u6 = 1, o3 = (L4 = s5.D).Nb, l6 = (y4 = Ri[s5.L]) * s5.R, f6 = y4 / 2 * s5.B, w4 = 16 * o3 * s5.R, _3 = 8 * o3 * s5.B, d6 = s5.sa, p6 = s5.ta - l6 + w4, g6 = s5.qa, h6 = s5.ra - f6 + _3, m6 = s5.Ha, v5 = s5.Ia - f6 + _3, F3 = 0 == (P3 = L4.M), b4 = P3 >= s5.Va - 1, 2 == s5.Aa && Cr(s5, L4), L4.uc) for (I3 = (S3 = s5).D.M, e2(S3.D.uc), L4 = S3.yb; L4 < S3.Hb; ++L4) {
                                  x4 = L4, A4 = I3;
                                  var j3 = (C3 = (z3 = S3).D).Nb;
                                  N4 = z3.R;
                                  var C3 = C3.wa[C3.Y + x4], O3 = z3.sa, B3 = z3.ta + 16 * j3 * N4 + 16 * x4, q3 = C3.dd, M3 = C3.tc;
                                  if (0 != M3) if (e2(3 <= M3), 1 == z3.L) 0 < x4 && yn(O3, B3, N4, M3 + 4), C3.La && Nn(O3, B3, N4, M3), 0 < A4 && bn(O3, B3, N4, M3 + 4), C3.La && wn(O3, B3, N4, M3);
                                  else {
                                    var E3 = z3.B, R3 = z3.qa, D3 = z3.ra + 8 * j3 * E3 + 8 * x4, T3 = z3.Ha, z3 = z3.Ia + 8 * j3 * E3 + 8 * x4;
                                    j3 = C3.ld, 0 < x4 && (hn(O3, B3, N4, M3 + 4, q3, j3), dn(R3, D3, T3, z3, E3, M3 + 4, q3, j3)), C3.La && (gn(O3, B3, N4, M3, q3, j3), vn(R3, D3, T3, z3, E3, M3, q3, j3)), 0 < A4 && (ln(O3, B3, N4, M3 + 4, q3, j3), fn(R3, D3, T3, z3, E3, M3 + 4, q3, j3)), C3.La && (pn(O3, B3, N4, M3, q3, j3), mn(R3, D3, T3, z3, E3, M3, q3, j3));
                                  }
                                }
                                if (s5.ia && alert("todo:DitherRow"), null != c6.put) {
                                  if (L4 = 16 * P3, P3 = 16 * (P3 + 1), F3 ? (c6.y = s5.sa, c6.O = s5.ta + w4, c6.f = s5.qa, c6.N = s5.ra + _3, c6.ea = s5.Ha, c6.W = s5.Ia + _3) : (L4 -= y4, c6.y = d6, c6.O = p6, c6.f = g6, c6.N = h6, c6.ea = m6, c6.W = v5), b4 || (P3 -= y4), P3 > c6.o && (P3 = c6.o), c6.F = null, c6.J = null, null != s5.Fa && 0 < s5.Fa.length && L4 < P3 && (c6.J = lr(s5, c6, L4, P3 - L4), c6.F = s5.mb, null == c6.F && 0 == c6.F.length)) {
                                    u6 = Jt2(s5, 3, "Could not decode alpha data.");
                                    break e;
                                  }
                                  L4 < c6.j && (y4 = c6.j - L4, L4 = c6.j, e2(!(1 & y4)), c6.O += s5.R * y4, c6.N += s5.B * (y4 >> 1), c6.W += s5.B * (y4 >> 1), null != c6.F && (c6.J += c6.width * y4)), L4 < P3 && (c6.O += c6.v, c6.N += c6.v >> 1, c6.W += c6.v >> 1, null != c6.F && (c6.J += c6.v), c6.ka = L4 - c6.j, c6.U = c6.va - c6.v, c6.T = P3 - L4, u6 = c6.put(c6));
                                }
                                o3 + 1 != s5.Ic || b4 || (n2(s5.sa, s5.ta - l6, d6, p6 + 16 * s5.R, l6), n2(s5.qa, s5.ra - f6, g6, h6 + 8 * s5.B, f6), n2(s5.Ha, s5.Ia - f6, m6, v5 + 8 * s5.B, f6));
                              }
                              if (!u6) return Jt2(t6, 6, "Output aborted.");
                            }
                            return 1;
                          })(t5, r4)), null != r4.bc && r4.bc(r4), s4 &= 1;
                        }
                        return s4 ? (t5.cb = 0, s4) : 0;
                      })(t4, c4) || (r3 = t4.a);
                    }
                  } else r3 = t4.a;
                }
                0 == r3 && null != h4.Oa && h4.Oa.fd && (r3 = qr(h4.ba));
              }
              h4 = r3;
            }
            l4 = 0 != h4 ? null : 11 > l4 ? f4.f.RGBA.eb : f4.f.kb.y;
          } else l4 = null;
          return l4;
        };
        var zi = [3, 4, 3, 4, 4, 2, 2, 4, 4, 4, 2, 1, 1];
      };
      function u2(t3, e3) {
        for (var r3 = "", n3 = 0; n3 < 4; n3++) r3 += String.fromCharCode(t3[e3++]);
        return r3;
      }
      function l2(t3, e3) {
        return t3[e3 + 0] | t3[e3 + 1] << 8;
      }
      function h2(t3, e3) {
        return (t3[e3 + 0] | t3[e3 + 1] << 8 | t3[e3 + 2] << 16) >>> 0;
      }
      function f2(t3, e3) {
        return (t3[e3 + 0] | t3[e3 + 1] << 8 | t3[e3 + 2] << 16 | t3[e3 + 3] << 24) >>> 0;
      }
      new c2();
      var d2 = [0], p2 = [0], g2 = [], m2 = new c2(), v2 = t2, b2 = (function(t3, e3) {
        var r3 = {}, n3 = 0, i3 = false, a3 = 0, o3 = 0;
        if (r3.frames = [], !/** @license
        		   * Copyright (c) 2017 Dominik Homberger
        
        		Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
        
        		The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
        
        		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        
        		https://webpjs.appspot.com
        		WebPRiffParser dominikhlbg@gmail.com
        		*/
        (function(t4, e4) {
          for (var r4 = 0; r4 < 4; r4++) if (t4[e4 + r4] != "RIFF".charCodeAt(r4)) return true;
          return false;
        })(t3, e3)) {
          for (f2(t3, e3 += 4), e3 += 8; e3 < t3.length; ) {
            var s3 = u2(t3, e3), c3 = f2(t3, e3 += 4);
            e3 += 4;
            var d3 = c3 + (1 & c3);
            switch (s3) {
              case "VP8 ":
              case "VP8L":
                void 0 === r3.frames[n3] && (r3.frames[n3] = {}), (m3 = r3.frames[n3]).src_off = i3 ? o3 : e3 - 8, m3.src_size = a3 + c3 + 8, n3++, i3 && (i3 = false, a3 = 0, o3 = 0);
                break;
              case "VP8X":
                (m3 = r3.header = {}).feature_flags = t3[e3];
                var p3 = e3 + 4;
                m3.canvas_width = 1 + h2(t3, p3), p3 += 3, m3.canvas_height = 1 + h2(t3, p3), p3 += 3;
                break;
              case "ALPH":
                i3 = true, a3 = d3 + 8, o3 = e3 - 8;
                break;
              case "ANIM":
                (m3 = r3.header).bgcolor = f2(t3, e3), p3 = e3 + 4, m3.loop_count = l2(t3, p3), p3 += 2;
                break;
              case "ANMF":
                var g3, m3;
                (m3 = r3.frames[n3] = {}).offset_x = 2 * h2(t3, e3), e3 += 3, m3.offset_y = 2 * h2(t3, e3), e3 += 3, m3.width = 1 + h2(t3, e3), e3 += 3, m3.height = 1 + h2(t3, e3), e3 += 3, m3.duration = h2(t3, e3), e3 += 3, g3 = t3[e3++], m3.dispose = 1 & g3, m3.blend = g3 >> 1 & 1;
            }
            "ANMF" != s3 && (e3 += d3);
          }
          return r3;
        }
      })(v2, 0);
      b2.response = v2, b2.rgbaoutput = true, b2.dataurl = false;
      var y2 = b2.header ? b2.header : null, w2 = b2.frames ? b2.frames : null;
      if (y2) {
        y2.loop_counter = y2.loop_count, d2 = [y2.canvas_height], p2 = [y2.canvas_width];
        for (var N2 = 0; N2 < w2.length && 0 != w2[N2].blend; N2++) ;
      }
      var L2 = w2[0], x2 = m2.WebPDecodeRGBA(v2, L2.src_off, L2.src_size, p2, d2);
      L2.rgba = x2, L2.imgwidth = p2[0], L2.imgheight = d2[0];
      for (var A2 = 0; A2 < p2[0] * d2[0] * 4; A2++) g2[A2] = x2[A2];
      return this.width = p2, this.height = d2, this.data = g2, this;
    }
    !(function(t2) {
      var e2, r2, i2, a2, o2, c2, u2, l2, h2, f2 = function(t3) {
        return t3 = t3 || {}, this.isStrokeTransparent = t3.isStrokeTransparent || false, this.strokeOpacity = t3.strokeOpacity || 1, this.strokeStyle = t3.strokeStyle || "#000000", this.fillStyle = t3.fillStyle || "#000000", this.isFillTransparent = t3.isFillTransparent || false, this.fillOpacity = t3.fillOpacity || 1, this.font = t3.font || "10px sans-serif", this.textBaseline = t3.textBaseline || "alphabetic", this.textAlign = t3.textAlign || "left", this.lineWidth = t3.lineWidth || 1, this.lineJoin = t3.lineJoin || "miter", this.lineCap = t3.lineCap || "butt", this.path = t3.path || [], this.transform = void 0 !== t3.transform ? t3.transform.clone() : new l2(), this.globalCompositeOperation = t3.globalCompositeOperation || "normal", this.globalAlpha = t3.globalAlpha || 1, this.clip_path = t3.clip_path || [], this.currentPoint = t3.currentPoint || new c2(), this.miterLimit = t3.miterLimit || 10, this.lastPoint = t3.lastPoint || new c2(), this.lineDashOffset = t3.lineDashOffset || 0, this.lineDash = t3.lineDash || [], this.margin = t3.margin || [0, 0, 0, 0], this.prevPageLastElemOffset = t3.prevPageLastElemOffset || 0, this.ignoreClearRect = "boolean" != typeof t3.ignoreClearRect || t3.ignoreClearRect, this;
      };
      t2.events.push(["initialized", function() {
        this.context2d = new d2(this), e2 = this.internal.f2, r2 = this.internal.getCoordinateString, i2 = this.internal.getVerticalCoordinateString, a2 = this.internal.getHorizontalCoordinate, o2 = this.internal.getVerticalCoordinate, c2 = this.internal.Point, u2 = this.internal.Rectangle, l2 = this.internal.Matrix, h2 = new f2();
      }]);
      var d2 = function(t3) {
        Object.defineProperty(this, "canvas", { get: function() {
          return { parentNode: false, style: false };
        } });
        var e3 = t3;
        Object.defineProperty(this, "pdf", { get: function() {
          return e3;
        } });
        var r3 = false;
        Object.defineProperty(this, "pageWrapXEnabled", { get: function() {
          return r3;
        }, set: function(t4) {
          r3 = Boolean(t4);
        } });
        var n2 = false;
        Object.defineProperty(this, "pageWrapYEnabled", { get: function() {
          return n2;
        }, set: function(t4) {
          n2 = Boolean(t4);
        } });
        var i3 = 0;
        Object.defineProperty(this, "posX", { get: function() {
          return i3;
        }, set: function(t4) {
          isNaN(t4) || (i3 = t4);
        } });
        var a3 = 0;
        Object.defineProperty(this, "posY", { get: function() {
          return a3;
        }, set: function(t4) {
          isNaN(t4) || (a3 = t4);
        } }), Object.defineProperty(this, "margin", { get: function() {
          return h2.margin;
        }, set: function(t4) {
          var e4;
          "number" == typeof t4 ? e4 = [t4, t4, t4, t4] : ((e4 = new Array(4))[0] = t4[0], e4[1] = t4.length >= 2 ? t4[1] : e4[0], e4[2] = t4.length >= 3 ? t4[2] : e4[0], e4[3] = t4.length >= 4 ? t4[3] : e4[1]), h2.margin = e4;
        } });
        var o3 = false;
        Object.defineProperty(this, "autoPaging", { get: function() {
          return o3;
        }, set: function(t4) {
          o3 = t4;
        } });
        var s2 = 0;
        Object.defineProperty(this, "lastBreak", { get: function() {
          return s2;
        }, set: function(t4) {
          s2 = t4;
        } });
        var c3 = [];
        Object.defineProperty(this, "pageBreaks", { get: function() {
          return c3;
        }, set: function(t4) {
          c3 = t4;
        } }), Object.defineProperty(this, "ctx", { get: function() {
          return h2;
        }, set: function(t4) {
          t4 instanceof f2 && (h2 = t4);
        } }), Object.defineProperty(this, "path", { get: function() {
          return h2.path;
        }, set: function(t4) {
          h2.path = t4;
        } });
        var u3 = [];
        Object.defineProperty(this, "ctxStack", { get: function() {
          return u3;
        }, set: function(t4) {
          u3 = t4;
        } }), Object.defineProperty(this, "fillStyle", { get: function() {
          return this.ctx.fillStyle;
        }, set: function(t4) {
          var e4;
          e4 = p2(t4), this.ctx.fillStyle = e4.style, this.ctx.isFillTransparent = 0 === e4.a, this.ctx.fillOpacity = e4.a, this.pdf.setFillColor(e4.r, e4.g, e4.b, { a: e4.a }), this.pdf.setTextColor(e4.r, e4.g, e4.b, { a: e4.a });
        } }), Object.defineProperty(this, "strokeStyle", { get: function() {
          return this.ctx.strokeStyle;
        }, set: function(t4) {
          var e4 = p2(t4);
          this.ctx.strokeStyle = e4.style, this.ctx.isStrokeTransparent = 0 === e4.a, this.ctx.strokeOpacity = e4.a, 0 === e4.a ? this.pdf.setDrawColor(255, 255, 255) : (e4.a, this.pdf.setDrawColor(e4.r, e4.g, e4.b));
        } }), Object.defineProperty(this, "lineCap", { get: function() {
          return this.ctx.lineCap;
        }, set: function(t4) {
          -1 !== ["butt", "round", "square"].indexOf(t4) && (this.ctx.lineCap = t4, this.pdf.setLineCap(t4));
        } }), Object.defineProperty(this, "lineWidth", { get: function() {
          return this.ctx.lineWidth;
        }, set: function(t4) {
          isNaN(t4) || (this.ctx.lineWidth = t4, this.pdf.setLineWidth(t4));
        } }), Object.defineProperty(this, "lineJoin", { get: function() {
          return this.ctx.lineJoin;
        }, set: function(t4) {
          -1 !== ["bevel", "round", "miter"].indexOf(t4) && (this.ctx.lineJoin = t4, this.pdf.setLineJoin(t4));
        } }), Object.defineProperty(this, "miterLimit", { get: function() {
          return this.ctx.miterLimit;
        }, set: function(t4) {
          isNaN(t4) || (this.ctx.miterLimit = t4, this.pdf.setMiterLimit(t4));
        } }), Object.defineProperty(this, "textBaseline", { get: function() {
          return this.ctx.textBaseline;
        }, set: function(t4) {
          this.ctx.textBaseline = t4;
        } }), Object.defineProperty(this, "textAlign", { get: function() {
          return this.ctx.textAlign;
        }, set: function(t4) {
          -1 !== ["right", "end", "center", "left", "start"].indexOf(t4) && (this.ctx.textAlign = t4);
        } });
        var l3 = null, d3 = null;
        var g3 = null;
        Object.defineProperty(this, "fontFaces", { get: function() {
          return g3;
        }, set: function(t4) {
          l3 = null, d3 = null, g3 = t4;
        } }), Object.defineProperty(this, "font", { get: function() {
          return this.ctx.font;
        }, set: function(t4) {
          var e4;
          if (this.ctx.font = t4, null !== (e4 = /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z0-9]+?)\s*$/i.exec(t4))) {
            var r4 = e4[1];
            e4[2];
            var n3 = e4[3], i4 = e4[4];
            e4[5];
            var a4 = e4[6], o4 = /^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(i4)[2];
            i4 = "px" === o4 ? Math.floor(parseFloat(i4) * this.pdf.internal.scaleFactor) : "em" === o4 ? Math.floor(parseFloat(i4) * this.pdf.getFontSize()) : Math.floor(parseFloat(i4) * this.pdf.internal.scaleFactor), this.pdf.setFontSize(i4);
            var s3 = (function(t5) {
              var e5, r5, n4 = [], i5 = t5.trim();
              if ("" === i5) return zt;
              if (i5 in kt) return [kt[i5]];
              for (; "" !== i5; ) {
                switch (r5 = null, e5 = (i5 = It(i5)).charAt(0)) {
                  case '"':
                  case "'":
                    r5 = jt(i5.substring(1), e5);
                    break;
                  default:
                    r5 = Ct(i5);
                }
                if (null === r5) return zt;
                if (n4.push(r5[0]), "" !== (i5 = It(r5[1])) && "," !== i5.charAt(0)) return zt;
                i5 = i5.replace(/^,/, "");
              }
              return n4;
            })(a4);
            if (this.fontFaces) {
              var c4 = (function(t5, e5) {
                var r5 = t5.getFontList(), n4 = JSON.stringify(r5);
                if (null === l3 || d3 !== n4) {
                  var i5 = (function(t6) {
                    var e6 = [];
                    return Object.keys(t6).forEach(function(r6) {
                      t6[r6].forEach(function(t7) {
                        var n5 = null;
                        switch (t7) {
                          case "bold":
                            n5 = { family: r6, weight: "bold" };
                            break;
                          case "italic":
                            n5 = { family: r6, style: "italic" };
                            break;
                          case "bolditalic":
                            n5 = { family: r6, weight: "bold", style: "italic" };
                            break;
                          case "":
                          case "normal":
                            n5 = { family: r6 };
                        }
                        null !== n5 && (n5.ref = { name: r6, style: t7 }, e6.push(n5));
                      });
                    }), e6;
                  })(r5);
                  l3 = (function(t6) {
                    for (var e6 = {}, r6 = 0; r6 < t6.length; ++r6) {
                      var n5 = St(t6[r6]), i6 = n5.family, a5 = n5.stretch, o5 = n5.style, s4 = n5.weight;
                      e6[i6] = e6[i6] || {}, e6[i6][a5] = e6[i6][a5] || {}, e6[i6][a5][o5] = e6[i6][a5][o5] || {}, e6[i6][a5][o5][s4] = n5;
                    }
                    return e6;
                  })(i5.concat(e5)), d3 = n4;
                }
                return l3;
              })(this.pdf, this.fontFaces), u4 = s3.map(function(t5) {
                return { family: t5, stretch: "normal", weight: n3, style: r4 };
              }), h3 = (function(t5, e5, r5) {
                for (var n4 = (r5 = r5 || {}).defaultFontFamily || "times", i5 = Object.assign({}, Pt, r5.genericFontFamilies || {}), a5 = null, o5 = null, s4 = 0; s4 < e5.length; ++s4) if (i5[(a5 = St(e5[s4])).family] && (a5.family = i5[a5.family]), t5.hasOwnProperty(a5.family)) {
                  o5 = t5[a5.family];
                  break;
                }
                if (!(o5 = o5 || t5[n4])) throw new Error("Could not find a font-family for the rule '" + Ft(a5) + "' and default family '" + n4 + "'.");
                if (o5 = (function(t6, e6) {
                  if (e6[t6]) return e6[t6];
                  var r6 = Lt[t6], n5 = r6 <= Lt.normal ? -1 : 1, i6 = _t(e6, Nt, r6, n5);
                  if (!i6) throw new Error("Could not find a matching font-stretch value for " + t6);
                  return i6;
                })(a5.stretch, o5), o5 = (function(t6, e6) {
                  if (e6[t6]) return e6[t6];
                  for (var r6 = wt[t6], n5 = 0; n5 < r6.length; ++n5) if (e6[r6[n5]]) return e6[r6[n5]];
                  throw new Error("Could not find a matching font-style for " + t6);
                })(a5.style, o5), !(o5 = (function(t6, e6) {
                  if (e6[t6]) return e6[t6];
                  if (400 === t6 && e6[500]) return e6[500];
                  if (500 === t6 && e6[400]) return e6[400];
                  var r6 = At[t6], n5 = _t(e6, xt, r6, t6 < 400 ? -1 : 1);
                  if (!n5) throw new Error("Could not find a matching font-weight for value " + t6);
                  return n5;
                })(a5.weight, o5))) throw new Error("Failed to resolve a font for the rule '" + Ft(a5) + "'.");
                return o5;
              })(c4, u4);
              this.pdf.setFont(h3.ref.name, h3.ref.style);
            } else {
              var f3 = "";
              ("bold" === n3 || parseInt(n3, 10) >= 700 || "bold" === r4) && (f3 = "bold"), "italic" === r4 && (f3 += "italic"), 0 === f3.length && (f3 = "normal");
              for (var p3 = "", g4 = { arial: "Helvetica", Arial: "Helvetica", verdana: "Helvetica", Verdana: "Helvetica", helvetica: "Helvetica", Helvetica: "Helvetica", "sans-serif": "Helvetica", fixed: "Courier", monospace: "Courier", terminal: "Courier", cursive: "Times", fantasy: "Times", serif: "Times" }, m3 = 0; m3 < s3.length; m3++) {
                if (void 0 !== this.pdf.internal.getFont(s3[m3], f3, { noFallback: true, disableWarning: true })) {
                  p3 = s3[m3];
                  break;
                }
                if ("bolditalic" === f3 && void 0 !== this.pdf.internal.getFont(s3[m3], "bold", { noFallback: true, disableWarning: true })) p3 = s3[m3], f3 = "bold";
                else if (void 0 !== this.pdf.internal.getFont(s3[m3], "normal", { noFallback: true, disableWarning: true })) {
                  p3 = s3[m3], f3 = "normal";
                  break;
                }
              }
              if ("" === p3) {
                for (var v3 = 0; v3 < s3.length; v3++) if (g4[s3[v3]]) {
                  p3 = g4[s3[v3]];
                  break;
                }
              }
              p3 = "" === p3 ? "Times" : p3, this.pdf.setFont(p3, f3);
            }
          }
        } }), Object.defineProperty(this, "globalCompositeOperation", { get: function() {
          return this.ctx.globalCompositeOperation;
        }, set: function(t4) {
          this.ctx.globalCompositeOperation = t4;
        } }), Object.defineProperty(this, "globalAlpha", { get: function() {
          return this.ctx.globalAlpha;
        }, set: function(t4) {
          this.ctx.globalAlpha = t4;
        } }), Object.defineProperty(this, "lineDashOffset", { get: function() {
          return this.ctx.lineDashOffset;
        }, set: function(t4) {
          this.ctx.lineDashOffset = t4, D2.call(this);
        } }), Object.defineProperty(this, "lineDash", { get: function() {
          return this.ctx.lineDash;
        }, set: function(t4) {
          this.ctx.lineDash = t4, D2.call(this);
        } }), Object.defineProperty(this, "ignoreClearRect", { get: function() {
          return this.ctx.ignoreClearRect;
        }, set: function(t4) {
          this.ctx.ignoreClearRect = Boolean(t4);
        } });
      };
      d2.prototype.setLineDash = function(t3) {
        this.lineDash = t3;
      }, d2.prototype.getLineDash = function() {
        return this.lineDash.length % 2 ? this.lineDash.concat(this.lineDash) : this.lineDash.slice();
      }, d2.prototype.fill = function() {
        L2.call(this, "fill", false);
      }, d2.prototype.stroke = function() {
        L2.call(this, "stroke", false);
      }, d2.prototype.beginPath = function() {
        this.path = [{ type: "begin" }];
      }, d2.prototype.moveTo = function(t3, e3) {
        if (isNaN(t3) || isNaN(e3)) throw s.error("jsPDF.context2d.moveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.moveTo");
        var r3 = this.ctx.transform.applyToPoint(new c2(t3, e3));
        this.path.push({ type: "mt", x: r3.x, y: r3.y }), this.ctx.lastPoint = new c2(t3, e3);
      }, d2.prototype.closePath = function() {
        var t3 = new c2(0, 0), e3 = 0;
        for (e3 = this.path.length - 1; -1 !== e3; e3--) if ("begin" === this.path[e3].type && "object" == typeof this.path[e3 + 1] && "number" == typeof this.path[e3 + 1].x) {
          t3 = new c2(this.path[e3 + 1].x, this.path[e3 + 1].y);
          break;
        }
        this.path.push({ type: "close" }), this.ctx.lastPoint = new c2(t3.x, t3.y);
      }, d2.prototype.lineTo = function(t3, e3) {
        if (isNaN(t3) || isNaN(e3)) throw s.error("jsPDF.context2d.lineTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.lineTo");
        var r3 = this.ctx.transform.applyToPoint(new c2(t3, e3));
        this.path.push({ type: "lt", x: r3.x, y: r3.y }), this.ctx.lastPoint = new c2(r3.x, r3.y);
      }, d2.prototype.clip = function() {
        this.ctx.clip_path = JSON.parse(JSON.stringify(this.path)), L2.call(this, null, true);
      }, d2.prototype.quadraticCurveTo = function(t3, e3, r3, n2) {
        if (isNaN(r3) || isNaN(n2) || isNaN(t3) || isNaN(e3)) throw s.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");
        var i3 = this.ctx.transform.applyToPoint(new c2(r3, n2)), a3 = this.ctx.transform.applyToPoint(new c2(t3, e3));
        this.path.push({ type: "qct", x1: a3.x, y1: a3.y, x: i3.x, y: i3.y }), this.ctx.lastPoint = new c2(i3.x, i3.y);
      }, d2.prototype.bezierCurveTo = function(t3, e3, r3, n2, i3, a3) {
        if (isNaN(i3) || isNaN(a3) || isNaN(t3) || isNaN(e3) || isNaN(r3) || isNaN(n2)) throw s.error("jsPDF.context2d.bezierCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");
        var o3 = this.ctx.transform.applyToPoint(new c2(i3, a3)), u3 = this.ctx.transform.applyToPoint(new c2(t3, e3)), l3 = this.ctx.transform.applyToPoint(new c2(r3, n2));
        this.path.push({ type: "bct", x1: u3.x, y1: u3.y, x2: l3.x, y2: l3.y, x: o3.x, y: o3.y }), this.ctx.lastPoint = new c2(o3.x, o3.y);
      }, d2.prototype.arc = function(t3, e3, r3, n2, i3, a3) {
        if (isNaN(t3) || isNaN(e3) || isNaN(r3) || isNaN(n2) || isNaN(i3)) throw s.error("jsPDF.context2d.arc: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.arc");
        if (a3 = Boolean(a3), !this.ctx.transform.isIdentity) {
          var o3 = this.ctx.transform.applyToPoint(new c2(t3, e3));
          t3 = o3.x, e3 = o3.y;
          var u3 = this.ctx.transform.applyToPoint(new c2(0, r3)), l3 = this.ctx.transform.applyToPoint(new c2(0, 0));
          r3 = Math.sqrt(Math.pow(u3.x - l3.x, 2) + Math.pow(u3.y - l3.y, 2));
        }
        Math.abs(i3 - n2) >= 2 * Math.PI && (n2 = 0, i3 = 2 * Math.PI), this.path.push({ type: "arc", x: t3, y: e3, radius: r3, startAngle: n2, endAngle: i3, counterclockwise: a3 });
      }, d2.prototype.arcTo = function(t3, e3, r3, n2, i3) {
        throw new Error("arcTo not implemented.");
      }, d2.prototype.rect = function(t3, e3, r3, n2) {
        if (isNaN(t3) || isNaN(e3) || isNaN(r3) || isNaN(n2)) throw s.error("jsPDF.context2d.rect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rect");
        this.moveTo(t3, e3), this.lineTo(t3 + r3, e3), this.lineTo(t3 + r3, e3 + n2), this.lineTo(t3, e3 + n2), this.lineTo(t3, e3), this.lineTo(t3 + r3, e3), this.lineTo(t3, e3);
      }, d2.prototype.fillRect = function(t3, e3, r3, n2) {
        if (isNaN(t3) || isNaN(e3) || isNaN(r3) || isNaN(n2)) throw s.error("jsPDF.context2d.fillRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillRect");
        if (!g2.call(this)) {
          var i3 = {};
          "butt" !== this.lineCap && (i3.lineCap = this.lineCap, this.lineCap = "butt"), "miter" !== this.lineJoin && (i3.lineJoin = this.lineJoin, this.lineJoin = "miter"), this.beginPath(), this.rect(t3, e3, r3, n2), this.fill(), i3.hasOwnProperty("lineCap") && (this.lineCap = i3.lineCap), i3.hasOwnProperty("lineJoin") && (this.lineJoin = i3.lineJoin);
        }
      }, d2.prototype.strokeRect = function(t3, e3, r3, n2) {
        if (isNaN(t3) || isNaN(e3) || isNaN(r3) || isNaN(n2)) throw s.error("jsPDF.context2d.strokeRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");
        m2.call(this) || (this.beginPath(), this.rect(t3, e3, r3, n2), this.stroke());
      }, d2.prototype.clearRect = function(t3, e3, r3, n2) {
        if (isNaN(t3) || isNaN(e3) || isNaN(r3) || isNaN(n2)) throw s.error("jsPDF.context2d.clearRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.clearRect");
        this.ignoreClearRect || (this.fillStyle = "#ffffff", this.fillRect(t3, e3, r3, n2));
      }, d2.prototype.save = function(t3) {
        t3 = "boolean" != typeof t3 || t3;
        for (var e3 = this.pdf.internal.getCurrentPageInfo().pageNumber, r3 = 0; r3 < this.pdf.internal.getNumberOfPages(); r3++) this.pdf.setPage(r3 + 1), this.pdf.internal.out("q");
        if (this.pdf.setPage(e3), t3) {
          this.ctx.fontSize = this.pdf.internal.getFontSize();
          var n2 = new f2(this.ctx);
          this.ctxStack.push(this.ctx), this.ctx = n2;
        }
      }, d2.prototype.restore = function(t3) {
        t3 = "boolean" != typeof t3 || t3;
        for (var e3 = this.pdf.internal.getCurrentPageInfo().pageNumber, r3 = 0; r3 < this.pdf.internal.getNumberOfPages(); r3++) this.pdf.setPage(r3 + 1), this.pdf.internal.out("Q");
        this.pdf.setPage(e3), t3 && 0 !== this.ctxStack.length && (this.ctx = this.ctxStack.pop(), this.fillStyle = this.ctx.fillStyle, this.strokeStyle = this.ctx.strokeStyle, this.font = this.ctx.font, this.lineCap = this.ctx.lineCap, this.lineWidth = this.ctx.lineWidth, this.lineJoin = this.ctx.lineJoin, this.lineDash = this.ctx.lineDash, this.lineDashOffset = this.ctx.lineDashOffset);
      }, d2.prototype.toDataURL = function() {
        throw new Error("toDataUrl not implemented.");
      };
      var p2 = function(t3) {
        var e3, r3, i3, a3;
        if (true === t3.isCanvasGradient && (t3 = t3.getColor()), !t3) return { r: 0, g: 0, b: 0, a: 0, style: t3 };
        if (/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(t3)) e3 = 0, r3 = 0, i3 = 0, a3 = 0;
        else {
          var o3 = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(t3);
          if (null !== o3) e3 = parseInt(o3[1]), r3 = parseInt(o3[2]), i3 = parseInt(o3[3]), a3 = 1;
          else if (null !== (o3 = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(t3))) e3 = parseInt(o3[1]), r3 = parseInt(o3[2]), i3 = parseInt(o3[3]), a3 = parseFloat(o3[4]);
          else {
            if (a3 = 1, "string" == typeof t3 && "#" !== t3.charAt(0)) {
              var s2 = new n(t3);
              t3 = s2.ok ? s2.toHex() : "#000000";
            }
            4 === t3.length ? (e3 = t3.substring(1, 2), e3 += e3, r3 = t3.substring(2, 3), r3 += r3, i3 = t3.substring(3, 4), i3 += i3) : (e3 = t3.substring(1, 3), r3 = t3.substring(3, 5), i3 = t3.substring(5, 7)), e3 = parseInt(e3, 16), r3 = parseInt(r3, 16), i3 = parseInt(i3, 16);
          }
        }
        return { r: e3, g: r3, b: i3, a: a3, style: t3 };
      }, g2 = function() {
        return this.ctx.isFillTransparent || 0 == this.globalAlpha;
      }, m2 = function() {
        return Boolean(this.ctx.isStrokeTransparent || 0 == this.globalAlpha);
      };
      d2.prototype.fillText = function(t3, e3, r3, n2) {
        if (isNaN(e3) || isNaN(r3) || "string" != typeof t3) throw s.error("jsPDF.context2d.fillText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillText");
        if (n2 = isNaN(n2) ? void 0 : n2, !g2.call(this)) {
          var i3 = M2(this.ctx.transform.rotation), a3 = this.ctx.transform.scaleX;
          I2.call(this, { text: t3, x: e3, y: r3, scale: a3, angle: i3, align: this.textAlign, maxWidth: n2 });
        }
      }, d2.prototype.strokeText = function(t3, e3, r3, n2) {
        if (isNaN(e3) || isNaN(r3) || "string" != typeof t3) throw s.error("jsPDF.context2d.strokeText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeText");
        if (!m2.call(this)) {
          n2 = isNaN(n2) ? void 0 : n2;
          var i3 = M2(this.ctx.transform.rotation), a3 = this.ctx.transform.scaleX;
          I2.call(this, { text: t3, x: e3, y: r3, scale: a3, renderingMode: "stroke", angle: i3, align: this.textAlign, maxWidth: n2 });
        }
      }, d2.prototype.measureText = function(t3) {
        if ("string" != typeof t3) throw s.error("jsPDF.context2d.measureText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.measureText");
        var e3 = this.pdf, r3 = this.pdf.internal.scaleFactor, n2 = e3.internal.getFontSize(), i3 = e3.getStringUnitWidth(t3) * n2 / e3.internal.scaleFactor;
        return new function(t4) {
          var e4 = (t4 = t4 || {}).width || 0;
          return Object.defineProperty(this, "width", { get: function() {
            return e4;
          } }), this;
        }({ width: i3 *= Math.round(96 * r3 / 72 * 1e4) / 1e4 });
      }, d2.prototype.scale = function(t3, e3) {
        if (isNaN(t3) || isNaN(e3)) throw s.error("jsPDF.context2d.scale: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.scale");
        var r3 = new l2(t3, 0, 0, e3, 0, 0);
        this.ctx.transform = this.ctx.transform.multiply(r3);
      }, d2.prototype.rotate = function(t3) {
        if (isNaN(t3)) throw s.error("jsPDF.context2d.rotate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rotate");
        var e3 = new l2(Math.cos(t3), Math.sin(t3), -Math.sin(t3), Math.cos(t3), 0, 0);
        this.ctx.transform = this.ctx.transform.multiply(e3);
      }, d2.prototype.translate = function(t3, e3) {
        if (isNaN(t3) || isNaN(e3)) throw s.error("jsPDF.context2d.translate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.translate");
        var r3 = new l2(1, 0, 0, 1, t3, e3);
        this.ctx.transform = this.ctx.transform.multiply(r3);
      }, d2.prototype.transform = function(t3, e3, r3, n2, i3, a3) {
        if (isNaN(t3) || isNaN(e3) || isNaN(r3) || isNaN(n2) || isNaN(i3) || isNaN(a3)) throw s.error("jsPDF.context2d.transform: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.transform");
        var o3 = new l2(t3, e3, r3, n2, i3, a3);
        this.ctx.transform = this.ctx.transform.multiply(o3);
      }, d2.prototype.setTransform = function(t3, e3, r3, n2, i3, a3) {
        t3 = isNaN(t3) ? 1 : t3, e3 = isNaN(e3) ? 0 : e3, r3 = isNaN(r3) ? 0 : r3, n2 = isNaN(n2) ? 1 : n2, i3 = isNaN(i3) ? 0 : i3, a3 = isNaN(a3) ? 0 : a3, this.ctx.transform = new l2(t3, e3, r3, n2, i3, a3);
      };
      var v2 = function() {
        return this.margin[0] > 0 || this.margin[1] > 0 || this.margin[2] > 0 || this.margin[3] > 0;
      };
      d2.prototype.drawImage = function(t3, e3, r3, n2, i3, a3, o3, s2, c3) {
        var h3 = this.pdf.getImageProperties(t3), f3 = 1, d3 = 1, p3 = 1, g3 = 1;
        void 0 !== n2 && void 0 !== s2 && (p3 = s2 / n2, g3 = c3 / i3, f3 = h3.width / n2 * s2 / n2, d3 = h3.height / i3 * c3 / i3), void 0 === a3 && (a3 = e3, o3 = r3, e3 = 0, r3 = 0), void 0 !== n2 && void 0 === s2 && (s2 = n2, c3 = i3), void 0 === n2 && void 0 === s2 && (s2 = h3.width, c3 = h3.height);
        var m3 = this.ctx.transform.decompose(), y3 = M2(m3.rotate.shx), L3 = new l2(), A3 = (L3 = (L3 = (L3 = L3.multiply(m3.translate)).multiply(m3.skew)).multiply(m3.scale)).applyToRectangle(new u2(a3 - e3 * p3, o3 - r3 * g3, n2 * f3, i3 * d3));
        if (this.autoPaging) {
          for (var S3, _3 = b2.call(this, A3), P3 = [], k3 = 0; k3 < _3.length; k3 += 1) -1 === P3.indexOf(_3[k3]) && P3.push(_3[k3]);
          N2(P3);
          for (var F3 = P3[0], I3 = P3[P3.length - 1], j3 = F3; j3 < I3 + 1; j3++) {
            this.pdf.setPage(j3);
            var C3 = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], O3 = 1 === j3 ? this.posY + this.margin[0] : this.margin[0], B3 = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], q3 = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], E3 = 1 === j3 ? 0 : B3 + (j3 - 2) * q3;
            if (0 !== this.ctx.clip_path.length) {
              var R3 = this.path;
              S3 = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = w2(S3, this.posX + this.margin[3], -E3 + O3 + this.ctx.prevPageLastElemOffset), x2.call(this, "fill", true), this.path = R3;
            }
            var D3 = JSON.parse(JSON.stringify(A3));
            D3 = w2([D3], this.posX + this.margin[3], -E3 + O3 + this.ctx.prevPageLastElemOffset)[0];
            const e4 = (j3 > F3 || j3 < I3) && v2.call(this);
            e4 && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], C3, q3, null).clip().discardPath()), this.pdf.addImage(t3, "JPEG", D3.x, D3.y, D3.w, D3.h, null, null, y3), e4 && this.pdf.restoreGraphicsState();
          }
        } else this.pdf.addImage(t3, "JPEG", A3.x, A3.y, A3.w, A3.h, null, null, y3);
      };
      var b2 = function(t3, e3, r3) {
        var n2 = [];
        e3 = e3 || this.pdf.internal.pageSize.width, r3 = r3 || this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2];
        var i3 = this.posY + this.ctx.prevPageLastElemOffset;
        switch (t3.type) {
          default:
          case "mt":
          case "lt":
            n2.push(Math.floor((t3.y + i3) / r3) + 1);
            break;
          case "arc":
            n2.push(Math.floor((t3.y + i3 - t3.radius) / r3) + 1), n2.push(Math.floor((t3.y + i3 + t3.radius) / r3) + 1);
            break;
          case "qct":
            var a3 = E2(this.ctx.lastPoint.x, this.ctx.lastPoint.y, t3.x1, t3.y1, t3.x, t3.y);
            n2.push(Math.floor((a3.y + i3) / r3) + 1), n2.push(Math.floor((a3.y + a3.h + i3) / r3) + 1);
            break;
          case "bct":
            var o3 = R2(this.ctx.lastPoint.x, this.ctx.lastPoint.y, t3.x1, t3.y1, t3.x2, t3.y2, t3.x, t3.y);
            n2.push(Math.floor((o3.y + i3) / r3) + 1), n2.push(Math.floor((o3.y + o3.h + i3) / r3) + 1);
            break;
          case "rect":
            n2.push(Math.floor((t3.y + i3) / r3) + 1), n2.push(Math.floor((t3.y + t3.h + i3) / r3) + 1);
        }
        for (var s2 = 0; s2 < n2.length; s2 += 1) for (; this.pdf.internal.getNumberOfPages() < n2[s2]; ) y2.call(this);
        return n2;
      }, y2 = function() {
        var t3 = this.fillStyle, e3 = this.strokeStyle, r3 = this.font, n2 = this.lineCap, i3 = this.lineWidth, a3 = this.lineJoin;
        this.pdf.addPage(), this.fillStyle = t3, this.strokeStyle = e3, this.font = r3, this.lineCap = n2, this.lineWidth = i3, this.lineJoin = a3;
      }, w2 = function(t3, e3, r3) {
        for (var n2 = 0; n2 < t3.length; n2++) switch (t3[n2].type) {
          case "bct":
            t3[n2].x2 += e3, t3[n2].y2 += r3;
          case "qct":
            t3[n2].x1 += e3, t3[n2].y1 += r3;
          default:
            t3[n2].x += e3, t3[n2].y += r3;
        }
        return t3;
      }, N2 = function(t3) {
        return t3.sort(function(t4, e3) {
          return t4 - e3;
        });
      }, L2 = function(t3, e3) {
        var r3 = this.fillStyle, n2 = this.strokeStyle, i3 = this.lineCap, a3 = this.lineWidth, o3 = Math.abs(a3 * this.ctx.transform.scaleX), s2 = this.lineJoin;
        if (this.autoPaging) {
          for (var c3, u3, l3 = JSON.parse(JSON.stringify(this.path)), h3 = JSON.parse(JSON.stringify(this.path)), f3 = [], d3 = 0; d3 < h3.length; d3++) if (void 0 !== h3[d3].x) for (var p3 = b2.call(this, h3[d3]), g3 = 0; g3 < p3.length; g3 += 1) -1 === f3.indexOf(p3[g3]) && f3.push(p3[g3]);
          for (var m3 = 0; m3 < f3.length; m3++) for (; this.pdf.internal.getNumberOfPages() < f3[m3]; ) y2.call(this);
          N2(f3);
          for (var L3 = f3[0], A3 = f3[f3.length - 1], S3 = L3; S3 < A3 + 1; S3++) {
            this.pdf.setPage(S3), this.fillStyle = r3, this.strokeStyle = n2, this.lineCap = i3, this.lineWidth = o3, this.lineJoin = s2;
            var _3 = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], P3 = 1 === S3 ? this.posY + this.margin[0] : this.margin[0], k3 = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], F3 = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], I3 = 1 === S3 ? 0 : k3 + (S3 - 2) * F3;
            if (0 !== this.ctx.clip_path.length) {
              var j3 = this.path;
              c3 = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = w2(c3, this.posX + this.margin[3], -I3 + P3 + this.ctx.prevPageLastElemOffset), x2.call(this, t3, true), this.path = j3;
            }
            if (u3 = JSON.parse(JSON.stringify(l3)), this.path = w2(u3, this.posX + this.margin[3], -I3 + P3 + this.ctx.prevPageLastElemOffset), false === e3 || 0 === S3) {
              const r4 = (S3 > L3 || S3 < A3) && v2.call(this);
              r4 && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], _3, F3, null).clip().discardPath()), x2.call(this, t3, e3), r4 && this.pdf.restoreGraphicsState();
            }
            this.lineWidth = a3;
          }
          this.path = l3;
        } else this.lineWidth = o3, x2.call(this, t3, e3), this.lineWidth = a3;
      }, x2 = function(t3, e3) {
        if (("stroke" !== t3 || e3 || !m2.call(this)) && ("stroke" === t3 || e3 || !g2.call(this))) {
          for (var r3, n2, i3 = [], a3 = this.path, o3 = 0; o3 < a3.length; o3++) {
            var s2 = a3[o3];
            switch (s2.type) {
              case "begin":
                i3.push({ begin: true });
                break;
              case "close":
                i3.push({ close: true });
                break;
              case "mt":
                i3.push({ start: s2, deltas: [], abs: [] });
                break;
              case "lt":
                var c3 = i3.length;
                if (a3[o3 - 1] && !isNaN(a3[o3 - 1].x) && (r3 = [s2.x - a3[o3 - 1].x, s2.y - a3[o3 - 1].y], c3 > 0)) {
                  for (; c3 >= 0; c3--) if (true !== i3[c3 - 1].close && true !== i3[c3 - 1].begin) {
                    i3[c3 - 1].deltas.push(r3), i3[c3 - 1].abs.push(s2);
                    break;
                  }
                }
                break;
              case "bct":
                r3 = [s2.x1 - a3[o3 - 1].x, s2.y1 - a3[o3 - 1].y, s2.x2 - a3[o3 - 1].x, s2.y2 - a3[o3 - 1].y, s2.x - a3[o3 - 1].x, s2.y - a3[o3 - 1].y], i3[i3.length - 1].deltas.push(r3);
                break;
              case "qct":
                var u3 = a3[o3 - 1].x + 2 / 3 * (s2.x1 - a3[o3 - 1].x), l3 = a3[o3 - 1].y + 2 / 3 * (s2.y1 - a3[o3 - 1].y), h3 = s2.x + 2 / 3 * (s2.x1 - s2.x), f3 = s2.y + 2 / 3 * (s2.y1 - s2.y), d3 = s2.x, p3 = s2.y;
                r3 = [u3 - a3[o3 - 1].x, l3 - a3[o3 - 1].y, h3 - a3[o3 - 1].x, f3 - a3[o3 - 1].y, d3 - a3[o3 - 1].x, p3 - a3[o3 - 1].y], i3[i3.length - 1].deltas.push(r3);
                break;
              case "arc":
                i3.push({ deltas: [], abs: [], arc: true }), Array.isArray(i3[i3.length - 1].abs) && i3[i3.length - 1].abs.push(s2);
            }
          }
          n2 = e3 ? null : "stroke" === t3 ? "stroke" : "fill";
          for (var v3 = false, b3 = 0; b3 < i3.length; b3++) if (i3[b3].arc) for (var y3 = i3[b3].abs, w3 = 0; w3 < y3.length; w3++) {
            var N3 = y3[w3];
            "arc" === N3.type ? _2.call(this, N3.x, N3.y, N3.radius, N3.startAngle, N3.endAngle, N3.counterclockwise, void 0, e3, !v3) : j2.call(this, N3.x, N3.y), v3 = true;
          }
          else if (true === i3[b3].close) this.pdf.internal.out("h"), v3 = false;
          else if (true !== i3[b3].begin) {
            var L3 = i3[b3].start.x, x3 = i3[b3].start.y;
            C2.call(this, i3[b3].deltas, L3, x3), v3 = true;
          }
          n2 && P2.call(this, n2), e3 && k2.call(this);
        }
      }, A2 = function(t3) {
        var e3 = this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor, r3 = e3 * (this.pdf.internal.getLineHeightFactor() - 1);
        switch (this.ctx.textBaseline) {
          case "bottom":
            return t3 - r3;
          case "top":
            return t3 + e3 - r3;
          case "hanging":
            return t3 + e3 - 2 * r3;
          case "middle":
            return t3 + e3 / 2 - r3;
          default:
            return t3;
        }
      }, S2 = function(t3) {
        return t3 + this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor * (this.pdf.internal.getLineHeightFactor() - 1);
      };
      d2.prototype.createLinearGradient = function() {
        var t3 = function() {
        };
        return t3.colorStops = [], t3.addColorStop = function(t4, e3) {
          this.colorStops.push([t4, e3]);
        }, t3.getColor = function() {
          return 0 === this.colorStops.length ? "#000000" : this.colorStops[0][1];
        }, t3.isCanvasGradient = true, t3;
      }, d2.prototype.createPattern = function() {
        return this.createLinearGradient();
      }, d2.prototype.createRadialGradient = function() {
        return this.createLinearGradient();
      };
      var _2 = function(t3, e3, r3, n2, i3, a3, o3, s2, c3) {
        for (var u3 = B2.call(this, r3, n2, i3, a3), l3 = 0; l3 < u3.length; l3++) {
          var h3 = u3[l3];
          0 === l3 && (c3 ? F2.call(this, h3.x1 + t3, h3.y1 + e3) : j2.call(this, h3.x1 + t3, h3.y1 + e3)), O2.call(this, t3, e3, h3.x2, h3.y2, h3.x3, h3.y3, h3.x4, h3.y4);
        }
        s2 ? k2.call(this) : P2.call(this, o3);
      }, P2 = function(t3) {
        switch (t3) {
          case "stroke":
            this.pdf.internal.out("S");
            break;
          case "fill":
            this.pdf.internal.out("f");
        }
      }, k2 = function() {
        this.pdf.clip(), this.pdf.discardPath();
      }, F2 = function(t3, e3) {
        this.pdf.internal.out(r2(t3) + " " + i2(e3) + " m");
      }, I2 = function(t3) {
        var e3;
        switch (t3.align) {
          case "right":
          case "end":
            e3 = "right";
            break;
          case "center":
            e3 = "center";
            break;
          default:
            e3 = "left";
        }
        var r3, n2, i3, a3 = this.pdf.getTextDimensions(t3.text), o3 = A2.call(this, t3.y), s2 = S2.call(this, o3) - a3.h, h3 = this.ctx.transform.applyToPoint(new c2(t3.x, o3));
        if (this.autoPaging) {
          var f3 = this.ctx.transform.decompose(), d3 = new l2();
          d3 = (d3 = (d3 = d3.multiply(f3.translate)).multiply(f3.skew)).multiply(f3.scale);
          for (var p3 = this.ctx.transform.applyToRectangle(new u2(t3.x, o3, a3.w, a3.h)), g3 = d3.applyToRectangle(new u2(t3.x, s2, a3.w, a3.h)), m3 = b2.call(this, g3), y3 = [], L3 = 0; L3 < m3.length; L3 += 1) -1 === y3.indexOf(m3[L3]) && y3.push(m3[L3]);
          N2(y3);
          for (var _3 = y3[0], P3 = y3[y3.length - 1], k3 = _3; k3 < P3 + 1; k3++) {
            this.pdf.setPage(k3);
            var F3 = 1 === k3 ? this.posY + this.margin[0] : this.margin[0], I3 = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], j3 = this.pdf.internal.pageSize.height - this.margin[2], C3 = j3 - this.margin[0], O3 = this.pdf.internal.pageSize.width - this.margin[1], B3 = O3 - this.margin[3], q3 = 1 === k3 ? 0 : I3 + (k3 - 2) * C3;
            if (0 !== this.ctx.clip_path.length) {
              var M3 = this.path;
              r3 = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = w2(r3, this.posX + this.margin[3], -1 * q3 + F3), x2.call(this, "fill", true), this.path = M3;
            }
            var E3 = w2([JSON.parse(JSON.stringify(g3))], this.posX + this.margin[3], -q3 + F3 + this.ctx.prevPageLastElemOffset)[0];
            t3.scale >= 0.01 && (n2 = this.pdf.internal.getFontSize(), this.pdf.setFontSize(n2 * t3.scale), i3 = this.lineWidth, this.lineWidth = i3 * t3.scale);
            var R3 = "text" !== this.autoPaging;
            if (R3 || E3.y + E3.h <= j3) {
              if (R3 || E3.y >= F3 && E3.x <= O3) {
                var D3 = R3 ? t3.text : this.pdf.splitTextToSize(t3.text, t3.maxWidth || O3 - E3.x)[0], T2 = w2([JSON.parse(JSON.stringify(p3))], this.posX + this.margin[3], -q3 + F3 + this.ctx.prevPageLastElemOffset)[0];
                const r4 = R3 && (k3 > _3 || k3 < P3) && v2.call(this);
                r4 && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], B3, C3, null).clip().discardPath()), this.pdf.text(D3, T2.x, T2.y, { angle: t3.angle, align: e3, renderingMode: t3.renderingMode }), r4 && this.pdf.restoreGraphicsState();
              }
            } else E3.y < j3 && (this.ctx.prevPageLastElemOffset += j3 - E3.y);
            t3.scale >= 0.01 && (this.pdf.setFontSize(n2), this.lineWidth = i3);
          }
        } else t3.scale >= 0.01 && (n2 = this.pdf.internal.getFontSize(), this.pdf.setFontSize(n2 * t3.scale), i3 = this.lineWidth, this.lineWidth = i3 * t3.scale), this.pdf.text(t3.text, h3.x + this.posX, h3.y + this.posY, { angle: t3.angle, align: e3, renderingMode: t3.renderingMode, maxWidth: t3.maxWidth }), t3.scale >= 0.01 && (this.pdf.setFontSize(n2), this.lineWidth = i3);
      }, j2 = function(t3, e3, n2, a3) {
        n2 = n2 || 0, a3 = a3 || 0, this.pdf.internal.out(r2(t3 + n2) + " " + i2(e3 + a3) + " l");
      }, C2 = function(t3, e3, r3) {
        return this.pdf.lines(t3, e3, r3, null, null);
      }, O2 = function(t3, r3, n2, i3, s2, c3, u3, l3) {
        this.pdf.internal.out([e2(a2(n2 + t3)), e2(o2(i3 + r3)), e2(a2(s2 + t3)), e2(o2(c3 + r3)), e2(a2(u3 + t3)), e2(o2(l3 + r3)), "c"].join(" "));
      }, B2 = function(t3, e3, r3, n2) {
        for (var i3 = 2 * Math.PI, a3 = Math.PI / 2; e3 > r3; ) e3 -= i3;
        var o3 = Math.abs(r3 - e3);
        o3 < i3 && n2 && (o3 = i3 - o3);
        for (var s2 = [], c3 = n2 ? -1 : 1, u3 = e3; o3 > 1e-5; ) {
          var l3 = u3 + c3 * Math.min(o3, a3);
          s2.push(q2.call(this, t3, u3, l3)), o3 -= Math.abs(l3 - u3), u3 = l3;
        }
        return s2;
      }, q2 = function(t3, e3, r3) {
        var n2 = (r3 - e3) / 2, i3 = t3 * Math.cos(n2), a3 = t3 * Math.sin(n2), o3 = i3, s2 = -a3, c3 = o3 * o3 + s2 * s2, u3 = c3 + o3 * i3 + s2 * a3, l3 = 4 / 3 * (Math.sqrt(2 * c3 * u3) - u3) / (o3 * a3 - s2 * i3), h3 = o3 - l3 * s2, f3 = s2 + l3 * o3, d3 = h3, p3 = -f3, g3 = n2 + e3, m3 = Math.cos(g3), v3 = Math.sin(g3);
        return { x1: t3 * Math.cos(e3), y1: t3 * Math.sin(e3), x2: h3 * m3 - f3 * v3, y2: h3 * v3 + f3 * m3, x3: d3 * m3 - p3 * v3, y3: d3 * v3 + p3 * m3, x4: t3 * Math.cos(r3), y4: t3 * Math.sin(r3) };
      }, M2 = function(t3) {
        return 180 * t3 / Math.PI;
      }, E2 = function(t3, e3, r3, n2, i3, a3) {
        var o3 = t3 + 0.5 * (r3 - t3), s2 = e3 + 0.5 * (n2 - e3), c3 = i3 + 0.5 * (r3 - i3), l3 = a3 + 0.5 * (n2 - a3), h3 = Math.min(t3, i3, o3, c3), f3 = Math.max(t3, i3, o3, c3), d3 = Math.min(e3, a3, s2, l3), p3 = Math.max(e3, a3, s2, l3);
        return new u2(h3, d3, f3 - h3, p3 - d3);
      }, R2 = function(t3, e3, r3, n2, i3, a3, o3, s2) {
        var c3, l3, h3, f3, d3, p3, g3, m3, v3, b3, y3, w3, N3, L3, x3 = r3 - t3, A3 = n2 - e3, S3 = i3 - r3, _3 = a3 - n2, P3 = o3 - i3, k3 = s2 - a3;
        for (l3 = 0; l3 < 41; l3++) v3 = (g3 = (h3 = t3 + (c3 = l3 / 40) * x3) + c3 * ((d3 = r3 + c3 * S3) - h3)) + c3 * (d3 + c3 * (i3 + c3 * P3 - d3) - g3), b3 = (m3 = (f3 = e3 + c3 * A3) + c3 * ((p3 = n2 + c3 * _3) - f3)) + c3 * (p3 + c3 * (a3 + c3 * k3 - p3) - m3), 0 == l3 ? (y3 = v3, w3 = b3, N3 = v3, L3 = b3) : (y3 = Math.min(y3, v3), w3 = Math.min(w3, b3), N3 = Math.max(N3, v3), L3 = Math.max(L3, b3));
        return new u2(Math.round(y3), Math.round(w3), Math.round(N3 - y3), Math.round(L3 - w3));
      }, D2 = function() {
        if (!this.prevLineDash && !this.ctx.lineDash.length && !this.ctx.lineDashOffset) return;
        const t3 = (e3 = this.ctx.lineDash, r3 = this.ctx.lineDashOffset, JSON.stringify({ lineDash: e3, lineDashOffset: r3 }));
        var e3, r3;
        this.prevLineDash !== t3 && (this.pdf.setLineDash(this.ctx.lineDash, this.ctx.lineDashOffset), this.prevLineDash = t3);
      };
    })(j.API), /**
     * @license
     * jsPDF filters PlugIn
     * Copyright (c) 2014 Aras Abbasi
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
    (function(e2) {
      var r2 = function(t2) {
        var e3, r3, n3, i3, a3, o3, s2, c2, u2, l2;
        for (r3 = [], n3 = 0, i3 = (t2 += e3 = "\0\0\0\0".slice(t2.length % 4 || 4)).length; i3 > n3; n3 += 4) 0 !== (a3 = (t2.charCodeAt(n3) << 24) + (t2.charCodeAt(n3 + 1) << 16) + (t2.charCodeAt(n3 + 2) << 8) + t2.charCodeAt(n3 + 3)) ? (o3 = (a3 = ((a3 = ((a3 = ((a3 = (a3 - (l2 = a3 % 85)) / 85) - (u2 = a3 % 85)) / 85) - (c2 = a3 % 85)) / 85) - (s2 = a3 % 85)) / 85) % 85, r3.push(o3 + 33, s2 + 33, c2 + 33, u2 + 33, l2 + 33)) : r3.push(122);
        return (function(t3, e4) {
          for (var r4 = e4; r4 > 0; r4--) t3.pop();
        })(r3, e3.length), String.fromCharCode.apply(String, r3) + "~>";
      }, n2 = function(t2) {
        var e3, r3, n3, i3, a3, o3 = String, s2 = "length", c2 = 255, u2 = "charCodeAt", l2 = "slice", h2 = "replace";
        for (t2[l2](-2), t2 = t2[l2](0, -2)[h2](/\s/g, "")[h2]("z", "!!!!!"), n3 = [], i3 = 0, a3 = (t2 += e3 = "uuuuu"[l2](t2[s2] % 5 || 5))[s2]; a3 > i3; i3 += 5) r3 = 52200625 * (t2[u2](i3) - 33) + 614125 * (t2[u2](i3 + 1) - 33) + 7225 * (t2[u2](i3 + 2) - 33) + 85 * (t2[u2](i3 + 3) - 33) + (t2[u2](i3 + 4) - 33), n3.push(c2 & r3 >> 24, c2 & r3 >> 16, c2 & r3 >> 8, c2 & r3);
        return (function(t3, e4) {
          for (var r4 = e4; r4 > 0; r4--) t3.pop();
        })(n3, e3[s2]), o3.fromCharCode.apply(o3, n3);
      }, i2 = function(t2) {
        return t2.split("").map(function(t3) {
          return ("0" + t3.charCodeAt().toString(16)).slice(-2);
        }).join("") + ">";
      }, a2 = function(t2) {
        var e3 = new RegExp(/^([0-9A-Fa-f]{2})+$/);
        if (-1 !== (t2 = t2.replace(/\s/g, "")).indexOf(">") && (t2 = t2.substr(0, t2.indexOf(">"))), t2.length % 2 && (t2 += "0"), false === e3.test(t2)) return "";
        for (var r3 = "", n3 = 0; n3 < t2.length; n3 += 2) r3 += String.fromCharCode("0x" + (t2[n3] + t2[n3 + 1]));
        return r3;
      }, o2 = function(e3) {
        for (var r3 = new Uint8Array(e3.length), n3 = e3.length; n3--; ) r3[n3] = e3.charCodeAt(n3);
        return (r3 = t.zlibSync(r3)).reduce(function(t2, e4) {
          return t2 + String.fromCharCode(e4);
        }, "");
      };
      e2.processDataByFilters = function(t2, e3) {
        var s2 = 0, c2 = t2 || "", u2 = [];
        for ("string" == typeof (e3 = e3 || []) && (e3 = [e3]), s2 = 0; s2 < e3.length; s2 += 1) switch (e3[s2]) {
          case "ASCII85Decode":
          case "/ASCII85Decode":
            c2 = n2(c2), u2.push("/ASCII85Encode");
            break;
          case "ASCII85Encode":
          case "/ASCII85Encode":
            c2 = r2(c2), u2.push("/ASCII85Decode");
            break;
          case "ASCIIHexDecode":
          case "/ASCIIHexDecode":
            c2 = a2(c2), u2.push("/ASCIIHexEncode");
            break;
          case "ASCIIHexEncode":
          case "/ASCIIHexEncode":
            c2 = i2(c2), u2.push("/ASCIIHexDecode");
            break;
          case "FlateEncode":
          case "/FlateEncode":
            c2 = o2(c2), u2.push("/FlateDecode");
            break;
          default:
            throw new Error('The filter: "' + e3[s2] + '" is not implemented');
        }
        return { data: c2, reverseChain: u2.reverse().join(" ") };
      };
    })(j.API), /**
     * @license
     * jsPDF fileloading PlugIn
     * Copyright (c) 2018 Aras Abbasi (aras.abbasi@gmail.com)
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
    (function(t2) {
      function e2(t3, e3, r2) {
        e3 = false !== e3;
        var n2 = void 0, i2 = require$$2, a2 = require$$3;
        if (!process.permission && !this.allowFsRead) throw new Error("Trying to read a file from local file system. To enable this feature either run node with the --permission and --allow-fs-read flags or set the jsPDF.allowFsRead property.");
        try {
          t3 = i2.realpathSync(a2.resolve(t3));
        } catch (o2) {
          return e3 ? void 0 : void r2(void 0);
        }
        if (process.permission && !process.permission.has("fs.read", t3)) throw new Error(`Cannot read file '${t3}'. Permission denied.`);
        if (this.allowFsRead && !this.allowFsRead.some((e4) => {
          const r3 = e4.indexOf("*");
          if (r3 >= 0) {
            const n3 = e4.substring(0, r3);
            let i3 = a2.resolve(n3);
            return n3.endsWith(a2.sep) && !i3.endsWith(a2.sep) && (i3 += a2.sep), t3.startsWith(i3);
          }
          return t3 === a2.resolve(e4);
        })) throw new Error(`Cannot read file '${t3}'. Permission denied.`);
        if (e3) try {
          n2 = i2.readFileSync(t3, { encoding: "latin1" });
        } catch (o2) {
          return;
        }
        else i2.readFile(t3, { encoding: "latin1" }, function(t4, e4) {
          r2 && (t4 && r2(void 0), r2(e4));
        });
        return n2;
      }
      t2.loadFile = function(t3, r2, n2) {
        return e2.call(this, t3, r2, n2);
      }, t2.allowFsRead = void 0, t2.loadImageFile = t2.loadFile;
    })(j.API), /**
     * @license
     * Copyright (c) 2018 Erik Koopmans
     * Released under the MIT License.
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
    (function(t2) {
      function e2() {
        return (r.html2canvas ? Promise.resolve(r.html2canvas) : new Promise(function(t3, e3) {
          try {
            t3(require$$4);
          } catch (r2) {
            e3(r2);
          }
        })).catch(function(t3) {
          return Promise.reject(new Error("Could not load html2canvas: " + t3));
        }).then(function(t3) {
          return t3.default ? t3.default : t3;
        });
      }
      function n2() {
        return (r.DOMPurify ? Promise.resolve(r.DOMPurify) : new Promise(function(t3, e3) {
          try {
            t3(require$$5);
          } catch (r2) {
            e3(r2);
          }
        })).catch(function(t3) {
          return Promise.reject(new Error("Could not load dompurify: " + t3));
        }).then(function(t3) {
          return t3.default ? t3.default : t3;
        });
      }
      var i2 = function(t3) {
        var e3 = typeof t3;
        return "undefined" === e3 ? "undefined" : "string" === e3 || t3 instanceof String ? "string" : "number" === e3 || t3 instanceof Number ? "number" : "function" === e3 || t3 instanceof Function ? "function" : t3 && t3.constructor === Array ? "array" : t3 && 1 === t3.nodeType ? "element" : "object" === e3 ? "object" : "unknown";
      }, a2 = function(t3, e3) {
        var r2 = document.createElement(t3);
        for (var n3 in e3.className && (r2.className = e3.className), e3.innerHTML && e3.dompurify && (r2.innerHTML = e3.dompurify.sanitize(e3.innerHTML)), e3.style) r2.style[n3] = e3.style[n3];
        return r2;
      }, o2 = function(t3, e3) {
        for (var r2 = 3 === t3.nodeType ? document.createTextNode(t3.nodeValue) : t3.cloneNode(false), n3 = t3.firstChild; n3; n3 = n3.nextSibling) true !== e3 && 1 === n3.nodeType && "SCRIPT" === n3.nodeName || r2.appendChild(o2(n3, e3));
        return 1 === t3.nodeType && ("CANVAS" === t3.nodeName ? (r2.width = t3.width, r2.height = t3.height, r2.getContext("2d").drawImage(t3, 0, 0)) : "TEXTAREA" !== t3.nodeName && "SELECT" !== t3.nodeName || (r2.value = t3.value), r2.addEventListener("load", function() {
          r2.scrollTop = t3.scrollTop, r2.scrollLeft = t3.scrollLeft;
        }, true)), r2;
      }, s2 = function t3(e3) {
        var r2 = Object.assign(t3.convert(Promise.resolve()), JSON.parse(JSON.stringify(t3.template))), n3 = t3.convert(Promise.resolve(), r2);
        return (n3 = n3.setProgress(1, t3, 1, [t3])).set(e3);
      };
      (s2.prototype = Object.create(Promise.prototype)).constructor = s2, s2.convert = function(t3, e3) {
        return t3.__proto__ = e3 || s2.prototype, t3;
      }, s2.template = { prop: { src: null, container: null, overlay: null, canvas: null, img: null, pdf: null, pageSize: null, callback: function() {
      } }, progress: { val: 0, state: null, n: 0, stack: [] }, opt: { filename: "file.pdf", margin: [0, 0, 0, 0], enableLinks: true, x: 0, y: 0, html2canvas: {}, jsPDF: {}, backgroundColor: "transparent" } }, s2.prototype.from = function(t3, e3) {
        return this.then(function() {
          switch (e3 = e3 || (function(t4) {
            switch (i2(t4)) {
              case "string":
                return "string";
              case "element":
                return "canvas" === t4.nodeName.toLowerCase() ? "canvas" : "element";
              default:
                return "unknown";
            }
          })(t3), e3) {
            case "string":
              return this.then(n2).then(function(e4) {
                return this.set({ src: a2("div", { innerHTML: t3, dompurify: e4 }) });
              });
            case "element":
              return this.set({ src: t3 });
            case "canvas":
              return this.set({ canvas: t3 });
            case "img":
              return this.set({ img: t3 });
            default:
              return this.error("Unknown source type.");
          }
        });
      }, s2.prototype.to = function(t3) {
        switch (t3) {
          case "container":
            return this.toContainer();
          case "canvas":
            return this.toCanvas();
          case "img":
            return this.toImg();
          case "pdf":
            return this.toPdf();
          default:
            return this.error("Invalid target.");
        }
      }, s2.prototype.toContainer = function() {
        return this.thenList([function() {
          return this.prop.src || this.error("Cannot duplicate - no source HTML.");
        }, function() {
          return this.prop.pageSize || this.setPageSize();
        }]).then(function() {
          var t3 = { position: "relative", display: "inline-block", width: ("number" != typeof this.opt.width || isNaN(this.opt.width) || "number" != typeof this.opt.windowWidth || isNaN(this.opt.windowWidth) ? Math.max(this.prop.src.clientWidth, this.prop.src.scrollWidth, this.prop.src.offsetWidth) : this.opt.windowWidth) + "px", left: 0, right: 0, top: 0, margin: "auto", backgroundColor: this.opt.backgroundColor }, e3 = o2(this.prop.src, this.opt.html2canvas.javascriptEnabled);
          "BODY" === e3.tagName && (t3.height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) + "px"), this.prop.overlay = a2("div", { className: "html2pdf__overlay", style: { position: "fixed", overflow: "hidden", zIndex: 1e3, left: "-100000px", right: 0, bottom: 0, top: 0 } }), this.prop.container = a2("div", { className: "html2pdf__container", style: t3 }), this.prop.container.appendChild(e3), this.prop.container.firstChild.appendChild(a2("div", { style: { clear: "both", border: "0 none transparent", margin: 0, padding: 0, height: 0 } })), this.prop.container.style.float = "none", this.prop.overlay.appendChild(this.prop.container), document.body.appendChild(this.prop.overlay), this.prop.container.firstChild.style.position = "relative", this.prop.container.height = Math.max(this.prop.container.firstChild.clientHeight, this.prop.container.firstChild.scrollHeight, this.prop.container.firstChild.offsetHeight) + "px";
        });
      }, s2.prototype.toCanvas = function() {
        var t3 = [function() {
          return document.body.contains(this.prop.container) || this.toContainer();
        }];
        return this.thenList(t3).then(e2).then(function(t4) {
          var e3 = Object.assign({}, this.opt.html2canvas);
          return delete e3.onrendered, t4(this.prop.container, e3);
        }).then(function(t4) {
          (this.opt.html2canvas.onrendered || function() {
          })(t4), this.prop.canvas = t4, document.body.removeChild(this.prop.overlay);
        });
      }, s2.prototype.toContext2d = function() {
        var t3 = [function() {
          return document.body.contains(this.prop.container) || this.toContainer();
        }];
        return this.thenList(t3).then(e2).then(function(t4) {
          var e3 = this.opt.jsPDF, r2 = this.opt.fontFaces, n3 = "number" != typeof this.opt.width || isNaN(this.opt.width) || "number" != typeof this.opt.windowWidth || isNaN(this.opt.windowWidth) ? 1 : this.opt.width / this.opt.windowWidth, i3 = Object.assign({ async: true, allowTaint: true, scale: n3, scrollX: this.opt.scrollX || 0, scrollY: this.opt.scrollY || 0, backgroundColor: "#ffffff", imageTimeout: 15e3, logging: true, proxy: null, removeContainer: true, foreignObjectRendering: false, useCORS: false }, this.opt.html2canvas);
          if (delete i3.onrendered, e3.context2d.autoPaging = void 0 === this.opt.autoPaging || this.opt.autoPaging, e3.context2d.posX = this.opt.x, e3.context2d.posY = this.opt.y, e3.context2d.margin = this.opt.margin, e3.context2d.fontFaces = r2, r2) for (var a3 = 0; a3 < r2.length; ++a3) {
            var o3 = r2[a3], s3 = o3.src.find(function(t5) {
              return "truetype" === t5.format;
            });
            s3 && e3.addFont(s3.url, o3.ref.name, o3.ref.style);
          }
          return i3.windowHeight = i3.windowHeight || 0, i3.windowHeight = 0 == i3.windowHeight ? Math.max(this.prop.container.clientHeight, this.prop.container.scrollHeight, this.prop.container.offsetHeight) : i3.windowHeight, e3.context2d.save(true), t4(this.prop.container, i3);
        }).then(function(t4) {
          this.opt.jsPDF.context2d.restore(true), (this.opt.html2canvas.onrendered || function() {
          })(t4), this.prop.canvas = t4, document.body.removeChild(this.prop.overlay);
        });
      }, s2.prototype.toImg = function() {
        return this.thenList([function() {
          return this.prop.canvas || this.toCanvas();
        }]).then(function() {
          var t3 = this.prop.canvas.toDataURL("image/" + this.opt.image.type, this.opt.image.quality);
          this.prop.img = document.createElement("img"), this.prop.img.src = t3;
        });
      }, s2.prototype.toPdf = function() {
        return this.thenList([function() {
          return this.toContext2d();
        }]).then(function() {
          this.prop.pdf = this.prop.pdf || this.opt.jsPDF;
        });
      }, s2.prototype.output = function(t3, e3, r2) {
        return "img" === (r2 = r2 || "pdf").toLowerCase() || "image" === r2.toLowerCase() ? this.outputImg(t3, e3) : this.outputPdf(t3, e3);
      }, s2.prototype.outputPdf = function(t3, e3) {
        return this.thenList([function() {
          return this.prop.pdf || this.toPdf();
        }]).then(function() {
          return this.prop.pdf.output(t3, e3);
        });
      }, s2.prototype.outputImg = function(t3) {
        return this.thenList([function() {
          return this.prop.img || this.toImg();
        }]).then(function() {
          switch (t3) {
            case void 0:
            case "img":
              return this.prop.img;
            case "datauristring":
            case "dataurlstring":
              return this.prop.img.src;
            case "datauri":
            case "dataurl":
              return document.location.href = this.prop.img.src;
            default:
              throw 'Image output type "' + t3 + '" is not supported.';
          }
        });
      }, s2.prototype.save = function(t3) {
        return this.thenList([function() {
          return this.prop.pdf || this.toPdf();
        }]).set(t3 ? { filename: t3 } : null).then(function() {
          this.prop.pdf.save(this.opt.filename);
        });
      }, s2.prototype.doCallback = function() {
        return this.thenList([function() {
          return this.prop.pdf || this.toPdf();
        }]).then(function() {
          this.prop.callback(this.prop.pdf);
        });
      }, s2.prototype.set = function(t3) {
        if ("object" !== i2(t3)) return this;
        var e3 = Object.keys(t3 || {}).map(function(e4) {
          if (e4 in s2.template.prop) return function() {
            this.prop[e4] = t3[e4];
          };
          switch (e4) {
            case "margin":
              return this.setMargin.bind(this, t3.margin);
            case "jsPDF":
              return function() {
                return this.opt.jsPDF = t3.jsPDF, this.setPageSize();
              };
            case "pageSize":
              return this.setPageSize.bind(this, t3.pageSize);
            default:
              return function() {
                this.opt[e4] = t3[e4];
              };
          }
        }, this);
        return this.then(function() {
          return this.thenList(e3);
        });
      }, s2.prototype.get = function(t3, e3) {
        return this.then(function() {
          var r2 = t3 in s2.template.prop ? this.prop[t3] : this.opt[t3];
          return e3 ? e3(r2) : r2;
        });
      }, s2.prototype.setMargin = function(t3) {
        return this.then(function() {
          switch (i2(t3)) {
            case "number":
              t3 = [t3, t3, t3, t3];
            case "array":
              if (2 === t3.length && (t3 = [t3[0], t3[1], t3[0], t3[1]]), 4 === t3.length) break;
            default:
              return this.error("Invalid margin array.");
          }
          this.opt.margin = t3;
        }).then(this.setPageSize);
      }, s2.prototype.setPageSize = function(t3) {
        function e3(t4, e4) {
          return Math.floor(t4 * e4 / 72 * 96);
        }
        return this.then(function() {
          (t3 = t3 || j.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner") || (t3.inner = { width: t3.width - this.opt.margin[1] - this.opt.margin[3], height: t3.height - this.opt.margin[0] - this.opt.margin[2] }, t3.inner.px = { width: e3(t3.inner.width, t3.k), height: e3(t3.inner.height, t3.k) }, t3.inner.ratio = t3.inner.height / t3.inner.width), this.prop.pageSize = t3;
        });
      }, s2.prototype.setProgress = function(t3, e3, r2, n3) {
        return null != t3 && (this.progress.val = t3), null != e3 && (this.progress.state = e3), null != r2 && (this.progress.n = r2), null != n3 && (this.progress.stack = n3), this.progress.ratio = this.progress.val / this.progress.state, this;
      }, s2.prototype.updateProgress = function(t3, e3, r2, n3) {
        return this.setProgress(t3 ? this.progress.val + t3 : null, e3 || null, r2 ? this.progress.n + r2 : null, n3 ? this.progress.stack.concat(n3) : null);
      }, s2.prototype.then = function(t3, e3) {
        var r2 = this;
        return this.thenCore(t3, e3, function(t4, e4) {
          return r2.updateProgress(null, null, 1, [t4]), Promise.prototype.then.call(this, function(e5) {
            return r2.updateProgress(null, t4), e5;
          }).then(t4, e4).then(function(t5) {
            return r2.updateProgress(1), t5;
          });
        });
      }, s2.prototype.thenCore = function(t3, e3, r2) {
        r2 = r2 || Promise.prototype.then;
        var n3 = this;
        t3 && (t3 = t3.bind(n3)), e3 && (e3 = e3.bind(n3));
        var i3 = -1 !== Promise.toString().indexOf("[native code]") && "Promise" === Promise.name ? n3 : s2.convert(Object.assign({}, n3), Promise.prototype), a3 = r2.call(i3, t3, e3);
        return s2.convert(a3, n3.__proto__);
      }, s2.prototype.thenExternal = function(t3, e3) {
        return Promise.prototype.then.call(this, t3, e3);
      }, s2.prototype.thenList = function(t3) {
        var e3 = this;
        return t3.forEach(function(t4) {
          e3 = e3.thenCore(t4);
        }), e3;
      }, s2.prototype.catch = function(t3) {
        t3 && (t3 = t3.bind(this));
        var e3 = Promise.prototype.catch.call(this, t3);
        return s2.convert(e3, this);
      }, s2.prototype.catchExternal = function(t3) {
        return Promise.prototype.catch.call(this, t3);
      }, s2.prototype.error = function(t3) {
        return this.then(function() {
          throw new Error(t3);
        });
      }, s2.prototype.using = s2.prototype.set, s2.prototype.saveAs = s2.prototype.save, s2.prototype.export = s2.prototype.output, s2.prototype.run = s2.prototype.then, j.getPageSize = function(t3, e3, r2) {
        if ("object" == typeof t3) {
          var n3 = t3;
          t3 = n3.orientation, e3 = n3.unit || e3, r2 = n3.format || r2;
        }
        e3 = e3 || "mm", r2 = r2 || "a4", t3 = ("" + (t3 || "P")).toLowerCase();
        var i3, a3 = ("" + r2).toLowerCase(), o3 = { a0: [2383.94, 3370.39], a1: [1683.78, 2383.94], a2: [1190.55, 1683.78], a3: [841.89, 1190.55], a4: [595.28, 841.89], a5: [419.53, 595.28], a6: [297.64, 419.53], a7: [209.76, 297.64], a8: [147.4, 209.76], a9: [104.88, 147.4], a10: [73.7, 104.88], b0: [2834.65, 4008.19], b1: [2004.09, 2834.65], b2: [1417.32, 2004.09], b3: [1000.63, 1417.32], b4: [708.66, 1000.63], b5: [498.9, 708.66], b6: [354.33, 498.9], b7: [249.45, 354.33], b8: [175.75, 249.45], b9: [124.72, 175.75], b10: [87.87, 124.72], c0: [2599.37, 3676.54], c1: [1836.85, 2599.37], c2: [1298.27, 1836.85], c3: [918.43, 1298.27], c4: [649.13, 918.43], c5: [459.21, 649.13], c6: [323.15, 459.21], c7: [229.61, 323.15], c8: [161.57, 229.61], c9: [113.39, 161.57], c10: [79.37, 113.39], dl: [311.81, 623.62], letter: [612, 792], "government-letter": [576, 756], legal: [612, 1008], "junior-legal": [576, 360], ledger: [1224, 792], tabloid: [792, 1224], "credit-card": [153, 243] };
        switch (e3) {
          case "pt":
            i3 = 1;
            break;
          case "mm":
            i3 = 72 / 25.4;
            break;
          case "cm":
            i3 = 72 / 2.54;
            break;
          case "in":
            i3 = 72;
            break;
          case "px":
            i3 = 0.75;
            break;
          case "pc":
          case "em":
            i3 = 12;
            break;
          case "ex":
            i3 = 6;
            break;
          default:
            throw "Invalid unit: " + e3;
        }
        var s3, c2 = 0, u2 = 0;
        if (o3.hasOwnProperty(a3)) c2 = o3[a3][1] / i3, u2 = o3[a3][0] / i3;
        else try {
          c2 = r2[1], u2 = r2[0];
        } catch (l2) {
          throw new Error("Invalid format: " + r2);
        }
        if ("p" === t3 || "portrait" === t3) t3 = "p", u2 > c2 && (s3 = u2, u2 = c2, c2 = s3);
        else {
          if ("l" !== t3 && "landscape" !== t3) throw "Invalid orientation: " + t3;
          t3 = "l", c2 > u2 && (s3 = u2, u2 = c2, c2 = s3);
        }
        return { width: u2, height: c2, unit: e3, k: i3, orientation: t3 };
      }, t2.html = function(t3, e3) {
        (e3 = e3 || {}).callback = e3.callback || function() {
        }, e3.html2canvas = e3.html2canvas || {}, e3.html2canvas.canvas = e3.html2canvas.canvas || this.canvas, e3.jsPDF = e3.jsPDF || this, e3.fontFaces = e3.fontFaces ? e3.fontFaces.map(St) : null;
        var r2 = new s2(e3);
        return e3.worker ? r2 : r2.from(t3).doCallback();
      };
    })(j.API), j.API.addJS = function(t2) {
      return qt = t2, this.internal.events.subscribe("postPutResources", function() {
        Ot = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/Names [(EmbeddedJS) " + (Ot + 1) + " 0 R]"), this.internal.out(">>"), this.internal.out("endobj"), Bt = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /JavaScript"), this.internal.out("/JS (" + qt + ")"), this.internal.out(">>"), this.internal.out("endobj");
      }), this.internal.events.subscribe("putCatalog", function() {
        void 0 !== Ot && void 0 !== Bt && this.internal.out("/Names <</JavaScript " + Ot + " 0 R>>");
      }), this;
    }, /**
     * @license
     * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
    (function(t2) {
      var e2;
      t2.events.push(["postPutResources", function() {
        var t3 = this, r2 = /^(\d+) 0 obj$/;
        if (this.outline.root.children.length > 0) for (var n2 = t3.outline.render().split(/\r\n/), i2 = 0; i2 < n2.length; i2++) {
          var a2 = n2[i2], o2 = r2.exec(a2);
          if (null != o2) {
            var s2 = o2[1];
            t3.internal.newObjectDeferredBegin(s2, false);
          }
          t3.internal.write(a2);
        }
        if (this.outline.createNamedDestinations) {
          var c2 = this.internal.pages.length, u2 = [];
          for (i2 = 0; i2 < c2; i2++) {
            var l2 = t3.internal.newObject();
            u2.push(l2);
            var h2 = t3.internal.getPageInfo(i2 + 1);
            t3.internal.write("<< /D[" + h2.objId + " 0 R /XYZ null null null]>> endobj");
          }
          var f2 = t3.internal.newObject();
          for (t3.internal.write("<< /Names [ "), i2 = 0; i2 < u2.length; i2++) t3.internal.write("(page_" + (i2 + 1) + ")" + u2[i2] + " 0 R");
          t3.internal.write(" ] >>", "endobj"), e2 = t3.internal.newObject(), t3.internal.write("<< /Dests " + f2 + " 0 R"), t3.internal.write(">>", "endobj");
        }
      }]), t2.events.push(["putCatalog", function() {
        var t3 = this;
        t3.outline.root.children.length > 0 && (t3.internal.write("/Outlines", this.outline.makeRef(this.outline.root)), this.outline.createNamedDestinations && t3.internal.write("/Names " + e2 + " 0 R"));
      }]), t2.events.push(["initialized", function() {
        var t3 = this;
        t3.outline = { createNamedDestinations: false, root: { children: [] } }, t3.outline.add = function(t4, e3, r2) {
          var n2 = { title: e3, options: r2, children: [] };
          return null == t4 && (t4 = this.root), t4.children.push(n2), n2;
        }, t3.outline.render = function() {
          return this.ctx = {}, this.ctx.val = "", this.ctx.pdf = t3, this.genIds_r(this.root), this.renderRoot(this.root), this.renderItems(this.root), this.ctx.val;
        }, t3.outline.genIds_r = function(e3) {
          e3.id = t3.internal.newObjectDeferred();
          for (var r2 = 0; r2 < e3.children.length; r2++) this.genIds_r(e3.children[r2]);
        }, t3.outline.renderRoot = function(t4) {
          this.objStart(t4), this.line("/Type /Outlines"), t4.children.length > 0 && (this.line("/First " + this.makeRef(t4.children[0])), this.line("/Last " + this.makeRef(t4.children[t4.children.length - 1]))), this.line("/Count " + this.count_r({ count: 0 }, t4)), this.objEnd();
        }, t3.outline.renderItems = function(e3) {
          for (var r2 = this.ctx.pdf.internal.getVerticalCoordinateString, n2 = 0; n2 < e3.children.length; n2++) {
            var i2 = e3.children[n2];
            this.objStart(i2), this.line("/Title " + this.makeString(i2.title)), this.line("/Parent " + this.makeRef(e3)), n2 > 0 && this.line("/Prev " + this.makeRef(e3.children[n2 - 1])), n2 < e3.children.length - 1 && this.line("/Next " + this.makeRef(e3.children[n2 + 1])), i2.children.length > 0 && (this.line("/First " + this.makeRef(i2.children[0])), this.line("/Last " + this.makeRef(i2.children[i2.children.length - 1])));
            var a2 = this.count = this.count_r({ count: 0 }, i2);
            if (a2 > 0 && this.line("/Count " + a2), i2.options && i2.options.pageNumber) {
              var o2 = t3.internal.getPageInfo(i2.options.pageNumber);
              this.line("/Dest [" + o2.objId + " 0 R /XYZ 0 " + r2(0) + " 0]");
            }
            this.objEnd();
          }
          for (var s2 = 0; s2 < e3.children.length; s2++) this.renderItems(e3.children[s2]);
        }, t3.outline.line = function(t4) {
          this.ctx.val += t4 + "\r\n";
        }, t3.outline.makeRef = function(t4) {
          return t4.id + " 0 R";
        }, t3.outline.makeString = function(e3) {
          return "(" + t3.internal.pdfEscape(e3) + ")";
        }, t3.outline.objStart = function(t4) {
          this.ctx.val += "\r\n" + t4.id + " 0 obj\r\n<<\r\n";
        }, t3.outline.objEnd = function() {
          this.ctx.val += ">> \r\nendobj\r\n";
        }, t3.outline.count_r = function(t4, e3) {
          for (var r2 = 0; r2 < e3.children.length; r2++) t4.count++, this.count_r(t4, e3.children[r2]);
          return t4.count;
        };
      }]);
    })(j.API), /**
     * @license
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
    (function(t2) {
      var e2 = [192, 193, 194, 195, 196, 197, 198, 199];
      t2.processJPEG = function(t3, r2, n2, i2, a2, o2) {
        var s2, c2 = this.decode.DCT_DECODE, u2 = null;
        if ("string" == typeof t3 || this.__addimage__.isArrayBuffer(t3) || this.__addimage__.isArrayBufferView(t3)) {
          switch (t3 = a2 || t3, t3 = this.__addimage__.isArrayBuffer(t3) ? new Uint8Array(t3) : t3, s2 = (function(t4) {
            for (var r3, n3 = 256 * t4.charCodeAt(4) + t4.charCodeAt(5), i3 = t4.length, a3 = { width: 0, height: 0, numcomponents: 1 }, o3 = 4; o3 < i3; o3 += 2) {
              if (o3 += n3, -1 !== e2.indexOf(t4.charCodeAt(o3 + 1))) {
                r3 = 256 * t4.charCodeAt(o3 + 5) + t4.charCodeAt(o3 + 6), a3 = { width: 256 * t4.charCodeAt(o3 + 7) + t4.charCodeAt(o3 + 8), height: r3, numcomponents: t4.charCodeAt(o3 + 9) };
                break;
              }
              n3 = 256 * t4.charCodeAt(o3 + 2) + t4.charCodeAt(o3 + 3);
            }
            return a3;
          })(t3 = this.__addimage__.isArrayBufferView(t3) ? this.__addimage__.arrayBufferToBinaryString(t3) : t3), s2.numcomponents) {
            case 1:
              o2 = this.color_spaces.DEVICE_GRAY;
              break;
            case 4:
              o2 = this.color_spaces.DEVICE_CMYK;
              break;
            case 3:
              o2 = this.color_spaces.DEVICE_RGB;
          }
          u2 = { data: t3, width: s2.width, height: s2.height, colorSpace: o2, bitsPerComponent: 8, filter: c2, index: r2, alias: n2 };
        }
        return u2;
      };
    })(j.API), /**
     * @license
     *
     * Copyright (c) 2014 James Robb, https://github.com/jamesbrobb
     *
     * Permission is hereby granted, free of charge, to any person obtaining
     * a copy of this software and associated documentation files (the
     * "Software"), to deal in the Software without restriction, including
     * without limitation the rights to use, copy, modify, merge, publish,
     * distribute, sublicense, and/or sell copies of the Software, and to
     * permit persons to whom the Software is furnished to do so, subject to
     * the following conditions:
     *
     * The above copyright notice and this permission notice shall be
     * included in all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
     * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
     * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
     * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
     * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
     * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
     * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
     * ====================================================================
     */
    j.API.processPNG = function(r2, n2, i2, a2) {
      if (this.__addimage__.isArrayBuffer(r2) && (r2 = new Uint8Array(r2)), !this.__addimage__.isArrayBufferView(r2)) return;
      const o2 = e.decode(r2, { checkCrc: true }), { width: s2, height: c2, channels: u2, palette: l2, depth: h2 } = o2;
      let f2;
      f2 = l2 && 1 === u2 ? (function(t2) {
        const { width: e2, height: r3, data: n3, palette: i3, depth: a3 } = t2;
        let o3, s3 = false, c3 = [], u3 = [], l3 = false;
        let h3 = 0;
        for (let f3 = 0; f3 < i3.length; f3++) {
          const [t3, e3, r4, n4] = i3[f3];
          c3.push(t3, e3, r4), null != n4 && (0 === n4 ? (h3++, u3.length < 1 && u3.push(f3)) : n4 < 255 && (l3 = true));
        }
        if (l3 || h3 > 1) {
          s3 = true, u3 = void 0;
          const t3 = e2 * r3;
          o3 = new Uint8Array(t3);
          const c4 = new DataView(n3.buffer);
          for (let e3 = 0; e3 < t3; e3++) {
            const t4 = Kt(c4, e3, a3), [, , , r4] = i3[t4];
            o3[e3] = r4;
          }
        } else 0 === h3 && (u3 = void 0);
        return { colorSpace: "Indexed", colorsPerPixel: 1, sMaskBitsPerComponent: s3 ? 8 : void 0, colorBytes: n3, alphaBytes: o3, needSMask: s3, palette: c3, mask: u3 };
      })(o2) : 2 === u2 || 4 === u2 ? (function(t2) {
        const { data: e2, width: r3, height: n3, channels: i3, depth: a3 } = t2, o3 = 2 === i3 ? "DeviceGray" : "DeviceRGB", s3 = i3 - 1, c3 = r3 * n3, u3 = s3, l3 = c3 * u3, h3 = 1 * c3, f3 = Math.ceil(l3 * a3 / 8), d3 = Math.ceil(h3 * a3 / 8), p3 = new Uint8Array(f3), g3 = new Uint8Array(d3), m3 = new DataView(e2.buffer), v3 = new DataView(p3.buffer), b3 = new DataView(g3.buffer);
        let y3 = false;
        for (let w3 = 0; w3 < c3; w3++) {
          const t3 = w3 * i3;
          for (let r4 = 0; r4 < u3; r4++) $t(v3, Kt(m3, t3 + r4, a3), w3 * u3 + r4, a3);
          const e3 = Kt(m3, t3 + u3, a3);
          e3 < (1 << a3) - 1 && (y3 = true), $t(b3, e3, 1 * w3, a3);
        }
        return { colorSpace: o3, colorsPerPixel: s3, sMaskBitsPerComponent: y3 ? a3 : void 0, colorBytes: p3, alphaBytes: g3, needSMask: y3 };
      })(o2) : (function(t2) {
        const { data: e2, channels: r3 } = t2, n3 = 1 === r3 ? "DeviceGray" : "DeviceRGB", i3 = "DeviceGray" === n3 ? 1 : 3;
        let a3;
        return a3 = e2 instanceof Uint16Array ? (function(t3) {
          const e3 = t3.length, r4 = new Uint8Array(2 * e3), n4 = new DataView(r4.buffer, r4.byteOffset, r4.byteLength);
          for (let i4 = 0; i4 < e3; i4++) n4.setUint16(2 * i4, t3[i4], false);
          return r4;
        })(e2) : e2, { colorSpace: n3, colorsPerPixel: i3, colorBytes: a3, needSMask: false };
      })(o2);
      const { colorSpace: d2, colorsPerPixel: p2, sMaskBitsPerComponent: g2, colorBytes: m2, alphaBytes: v2, needSMask: b2, palette: y2, mask: w2 } = f2;
      let N2, L2, x2, A2 = null;
      return a2 !== j.API.image_compression.NONE && "function" == typeof t.zlibSync ? (A2 = (function(t2) {
        let e2;
        switch (t2) {
          case j.API.image_compression.FAST:
            e2 = 11;
            break;
          case j.API.image_compression.MEDIUM:
            e2 = 13;
            break;
          case j.API.image_compression.SLOW:
            e2 = 14;
            break;
          default:
            e2 = 12;
        }
        return e2;
      })(a2), N2 = this.decode.FLATE_DECODE, L2 = `/Predictor ${A2} /Colors ${p2} /BitsPerComponent ${h2} /Columns ${s2}`, r2 = Ut(m2, Math.ceil(s2 * p2 * h2 / 8), p2, h2, a2), b2 && (x2 = Ut(v2, Math.ceil(s2 * g2 / 8), 1, g2, a2))) : (N2 = void 0, L2 = void 0, r2 = m2, b2 && (x2 = v2)), (this.__addimage__.isArrayBuffer(r2) || this.__addimage__.isArrayBufferView(r2)) && (r2 = this.__addimage__.arrayBufferToBinaryString(r2)), (x2 && this.__addimage__.isArrayBuffer(x2) || this.__addimage__.isArrayBufferView(x2)) && (x2 = this.__addimage__.arrayBufferToBinaryString(x2)), { alias: i2, data: r2, index: n2, filter: N2, decodeParameters: L2, transparency: w2, palette: y2, sMask: x2, predictor: A2, width: s2, height: c2, bitsPerComponent: h2, sMaskBitsPerComponent: g2, colorSpace: d2 };
    }, (function(t2) {
      t2.processGIF89A = function(e2, r2, n2, i2) {
        var a2 = new Qt(e2), o2 = a2.width, s2 = a2.height, c2 = [];
        a2.decodeAndBlitFrameRGBA(0, c2);
        var u2 = { data: c2, width: o2, height: s2 }, l2 = new ee(100).encode(u2, 100);
        return t2.processJPEG.call(this, l2, r2, n2, i2);
      }, t2.processGIF87A = t2.processGIF89A;
    })(j.API), re.prototype.parseHeader = function() {
      if (this.fileSize = this.datav.getUint32(this.pos, true), this.pos += 4, this.reserved = this.datav.getUint32(this.pos, true), this.pos += 4, this.offset = this.datav.getUint32(this.pos, true), this.pos += 4, this.headerSize = this.datav.getUint32(this.pos, true), this.pos += 4, this.width = this.datav.getUint32(this.pos, true), this.pos += 4, this.height = this.datav.getInt32(this.pos, true), this.pos += 4, this.planes = this.datav.getUint16(this.pos, true), this.pos += 2, this.bitPP = this.datav.getUint16(this.pos, true), this.pos += 2, this.compress = this.datav.getUint32(this.pos, true), this.pos += 4, this.rawSize = this.datav.getUint32(this.pos, true), this.pos += 4, this.hr = this.datav.getUint32(this.pos, true), this.pos += 4, this.vr = this.datav.getUint32(this.pos, true), this.pos += 4, this.colors = this.datav.getUint32(this.pos, true), this.pos += 4, this.importantColors = this.datav.getUint32(this.pos, true), this.pos += 4, 16 === this.bitPP && this.is_with_alpha && (this.bitPP = 15), this.bitPP < 15) {
        var t2 = 0 === this.colors ? 1 << this.bitPP : this.colors;
        this.palette = new Array(t2);
        for (var e2 = 0; e2 < t2; e2++) {
          var r2 = this.datav.getUint8(this.pos++, true), n2 = this.datav.getUint8(this.pos++, true), i2 = this.datav.getUint8(this.pos++, true), a2 = this.datav.getUint8(this.pos++, true);
          this.palette[e2] = { red: i2, green: n2, blue: r2, quad: a2 };
        }
      }
      this.height < 0 && (this.height *= -1, this.bottom_up = false);
    }, re.prototype.parseBGR = function() {
      this.pos = this.offset;
      try {
        var t2 = "bit" + this.bitPP, e2 = this.width * this.height * 4;
        this.data = new Uint8Array(e2), this[t2]();
      } catch (r2) {
        s.log("bit decode error:" + r2);
      }
    }, re.prototype.bit1 = function() {
      var t2, e2 = Math.ceil(this.width / 8), r2 = e2 % 4;
      for (t2 = this.height - 1; t2 >= 0; t2--) {
        for (var n2 = this.bottom_up ? t2 : this.height - 1 - t2, i2 = 0; i2 < e2; i2++) for (var a2 = this.datav.getUint8(this.pos++, true), o2 = n2 * this.width * 4 + 8 * i2 * 4, s2 = 0; s2 < 8 && 8 * i2 + s2 < this.width; s2++) {
          var c2 = this.palette[a2 >> 7 - s2 & 1];
          this.data[o2 + 4 * s2] = c2.blue, this.data[o2 + 4 * s2 + 1] = c2.green, this.data[o2 + 4 * s2 + 2] = c2.red, this.data[o2 + 4 * s2 + 3] = 255;
        }
        0 !== r2 && (this.pos += 4 - r2);
      }
    }, re.prototype.bit4 = function() {
      for (var t2 = Math.ceil(this.width / 2), e2 = t2 % 4, r2 = this.height - 1; r2 >= 0; r2--) {
        for (var n2 = this.bottom_up ? r2 : this.height - 1 - r2, i2 = 0; i2 < t2; i2++) {
          var a2 = this.datav.getUint8(this.pos++, true), o2 = n2 * this.width * 4 + 2 * i2 * 4, s2 = a2 >> 4, c2 = 15 & a2, u2 = this.palette[s2];
          if (this.data[o2] = u2.blue, this.data[o2 + 1] = u2.green, this.data[o2 + 2] = u2.red, this.data[o2 + 3] = 255, 2 * i2 + 1 >= this.width) break;
          u2 = this.palette[c2], this.data[o2 + 4] = u2.blue, this.data[o2 + 4 + 1] = u2.green, this.data[o2 + 4 + 2] = u2.red, this.data[o2 + 4 + 3] = 255;
        }
        0 !== e2 && (this.pos += 4 - e2);
      }
    }, re.prototype.bit8 = function() {
      for (var t2 = this.width % 4, e2 = this.height - 1; e2 >= 0; e2--) {
        for (var r2 = this.bottom_up ? e2 : this.height - 1 - e2, n2 = 0; n2 < this.width; n2++) {
          var i2 = this.datav.getUint8(this.pos++, true), a2 = r2 * this.width * 4 + 4 * n2;
          if (i2 < this.palette.length) {
            var o2 = this.palette[i2];
            this.data[a2] = o2.red, this.data[a2 + 1] = o2.green, this.data[a2 + 2] = o2.blue, this.data[a2 + 3] = 255;
          } else this.data[a2] = 255, this.data[a2 + 1] = 255, this.data[a2 + 2] = 255, this.data[a2 + 3] = 255;
        }
        0 !== t2 && (this.pos += 4 - t2);
      }
    }, re.prototype.bit15 = function() {
      for (var t2 = this.width % 3, e2 = parseInt("11111", 2), r2 = this.height - 1; r2 >= 0; r2--) {
        for (var n2 = this.bottom_up ? r2 : this.height - 1 - r2, i2 = 0; i2 < this.width; i2++) {
          var a2 = this.datav.getUint16(this.pos, true);
          this.pos += 2;
          var o2 = (a2 & e2) / e2 * 255 | 0, s2 = (a2 >> 5 & e2) / e2 * 255 | 0, c2 = (a2 >> 10 & e2) / e2 * 255 | 0, u2 = a2 >> 15 ? 255 : 0, l2 = n2 * this.width * 4 + 4 * i2;
          this.data[l2] = c2, this.data[l2 + 1] = s2, this.data[l2 + 2] = o2, this.data[l2 + 3] = u2;
        }
        this.pos += t2;
      }
    }, re.prototype.bit16 = function() {
      for (var t2 = this.width % 3, e2 = parseInt("11111", 2), r2 = parseInt("111111", 2), n2 = this.height - 1; n2 >= 0; n2--) {
        for (var i2 = this.bottom_up ? n2 : this.height - 1 - n2, a2 = 0; a2 < this.width; a2++) {
          var o2 = this.datav.getUint16(this.pos, true);
          this.pos += 2;
          var s2 = (o2 & e2) / e2 * 255 | 0, c2 = (o2 >> 5 & r2) / r2 * 255 | 0, u2 = (o2 >> 11) / e2 * 255 | 0, l2 = i2 * this.width * 4 + 4 * a2;
          this.data[l2] = u2, this.data[l2 + 1] = c2, this.data[l2 + 2] = s2, this.data[l2 + 3] = 255;
        }
        this.pos += t2;
      }
    }, re.prototype.bit24 = function() {
      for (var t2 = this.height - 1; t2 >= 0; t2--) {
        for (var e2 = this.bottom_up ? t2 : this.height - 1 - t2, r2 = 0; r2 < this.width; r2++) {
          var n2 = this.datav.getUint8(this.pos++, true), i2 = this.datav.getUint8(this.pos++, true), a2 = this.datav.getUint8(this.pos++, true), o2 = e2 * this.width * 4 + 4 * r2;
          this.data[o2] = a2, this.data[o2 + 1] = i2, this.data[o2 + 2] = n2, this.data[o2 + 3] = 255;
        }
        this.pos += this.width % 4;
      }
    }, re.prototype.bit32 = function() {
      for (var t2 = this.height - 1; t2 >= 0; t2--) for (var e2 = this.bottom_up ? t2 : this.height - 1 - t2, r2 = 0; r2 < this.width; r2++) {
        var n2 = this.datav.getUint8(this.pos++, true), i2 = this.datav.getUint8(this.pos++, true), a2 = this.datav.getUint8(this.pos++, true), o2 = this.datav.getUint8(this.pos++, true), s2 = e2 * this.width * 4 + 4 * r2;
        this.data[s2] = a2, this.data[s2 + 1] = i2, this.data[s2 + 2] = n2, this.data[s2 + 3] = o2;
      }
    }, re.prototype.getData = function() {
      return this.data;
    }, /**
     * @license
     * Copyright (c) 2018 Aras Abbasi
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
    (function(t2) {
      t2.processBMP = function(e2, r2, n2, i2) {
        var a2 = new re(e2, false), o2 = a2.width, s2 = a2.height, c2 = { data: a2.getData(), width: o2, height: s2 }, u2 = new ee(100).encode(c2, 100);
        return t2.processJPEG.call(this, u2, r2, n2, i2);
      };
    })(j.API), ne.prototype.getData = function() {
      return this.data;
    }, /**
     * @license
     * Copyright (c) 2019 Aras Abbasi
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
    (function(t2) {
      t2.processWEBP = function(e2, r2, n2, i2) {
        var a2 = new ne(e2), o2 = a2.width, s2 = a2.height, c2 = { data: a2.getData(), width: o2, height: s2 }, u2 = new ee(100).encode(c2, 100);
        return t2.processJPEG.call(this, u2, r2, n2, i2);
      };
    })(j.API), j.API.processRGBA = function(t2, e2, r2) {
      for (var n2 = t2.data, i2 = n2.length, a2 = new Uint8Array(i2 / 4 * 3), o2 = new Uint8Array(i2 / 4), s2 = 0, c2 = 0, u2 = 0; u2 < i2; u2 += 4) {
        var l2 = n2[u2], h2 = n2[u2 + 1], f2 = n2[u2 + 2], d2 = n2[u2 + 3];
        a2[s2++] = l2, a2[s2++] = h2, a2[s2++] = f2, o2[c2++] = d2;
      }
      var p2 = this.__addimage__.arrayBufferToBinaryString(a2);
      return { alpha: this.__addimage__.arrayBufferToBinaryString(o2), data: p2, index: e2, alias: r2, colorSpace: "DeviceRGB", bitsPerComponent: 8, width: t2.width, height: t2.height };
    }, j.API.setLanguage = function(t2) {
      return void 0 === this.internal.languageSettings && (this.internal.languageSettings = {}, this.internal.languageSettings.isSubscribed = false), void 0 !== { af: "Afrikaans", sq: "Albanian", ar: "Arabic (Standard)", "ar-DZ": "Arabic (Algeria)", "ar-BH": "Arabic (Bahrain)", "ar-EG": "Arabic (Egypt)", "ar-IQ": "Arabic (Iraq)", "ar-JO": "Arabic (Jordan)", "ar-KW": "Arabic (Kuwait)", "ar-LB": "Arabic (Lebanon)", "ar-LY": "Arabic (Libya)", "ar-MA": "Arabic (Morocco)", "ar-OM": "Arabic (Oman)", "ar-QA": "Arabic (Qatar)", "ar-SA": "Arabic (Saudi Arabia)", "ar-SY": "Arabic (Syria)", "ar-TN": "Arabic (Tunisia)", "ar-AE": "Arabic (U.A.E.)", "ar-YE": "Arabic (Yemen)", an: "Aragonese", hy: "Armenian", as: "Assamese", ast: "Asturian", az: "Azerbaijani", eu: "Basque", be: "Belarusian", bn: "Bengali", bs: "Bosnian", br: "Breton", bg: "Bulgarian", my: "Burmese", ca: "Catalan", ch: "Chamorro", ce: "Chechen", zh: "Chinese", "zh-HK": "Chinese (Hong Kong)", "zh-CN": "Chinese (PRC)", "zh-SG": "Chinese (Singapore)", "zh-TW": "Chinese (Taiwan)", cv: "Chuvash", co: "Corsican", cr: "Cree", hr: "Croatian", cs: "Czech", da: "Danish", nl: "Dutch (Standard)", "nl-BE": "Dutch (Belgian)", en: "English", "en-AU": "English (Australia)", "en-BZ": "English (Belize)", "en-CA": "English (Canada)", "en-IE": "English (Ireland)", "en-JM": "English (Jamaica)", "en-NZ": "English (New Zealand)", "en-PH": "English (Philippines)", "en-ZA": "English (South Africa)", "en-TT": "English (Trinidad & Tobago)", "en-GB": "English (United Kingdom)", "en-US": "English (United States)", "en-ZW": "English (Zimbabwe)", eo: "Esperanto", et: "Estonian", fo: "Faeroese", fj: "Fijian", fi: "Finnish", fr: "French (Standard)", "fr-BE": "French (Belgium)", "fr-CA": "French (Canada)", "fr-FR": "French (France)", "fr-LU": "French (Luxembourg)", "fr-MC": "French (Monaco)", "fr-CH": "French (Switzerland)", fy: "Frisian", fur: "Friulian", gd: "Gaelic (Scots)", "gd-IE": "Gaelic (Irish)", gl: "Galacian", ka: "Georgian", de: "German (Standard)", "de-AT": "German (Austria)", "de-DE": "German (Germany)", "de-LI": "German (Liechtenstein)", "de-LU": "German (Luxembourg)", "de-CH": "German (Switzerland)", el: "Greek", gu: "Gujurati", ht: "Haitian", he: "Hebrew", hi: "Hindi", hu: "Hungarian", is: "Icelandic", id: "Indonesian", iu: "Inuktitut", ga: "Irish", it: "Italian (Standard)", "it-CH": "Italian (Switzerland)", ja: "Japanese", kn: "Kannada", ks: "Kashmiri", kk: "Kazakh", km: "Khmer", ky: "Kirghiz", tlh: "Klingon", ko: "Korean", "ko-KP": "Korean (North Korea)", "ko-KR": "Korean (South Korea)", la: "Latin", lv: "Latvian", lt: "Lithuanian", lb: "Luxembourgish", mk: "North Macedonia", ms: "Malay", ml: "Malayalam", mt: "Maltese", mi: "Maori", mr: "Marathi", mo: "Moldavian", nv: "Navajo", ng: "Ndonga", ne: "Nepali", no: "Norwegian", nb: "Norwegian (Bokmal)", nn: "Norwegian (Nynorsk)", oc: "Occitan", or: "Oriya", om: "Oromo", fa: "Persian", "fa-IR": "Persian/Iran", pl: "Polish", pt: "Portuguese", "pt-BR": "Portuguese (Brazil)", pa: "Punjabi", "pa-IN": "Punjabi (India)", "pa-PK": "Punjabi (Pakistan)", qu: "Quechua", rm: "Rhaeto-Romanic", ro: "Romanian", "ro-MO": "Romanian (Moldavia)", ru: "Russian", "ru-MO": "Russian (Moldavia)", sz: "Sami (Lappish)", sg: "Sango", sa: "Sanskrit", sc: "Sardinian", sd: "Sindhi", si: "Singhalese", sr: "Serbian", sk: "Slovak", sl: "Slovenian", so: "Somani", sb: "Sorbian", es: "Spanish", "es-AR": "Spanish (Argentina)", "es-BO": "Spanish (Bolivia)", "es-CL": "Spanish (Chile)", "es-CO": "Spanish (Colombia)", "es-CR": "Spanish (Costa Rica)", "es-DO": "Spanish (Dominican Republic)", "es-EC": "Spanish (Ecuador)", "es-SV": "Spanish (El Salvador)", "es-GT": "Spanish (Guatemala)", "es-HN": "Spanish (Honduras)", "es-MX": "Spanish (Mexico)", "es-NI": "Spanish (Nicaragua)", "es-PA": "Spanish (Panama)", "es-PY": "Spanish (Paraguay)", "es-PE": "Spanish (Peru)", "es-PR": "Spanish (Puerto Rico)", "es-ES": "Spanish (Spain)", "es-UY": "Spanish (Uruguay)", "es-VE": "Spanish (Venezuela)", sx: "Sutu", sw: "Swahili", sv: "Swedish", "sv-FI": "Swedish (Finland)", "sv-SV": "Swedish (Sweden)", ta: "Tamil", tt: "Tatar", te: "Teluga", th: "Thai", tig: "Tigre", ts: "Tsonga", tn: "Tswana", tr: "Turkish", tk: "Turkmen", uk: "Ukrainian", hsb: "Upper Sorbian", ur: "Urdu", ve: "Venda", vi: "Vietnamese", vo: "Volapuk", wa: "Walloon", cy: "Welsh", xh: "Xhosa", ji: "Yiddish", zu: "Zulu" }[t2] && (this.internal.languageSettings.languageCode = t2, false === this.internal.languageSettings.isSubscribed && (this.internal.events.subscribe("putCatalog", function() {
        this.internal.write("/Lang (" + this.internal.languageSettings.languageCode + ")");
      }), this.internal.languageSettings.isSubscribed = true)), this;
    }, /** @license
     * MIT license.
     * Copyright (c) 2012 Willow Systems Corporation, https://github.com/willowsystems
     *               2014 Diego Casorran, https://github.com/diegocr
     *
     * Permission is hereby granted, free of charge, to any person obtaining
     * a copy of this software and associated documentation files (the
     * "Software"), to deal in the Software without restriction, including
     * without limitation the rights to use, copy, modify, merge, publish,
     * distribute, sublicense, and/or sell copies of the Software, and to
     * permit persons to whom the Software is furnished to do so, subject to
     * the following conditions:
     *
     * The above copyright notice and this permission notice shall be
     * included in all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
     * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
     * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
     * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
     * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
     * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
     * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
     * ====================================================================
     */
    Mt = j.API, Et = Mt.getCharWidthsArray = function(t2, e2) {
      var r2, n2, i2 = (e2 = e2 || {}).font || this.internal.getFont(), a2 = e2.fontSize || this.internal.getFontSize(), o2 = e2.charSpace || this.internal.getCharSpace(), s2 = e2.widths ? e2.widths : i2.metadata.Unicode.widths, c2 = s2.fof ? s2.fof : 1, u2 = e2.kerning ? e2.kerning : i2.metadata.Unicode.kerning, l2 = u2.fof ? u2.fof : 1, h2 = false !== e2.doKerning, f2 = 0, d2 = t2.length, p2 = 0, g2 = s2[0] || c2, m2 = [];
      for (r2 = 0; r2 < d2; r2++) n2 = t2.charCodeAt(r2), "function" == typeof i2.metadata.widthOfString ? m2.push((i2.metadata.widthOfGlyph(i2.metadata.characterToGlyph(n2)) + o2 * (1e3 / a2) || 0) / 1e3) : (f2 = h2 && "object" == typeof u2[n2] && !isNaN(parseInt(u2[n2][p2], 10)) ? u2[n2][p2] / l2 : 0, m2.push((s2[n2] || g2) / c2 + f2)), p2 = n2;
      return m2;
    }, Rt = Mt.getStringUnitWidth = function(t2, e2) {
      var r2 = (e2 = e2 || {}).fontSize || this.internal.getFontSize(), n2 = e2.font || this.internal.getFont(), i2 = e2.charSpace || this.internal.getCharSpace();
      return Mt.processArabic && (t2 = Mt.processArabic(t2)), "function" == typeof n2.metadata.widthOfString ? n2.metadata.widthOfString(t2, r2, i2) / r2 : Et.apply(this, arguments).reduce(function(t3, e3) {
        return t3 + e3;
      }, 0);
    }, Dt = function(t2, e2, r2, n2) {
      for (var i2 = [], a2 = 0, o2 = t2.length, s2 = 0; a2 !== o2 && s2 + e2[a2] < r2; ) s2 += e2[a2], a2++;
      i2.push(t2.slice(0, a2));
      var c2 = a2;
      for (s2 = 0; a2 !== o2; ) s2 + e2[a2] > n2 && (i2.push(t2.slice(c2, a2)), s2 = 0, c2 = a2), s2 += e2[a2], a2++;
      return c2 !== a2 && i2.push(t2.slice(c2, a2)), i2;
    }, Tt = function(t2, e2, r2) {
      r2 || (r2 = {});
      var n2, i2, a2, o2, s2, c2, u2, l2 = [], h2 = [l2], f2 = r2.textIndent || 0, d2 = 0, p2 = 0, g2 = t2.split(" "), m2 = Et.apply(this, [" ", r2])[0];
      if (c2 = -1 === r2.lineIndent ? g2[0].length + 2 : r2.lineIndent || 0) {
        var v2 = Array(c2).join(" "), b2 = [];
        g2.map(function(t3) {
          (t3 = t3.split(/\s*\n/)).length > 1 ? b2 = b2.concat(t3.map(function(t4, e3) {
            return (e3 && t4.length ? "\n" : "") + t4;
          })) : b2.push(t3[0]);
        }), g2 = b2, c2 = Rt.apply(this, [v2, r2]);
      }
      for (a2 = 0, o2 = g2.length; a2 < o2; a2++) {
        var y2 = 0;
        if (n2 = g2[a2], c2 && "\n" == n2[0] && (n2 = n2.substr(1), y2 = 1), f2 + d2 + (p2 = (i2 = Et.apply(this, [n2, r2])).reduce(function(t3, e3) {
          return t3 + e3;
        }, 0)) > e2 || y2) {
          if (p2 > e2) {
            for (s2 = Dt.apply(this, [n2, i2, e2 - (f2 + d2), e2]), l2.push(s2.shift()), l2 = [s2.pop()]; s2.length; ) h2.push([s2.shift()]);
            p2 = i2.slice(n2.length - (l2[0] ? l2[0].length : 0)).reduce(function(t3, e3) {
              return t3 + e3;
            }, 0);
          } else l2 = [n2];
          h2.push(l2), f2 = p2 + c2, d2 = m2;
        } else l2.push(n2), f2 += d2 + p2, d2 = m2;
      }
      return u2 = c2 ? function(t3, e3) {
        return (e3 ? v2 : "") + t3.join(" ");
      } : function(t3) {
        return t3.join(" ");
      }, h2.map(u2);
    }, Mt.splitTextToSize = function(t2, e2, r2) {
      var n2, i2 = (r2 = r2 || {}).fontSize || this.internal.getFontSize(), a2 = (function(t3) {
        if (t3.widths && t3.kerning) return { widths: t3.widths, kerning: t3.kerning };
        var e3 = this.internal.getFont(t3.fontName, t3.fontStyle), r3 = "Unicode";
        return e3.metadata[r3] ? { widths: e3.metadata[r3].widths || { 0: 1 }, kerning: e3.metadata[r3].kerning || {} } : { font: e3.metadata, fontSize: this.internal.getFontSize(), charSpace: this.internal.getCharSpace() };
      }).call(this, r2);
      n2 = Array.isArray(t2) ? t2 : String(t2).split(/\r?\n/);
      var o2 = 1 * this.internal.scaleFactor * e2 / i2;
      a2.textIndent = r2.textIndent ? 1 * r2.textIndent * this.internal.scaleFactor / i2 : 0, a2.lineIndent = r2.lineIndent;
      var s2, c2, u2 = [];
      for (s2 = 0, c2 = n2.length; s2 < c2; s2++) u2 = u2.concat(Tt.apply(this, [n2[s2], o2, a2]));
      return u2;
    }, /** @license
     jsPDF standard_fonts_metrics plugin
     * Copyright (c) 2012 Willow Systems Corporation, https://github.com/willowsystems
     * MIT license.
     * Permission is hereby granted, free of charge, to any person obtaining
     * a copy of this software and associated documentation files (the
     * "Software"), to deal in the Software without restriction, including
     * without limitation the rights to use, copy, modify, merge, publish,
     * distribute, sublicense, and/or sell copies of the Software, and to
     * permit persons to whom the Software is furnished to do so, subject to
     * the following conditions:
     * 
     * The above copyright notice and this permission notice shall be
     * included in all copies or substantial portions of the Software.
     * 
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
     * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
     * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
     * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
     * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
     * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
     * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
     * ====================================================================
     */
    (function(t2) {
      t2.__fontmetrics__ = t2.__fontmetrics__ || {};
      for (var e2 = "0123456789abcdef", r2 = "klmnopqrstuvwxyz", n2 = {}, i2 = {}, a2 = 0; a2 < 16; a2++) n2[r2[a2]] = e2[a2], i2[e2[a2]] = r2[a2];
      var o2 = function(t3) {
        return "0x" + parseInt(t3, 10).toString(16);
      }, s2 = t2.__fontmetrics__.compress = function(t3) {
        var e3, r3, n3, a3, c3 = ["{"];
        for (var u3 in t3) {
          if (e3 = t3[u3], isNaN(parseInt(u3, 10)) ? r3 = "'" + u3 + "'" : (u3 = parseInt(u3, 10), r3 = (r3 = o2(u3).slice(2)).slice(0, -1) + i2[r3.slice(-1)]), "number" == typeof e3) e3 < 0 ? (n3 = o2(e3).slice(3), a3 = "-") : (n3 = o2(e3).slice(2), a3 = ""), n3 = a3 + n3.slice(0, -1) + i2[n3.slice(-1)];
          else {
            if ("object" != typeof e3) throw new Error("Don't know what to do with value type " + typeof e3 + ".");
            n3 = s2(e3);
          }
          c3.push(r3 + n3);
        }
        return c3.push("}"), c3.join("");
      }, c2 = t2.__fontmetrics__.uncompress = function(t3) {
        if ("string" != typeof t3) throw new Error("Invalid argument passed to uncompress.");
        for (var e3, r3, i3, a3, o3 = {}, s3 = 1, c3 = o3, u3 = [], l3 = "", h3 = "", f2 = t3.length - 1, d2 = 1; d2 < f2; d2 += 1) "'" == (a3 = t3[d2]) ? e3 ? (i3 = e3.join(""), e3 = void 0) : e3 = [] : e3 ? e3.push(a3) : "{" == a3 ? (u3.push([c3, i3]), c3 = {}, i3 = void 0) : "}" == a3 ? ((r3 = u3.pop())[0][r3[1]] = c3, i3 = void 0, c3 = r3[0]) : "-" == a3 ? s3 = -1 : void 0 === i3 ? n2.hasOwnProperty(a3) ? (l3 += n2[a3], i3 = parseInt(l3, 16) * s3, s3 = 1, l3 = "") : l3 += a3 : n2.hasOwnProperty(a3) ? (h3 += n2[a3], c3[i3] = parseInt(h3, 16) * s3, s3 = 1, i3 = void 0, h3 = "") : h3 += a3;
        return o3;
      }, u2 = { codePages: ["WinAnsiEncoding"], WinAnsiEncoding: c2("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}") }, l2 = { Unicode: { Courier: u2, "Courier-Bold": u2, "Courier-BoldOblique": u2, "Courier-Oblique": u2, Helvetica: u2, "Helvetica-Bold": u2, "Helvetica-BoldOblique": u2, "Helvetica-Oblique": u2, "Times-Roman": u2, "Times-Bold": u2, "Times-BoldItalic": u2, "Times-Italic": u2 } }, h2 = { Unicode: { "Courier-Oblique": c2("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-BoldItalic": c2("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"), "Helvetica-Bold": c2("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"), Courier: c2("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Courier-BoldOblique": c2("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-Bold": c2("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"), Symbol: c2("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"), Helvetica: c2("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"), "Helvetica-BoldOblique": c2("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"), ZapfDingbats: c2("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"), "Courier-Bold": c2("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"), "Times-Italic": c2("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"), "Times-Roman": c2("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"), "Helvetica-Oblique": c2("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}") } };
      t2.events.push(["addFont", function(t3) {
        var e3 = t3.font, r3 = h2.Unicode[e3.postScriptName];
        r3 && (e3.metadata.Unicode = {}, e3.metadata.Unicode.widths = r3.widths, e3.metadata.Unicode.kerning = r3.kerning);
        var n3 = l2.Unicode[e3.postScriptName];
        n3 && (e3.metadata.Unicode.encoding = n3, e3.encoding = n3.codePages[0]);
      }]);
    })(j.API), /**
     * @license
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
    (function(t2) {
      var e2 = function(t3) {
        for (var e3 = t3.length, r2 = new Uint8Array(e3), n2 = 0; n2 < e3; n2++) r2[n2] = t3.charCodeAt(n2);
        return r2;
      };
      t2.API.events.push(["addFont", function(r2) {
        var n2 = void 0, a2 = r2.font, o2 = r2.instance;
        if (!a2.isStandardFont) {
          if (void 0 === o2) throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('" + a2.postScriptName + "').");
          if ("string" != typeof (n2 = false === o2.existsFileInVFS(a2.postScriptName) ? o2.loadFile(a2.postScriptName) : o2.getFileFromVFS(a2.postScriptName))) throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('" + a2.postScriptName + "').");
          !(function(r3, n3) {
            n3 = /^\x00\x01\x00\x00/.test(n3) ? e2(n3) : e2(i(n3)), r3.metadata = t2.API.TTFFont.open(n3), r3.metadata.Unicode = r3.metadata.Unicode || { encoding: {}, kerning: {}, widths: [] }, r3.metadata.glyIdsUsed = [0];
          })(a2, n2);
        }
      }]);
    })(j), j.API.addSvgAsImage = function(t2, e2, n2, i2, a2, o2, c2, u2) {
      if (isNaN(e2) || isNaN(n2)) throw s.error("jsPDF.addSvgAsImage: Invalid coordinates", arguments), new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");
      if (isNaN(i2) || isNaN(a2)) throw s.error("jsPDF.addSvgAsImage: Invalid measurements", arguments), new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");
      var l2 = document.createElement("canvas");
      l2.width = i2, l2.height = a2;
      var h2 = l2.getContext("2d");
      h2.fillStyle = "#fff", h2.fillRect(0, 0, l2.width, l2.height);
      var f2 = { ignoreMouse: true, ignoreAnimation: true, ignoreDimensions: true }, d2 = this;
      return (r.canvg ? Promise.resolve(r.canvg) : new Promise(function(t3, e3) {
        try {
          t3(/* @__PURE__ */ requireLib());
        } catch (r2) {
          e3(r2);
        }
      })).catch(function(t3) {
        return Promise.reject(new Error("Could not load canvg: " + t3));
      }).then(function(t3) {
        return t3.default ? t3.default : t3;
      }).then(function(e3) {
        return e3.fromString(h2, t2, f2);
      }, function() {
        return Promise.reject(new Error("Could not load canvg."));
      }).then(function(t3) {
        return t3.render(f2);
      }).then(function() {
        d2.addImage(l2.toDataURL("image/jpeg", 1), e2, n2, i2, a2, c2, u2);
      });
    }, j.API.putTotalPages = function(t2) {
      var e2, r2 = 0;
      parseInt(this.internal.getFont().id.substr(1), 10) < 15 ? (e2 = new RegExp(t2, "g"), r2 = this.internal.getNumberOfPages()) : (e2 = new RegExp(this.pdfEscape16(t2, this.internal.getFont()), "g"), r2 = this.pdfEscape16(this.internal.getNumberOfPages() + "", this.internal.getFont()));
      for (var n2 = 1; n2 <= this.internal.getNumberOfPages(); n2++) for (var i2 = 0; i2 < this.internal.pages[n2].length; i2++) this.internal.pages[n2][i2] = this.internal.pages[n2][i2].replace(e2, r2);
      return this;
    }, j.API.viewerPreferences = function(t2, e2) {
      var r2;
      t2 = t2 || {}, e2 = e2 || false;
      var n2, i2, a2, o2 = { HideToolbar: { defaultValue: false, value: false, type: "boolean", explicitSet: false, valueSet: [true, false], pdfVersion: 1.3 }, HideMenubar: { defaultValue: false, value: false, type: "boolean", explicitSet: false, valueSet: [true, false], pdfVersion: 1.3 }, HideWindowUI: { defaultValue: false, value: false, type: "boolean", explicitSet: false, valueSet: [true, false], pdfVersion: 1.3 }, FitWindow: { defaultValue: false, value: false, type: "boolean", explicitSet: false, valueSet: [true, false], pdfVersion: 1.3 }, CenterWindow: { defaultValue: false, value: false, type: "boolean", explicitSet: false, valueSet: [true, false], pdfVersion: 1.3 }, DisplayDocTitle: { defaultValue: false, value: false, type: "boolean", explicitSet: false, valueSet: [true, false], pdfVersion: 1.4 }, NonFullScreenPageMode: { defaultValue: "UseNone", value: "UseNone", type: "name", explicitSet: false, valueSet: ["UseNone", "UseOutlines", "UseThumbs", "UseOC"], pdfVersion: 1.3 }, Direction: { defaultValue: "L2R", value: "L2R", type: "name", explicitSet: false, valueSet: ["L2R", "R2L"], pdfVersion: 1.3 }, ViewArea: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: false, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, ViewClip: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: false, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintArea: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: false, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintClip: { defaultValue: "CropBox", value: "CropBox", type: "name", explicitSet: false, valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"], pdfVersion: 1.4 }, PrintScaling: { defaultValue: "AppDefault", value: "AppDefault", type: "name", explicitSet: false, valueSet: ["AppDefault", "None"], pdfVersion: 1.6 }, Duplex: { defaultValue: "", value: "none", type: "name", explicitSet: false, valueSet: ["Simplex", "DuplexFlipShortEdge", "DuplexFlipLongEdge", "none"], pdfVersion: 1.7 }, PickTrayByPDFSize: { defaultValue: false, value: false, type: "boolean", explicitSet: false, valueSet: [true, false], pdfVersion: 1.7 }, PrintPageRange: { defaultValue: "", value: "", type: "array", explicitSet: false, valueSet: null, pdfVersion: 1.7 }, NumCopies: { defaultValue: 1, value: 1, type: "integer", explicitSet: false, valueSet: null, pdfVersion: 1.7 } }, s2 = Object.keys(o2), c2 = [], u2 = 0, l2 = 0, h2 = 0;
      function f2(t3, e3) {
        var r3, n3 = false;
        for (r3 = 0; r3 < t3.length; r3 += 1) t3[r3] === e3 && (n3 = true);
        return n3;
      }
      if (void 0 === this.internal.viewerpreferences && (this.internal.viewerpreferences = {}, this.internal.viewerpreferences.configuration = JSON.parse(JSON.stringify(o2)), this.internal.viewerpreferences.isSubscribed = false), r2 = this.internal.viewerpreferences.configuration, "reset" === t2 || true === e2) {
        var d2 = s2.length;
        for (h2 = 0; h2 < d2; h2 += 1) r2[s2[h2]].value = r2[s2[h2]].defaultValue, r2[s2[h2]].explicitSet = false;
      }
      if ("object" == typeof t2) {
        for (i2 in t2) if (a2 = t2[i2], f2(s2, i2) && void 0 !== a2) {
          if ("boolean" === r2[i2].type && "boolean" == typeof a2) r2[i2].value = a2;
          else if ("name" === r2[i2].type && f2(r2[i2].valueSet, a2)) r2[i2].value = a2;
          else if ("integer" === r2[i2].type && Number.isInteger(a2)) r2[i2].value = a2;
          else if ("array" === r2[i2].type) {
            for (u2 = 0; u2 < a2.length; u2 += 1) if (n2 = true, 1 === a2[u2].length && "number" == typeof a2[u2][0]) c2.push(String(a2[u2] - 1));
            else if (a2[u2].length > 1) {
              for (l2 = 0; l2 < a2[u2].length; l2 += 1) "number" != typeof a2[u2][l2] && (n2 = false);
              true === n2 && c2.push([a2[u2][0] - 1, a2[u2][1] - 1].join(" "));
            }
            r2[i2].value = "[" + c2.join(" ") + "]";
          } else r2[i2].value = r2[i2].defaultValue;
          r2[i2].explicitSet = true;
        }
      }
      return false === this.internal.viewerpreferences.isSubscribed && (this.internal.events.subscribe("putCatalog", function() {
        var t3, e3 = [];
        for (t3 in r2) true === r2[t3].explicitSet && ("name" === r2[t3].type ? e3.push("/" + t3 + " /" + r2[t3].value) : e3.push("/" + t3 + " " + r2[t3].value));
        0 !== e3.length && this.internal.write("/ViewerPreferences\n<<\n" + e3.join("\n") + "\n>>");
      }), this.internal.viewerpreferences.isSubscribed = true), this.internal.viewerpreferences.configuration = r2, this;
    }, /** ====================================================================
     * @license
     * jsPDF XMP metadata plugin
     * Copyright (c) 2016 Jussi Utunen, u-jussi@suomi24.fi
     *
     * Permission is hereby granted, free of charge, to any person obtaining
     * a copy of this software and associated documentation files (the
     * "Software"), to deal in the Software without restriction, including
     * without limitation the rights to use, copy, modify, merge, publish,
     * distribute, sublicense, and/or sell copies of the Software, and to
     * permit persons to whom the Software is furnished to do so, subject to
     * the following conditions:
     *
     * The above copyright notice and this permission notice shall be
     * included in all copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
     * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
     * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
     * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
     * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
     * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
     * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
     * ====================================================================
     */
    (function(t2) {
      var e2 = function() {
        var t3 = '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' + this.internal.__metadata__.namespaceuri + '"><jspdf:metadata>', e3 = unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')), r3 = unescape(encodeURIComponent(t3)), n2 = unescape(encodeURIComponent(this.internal.__metadata__.metadata)), i2 = unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")), a2 = unescape(encodeURIComponent("</x:xmpmeta>")), o2 = r3.length + n2.length + i2.length + e3.length + a2.length;
        this.internal.__metadata__.metadata_object_number = this.internal.newObject(), this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + o2 + " >>"), this.internal.write("stream"), this.internal.write(e3 + r3 + n2 + i2 + a2), this.internal.write("endstream"), this.internal.write("endobj");
      }, r2 = function() {
        this.internal.__metadata__.metadata_object_number && this.internal.write("/Metadata " + this.internal.__metadata__.metadata_object_number + " 0 R");
      };
      t2.addMetadata = function(t3, n2) {
        return void 0 === this.internal.__metadata__ && (this.internal.__metadata__ = { metadata: t3, namespaceuri: n2 || "http://jspdf.default.namespaceuri/" }, this.internal.events.subscribe("putCatalog", r2), this.internal.events.subscribe("postPutResources", e2)), this;
      };
    })(j.API), (function(t2) {
      var e2 = t2.API, r2 = e2.pdfEscape16 = function(t3, e3) {
        for (var r3, n3 = e3.metadata.Unicode.widths, i3 = ["", "0", "00", "000", "0000"], a2 = [""], o2 = 0, s2 = t3.length; o2 < s2; ++o2) {
          if (r3 = e3.metadata.characterToGlyph(t3.charCodeAt(o2)), e3.metadata.glyIdsUsed.push(r3), e3.metadata.toUnicode[r3] = t3.charCodeAt(o2), -1 == n3.indexOf(r3) && (n3.push(r3), n3.push([parseInt(e3.metadata.widthOfGlyph(r3), 10)])), "0" == r3) return a2.join("");
          r3 = r3.toString(16), a2.push(i3[4 - r3.length], r3);
        }
        return a2.join("");
      }, n2 = function(t3) {
        var e3, r3, n3, i3, a2, o2, s2;
        for (a2 = "/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo <<\n  /Registry (Adobe)\n  /Ordering (UCS)\n  /Supplement 0\n>> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000><ffff>\nendcodespacerange", n3 = [], o2 = 0, s2 = (r3 = Object.keys(t3).sort(function(t4, e4) {
          return t4 - e4;
        })).length; o2 < s2; o2++) e3 = r3[o2], n3.length >= 100 && (a2 += "\n" + n3.length + " beginbfchar\n" + n3.join("\n") + "\nendbfchar", n3 = []), void 0 !== t3[e3] && null !== t3[e3] && "function" == typeof t3[e3].toString && (i3 = ("0000" + t3[e3].toString(16)).slice(-4), e3 = ("0000" + (+e3).toString(16)).slice(-4), n3.push("<" + e3 + "><" + i3 + ">"));
        return n3.length && (a2 += "\n" + n3.length + " beginbfchar\n" + n3.join("\n") + "\nendbfchar\n"), a2 + "endcmap\nCMapName currentdict /CMap defineresource pop\nend\nend";
      };
      e2.events.push(["putFont", function(e3) {
        !(function(e4) {
          var r3 = e4.font, i3 = e4.out, a2 = e4.newObject, o2 = e4.putStream;
          if (r3.metadata instanceof t2.API.TTFFont && "Identity-H" === r3.encoding) {
            for (var s2 = r3.metadata.Unicode.widths, c2 = r3.metadata.subset.encode(r3.metadata.glyIdsUsed, 1), u2 = "", l2 = 0; l2 < c2.length; l2++) u2 += String.fromCharCode(c2[l2]);
            var h2 = a2();
            o2({ data: u2, addLength1: true, objectId: h2 }), i3("endobj");
            var f2 = a2();
            o2({ data: n2(r3.metadata.toUnicode), addLength1: true, objectId: f2 }), i3("endobj");
            var d2 = a2();
            i3("<<"), i3("/Type /FontDescriptor"), i3("/FontName /" + S(r3.fontName)), i3("/FontFile2 " + h2 + " 0 R"), i3("/FontBBox " + t2.API.PDFObject.convert(r3.metadata.bbox)), i3("/Flags " + r3.metadata.flags), i3("/StemV " + r3.metadata.stemV), i3("/ItalicAngle " + r3.metadata.italicAngle), i3("/Ascent " + r3.metadata.ascender), i3("/Descent " + r3.metadata.decender), i3("/CapHeight " + r3.metadata.capHeight), i3(">>"), i3("endobj");
            var p2 = a2();
            i3("<<"), i3("/Type /Font"), i3("/BaseFont /" + S(r3.fontName)), i3("/FontDescriptor " + d2 + " 0 R"), i3("/W " + t2.API.PDFObject.convert(s2)), i3("/CIDToGIDMap /Identity"), i3("/DW 1000"), i3("/Subtype /CIDFontType2"), i3("/CIDSystemInfo"), i3("<<"), i3("/Supplement 0"), i3("/Registry (Adobe)"), i3("/Ordering (" + r3.encoding + ")"), i3(">>"), i3(">>"), i3("endobj"), r3.objectNumber = a2(), i3("<<"), i3("/Type /Font"), i3("/Subtype /Type0"), i3("/ToUnicode " + f2 + " 0 R"), i3("/BaseFont /" + S(r3.fontName)), i3("/Encoding /" + r3.encoding), i3("/DescendantFonts [" + p2 + " 0 R]"), i3(">>"), i3("endobj"), r3.isAlreadyPutted = true;
          }
        })(e3);
      }]), e2.events.push(["putFont", function(e3) {
        !(function(e4) {
          var r3 = e4.font, i3 = e4.out, a2 = e4.newObject, o2 = e4.putStream;
          if (r3.metadata instanceof t2.API.TTFFont && "WinAnsiEncoding" === r3.encoding) {
            for (var s2 = r3.metadata.rawData, c2 = "", u2 = 0; u2 < s2.length; u2++) c2 += String.fromCharCode(s2[u2]);
            var l2 = a2();
            o2({ data: c2, addLength1: true, objectId: l2 }), i3("endobj");
            var h2 = a2();
            o2({ data: n2(r3.metadata.toUnicode), addLength1: true, objectId: h2 }), i3("endobj");
            var f2 = a2();
            i3("<<"), i3("/Descent " + r3.metadata.decender), i3("/CapHeight " + r3.metadata.capHeight), i3("/StemV " + r3.metadata.stemV), i3("/Type /FontDescriptor"), i3("/FontFile2 " + l2 + " 0 R"), i3("/Flags 96"), i3("/FontBBox " + t2.API.PDFObject.convert(r3.metadata.bbox)), i3("/FontName /" + S(r3.fontName)), i3("/ItalicAngle " + r3.metadata.italicAngle), i3("/Ascent " + r3.metadata.ascender), i3(">>"), i3("endobj"), r3.objectNumber = a2();
            for (var d2 = 0; d2 < r3.metadata.hmtx.widths.length; d2++) r3.metadata.hmtx.widths[d2] = parseInt(r3.metadata.hmtx.widths[d2] * (1e3 / r3.metadata.head.unitsPerEm));
            i3("<</Subtype/TrueType/Type/Font/ToUnicode " + h2 + " 0 R/BaseFont/" + S(r3.fontName) + "/FontDescriptor " + f2 + " 0 R/Encoding/" + r3.encoding + " /FirstChar 29 /LastChar 255 /Widths " + t2.API.PDFObject.convert(r3.metadata.hmtx.widths) + ">>"), i3("endobj"), r3.isAlreadyPutted = true;
          }
        })(e3);
      }]);
      var i2 = function(t3) {
        var e3, n3 = t3.text || "", i3 = t3.x, a2 = t3.y, o2 = t3.options || {}, s2 = t3.mutex || {}, c2 = s2.pdfEscape, u2 = s2.activeFontKey, l2 = s2.fonts, h2 = u2, f2 = "", d2 = 0, p2 = "", g2 = l2[h2].encoding;
        if ("Identity-H" !== l2[h2].encoding) return { text: n3, x: i3, y: a2, options: o2, mutex: s2 };
        for (p2 = n3, h2 = u2, Array.isArray(n3) && (p2 = n3[0]), d2 = 0; d2 < p2.length; d2 += 1) l2[h2].metadata.hasOwnProperty("cmap") && (e3 = l2[h2].metadata.cmap.unicode.codeMap[p2[d2].charCodeAt(0)]), e3 || p2[d2].charCodeAt(0) < 256 && l2[h2].metadata.hasOwnProperty("Unicode") ? f2 += p2[d2] : f2 += "";
        var m2 = "";
        return parseInt(h2.slice(1)) < 14 || "WinAnsiEncoding" === g2 ? m2 = c2(f2, h2).split("").map(function(t4) {
          return t4.charCodeAt(0).toString(16);
        }).join("") : "Identity-H" === g2 && (m2 = r2(f2, l2[h2])), s2.isHex = true, { text: m2, x: i3, y: a2, options: o2, mutex: s2 };
      };
      e2.events.push(["postProcessText", function(t3) {
        var e3 = t3.text || "", r3 = [], n3 = { text: e3, x: t3.x, y: t3.y, options: t3.options, mutex: t3.mutex };
        if (Array.isArray(e3)) {
          var a2 = 0;
          for (a2 = 0; a2 < e3.length; a2 += 1) Array.isArray(e3[a2]) && 3 === e3[a2].length ? r3.push([i2(Object.assign({}, n3, { text: e3[a2][0] })).text, e3[a2][1], e3[a2][2]]) : r3.push(i2(Object.assign({}, n3, { text: e3[a2] })).text);
          t3.text = r3;
        } else t3.text = i2(Object.assign({}, n3, { text: e3 })).text;
      }]);
    })(j), /**
     * @license
     * jsPDF virtual FileSystem functionality
     *
     * Licensed under the MIT License.
     * http://opensource.org/licenses/mit-license
     */
    (function(t2) {
      var e2 = function() {
        return void 0 === this.internal.vFS && (this.internal.vFS = {}), true;
      };
      t2.existsFileInVFS = function(t3) {
        return e2.call(this), void 0 !== this.internal.vFS[t3];
      }, t2.addFileToVFS = function(t3, r2) {
        return e2.call(this), this.internal.vFS[t3] = r2, this;
      }, t2.getFileFromVFS = function(t3) {
        return e2.call(this), void 0 !== this.internal.vFS[t3] ? this.internal.vFS[t3] : null;
      };
    })(j.API), /**
     * @license
     * Unicode Bidi Engine based on the work of Alex Shensis (@asthensis)
     * MIT License
     */
    (function(t2) {
      t2.__bidiEngine__ = t2.prototype.__bidiEngine__ = function(t3) {
        var r3, n2, i2, a2, o2, s2, c2, u2 = e2, l2 = [[0, 3, 0, 1, 0, 0, 0], [0, 3, 0, 1, 2, 2, 0], [0, 3, 0, 17, 2, 0, 1], [0, 3, 5, 5, 4, 1, 0], [0, 3, 21, 21, 4, 0, 1], [0, 3, 5, 5, 4, 2, 0]], h2 = [[2, 0, 1, 1, 0, 1, 0], [2, 0, 1, 1, 0, 2, 0], [2, 0, 2, 1, 3, 2, 0], [2, 0, 2, 33, 3, 1, 1]], f2 = { L: 0, R: 1, EN: 2, AN: 3, N: 4, B: 5, S: 6 }, d2 = { 0: 0, 5: 1, 6: 2, 7: 3, 32: 4, 251: 5, 254: 6, 255: 7 }, p2 = ["(", ")", "(", "<", ">", "<", "[", "]", "[", "{", "}", "{", "«", "»", "«", "‹", "›", "‹", "⁅", "⁆", "⁅", "⁽", "⁾", "⁽", "₍", "₎", "₍", "≤", "≥", "≤", "〈", "〉", "〈", "﹙", "﹚", "﹙", "﹛", "﹜", "﹛", "﹝", "﹞", "﹝", "﹤", "﹥", "﹤"], g2 = new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/), m2 = false, v2 = 0;
        this.__bidiEngine__ = {};
        var b2 = function(t4) {
          var e3 = t4.charCodeAt(), r4 = e3 >> 8, n3 = d2[r4];
          return void 0 !== n3 ? u2[256 * n3 + (255 & e3)] : 252 === r4 || 253 === r4 ? "AL" : g2.test(r4) ? "L" : 8 === r4 ? "R" : "N";
        }, y2 = function(t4) {
          for (var e3, r4 = 0; r4 < t4.length; r4++) {
            if ("L" === (e3 = b2(t4.charAt(r4)))) return false;
            if ("R" === e3) return true;
          }
          return false;
        }, w2 = function(t4, e3, o3, s3) {
          var c3, u3, l3, h3, f3 = e3[s3];
          switch (f3) {
            case "L":
            case "R":
            case "LRE":
            case "RLE":
            case "LRO":
            case "RLO":
            case "PDF":
              m2 = false;
              break;
            case "N":
            case "AN":
              break;
            case "EN":
              m2 && (f3 = "AN");
              break;
            case "AL":
              m2 = true, f3 = "R";
              break;
            case "WS":
            case "BN":
              f3 = "N";
              break;
            case "CS":
              s3 < 1 || s3 + 1 >= e3.length || "EN" !== (c3 = o3[s3 - 1]) && "AN" !== c3 || "EN" !== (u3 = e3[s3 + 1]) && "AN" !== u3 ? f3 = "N" : m2 && (u3 = "AN"), f3 = u3 === c3 ? u3 : "N";
              break;
            case "ES":
              f3 = "EN" === (c3 = s3 > 0 ? o3[s3 - 1] : "B") && s3 + 1 < e3.length && "EN" === e3[s3 + 1] ? "EN" : "N";
              break;
            case "ET":
              if (s3 > 0 && "EN" === o3[s3 - 1]) {
                f3 = "EN";
                break;
              }
              if (m2) {
                f3 = "N";
                break;
              }
              for (l3 = s3 + 1, h3 = e3.length; l3 < h3 && "ET" === e3[l3]; ) l3++;
              f3 = l3 < h3 && "EN" === e3[l3] ? "EN" : "N";
              break;
            case "NSM":
              if (i2 && !a2) {
                for (h3 = e3.length, l3 = s3 + 1; l3 < h3 && "NSM" === e3[l3]; ) l3++;
                if (l3 < h3) {
                  var d3 = t4[s3], p3 = d3 >= 1425 && d3 <= 2303 || 64286 === d3;
                  if (c3 = e3[l3], p3 && ("R" === c3 || "AL" === c3)) {
                    f3 = "R";
                    break;
                  }
                }
              }
              f3 = s3 < 1 || "B" === (c3 = e3[s3 - 1]) ? "N" : o3[s3 - 1];
              break;
            case "B":
              m2 = false, r3 = true, f3 = v2;
              break;
            case "S":
              n2 = true, f3 = "N";
          }
          return f3;
        }, N2 = function(t4, e3, r4) {
          var n3 = t4.split("");
          return r4 && L2(n3, r4, { hiLevel: v2 }), n3.reverse(), e3 && e3.reverse(), n3.join("");
        }, L2 = function(t4, e3, i3) {
          var a3, o3, s3, c3, u3, d3 = -1, p3 = t4.length, g3 = 0, y3 = [], N3 = v2 ? h2 : l2, L3 = [];
          for (m2 = false, r3 = false, n2 = false, o3 = 0; o3 < p3; o3++) L3[o3] = b2(t4[o3]);
          for (s3 = 0; s3 < p3; s3++) {
            if (u3 = g3, y3[s3] = w2(t4, L3, y3, s3), a3 = 240 & (g3 = N3[u3][f2[y3[s3]]]), g3 &= 15, e3[s3] = c3 = N3[g3][5], a3 > 0) if (16 === a3) {
              for (o3 = d3; o3 < s3; o3++) e3[o3] = 1;
              d3 = -1;
            } else d3 = -1;
            if (N3[g3][6]) -1 === d3 && (d3 = s3);
            else if (d3 > -1) {
              for (o3 = d3; o3 < s3; o3++) e3[o3] = c3;
              d3 = -1;
            }
            "B" === L3[s3] && (e3[s3] = 0), i3.hiLevel |= c3;
          }
          n2 && (function(t5, e4, r4) {
            for (var n3 = 0; n3 < r4; n3++) if ("S" === t5[n3]) {
              e4[n3] = v2;
              for (var i4 = n3 - 1; i4 >= 0 && "WS" === t5[i4]; i4--) e4[i4] = v2;
            }
          })(L3, e3, p3);
        }, x2 = function(t4, e3, n3, i3, a3) {
          if (!(a3.hiLevel < t4)) {
            if (1 === t4 && 1 === v2 && !r3) return e3.reverse(), void (n3 && n3.reverse());
            for (var o3, s3, c3, u3, l3 = e3.length, h3 = 0; h3 < l3; ) {
              if (i3[h3] >= t4) {
                for (c3 = h3 + 1; c3 < l3 && i3[c3] >= t4; ) c3++;
                for (u3 = h3, s3 = c3 - 1; u3 < s3; u3++, s3--) o3 = e3[u3], e3[u3] = e3[s3], e3[s3] = o3, n3 && (o3 = n3[u3], n3[u3] = n3[s3], n3[s3] = o3);
                h3 = c3;
              }
              h3++;
            }
          }
        }, A2 = function(t4, e3, r4) {
          var n3 = t4.split(""), i3 = { hiLevel: v2 };
          return r4 || (r4 = []), L2(n3, r4, i3), (function(t5, e4, r5) {
            if (0 !== r5.hiLevel && c2) for (var n4, i4 = 0; i4 < t5.length; i4++) 1 === e4[i4] && (n4 = p2.indexOf(t5[i4])) >= 0 && (t5[i4] = p2[n4 + 1]);
          })(n3, r4, i3), x2(2, n3, e3, r4, i3), x2(1, n3, e3, r4, i3), n3.join("");
        };
        return this.__bidiEngine__.doBidiReorder = function(t4, e3, r4) {
          if ((function(t5, e4) {
            if (e4) for (var r5 = 0; r5 < t5.length; r5++) e4[r5] = r5;
            void 0 === a2 && (a2 = y2(t5)), void 0 === s2 && (s2 = y2(t5));
          })(t4, e3), i2 || !o2 || s2) if (i2 && o2 && a2 ^ s2) v2 = a2 ? 1 : 0, t4 = N2(t4, e3, r4);
          else if (!i2 && o2 && s2) v2 = a2 ? 1 : 0, t4 = A2(t4, e3, r4), t4 = N2(t4, e3);
          else if (!i2 || a2 || o2 || s2) {
            if (i2 && !o2 && a2 ^ s2) t4 = N2(t4, e3), a2 ? (v2 = 0, t4 = A2(t4, e3, r4)) : (v2 = 1, t4 = A2(t4, e3, r4), t4 = N2(t4, e3));
            else if (i2 && a2 && !o2 && s2) v2 = 1, t4 = A2(t4, e3, r4), t4 = N2(t4, e3);
            else if (!i2 && !o2 && a2 ^ s2) {
              var n3 = c2;
              a2 ? (v2 = 1, t4 = A2(t4, e3, r4), v2 = 0, c2 = false, t4 = A2(t4, e3, r4), c2 = n3) : (v2 = 0, t4 = A2(t4, e3, r4), t4 = N2(t4, e3), v2 = 1, c2 = false, t4 = A2(t4, e3, r4), c2 = n3, t4 = N2(t4, e3));
            }
          } else v2 = 0, t4 = A2(t4, e3, r4);
          else v2 = a2 ? 1 : 0, t4 = A2(t4, e3, r4);
          return t4;
        }, this.__bidiEngine__.setOptions = function(t4) {
          t4 && (i2 = t4.isInputVisual, o2 = t4.isOutputVisual, a2 = t4.isInputRtl, s2 = t4.isOutputRtl, c2 = t4.isSymmetricSwapping);
        }, this.__bidiEngine__.setOptions(t3), this.__bidiEngine__;
      };
      var e2 = ["BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "S", "B", "S", "WS", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "B", "B", "B", "S", "WS", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "BN", "BN", "BN", "BN", "BN", "BN", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "CS", "N", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "L", "N", "N", "BN", "N", "N", "ET", "ET", "EN", "EN", "N", "L", "N", "N", "N", "EN", "L", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "N", "N", "N", "N", "N", "ET", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "NSM", "R", "NSM", "NSM", "R", "NSM", "NSM", "R", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AN", "AN", "AN", "AN", "AN", "AN", "N", "N", "AL", "ET", "ET", "AL", "CS", "AL", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "ET", "AN", "AN", "AL", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "NSM", "NSM", "N", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "R", "N", "N", "N", "N", "R", "N", "N", "N", "N", "N", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "BN", "BN", "BN", "L", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "B", "LRE", "RLE", "PDF", "LRO", "RLO", "CS", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "BN", "BN", "BN", "BN", "BN", "N", "LRI", "RLI", "FSI", "PDI", "BN", "BN", "BN", "BN", "BN", "BN", "EN", "L", "N", "N", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "L", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "R", "NSM", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "ES", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "R", "R", "R", "R", "R", "N", "R", "N", "R", "R", "N", "R", "R", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "CS", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "ET", "N", "N", "ES", "ES", "N", "N", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "BN", "N", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "N", "N", "N", "ET", "ET", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"], r2 = new t2.__bidiEngine__({ isInputVisual: true });
      t2.API.events.push(["postProcessText", function(t3) {
        var e3 = t3.text;
        t3.x, t3.y;
        var n2 = t3.options || {};
        t3.mutex, n2.lang;
        var i2 = [];
        if (n2.isInputVisual = "boolean" != typeof n2.isInputVisual || n2.isInputVisual, r2.setOptions(n2), "[object Array]" === Object.prototype.toString.call(e3)) {
          var a2 = 0;
          for (i2 = [], a2 = 0; a2 < e3.length; a2 += 1) "[object Array]" === Object.prototype.toString.call(e3[a2]) ? i2.push([r2.doBidiReorder(e3[a2][0]), e3[a2][1], e3[a2][2]]) : i2.push([r2.doBidiReorder(e3[a2])]);
          t3.text = i2;
        } else t3.text = r2.doBidiReorder(e3);
        r2.setOptions({ isInputVisual: true });
      }]);
    })(j), j.API.TTFFont = (function() {
      function t2(t3) {
        var e2;
        if (this.rawData = t3, e2 = this.contents = new ae(t3), this.contents.pos = 4, "ttcf" === e2.readString(4)) throw new Error("TTCF not supported.");
        e2.pos = 0, this.parse(), this.subset = new Ae(this), this.registerTTF();
      }
      return t2.open = function(e2) {
        return new t2(e2);
      }, t2.prototype.parse = function() {
        return this.directory = new oe(this.contents), this.head = new ue(this), this.name = new me(this), this.cmap = new he(this), this.toUnicode = {}, this.hhea = new fe(this), this.maxp = new ve(this), this.hmtx = new be(this), this.post = new pe(this), this.os2 = new de(this), this.loca = new xe(this), this.glyf = new we(this), this.ascender = this.os2.exists && this.os2.ascender || this.hhea.ascender, this.decender = this.os2.exists && this.os2.decender || this.hhea.decender, this.lineGap = this.os2.exists && this.os2.lineGap || this.hhea.lineGap, this.bbox = [this.head.xMin, this.head.yMin, this.head.xMax, this.head.yMax];
      }, t2.prototype.registerTTF = function() {
        var t3, e2, r2, n2, i2;
        if (this.scaleFactor = 1e3 / this.head.unitsPerEm, this.bbox = (function() {
          var e3, r3, n3, i3;
          for (i3 = [], e3 = 0, r3 = (n3 = this.bbox).length; e3 < r3; e3++) t3 = n3[e3], i3.push(Math.round(t3 * this.scaleFactor));
          return i3;
        }).call(this), this.stemV = 0, this.post.exists ? (r2 = 255 & (n2 = this.post.italic_angle), 32768 & (e2 = n2 >> 16) && (e2 = -(1 + (65535 ^ e2))), this.italicAngle = +(e2 + "." + r2)) : this.italicAngle = 0, this.ascender = Math.round(this.ascender * this.scaleFactor), this.decender = Math.round(this.decender * this.scaleFactor), this.lineGap = Math.round(this.lineGap * this.scaleFactor), this.capHeight = this.os2.exists && this.os2.capHeight || this.ascender, this.xHeight = this.os2.exists && this.os2.xHeight || 0, this.familyClass = (this.os2.exists && this.os2.familyClass || 0) >> 8, this.isSerif = 1 === (i2 = this.familyClass) || 2 === i2 || 3 === i2 || 4 === i2 || 5 === i2 || 7 === i2, this.isScript = 10 === this.familyClass, this.flags = 0, this.post.isFixedPitch && (this.flags |= 1), this.isSerif && (this.flags |= 2), this.isScript && (this.flags |= 8), 0 !== this.italicAngle && (this.flags |= 64), this.flags |= 32, !this.cmap.unicode) throw new Error("No unicode cmap for font");
      }, t2.prototype.characterToGlyph = function(t3) {
        var e2;
        return (null != (e2 = this.cmap.unicode) ? e2.codeMap[t3] : void 0) || 0;
      }, t2.prototype.widthOfGlyph = function(t3) {
        var e2;
        return e2 = 1e3 / this.head.unitsPerEm, this.hmtx.forGlyph(t3).advance * e2;
      }, t2.prototype.widthOfString = function(t3, e2, r2) {
        var n2, i2, a2, o2;
        for (a2 = 0, i2 = 0, o2 = (t3 = "" + t3).length; 0 <= o2 ? i2 < o2 : i2 > o2; i2 = 0 <= o2 ? ++i2 : --i2) n2 = t3.charCodeAt(i2), a2 += this.widthOfGlyph(this.characterToGlyph(n2)) + r2 * (1e3 / e2) || 0;
        return a2 * (e2 / 1e3);
      }, t2.prototype.lineHeight = function(t3, e2) {
        var r2;
        return null == e2 && (e2 = false), r2 = e2 ? this.lineGap : 0, (this.ascender + r2 - this.decender) / 1e3 * t3;
      }, t2;
    })();
    var ie, ae = (function() {
      function t2(t3) {
        this.data = null != t3 ? t3 : [], this.pos = 0, this.length = this.data.length;
      }
      return t2.prototype.readByte = function() {
        return this.data[this.pos++];
      }, t2.prototype.writeByte = function(t3) {
        return this.data[this.pos++] = t3;
      }, t2.prototype.readUInt32 = function() {
        return 16777216 * this.readByte() + (this.readByte() << 16) + (this.readByte() << 8) + this.readByte();
      }, t2.prototype.writeUInt32 = function(t3) {
        return this.writeByte(t3 >>> 24 & 255), this.writeByte(t3 >> 16 & 255), this.writeByte(t3 >> 8 & 255), this.writeByte(255 & t3);
      }, t2.prototype.readInt32 = function() {
        var t3;
        return (t3 = this.readUInt32()) >= 2147483648 ? t3 - 4294967296 : t3;
      }, t2.prototype.writeInt32 = function(t3) {
        return t3 < 0 && (t3 += 4294967296), this.writeUInt32(t3);
      }, t2.prototype.readUInt16 = function() {
        return this.readByte() << 8 | this.readByte();
      }, t2.prototype.writeUInt16 = function(t3) {
        return this.writeByte(t3 >> 8 & 255), this.writeByte(255 & t3);
      }, t2.prototype.readInt16 = function() {
        var t3;
        return (t3 = this.readUInt16()) >= 32768 ? t3 - 65536 : t3;
      }, t2.prototype.writeInt16 = function(t3) {
        return t3 < 0 && (t3 += 65536), this.writeUInt16(t3);
      }, t2.prototype.readString = function(t3) {
        var e2, r2;
        for (r2 = [], e2 = 0; 0 <= t3 ? e2 < t3 : e2 > t3; e2 = 0 <= t3 ? ++e2 : --e2) r2[e2] = String.fromCharCode(this.readByte());
        return r2.join("");
      }, t2.prototype.writeString = function(t3) {
        var e2, r2, n2;
        for (n2 = [], e2 = 0, r2 = t3.length; 0 <= r2 ? e2 < r2 : e2 > r2; e2 = 0 <= r2 ? ++e2 : --e2) n2.push(this.writeByte(t3.charCodeAt(e2)));
        return n2;
      }, t2.prototype.readShort = function() {
        return this.readInt16();
      }, t2.prototype.writeShort = function(t3) {
        return this.writeInt16(t3);
      }, t2.prototype.readLongLong = function() {
        var t3, e2, r2, n2, i2, a2, o2, s2;
        return t3 = this.readByte(), e2 = this.readByte(), r2 = this.readByte(), n2 = this.readByte(), i2 = this.readByte(), a2 = this.readByte(), o2 = this.readByte(), s2 = this.readByte(), 128 & t3 ? -1 * (72057594037927940 * (255 ^ t3) + 281474976710656 * (255 ^ e2) + 1099511627776 * (255 ^ r2) + 4294967296 * (255 ^ n2) + 16777216 * (255 ^ i2) + 65536 * (255 ^ a2) + 256 * (255 ^ o2) + (255 ^ s2) + 1) : 72057594037927940 * t3 + 281474976710656 * e2 + 1099511627776 * r2 + 4294967296 * n2 + 16777216 * i2 + 65536 * a2 + 256 * o2 + s2;
      }, t2.prototype.writeLongLong = function(t3) {
        var e2, r2;
        return e2 = Math.floor(t3 / 4294967296), r2 = 4294967295 & t3, this.writeByte(e2 >> 24 & 255), this.writeByte(e2 >> 16 & 255), this.writeByte(e2 >> 8 & 255), this.writeByte(255 & e2), this.writeByte(r2 >> 24 & 255), this.writeByte(r2 >> 16 & 255), this.writeByte(r2 >> 8 & 255), this.writeByte(255 & r2);
      }, t2.prototype.readInt = function() {
        return this.readInt32();
      }, t2.prototype.writeInt = function(t3) {
        return this.writeInt32(t3);
      }, t2.prototype.read = function(t3) {
        var e2, r2;
        for (e2 = [], r2 = 0; 0 <= t3 ? r2 < t3 : r2 > t3; r2 = 0 <= t3 ? ++r2 : --r2) e2.push(this.readByte());
        return e2;
      }, t2.prototype.write = function(t3) {
        var e2, r2, n2, i2;
        for (i2 = [], r2 = 0, n2 = t3.length; r2 < n2; r2++) e2 = t3[r2], i2.push(this.writeByte(e2));
        return i2;
      }, t2;
    })(), oe = (function() {
      var t2;
      function e2(t3) {
        var e3, r2, n2;
        for (this.scalarType = t3.readInt(), this.tableCount = t3.readShort(), this.searchRange = t3.readShort(), this.entrySelector = t3.readShort(), this.rangeShift = t3.readShort(), this.tables = {}, r2 = 0, n2 = this.tableCount; 0 <= n2 ? r2 < n2 : r2 > n2; r2 = 0 <= n2 ? ++r2 : --r2) e3 = { tag: t3.readString(4), checksum: t3.readInt(), offset: t3.readInt(), length: t3.readInt() }, this.tables[e3.tag] = e3;
      }
      return e2.prototype.encode = function(e3) {
        var r2, n2, i2, a2, o2, s2, c2, u2, l2, h2, f2, d2, p2;
        for (p2 in f2 = Object.keys(e3).length, s2 = Math.log(2), l2 = 16 * Math.floor(Math.log(f2) / s2), a2 = Math.floor(l2 / s2), u2 = 16 * f2 - l2, (n2 = new ae()).writeInt(this.scalarType), n2.writeShort(f2), n2.writeShort(l2), n2.writeShort(a2), n2.writeShort(u2), i2 = 16 * f2, c2 = n2.pos + i2, o2 = null, d2 = [], e3) for (h2 = e3[p2], n2.writeString(p2), n2.writeInt(t2(h2)), n2.writeInt(c2), n2.writeInt(h2.length), d2 = d2.concat(h2), "head" === p2 && (o2 = c2), c2 += h2.length; c2 % 4; ) d2.push(0), c2++;
        return n2.write(d2), r2 = 2981146554 - t2(n2.data), n2.pos = o2 + 8, n2.writeUInt32(r2), n2.data;
      }, t2 = function(t3) {
        var e3, r2, n2, i2;
        for (t3 = ye.call(t3); t3.length % 4; ) t3.push(0);
        for (n2 = new ae(t3), r2 = 0, e3 = 0, i2 = t3.length; e3 < i2; e3 = e3 += 4) r2 += n2.readUInt32();
        return 4294967295 & r2;
      }, e2;
    })(), se = {}.hasOwnProperty, ce = function(t2, e2) {
      for (var r2 in e2) se.call(e2, r2) && (t2[r2] = e2[r2]);
      function n2() {
        this.constructor = t2;
      }
      return n2.prototype = e2.prototype, t2.prototype = new n2(), t2.__super__ = e2.prototype, t2;
    };
    ie = (function() {
      function t2(t3) {
        var e2;
        this.file = t3, e2 = this.file.directory.tables[this.tag], this.exists = !!e2, e2 && (this.offset = e2.offset, this.length = e2.length, this.parse(this.file.contents));
      }
      return t2.prototype.parse = function() {
      }, t2.prototype.encode = function() {
      }, t2.prototype.raw = function() {
        return this.exists ? (this.file.contents.pos = this.offset, this.file.contents.read(this.length)) : null;
      }, t2;
    })();
    var ue = (function() {
      function t2() {
        return t2.__super__.constructor.apply(this, arguments);
      }
      return ce(t2, ie), t2.prototype.tag = "head", t2.prototype.parse = function(t3) {
        return t3.pos = this.offset, this.version = t3.readInt(), this.revision = t3.readInt(), this.checkSumAdjustment = t3.readInt(), this.magicNumber = t3.readInt(), this.flags = t3.readShort(), this.unitsPerEm = t3.readShort(), this.created = t3.readLongLong(), this.modified = t3.readLongLong(), this.xMin = t3.readShort(), this.yMin = t3.readShort(), this.xMax = t3.readShort(), this.yMax = t3.readShort(), this.macStyle = t3.readShort(), this.lowestRecPPEM = t3.readShort(), this.fontDirectionHint = t3.readShort(), this.indexToLocFormat = t3.readShort(), this.glyphDataFormat = t3.readShort();
      }, t2.prototype.encode = function(t3) {
        var e2;
        return (e2 = new ae()).writeInt(this.version), e2.writeInt(this.revision), e2.writeInt(this.checkSumAdjustment), e2.writeInt(this.magicNumber), e2.writeShort(this.flags), e2.writeShort(this.unitsPerEm), e2.writeLongLong(this.created), e2.writeLongLong(this.modified), e2.writeShort(this.xMin), e2.writeShort(this.yMin), e2.writeShort(this.xMax), e2.writeShort(this.yMax), e2.writeShort(this.macStyle), e2.writeShort(this.lowestRecPPEM), e2.writeShort(this.fontDirectionHint), e2.writeShort(t3), e2.writeShort(this.glyphDataFormat), e2.data;
      }, t2;
    })(), le = (function() {
      function t2(t3, e2) {
        var r2, n2, i2, a2, o2, s2, c2, u2, l2, h2, f2, d2, p2, g2, m2, v2, b2;
        switch (this.platformID = t3.readUInt16(), this.encodingID = t3.readShort(), this.offset = e2 + t3.readInt(), l2 = t3.pos, t3.pos = this.offset, this.format = t3.readUInt16(), this.length = t3.readUInt16(), this.language = t3.readUInt16(), this.isUnicode = 3 === this.platformID && 1 === this.encodingID && 4 === this.format || 0 === this.platformID && 4 === this.format, this.codeMap = {}, this.format) {
          case 0:
            for (s2 = 0; s2 < 256; ++s2) this.codeMap[s2] = t3.readByte();
            break;
          case 4:
            for (f2 = t3.readUInt16(), h2 = f2 / 2, t3.pos += 6, i2 = (function() {
              var e3, r3;
              for (r3 = [], s2 = e3 = 0; 0 <= h2 ? e3 < h2 : e3 > h2; s2 = 0 <= h2 ? ++e3 : --e3) r3.push(t3.readUInt16());
              return r3;
            })(), t3.pos += 2, p2 = (function() {
              var e3, r3;
              for (r3 = [], s2 = e3 = 0; 0 <= h2 ? e3 < h2 : e3 > h2; s2 = 0 <= h2 ? ++e3 : --e3) r3.push(t3.readUInt16());
              return r3;
            })(), c2 = (function() {
              var e3, r3;
              for (r3 = [], s2 = e3 = 0; 0 <= h2 ? e3 < h2 : e3 > h2; s2 = 0 <= h2 ? ++e3 : --e3) r3.push(t3.readUInt16());
              return r3;
            })(), u2 = (function() {
              var e3, r3;
              for (r3 = [], s2 = e3 = 0; 0 <= h2 ? e3 < h2 : e3 > h2; s2 = 0 <= h2 ? ++e3 : --e3) r3.push(t3.readUInt16());
              return r3;
            })(), n2 = (this.length - t3.pos + this.offset) / 2, o2 = (function() {
              var e3, r3;
              for (r3 = [], s2 = e3 = 0; 0 <= n2 ? e3 < n2 : e3 > n2; s2 = 0 <= n2 ? ++e3 : --e3) r3.push(t3.readUInt16());
              return r3;
            })(), s2 = m2 = 0, b2 = i2.length; m2 < b2; s2 = ++m2) for (g2 = i2[s2], r2 = v2 = d2 = p2[s2]; d2 <= g2 ? v2 <= g2 : v2 >= g2; r2 = d2 <= g2 ? ++v2 : --v2) 0 === u2[s2] ? a2 = r2 + c2[s2] : 0 !== (a2 = o2[u2[s2] / 2 + (r2 - d2) - (h2 - s2)] || 0) && (a2 += c2[s2]), this.codeMap[r2] = 65535 & a2;
        }
        t3.pos = l2;
      }
      return t2.encode = function(t3, e2) {
        var r2, n2, i2, a2, o2, s2, c2, u2, l2, h2, f2, d2, p2, g2, m2, v2, b2, y2, w2, N2, L2, x2, A2, S2, _2, P2, k2, F2, I2, j2, C2, O2, B2, q2, M2, E2, R2, D2, T2, z2, U2, H2, W2, V2, G2, Y2;
        switch (F2 = new ae(), a2 = Object.keys(t3).sort(function(t4, e3) {
          return t4 - e3;
        }), e2) {
          case "macroman":
            for (p2 = 0, g2 = (function() {
              var t4 = [];
              for (d2 = 0; d2 < 256; ++d2) t4.push(0);
              return t4;
            })(), v2 = { 0: 0 }, i2 = {}, I2 = 0, B2 = a2.length; I2 < B2; I2++) null == v2[W2 = t3[n2 = a2[I2]]] && (v2[W2] = ++p2), i2[n2] = { old: t3[n2], new: v2[t3[n2]] }, g2[n2] = v2[t3[n2]];
            return F2.writeUInt16(1), F2.writeUInt16(0), F2.writeUInt32(12), F2.writeUInt16(0), F2.writeUInt16(262), F2.writeUInt16(0), F2.write(g2), { charMap: i2, subtable: F2.data, maxGlyphID: p2 + 1 };
          case "unicode":
            for (P2 = [], l2 = [], b2 = 0, v2 = {}, r2 = {}, m2 = c2 = null, j2 = 0, q2 = a2.length; j2 < q2; j2++) null == v2[w2 = t3[n2 = a2[j2]]] && (v2[w2] = ++b2), r2[n2] = { old: w2, new: v2[w2] }, o2 = v2[w2] - n2, null != m2 && o2 === c2 || (m2 && l2.push(m2), P2.push(n2), c2 = o2), m2 = n2;
            for (m2 && l2.push(m2), l2.push(65535), P2.push(65535), S2 = 2 * (A2 = P2.length), x2 = 2 * Math.pow(Math.log(A2) / Math.LN2, 2), h2 = Math.log(x2 / 2) / Math.LN2, L2 = 2 * A2 - x2, s2 = [], N2 = [], f2 = [], d2 = C2 = 0, M2 = P2.length; C2 < M2; d2 = ++C2) {
              if (_2 = P2[d2], u2 = l2[d2], 65535 === _2) {
                s2.push(0), N2.push(0);
                break;
              }
              if (_2 - (k2 = r2[_2].new) >= 32768) for (s2.push(0), N2.push(2 * (f2.length + A2 - d2)), n2 = O2 = _2; _2 <= u2 ? O2 <= u2 : O2 >= u2; n2 = _2 <= u2 ? ++O2 : --O2) f2.push(r2[n2].new);
              else s2.push(k2 - _2), N2.push(0);
            }
            for (F2.writeUInt16(3), F2.writeUInt16(1), F2.writeUInt32(12), F2.writeUInt16(4), F2.writeUInt16(16 + 8 * A2 + 2 * f2.length), F2.writeUInt16(0), F2.writeUInt16(S2), F2.writeUInt16(x2), F2.writeUInt16(h2), F2.writeUInt16(L2), U2 = 0, E2 = l2.length; U2 < E2; U2++) n2 = l2[U2], F2.writeUInt16(n2);
            for (F2.writeUInt16(0), H2 = 0, R2 = P2.length; H2 < R2; H2++) n2 = P2[H2], F2.writeUInt16(n2);
            for (V2 = 0, D2 = s2.length; V2 < D2; V2++) o2 = s2[V2], F2.writeUInt16(o2);
            for (G2 = 0, T2 = N2.length; G2 < T2; G2++) y2 = N2[G2], F2.writeUInt16(y2);
            for (Y2 = 0, z2 = f2.length; Y2 < z2; Y2++) p2 = f2[Y2], F2.writeUInt16(p2);
            return { charMap: r2, subtable: F2.data, maxGlyphID: b2 + 1 };
        }
      }, t2;
    })(), he = (function() {
      function t2() {
        return t2.__super__.constructor.apply(this, arguments);
      }
      return ce(t2, ie), t2.prototype.tag = "cmap", t2.prototype.parse = function(t3) {
        var e2, r2, n2;
        for (t3.pos = this.offset, this.version = t3.readUInt16(), n2 = t3.readUInt16(), this.tables = [], this.unicode = null, r2 = 0; 0 <= n2 ? r2 < n2 : r2 > n2; r2 = 0 <= n2 ? ++r2 : --r2) e2 = new le(t3, this.offset), this.tables.push(e2), e2.isUnicode && null == this.unicode && (this.unicode = e2);
        return true;
      }, t2.encode = function(t3, e2) {
        var r2, n2;
        return null == e2 && (e2 = "macroman"), r2 = le.encode(t3, e2), (n2 = new ae()).writeUInt16(0), n2.writeUInt16(1), r2.table = n2.data.concat(r2.subtable), r2;
      }, t2;
    })(), fe = (function() {
      function t2() {
        return t2.__super__.constructor.apply(this, arguments);
      }
      return ce(t2, ie), t2.prototype.tag = "hhea", t2.prototype.parse = function(t3) {
        return t3.pos = this.offset, this.version = t3.readInt(), this.ascender = t3.readShort(), this.decender = t3.readShort(), this.lineGap = t3.readShort(), this.advanceWidthMax = t3.readShort(), this.minLeftSideBearing = t3.readShort(), this.minRightSideBearing = t3.readShort(), this.xMaxExtent = t3.readShort(), this.caretSlopeRise = t3.readShort(), this.caretSlopeRun = t3.readShort(), this.caretOffset = t3.readShort(), t3.pos += 8, this.metricDataFormat = t3.readShort(), this.numberOfMetrics = t3.readUInt16();
      }, t2;
    })(), de = (function() {
      function t2() {
        return t2.__super__.constructor.apply(this, arguments);
      }
      return ce(t2, ie), t2.prototype.tag = "OS/2", t2.prototype.parse = function(t3) {
        if (t3.pos = this.offset, this.version = t3.readUInt16(), this.averageCharWidth = t3.readShort(), this.weightClass = t3.readUInt16(), this.widthClass = t3.readUInt16(), this.type = t3.readShort(), this.ySubscriptXSize = t3.readShort(), this.ySubscriptYSize = t3.readShort(), this.ySubscriptXOffset = t3.readShort(), this.ySubscriptYOffset = t3.readShort(), this.ySuperscriptXSize = t3.readShort(), this.ySuperscriptYSize = t3.readShort(), this.ySuperscriptXOffset = t3.readShort(), this.ySuperscriptYOffset = t3.readShort(), this.yStrikeoutSize = t3.readShort(), this.yStrikeoutPosition = t3.readShort(), this.familyClass = t3.readShort(), this.panose = (function() {
          var e2, r2;
          for (r2 = [], e2 = 0; e2 < 10; ++e2) r2.push(t3.readByte());
          return r2;
        })(), this.charRange = (function() {
          var e2, r2;
          for (r2 = [], e2 = 0; e2 < 4; ++e2) r2.push(t3.readInt());
          return r2;
        })(), this.vendorID = t3.readString(4), this.selection = t3.readShort(), this.firstCharIndex = t3.readShort(), this.lastCharIndex = t3.readShort(), this.version > 0 && (this.ascent = t3.readShort(), this.descent = t3.readShort(), this.lineGap = t3.readShort(), this.winAscent = t3.readShort(), this.winDescent = t3.readShort(), this.codePageRange = (function() {
          var e2, r2;
          for (r2 = [], e2 = 0; e2 < 2; e2 = ++e2) r2.push(t3.readInt());
          return r2;
        })(), this.version > 1)) return this.xHeight = t3.readShort(), this.capHeight = t3.readShort(), this.defaultChar = t3.readShort(), this.breakChar = t3.readShort(), this.maxContext = t3.readShort();
      }, t2;
    })(), pe = (function() {
      function t2() {
        return t2.__super__.constructor.apply(this, arguments);
      }
      return ce(t2, ie), t2.prototype.tag = "post", t2.prototype.parse = function(t3) {
        var e2, r2, n2;
        switch (t3.pos = this.offset, this.format = t3.readInt(), this.italicAngle = t3.readInt(), this.underlinePosition = t3.readShort(), this.underlineThickness = t3.readShort(), this.isFixedPitch = t3.readInt(), this.minMemType42 = t3.readInt(), this.maxMemType42 = t3.readInt(), this.minMemType1 = t3.readInt(), this.maxMemType1 = t3.readInt(), this.format) {
          case 65536:
          case 196608:
            break;
          case 131072:
            var i2;
            for (r2 = t3.readUInt16(), this.glyphNameIndex = [], i2 = 0; 0 <= r2 ? i2 < r2 : i2 > r2; i2 = 0 <= r2 ? ++i2 : --i2) this.glyphNameIndex.push(t3.readUInt16());
            for (this.names = [], n2 = []; t3.pos < this.offset + this.length; ) e2 = t3.readByte(), n2.push(this.names.push(t3.readString(e2)));
            return n2;
          case 151552:
            return r2 = t3.readUInt16(), this.offsets = t3.read(r2);
          case 262144:
            return this.map = (function() {
              var e3, r3, n3;
              for (n3 = [], i2 = e3 = 0, r3 = this.file.maxp.numGlyphs; 0 <= r3 ? e3 < r3 : e3 > r3; i2 = 0 <= r3 ? ++e3 : --e3) n3.push(t3.readUInt32());
              return n3;
            }).call(this);
        }
      }, t2;
    })(), ge = function(t2, e2) {
      this.raw = t2, this.length = t2.length, this.platformID = e2.platformID, this.encodingID = e2.encodingID, this.languageID = e2.languageID;
    }, me = (function() {
      function t2() {
        return t2.__super__.constructor.apply(this, arguments);
      }
      return ce(t2, ie), t2.prototype.tag = "name", t2.prototype.parse = function(t3) {
        var e2, r2, n2, i2, a2, o2, s2, c2, u2, l2, h2;
        for (t3.pos = this.offset, t3.readShort(), e2 = t3.readShort(), o2 = t3.readShort(), r2 = [], i2 = 0; 0 <= e2 ? i2 < e2 : i2 > e2; i2 = 0 <= e2 ? ++i2 : --i2) r2.push({ platformID: t3.readShort(), encodingID: t3.readShort(), languageID: t3.readShort(), nameID: t3.readShort(), length: t3.readShort(), offset: this.offset + o2 + t3.readShort() });
        for (s2 = {}, i2 = u2 = 0, l2 = r2.length; u2 < l2; i2 = ++u2) n2 = r2[i2], t3.pos = n2.offset, c2 = t3.readString(n2.length), a2 = new ge(c2, n2), null == s2[h2 = n2.nameID] && (s2[h2] = []), s2[n2.nameID].push(a2);
        this.strings = s2, this.copyright = s2[0], this.fontFamily = s2[1], this.fontSubfamily = s2[2], this.uniqueSubfamily = s2[3], this.fontName = s2[4], this.version = s2[5];
        try {
          this.postscriptName = s2[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
        } catch (f2) {
          this.postscriptName = s2[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
        }
        return this.trademark = s2[7], this.manufacturer = s2[8], this.designer = s2[9], this.description = s2[10], this.vendorUrl = s2[11], this.designerUrl = s2[12], this.license = s2[13], this.licenseUrl = s2[14], this.preferredFamily = s2[15], this.preferredSubfamily = s2[17], this.compatibleFull = s2[18], this.sampleText = s2[19];
      }, t2;
    })(), ve = (function() {
      function t2() {
        return t2.__super__.constructor.apply(this, arguments);
      }
      return ce(t2, ie), t2.prototype.tag = "maxp", t2.prototype.parse = function(t3) {
        return t3.pos = this.offset, this.version = t3.readInt(), this.numGlyphs = t3.readUInt16(), this.maxPoints = t3.readUInt16(), this.maxContours = t3.readUInt16(), this.maxCompositePoints = t3.readUInt16(), this.maxComponentContours = t3.readUInt16(), this.maxZones = t3.readUInt16(), this.maxTwilightPoints = t3.readUInt16(), this.maxStorage = t3.readUInt16(), this.maxFunctionDefs = t3.readUInt16(), this.maxInstructionDefs = t3.readUInt16(), this.maxStackElements = t3.readUInt16(), this.maxSizeOfInstructions = t3.readUInt16(), this.maxComponentElements = t3.readUInt16(), this.maxComponentDepth = t3.readUInt16();
      }, t2;
    })(), be = (function() {
      function t2() {
        return t2.__super__.constructor.apply(this, arguments);
      }
      return ce(t2, ie), t2.prototype.tag = "hmtx", t2.prototype.parse = function(t3) {
        var e2, r2, n2, i2, a2, o2, s2;
        for (t3.pos = this.offset, this.metrics = [], e2 = 0, o2 = this.file.hhea.numberOfMetrics; 0 <= o2 ? e2 < o2 : e2 > o2; e2 = 0 <= o2 ? ++e2 : --e2) this.metrics.push({ advance: t3.readUInt16(), lsb: t3.readInt16() });
        for (n2 = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics, this.leftSideBearings = (function() {
          var r3, i3;
          for (i3 = [], e2 = r3 = 0; 0 <= n2 ? r3 < n2 : r3 > n2; e2 = 0 <= n2 ? ++r3 : --r3) i3.push(t3.readInt16());
          return i3;
        })(), this.widths = (function() {
          var t4, e3, r3, n3;
          for (n3 = [], t4 = 0, e3 = (r3 = this.metrics).length; t4 < e3; t4++) i2 = r3[t4], n3.push(i2.advance);
          return n3;
        }).call(this), r2 = this.widths[this.widths.length - 1], s2 = [], e2 = a2 = 0; 0 <= n2 ? a2 < n2 : a2 > n2; e2 = 0 <= n2 ? ++a2 : --a2) s2.push(this.widths.push(r2));
        return s2;
      }, t2.prototype.forGlyph = function(t3) {
        return t3 in this.metrics ? this.metrics[t3] : { advance: this.metrics[this.metrics.length - 1].advance, lsb: this.leftSideBearings[t3 - this.metrics.length] };
      }, t2;
    })(), ye = [].slice, we = (function() {
      function t2() {
        return t2.__super__.constructor.apply(this, arguments);
      }
      return ce(t2, ie), t2.prototype.tag = "glyf", t2.prototype.parse = function() {
        return this.cache = {};
      }, t2.prototype.glyphFor = function(t3) {
        var e2, r2, n2, i2, a2, o2, s2, c2, u2, l2;
        return t3 in this.cache ? this.cache[t3] : (i2 = this.file.loca, e2 = this.file.contents, r2 = i2.indexOf(t3), 0 === (n2 = i2.lengthOf(t3)) ? this.cache[t3] = null : (e2.pos = this.offset + r2, a2 = (o2 = new ae(e2.read(n2))).readShort(), c2 = o2.readShort(), l2 = o2.readShort(), s2 = o2.readShort(), u2 = o2.readShort(), this.cache[t3] = -1 === a2 ? new Le(o2, c2, l2, s2, u2) : new Ne(o2, a2, c2, l2, s2, u2), this.cache[t3]));
      }, t2.prototype.encode = function(t3, e2, r2) {
        var n2, i2, a2, o2, s2;
        for (a2 = [], i2 = [], o2 = 0, s2 = e2.length; o2 < s2; o2++) n2 = t3[e2[o2]], i2.push(a2.length), n2 && (a2 = a2.concat(n2.encode(r2)));
        return i2.push(a2.length), { table: a2, offsets: i2 };
      }, t2;
    })(), Ne = (function() {
      function t2(t3, e2, r2, n2, i2, a2) {
        this.raw = t3, this.numberOfContours = e2, this.xMin = r2, this.yMin = n2, this.xMax = i2, this.yMax = a2, this.compound = false;
      }
      return t2.prototype.encode = function() {
        return this.raw.data;
      }, t2;
    })(), Le = (function() {
      function t2(t3, e2, r2, n2, i2) {
        var a2, o2;
        for (this.raw = t3, this.xMin = e2, this.yMin = r2, this.xMax = n2, this.yMax = i2, this.compound = true, this.glyphIDs = [], this.glyphOffsets = [], a2 = this.raw; o2 = a2.readShort(), this.glyphOffsets.push(a2.pos), this.glyphIDs.push(a2.readUInt16()), 32 & o2; ) a2.pos += 1 & o2 ? 4 : 2, 128 & o2 ? a2.pos += 8 : 64 & o2 ? a2.pos += 4 : 8 & o2 && (a2.pos += 2);
      }
      return t2.prototype.encode = function() {
        var t3, e2, r2;
        for (e2 = new ae(ye.call(this.raw.data)), t3 = 0, r2 = this.glyphIDs.length; t3 < r2; ++t3) e2.pos = this.glyphOffsets[t3];
        return e2.data;
      }, t2;
    })(), xe = (function() {
      function t2() {
        return t2.__super__.constructor.apply(this, arguments);
      }
      return ce(t2, ie), t2.prototype.tag = "loca", t2.prototype.parse = function(t3) {
        var e2, r2;
        return t3.pos = this.offset, e2 = this.file.head.indexToLocFormat, this.offsets = 0 === e2 ? (function() {
          var e3, n2;
          for (n2 = [], r2 = 0, e3 = this.length; r2 < e3; r2 += 2) n2.push(2 * t3.readUInt16());
          return n2;
        }).call(this) : (function() {
          var e3, n2;
          for (n2 = [], r2 = 0, e3 = this.length; r2 < e3; r2 += 4) n2.push(t3.readUInt32());
          return n2;
        }).call(this);
      }, t2.prototype.indexOf = function(t3) {
        return this.offsets[t3];
      }, t2.prototype.lengthOf = function(t3) {
        return this.offsets[t3 + 1] - this.offsets[t3];
      }, t2.prototype.encode = function(t3, e2) {
        for (var r2 = new Uint32Array(this.offsets.length), n2 = 0, i2 = 0, a2 = 0; a2 < r2.length; ++a2) if (r2[a2] = n2, i2 < e2.length && e2[i2] == a2) {
          ++i2, r2[a2] = n2;
          var o2 = this.offsets[a2], s2 = this.offsets[a2 + 1] - o2;
          s2 > 0 && (n2 += s2);
        }
        for (var c2 = new Array(4 * r2.length), u2 = 0; u2 < r2.length; ++u2) c2[4 * u2 + 3] = 255 & r2[u2], c2[4 * u2 + 2] = (65280 & r2[u2]) >> 8, c2[4 * u2 + 1] = (16711680 & r2[u2]) >> 16, c2[4 * u2] = (4278190080 & r2[u2]) >> 24;
        return c2;
      }, t2;
    })(), Ae = (function() {
      function t2(t3) {
        this.font = t3, this.subset = {}, this.unicodes = {}, this.next = 33;
      }
      return t2.prototype.generateCmap = function() {
        var t3, e2, r2, n2, i2;
        for (e2 in n2 = this.font.cmap.tables[0].codeMap, t3 = {}, i2 = this.subset) r2 = i2[e2], t3[e2] = n2[r2];
        return t3;
      }, t2.prototype.glyphsFor = function(t3) {
        var e2, r2, n2, i2, a2, o2, s2;
        for (n2 = {}, a2 = 0, o2 = t3.length; a2 < o2; a2++) n2[i2 = t3[a2]] = this.font.glyf.glyphFor(i2);
        for (i2 in e2 = [], n2) (null != (r2 = n2[i2]) ? r2.compound : void 0) && e2.push.apply(e2, r2.glyphIDs);
        if (e2.length > 0) for (i2 in s2 = this.glyphsFor(e2)) r2 = s2[i2], n2[i2] = r2;
        return n2;
      }, t2.prototype.encode = function(t3, e2) {
        var r2, n2, i2, a2, o2, s2, c2, u2, l2, h2, f2, d2, p2, g2, m2;
        for (n2 in r2 = he.encode(this.generateCmap(), "unicode"), a2 = this.glyphsFor(t3), f2 = { 0: 0 }, m2 = r2.charMap) f2[(s2 = m2[n2]).old] = s2.new;
        for (d2 in h2 = r2.maxGlyphID, a2) d2 in f2 || (f2[d2] = h2++);
        return u2 = (function(t4) {
          var e3, r3;
          for (e3 in r3 = {}, t4) r3[t4[e3]] = e3;
          return r3;
        })(f2), l2 = Object.keys(u2).sort(function(t4, e3) {
          return t4 - e3;
        }), p2 = (function() {
          var t4, e3, r3;
          for (r3 = [], t4 = 0, e3 = l2.length; t4 < e3; t4++) o2 = l2[t4], r3.push(u2[o2]);
          return r3;
        })(), i2 = this.font.glyf.encode(a2, p2, f2), c2 = this.font.loca.encode(i2.offsets, p2), g2 = { cmap: this.font.cmap.raw(), glyf: i2.table, loca: c2, hmtx: this.font.hmtx.raw(), hhea: this.font.hhea.raw(), maxp: this.font.maxp.raw(), post: this.font.post.raw(), name: this.font.name.raw(), head: this.font.head.encode(e2) }, this.font.os2.exists && (g2["OS/2"] = this.font.os2.raw()), this.font.directory.encode(g2);
      }, t2;
    })();
    j.API.PDFObject = (function() {
      var t2;
      function e2() {
      }
      return t2 = function(t3, e3) {
        return (Array(e3 + 1).join("0") + t3).slice(-e3);
      }, e2.convert = function(r2) {
        var n2, i2, a2, o2;
        if (Array.isArray(r2)) return "[" + (function() {
          var t3, i3, a3;
          for (a3 = [], t3 = 0, i3 = r2.length; t3 < i3; t3++) n2 = r2[t3], a3.push(e2.convert(n2));
          return a3;
        })().join(" ") + "]";
        if ("string" == typeof r2) return "/" + r2;
        if (null != r2 ? r2.isString : void 0) return "(" + r2 + ")";
        if (r2 instanceof Date) return "(D:" + t2(r2.getUTCFullYear(), 4) + t2(r2.getUTCMonth(), 2) + t2(r2.getUTCDate(), 2) + t2(r2.getUTCHours(), 2) + t2(r2.getUTCMinutes(), 2) + t2(r2.getUTCSeconds(), 2) + "Z)";
        if ("[object Object]" === {}.toString.call(r2)) {
          for (i2 in a2 = ["<<"], r2) o2 = r2[i2], a2.push("/" + i2 + " " + e2.convert(o2));
          return a2.push(">>"), a2.join("\n");
        }
        return "" + r2;
      }, e2;
    })(), exports$1.AcroForm = bt, exports$1.AcroFormAppearance = mt, exports$1.AcroFormButton = ut, exports$1.AcroFormCheckBox = dt, exports$1.AcroFormChoiceField = at, exports$1.AcroFormComboBox = st, exports$1.AcroFormEditBox = ct, exports$1.AcroFormListBox = ot, exports$1.AcroFormPasswordField = gt, exports$1.AcroFormPushButton = lt, exports$1.AcroFormRadioButton = ht, exports$1.AcroFormTextField = pt, exports$1.GState = P, exports$1.ShadingPattern = F, exports$1.TilingPattern = I, exports$1.default = j, exports$1.jsPDF = j;
  })(jspdf_node_min, jspdf_node_min.exports);
  return jspdf_node_min.exports;
}
var jspdf_node_minExports = /* @__PURE__ */ requireJspdf_node_min();
export {
  jspdf_node_minExports as j
};
