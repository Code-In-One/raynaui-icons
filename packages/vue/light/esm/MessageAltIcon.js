import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M6.75 10a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1M7.75 13a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2z" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M1.75 16a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V9.297a2 2 0 0 1 .264-.993l.75-1.312C23.524 5.66 22.562 4 21.026 4H5.75a4 4 0 0 0-4 4zm4 2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h15.277l-.75 1.312a4 4 0 0 0-.527 1.985V16a2 2 0 0 1-2 2z",
      "clip-rule": "evenodd"
    })
  ]))
}