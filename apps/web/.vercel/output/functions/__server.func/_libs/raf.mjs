import { c as commonjsGlobal } from "../_chunks/_libs/react.mjs";
import { r as requirePerformanceNow } from "./performance-now.mjs";
var raf = { exports: {} };
var hasRequiredRaf;
function requireRaf() {
  if (hasRequiredRaf) return raf.exports;
  hasRequiredRaf = 1;
  var now = /* @__PURE__ */ requirePerformanceNow(), root = typeof window === "undefined" ? commonjsGlobal : window, vendors = ["moz", "webkit"], suffix = "AnimationFrame", raf$1 = root["request" + suffix], caf = root["cancel" + suffix] || root["cancelRequest" + suffix];
  for (var i = 0; !raf$1 && i < vendors.length; i++) {
    raf$1 = root[vendors[i] + "Request" + suffix];
    caf = root[vendors[i] + "Cancel" + suffix] || root[vendors[i] + "CancelRequest" + suffix];
  }
  if (!raf$1 || !caf) {
    var last = 0, id = 0, queue = [], frameDuration = 1e3 / 60;
    raf$1 = function(callback) {
      if (queue.length === 0) {
        var _now = now(), next = Math.max(0, frameDuration - (_now - last));
        last = next + _now;
        setTimeout(function() {
          var cp = queue.slice(0);
          queue.length = 0;
          for (var i2 = 0; i2 < cp.length; i2++) {
            if (!cp[i2].cancelled) {
              try {
                cp[i2].callback(last);
              } catch (e) {
                setTimeout(function() {
                  throw e;
                }, 0);
              }
            }
          }
        }, Math.round(next));
      }
      queue.push({
        handle: ++id,
        callback,
        cancelled: false
      });
      return id;
    };
    caf = function(handle) {
      for (var i2 = 0; i2 < queue.length; i2++) {
        if (queue[i2].handle === handle) {
          queue[i2].cancelled = true;
        }
      }
    };
  }
  raf.exports = function(fn) {
    return raf$1.call(root, fn);
  };
  raf.exports.cancel = function() {
    caf.apply(root, arguments);
  };
  raf.exports.polyfill = function(object) {
    if (!object) {
      object = root;
    }
    object.requestAnimationFrame = raf$1;
    object.cancelAnimationFrame = caf;
  };
  return raf.exports;
}
export {
  requireRaf as r
};
