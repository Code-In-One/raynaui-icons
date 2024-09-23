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
      d: "M2.5 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-14a3 3 0 0 1-3-3zm1.793 12.707a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 1.414L7.414 16H20a1 1 0 1 1 0 2H7.414l1.293 1.293a1 1 0 1 1-1.414 1.414zM20.707 6.293a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L17.586 8H5a1 1 0 0 1 0-2h12.586l-1.293-1.293a1 1 0 0 1 1.414-1.414z",
      "clip-rule": "evenodd"
    })
  ]))
}