const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M10.34 3.643c-1.38-.518-2.6-.977-4.274-.313-2.68 1.063-3.949 3.992-3.465 6.872.742 4.416 5.935 8.28 8.489 9.937.863.56 1.957.56 2.82 0 2.553-1.657 7.747-5.521 8.489-9.937.484-2.88-.785-5.809-3.465-6.872-1.673-.664-2.894-.205-4.274.313-.497.186-1.014.38-1.58.533-.38.102-.78.102-1.16 0-.566-.152-1.083-.347-1.58-.533m1.518 4.843a1 1 0 0 0-1.752.067L8.382 12H8a1 1 0 1 0 0 2h1a1 1 0 0 0 .894-.553l1.186-2.37 2.063 3.438a1 1 0 0 0 1.69.04L16.534 12H17a1 1 0 1 0 0-2h-1a1 1 0 0 0-.832.445l-1.123 1.685z",
      "clip-rule": "evenodd"
    })
  ]))
}