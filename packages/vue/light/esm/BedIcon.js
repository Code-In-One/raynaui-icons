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
      d: "M3.25 4a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2 2 2 0 0 0-2 2v7a2 2 0 0 0 1.875 1.996V20a1 1 0 1 0 2 0h14.25a1 1 0 1 0 2 0v-.004A2 2 0 0 0 23.25 18v-7a2 2 0 0 0-2-2h-13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2h5v1h-5zm0 5h18v7h-18z",
      "clip-rule": "evenodd"
    })
  ]))
}