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
      d: "M13.218 6.11a2.666 2.666 0 1 1 0 5.331 2.666 2.666 0 0 1 0-5.33m.666 2.666a.666.666 0 1 0-1.332 0 .666.666 0 0 0 1.332 0",
      "clip-rule": "evenodd"
    }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M3.89 5.946a4 4 0 0 1 4-4h10.656a4 4 0 0 1 4 4v5.66c0 .545-.109 1.064-.306 1.538l-.28 2.06a3.97 3.97 0 0 1-.957 2.1q-.02.061-.048.123l-.948 2.008a4 4 0 0 1-5.95 1.543l-8.59-6.166a1 1 0 0 1-.19-.177 3.99 3.99 0 0 1-1.387-3.03zm14.656 9.66c.462 0 .905-.078 1.317-.222a2 2 0 0 1-2.428 1.2l-3.344-.978zM6.59 4.426c-.428.367-.7.912-.7 1.52v5.66c0 .608.272 1.153.7 1.52a1 1 0 0 1 .799-1.602h1.666a1 1 0 1 1 0 2H7.388q-.04 0-.077-.003a2 2 0 0 0 .579.085h10.656a2 2 0 0 0 .579-.085l-.077.003h-1.666a1 1 0 1 1 0-2h1.666a1 1 0 0 1 .799 1.601c.428-.366.7-.911.7-1.52V5.947c0-.608-.272-1.153-.7-1.52a1 1 0 0 1-.799 1.602h-1.666a1 1 0 1 1 0-2h1.666q.04 0 .077.003a2 2 0 0 0-.579-.085H7.89a2 2 0 0 0-.58.085l.078-.003h1.666a1 1 0 1 1 0 2H7.388a1 1 0 0 1-.799-1.602m11.569 14.237a4 4 0 0 1-1.285-.16l-4.784-1.399 3.134 2.25a2 2 0 0 0 2.935-.691",
      "clip-rule": "evenodd"
    })
  ]))
}