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
      d: "M13.948 2.105 12.75 3.194l-1.198-1.09C9.677.402 7.057 1.932 6.98 4H4.25a3 3 0 0 0-3 3v1.889c0 .804.45 1.503 1.111 1.86v8.25a4 4 0 0 0 4 4H18.14a4 4 0 0 0 4-4v-8.25a2.11 2.11 0 0 0 1.111-1.86V7a3 3 0 0 0-3-3h-1.73c-.077-2.069-2.697-3.6-4.572-1.895M8.268 6H4.25a1 1 0 0 0-1 1v1.889c0 .061.05.111.111.111H21.14c.061 0 .111-.05.111-.111V7a1 1 0 0 0-1-1H8.268m5.482 5h-3v2.688c0 .034.008.05.015.06a.1.1 0 0 0 .048.04.1.1 0 0 0 .062.013c.011-.001.03-.005.056-.027a2.11 2.11 0 0 1 2.638 0c.027.022.045.026.056.027a.1.1 0 0 0 .062-.013.1.1 0 0 0 .048-.04.1.1 0 0 0 .015-.06zm-5 0v2.688c0 1.77 2.048 2.754 3.43 1.648a.11.11 0 0 1 .14 0c1.382 1.106 3.43.122 3.43-1.649V11h4.389v8a2 2 0 0 1-2 2H6.36a2 2 0 0 1-2-2v-8zm1.456-7.415.457.415H9.007c.084-.502.73-.842 1.2-.415M16.493 4c-.084-.502-.73-.842-1.2-.415L14.838 4z",
      "clip-rule": "evenodd"
    })
  ]))
}