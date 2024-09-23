const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M12.5 8.5v-4A1.5 1.5 0 0 0 11 3H5a1.5 1.5 0 0 0-1.5 1.5v4A1.5 1.5 0 0 0 5 10h6a1.5 1.5 0 0 0 1.5-1.5M21.5 19.5v-4A1.5 1.5 0 0 0 20 14H5a1.5 1.5 0 0 0-1.5 1.5v4A1.5 1.5 0 0 0 5 21h15a1.5 1.5 0 0 0 1.5-1.5" })
  ]))
}