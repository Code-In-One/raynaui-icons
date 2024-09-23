const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M19.015 1.857a1 1 0 1 0-1.28 1.536l1.345 1.12a10.05 10.05 0 0 0-6.33 5.525 10.05 10.05 0 0 0-6.33-5.524l1.345-1.12a1 1 0 0 0-1.28-1.537L3.487 4.355a1 1 0 0 0-.249 1.233l1.993 3.984a1 1 0 0 0 1.788-.894l-1.115-2.23a8.03 8.03 0 0 1 5.721 7.692v7.485a1 1 0 0 0 1.125.992q.062.008.125.008a1 1 0 0 0 1-1V14.14a8.03 8.03 0 0 1 5.721-7.693l-1.115 2.23a1 1 0 1 0 1.788.895l1.993-3.984a.997.997 0 0 0-.249-1.233z" })
  ]))
}