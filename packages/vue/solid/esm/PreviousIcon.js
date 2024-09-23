import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M3.5 6a1 1 0 0 0-1 1v11a1 1 0 1 0 2 0v-3.976l5.602 2.799a1.657 1.657 0 0 0 2.398-1.482v-2.84c0 .588.306 1.176.916 1.48l5.686 2.842a1.657 1.657 0 0 0 2.398-1.482V9.66a1.657 1.657 0 0 0-2.398-1.482l-5.686 2.841c-.61.305-.916.893-.916 1.48v-2.84a1.657 1.657 0 0 0-2.398-1.481l-5.602 2.8V7a1 1 0 0 0-1-1" })
  ]))
}