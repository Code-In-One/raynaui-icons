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
      d: "M19.5 2h-14a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h5.586l-3.293 3.293a1 1 0 1 0 1.414 1.414l3.293-3.293 3.293 3.293a1 1 0 0 0 1.414-1.414L13.914 18H19.5a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3M5.793 14.374a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.34-.068l1.273 1.04 3.362-3.613a1 1 0 0 1 1.462-.003l2 2.133a1 1 0 1 1-1.46 1.368l-1.267-1.352-3.27 3.516a1 1 0 0 1-1.366.094l-1.3-1.062-3.36 3.36a1 1 0 0 1-1.414 0",
      "clip-rule": "evenodd"
    })
  ]))
}