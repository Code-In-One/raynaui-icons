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
      d: "M6.896 11.178c8.975-9.605 13.116-8.727 14.464-8.153.573 1.348 1.451 5.488-8.154 14.463-.326-4.57-1.74-5.983-6.31-6.31M17.83 8.676a1.5 1.5 0 1 1-2.122-2.121 1.5 1.5 0 0 1 2.122 2.121",
      "clip-rule": "evenodd"
    }),
    _createElementVNode("path", { d: "M9.698 6.718C8.768 6.024 5.813 6.51 2.98 9.9c.836.836 1.807.62 2.542.458.244-.054.462-.102.64-.104zM17.476 14.687c.695.93.208 3.885-3.182 6.717-.836-.836-.62-1.806-.458-2.54.054-.245.103-.463.105-.642zM6.87 17.515s.47-2.357 1.06-3.182c0 0 1.27-.144 1.768.354s.353 1.767.353 1.767c-1.178.707-3.182 1.061-3.182 1.061" })
  ]))
}