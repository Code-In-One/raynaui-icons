import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M8.5 1a1 1 0 0 1 1 1v1.5h-2V2a1 1 0 0 1 1-1M15.5 4h-6v1a1 1 0 0 1-2 0V4h-1a3 3 0 0 0-3 3v.5h18V7a3 3 0 0 0-3-3h-1v1a1 1 0 1 1-2 0zM3.5 9.5V18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9.5zM17.5 2a1 1 0 1 0-2 0v1.5h2z" })
  ]))
}