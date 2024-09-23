const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M6.043 9.707a1 1 0 0 1 1.414-1.414l3.36 3.36 1.3-1.06a1 1 0 0 1 1.365.093l3.27 3.515 1.268-1.352a1 1 0 1 1 1.46 1.368l-2 2.134a1 1 0 0 1-1.462-.003l-3.362-3.614-1.274 1.04a1 1 0 0 1-1.34-.067z" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M5.75 3a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4zm-2 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-14a2 2 0 0 1-2-2z",
      "clip-rule": "evenodd"
    })
  ]))
}