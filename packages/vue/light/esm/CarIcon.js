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
      d: "M17.25 21a2 2 0 0 1-2-2v-1h-6v1a2 2 0 0 1-2 2h-2.5a2 2 0 0 1-2-2v-1.208a2.5 2.5 0 0 1-1.5-2.292V12c0-.447.146-.86.394-1.192l-.101-.1a1 1 0 0 1 1.263-1.54l1.04-3.117A3 3 0 0 1 6.691 4h11.116a3 3 0 0 1 2.846 2.051l1.04 3.118a1 1 0 0 1 1.263 1.538l-.1.101c.247.333.393.745.393 1.192v3.5a2.5 2.5 0 0 1-1.5 2.292V19a2 2 0 0 1-2 2zM5.743 6.684A1 1 0 0 1 6.692 6h11.116a1 1 0 0 1 .95.684L19.862 10H4.637zM3.75 16a.5.5 0 0 1-.5-.5V12h18v3.5a.5.5 0 0 1-.5.5zm13.5 2h2.5v1h-2.5zm-12.5 0h2.5v1h-2.5z",
      "clip-rule": "evenodd"
    })
  ]))
}