"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _core = _interopRequireDefault(require("./core.js"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function A(props) {
  return (0, _core.default)`<h1 className=${props.className}>${props.name}</h1>`;
}

function _default(props) {
  return (0, _core.default)`<div ...${props}><${A} ...${props}/></div>`;
}