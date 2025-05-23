import * as React from "react";
function CallRingingIcon({
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
    d: "M3.477 6.387c-.288-1.199.217-2.305.955-3.044l.536-.535a4 4 0 0 1 5.656 0l.93.929a4 4 0 0 1 .648 4.805l-.055.097c-.365.641-.335 1.378.043 1.9.305.421.626.824.91 1.108.283.283.686.604 1.107.909.522.378 1.259.407 1.9.043l.097-.055a4 4 0 0 1 4.805.649l.93.928a4 4 0 0 1 0 5.657l-.536.536c-.739.738-1.845 1.243-3.044.955-1.837-.441-5.186-1.77-9.149-5.733s-5.292-7.312-5.733-9.15m2.37-1.63c-.388.387-.51.814-.426 1.162.353 1.47 1.494 4.493 5.203 8.202 3.71 3.71 6.734 4.85 8.202 5.204.35.083.776-.039 1.162-.425l.536-.536a2 2 0 0 0 0-2.828l-.929-.93a2 2 0 0 0-2.403-.324l-.096.055c-1.24.705-2.83.73-4.062-.161-.452-.327-.954-.72-1.349-1.115s-.788-.897-1.115-1.35c-.891-1.23-.866-2.821-.161-4.06l.054-.097a2 2 0 0 0-.324-2.403l-.929-.93a2 2 0 0 0-2.828 0z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.759 3.006A5.25 5.25 0 0 1 21.52 5.77c.263.614.404 1.272.415 1.937a5 5 0 0 1-.665 2.573 1 1 0 1 1-1.73-1.002q.104-.18.182-.376c.147-.365.22-.76.213-1.162a3.1 3.1 0 0 0-.254-1.184 3.25 3.25 0 0 0-1.71-1.71 3.1 3.1 0 0 0-1.183-.254 3 3 0 0 0-1.539.396 1 1 0 0 1-1.002-1.731q.305-.176.634-.309a5 5 0 0 1 1.939-.356c.665.011 1.323.153 1.938.415"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.37 6.207c-.299-.3-.662-.522-1.061-.659a3 3 0 0 0-1.24-.147c-.42.035-.83.151-1.212.335q-.33.158-.622.378a1 1 0 1 0 1.2 1.6q.139-.104.29-.176a1.5 1.5 0 0 1 .51-.144c.163-.014.306.006.427.047a.76.76 0 0 1 .294.18.76.76 0 0 1 .18.295c.042.12.062.264.048.426s-.06.337-.144.511a1.7 1.7 0 0 1-.177.29 1 1 0 0 0 1.6 1.2q.22-.293.379-.622c.184-.382.3-.793.335-1.212a3 3 0 0 0-.148-1.24 2.76 2.76 0 0 0-.659-1.062"
  }));
}
const ForwardRef = /*#__PURE__*/ React.forwardRef(CallRingingIcon);
export default ForwardRef;