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
      d: "M17.5 16.823c0 2.859-2.239 5.177-5 5.177s-5-2.318-5-5.177a5.23 5.23 0 0 1 2.059-4.188.71.71 0 0 0 .294-.565V4.647a2.647 2.647 0 0 1 5.294 0v7.423c0 .224.115.43.294.565a5.23 5.23 0 0 1 2.059 4.188M13.5 5a1 1 0 1 0-2 0v11a1 1 0 1 0 2 0z",
      "clip-rule": "evenodd"
    })
  ]))
}