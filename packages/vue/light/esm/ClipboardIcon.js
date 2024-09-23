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
      d: "M10.25 1a3 3 0 0 0-2.83 2h-.17a4 4 0 0 0-4 4v11a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4h-.17a3 3 0 0 0-2.83-2zm-1 3a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1m-4 3a2 2 0 0 1 2-2h.17a3 3 0 0 0 2.83 2h4a3 3 0 0 0 2.83-2h.17a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2z",
      "clip-rule": "evenodd"
    })
  ]))
}