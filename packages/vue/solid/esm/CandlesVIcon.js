import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M6.5 3v3H6a1.5 1.5 0 0 0-1.5 1.5v3A1.5 1.5 0 0 0 6 12h.5v9a1 1 0 1 0 2 0v-9H9a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 9 6h-.5V3a1 1 0 0 0-2 0M18.5 9h.5a1.5 1.5 0 0 1 1.5 1.5v6A1.5 1.5 0 0 1 19 18h-.5v3a1 1 0 1 1-2 0v-3H16a1.5 1.5 0 0 1-1.5-1.5v-6A1.5 1.5 0 0 1 16 9h.5V3a1 1 0 1 1 2 0z" })
  ]))
}