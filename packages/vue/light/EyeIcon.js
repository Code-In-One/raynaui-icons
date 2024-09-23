const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M4.545 13.983a1 1 0 0 1-1.712 1.034 14 14 0 0 1-.844-1.625 1.85 1.85 0 0 1 .085-1.642c.43-.77 1.52-2.55 3.2-4.15 1.675-1.596 4.032-3.1 6.976-3.1s5.301 1.504 6.976 3.1c1.68 1.6 2.769 3.38 3.2 4.15.283.505.316 1.107.084 1.642-.162.374-.437.953-.844 1.625a1 1 0 1 1-1.711-1.034c.327-.54.553-1.008.69-1.319-.405-.715-1.366-2.252-2.798-3.616C16.367 7.638 14.48 6.5 12.25 6.5S8.132 7.638 6.653 9.048c-1.432 1.364-2.393 2.901-2.8 3.616.138.31.365.778.692 1.319" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M12.25 8a5 5 0 1 0 0 10 5 5 0 0 0 0-10m-3 5a3 3 0 1 1 6 0 3 3 0 0 1-6 0",
      "clip-rule": "evenodd"
    })
  ]))
}