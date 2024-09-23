import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M10.25 6a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2V7a1 1 0 0 1 1-1" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M1.25 10a9 9 0 1 1 16.032 5.618l4.675 4.675a1 1 0 0 1-1.414 1.414l-4.675-4.675A9 9 0 0 1 1.25 10m9-7a7 7 0 1 0 0 14 7 7 0 0 0 0-14",
      "clip-rule": "evenodd"
    })
  ]))
}