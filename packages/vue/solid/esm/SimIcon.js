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
      d: "M4.5 18V6a3 3 0 0 1 3-3h7.014a3 3 0 0 1 2.052.811l2.986 2.8A3 3 0 0 1 20.5 8.8V18a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3M9 6a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z",
      "clip-rule": "evenodd"
    })
  ]))
}