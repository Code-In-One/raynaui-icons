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
      d: "M12.75 1c-6.075 0-11 4.925-11 11s4.925 11 11 11c4.608 0 8.553-2.834 10.19-6.85a1.34 1.34 0 0 0-.017-1.067 1.42 1.42 0 0 0-.62-.658c-.455-.246-1.143-.295-1.684.161A6 6 0 0 1 10.75 10c0-2.805 2.025-5.21 4.66-5.84.69-.164 1.057-.748 1.131-1.255.04-.267.012-.588-.152-.89a1.34 1.34 0 0 0-.845-.657A11 11 0 0 0 12.75 1m-9 11a9 9 0 0 1 9.175-8.998C10.465 4.368 8.75 6.993 8.75 10a8 8 0 0 0 11.274 7.301A9 9 0 0 1 3.75 12",
      "clip-rule": "evenodd"
    })
  ]))
}