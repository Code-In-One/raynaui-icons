const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M12.5 2a2 2 0 0 1 2 2v3.465a1 1 0 0 0 .445.832l5.11 3.406a1 1 0 0 1 .445.832v2.078a1 1 0 0 1-1.316.948l-3.368-1.122a1 1 0 0 0-1.316.948v2.199a1 1 0 0 0 .293.707l2 2c.63.63.184 1.707-.707 1.707h-1.463a1 1 0 0 1-.242-.03l-1.639-.41a1 1 0 0 0-.485 0l-1.638.41q-.119.03-.242.03H8.914c-.89 0-1.337-1.077-.707-1.707l2-2a1 1 0 0 0 .293-.707v-2.199a1 1 0 0 0-1.316-.948L5.816 15.56a1 1 0 0 1-1.316-.948v-2.078a1 1 0 0 1 .445-.832l5.11-3.406a1 1 0 0 0 .445-.832V4a2 2 0 0 1 2-2" })
  ]))
}