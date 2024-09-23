const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M17.055 2.8a6.88 6.88 0 0 0-9.3 6.2H4.75a1 1 0 0 0 0 2h3v1.5h-3a1 1 0 1 0 0 2h3v.262a6.88 6.88 0 0 0 9.305 6.438l.474-.179a6.75 6.75 0 0 0 4.195-4.796 1 1 0 1 0-1.948-.45 4.75 4.75 0 0 1-2.952 3.375l-.474.178a4.88 4.88 0 0 1-6.6-4.566V14.5h6a1 1 0 1 0 0-2h-6V11h6a1 1 0 1 0 0-2H9.756a4.88 4.88 0 0 1 6.594-4.328l.474.178a4.75 4.75 0 0 1 2.952 3.375 1 1 0 1 0 1.948-.45c-.507-2.2-2.082-4-4.195-4.796z" })
  ]))
}