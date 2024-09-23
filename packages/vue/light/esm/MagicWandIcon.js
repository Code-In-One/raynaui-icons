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
      d: "M11.21 3.157a2 2 0 0 0-2.926-.105l-.582.583a2 2 0 0 0-.097 2.724l11.687 13.484a2 2 0 0 0 2.925.105l.583-.582a2 2 0 0 0 .097-2.724zM9.116 5.049l.583-.582.186.215-.582.582zm1.5 1.73.582-.582 10.187 11.754-.582.582z",
      "clip-rule": "evenodd"
    }),
    _createElementVNode("path", { d: "M4.363 8.65a1.61 1.61 0 0 0-1.02-1.02.537.537 0 0 1 0-1.018c.482-.16.86-.538 1.02-1.02a.537.537 0 0 1 1.019 0c.16.482.538.86 1.019 1.02.49.163.49.856 0 1.019-.481.16-.859.538-1.02 1.019a.537.537 0 0 1-1.018 0M8.363 15.65a1.61 1.61 0 0 0-1.02-1.02.537.537 0 0 1 0-1.018c.482-.16.86-.538 1.02-1.02a.537.537 0 0 1 1.019 0c.16.482.538.86 1.019 1.02.49.163.49.856 0 1.019-.481.16-.859.538-1.02 1.019a.537.537 0 0 1-1.018 0" })
  ]))
}