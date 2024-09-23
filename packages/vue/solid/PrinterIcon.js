const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M8.5 3v1h8V3a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M2.5 15V8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-1v-5a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v5h-1a3 3 0 0 1-3-3m4-7a1 1 0 1 1 0 2 1 1 0 0 1 0-2",
      "clip-rule": "evenodd"
    }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M7.5 21v-8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1m2.5-5.5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1m1 2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z",
      "clip-rule": "evenodd"
    })
  ]))
}