import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M23.207 1.293a1 1 0 0 1 0 1.414l-20 20a1 1 0 0 1-1.414-1.414l20-20a1 1 0 0 1 1.414 0M5.592 16.08a8 8 0 0 1-.143-.396 1 1 0 0 0-1.898.632q.226.675.524 1.28zM6.59 20.739c4.724 3.762 12.622 2.288 14.859-4.423a1 1 0 1 0-1.898-.632c-1.734 5.204-7.79 6.411-11.53 3.623zM12.5 3c1.7 0 3.236.707 4.328 1.844l-10.03 10.03A6 6 0 0 1 6.5 13V9a6 6 0 0 1 6-6" }),
    _createElementVNode("path", { d: "M12.5 19a5.97 5.97 0 0 1-3.23-.942l9.228-9.227L18.5 9v4a6 6 0 0 1-6 6" })
  ]))
}