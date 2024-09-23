const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M16.75 14a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1M15.75 12a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2zM11.75 14a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1M10.75 12a1 1 0 1 0 0-2h-1a1 1 0 0 0 0 2z" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M13.86 4.538a2 2 0 0 0-2.22 0l-5 3.333a2 2 0 0 0-.89 1.664V19h-1a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2h-1V9.535a2 2 0 0 0-.89-1.664zM13.75 19v-2a1 1 0 1 0-2 0v2h-4V9.535l5-3.333 5 3.333V19z",
      "clip-rule": "evenodd"
    })
  ]))
}