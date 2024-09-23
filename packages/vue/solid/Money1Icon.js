const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M13.5 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M5.5 5h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-14a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1.5a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm11 1a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1m-11 8a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm11 1a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1m-4-7.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6",
      "clip-rule": "evenodd"
    })
  ]))
}