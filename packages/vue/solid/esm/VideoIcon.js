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
      d: "M15.5 5h-10a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1l2.4 1.8a1 1 0 0 0 1.6-.8V8a1 1 0 0 0-1.6-.8L18.5 9V8a3 3 0 0 0-3-3M5.093 9.63c.481.161.859.539 1.019 1.02.163.49.856.49 1.019 0 .16-.481.538-.859 1.019-1.02a.537.537 0 0 0 0-1.018 1.61 1.61 0 0 1-1.02-1.02.537.537 0 0 0-1.018 0c-.16.482-.538.86-1.02 1.02a.537.537 0 0 0 0 1.019",
      "clip-rule": "evenodd"
    })
  ]))
}