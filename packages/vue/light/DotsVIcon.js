const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M13.75 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M13.75 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12.25 21.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" })
  ]))
}