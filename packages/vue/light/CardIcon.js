const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M4.75 16a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1M16.75 15a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M1.75 6.5a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v11a4 4 0 0 1-4 4h-14a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2V7h18v-.5a2 2 0 0 0-2-2zm16 4.5h-18v8.5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z",
      "clip-rule": "evenodd"
    })
  ]))
}