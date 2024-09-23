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
      d: "M14.25 2a4 4 0 0 0-4 4v2h-4a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4v-2h4a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4zm0 12h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2.535c1.196.692 2 1.984 2 3.465zm-10-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z",
      "clip-rule": "evenodd"
    })
  ]))
}