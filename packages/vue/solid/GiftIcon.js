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
      d: "M4.5 5h2.73c.077-2.069 2.697-3.6 4.572-1.895L13 4.194l1.198-1.09C16.073 1.402 18.693 2.932 18.77 5H20.5a2 2 0 0 1 2 2v1.889c0 .613-.497 1.111-1.111 1.111H3.61A1.11 1.11 0 0 1 2.5 8.889V7a2 2 0 0 1 2-2m6.413 0H9.257c.084-.502.73-.842 1.2-.415zm5.83 0c-.084-.502-.73-.842-1.2-.415L15.088 5z",
      "clip-rule": "evenodd"
    }),
    _createElementVNode("path", { d: "M10 13.688V12H3.611v7a3 3 0 0 0 3 3H18.39a3 3 0 0 0 3-3v-7H15v1.688c0 .931-1.078 1.45-1.806.867a1.11 1.11 0 0 0-1.388 0A1.111 1.111 0 0 1 10 13.688" })
  ]))
}