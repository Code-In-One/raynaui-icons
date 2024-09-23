const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M20.759 4.282a1 1 0 0 0-1.468 1.354h-2.916c-3.256 0-5.75 2.852-5.75 6.182 0 2.393-1.76 4.182-3.75 4.182H3.75a1 1 0 1 0 0 2h3.125c3.256 0 5.75-2.851 5.75-6.182 0-2.393 1.76-4.182 3.75-4.182h3.337l-.44.57a1 1 0 1 0 1.582 1.224l1.687-2.182a1 1 0 0 0-.095-1.33z" }),
    _createElementVNode("path", { d: "M3.75 6a1 1 0 0 0 0 2h3.125c.83 0 1.604.301 2.236.826a1 1 0 1 0 1.278-1.539A5.48 5.48 0 0 0 6.875 6zM20.854 14.57a1 1 0 0 0-1.582 1.224l.44.57h-3.337a3.5 3.5 0 0 1-2.312-.89 1 1 0 1 0-1.317 1.504c.982.86 2.245 1.386 3.629 1.386h2.916a1 1 0 0 0 1.468 1.354l1.687-1.637a1 1 0 0 0 .095-1.33z" })
  ]))
}