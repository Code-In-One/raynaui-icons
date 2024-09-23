const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M15.39 7.404a2 2 0 0 1 2.828 2.828l-7.425 7.425a3.5 3.5 0 0 1-4.95-4.95l7.319-7.318a1 1 0 1 0-1.414-1.414l-7.319 7.318a5.5 5.5 0 0 0 7.778 7.778l7.425-7.424a4 4 0 1 0-5.657-5.657l-7.637 7.637a2.5 2.5 0 0 0 3.536 3.535l7.53-7.53a1 1 0 0 0-1.413-1.415l-7.531 7.53a.5.5 0 0 1-.707-.706z" })
  ]))
}