import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M5.5 3.5h14a3 3 0 0 1 3 3V7h-20v-.5a3 3 0 0 1 3-3" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M2.5 9v8.5a3 3 0 0 0 3 3h10.401A3 3 0 0 1 15.5 19c0-.78.297-1.49.785-2.023A1 1 0 0 1 16.5 15h1.764c.55-.614 1.348-1 2.236-1 .768 0 1.47.289 2 .764V9zm2 7a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1",
      "clip-rule": "evenodd"
    }),
    _createElementVNode("path", { d: "M21.5 17a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1z" })
  ]))
}