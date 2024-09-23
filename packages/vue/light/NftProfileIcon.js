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
      d: "M12.75 6.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0",
      "clip-rule": "evenodd"
    }),
    _createElementVNode("path", {
      "fill-rule": "evenodd",
      d: "M8.926 2a3 3 0 0 0-2.622 1.543l-3.89 7a3 3 0 0 0 0 2.914l3.89 7A3 3 0 0 0 8.926 22h7.646a3 3 0 0 0 2.623-1.543l3.889-7a3 3 0 0 0 0-2.914l-3.89-7A3 3 0 0 0 16.573 2zm-.874 2.514A1 1 0 0 1 8.926 4h7.646a1 1 0 0 1 .875.514l3.888 7a1 1 0 0 1 0 .972L18.771 17.1c-.376-.219-.85-.48-1.38-.742-1.28-.632-3.053-1.35-4.636-1.359-1.475-.009-3.107.595-4.356 1.175-.653.303-1.24.618-1.697.88l-2.539-4.57a1 1 0 0 1 0-.97zm8.454 13.639c.499.246.944.492 1.294.697l-.354.636a1 1 0 0 1-.874.514H8.926a1 1 0 0 1-.874-.514l-.379-.682c.42-.241.964-.534 1.568-.815 1.197-.556 2.492-.995 3.502-.989 1.097.006 2.518.538 3.763 1.153",
      "clip-rule": "evenodd"
    })
  ]))
}