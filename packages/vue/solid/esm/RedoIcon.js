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
      d: "M5.5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm15.457 6.707a1 1 0 0 0 0-1.414l-4-4a1 1 0 1 0-1.414 1.414L17.836 7H10.25a6.5 6.5 0 0 0 0 13h8a1 1 0 1 0 0-2h-8a4.5 4.5 0 1 1 0-9h7.586l-2.293 2.293a1 1 0 0 0 1.414 1.414z",
      "clip-rule": "evenodd"
    })
  ]))
}