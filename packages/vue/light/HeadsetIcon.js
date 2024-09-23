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
      d: "M12.25 3c-5.523 0-10 4.477-10 10v5.412a2.588 2.588 0 0 0 5.177 0V16.25c0-1.942-1.715-2.842-3.177-2.543V13a8 8 0 1 1 16 0v.697c-1.461-.298-3.176.598-3.176 2.542v2.173c0 .476.128.923.353 1.306-.885.44-2.093.782-3.677.782a1 1 0 0 0 0 2c2.444 0 4.256-.69 5.497-1.533q.202.033.415.033a2.59 2.59 0 0 0 2.588-2.588V13c0-5.523-4.477-10-10-10m7.252 15.978a.59.59 0 0 0 .748-.566v-2.324a.53.53 0 0 0-.204-.34.65.65 0 0 0-.42-.105.64.64 0 0 0-.4.167c-.075.073-.152.196-.152.429v2.173c0 .219.12.41.297.511q.068.023.131.055M4.25 18.412v-2.32a.53.53 0 0 1 .205-.335.64.64 0 0 1 .42-.103c.17.014.31.08.4.168.075.074.152.197.152.429v2.16a.588.588 0 0 1-1.177 0",
      "clip-rule": "evenodd"
    })
  ]))
}