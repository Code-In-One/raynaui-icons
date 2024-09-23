import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M12.25 6a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1M11 16.75a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M2.25 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10m10-8a8 8 0 1 0 0 16 8 8 0 0 0 0-16",
      "clip-rule": "evenodd"
    })
  ]))
}