const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M6.902 8.47a1 1 0 0 0 .318 1.378L9.863 11.5 7.22 13.152a1 1 0 0 0 1.06 1.696l2.643-1.652a2 2 0 0 0 0-3.392L8.28 8.152a1 1 0 0 0-1.378.318M13.75 13a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M2.75 7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-12a4 4 0 0 1-4-4zm4-2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z",
      "clip-rule": "evenodd"
    })
  ]))
}