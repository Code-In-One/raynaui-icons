import * as React from "react";
function UserAddIcon({
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
    d: "M7.25 7a5 5 0 1 1 10 0 5 5 0 0 1-10 0m5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6M6.805 21.917C8.48 22.65 10.71 23 12.25 23s3.77-.35 5.445-1.083c.822-.36 1.657-.874 2.143-1.62a2.44 2.44 0 0 0 .412-1.369c-.005-.51-.173-1-.456-1.455C18.424 15.266 15.624 13 12.25 13s-6.175 2.266-7.544 4.473c-.283.455-.45.944-.456 1.455-.005.516.156.977.412 1.37.485.745 1.321 1.26 2.143 1.62M6.25 18.95c0-.073.024-.21.155-.422C7.528 16.718 9.765 15 12.25 15s4.723 1.718 5.845 3.527c.131.212.154.349.155.422a.45.45 0 0 1-.087.256c-.166.256-.57.574-1.27.88-1.37.6-3.316.915-4.643.915s-3.273-.315-4.643-.915c-.7-.306-1.103-.625-1.27-.88a.45.45 0 0 1-.087-.256",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21.25 3a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0V6h1a1 1 0 1 0 0-2h-1z"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(UserAddIcon);
export default ForwardRef;