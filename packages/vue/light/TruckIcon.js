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
      d: "M7.25 21a3 3 0 0 0 2.83-2h6.34a3.001 3.001 0 0 0 5.66 0h.17a1 1 0 0 0 1-1v-3.363c0-.56-.117-1.114-.345-1.625l-.95-2.137A4 4 0 0 0 18.3 8.5h-2.05V7a4 4 0 0 0-4-4h-7a4 4 0 0 0-4 4v10a2 2 0 0 0 2 2h1.17a3 3 0 0 0 2.83 2m-4-14a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v10h-4.17a3.001 3.001 0 0 0-5.66 0H3.25zm17.828 6.824c.113.256.172.533.172.813v1.127A3.001 3.001 0 0 0 16.42 17h-.17v-6.5h2.05a2 2 0 0 1 1.828 1.188zM6.25 18a1 1 0 1 1 2 0 1 1 0 0 1-2 0m12 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0",
      "clip-rule": "evenodd"
    })
  ]))
}