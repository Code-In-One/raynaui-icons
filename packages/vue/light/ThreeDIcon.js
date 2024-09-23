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
      d: "M12.75 2c-.476 0-.947.105-1.378.308L5.047 5.285A4 4 0 0 0 2.75 8.904V16c0 .998.576 1.906 1.479 2.33l7.143 3.362a3.24 3.24 0 0 0 2.756 0l7.143-3.361A2.58 2.58 0 0 0 22.75 16V8.904a4 4 0 0 0-2.297-3.62l-6.325-2.976A3.2 3.2 0 0 0 12.75 2m8 12.382-7-3.5V4.34l5.852 2.754a2 2 0 0 1 1.148 1.81zm-8-1.764 7.734 3.867a1 1 0 0 1-.065.036l-7.142 3.361a1.24 1.24 0 0 1-1.054 0l-7.142-3.361a1 1 0 0 1-.065-.036zm-1-1.736-7 3.5V8.904a2 2 0 0 1 1.148-1.81L11.75 4.34z",
      "clip-rule": "evenodd"
    })
  ]))
}