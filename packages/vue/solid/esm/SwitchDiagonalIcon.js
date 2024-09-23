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
      d: "M2.5 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-14a3 3 0 0 1-3-3zm8.586 15.778a1 1 0 0 1-1-1v-4.242a1 1 0 1 1 2 0v1.828l7.485-7.485a1 1 0 1 1 1.414 1.414L13.5 18.778h1.829a1 1 0 1 1 0 2zm2.828-17.556a1 1 0 0 1 1 1v4.242a1 1 0 1 1-2 0V6.636L5.43 14.121a1 1 0 1 1-1.414-1.414L11.5 5.222H9.672a1 1 0 1 1 0-2z",
      "clip-rule": "evenodd"
    })
  ]))
}