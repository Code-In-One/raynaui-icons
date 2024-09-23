import * as React from "react";
function EthIcon({
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
    fillRule: "evenodd",
    d: "m19.267 11.178-6.105 1.744c-.27.077-.555.077-.824 0l-6.105-1.744a1.5 1.5 0 0 1-.716-2.43l6.104-6.976a1.5 1.5 0 0 1 2.258 0l6.104 6.976a1.5 1.5 0 0 1-.716 2.43M7.54 9.472l5.209 1.488 5.209-1.488-5.21-5.953z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M13.958 22.047a1.5 1.5 0 0 1-2.416 0l-5.728-7.774c-.848-1.152.244-2.725 1.62-2.332l5.316 1.519 5.316-1.519c1.376-.393 2.468 1.18 1.62 2.332zm-5.664-7.78 4.456 6.047 4.456-6.047-4.044 1.155c-.27.077-.555.077-.824 0z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(EthIcon);
export default ForwardRef;