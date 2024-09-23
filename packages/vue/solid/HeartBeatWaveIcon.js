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
      stroke: "#000",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M2.5 12h1.323a1 1 0 0 0 .928-.629l2.82-7.05c.336-.838 1.522-.838 1.857 0l6.143 15.358c.336.838 1.522.838 1.858 0l2.82-7.05a1 1 0 0 1 .928-.629H22.5"
    })
  ]))
}