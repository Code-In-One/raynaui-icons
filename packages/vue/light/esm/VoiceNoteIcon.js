import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M11.5 3a1 1 0 1 1 2 0v18a1 1 0 1 1-2 0zM20.5 3a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1M5 8a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V9a1 1 0 0 0-1-1M17.5 8a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0zM8.5 4a1 1 0 0 0-1 1v12a1 1 0 1 0 2 0V5a1 1 0 0 0-1-1" })
  ]))
}