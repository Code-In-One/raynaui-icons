const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M8.06 2h8.882l-.677 2.156a6 6 0 0 0-.274 1.728l-.031 2.704a6 6 0 0 0 .753 2.98l4.14 7.462c.74 1.333-.225 2.97-1.749 2.97H5.897c-1.524 0-2.488-1.637-1.748-2.97l4.382-7.9c.184-.331.321-.684.41-1.048q.058.006.119.007h2.44a1 1 0 1 0 0-2h-1.44V7h1.44a1 1 0 1 0 0-2H9.06q-.04 0-.08.003a6 6 0 0 0-.228-.927z" })
  ]))
}