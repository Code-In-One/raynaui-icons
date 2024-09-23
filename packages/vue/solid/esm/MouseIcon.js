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
      d: "M16.5 2a1 1 0 1 0-2 0c0 .173-.06.456-.212.666-.114.159-.314.334-.788.334-.53 0-1.034.11-1.449.398-.433.3-.661.723-.753 1.137-.123.56-.005 1.123.15 1.544A7 7 0 0 0 5.5 13v2a7 7 0 1 0 14 0v-2a7 7 0 0 0-6.002-6.93 1 1 0 0 0-.104-.517 1.6 1.6 0 0 1-.126-.356 1 1 0 0 1-.02-.173c.047-.012.127-.024.252-.024 1.126 0 1.926-.492 2.412-1.166A3.23 3.23 0 0 0 16.5 2m-4 5.5a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1",
      "clip-rule": "evenodd"
    })
  ]))
}