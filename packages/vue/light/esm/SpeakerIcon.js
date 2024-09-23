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
      d: "M8.75 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0m3.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M12.25 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0",
      "clip-rule": "evenodd"
    }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M4.11 4.8A4 4 0 0 1 8.103 1h8.293a4 4 0 0 1 3.995 3.8l.7 14a4 4 0 0 1-3.995 4.2H7.404a4 4 0 0 1-3.995-4.2zM8.103 3a2 2 0 0 0-1.997 1.9l-.7 14A2 2 0 0 0 7.404 21h9.693a2 2 0 0 0 1.997-2.1l-.7-14A2 2 0 0 0 16.397 3z",
      "clip-rule": "evenodd"
    })
  ]))
}