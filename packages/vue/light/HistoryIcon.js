const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M6.05 3a1 1 0 1 0-2 0v3.6a1 1 0 0 0 1 1h3.6a1 1 0 0 0 0-2H7.449A8 8 0 1 1 4.25 12a1 1 0 1 0-2 0c0 5.523 4.477 10 10 10s10-4.477 10-10-4.477-10-10-10a9.96 9.96 0 0 0-6.2 2.154z" }),
    _createElementVNode("path", { d: "M12.25 8.5a1 1 0 1 0-2 0v5a1 1 0 0 0 1 1h3a1 1 0 1 0 0-2h-2z" })
  ]))
}