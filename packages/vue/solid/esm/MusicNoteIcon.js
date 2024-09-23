import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"

export default function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M14.56 2.476a1 1 0 0 0-1.226.974v11.437c-.682-.213-1.562-.37-2.678-.37-1.615 0-2.737.328-3.477.683-.84.402-1.032 1.428-.62 2.294.765 1.613 2.223 4.024 4.097 4.024 2.586 0 4.38-2.294 4.656-4.777a1 1 0 0 0 .008-.105c.016-.118.024-.244.013-.373V9.96c2.8-.406 3.74-2.843 3.854-4.115-.441-.239-1.366-.967-2.279-1.686-.717-.565-1.426-1.124-1.888-1.434a1 1 0 0 0-.46-.248" })
  ]))
}