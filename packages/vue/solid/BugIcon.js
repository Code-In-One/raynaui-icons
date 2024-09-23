const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M8.772 4.91 8.75 5h7.5l-.022-.09a3.842 3.842 0 0 0-7.456 0M19.5 12v-1.634q.112-.065.207-.159l2-2a1 1 0 0 0-1.414-1.414L19.26 7.825A3 3 0 0 0 16.5 6h-8a3 3 0 0 0-2.761 1.825L4.707 6.793a1 1 0 0 0-1.414 1.414l2 2q.095.094.207.16V12H3a1 1 0 1 0 0 2h2.5q.036 0 .07-.002a7 7 0 0 0 .576 1.942l-1.853 1.853a1 1 0 1 0 1.414 1.414l1.559-1.559A6.98 6.98 0 0 0 12.5 20a6.98 6.98 0 0 0 5.234-2.352l1.559 1.56a1 1 0 0 0 1.414-1.415l-1.853-1.853c.281-.605.478-1.258.576-1.942l.07.002H21a1 1 0 1 0 0-2z" })
  ]))
}