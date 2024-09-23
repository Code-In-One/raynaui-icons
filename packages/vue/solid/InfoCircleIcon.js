const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-9-6a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1m-1.25 10.75a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0",
      "clip-rule": "evenodd"
    })
  ]))
}