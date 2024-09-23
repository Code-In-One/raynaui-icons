const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M13.75 2a1 1 0 1 0-2 0v1.5a1 1 0 1 0 2 0z" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M5.75 12a7 7 0 1 1 14 0 7 7 0 0 1-14 0m7-5a5 5 0 1 0 0 10 5 5 0 0 0 0-10",
      "clip-rule": "evenodd"
    }),
    _createElementVNode("path", { d: "M12.75 19a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V20a1 1 0 0 1 1-1M19.244 15.5a1 1 0 0 1 1.366-.366l1.3.75a1 1 0 0 1-1 1.732l-1.3-.75a1 1 0 0 1-.366-1.366M19.61 7.134a1 1 0 0 0 1 1.732l1.3-.75a1 1 0 0 0-1-1.732zM4.59 6.134a1 1 0 0 0-1 1.732l1.3.75a1 1 0 0 0 1-1.732zM3.224 17.5a1 1 0 0 1 .366-1.366l1.3-.75a1 1 0 1 1 1 1.732l-1.3.75a1 1 0 0 1-1.366-.366" })
  ]))
}