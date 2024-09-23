import * as React from "react";
function GlobeIcon({
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
    d: "M12.25 1c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11M4.41 11.302l-1.16.58a8.96 8.96 0 0 1 2-5.54V8.36zm2.84-6.786a9 9 0 0 1 13.991 7.08l-3.446 3.445-.49 4.406a9.003 9.003 0 0 1-13.831-5.441l2.617-1.308.376-1.318a2 2 0 0 0 1.077 2.135l2.246 1.123.235 3.52c.133 1.993 2.785 2.58 3.748.83l3.634-6.607a2 2 0 0 0 .125-1.653l-.84-2.288a2 2 0 0 0-2.222-1.281l-4.581.801a2 2 0 0 0-1.07.556l-1.795 1.796a2 2 0 0 0-.44.662L7.25 8.64zm12.455 11.443 1.072-1.072a9 9 0 0 1-1.215 2.362zm-9.02-3.11-2.247-1.123 1.796-1.795 4.58-.802.84 2.288-3.633 6.607-.235-3.519a2 2 0 0 0-1.101-1.656",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(GlobeIcon);
export default ForwardRef;