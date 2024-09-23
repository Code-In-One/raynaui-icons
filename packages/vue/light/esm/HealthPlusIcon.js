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
      d: "M10.75 2a2 2 0 0 0-2 2v4h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-4V4a2 2 0 0 0-2-2zm-2 8a2 2 0 0 0 2-2V4h4v4a2 2 0 0 0 2 2h4v4h-4a2 2 0 0 0-2 2v4h-4v-4a2 2 0 0 0-2-2h-4v-4z",
      "clip-rule": "evenodd"
    })
  ]))
}