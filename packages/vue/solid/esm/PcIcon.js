import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M5.5 2.5h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-6v2h3a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2h3v-2h-6a3 3 0 0 1-3-3v-10a3 3 0 0 1 3-3" })
  ]))
}