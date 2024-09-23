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
      d: "M10.75 4.877c.628-1.17 2.373-1.17 3 0l6.31 11.773c.555 1.034-.192 2.35-1.499 2.35H5.94c-1.307 0-2.053-1.316-1.5-2.35zm3.88-.472.882-.473c-1.38-2.576-5.143-2.576-6.524 0l-6.31 11.773C1.365 18.152 3.212 21 5.938 21h12.622c2.727 0 4.574-2.848 3.262-5.295l-6.31-11.773zM12.25 6a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1m0 12a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5",
      "clip-rule": "evenodd"
    })
  ]))
}