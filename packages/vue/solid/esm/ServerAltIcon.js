import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M19.955 14c1.073 0 2.015.564 2.545 1.412V6a3 3 0 0 0-3-3h-14a3 3 0 0 0-3 3v9.412A3 3 0 0 1 5.045 14z" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M5.5 15h14a3 3 0 1 1 0 6h-14a3 3 0 1 1 0-6m8.818 2a1 1 0 1 0 0 2h4.091a1 1 0 1 0 0-2zm-5.09 1a1 1 0 0 1 1-1h1.818a1 1 0 0 1 0 2h-1.819a1 1 0 0 1-1-1",
      "clip-rule": "evenodd"
    })
  ]))
}