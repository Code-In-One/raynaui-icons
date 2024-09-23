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
      d: "M6.917 2C4.88 2 3.25 3.668 3.25 5.7v12.279C3.25 20.188 5.022 22 7.234 22h11.472c.397 0 .906-.09 1.282-.495.378-.407.411-.905.386-1.227a3.8 3.8 0 0 0-.219-.933c-.09-.26-.202-.537-.306-.79l-.027-.069c-.243-.597-.418-1.058-.457-1.41a1 1 0 0 1-.007-.108c.303-.046.595-.145.86-.317.398-.258.64-.62.783-.981.25-.63.25-1.417.249-2.012V5.7c0-2.032-1.63-3.7-3.667-3.7zm10.46 15.302a3 3 0 0 1-.02-.302H5.25v.979c0 1.128.9 2.021 1.984 2.021h11.032c-.073-.208-.165-.436-.274-.703l-.031-.077c-.215-.53-.508-1.25-.583-1.918m1.745-2.326a.7.7 0 0 1-.205.024H5.25V5.7c0-.95.758-1.7 1.667-1.7h10.666c.91 0 1.667.75 1.667 1.7v7.916c0 .332-.003.607-.022.846a1.7 1.7 0 0 1-.087.472zm.01-.004h.002zm-.751 5.471v.005-.003",
      "clip-rule": "evenodd"
    })
  ]))
}