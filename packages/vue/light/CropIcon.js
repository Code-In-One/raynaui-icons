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
      d: "M7.75 2a1 1 0 0 0-2 0v3h-2a1 1 0 0 0 0 2h2v10a2 2 0 0 0 2 2h10v3a1 1 0 1 0 2 0v-3h2a1 1 0 1 0 0-2h-2V7a2 2 0 0 0-2-2h-10zm0 15V7h10v10z",
      "clip-rule": "evenodd"
    })
  ]))
}