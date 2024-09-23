import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M12.5 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M10.5 16a2 2 0 1 1 4 0 2 2 0 0 1-4 0" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M16.647 2H8.354a3 3 0 0 0-2.996 2.85l-.7 14A3 3 0 0 0 7.654 22h9.693a3 3 0 0 0 2.996-3.15l-.7-14A3 3 0 0 0 16.647 2M9 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0m3.5 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8",
      "clip-rule": "evenodd"
    })
  ]))
}