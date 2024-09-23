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
      d: "M15.17 2.19a1 1 0 0 0-1.587.81v11.737c-.754-.286-1.764-.505-3.085-.505-1.537 0-2.655.296-3.44.652-1.394.632-1.554 2.185-1.02 3.249.35.7.883 1.622 1.576 2.382.676.74 1.65 1.485 2.884 1.485 3.15 0 5.085-2.85 5.085-5.486v-6.357c1.3-.205 2.266-.805 2.938-1.56.806-.902 1.151-1.978 1.224-2.737a1 1 0 0 0-.544-.988c-.827-.419-3-1.936-4.032-2.682M13.24 16.767q.194.099.318.183c-.19 1.663-1.447 3.05-3.06 3.05-.398 0-.874-.248-1.407-.833-.516-.566-.952-1.302-1.267-1.93a.58.58 0 0 1-.064-.39.2.2 0 0 1 .04-.082.2.2 0 0 1 .084-.06c.505-.229 1.339-.473 2.613-.473 1.388 0 2.254.29 2.743.535m3.788-9.5a2.8 2.8 0 0 1-1.446.851V4.93c.69.475 1.435.974 2.031 1.338-.114.322-.301.68-.585 1",
      "clip-rule": "evenodd"
    })
  ]))
}