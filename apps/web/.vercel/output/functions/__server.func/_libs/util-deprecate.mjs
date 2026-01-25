import require$$1 from "util";
var node;
var hasRequiredNode;
function requireNode() {
  if (hasRequiredNode) return node;
  hasRequiredNode = 1;
  node = require$$1.deprecate;
  return node;
}
export {
  requireNode as r
};
