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
      d: "M10.5 2a3 3 0 0 0-3 3 3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3 3 3 0 0 0-3-3zm-1 3a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1",
      "clip-rule": "evenodd"
    })
  ]))
}