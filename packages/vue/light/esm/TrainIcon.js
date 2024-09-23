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
      d: "M6.25 10a6 6 0 1 1 12 0v3a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3zm6-4a4 4 0 0 0-4 4v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a4 4 0 0 0-4-4",
      "clip-rule": "evenodd"
    }),
    _createElementVNode("path", { d: "M10.25 17a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2z" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M3.25 10a9 9 0 0 1 18 0v6a6 6 0 0 1-6 6h-6a6 6 0 0 1-6-6zm9-7a7 7 0 0 0-7 7v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-6a7 7 0 0 0-7-7",
      "clip-rule": "evenodd"
    })
  ]))
}