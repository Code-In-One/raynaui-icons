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
      d: "M5.5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm4.207 1.793a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414L8 6.914V8.5c0 6.627 5.373 12 12 12a1 1 0 1 0 0-2c-5.523 0-10-4.477-10-10V6.914l2.293 2.293a1 1 0 1 0 1.414-1.414z",
      "clip-rule": "evenodd"
    })
  ]))
}