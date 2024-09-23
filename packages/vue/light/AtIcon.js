const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("g", { "clip-path": "url(#a)" }, [
      _createElementVNode("path", {
        stroke: "#000",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M20.25 12s-.006 2.518-.5 4l-.056.172c-.621 1.942-3.668 1.848-3.944-.172v0m-7.5-2.6c0 2.755 2.699 4.7 5.313 3.83l.159-.054c.35-.117.684-.28.991-.485L15.75 16m0 0c-.24-1.012.397-1.612.699-2.93.228-.997-.078-2.006-.747-2.778A3.75 3.75 0 0 0 12.87 9h-.274a4.347 4.347 0 0 0-4.347 4.347v.268M14.75 20l-2.536.241C7.944 20.649 4.25 17.29 4.25 13a8 8 0 0 1 8-8h.533a7.467 7.467 0 0 1 7.467 7.467"
      })
    ]),
    _createElementVNode("defs", null, [
      _createElementVNode("clipPath", { id: "a" }, [
        _createElementVNode("path", { d: "M.25 0h24v24h-24z" })
      ])
    ])
  ]))
}