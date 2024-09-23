import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M7.679 1C5.269 1 3.25 2.89 3.25 5.301v14.494c0 3.12 3.991 4.302 5.868 1.98l2.557-3.166a.756.756 0 0 1 1.15 0l2.557 3.165c1.877 2.323 5.868 1.142 5.868-1.98V10.5a1 1 0 1 0-2 0v9.295c0 1.07-1.516 1.708-2.312.723l-2.557-3.166c-1.087-1.345-3.175-1.345-4.262 0l-2.557 3.166c-.796.985-2.312.347-2.312-.723V5.3C5.25 4.066 6.301 3 7.679 3h7.071a1 1 0 1 0 0-2z" }),
    _createElementVNode("path", { d: "M19.25 2a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0V6h2a1 1 0 1 0 0-2h-2z" })
  ]))
}