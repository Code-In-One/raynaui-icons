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
      d: "M19.75 8c-.537 0-1.045.12-1.5.337V8a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v.337a3.5 3.5 0 0 0-5 3.163v1c0 .756.24 1.455.647 2.027-.398.366-.647.89-.647 1.473v1.6a2 2 0 0 0 1.88 1.996 1 1 0 0 0 1.99.004h14.26a1 1 0 0 0 1.99-.004 2 2 0 0 0 1.88-1.996V16c0-.583-.25-1.107-.647-1.473a3.5 3.5 0 0 0 .647-2.027v-1a3.5 3.5 0 0 0-3.5-3.5m0 6a1.5 1.5 0 0 1-1.5-1.5v-1a1.5 1.5 0 0 1 3 0v1a1.5 1.5 0 0 1-1.5 1.5M4.749 14a1.5 1.5 0 0 1-1.499-1.5v-1a1.5 1.5 0 0 1 3-.002v1.004A1.5 1.5 0 0 1 4.751 14zM3.25 16v1.6h18V16zm5-8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6h-8z",
      "clip-rule": "evenodd"
    })
  ]))
}