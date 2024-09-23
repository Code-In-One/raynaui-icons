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
      d: "M17.5 14a7 7 0 0 1-8.736 6.783l-4.36-.545a.875.875 0 0 1-.754-1.012l.267-1.6a.9.9 0 0 0 .005-.253l-.205-1.637A7 7 0 1 1 17.5 14m-11 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2m3-1a1 1 0 1 0 2 0 1 1 0 0 0-2 0m5 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2",
      "clip-rule": "evenodd"
    }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M21.5 8a5 5 0 0 0-9.413-2.352A8.51 8.51 0 0 1 18.9 12.7l1.953-.244a.625.625 0 0 0 .54-.723l-.191-1.143a.6.6 0 0 1-.004-.18l.146-1.17A5 5 0 0 0 21.5 8",
      "clip-rule": "evenodd"
    })
  ]))
}