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
      d: "M8.25 7.33a3.001 3.001 0 1 0-2 0v5.34a3.001 3.001 0 0 0 .002 5.66l-.002.067V21.5a1 1 0 1 0 2 0v-3.103q0-.034-.002-.067a3 3 0 0 0 1.729-1.577c3.672.012 6.107-.817 7.56-2.668 1.348-1.719 1.66-4.109 1.706-6.753A3.001 3.001 0 0 0 18.25 1.5a3 3 0 0 0-1.008 5.827c-.05 2.576-.362 4.356-1.279 5.523-.875 1.115-2.5 1.889-5.807 1.903a3 3 0 0 0-1.906-2.082zm0-2.83a1 1 0 1 0-2 0 1 1 0 0 0 2 0m10 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-10 10a1 1 0 1 0-2 0 1 1 0 0 0 2 0",
      "clip-rule": "evenodd"
    })
  ]))
}