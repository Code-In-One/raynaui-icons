import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M6 6.792a2.5 2.5 0 1 1 2 0v6.432a1 1 0 0 1-.103.442c.535.205.98.59 1.265 1.078 3.812.105 5.613-.698 6.551-1.894.979-1.246 1.268-3.19 1.286-6.058a2.5 2.5 0 1 1 2 0c-.015 2.858-.272 5.458-1.712 7.293-1.498 1.908-4.038 2.73-7.901 2.665a2.5 2.5 0 0 1-1.391 1.544q.005.05.005.103V21.5a1 1 0 1 1-2 0v-3.103q0-.053.005-.103a2.5 2.5 0 0 1 .098-4.628A1 1 0 0 1 6 13.224z" })
  ]))
}