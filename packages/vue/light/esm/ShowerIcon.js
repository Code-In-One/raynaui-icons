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
      d: "M9.25 7a3 3 0 0 1 5.975-.39l-1.682 1.683a1 1 0 0 0 1.414 1.414l2-2 2-2a1 1 0 0 0-1.414-1.414L16.834 5A5.001 5.001 0 0 0 7.25 7v13a1 1 0 1 0 2 0z",
      "clip-rule": "evenodd"
    })
  ]))
}