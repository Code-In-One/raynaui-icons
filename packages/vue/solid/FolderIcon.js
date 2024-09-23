const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M18.5 20h-12a3 3 0 0 1-3-3V6.567A2.567 2.567 0 0 1 6.067 4h2.547c.979 0 2.671 2.184 3.405 2.831.14.123.58.369.766.369H18.5a3 3 0 0 1 2.999 3V17a3 3 0 0 1-3 3" })
  ]))
}