const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "m17.242 4.4 1.548.687c1.023.453 1.71 1.438 1.71 2.557 0 1.974-.15 5.122-.994 7.206-1.077 2.66-3.972 4.8-5.685 5.881a2.46 2.46 0 0 1-2.642 0c-1.713-1.081-4.608-3.22-5.685-5.88C4.65 12.765 4.5 9.617 4.5 7.643c0-1.12.687-2.104 1.71-2.557L7.758 4.4l3.626-1.453a3 3 0 0 1 2.232 0z" })
  ]))
}