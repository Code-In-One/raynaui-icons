import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M5.5 4h14a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V6a2 2 0 0 1 2-2M4.5 10.5v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7z" })
  ]))
}