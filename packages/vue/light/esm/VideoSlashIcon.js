import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M23.457 1.293a1 1 0 0 1 0 1.414l-20 20a1 1 0 0 1-1.414-1.414l20-20a1 1 0 0 1 1.414 0M6.362 10.65a1.61 1.61 0 0 0-1.02-1.02.537.537 0 0 1 0-1.018c.482-.16.86-.538 1.02-1.02a.537.537 0 0 1 1.019 0c.16.482.538.86 1.019 1.02.49.163.49.856 0 1.019-.481.16-.859.538-1.02 1.019a.537.537 0 0 1-1.018 0" }),
    _createElementVNode("path", { d: "M15.75 4c.633 0 1.231.147 1.763.409l-1.598 1.598A2 2 0 0 0 15.75 6h-10a2 2 0 0 0-2 2v8c0 .596.26 1.131.674 1.497L3.01 18.913A4 4 0 0 1 1.75 16V8a4 4 0 0 1 4-4z" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M15.75 18H9.578l-2 2h8.172a4 4 0 0 0 3.894-3.08l.906.68c1.319.989 3.2.048 3.2-1.6V8c0-1.248-1.079-2.09-2.175-1.997L17.75 9.828V16a2 2 0 0 1-2 2m4-3.5 2 1.5V8l-2 1.5z",
      "clip-rule": "evenodd"
    })
  ]))
}