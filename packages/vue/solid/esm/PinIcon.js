import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M10 2h4a3 3 0 0 1 3 3v4.092a3 3 0 0 0 .504 1.664l.942 1.412c.664.997-.05 2.332-1.248 2.332H13V22a1 1 0 1 1-2 0v-7.5H6.803c-1.198 0-1.912-1.335-1.248-2.332l.942-1.412A3 3 0 0 0 7 9.092V5a3 3 0 0 1 3-3" })
  ]))
}