const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "m4.434 16.672-.377 2.64a1 1 0 0 0 1.132 1.131l2.64-.377a3 3 0 0 0 1.696-.848l9.268-9.268-4.242-4.243-9.268 9.268a3 3 0 0 0-.849 1.697M15.966 4.294l4.24 4.24a3 3 0 0 0-4.24-4.24" })
  ]))
}