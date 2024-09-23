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
      d: "m10.818 19.383-3.832-5.96a6.555 6.555 0 1 1 11.028 0l-3.832 5.96a2 2 0 0 1-3.364 0M12.5 13.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7",
      "clip-rule": "evenodd"
    })
  ]))
}