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
      d: "M6.5 2h12a2 2 0 0 1 2 2v9.586l.793-.793a1 1 0 0 1 1.414 1.414l-1.5 1.5A1 1 0 0 1 20.5 16v2a2 2 0 0 1-2 2v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1h-6v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1a2 2 0 0 1-2-2v-2a1 1 0 0 1-.707-.293l-1.5-1.5a1 1 0 1 1 1.414-1.414l.793.793V4a2 2 0 0 1 2-2m11 3h-10v10h10z",
      "clip-rule": "evenodd"
    })
  ]))
}