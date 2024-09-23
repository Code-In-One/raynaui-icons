const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M2.5 6a4 4 0 0 1 4-4h2a1 1 0 0 1 0 2h-2a2 2 0 0 0-2 2v2a1 1 0 0 1-2 0zM22.5 6a4 4 0 0 0-4-4h-2a1 1 0 1 0 0 2h2a2 2 0 0 1 2 2v2a1 1 0 1 0 2 0zM2.5 18a4 4 0 0 0 4 4h2a1 1 0 1 0 0-2h-2a2 2 0 0 1-2-2v-2a1 1 0 1 0-2 0zM22.5 18a4 4 0 0 1-4 4h-2a1 1 0 1 1 0-2h2a2 2 0 0 0 2-2v-2a1 1 0 1 1 2 0zM8.457 8.762 11.944 7v4.62q-.225.062-.438.176L7.5 13.947v-3.566c0-.693.373-1.324.957-1.619M13.056 11.62q.226.062.438.176l4.006 2.151v-3.566c0-.693-.373-1.324-.957-1.619L13.056 7zM12.003 12.864 8.2 14.905l4.007 2.025a.65.65 0 0 0 .586 0l4.007-2.025-3.803-2.041a1.04 1.04 0 0 0-.994 0" })
  ]))
}