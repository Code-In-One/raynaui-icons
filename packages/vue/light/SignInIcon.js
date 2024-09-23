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
      d: "M7.75 4a1 1 0 1 0 0-2h-1.5a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h1.5a1 1 0 1 0 0-2h-1.5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm-.207 8.707a1 1 0 0 1 0-1.414l4-4a1 1 0 1 1 1.414 1.414L10.664 11H22.25a1 1 0 1 1 0 2H10.664l2.293 2.293a1 1 0 0 1-1.414 1.414z",
      "clip-rule": "evenodd"
    })
  ]))
}