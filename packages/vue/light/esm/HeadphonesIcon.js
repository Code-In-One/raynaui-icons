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
      d: "M21.25 16v-3a9 9 0 1 0-18 0v3m18 0v2.412a1.588 1.588 0 0 1-3.177 0v-2.173c0-1.976 2.881-2.192 3.177-.239m-18 0v2.412a1.588 1.588 0 0 0 3.176 0V16.25c0-1.97-2.867-2.196-3.176-.251"
    })
  ]))
}