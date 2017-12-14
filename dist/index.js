"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(props) {
  return _react2.default.createElement(
    "button",
    { className: "Button", onClick: props.onClick },
    props.title + props.name,
    _react2.default.createElement(
      "style",
      { jsx: true },
      "\n      .Button {\n        background-color: #007dff;\n        color: white;\n        padding: 4px 10px;\n        font-size: 14px;\n        border: none;\n        border-radius: 4px;\n      }\n    "
    )
  );
};

exports.Button = Button;