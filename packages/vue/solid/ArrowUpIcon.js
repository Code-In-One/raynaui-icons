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
      d: "M5.5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm7.707 2.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414L11.5 7.414V19a1 1 0 1 0 2 0V7.414l2.293 2.293a1 1 0 0 0 1.414-1.414z",
      "clip-rule": "evenodd"
    })
  ]))
}