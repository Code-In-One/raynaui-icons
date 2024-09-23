const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M12.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M5.806 18c-1.657 2.67 3.827 4 6.694 4s8.35-1.33 6.694-4c-1.245-2.008-3.765-4-6.694-4s-5.449 1.992-6.694 4" })
  ]))
}