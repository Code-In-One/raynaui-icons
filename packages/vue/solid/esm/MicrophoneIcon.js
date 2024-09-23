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
      d: "M12.5 3a6 6 0 0 0-6 6v4a6 6 0 0 0 12 0V9a6 6 0 0 0-6-6m-1 6a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zm3-1a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1",
      "clip-rule": "evenodd"
    }),
    _createElementVNode("path", { d: "M5.449 15.684a1 1 0 1 0-1.897.632c2.866 8.6 15.03 8.6 17.897 0a1 1 0 0 0-1.897-.632c-2.26 6.776-11.844 6.776-14.103 0" })
  ]))
}