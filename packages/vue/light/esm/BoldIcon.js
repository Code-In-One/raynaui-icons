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
      d: "M14.75 21H5.389a.14.14 0 0 1-.139-.139V12h9.5a4.5 4.5 0 1 1 0 9M13.75 12H5.379a.13.13 0 0 1-.129-.129V3h8.5a4.5 4.5 0 1 1 0 9"
    })
  ]))
}