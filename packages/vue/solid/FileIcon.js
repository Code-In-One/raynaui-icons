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
      d: "M13.5 2h-6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-9h-3a4 4 0 0 1-4-4zm-6 10a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1m1 4a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z",
      "clip-rule": "evenodd"
    }),
    _createElementVNode("path", { d: "M20.297 8a3 3 0 0 0-.492-.834L16.4 3.079a3 3 0 0 0-.9-.73V6a2 2 0 0 0 2 2z" })
  ]))
}