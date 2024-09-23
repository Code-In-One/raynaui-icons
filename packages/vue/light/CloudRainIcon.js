const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M6.75 9.5a5.5 5.5 0 0 1 10.907-1.013 1 1 0 0 0 .668.766 5.003 5.003 0 0 1-.74 9.678 1 1 0 0 0 .33 1.972A7.002 7.002 0 0 0 19.497 7.56 7.5 7.5 0 0 0 4.756 9.8 6.002 6.002 0 0 0 6.55 20.88a1 1 0 1 0 .398-1.96 4.002 4.002 0 0 1-.75-7.608 1 1 0 0 0 .602-1.058A6 6 0 0 1 6.75 9.5" }),
    _createElementVNode("path", { d: "M11.212 17.775a1 1 0 1 0-1.924-.55l-1 3.5a1 1 0 1 0 1.923.55zM13.025 16.539a1 1 0 0 1 .686 1.236l-1 3.5a1 1 0 1 1-1.922-.55l1-3.5a1 1 0 0 1 1.236-.687M16.212 17.775a1 1 0 1 0-1.923-.55l-1 3.5a1 1 0 1 0 1.922.55z" })
  ]))
}