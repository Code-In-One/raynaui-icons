import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18m-1.293-5.707a1 1 0 0 0-1.414 1.414 3.83 3.83 0 0 0 5.414 0 1 1 0 0 0-1.414-1.414 1.83 1.83 0 0 1-2.586 0M10.2 9.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M15.3 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3",
      "clip-rule": "evenodd"
    })
  ]))
}