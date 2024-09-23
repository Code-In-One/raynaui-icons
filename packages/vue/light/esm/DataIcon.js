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
      d: "M13.75 6.83a3.001 3.001 0 1 0-2 0V11h-4a4 4 0 0 0-4 4v2.17a3.001 3.001 0 1 0 2 0V15a2 2 0 0 1 2-2h4v4.17a3.001 3.001 0 1 0 2 0V13h4a2 2 0 0 1 2 2v2.17a3.001 3.001 0 1 0 2 0V15a4 4 0 0 0-4-4h-4zm-1-3.83a1 1 0 1 1 0 2 1 1 0 0 1 0-2m8 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-8 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2m-8 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2",
      "clip-rule": "evenodd"
    })
  ]))
}