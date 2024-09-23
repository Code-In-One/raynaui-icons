import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M17.75 4a1 1 0 1 1 2 0v3.2a1 1 0 0 1-1 1h-3.112a1 1 0 0 1 0-2h.685A6.6 6.6 0 0 0 12.528 5C8.811 5 5.75 8.107 5.75 12a1 1 0 1 1-2 0c0-4.944 3.903-9 8.778-9 1.96 0 3.765.659 5.222 1.766zM7.75 20a1 1 0 1 1-2 0v-3.2a1 1 0 0 1 1-1h3.112a1 1 0 0 1 0 2h-.685a6.6 6.6 0 0 0 3.796 1.2c3.716 0 6.777-3.107 6.777-7a1 1 0 1 1 2 0c0 4.944-3.903 9-8.777 9a8.6 8.6 0 0 1-5.223-1.766z" })
  ]))
}