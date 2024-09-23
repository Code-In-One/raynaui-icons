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
      d: "M2.5 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-14a3 3 0 0 1-3-3zm10-1.5a1 1 0 0 1 .707.293l5 5a1 1 0 0 1-1.414 1.414L12.5 5.914l-4.293 4.293a1 1 0 0 1-1.414-1.414l5-5A1 1 0 0 1 12.5 3.5m.707 16.707a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414l4.293 4.293 4.293-4.293a1 1 0 0 1 1.414 1.414z",
      "clip-rule": "evenodd"
    })
  ]))
}