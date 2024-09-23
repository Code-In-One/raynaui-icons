const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M13.25 15a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0z" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M8.25 6.75a3.75 3.75 0 1 1 7.5 0v.75a1 1 0 1 0 2 0v-.75a5.75 5.75 0 0 0-11.5 0V9a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-6a4 4 0 0 0-4-4h-10zm-4 6.25a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2z",
      "clip-rule": "evenodd"
    })
  ]))
}