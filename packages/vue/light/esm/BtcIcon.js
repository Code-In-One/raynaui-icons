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
      d: "M5.76 11.864a1 1 0 0 1-.01-.155V5a2 2 0 0 1 2-2h1V2a1 1 0 1 1 2 0v1h.5V2a1 1 0 1 1 2 0v1.025a5 5 0 0 1 3.245 8.288A5.002 5.002 0 0 1 14.75 21h-1.5v1a1 1 0 1 1-2 0v-1h-.5v1a1 1 0 1 1-2 0v-1h-1a2 2 0 0 1-2-2v-7q0-.07.01-.136M7.75 11h5a3 3 0 1 0 0-6h-5zm0 2v6h7a3 3 0 1 0 0-6z",
      "clip-rule": "evenodd"
    })
  ]))
}