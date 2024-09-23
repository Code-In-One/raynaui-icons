const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M10.769 3.451c.797-1.268 2.665-1.268 3.462 0l1.929 3.067c.28.446.726.766 1.242.892l3.547.866c1.466.358 2.043 2.113 1.07 3.255l-2.355 2.76a2 2 0 0 0-.474 1.445l.263 3.601c.108 1.49-1.402 2.575-2.801 2.012l-3.384-1.36a2.06 2.06 0 0 0-1.536 0l-3.384 1.36c-1.4.563-2.91-.522-2.8-2.012l.262-3.601a2 2 0 0 0-.474-1.444L2.98 11.53c-.973-1.142-.396-2.897 1.07-3.255l3.547-.866a2.04 2.04 0 0 0 1.242-.892z" })
  ]))
}