const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "m8.88 8.304 5.115-4.433a2 2 0 0 1 2.194-.276l.012.006.018.008a2 2 0 0 1 .89 2.672l-.767 1.536c-.55 1.1-.826 1.65-.643 2.077q.06.137.155.252c.3.354.915.354 2.146.354h.13c1.76 0 2.639 0 3.21.515q.076.069.145.145c.515.571.515 1.45.515 3.21v1.315c0 .893 0 1.34-.179 1.734s-.515.688-1.187 1.276l-1.503 1.315c-.56.49-.839.734-1.179.862S17.24 21 16.497 21h-3.85c-.57 0-.854 0-1.125-.078-.27-.077-.512-.228-.995-.53l-1.147-.717c-.92-.574-1.379-.862-1.63-1.314s-.25-.994-.25-2.078V18.5A1.5 1.5 0 0 1 6 20H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h1a1.5 1.5 0 0 1 1.5 1.5v1.826c0-.898 0-1.348.18-1.743.181-.396.521-.69 1.2-1.28" })
  ]))
}