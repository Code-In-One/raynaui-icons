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
      d: "M5.5 4h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-14a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3m.293 5.707a1 1 0 0 1 1.414-1.414l3.36 3.36 1.3-1.06a1 1 0 0 1 1.365.093l3.27 3.515 1.268-1.352a1 1 0 1 1 1.46 1.368l-2 2.134a1 1 0 0 1-1.462-.003l-3.362-3.614-1.274 1.04a1 1 0 0 1-1.34-.067z",
      "clip-rule": "evenodd"
    })
  ]))
}