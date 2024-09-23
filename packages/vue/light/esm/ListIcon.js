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
      d: "M21.75 4h-14M21.75 12h-14M21.75 20h-14"
    }),
    _createElementVNode("circle", {
      cx: "1.25",
      cy: "1.25",
      r: "1.25",
      transform: "matrix(-1 0 0 1 4.75 2.75)"
    }),
    _createElementVNode("circle", {
      cx: "1.25",
      cy: "1.25",
      r: "1.25",
      transform: "matrix(-1 0 0 1 4.75 10.75)"
    }),
    _createElementVNode("circle", {
      cx: "1.25",
      cy: "1.25",
      r: "1.25",
      transform: "matrix(-1 0 0 1 4.75 18.75)"
    })
  ]))
}