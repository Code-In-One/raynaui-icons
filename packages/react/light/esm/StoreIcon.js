import * as React from "react";
function StoreIcon({
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
    d: "m12.25 1.998-6.247.39a4 4 0 0 0-3.405 2.368l-.546 1.228a4 4 0 0 0 .455 4.025l.258.344.356 7.829A4 4 0 0 0 7.117 22h10.267a4 4 0 0 0 3.996-3.818l.349-7.685a3.3 3.3 0 0 0 .845-3.533l-.713-1.96a4 4 0 0 0-3.51-2.625zM5.12 18.091l-.304-6.662c.857.1 1.741-.098 2.489-.597l.104-.07a1.89 1.89 0 0 1 1.895-.117l1.157.579a4 4 0 0 0 3.578 0l1.158-.58a1.89 1.89 0 0 1 1.895.119l.104.069a3.7 3.7 0 0 0 2.488.597l-.303 6.662A2 2 0 0 1 17.385 20h-2.047l.202-2.426a3.3 3.3 0 1 0-6.578 0L9.164 20H7.117a2 2 0 0 1-1.998-1.91m13.185-8.923a1.7 1.7 0 0 0 1.89 0c.497-.331.703-.96.5-1.52l-.713-1.96a2 2 0 0 0-1.755-1.312l-5.977-.374-6.122.383a2 2 0 0 0-1.703 1.183L3.88 6.797a2 2 0 0 0 .228 2.012l.328.438c.552.3 1.23.274 1.76-.08L6.3 9.1a3.89 3.89 0 0 1 3.9-.243l1.157.579a2 2 0 0 0 1.789 0l1.157-.579a3.89 3.89 0 0 1 3.9.243zm-4.759 8.24L13.33 20h-2.16l-.216-2.592a1.3 1.3 0 1 1 2.592 0",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(StoreIcon);
export default ForwardRef;