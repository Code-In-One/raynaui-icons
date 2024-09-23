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
      d: "M2.5 17.5v-11a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3h-14a3 3 0 0 1-3-3m8.447-8.776 4.764 2.382a1 1 0 0 1 0 1.788l-4.764 2.382a1 1 0 0 1-1.447-.894V9.618a1 1 0 0 1 1.447-.894",
      "clip-rule": "evenodd"
    })
  ]))
}