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
      d: "M9.25 2a1 1 0 0 0-2 0v1h-1a4 4 0 0 0-4 4v11a4 4 0 0 0 4 4h9a1 1 0 1 0 0-2h-9a2 2 0 0 1-2-2V9.5h16V16a1 1 0 1 0 2 0V7a4 4 0 0 0-4-4h-1V2a1 1 0 1 0-2 0v1h-6zm7 4a1 1 0 0 1-1-1h-6a1 1 0 0 1-2 0h-1a2 2 0 0 0-2 2v.5h16V7a2 2 0 0 0-2-2h-1a1 1 0 0 1-1 1",
      "clip-rule": "evenodd"
    }),
    _createElementVNode("path", { d: "M18.25 19a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z" })
  ]))
}