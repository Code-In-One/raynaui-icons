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
      d: "M5.5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm14.571 3.621a1 1 0 0 0-1-1h-4.243a1 1 0 1 0 0 2h1.829L6.929 16.35v-1.828a1 1 0 1 0-2 0v4.243a1 1 0 0 0 1 1h4.243a1 1 0 0 0 0-2H8.343l9.728-9.728v1.828a1 1 0 0 0 2 0z",
      "clip-rule": "evenodd"
    })
  ]))
}