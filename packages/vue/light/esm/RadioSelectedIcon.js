import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("circle", {
      cx: "12.25",
      cy: "12",
      r: "9",
      stroke: "#000",
      "stroke-width": "2"
    }),
    _createElementVNode("circle", {
      cx: "12.25",
      cy: "12",
      r: "5",
      stroke: "#000",
      "stroke-width": "2"
    })
  ]))
}