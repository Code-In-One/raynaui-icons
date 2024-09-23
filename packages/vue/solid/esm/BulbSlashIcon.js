import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M20.707 3.293a1 1 0 0 1 0 1.414l-14.5 14.5a1 1 0 0 1-1.414-1.414l14.5-14.5a1 1 0 0 1 1.414 0M10 21a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1M12 3c1.711 0 3.268.661 4.43 1.743l-9.187 9.186A6.5 6.5 0 0 1 12 3M9.566 17.263l8.844-8.845q.09.528.09 1.082a6.5 6.5 0 0 1-3.577 5.807l-.85 3.398a.39.39 0 0 1-.377.295c-.394 0-.784.075-1.172.15l-.194.036a2 2 0 0 1-.33.036c-.101 0-.216-.014-.33-.036l-.194-.037c-.388-.074-.778-.149-1.172-.149a.39.39 0 0 1-.378-.295z" })
  ]))
}