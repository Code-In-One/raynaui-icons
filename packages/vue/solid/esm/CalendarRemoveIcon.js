import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M8.5 2a1 1 0 0 1 1 1v1.5h-2V3a1 1 0 0 1 1-1M15.5 5h-6v1a1 1 0 0 1-2 0V5h-1a3 3 0 0 0-3 3v.5h18V8a3 3 0 0 0-3-3h-1v1a1 1 0 1 1-2 0zM3.5 10.5V19a3 3 0 0 0 3 3h9.17a3 3 0 0 1 2.83-4h3v-7.5zM17.5 3a1 1 0 1 0-2 0v1.5h2z" }),
    _createElementVNode("path", { d: "M18.5 20a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z" })
  ]))
}