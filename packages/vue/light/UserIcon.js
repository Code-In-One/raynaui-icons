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
      d: "M12.25 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10m-3 5a3 3 0 1 1 6 0 3 3 0 0 1-6 0M12.25 23c-1.54 0-3.77-.35-5.445-1.083-.822-.36-1.658-.874-2.143-1.62a2.44 2.44 0 0 1-.412-1.369c.005-.51.173-1 .456-1.455C6.076 15.266 8.876 13 12.25 13s6.175 2.266 7.544 4.473c.283.455.45.944.456 1.455a2.44 2.44 0 0 1-.412 1.37c-.486.745-1.321 1.26-2.143 1.62C16.02 22.65 13.79 23 12.25 23m-5.845-4.473c-.131.212-.154.349-.155.422 0 .068.017.148.087.256.167.256.57.574 1.27.88 1.37.6 3.316.915 4.643.915s3.273-.315 4.643-.915c.7-.306 1.104-.625 1.27-.88a.45.45 0 0 0 .087-.256c0-.073-.024-.21-.155-.422C16.973 16.718 14.735 15 12.25 15s-4.722 1.718-5.845 3.527",
      "clip-rule": "evenodd"
    })
  ]))
}