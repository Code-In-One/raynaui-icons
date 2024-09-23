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
      "fill-rule": "evenodd",
      d: "M6.145 2a2 2 0 0 0-1.988 1.78l-.777 7A2 2 0 0 0 5.367 13h5.883v7h-3a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-3v-7h5.883a2 2 0 0 0 1.988-2.22l-.778-7A2 2 0 0 0 18.355 2zm-.778 9 .778-7h12.21l.778 7z",
      "clip-rule": "evenodd"
    })
  ]))
}