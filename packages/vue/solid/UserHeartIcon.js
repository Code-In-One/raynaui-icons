const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M16.5 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M12.5 22c-2.867 0-8.351-1.33-6.694-4 1.245-2.008 3.765-4 6.694-4s5.449 1.992 6.694 4c1.657 2.67-3.827 4-6.694 4M20.5 3.584s-.897-.966-2.093-.414c-.771.356-1.012 1.055-.867 1.85.184 1.01 1.283 1.916 2.089 2.457.53.356 1.212.356 1.742 0 .806-.54 1.905-1.446 2.09-2.457.144-.795-.097-1.494-.868-1.85-1.196-.552-2.093.414-2.093.414" })
  ]))
}