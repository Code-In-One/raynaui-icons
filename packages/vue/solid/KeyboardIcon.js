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
      d: "M16.5 4.5a1 1 0 1 0-2 0c0 .173-.06.456-.212.666-.114.159-.314.334-.788.334-.53 0-1.034.11-1.449.398-.433.3-.661.723-.753 1.137-.115.525-.018 1.054.121 1.465H6.5a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3h-5a1 1 0 0 0-.106-.447 1.6 1.6 0 0 1-.126-.356 1 1 0 0 1-.02-.173c.047-.012.127-.024.252-.024 1.126 0 1.926-.492 2.412-1.166A3.23 3.23 0 0 0 16.5 4.5M6.5 11a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm4 1a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1m6-1a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm3 5a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1m-12 1a1 1 0 1 0 0-2h-1a1 1 0 1 0 0 2zm2-1a1 1 0 0 1 1-1H15a1 1 0 1 1 0 2h-4.5a1 1 0 0 1-1-1",
      "clip-rule": "evenodd"
    })
  ]))
}