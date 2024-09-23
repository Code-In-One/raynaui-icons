const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M5.531 2a3.281 3.281 0 0 0-2.688 5.163l6.045 8.636a2 2 0 0 1 .362 1.147v2.21c0 2.05 2.157 3.384 3.99 2.467a3.64 3.64 0 0 0 2.01-3.252v-1.425a2 2 0 0 1 .361-1.147l6.046-8.636A3.281 3.281 0 0 0 18.969 2zm7.719 16.371c0 .62-.35 1.186-.904 1.463a.757.757 0 0 1-1.096-.677v-2.211a4 4 0 0 0-.723-2.294L4.482 6.016A1.281 1.281 0 0 1 5.53 4h13.438a1.281 1.281 0 0 1 1.05 2.016l-6.046 8.636a4 4 0 0 0-.723 2.294z",
      "clip-rule": "evenodd"
    })
  ]))
}