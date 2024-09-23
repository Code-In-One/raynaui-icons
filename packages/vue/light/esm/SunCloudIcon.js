import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M12.75 1a1 1 0 0 1 1 1v1.5a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M5.777 11.378a7 7 0 1 1 7.825 7.57C13.136 20.682 11.623 22 9.75 22h-4.5c-1.986 0-3.5-1.687-3.5-3.647 0-1.224.582-2.328 1.5-2.994.032-1.747 1.043-3.294 2.527-3.981m2.07-.364A5.002 5.002 0 0 1 17.75 12a5 5 0 0 1-4.095 4.918c-.26-1.225-1.037-2.263-2.105-2.825-.506-1.658-1.931-2.93-3.703-3.079M5.25 15.441C5.25 14.038 6.31 13 7.5 13c1.057 0 2.005.812 2.21 1.98a1 1 0 0 0 .654.771c.777.273 1.386 1.075 1.386 2.073 0 1.256-.948 2.176-2 2.176h-4.5c-.775 0-1.5-.683-1.5-1.647 0-.714.41-1.292.938-1.527a1 1 0 0 0 .584-1.042 3 3 0 0 1-.022-.343",
      "clip-rule": "evenodd"
    }),
    _createElementVNode("path", { d: "M20.61 15.134a1 1 0 1 0-1 1.732l1.299.75a1 1 0 1 0 1-1.732zM19.244 8.5a1 1 0 0 1 .366-1.366l1.299-.75a1 1 0 1 1 1 1.732l-1.3.75a1 1 0 0 1-1.365-.366M4.59 6.134a1 1 0 0 0-1 1.732l1.299.75a1 1 0 0 0 1-1.732z" })
  ]))
}