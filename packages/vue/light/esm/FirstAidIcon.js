import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M13.75 9.25a1 1 0 1 0-2 0 1 1 0 1 0 0 2 1 1 0 1 0 2 0 1 1 0 1 0 0-2" }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M2.75 10.211a1.9 1.9 0 0 0 .972 1.658l.56 5.534A4 4 0 0 0 8.262 21h8.976a4 4 0 0 0 3.98-3.597l.56-5.534a1.9 1.9 0 0 0 .972-1.658V8.89a3.22 3.22 0 0 0-3.222-3.222h-2.316A3.67 3.67 0 0 0 13.683 3h-1.866a3.67 3.67 0 0 0-3.529 2.667H5.972A3.22 3.22 0 0 0 2.75 8.889zm3.222-2.544c-.675 0-1.222.547-1.222 1.222v1.227q.141.015.269.065l6.674 2.472a2 2 0 0 0 .695.125h.724a2 2 0 0 0 .695-.125l6.674-2.472a1 1 0 0 1 .269-.065V8.889c0-.675-.547-1.222-1.222-1.222zm.3 9.535-.466-4.596L11 14.529a4 4 0 0 0 1.389.249h.724a4 4 0 0 0 1.39-.25l5.192-1.922-.466 4.595A2 2 0 0 1 17.238 19H8.262a2 2 0 0 1-1.99-1.799M13.683 5c.546 0 1.03.262 1.334.667h-4.534A1.66 1.66 0 0 1 11.817 5z",
      "clip-rule": "evenodd"
    })
  ]))
}