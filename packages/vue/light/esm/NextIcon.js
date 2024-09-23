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
      d: "M22.75 6.5a1 1 0 1 0-2 0v2.859l-5.155-2.576c-1.766-.883-3.845.4-3.845 2.376v.2L6.595 6.783C4.83 5.9 2.75 7.183 2.75 9.159v5.682c0 1.976 2.08 3.26 3.845 2.377l5.155-2.576v.2c0 1.975 2.08 3.258 3.845 2.376l5.155-2.576V17.5a1 1 0 1 0 2 0zm-11 5.5a.65.65 0 0 0-.363-.587L5.7 8.572a.657.657 0 0 0-.951.587v5.682c0 .488.514.806.951.588l5.686-2.842a.65.65 0 0 0 .363-.586m2 2.841c0 .488.514.806.951.588l5.686-2.842a.656.656 0 0 0 0-1.174L14.7 8.572a.657.657 0 0 0-.951.587z",
      "clip-rule": "evenodd"
    })
  ]))
}