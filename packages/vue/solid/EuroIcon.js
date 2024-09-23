const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M13.19 3a6.355 6.355 0 0 0-6.345 6H4a1 1 0 0 0 0 2h2.78l-.046 1.5H4a1 1 0 1 0 0 2h2.671l-.074 2.375A4 4 0 0 0 10.595 21H17.5a1 1 0 1 0 0-2h-6.905a2 2 0 0 1-1.999-2.062l.076-2.438H13a1 1 0 1 0 0-2H8.735l.047-1.5H13a1 1 0 1 0 0-2H8.85a4.355 4.355 0 0 1 4.34-4h1.074c.992 0 1.898.56 2.342 1.447a1 1 0 1 0 1.788-.894A4.62 4.62 0 0 0 14.264 3z" })
  ]))
}