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
      d: "M4 6.148v.588c0 1.06.45 2.069 1.237 2.777L6 10.2a6.04 6.04 0 0 1 2 4.49v4.81a1.5 1.5 0 0 0 3 0V7.86a4.86 4.86 0 0 0-.611-2.36l-.49-.88A3.148 3.148 0 0 0 4 6.147m17 0v.588c0 1.06-.45 2.069-1.237 2.777L19 10.2a6.04 6.04 0 0 0-2 4.49v4.81a1.5 1.5 0 0 1-3 0V7.86c0-.827.21-1.639.611-2.36l.49-.88A3.148 3.148 0 0 1 21 6.147",
      "clip-rule": "evenodd"
    })
  ]))
}