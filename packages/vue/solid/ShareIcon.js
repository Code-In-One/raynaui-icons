const { createElementVNode: _createElementVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = require("vue")

module.exports = function render(_ctx, _cache) {
  return (_openBlock(), _createElementBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon"
  }, [
    _createElementVNode("path", { d: "M20 6a3 3 0 0 1-5.225 2.012l-.073.046a46 46 0 0 1-.866.534c-.693.416-1.604.938-2.415 1.315-.69.32-1.73.71-2.568 1.01-.358.127-.687.242-.948.332a3 3 0 0 1 .003 1.492c.252.083.566.189.91.309.83.29 1.884.683 2.63 1.056.715.358 1.615.872 2.322 1.289a84 84 0 0 1 1 .598 3 3 0 1 1-.767 1.875l-.028-.017-.023-.014-.068-.042a66 66 0 0 0-1.129-.677 41 41 0 0 0-2.202-1.224c-.621-.31-1.568-.667-2.395-.956a51 51 0 0 0-1.344-.448l-.083-.026-.013-.004a3 3 0 1 1 0-4.92l.082-.028a71 71 0 0 0 1.38-.479c.84-.3 1.8-.662 2.399-.94.712-.331 1.551-.809 2.227-1.215a43 43 0 0 0 1.065-.662l.062-.04.015-.01.004-.002.05-.032L14 6a3 3 0 1 1 6 0" })
  ]))
}