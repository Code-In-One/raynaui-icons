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
      d: "M5.5 19V9.58a1 1 0 0 1 .504-.868l6.007-3.433a1 1 0 0 1 .982-.005L16 6.945A1 1 0 0 1 18 7v1.1l1.015.609a1 1 0 0 1 .485.857V19h1a1 1 0 1 1 0 2h-16a1 1 0 1 1 0-2zm6 0h2v-2a1 1 0 1 0-2 0zm5-5a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1m-1-2a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2zm-4 2a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1m-1-2a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2z",
      "clip-rule": "evenodd"
    })
  ]))
}