const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M23.207 2.707a1 1 0 0 0-1.414-1.414l-20 20a1 1 0 1 0 1.414 1.414zM12 3c1.478 0 2.841.493 3.933 1.324L3.025 17.233A5.002 5.002 0 0 1 5.56 10.39 6.5 6.5 0 0 1 12 3M16.5 20H8.743l11.03-11.03A6 6 0 0 1 16.5 20" })
  ]))
}