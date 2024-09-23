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
      stroke: "#000",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M2.25 17.2V12c0-5.523 4.477-10 10-10v0c5.523 0 10 4.477 10 10v9"
    }),
    _createElementVNode("path", {
      stroke: "#000",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5.25 18.714v-7.021c0-.647.119-1.289.35-1.893v0m13.65 2.057a6.78 6.78 0 0 0-2.37-5.143A7.06 7.06 0 0 0 12.25 5c-2.087 0-3.96.894-5.243 2.313"
    }),
    _createElementVNode("path", {
      stroke: "#000",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M8.25 13v-1a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v0"
    }),
    _createElementVNode("path", {
      stroke: "#000",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12.25 12v1a2 2 0 0 0 2 2v0a2 2 0 0 0 2-2v-1"
    }),
    _createElementVNode("path", {
      stroke: "#000",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M8.25 12.4v.1a5.5 5.5 0 0 0 5.5 5.5v0a5.5 5.5 0 0 0 5.5-5.5V12M17.584 20a6.47 6.47 0 0 1-3.5 1.022 6.4 6.4 0 0 1-1.834-.265M8.25 19v1"
    })
  ]))
}