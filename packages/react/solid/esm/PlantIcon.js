import * as React from "react";
function PlantIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 25 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M13.5 12.653c1.084-1.394 3.192-2.653 7-2.653-1.105 3.452-4.672 4.835-7 5.22v3.005c.303.093.682.227.996.407.432.247.985.665 1.393.987a31 31 0 0 1 .698.567l.044.038.015.013h.001a1 1 0 0 1-1.295 1.525l-.002-.002-.01-.009-.04-.033a24 24 0 0 0-.65-.529c-.412-.325-.859-.657-1.146-.82-.156-.09-.431-.188-.726-.271-.104-.03-.2-.054-.278-.073a8 8 0 0 0-.278.073c-.294.083-.57.181-.726.27-.287.164-.734.496-1.146.821a29 29 0 0 0-.65.53l-.04.032-.01.009-.002.002a1 1 0 0 1-1.296-1.524c.654.77.688.809 0 0l.002-.001.003-.003.012-.01.044-.038a31 31 0 0 1 .698-.567c.408-.322.96-.74 1.393-.987.314-.18.693-.314.996-.407V9.696C8.936 9.084 5.611 7.472 4.5 4c6.146 0 8.357 2.915 8.873 5.012.08.144.127.31.127.488z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(PlantIcon);
export default ForwardRef;