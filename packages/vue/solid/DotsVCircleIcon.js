const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18m-1.25-9a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0M12 8.75a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5m-1.25 7.75a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0",
      "clip-rule": "evenodd"
    })
  ]))
}