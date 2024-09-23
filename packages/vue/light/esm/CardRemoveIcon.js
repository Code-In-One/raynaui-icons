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
      d: "M1.75 6.5a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v7.75a1 1 0 1 1-2 0V9h-18v8.5a2 2 0 0 0 2 2h9.5a1 1 0 1 1 0 2h-9.5a4 4 0 0 1-4-4zm2 .5h18v-.5a2 2 0 0 0-2-2h-14a2 2 0 0 0-2 2z",
      "clip-rule": "evenodd"
    }),
    _createElementVNode("path", { d: "M4.75 16a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1M18.75 17a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z" })
  ]))
}