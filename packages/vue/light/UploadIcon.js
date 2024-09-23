const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M12.957 2.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414l2.293-2.293V17a1 1 0 1 0 2 0V5.414l2.293 2.293a1 1 0 1 0 1.414-1.414z" }),
    _createElementVNode("path", { d: "M4.25 17.5a1 1 0 1 0-2 0V19a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-1.5a1 1 0 1 0-2 0V19a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2z" })
  ]))
}