import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
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
      d: "M22 4H8M22 12H8M22 20H8"
    }),
    _createElementVNode("circle", {
      cx: "1.25",
      cy: "1.25",
      r: "1.25",
      transform: "matrix(-1 0 0 1 5 2.75)"
    }),
    _createElementVNode("circle", {
      cx: "1.25",
      cy: "1.25",
      r: "1.25",
      transform: "matrix(-1 0 0 1 5 10.75)"
    }),
    _createElementVNode("circle", {
      cx: "1.25",
      cy: "1.25",
      r: "1.25",
      transform: "matrix(-1 0 0 1 5 18.75)"
    })
  ]))
}