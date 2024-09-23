const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M11.132 5.04 4.858 18.983c-.53 1.176.573 2.427 1.806 2.05l5.398-1.65a1.5 1.5 0 0 1 .876 0l5.398 1.65c1.233.377 2.336-.874 1.806-2.05L13.868 5.04c-.53-1.18-2.205-1.18-2.736 0" })
  ]))
}