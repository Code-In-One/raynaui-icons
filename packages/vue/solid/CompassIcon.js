const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M12.5 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10m1.043-13.521-3.117 1.73a1 1 0 0 0-.514.891l.06 3.564a1 1 0 0 0 1.485.857l3.116-1.73a1 1 0 0 0 .515-.89l-.06-3.565a1 1 0 0 0-1.485-.857",
      "clip-rule": "evenodd"
    })
  ]))
}