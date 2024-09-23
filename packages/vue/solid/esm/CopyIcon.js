import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M18.5 15a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v1.7h.5a3 3 0 0 1 3 3V15z" }),
    _createElementVNode("path", { d: "M6.5 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3z" })
  ]))
}