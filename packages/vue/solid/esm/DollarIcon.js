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
      d: "M13.5 2a1 1 0 1 0-2 0v1a5 5 0 0 0 0 10v6a3 3 0 0 1-3-3 1 1 0 1 0-2 0 5 5 0 0 0 5 5v1a1 1 0 1 0 2 0v-1a5 5 0 0 0 0-10V5a3 3 0 0 1 3 3 1 1 0 1 0 2 0 5 5 0 0 0-5-5zm-2 3a3 3 0 0 0 0 6zm2 8v6a3 3 0 1 0 0-6",
      "clip-rule": "evenodd"
    })
  ]))
}